"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa05() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/7-9" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 05</small>
        </div>

        <div className="kg">{paso <= 6 ? "5 KG" : "10 KG"}</div>
      </header>

      <div className="trainingProgress">
        <div
          className="trainingProgressFill"
          style={{
            width: `${Math.min(((paso + 1) / 11) * 100, 100)}%`,
          }}
        />
      </div>

      {paso === 0 && (
        <section className="trainingScreen">
          <span className="trainingTag">SPOT · 5 KG</span>

          <h1>«¿De dónde vienen los bebés?»</h1>

          <div className="scene">
            <p>
              Vais en el coche. No estabais hablando de sexualidad ni de
              reproducción. De repente tu hijo pregunta:
            </p>

            <blockquote>
              —Papá...
              <br />
              <br />
              <strong>¿de dónde vienen los bebés?</strong>
            </blockquote>
          </div>

          <p className="trainingLead">
            No busques todavía la respuesta que crees que deberías dar.
            Escribe lo que probablemente responderías de verdad.
          </p>

          <h2>¿Qué le dirías?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe tu respuesta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(1)}
            disabled={!respuestaInicial.trim()}
          >
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 1 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>

          <h1>La pregunta parece enorme.</h1>

          <p className="trainingLead">
            «¿De dónde vienen los bebés?» puede activar rápidamente una
            pregunta en la cabeza del adulto:
          </p>

          <div className="bigQuestion">
            <small>LA HISTORIA DEL ADULTO</small>
            <h2>«¿Hasta dónde tengo que explicarle?»</h2>
          </div>

          <div className="yourFirstAnswer">
            <span>TU RESPUESTA INICIAL</span>
            <p>{respuestaInicial}</p>
          </div>

          <div className="criterionReminder">
            <span>VENTANA RR</span>

            <p>
              Antes de decidir cuánto contar, necesitamos saber qué está
              preguntando realmente.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(2)}>
            DESCUBRIR LA PREGUNTA →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>

          <h1>Solo sabemos una cosa.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>

              <p>
                Tu hijo ha preguntado de dónde vienen los bebés.
              </p>
            </div>

            <div>
              <span>TODAVÍA NO SABEMOS</span>

              <p>
                Qué sabe, qué imagina, qué ha escuchado ni qué parte del
                proceso quiere comprender.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            La misma frase puede esconder preguntas completamente diferentes.
          </p>

          <div className="conversation">
            <div>
              <span>PODRÍA ESTAR PREGUNTANDO</span>
              <p>¿Dónde está el bebé antes de nacer?</p>
            </div>

            <div>
              <span>O PODRÍA ESTAR PREGUNTANDO</span>
              <p>¿Cómo entra un bebé en la barriga?</p>
            </div>

            <div>
              <span>O PODRÍA ESTAR PREGUNTANDO</span>
              <p>¿Cómo sale?</p>
            </div>

            <div>
              <span>O SIMPLEMENTE</span>
              <p>¿Yo también estuve dentro de mamá?</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">CRITERIO RR</span>

          <h1>Antes de explicar, calibra.</h1>

          <div className="conversation">
            <div>
              <span>TÚ</span>

              <p>
                Buena pregunta. ¿Qué sabes tú sobre cómo se forma un bebé?
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>

              <p>
                Sé que crece en la barriga, pero no sé cómo empieza.
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>AHORA LA PREGUNTA ES MÁS PRECISA</small>

            <h2>¿Cómo empieza un bebé?</h2>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO</span>

            <p>
              No adivines el nivel de detalle que necesita. Averigua primero
              qué sabe y responde a la pregunta que realmente está haciendo.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            RESPONDER →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">VERDAD PROGRESIVA</span>

          <h1>No necesitas elegir entre mentir o contarlo todo.</h1>

          <p className="trainingLead">
            Podemos dar información verdadera y comprensible, comprobar si ha
            respondido a su duda y ampliar cuando aparezca la siguiente
            pregunta.
          </p>

          <div className="conversation">
            <div>
              <span>UNA RESPUESTA POSIBLE</span>

              <p>
                Para que empiece un bebé hacen falta una célula llamada óvulo
                y otra llamada espermatozoide. Cuando se unen, puede comenzar
                un embarazo y el bebé empieza a desarrollarse en el útero.
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>

              <p>¿Y cómo se juntan?</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>FÍJATE EN LO QUE HA OCURRIDO</span>

            <p>
              Hemos respondido una pregunta. El niño decide si necesita abrir
              la siguiente.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">TU RESPUESTA</span>

          <h1>Ahora vuelve al principio.</h1>

          <div className="scene">
            <blockquote>
              —Papá, ¿de dónde vienen los bebés?
            </blockquote>
          </div>

          <p className="trainingLead">
            No tienes que copiar ninguna frase anterior. Utiliza el criterio
            que acabas de entrenar.
          </p>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="¿Cómo empezarías ahora la conversación?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(6)}
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

          <h1>No has aprendido «la explicación».</h1>

          <h2>Has aprendido a calibrarla.</h2>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>DESPUÉS DE ENTRENAR</span>
              <p>{respuestaFinal}</p>
            </div>
          </div>

          <div className="lesson">
            <span>LO QUE TE LLEVAS</span>

            <blockquote>
              Verdad suficiente para responder hoy.
              <strong> Puerta abierta para preguntar mañana.</strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE NIVEL</span>

            <strong>10 KG</strong>

            <p>
              El niño ya ha abierto la siguiente puerta: «¿Y cómo se juntan el
              óvulo y el espermatozoide?»
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            SUBIR A 10 KG →
          </button>

          <Link
            href="/prepararme/7-9"
            className="secondaryTrainingButton"
          >
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">SPOT · 10 KG</span>

          <h1>La siguiente pregunta ha llegado.</h1>

          <div className="scene">
            <blockquote>
              —Vale... pero
              <strong> ¿cómo se juntan el óvulo y el espermatozoide?</strong>
            </blockquote>
          </div>

          <p className="trainingLead">
            Esta vez ya sabes qué quiere comprender. No necesitamos esquivar la
            pregunta ni convertirla en una clase completa.
          </p>

          <h2>¿Qué harías?</h2>

          <div className="choiceList">
            <button onClick={() => irA(8)}>
              Cambiar de tema porque explicar las relaciones sexuales a esta
              edad puede ser demasiado pronto.
            </button>

            <button onClick={() => irA(9)}>
              Responder de forma sencilla y factual, y dejar que sus siguientes
              preguntas marquen cuánto ampliar.
            </button>

            <button onClick={() => irA(8)}>
              Explicar de una vez reproducción, relaciones sexuales,
              anticoncepción, infecciones y pubertad para que tenga toda la
              información.
            </button>

            <button onClick={() => irA(8)}>
              Inventar una explicación más infantil y dejar la explicación real
              para cuando sea mayor.
            </button>
          </div>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY INMEDIATO</span>

          <h1>Ni esconder ni inundar.</h1>

          <p className="trainingLead">
            Evitar una respuesta verdadera puede cerrar la conversación.
            Dar mucha más información de la que está preguntando también puede
            hacer que deje de escuchar.
          </p>

          <div className="criterionReminder">
            <span>RECUPERA EL CRITERIO</span>

            <p>
              Responde a la pregunta presente con lenguaje sencillo y correcto.
              Después comprueba qué ha entendido y deja espacio para la
              siguiente pregunta.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            VOLVER AL SPOT →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA</span>

          <h1>Ahora puedes avanzar sin convertirlo en «la charla».</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>

              <p>
                ¿Cómo se juntan el óvulo y el espermatozoide?
              </p>
            </div>

            <div>
              <span>UNA RESPUESTA POSIBLE</span>

              <p>
                Una forma en que puede ocurrir es durante una relación sexual:
                el pene puede entrar en la vagina y el semen, que contiene
                espermatozoides, puede quedar dentro. Si un espermatozoide se
                une a un óvulo, puede comenzar un embarazo.
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>

              <p>Ah. Vale.</p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>Y AHORA...</small>

            <h2>No hace falta añadir cinco capítulos más.</h2>
          </div>

          <p className="trainingLead">
            Puedes comprobar si ha entendido o si quiere saber algo más. Si la
            conversación termina aquí, puede continuar otro día.
          </p>

          <button className="trainingButton" onClick={() => irA(10)}>
            TERMINAR →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">10 KG SUPERADOS</span>

          <div className="finishMark">10</div>

          <h1>Has convertido «la charla» en una conversación.</h1>

          <div className="lesson">
            <span>CRITERIO RR · CRECER</span>

            <blockquote>
              No tienes que explicarlo todo.
              <strong> Tampoco necesitas mentir para explicarlo poco.</strong>
            </blockquote>
          </div>

          <div className="factStory">
            <div>
              <span>PRIMERO</span>

              <p>Descubre qué sabe y qué quiere comprender.</p>
            </div>

            <div>
              <span>DESPUÉS</span>

              <p>
                Responde con verdad, claridad y la profundidad necesaria para
                esa pregunta.
              </p>
            </div>
          </div>

          <div className="nextSpot">
            <span>RECORRIDO 7–9</span>

            <strong>YA TENEMOS 5 PESAS</strong>

            <p>
              Preguntas inesperadas, límites corporales, secretos y ayuda,
              intimidad y reproducción.
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
