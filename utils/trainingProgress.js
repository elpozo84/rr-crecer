import { createClient } from "./supabase/client";

export async function startTraining({
  stage,
  weightNumber,
  kg = 5,
}) {
  try {
    const supabase = createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return {
        authenticated: false,
        saved: false,
      };
    }

    const { data: currentProgress, error: readError } = await supabase
      .from("training_progress")
      .select("status, started_at, completed_at")
      .eq("user_id", user.id)
      .eq("stage", stage)
      .eq("weight_number", weightNumber)
      .maybeSingle();

    if (readError) {
      console.error("RR · CRECER · Error leyendo progreso:", readError);

      return {
        authenticated: true,
        saved: false,
      };
    }

    if (currentProgress?.status === "completed") {
      return {
        authenticated: true,
        saved: true,
        alreadyCompleted: true,
      };
    }

    const now = new Date().toISOString();

    const { error: saveError } = await supabase
      .from("training_progress")
      .upsert(
        {
          user_id: user.id,
          stage,
          weight_number: weightNumber,
          status: "started",
          kg,
          started_at: currentProgress?.started_at || now,
          completed_at: null,
          updated_at: now,
        },
        {
          onConflict: "user_id,stage,weight_number",
        }
      );

    if (saveError) {
      console.error("RR · CRECER · Error guardando inicio:", saveError);

      return {
        authenticated: true,
        saved: false,
      };
    }

    return {
      authenticated: true,
      saved: true,
      alreadyCompleted: false,
    };
  } catch (error) {
    console.error("RR · CRECER · Error inesperado:", error);

    return {
      authenticated: false,
      saved: false,
    };
  }
}

export async function completeTraining({
  stage,
  weightNumber,
  kg = 30,
}) {
  try {
    const supabase = createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return {
        authenticated: false,
        saved: false,
      };
    }

    const now = new Date().toISOString();

    const { data: currentProgress } = await supabase
      .from("training_progress")
      .select("started_at")
      .eq("user_id", user.id)
      .eq("stage", stage)
      .eq("weight_number", weightNumber)
      .maybeSingle();

    const { error: saveError } = await supabase
      .from("training_progress")
      .upsert(
        {
          user_id: user.id,
          stage,
          weight_number: weightNumber,
          status: "completed",
          kg,
          started_at: currentProgress?.started_at || now,
          completed_at: now,
          updated_at: now,
        },
        {
          onConflict: "user_id,stage,weight_number",
        }
      );

    if (saveError) {
      console.error(
        "RR · CRECER · Error completando entrenamiento:",
        saveError
      );

      return {
        authenticated: true,
        saved: false,
      };
    }

    return {
      authenticated: true,
      saved: true,
    };
  } catch (error) {
    console.error("RR · CRECER · Error inesperado:", error);

    return {
      authenticated: false,
      saved: false,
    };
  }
}
