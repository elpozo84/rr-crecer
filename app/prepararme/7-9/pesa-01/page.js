"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa01() {
  const [paso, setPaso] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const [emocion, setEmocion] = useState("");
  const [estiloElegido, setEstiloElegido] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const avanzar = () => {
    irA(paso + 1);
  };

  const totalPasos = 14;

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/7-9" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 01 · PREGUNTAS INESPERADAS</small>
        </div>

        <div className="kg">{paso <= 8 ? "5 KG" : "10 KG"}</div>
      </header>

      <div className="trainingProgress">
        <div
          className="trainingProgressFill"
          style={{
            width: `${Math.min(
              ((paso + 1) / totalPasos) * 100,
              100
            )}%`,
          }}
        />
      </div>

     {paso === 0 && (
  <section className="trainingScreen">

    <div
      style={{
        width: "100%",
        marginBottom: "38px",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid var(--line)",
        background: "var(--white)",
      }}
    >
      <img
        src="/pesa01.png"
        alt="Pesa 01 · Preguntas inesperadas"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
        }}
      />
    </div>

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
              <p>¿Y tú sabes qué significa?</p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>

              <p>
                No. Por eso te pregunto.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>AHORA SÍ</span>

            <p>
              Ya sabemos que no está pidiendo una gran conversación sobre
              sexualidad. Quiere saber qué significa una palabra que ha
              escuchado.
            </p>
          </div>

          <button className="trainingButton" onClick={avanzar}>
            AHORA TOCA RESPONDER →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">
            PALABRAS PARA CUANDO TE QUEDES EN BLANCO · 7–9 AÑOS
          </span>

          <h1>Tres formas de explicarlo.</h1>

          <p className="trainingLead">
            No son tres respuestas correctas entre las que tengas que acertar.
            Son tres maneras de expresar el mismo contenido para que encuentres
            la que se parece más a tu forma de hablar.
          </p>

          <div className="conversation">
            <div>
              <span>A · BREVE Y DIRECTA</span>

              <p>
                “Follar es una palabra vulgar que algunas personas usan para
                decir tener relaciones sexuales. Una forma de relación sexual
                es cuando el pene entra en la vagina.”
              </p>
            </div>

            <div>
              <span>B · EXPLICATIVA</span>

              <p>
                “Follar es una manera vulgar de decir que dos personas tienen
                relaciones sexuales. Hay distintas formas de tener relaciones
                sexuales; una de ellas es cuando el pene entra en la vagina.
                Es una palabra que puedes escuchar, aunque podemos decir
                ‘tener relaciones sexuales’.”
              </p>
            </div>

            <div>
              <span>C · ABIERTA A SEGUIR PREGUNTANDO</span>

              <p>
                “Es una palabra vulgar para hablar de tener relaciones
                sexuales. Por ejemplo, una relación sexual puede incluir que
                el pene entre en la vagina. Si quieres saber algo más sobre
                eso, puedes preguntarme.”
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>IMPORTANTE</span>

            <p>
              No necesitas dar toda la información que conoces. Responde a la
              pregunta que tienes delante y deja espacio para que aparezca la
              siguiente.
            </p>
          </div>

          <button className="trainingButton" onClick={avanzar}>
            ¿CUÁL SE PARECE MÁS A MÍ? →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">ELIGE TU PUNTO DE PARTIDA</span>

          <h1>¿Cómo hablarías tú?</h1>

          <p className="trainingLead">
            No estás eligiendo la respuesta correcta. Estás descubriendo qué
            forma de explicar te resulta más natural.
          </p>

          <div className="choiceList">
            <button
              onClick={() => setEstiloElegido("breve")}
              className={estiloElegido === "breve" ? "selectedChoice" : ""}
            >
              {estiloElegido === "breve" ? "✓ " : ""}
              Prefiero ser breve y directo.
            </button>

            <button
              onClick={() => setEstiloElegido("explicativa")}
              className={
                estiloElegido === "explicativa" ? "selectedChoice" : ""
              }
            >
              {estiloElegido === "explicativa" ? "✓ " : ""}
              Prefiero explicar un poco más.
            </button>

            <button
              onClick={() => setEstiloElegido("abierta")}
              className={estiloElegido === "abierta" ? "selectedChoice" : ""}
            >
              {estiloElegido === "abierta" ? "✓ " : ""}
              Prefiero responder y abrir la puerta a más preguntas.
            </button>

            <button
              onClick={() => setEstiloElegido("mezcla")}
              className={estiloElegido === "mezcla" ? "selectedChoice" : ""}
            >
              {estiloElegido === "mezcla" ? "✓ " : ""}
              Cogería partes de varias y lo diría a mi manera.
            </button>
          </div>

          <button
            className="trainingButton"
            onClick={avanzar}
            disabled={!estiloElegido}
          >
            CONSTRUIR LA MÍA →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">TU LENGUAJE RR</span>

          <h1>Ahora dilo como tú lo dirías.</h1>

          {respuesta && (
            <div className="yourFirstAnswer">
              <span>TU PRIMERA RESPUESTA</span>
              <p>{respuesta}</p>
            </div>
          )}

          <p className="trainingLead">
            Ya sabes qué quiere comprender y has visto varias formas de
            explicarlo. Ahora construye una respuesta que pueda salir de tu
            boca de manera natural.
          </p>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="¿Qué le dirías tú?"
          />

          <div className="criterionReminder">
            <span>TRES COMPROBACIONES</span>

            <p>
              ¿Es verdad? ¿Puede entenderlo con 7–9 años? ¿Permite que vuelva a
              preguntarte?
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={avanzar}
            disabled={!respuestaFinal.trim()}
          >
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">UNA ÚLTIMA HERRAMIENTA</span>

          <h1>Después de responder, no tienes que seguir hablando.</h1>

          <p className="trainingLead">
            Podemos comprobar si hemos respondido a lo que realmente quería
            saber.
          </p>

          <div className="conversation">
            <div>
              <span>TÚ</span>

              <p>
                ¿Era eso lo que querías saber o quieres preguntarme algo más?
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>RR · CRECER</small>

            <h2>Responder. Comprobar. Escuchar.</h2>
          </div>

          <p className="trainingLead">
            Si la respuesta le basta, podemos terminar ahí. Si aparece otra
            pregunta, tendremos una nueva conversación.
          </p>

          <button className="trainingButton" onClick={avanzar}>
            VER MI REPLAY →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR · 5 KG</span>

          <div className="finishMark">RR</div>

          <h1>No has memorizado una frase.</h1>

          <h2>Has aprendido a llegar hasta ella.</h2>

          <div className="lesson">
            <span>LO QUE TE LLEVAS</span>

            <blockquote>
              Primero descubre qué quiere saber.
              <strong>
                {" "}
                Después responde de forma verdadera, comprensible y suficiente.
              </strong>
            </blockquote>
          </div>

          <div className="comparison">
            <div>
              <span>ANTES DE ENTRENAR</span>
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
              Ahora RR retirará parte de la ayuda. La conversación seguirá y
              tendrás que reconocer qué necesita el niño.
            </p>
          </div>

          <div className="finishActions">
            <button className="trainingButton" onClick={() => irA(9)}>
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

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">SPOT · 10 KG</span>

          <h1>La conversación continúa.</h1>

          <div className="scene">
            <p>
              Has explicado qué significa la palabra. Tu hijo se queda pensando
              unos segundos y pregunta:
            </p>

            <blockquote>
              —Entonces...
              <br />
              <strong>¿así se hacen los bebés?</strong>
            </blockquote>
          </div>

          <p className="trainingLead">
            Ya no te está preguntando por una palabra. Ahora quiere comprender
            algo sobre reproducción.
          </p>

          <h2>¿Cuál sería tu primer movimiento?</h2>

          <div className="choiceList">
            <button onClick={() => irA(10)}>
              Explicarle inmediatamente todo el proceso de reproducción.
            </button>

            <button onClick={() => irA(11)}>
              Preguntarle qué cree que ocurre para que empiece un bebé.
            </button>

            <button onClick={() => irA(10)}>
              Decirle que eso ya se lo explicarán cuando sea mayor.
            </button>

            <button onClick={() => irA(10)}>
              Responder solamente “sí” para no entrar en más detalles.
            </button>
          </div>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY INMEDIATO</span>

          <h1>La siguiente pregunta también tiene profundidad.</h1>

          <p className="trainingLead">
            Puede necesitar una explicación sencilla o puede estar preparado
            para preguntar algo más. Todavía no lo sabemos.
          </p>

          <div className="criterionReminder">
            <span>RECUPERA EL CRITERIO</span>

            <p>
              Antes de decidir cuánto explicar, descubre qué entiende y qué
              quiere saber.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            VOLVER AL SPOT →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">HAS TRANSFERIDO EL CRITERIO</span>

          <h1>Ahora la pregunta está más clara.</h1>

          <div className="conversation">
            <div>
              <span>TÚ</span>

              <p>
                ¿Qué crees tú que tiene que pasar para que empiece un bebé?
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>

              <p>
                No sé. Marcos dice que pasa cuando un hombre y una mujer follan.
                ¿Es verdad?
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>AHORA SÍ</small>

            <h2>Necesita una explicación.</h2>
          </div>

          <button className="trainingButton" onClick={avanzar}>
            VER FORMAS DE EXPLICARLO →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen">
          <span className="trainingTag">
            PALABRAS PARA CUANDO TE QUEDES EN BLANCO · 7–9 AÑOS
          </span>

          <h1>Tres formas de continuar.</h1>

          <p className="trainingLead">
            Otra vez, no tienes que copiar ninguna literalmente.
          </p>

          <div className="conversation">
            <div>
              <span>A · BREVE</span>

              <p>
                “Puede ocurrir. Para que empiece un embarazo tienen que unirse
                un espermatozoide y un óvulo.”
              </p>
            </div>

            <div>
              <span>B · UN POCO MÁS EXPLICATIVA</span>

              <p>
                “Una forma en que puede empezar un embarazo es mediante una
                relación sexual en la que el pene entra en la vagina. El semen
                puede contener espermatozoides y, si uno se une a un óvulo,
                puede comenzar un embarazo.”
              </p>
            </div>

            <div>
              <span>C · RESPONDE Y DEJA LA PUERTA ABIERTA</span>

              <p>
                “Sí, algunas relaciones sexuales pueden hacer posible un
                embarazo. Para que empiece tienen que unirse un espermatozoide
                y un óvulo. Si quieres, puedo explicarte un poco más cómo
                ocurre.”
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>FÍJATE</span>

            <p>
              La respuesta crece porque ha crecido la pregunta. No porque el
              adulto haya decidido dar una clase completa.
            </p>
          </div>

          <button className="trainingButton" onClick={avanzar}>
            TERMINAR ENTRENAMIENTO →
          </button>
        </section>
      )}

      {paso === 13 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">10 KG SUPERADOS</span>

          <div className="finishMark">10</div>

          <h1>Ahora tienes criterio y palabras.</h1>

          <div className="lesson">
            <span>LO QUE ACABAS DE ENTRENAR</span>

            <blockquote>
              No necesitas elegir entre callarte o contarlo todo.
              <strong>
                {" "}
                Puedes descubrir qué necesita saber y responder desde ahí.
              </strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>RR · CRECER</span>

            <strong>CRITERIO + LENGUAJE</strong>

            <p>
              RR te ayuda a pensar la conversación y también te presta palabras
              cuando todavía no sabes cómo expresarla. Después construyes las
              tuyas.
            </p>
          </div>

          <div className="criterionReminder">
            <span>ESTO CONTINÚA EN LA PESA 05</span>

            <p>
              En “¿De dónde vienen los bebés?” entrenaremos con más profundidad
              cómo explicar reproducción a esta edad sin quedarnos cortos ni
              convertir una pregunta sencilla en una explicación demasiado
              grande.
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
