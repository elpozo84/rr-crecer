"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa01() {
  const [paso, setPaso] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const [emocion, setEmocion] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const avanzar = () => {
    irA(paso + 1);
  };

  const totalPasos = 11;

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

        <div className="kg">{paso <= 6 ? "5 KG" : "10 KG"}</div>
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
            TERMINAR 5 KG →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR · 5 KG</span>

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
            <span>SIGUIENTE NIVEL</span>
            <strong>10 KG</strong>

            <p>
              Ahora RR retirará parte de la ayuda. Tendrás que reconocer por ti
              mismo qué criterio necesitas.
            </p>
          </div>

          <div className="finishActions">
            <button className="trainingButton" onClick={() => irA(7)}>
              SUBIR A 10 KG →
            </button>

            <Link
              href="/prepararme/7-9"
              className="secondaryTrainingButton"
            >
              VOLVER AL GIMNASIO
            </Link>
          </div>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">SPOT · 10 KG</span>

          <h1>Ahora sabe algo más.</h1>

          <div className="scene">
            <p>Otro día tu hijo vuelve con una pregunta.</p>

            <blockquote>
              —Papá, Marcos dice que sus padres <strong>follan</strong>.
              ¿Eso es verdad?
            </blockquote>
          </div>

          <p className="trainingLead">
            Esta vez RR no va a decirte inmediatamente qué preguntar.
          </p>

          <h2>¿Cuál sería tu primer movimiento?</h2>

          <div className="choiceList">
            <button onClick={() => irA(8)}>
              Explicarle directamente qué significa tener relaciones sexuales.
            </button>

            <button onClick={() => irA(9)}>
              Preguntarle qué entiende él por esa palabra y qué quiere saber.
            </button>

            <button onClick={() => irA(8)}>
              Decirle que es algo privado de sus padres y cambiar de tema.
            </button>

            <button onClick={() => irA(8)}>
              Preguntarle quién se lo ha contado y decirle que esas cosas no se
              hablan en el colegio.
            </button>
          </div>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY INMEDIATO</span>

          <h1>Has respondido antes de descubrir la pregunta.</h1>

          <p className="trainingLead">
            Puede que tu respuesta terminara siendo adecuada. El problema es
            que todavía no sabes qué quiere comprender realmente.
          </p>

          <div className="criterionReminder">
            <span>RECUPERA EL CRITERIO DE 5 KG</span>

            <p>
              Una misma palabra puede esconder preguntas muy diferentes.
              Antes de preparar la explicación, descubre qué sabe y qué quiere
              saber.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            VOLVER AL SPOT →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">
            HAS TRANSFERIDO EL CRITERIO
          </span>

          <h1>No has memorizado una frase.</h1>

          <p className="trainingLead">
            Has reconocido qué herramienta necesitabas en una situación
            diferente.
          </p>

          <div className="conversation">
            <div>
              <span>TÚ</span>
              <p>
                ¿Qué crees tú que significa? ¿Qué quieres saber exactamente?
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Marcos dice que es lo que hacen un hombre y una mujer para
                tener bebés. ¿Es así?
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>AHORA SÍ TENEMOS UNA PREGUNTA</small>
            <h2>¿Cómo se hacen los bebés?</h2>
          </div>

          <p className="trainingLead">
            Ya no estamos ante una palabra escuchada en el recreo. Ahora quiere
            comprender algo sobre reproducción.
          </p>

          <button className="trainingButton" onClick={() => irA(10)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">10 KG SUPERADOS</span>

          <div className="finishMark">10</div>

          <h1>El criterio empieza a ser tuyo.</h1>

          <div className="lesson">
            <span>LO QUE ACABAS DE ENTRENAR</span>

            <blockquote>
              La misma palabra puede esconder preguntas distintas.
              <strong> Primero descubre la pregunta real.</strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>LO QUE ACABA DE OCURRIR</span>

            <strong>Has abierto la siguiente puerta.</strong>

            <p>
              Tu hijo ya no pregunta solamente qué significa una palabra.
              Ahora quiere comprender cómo comienza un embarazo.
            </p>
          </div>

          <Link
            href="/prepararme/7-9"
            className="trainingButton linkButton"
          >
            VOLVER AL GIMNASIO →
          </Link>
        </section>
      )}
    </main>
  );
}
