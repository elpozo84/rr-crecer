"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const emociones = [
  "Quiero tranquilizarle rápido",
  "Me preocupa que se acompleje",
  "No sé cuánto explicar",
  "Me sale bromear",
  "Quiero saber exactamente qué le preocupa",
];

export default function Pesa01Prepararse1012() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [emocion, setEmocion] = useState("");
  const [pensamiento, setPensamiento] = useState("");
  const [preguntaDescubrir, setPreguntaDescubrir] = useState("");
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
        weightNumber={1}
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
          <small>PESA 01 · PUBERTAD Y CAMBIO</small>
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
            <img src="/10-12/pesa01.png" alt="Pesa 01 · Mi cuerpo está cambiando" />
            <div className="trainingVisualCaption">
              <span>SPOT RR · PUBERTAD Y CAMBIO</span>
              <p>
                Cuando el cuerpo empieza a cambiar, una frase pequeña puede
                esconder vergüenza, comparación, curiosidad o simplemente una
                necesidad de entender.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 10 KG</span>
          <h1>«Mi cuerpo está cambiando.»</h1>

          <div className="scene">
            <p>Tu hijo te dice un día:</p>
            <blockquote>
              —Últimamente huelo diferente cuando sudo. ¿Me pasa algo?
            </blockquote>
          </div>

          <h2>¿Qué le responderías ahora mismo?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe tu respuesta real..."
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
          <h1>¿Qué se activa en ti?</h1>

          <div className="choiceList">
            {emociones.map((item) => (
              <button
                type="button"
                key={item}
                className={emocion === item ? "selectedChoice" : ""}
                onClick={() => setEmocion(item)}
              >
                {emocion === item ? "✓ " : ""}
                {item}
              </button>
            ))}
          </div>

          <h2>¿Qué pensamiento aparece?</h2>

          <textarea
            value={pensamiento}
            onChange={(e) => setPensamiento(e.target.value)}
            placeholder="Ej.: «No quiero que piense que hay algo raro en él»..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!emocion || !pensamiento.trim()}
          >
            HECHO ≠ HISTORIA →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>
          <h1>No conviertas un cambio en un problema antes de saberlo.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Ha notado que su olor corporal ha cambiado y te pregunta si le
                pasa algo.
              </p>
            </div>

            <div>
              <span>HISTORIA POSIBLE DEL ADULTO</span>
              <p>
                «Está acomplejado», «se están metiendo con él», «ya tengo que
                explicarle toda la pubertad» o «esto le preocupa muchísimo».
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              El cambio corporal es el hecho.
              <strong> Lo que significa para él todavía tienes que descubrirlo.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            ABRIR VENTANA RR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>Antes de explicar, descubre qué necesita.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES ABRIR CON</span>
              <p>«¿Qué has notado exactamente?»</p>
            </div>
            <div>
              <span>O</span>
              <p>«¿Te preocupa o solo te ha llamado la atención?»</p>
            </div>
            <div>
              <span>O</span>
              <p>«¿Ha pasado algo que te haya hecho pensar en esto?»</p>
            </div>
          </div>

          <textarea
            value={preguntaDescubrir}
            onChange={(e) => setPreguntaDescubrir(e.target.value)}
            placeholder="Construye tu pregunta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(4)}
            disabled={!preguntaDescubrir.trim()}
          >
            ESCUCHAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">AHORA APARECE LA NECESIDAD</span>
          <h1>La pregunta no era solo sobre sudor.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{preguntaDescubrir}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Es que en Educación Física un compañero dijo que olía mal y
                todos se rieron.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ahora sabes que hay dos capas: un cambio corporal normal que necesita
            explicación y una experiencia social que necesita ser escuchada.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            RESPONDER A LAS DOS CAPAS →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">NORMALIZAR SIN MINIMIZAR</span>
          <h1>«Es normal» puede ayudar. Pero no siempre basta.</h1>

          <div className="comparison">
            <div>
              <span>SE QUEDA CORTO</span>
              <p>«Eso es normal, no le des importancia.»</p>
            </div>

            <div>
              <span>AÑADE CRITERIO</span>
              <p>
                «Durante la pubertad el cuerpo empieza a cambiar y también puede
                cambiar el olor del sudor. No significa que haya nada malo en
                ti.»
              </p>
              <p>
                «Y entiendo que no te gustara que se rieran. ¿Quieres contarme
                qué pasó después?»
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>DOS CAPAS</span>
            <p>
              Explica el cuerpo sin ignorar la experiencia. Escucha la
              experiencia sin convertir el cuerpo en un defecto.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            DAR HERRAMIENTAS →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">INFORMACIÓN QUE SIRVE</span>
          <h1>Prepararse también es aprender a cuidar un cuerpo que cambia.</h1>

          <div className="conversation">
            <div>
              <span>CAMBIO</span>
              <p>
                La pubertad puede traer cambios en el sudor, la piel, el pelo,
                la voz, el crecimiento y otras partes del cuerpo.
              </p>
            </div>
            <div>
              <span>CUIDADO</span>
              <p>
                La higiene, la ropa limpia y otros cuidados cotidianos pueden
                necesitar ajustarse a medida que el cuerpo cambia.
              </p>
            </div>
            <div>
              <span>RITMO</span>
              <p>
                No todos los cambios aparecen al mismo tiempo ni de la misma
                manera en todas las personas.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>OBJETIVO</span>
            <blockquote>
              Que pueda pensar:
              <strong> «Mi cuerpo está cambiando y puedo aprender a cuidarlo.»</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            CONSTRUIR MI RESPUESTA →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 10 KG</span>
          <h1>Vuelve al SPOT.</h1>

          <div className="scene">
            <blockquote>
              —Últimamente huelo diferente cuando sudo. ¿Me pasa algo?
            </blockquote>
          </div>

          <p className="trainingLead">
            Construye una respuesta que explique sin avergonzar, descubra si hay
            algo más y deje espacio para seguir hablando.
          </p>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Tu nueva respuesta..."
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
          <h1>Misma pregunta. Más criterio.</h1>

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
              NO SUPONGO → DESCUBRO → NORMALIZO → EXPLICO →
              <strong> ACOMPAÑO LO QUE SIGNIFICA PARA ÉL.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 10 KG</span>
          <h1>El cambio ahora es otro.</h1>

          <div className="scene">
            <blockquote>
              —Me está saliendo pelo y a mis amigos todavía no. ¿Es normal?
            </blockquote>
          </div>

          <p className="trainingLead">
            No copies la respuesta anterior. Usa el proceso: descubre qué le
            preocupa, explica lo necesario y evita convertir la comparación en
            una carrera.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cómo responderías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!transferencia.trim()}
          >
            VER EL MAPA →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · PUBERTAD</span>
          <h1>No necesitas anticipar todos los cambios.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RECIBO → SEPARO HECHO/HISTORIA → DESCUBRO QUÉ LE PREOCUPA →
              EXPLICO EL CAMBIO → DOY HERRAMIENTAS →
              <strong> DEJO LA PUERTA ABIERTA.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>PREPARARSE</span>
            <p>
              La pubertad no necesita una única «gran charla». Puede construirse
              mediante muchas conversaciones pequeñas cuando aparecen preguntas
              reales.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 01 · COMPLETADA</span>

          <div className="finishMark">10</div>

          <h1>Un cuerpo que cambia no necesita vergüenza.</h1>
          <h2>Necesita lenguaje, contexto y cuidado.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              No respondas únicamente al cambio corporal que escuchas. Descubre
              también qué significado ha adquirido para tu hijo.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 02 · «SOY EL ÚNICO AL QUE NO LE HA PASADO»</strong>
            <p>
              El siguiente SPOT introduce comparación: cuando el ritmo del
              propio cuerpo empieza a medirse contra el de los demás.
            </p>
          </div>

          <Link
            href="/prepararme/10-12/pesa-02"
            className="trainingButton linkButton"
          >
            IR A PESA 02 →
          </Link>

          <Link href="/prepararme/10-12" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
