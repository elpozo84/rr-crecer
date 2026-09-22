"use client";

import { useEffect, useRef } from "react";
import { startTraining, completeTraining } from "../utils/trainingProgress";

export default function TrainingProgressTracker({
  stage,
  weightNumber,
  startedKg = 5,
  completedKg = 30,
  completed = false,
}) {
  const completionSent = useRef(false);

  useEffect(() => {
    startTraining({
      stage,
      weightNumber,
      kg: startedKg,
    });
  }, [stage, weightNumber, startedKg]);

  useEffect(() => {
    if (!completed || completionSent.current) return;

    completionSent.current = true;

    completeTraining({
      stage,
      weightNumber,
      kg: completedKg,
    });
  }, [completed, stage, weightNumber, completedKg]);

  return null;
}
