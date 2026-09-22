"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../utils/supabase/client";

export default function AccesoPage() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      if (mode === "register") {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/acceso`,
          },
        });

        if (signUpError) {
          throw signUpError;
        }

        if (data.session) {
          router.push("/prepararme");
          router.refresh();
          return;
        }

        setMessage(
          "Cuenta creada. Revisa tu correo para confirmar el acceso a RR · CRECER."
        );
      } else {
        const { error: signInError } =
          await supabase.auth.signInWithPassword({
            email,
            password,
          });

        if (signInError) {
          throw signInError;
        }

        router.push("/prepararme");
        router.refresh();
      }
    } catch (err) {
      setError(
        err?.message ||
          "No hemos podido completar el acceso. Inténtalo de nuevo."
      );
    } finally {
      setLoading(false);
    }
  }

  function changeMode(nextMode) {
    setMode(nextMode);
    setMessage("");
    setError("");
  }

  return (
    <main className="accessPage">
      <header className="accessHeader">
        <Link href="/" className="brand" aria-label="RR Crecer, inicio">
          <span className="mark">RR</span>

          <span>
            <strong>CRECER</strong>
            <small>MÉTODO RUIZ RIVAS</small>
          </span>
        </Link>

        <Link href="/" className="accessBack">
          ← VOLVER
        </Link>
      </header>

      <section className="accessShell">
        <div className="accessIntro">
          <div className="sectionTag">TU GIMNASIO RR</div>

          <h1>
            Entrena hoy.
            <span> Continúa mañana.</span>
          </h1>

          <p>
            Puedes utilizar RR · CRECER sin tener todas las respuestas.
            Tu cuenta sirve para recordar por dónde vas y continuar tu
            entrenamiento cuando vuelvas.
          </p>

          <div className="accessPromise">
            <span>RR</span>

            <div>
              <strong>Guardamos tu progreso, no tus conversaciones.</strong>
              <p>
                Las respuestas que escribas durante las Pesas no se guardarán
                automáticamente en tu cuenta.
              </p>
            </div>
          </div>

          <div className="accessPoints">
            <div>
              <span>01</span>
              <p>
                <strong>Continúa donde lo dejaste.</strong>
                <small>Recordaremos la última Pesa que entrenaste.</small>
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                <strong>Observa lo que has entrenado.</strong>
                <small>
                  Etapas, Pesas y criterios que ya has trabajado.
                </small>
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                <strong>Sin notas ni puntuaciones.</strong>
                <small>
                  Progreso significa entrenamiento realizado, no juzgar cómo
                  educas.
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="accessCard">
          <div className="accessCardTop">
            <span>RR · CRECER</span>
            <b>{mode === "login" ? "ENTRAR" : "CREAR CUENTA"}</b>
          </div>

          <div className="accessTabs">
            <button
              type="button"
              className={mode === "login" ? "active" : ""}
              onClick={() => changeMode("login")}
            >
              ENTRAR
            </button>

            <button
              type="button"
              className={mode === "register" ? "active" : ""}
              onClick={() => changeMode("register")}
            >
              CREAR CUENTA
            </button>
          </div>

          <div className="accessCardCopy">
            <h2>
              {mode === "login"
                ? "Vuelve a tu gimnasio."
                : "Crea tu gimnasio."}
            </h2>

            <p>
              {mode === "login"
                ? "Accede para recuperar tu progreso y continuar entrenando."
                : "Tu cuenta permitirá guardar las Pesas que completas y continuar desde cualquier dispositivo."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="accessForm">
            <label>
              <span>CORREO ELECTRÓNICO</span>

              <input
                type="email"
                autoComplete="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <label>
              <span>CONTRASEÑA</span>

              <input
                type="password"
                autoComplete={
                  mode === "login" ? "current-password" : "new-password"
                }
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                minLength={6}
                required
              />
            </label>

            {error && (
              <div className="accessMessage accessError">
                <strong>NO SE HA PODIDO COMPLETAR</strong>
                <p>{error}</p>
              </div>
            )}

            {message && (
              <div className="accessMessage accessSuccess">
                <strong>CUENTA CREADA</strong>
                <p>{message}</p>
              </div>
            )}

            <button
              type="submit"
              className="accessSubmit"
              disabled={loading}
            >
              <span>
                {loading
                  ? "UN MOMENTO..."
                  : mode === "login"
                    ? "ENTRAR EN MI GIMNASIO"
                    : "CREAR MI CUENTA"}
              </span>

              <b>→</b>
            </button>
          </form>

          <div className="accessDivider">
            <span />
            <small>RR</small>
            <span />
          </div>

          <p className="accessPrivacy">
            RR · CRECER utilizará tu cuenta para identificar y recuperar tu
            progreso de entrenamiento.
          </p>

          <Link href="/prepararme" className="accessWithoutAccount">
            CONTINUAR SIN CUENTA →
          </Link>
        </div>
      </section>

      <footer className="accessFooter">
        <strong>RR · CRECER</strong>
        <span>Un proyecto del Método Ruiz Rivas</span>
      </footer>
    </main>
  );
}
