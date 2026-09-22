"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";
import PuenteRR from "../../../components/PuenteRR";

const emocionesDisponibles = [
  "Sorpresa",
  "Vergüenza",
  "Incomodidad",
  "Preocupación",
  "Bloqueo",
  "Curiosidad",
  "Tranquilidad",
  "No sé identificarlo",
];

const pensamientosDisponibles = [
  "¿Dónde habrá aprendido eso ese niño?",
  "Esto es demasiado sexual para su edad",
  "No quiero darle más información de la que necesita",
  "Me preocupa que mi hijo también lo esté haciendo",
  "No sé cómo explicarlo sin ponerme incómodo",
  "Quiero saber qué ha pasado antes de sacar conclusiones",
];

const frasesUtiles = [
  ["PARA DESCUBRIR", "No sé por qué ese niño los hace. ¿Tú sabes qué creen los demás que significan?"],
  ["PARA NO INVENTAR", "Puede haberlos escuchado en muchos sitios. Como no lo sabemos, no necesitamos inventarnos su historia."],
  ["PARA EXPLICAR", "Algunas personas pueden hacer sonidos cuando sienten sensaciones agradables durante una relación sexual."],
  ["PARA TRABAJAR EL GRUPO", "Que todos se rían no significa que tú tengas que hacerlo."],
  ["PARA HACERLE PENSAR", "Si nadie más se riera, ¿tú seguirías haciéndolo?"],
  ["PARA DEJAR PUERTA ABIERTA", "Si hay algo de esto que no entiendes, puedes preguntármelo."],
];

export default function Pesa09() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [emociones, setEmociones] = useState([]);
  const [pensamiento, setPensamiento] = useState("");
  const [preguntaDescubrir, setPreguntaDescubrir] = useState("");
  const [respuestaGrupo, setRespuestaGrupo] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 14;

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
        stage="7-9"
        weightNumber={9}
        startedKg={10}
        completedKg={30}
        completed={paso === 13}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/7-9" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 09 · IMITACIÓN, GRUPO Y SEXUALIDAD</small>
        </div>

        <div className="kg">
          {paso <= 4 ? "10 KG" : paso <= 10 ? "20 KG" : "30 KG"}
        </div>
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
          <span className="trainingTag">SPOT · RESPUESTA REAL</span>
          <h1>«¿Por qué hace esos ruidos?»</h1>

          <div className="trainingVisual">
            <img
              src="/pesa09.png"
              alt="Pesa 09 · Imitación, grupo y sexualidad"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · IMITACIÓN, GRUPO Y SEXUALIDAD</span>
              <p>
                Una pregunta que parece sencilla puede abrir varias conversaciones.
                El reto es descubrir antes de suponer, explicar sin sobrecargar y
                ayudar a construir criterio propio frente al grupo.
              </p>
            </div>
          </div>

          <div className="scene">
            <p>Tu hijo llega del colegio y te cuenta algo que ha ocurrido con otros niños.</p>
            <blockquote>
              —Papá, hay un niño que se pone a hacer «ahhh, ahhh» y todos empiezan
              a reírse.
              <br /><br />
              <strong>¿Por qué hace esos ruidos?</strong>
            </blockquote>
          </div>

          <h2>¿Qué le responderías ahora mismo?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder='Puedes escribir incluso: "No sé qué decirle".'
          />

          <div className="criterionReminder">
            <span>PUNTO DE PARTIDA</span>
            <p>
              No buscamos una respuesta perfecta. Queremos conservar lo que
              responderías antes de entrenar para poder compararlo al final.
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
          <span className="trainingTag">PRIMERO · ¿QUÉ TE PASA A TI?</span>
          <h1>Antes de responder al niño, observa tu propia reacción.</h1>

          <p className="trainingLead">
            Las preguntas sobre sexualidad pueden activar algo en el adulto antes
            de que haya tenido tiempo de pensar qué quiere enseñar.
          </p>

          <h2>¿Qué te hizo sentir esta situación?</h2>

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

          <h2>¿Qué pensamiento apareció primero?</h2>

          <div className="choiceList">
            {pensamientosDisponibles.map((item) => (
              <button
                type="button"
                key={item}
                className={pensamiento === item ? "selectedChoice" : ""}
                onClick={() => setPensamiento(item)}
              >
                {pensamiento === item ? "✓ " : ""}
                {item}
              </button>
            ))}
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={emociones.length === 0 || !pensamiento}
          >
            SEPARAR HECHO E HISTORIA →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>
          <h1>Tu cabeza ya ha empezado a completar lo que no sabe.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>Un niño hace unos sonidos y otros niños se ríen.</p>
            </div>

            <div>
              <span>LO QUE TODAVÍA NO SABEMOS</span>
              <p>
                Dónde los escuchó, si sabe qué significan, si los vio en Internet,
                si los oyó en casa, si los aprendió de otro niño o si simplemente
                está imitando.
              </p>
            </div>
          </div>

          <div className="yourFirstAnswer">
            <span>LO QUE APARECIÓ EN TI</span>
            <p>{emociones.join(", ")} · {pensamiento}</p>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Puedo notar lo que esta situación me hace pensar
              <strong> sin convertirlo automáticamente en un hecho.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            APRENDER QUÉ HACER CUANDO NO SÉ →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">HERRAMIENTA 1 · VENTANA RR</span>
          <h1>No saber por qué lo hace ese niño no es un problema.</h1>

          <p className="trainingLead">
            El error sería rellenar el hueco con una historia. Cuando no sabes,
            puedes convertir la incertidumbre en una pregunta.
          </p>

          <div className="conversation">
            <div>
              <span>PUEDES DECIR</span>
              <p>«No sé por qué ese niño los hace.»</p>
            </div>
            <div>
              <span>Y DESCUBRIR</span>
              <p>«¿Tú sabes qué creen los demás que significan?»</p>
            </div>
            <div>
              <span>O PREGUNTAR</span>
              <p>«¿Tú qué piensas que significan esos sonidos?»</p>
            </div>
          </div>

          <h2>Construye tu propia pregunta para descubrir antes de explicar.</h2>

          <textarea
            value={preguntaDescubrir}
            onChange={(e) => setPreguntaDescubrir(e.target.value)}
            placeholder="¿Qué le preguntarías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(4)}
            disabled={!preguntaDescubrir.trim()}
          >
            ESCUCHAR SU RESPUESTA →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">LA CONVERSACIÓN SE MUEVE</span>
          <h1>Ahora aparece información nueva.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{preguntaDescubrir}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Dicen que esos ruidos los hace la gente cuando está follando.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Aquí hay dos conversaciones posibles. Puede estar preguntando por los
            sonidos, pero también puede que no sepa qué significa la palabra que
            acaba de utilizar.
          </p>

          <PuenteRR
            origen="PESA 09"
            destino="PESA 01"
            titulo="¿Sabe qué significa la palabra que acaba de utilizar?"
            texto="Una conversación puede cambiar de dirección con una sola palabra. Antes de seguir explicando los sonidos, puedes comprobar si «follar» es una palabra que entiende o simplemente una palabra que repite."
            href="/prepararme/7-9/pesa-01?volver=/prepararme/7-9/pesa-09&paso=4"
            onContinuar={() => irA(5)}
          />
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">HERRAMIENTA 2 · VERDAD PROGRESIVA</span>
          <h1>Si quiere saber por qué algunos adultos hacen esos sonidos.</h1>

          <p className="trainingLead">
            Ya no necesitas explicarlo todo. Necesitas una respuesta verdadera,
            comprensible para su edad y suficientemente corta para permitir otra
            pregunta.
          </p>

          <div className="conversation">
            <div>
              <span>A · MUY BREVE</span>
              <p>
                Algunas personas hacen sonidos cuando sienten sensaciones
                agradables durante una relación sexual.
              </p>
            </div>

            <div>
              <span>B · EXPLICATIVA</span>
              <p>
                Durante una relación sexual algunas partes del cuerpo pueden
                producir sensaciones agradables y algunas personas expresan esas
                sensaciones haciendo sonidos. Otras no.
              </p>
            </div>

            <div>
              <span>C · CONVERSACIONAL</span>
              <p>
                Pueden hacerlos porque están sintiendo algo agradable. ¿Era eso
                lo que querías saber o te preguntabas otra cosa?
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>LAS FRASES SON MULETAS</span>
            <p>
              No memorices la frase. Observa la estructura: verdad sencilla,
              profundidad ajustada y espacio para que el niño decida si necesita
              saber más.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            AHORA APARECE EL GRUPO →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">NUEVO PROBLEMA · EL GRUPO</span>
          <h1>Saber qué significa no termina la conversación.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>Todos nos reímos cuando lo hace.</p>
            </div>
          </div>

          <p className="trainingLead">
            Ahora la pregunta ya no es solo sexual. También estás educando sobre
            imitación, empatía y presión del grupo.
          </p>

          <h2>¿Qué querrías enseñarle en este momento?</h2>

          <textarea
            value={respuestaGrupo}
            onChange={(e) => setRespuestaGrupo(e.target.value)}
            placeholder="No busques todavía una frase perfecta. Escribe la idea que te gustaría que aprendiera."
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuestaGrupo.trim()}
          >
            CONVERTIR MI IDEA EN UNA RESPUESTA →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">HERRAMIENTA 3 · GRUPO ≠ CRITERIO</span>
          <h1>Ahora transforma una intención educativa en lenguaje.</h1>

          <div className="yourFirstAnswer">
            <span>LO QUE QUIERES ENSEÑAR</span>
            <p>{respuestaGrupo}</p>
          </div>

          <div className="conversation">
            <div>
              <span>RECONOCER SIN APROBAR TODO</span>
              <p>
                «Entiendo que os pueda hacer gracia porque es algo raro para
                vosotros.»
              </p>
            </div>

            <div>
              <span>AÑADIR CRITERIO</span>
              <p>
                «Pero que todos se rían no significa que tú tengas que hacerlo.»
              </p>
            </div>

            <div>
              <span>AÑADIR EMPATÍA</span>
              <p>
                «Piensa cómo se sentiría él si cada vez que hace algo todos se
                ríen de él.»
              </p>
            </div>

            <div>
              <span>DEVOLVERLE LA DECISIÓN</span>
              <p>«Si nadie más se riera, ¿tú seguirías haciéndolo?»</p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO</span>
            <blockquote>
              Que todos hagan algo
              <strong> no decide automáticamente lo que hago yo.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            ABRIR MI CAJA DE HERRAMIENTAS →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">CAJA DE HERRAMIENTAS · PESA 09</span>
          <h1>Ahora ya tienes más de una forma de responder.</h1>

          <div className="conversation">
            {frasesUtiles.map(([uso, frase]) => (
              <div key={uso}>
                <span>{uso}</span>
                <p>«{frase}»</p>
              </div>
            ))}
          </div>

          <div className="criterionReminder">
            <span>NO SON GUIONES</span>
            <p>
              Cada frase tiene una función. Cuantas más funciones reconoces,
              menos dependes de recordar una frase exacta.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            CONSTRUIR MI RESPUESTA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN GUIADA · 20 KG</span>
          <h1>Junta ahora las piezas.</h1>

          <div className="conversation">
            <div>
              <span>1 · REGULA</span>
              <p>Reconoce lo que te provoca sin convertirlo en la respuesta.</p>
            </div>
            <div>
              <span>2 · DESCUBRE</span>
              <p>No inventes por qué el otro niño hace los sonidos.</p>
            </div>
            <div>
              <span>3 · EXPLICA</span>
              <p>Responde con verdad sencilla si tu hijo realmente quiere saberlo.</p>
            </div>
            <div>
              <span>4 · EDUCA</span>
              <p>Introduce criterio sobre grupo, imitación y empatía.</p>
            </div>
            <div>
              <span>5 · ABRE</span>
              <p>Haz posible que pueda seguir preguntándote.</p>
            </div>
          </div>

          <h2>Vuelve al SPOT original. ¿Qué responderías ahora?</h2>

          <div className="scene">
            <blockquote>
              —Papá, hay un niño que hace esos ruidos y todos se ríen. ¿Por qué
              los hace?
            </blockquote>
          </div>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye ahora tu respuesta con tus propias palabras..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!respuestaFinal.trim()}
          >
            COMPARAR MI PROGRESO →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">ANTES / DESPUÉS</span>
          <h1>Esto es lo que has entrenado.</h1>

          <div className="comparison">
            <div>
              <span>ANTES DE ENTRENAR</span>
              <p>{respuestaInicial}</p>
            </div>
            <div>
              <span>DESPUÉS DE ENTRENAR</span>
              <p>{respuestaFinal}</p>
            </div>
          </div>

          <div className="conversation">
            <div>
              <span>HAS OBSERVADO TU REACCIÓN</span>
              <p>Ya sabes que lo primero que sientes no tiene que dirigir la conversación.</p>
            </div>
            <div>
              <span>HAS SEPARADO HECHO E HISTORIA</span>
              <p>No necesitas inventar dónde aprendió algo otro niño.</p>
            </div>
            <div>
              <span>HAS APRENDIDO A DESCUBRIR</span>
              <p>Puedes preguntar antes de explicar.</p>
            </div>
            <div>
              <span>HAS APRENDIDO A AJUSTAR</span>
              <p>Puedes decir la verdad sin convertir la conversación en una clase.</p>
            </div>
            <div>
              <span>HAS INTRODUCIDO CRITERIO</span>
              <p>El grupo no tiene que decidir automáticamente lo que hace tu hijo.</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            QUITAR AYUDA · 30 KG →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 30 KG</span>
          <h1>Ahora cambia la situación.</h1>

          <div className="scene">
            <blockquote>
              —Papá, hoy nosotros también hemos empezado a hacer esos ruidos.
              Todos los hacíamos y nos partíamos de risa. ¿Qué pasa? Si solo
              estamos jugando.
            </blockquote>
          </div>

          <p className="trainingLead">
            Esta vez RR no te da frases. Construye una respuesta usando lo que
            acabas de entrenar.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Qué responderías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(12)}
            disabled={!transferencia.trim()}
          >
            VER EL ÚLTIMO GIRO →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen">
          <span className="trainingTag">CUANDO EL SPOT CAMBIA</span>
          <h1>Hay momentos en los que ya no toca seguir entrenando.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Es que no solo hacía los ruidos. El otro día nos enseñó un vídeo
                y nos dijo que hiciéramos lo mismo.
              </p>
            </div>

            <div>
              <span>PRIMERA RESPUESTA ÚTIL</span>
              <p>
                «Gracias por contármelo. Quiero entender bien qué pasó. No estás
                en problemas por decírmelo.»
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CAMBIO DE MODO</span>
            <blockquote>
              Si aparecen exposición sexual preocupante, presión, amenazas,
              secretos, contacto sexual o participación de un adulto,
              <strong>
                {" "}
                la prioridad deja de ser terminar la Pesa y pasa a ser comprender
                qué ha ocurrido y proteger al menor.
              </strong>
            </blockquote>
          </div>

          <PuenteRR
            tipo="seguridad"
            origen="PESA 09"
            destino="HA PASADO ALGO"
            titulo="Esto ya no es solo una conversación educativa"
            texto="Ha aparecido información que puede requerir una respuesta de protección. Mantén la calma, escucha sin completar tú los huecos y pasa al espacio de orientación."
            href="/orientacion"
          />

          <button className="trainingButton" onClick={() => irA(13)}>
            VER MI MAPA FINAL →
          </button>
        </section>
      )}

      {paso === 13 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 09 · COMPLETADA</span>
          <div className="finishMark">30</div>

          <h1>Ya no necesitas saber de antemano todas las respuestas.</h1>
          <h2>Necesitas saber qué hacer cuando aparece una conversación que no esperabas.</h2>

          <div className="lesson">
            <span>TU MAPA RR · PESA 09</span>
            <blockquote>
              NOTO → SEPARO HECHO/HISTORIA → DESCUBRO → EXPLICO → AÑADO CRITERIO →
              <strong> DEJO LA PUERTA ABIERTA.</strong>
            </blockquote>
          </div>

          <div className="comparison">
            <div>
              <span>TU PRIMERA RESPUESTA</span>
              <p>{respuestaInicial}</p>
            </div>
            <div>
              <span>TU RESPUESTA DESPUÉS DE ENTRENAR</span>
              <p>{respuestaFinal}</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>LO QUE ESTÁS EDUCANDO</span>
            <p>
              No solo has hablado de unos sonidos. Has entrenado curiosidad sin
              vergüenza, pensamiento antes de suponer, criterio frente al grupo,
              empatía y una relación en la que tu hijo pueda volver a contarte
              algo cuando no lo entiende.
            </p>
          </div>

          <div className="nextSpot">
            <span>RR · CRECER</span>
            <strong>NO MEMORIZAR RESPUESTAS. APRENDER A CONSTRUIRLAS.</strong>
            <p>
              El tema cambiará. La próxima pregunta será distinta. Las
              herramientas que acabas de entrenar pueden viajar contigo.
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
