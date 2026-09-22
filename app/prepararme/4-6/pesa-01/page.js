"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const emocionesDisponibles = [
  "Naturalidad",
  "Sorpresa",
  "Vergüenza",
  "Incomodidad",
  "Miedo a explicar demasiado",
  "No sé qué decir",
];

export default function Pesa01Descubrir46() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [emociones, setEmociones] = useState([]);
  const [preguntaDescubrir, setPreguntaDescubrir] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 11;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cambiarEmocion = (emocion) => {
    setEmociones((actuales) =>
      actuales.includes(emocion)
        ? actuales.filter((item) => item !== emocion)
        : [...actuales, emocion]
    );
  };

  return (
    <main className="trainingPage">
      <TrainingProgressTracker
        stage="4-6"
        weightNumber={1}
        startedKg={5}
        completedKg={10}
        completed={paso === 10}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/4-6" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 01 · CONOCER Y NOMBRAR EL CUERPO</small>
        </div>

        <div className="kg">{paso <= 7 ? "5 KG" : "10 KG"}</div>
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
              src="/4-6/pesa01.png"
              alt="Pesa 01 · Conocer y nombrar el cuerpo"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · UNA PREGUNTA COTIDIANA</span>
              <p>
                A esta edad comparar cuerpos puede ser simplemente una forma de
                intentar entender cómo son las personas.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 5 KG</span>

          <h1>«Papá, ¿por qué yo tengo pene y ella no?»</h1>

          <div className="scene">
            <p>
              Tu hijo acaba de darse cuenta de una diferencia corporal y te lo
              pregunta con total naturalidad.
            </p>

            <blockquote>
              —Papá, ¿por qué yo tengo pene y ella no?
            </blockquote>
          </div>

          <h2>¿Qué responderías ahora mismo?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder='Escribe lo que dirías de verdad. También vale: "No sé cómo explicárselo".'
          />

          <div className="criterionReminder">
            <span>NO BUSQUES LA FRASE PERFECTA</span>
            <p>
              Guardamos tu respuesta inicial para poder comprobar después qué ha
              cambiado en tu forma de construirla.
            </p>
          </div>

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

          <h1>La pregunta es sencilla. Tu reacción puede no serlo.</h1>

          <p className="trainingLead">
            Antes de decidir qué enseñar, observa qué ha ocurrido dentro de ti.
          </p>

          <h2>¿Qué has notado?</h2>

          <div className="choiceList">
            {emocionesDisponibles.map((emocion) => (
              <button
                type="button"
                key={emocion}
                className={emociones.includes(emocion) ? "selectedChoice" : ""}
                onClick={() => cambiarEmocion(emocion)}
              >
                {emociones.includes(emocion) ? "✓ " : ""}
                {emocion}
              </button>
            ))}
          </div>

          <div className="criterionReminder">
            <span>VENTANA RR</span>
            <p>
              Sentir incomodidad no significa que la pregunta sea inadecuada.
              Solo significa que necesitas separar tu reacción de lo que el niño
              necesita aprender.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={emociones.length === 0}
          >
            SEPARAR HECHO E HISTORIA →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>

          <h1>No conviertas una pregunta corporal en algo que todavía no es.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>Tu hijo ha observado una diferencia corporal y ha preguntado por ella.</p>
            </div>

            <div>
              <span>HISTORIAS QUE PUEDE AÑADIR EL ADULTO</span>
              <p>
                «Es demasiado pequeño para preguntar eso», «si respondo voy a
                hablarle de sexo» o «¿dónde habrá aprendido estas cosas?».
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Una pregunta sobre el cuerpo
              <strong> no necesita convertirse automáticamente en una conversación sexual.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR QUÉ QUIERE SABER →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">DESCUBRIR ANTES DE EXPLICAR</span>

          <h1>Puede que necesite mucho menos de lo que imaginas.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES PREGUNTAR</span>
              <p>«¿Qué diferencia has visto?»</p>
            </div>

            <div>
              <span>O</span>
              <p>«¿Qué es lo que te ha llamado la atención?»</p>
            </div>

            <div>
              <span>O</span>
              <p>«¿Qué quieres saber exactamente?»</p>
            </div>
          </div>

          <h2>Construye una pregunta con tus propias palabras.</h2>

          <textarea
            value={preguntaDescubrir}
            onChange={(e) => setPreguntaDescubrir(e.target.value)}
            placeholder="¿Qué le preguntarías antes de explicarle?"
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
          <span className="trainingTag">LA RESPUESTA DEL NIÑO</span>

          <h1>Ahora sabes mejor qué estaba preguntando.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{preguntaDescubrir}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Es que yo tengo esto y mi prima no. ¿Todas las niñas son así?
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ya no necesitas imaginar una gran conversación. Está intentando
            comprender una diferencia entre cuerpos.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            RESPONDER CON VERDAD SENCILLA →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">VERDAD SENCILLA</span>

          <h1>Nombrar el cuerpo no lo convierte en algo malo.</h1>

          <div className="conversation">
            <div>
              <span>UNA RESPUESTA POSIBLE</span>
              <p>
                «Los cuerpos no son todos iguales. Tú tienes pene y muchas niñas
                tienen vulva. Son partes del cuerpo y podemos llamarlas por su nombre.»
              </p>
            </div>

            <div>
              <span>Y PUEDES ABRIR</span>
              <p>«¿Era eso lo que querías saber?»</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>LAS FRASES SON MULETAS</span>
            <p>
              No tienes que memorizar esta respuesta. Quédate con la estructura:
              nombre claro, explicación breve y espacio para otra pregunta.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            AÑADIR UN CRITERIO IMPORTANTE →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CUERPO + INTIMIDAD</span>

          <h1>Naturalidad no significa que los límites desaparezcan.</h1>

          <div className="factStory">
            <div>
              <span>NATURALIDAD</span>
              <p>
                Podemos nombrar el cuerpo sin reírnos, enfadarnos ni convertirlo
                en algo prohibido.
              </p>
            </div>

            <div>
              <span>INTIMIDAD</span>
              <p>
                Algunas partes del cuerpo son privadas y aprendemos a respetar
                nuestra intimidad y la de los demás.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>DOS IDEAS PUEDEN SER VERDAD A LA VEZ</span>
            <blockquote>
              El cuerpo es normal
              <strong> y la intimidad también importa.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            CONSTRUIR MI RESPUESTA →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN GUIADA · 5 KG</span>

          <h1>Vuelve ahora a la pregunta original.</h1>

          <div className="conversation">
            <div>
              <span>1 · RECIBE</span>
              <p>No conviertas la pregunta en algo vergonzoso.</p>
            </div>

            <div>
              <span>2 · DESCUBRE</span>
              <p>Averigua qué ha observado y qué quiere saber.</p>
            </div>

            <div>
              <span>3 · NOMBRA</span>
              <p>Usa palabras corporales claras y comprensibles.</p>
            </div>

            <div>
              <span>4 · AJUSTA</span>
              <p>No expliques más de lo que la pregunta necesita.</p>
            </div>

            <div>
              <span>5 · ABRE</span>
              <p>Haz posible que vuelva a preguntarte.</p>
            </div>
          </div>

          <h2>¿Qué responderías ahora?</h2>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye ahora tu respuesta con tus propias palabras..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaFinal.trim()}
          >
            COMPARAR →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>

          <h1>No compares frases. Compara capacidades.</h1>

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

          <div className="conversation">
            <div>
              <span>AHORA PUEDES</span>
              <p>Separar una pregunta corporal de tus propias historias.</p>
            </div>

            <div>
              <span>AHORA PUEDES</span>
              <p>Descubrir antes de explicar.</p>
            </div>

            <div>
              <span>AHORA PUEDES</span>
              <p>Nombrar el cuerpo con naturalidad y mantener la intimidad.</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            QUITAR AYUDA · 10 KG →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 10 KG</span>

          <h1>La pregunta cambia. El criterio viaja contigo.</h1>

          <div className="scene">
            <blockquote>
              —Mamá, ¿por qué el pecho de la abuela es diferente al tuyo?
            </blockquote>
          </div>

          <p className="trainingLead">
            Esta vez RR no te da los pasos. Construye una respuesta que mantenga
            curiosidad, naturalidad, verdad sencilla y respeto.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Qué responderías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!transferencia.trim()}
          >
            TERMINAR PESA 01 →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 01 · COMPLETADA</span>

          <div className="finishMark">10</div>

          <h1>No has aprendido una respuesta.</h1>
          <h2>Has empezado a aprender cómo construirla.</h2>

          <div className="lesson">
            <span>TU MAPA RR · PESA 01</span>
            <blockquote>
              NOTO → SEPARO HECHO/HISTORIA → DESCUBRO → NOMBRO → AJUSTO →
              <strong> DEJO LA PUERTA ABIERTA.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>LO QUE ESTÁS EDUCANDO</span>
            <p>
              Un cuerpo que puede nombrarse, una curiosidad que puede expresarse
              y una relación en la que preguntar no se convierte en motivo de
              vergüenza.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 02 · NO QUIERO DARLE UN BESO</strong>
            <p>
              La siguiente Pesa cambia de pregunta: pasamos de conocer el cuerpo
              a descubrir que el propio cuerpo también puede poner límites.
            </p>
          </div>

          <Link href="/prepararme/4-6/pesa-02" className="trainingButton linkButton">
            IR A PESA 02 →
          </Link>

          <Link href="/prepararme/4-6" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
