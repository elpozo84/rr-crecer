"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa01() {
  const [paso, setPaso] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const [emocion, setEmocion] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");

  const avanzar = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPaso((p) => p + 1);
  };

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/7-9" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 01</small>
        </div>

        <div className="kg">5 KG</div>
      </header>

      <div className="trainingProgress">
        <div
          className="trainingProgressFill"
          style={{ width: `${((paso + 1) / 7) * 100}%` }}
        />
      </div>

      {paso === 0 && (
        <section className="trainingScreen">
          <span className="trainingTag">SPOT · 5 KG</span>

          <h1>Una pregunta que no esperabas.</h1>

          <div className="scene">
            <p>Estáis en casa. Tu hijo se acerca y pregunta:</p>

            <blockquote>
              —Papá, ¿qué significa <strong>follar</strong>?
            </blockquote>
          </div>

          <p className="trainingLead">
            No buscamos todavía la respuesta perfecta.
          </p>

          <h2>¿Qué le responderías tú?</h2>

          <textarea
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            placeholder="Escribe lo primero que probablemente le dirías..."
          />

          <button
            className="trainingButton"
            onClick={avanzar}
            disabled={!respuesta.trim()}
          >
            CONTINUAR →
          </button>

          <button className="dontKnow" onClick={avanzar}>
            NO SÉ QUÉ DIRÍA
          </button>
        </section>
      )}

      {paso === 1 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>

          <h1>Antes de responderle, mírate tú.</h1>

          <p className="trainingLead">
            Una pregunta puede activar algo en el adulto antes de que haya
            decidido qué quiere enseñar.
          </p>

          <h2>¿Qué aparece primero?</h2>

          <div className="emotionGrid">
            {[
              "Vergüenza",
              "Sorpresa",
              "Miedo a contar demasiado",
              "Incomodidad",
              "Curiosidad",
              "Nada especial",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setEmocion(item)}
                className={emocion === item ? "selected" : ""}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="trainingButton"
            onClick={avanzar}
            disabled={!emocion}
          >
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>

          <h1>¿Qué sabemos realmente?</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Tu hijo ha escuchado una palabra y te ha preguntado qué
                significa.
              </p>
            </div>

            <div>
              <span>HISTORIA POSIBLE</span>
              <p>
                «Si se lo explico, quizá estoy introduciéndolo demasiado pronto
                en la sexualidad.»
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>PERO TODAVÍA NO SABEMOS...</small>
            <h2>¿Qué quiere saber realmente?</h2>
          </div>

          <button className="trainingButton" onClick={avanzar}>
            DESCUBRIRLO →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">CRITERIO RR</span>

          <h1>Pregunta antes de explicar.</h1>

          <p className="trainingLead">
            Antes de preparar una explicación, averigua qué hay detrás de la
            pregunta.
          </p>

          <div className="conversation">
            <div>
              <span>TÚ</span>
              <p>¿Dónde has escuchado esa palabra?</p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>La dijo Marcos en el recreo.</p>
            </div>

            <div>
              <span>TÚ</span>
              <p>¿Y tú qué crees que significa?</p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>Creo que es como insultar a alguien.</p>
            </div>
          </div>

          <button className="trainingButton" onClick={avanzar}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">AHORA SABES MÁS</span>

          <h1>La pregunta ha cambiado.</h1>

          <p className="trainingLead">
            Al principio solo tenías una palabra. Ahora sabes dónde la escuchó
            y qué cree que significa.
          </p>

          {respuesta && (
            <div className="yourFirstAnswer">
              <span>TU PRIMERA RESPUESTA</span>
              <p>{respuesta}</p>
            </div>
          )}

          <div className="reflectionBox">
            <h2>¿Responderías exactamente lo mismo ahora?</h2>
            <p>
              No necesitamos convertir cada pregunta en una gran explicación.
              Podemos responder a lo que el niño necesita comprender y dejar
              abierta la puerta para seguir preguntando.
            </p>
          </div>

          <button className="trainingButton" onClick={avanzar}>
            CONSTRUIR MI RESPUESTA →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">TU RESPUESTA</span>

          <h1>Ahora inténtalo otra vez.</h1>

          <p className="trainingLead">
            Ya conoces el contexto. Responde con tus propias palabras.
          </p>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="¿Qué le dirías ahora?"
          />

          <div className="criterionReminder">
            <span>NO BUSQUES UNA FRASE PERFECTA</span>
            <p>
              Busca una respuesta verdadera, comprensible para su edad y que
              permita seguir conversando.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={avanzar}
            disabled={!respuestaFinal.trim()}
          >
            TERMINAR ENTRENAMIENTO →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>

          <div className="finishMark">RR</div>

          <h1>No has aprendido una frase.</h1>

          <h2>Has entrenado un criterio.</h2>

          <div className="lesson">
            <span>LO QUE TE LLEVAS</span>

            <blockquote>
              Cuando aparezca una pregunta inesperada,
              <strong> averigua primero qué quiere saber realmente.</strong>
            </blockquote>
          </div>

          <div className="comparison">
            <div>
              <span>AUTOMÁTICO</span>
              <p>{respuesta || "No sabía qué responder."}</p>
            </div>

            <div>
              <span>DESPUÉS DE ENTRENAR</span>
              <p>{respuestaFinal}</p>
            </div>
          </div>

          <div className="nextSpot">
            <span>PRÓXIMO SPOT</span>
            <strong>10 KG</strong>
            <p>
              La próxima vez el niño sabrá más y la conversación será un poco
              más difícil.
            </p>
          </div>

          <Link href="/prepararme/7-9" className="trainingButton linkButton">
            VOLVER AL GIMNASIO →
          </Link>
        </section>
      )}
    </main>
  );
}
