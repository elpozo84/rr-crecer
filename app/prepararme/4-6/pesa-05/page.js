"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Le digo que eso no se pregunta",
  "Le digo que no mire",
  "Le explico que cada cuerpo es privado",
  "Le pregunto qué quiere saber",
  "No sé cómo responder sin darle vergüenza",
];

export default function Pesa05Descubrir46() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
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
      <header className="trainingHeader">
        <Link href="/prepararme/4-6" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 05 · CURIOSIDAD Y PERMISO</small>
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
            <img src="/4-6/pesa05.png" alt="Pesa 05 · Curiosidad y permiso" />
            <div className="trainingVisualCaption">
              <span>SPOT RR · QUIERO VERLO</span>
              <p>
                La curiosidad por las diferencias corporales puede aparecer con
                naturalidad. Esta Pesa entrena qué hacer cuando esa curiosidad
                alcanza el cuerpo de otra persona.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 10 KG</span>

          <h1>«Quiero verlo.»</h1>

          <div className="scene">
            <p>
              Tu hijo te cuenta que otro niño le ha dicho que su cuerpo es
              diferente.
            </p>
            <blockquote>
              —Quiero que me enseñe lo que tiene para verlo.
            </blockquote>
          </div>

          <h2>¿Qué le responderías?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe lo que dirías de verdad..."
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
          <h1>¿Qué reacción aparece primero?</h1>

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

          <div className="criterionReminder">
            <span>VENTANA RR</span>
            <p>
              No necesitamos castigar la curiosidad para enseñar un límite.
              Podemos reconocer la pregunta y, a la vez, introducir respeto por
              la intimidad de otra persona.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!reaccion}
          >
            SEPARAR CURIOSIDAD Y PERMISO →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">DOS COSAS DISTINTAS</span>
          <h1>Querer saber no da derecho a acceder.</h1>

          <div className="factStory">
            <div>
              <span>CURIOSIDAD</span>
              <p>
                «Quiero saber cómo es», «¿por qué es diferente?» o «quiero
                entenderlo».
              </p>
            </div>

            <div>
              <span>PERMISO</span>
              <p>
                El cuerpo de otra persona sigue siendo suyo aunque yo tenga una
                pregunta sobre él.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Puedo tener curiosidad.
              <strong> La curiosidad no convierte otro cuerpo en disponible.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR LA PREGUNTA →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">DESCUBRIR ANTES DE CORREGIR</span>
          <h1>Quizá puedas responder sin que necesite verlo.</h1>

          <div className="conversation">
            <div><span>PUEDES PREGUNTAR</span><p>«¿Qué quieres saber?»</p></div>
            <div><span>O</span><p>«¿Qué te ha dicho que es diferente?»</p></div>
            <div><span>O</span><p>«¿Hay algo que no entiendes y quieres preguntarme?»</p></div>
          </div>

          <h2>Construye tu pregunta.</h2>

          <textarea
            value={preguntaDescubrir}
            onChange={(e) => setPreguntaDescubrir(e.target.value)}
            placeholder="¿Cómo descubrirías qué quiere saber?"
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
          <span className="trainingTag">AHORA SABES MÁS</span>
          <h1>La curiosidad tenía una pregunta detrás.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{preguntaDescubrir}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Dice que él tiene una cosa distinta y quería saber si todos los
                niños somos iguales.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ahora puedes responder a la pregunta sin utilizar el cuerpo del otro
            niño como demostración.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            RESPONDER SIN INVADIR →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">RESPONDER + PONER CRITERIO</span>
          <h1>La información y el límite pueden ir juntos.</h1>

          <div className="conversation">
            <div>
              <span>RESPONDER</span>
              <p>
                «Los cuerpos pueden parecerse y también tener diferencias. Si
                tienes una pregunta, puedes preguntármela.»
              </p>
            </div>

            <div>
              <span>AÑADIR CRITERIO</span>
              <p>
                «No necesitamos que otra persona nos enseñe sus partes privadas
                para aprender sobre el cuerpo.»
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>UNA IDEA POTENTE</span>
            <p>
              Si la curiosidad puede encontrar respuestas seguras, disminuye la
              necesidad de resolverla invadiendo la intimidad de otra persona.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            VER LAS DOS DIRECCIONES →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">YO Y LOS DEMÁS</span>
          <h1>El mismo criterio también protege su cuerpo.</h1>

          <div className="factStory">
            <div>
              <span>OTRO CUERPO</span>
              <p>
                Mi curiosidad no obliga a otra persona a enseñar, dejar mirar o
                dejar tocar.
              </p>
            </div>

            <div>
              <span>MI CUERPO</span>
              <p>
                La curiosidad de otra persona tampoco me obliga a enseñar, dejar
                mirar o dejar tocar.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RECÍPROCO</span>
            <blockquote>
              No necesito disponer de tu cuerpo para resolver mi curiosidad.
              <strong> Tú tampoco necesitas disponer del mío.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            BANCO DE LENGUAJE →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">BANCO DE LENGUAJE</span>
          <h1>Frases que no castigan la pregunta.</h1>

          <div className="conversation">
            <div><span>RECONOCER</span><p>«Entiendo que tengas curiosidad.»</p></div>
            <div><span>DESCUBRIR</span><p>«¿Qué quieres saber exactamente?»</p></div>
            <div><span>LÍMITE</span><p>«No necesitamos que te lo enseñe.»</p></div>
            <div><span>RECIPROCIDAD</span><p>«Y tú tampoco tienes que enseñar tu cuerpo porque alguien quiera verlo.»</p></div>
            <div><span>ABRIR</span><p>«Si tienes dudas sobre el cuerpo, puedes preguntarme.»</p></div>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            CONSTRUIR MI RESPUESTA →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 10 KG</span>
          <h1>Vuelve a «quiero verlo».</h1>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye tu respuesta con tus propias palabras..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(9)}
            disabled={!respuestaFinal.trim()}
          >
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>De prohibir la curiosidad a darle un camino.</h1>

          <div className="comparison">
            <div><span>ANTES</span><p>{respuestaInicial}</p></div>
            <div><span>DESPUÉS</span><p>{respuestaFinal}</p></div>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 10 KG</span>
          <h1>Ahora la petición viene del otro lado.</h1>

          <div className="scene">
            <p>Tu hijo te cuenta:</p>
            <blockquote>
              —Un niño me ha dicho: «enséñame lo que tienes».
            </blockquote>
          </div>

          <p className="trainingLead">
            No te damos una frase. Usa el criterio que acabas de entrenar para
            construir una respuesta que le ayude a entender qué puede hacer.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Qué le dirías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(11)}
            disabled={!transferencia.trim()}
          >
            TERMINAR PESA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 05 · COMPLETADA</span>

          <div className="finishMark">10</div>

          <h1>Curiosidad no significa permiso.</h1>

          <div className="lesson">
            <span>TU MAPA RR</span>
            <blockquote>
              RECONOZCO CURIOSIDAD → DESCUBRO LA PREGUNTA → RESPONDO →
              MARCO EL LÍMITE →
              <strong> APLICO EL MISMO RESPETO EN LAS DOS DIRECCIONES.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>LO QUE SE ESTÁ CONSTRUYENDO</span>
            <p>
              Puede hacer preguntas sobre el cuerpo sin aprender que necesita
              acceder al cuerpo de otra persona para resolverlas.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 06 · NO SE LO DIGAS A MAMÁ</strong>
            <p>
              Ahora aparece un criterio nuevo: qué hacer cuando otra persona
              introduce un secreto.
            </p>
          </div>

          <Link href="/prepararme/4-6/pesa-06" className="trainingButton linkButton">
            IR A PESA 06 →
          </Link>

          <Link href="/prepararme/4-6" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
