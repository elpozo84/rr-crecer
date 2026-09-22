"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Quiero tranquilizarle enseguida",
  "Me preocupa que se sienta inferior",
  "Me sale decirle que ya le llegará",
  "Quiero saber con quién se está comparando",
  "No sé si debo explicar más sobre la pubertad",
];

export default function Pesa02Prepararse1012() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 12;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <TrainingProgressTracker
        stage="10-12"
        weightNumber={2}
        startedKg={10}
        completedKg={10}
        completed={paso === 11}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/10-12" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 02 · COMPARACIÓN Y RITMOS</small>
        </div>

        <div className="kg">10 KG</div>
      </header>

      <div className="trainingProgress">
        <div
          className="trainingProgressFill"
          style={{
            width: `${Math.min(((paso + 1) / totalPasos) * 100, 100)}%`,
          }}
        />
      </div>

      {paso === 0 && (
        <section className="trainingScreen">
          <div className="trainingVisual">
            <img
              src="/10-12/pesa02.png"
              alt="Pesa 02 · Soy el único al que no le ha pasado"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · COMPARACIÓN</span>
              <p>
                Cuando el cuerpo de los demás se convierte en la medida del
                propio, tranquilizar demasiado rápido puede dejar intacta la
                preocupación.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 10 KG</span>
          <h1>«Soy el único al que no le ha pasado.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —A casi todos mis amigos les está cambiando la voz. A mí no. Soy
              el único.
            </blockquote>
          </div>

          <h2>¿Qué responderías ahora mismo?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe lo que realmente le dirías..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(1)}
            disabled={!respuestaInicial.trim()}
          >
            EMPEZAR A ENTRENAR →
          </button>
        </section>
      )}

      {paso === 1 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRIMERO TÚ</span>
          <h1>¿Qué te provoca escuchar «soy el único»?</h1>

          <div className="choiceList">
            {reacciones.map((item) => (
              <button
                type="button"
                key={item}
                className={reaccion === item ? "selectedChoice" : ""}
                onClick={() => setReaccion(item)}
              >
                {reaccion === item ? "✓ " : ""}
                {item}
              </button>
            ))}
          </div>

          <h2>¿Qué historia empieza a construir tu cabeza?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Se está quedando atrás», «se va a acomplejar»..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!reaccion || !historia.trim()}
          >
            SEPARAR HECHO E HISTORIA →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>
          <h1>«Más tarde que otros» no significa «mal».</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Ha observado que a varios amigos les está cambiando la voz y a
                él todavía no.
              </p>
            </div>

            <div>
              <span>HISTORIA POSIBLE</span>
              <p>
                «Voy tarde», «hay algo raro en mí», «soy menos maduro» o «todos
                avanzan menos yo».
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              La comparación describe una diferencia.
              <strong> No determina por sí sola que exista un problema.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR QUÉ SIGNIFICA PARA ÉL →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>No respondas todavía a una preocupación que no conoces.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES PREGUNTAR</span>
              <p>«¿Te preocupa que todavía no te haya cambiado?»</p>
            </div>
            <div>
              <span>O</span>
              <p>«¿Qué piensas que significa que a ellos sí y a ti no?»</p>
            </div>
            <div>
              <span>O</span>
              <p>«¿Alguien te ha dicho algo sobre eso?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye tu propia pregunta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(4)}
            disabled={!pregunta.trim()}
          >
            ESCUCHAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">APARECE LA CAPA REAL</span>
          <h1>No quería una clase sobre la voz.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Dicen que los que ya tienen voz grave parecen mayores. Yo sigo
                pareciendo un niño.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            El SPOT ha cambiado. La voz era la puerta. Lo que le preocupa es lo
            que cree que ese cambio dice sobre su madurez y su lugar dentro del
            grupo.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            DESMONTAR LA CARRERA →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">RITMOS DIFERENTES</span>
          <h1>La pubertad no tiene una clasificación.</h1>

          <div className="comparison">
            <div>
              <span>TRANQUILIZA, PERO NO ENSEÑA</span>
              <p>«No te preocupes, ya te cambiará.»</p>
            </div>

            <div>
              <span>CONSTRUYE CRITERIO</span>
              <p>
                «Que a algunos les cambie antes la voz no significa que sean más
                mayores en todo ni que tú estés haciendo algo mal.»
              </p>
              <p>
                «Los cambios de la pubertad no empiezan todos a la vez ni siguen
                exactamente el mismo orden en cada persona.»
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>IDEA CLAVE</span>
            <p>
              Diferente momento no significa diferente valor. Un cambio visible
              tampoco mide por sí solo la madurez de una persona.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            ENTRENAR LA COMPARACIÓN →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRADUCTOR RR</span>
          <h1>Traduce «voy tarde».</h1>

          <div className="conversation">
            <div>
              <span>LO QUE DICE</span>
              <p>«Soy el único.»</p>
            </div>
            <div>
              <span>PODRÍA ESTAR SINTIENDO</span>
              <p>«No quiero ser diferente.»</p>
            </div>
            <div>
              <span>PODRÍA ESTAR PENSANDO</span>
              <p>«Si cambio después, valgo menos o pertenezco menos.»</p>
            </div>
            <div>
              <span>LO QUE NECESITA APRENDER</span>
              <p>
                «Puedo observar diferencias sin convertirlas automáticamente en
                defectos.»
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            CONSTRUIR MI RESPUESTA →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 10 KG</span>
          <h1>Ahora responde al problema completo.</h1>

          <div className="scene">
            <blockquote>
              —A casi todos mis amigos les está cambiando la voz. A mí no. Soy
              el único.
            </blockquote>
          </div>

          <p className="trainingLead">
            Tu respuesta puede reconocer cómo se siente, explicar los ritmos
            diferentes y separar un cambio corporal de la idea de «ser más o
            menos mayor».
          </p>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye tu respuesta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaFinal.trim()}
          >
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>De tranquilizar a enseñar criterio.</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>DESPUÉS</span>
              <p>{respuestaFinal}</p>
            </div>
          </div>

          <div className="lesson">
            <span>CAPACIDAD ENTRENADA</span>
            <blockquote>
              VEO LA DIFERENCIA → DESCUBRO SU SIGNIFICADO → DOY CONTEXTO →
              <strong> EVITO CONVERTIR EL DESARROLLO EN UNA CARRERA.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · MENOS AYUDA</span>
          <h1>Cambia el cuerpo. El criterio permanece.</h1>

          <div className="scene">
            <blockquote>
              —Todos son más altos que yo. Seguro que voy a ser bajito siempre.
            </blockquote>
          </div>

          <p className="trainingLead">
            No necesitas repetir el ejemplo de la voz. Identifica qué es hecho,
            qué es predicción y qué significado está dando a la comparación.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="Construye tu respuesta sin copiar la anterior..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!transferencia.trim()}
          >
            VER MAPA RR →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · COMPARACIÓN</span>
          <h1>El objetivo no es conseguir que deje de comparar.</h1>

          <p className="trainingLead">
            Compararse aparecerá muchas veces. El entrenamiento consiste en que
            una diferencia observable no se convierta automáticamente en una
            conclusión sobre su valor.
          </p>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              ESCUCHO LA COMPARACIÓN → SEPARO HECHO/HISTORIA → DESCUBRO QUÉ
              SIGNIFICA → DOY CONTEXTO →
              <strong> DEVUELVO EL FOCO A SU PROPIO PROCESO.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 02 · COMPLETADA</span>

          <div className="finishMark">10</div>

          <h1>Diferente ritmo no significa ir perdiendo.</h1>
          <h2>El desarrollo no es una competición.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Cuando diga «todos menos yo», no corras únicamente a
              tranquilizarle. Descubre primero qué cree que esa diferencia dice
              sobre él.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 03 · «CREO QUE ME GUSTA ALGUIEN»</strong>
            <p>
              En la siguiente Pesa aparece una confidencia. El reto ya no será
              explicar un cuerpo, sino acompañar una emoción sin apropiarte de
              ella.
            </p>
          </div>

          <Link
            href="/prepararme/10-12/pesa-03"
            className="trainingButton linkButton"
          >
            IR A PESA 03 →
          </Link>

          <Link href="/prepararme/10-12" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
