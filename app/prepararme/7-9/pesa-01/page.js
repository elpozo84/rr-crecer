"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const emocionesDisponibles = [
  "Sorpresa",
  "Vergüenza",
  "Miedo",
  "Incomodidad",
  "Preocupación",
  "Bloqueo",
  "Curiosidad",
  "Tranquilidad",
  "No sé identificarlo",
];

const origenes = [
  "Lo ha escuchado en el colegio",
  "Otro niño se lo ha dicho",
  "Lo ha visto escrito o en una pantalla",
  "Está intentando entender algo sobre sexo o reproducción",
  "Ha ocurrido algo que quiere contarme",
  "Todavía no lo sé",
];

const frasesHerramienta = [
  {
    uso: "GANAR TIEMPO",
    frase: "Buena pregunta. Déjame pensar cómo explicártelo bien.",
  },
  {
    uso: "DESCUBRIR QUÉ SABE",
    frase: "¿Tú qué crees que significa?",
  },
  {
    uso: "DESCUBRIR EL ORIGEN",
    frase: "¿Dónde has escuchado esa palabra?",
  },
  {
    uso: "ACLARAR QUÉ NECESITA",
    frase: "¿Qué es exactamente lo que quieres saber?",
  },
  {
    uso: "RESPONDER BREVE",
    frase:
      "Es una palabra que algunas personas usan para hablar de tener relaciones sexuales.",
  },
  {
    uso: "NORMALIZAR",
    frase:
      "Puedes preguntarme estas cosas aunque te parezcan raras o te dé vergüenza.",
  },
  {
    uso: "SI SE RÍE",
    frase:
      "Veo que te hace gracia la palabra. Aun así, podemos hablar de lo que significa.",
  },
  {
    uso: "SI NO LO SÉ",
    frase:
      "Eso no lo sé explicar bien todavía. Podemos buscar una buena manera de entenderlo.",
  },
];

export default function Pesa09() {
  const [paso, setPaso] = useState(0);


  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [emociones, setEmociones] = useState([]);
  const [pensamiento, setPensamiento] = useState("");
  const [preguntaVentana, setPreguntaVentana] = useState("");
  const [origen, setOrigen] = useState("");
  const [necesidad, setNecesidad] = useState("");
  const [respuestaConstruida, setRespuestaConstruida] = useState("");
  const [respuestaTransferencia, setRespuestaTransferencia] = useState("");

  const totalPasos = 12;

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
        weightNumber={1}
        startedKg={5}
        completedKg={20}
        completed={paso === 11}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/7-9" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>LABORATORIO · CONSTRUIR RESPUESTAS</small>
        </div>

        <div className="kg">
          {paso <= 3 ? "5 KG" : paso <= 8 ? "10 KG" : "20 KG"}
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
          <h1>«Papá, ¿qué significa follar?»</h1>

          <div className="trainingVisual">
            <img
              src="/pesa01.png"
              alt="Situación cotidiana para iniciar el entrenamiento de la Pesa 01"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · SITUACIÓN COTIDIANA</span>
              <p>Primero ocurre la vida. Después entrenamos cómo responder.</p>
            </div>
          </div>

          <div className="scene">
            <p>
              No buscamos una respuesta perfecta. Queremos saber desde dónde
              empiezas hoy.
            </p>
            <blockquote>
              Tu hijo te hace la pregunta de repente. No estabas preparado.
            </blockquote>
          </div>

          <h2>¿Qué le responderías de verdad?</h2>
          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder='Puedes escribir incluso: "No sé qué decirle".'
          />

          <div className="criterionReminder">
            <span>IMPORTANTE</span>
            <p>
              «No sé qué decirle» también es una respuesta válida aquí. Este
              entrenamiento empieza precisamente donde te bloqueas.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(1)}
            disabled={!respuestaInicial.trim()}
          >
            EMPEZAR A CONSTRUIR →
          </button>
        </section>
      )}

      {paso === 1 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRIMERO · TÚ</span>
          <h1>Antes de responder, mira qué te ha ocurrido por dentro.</h1>

          <p className="trainingLead">
            Una pregunta puede activar emociones antes de que hayas decidido qué
            quieres enseñar.
          </p>

          <h2>¿Qué sentiste al imaginar esa pregunta?</h2>

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

          <h2>¿Qué pensamiento apareció?</h2>
          <textarea
            value={pensamiento}
            onChange={(e) => setPensamiento(e.target.value)}
            placeholder='Ej.: "Es demasiado pequeño", "¿dónde habrá oído eso?", "no quiero explicarlo mal"...'
          />

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={emociones.length === 0 || !pensamiento.trim()}
          >
            VER QUÉ ESTÁ PASANDO →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>
          <h1>Tu emoción importa. Pero no tiene que conducir la respuesta.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>Tu hijo ha preguntado: «¿Qué significa follar?»</p>
            </div>
            <div>
              <span>LO QUE APARECIÓ EN TI</span>
              <p>
                {emociones.join(", ")}. {pensamiento}
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>PRIMER APRENDIZAJE</span>
            <blockquote>
              Puedo notar lo que me provoca la pregunta
              <strong> sin responder desde el susto, la vergüenza o el bloqueo.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            APRENDER LA PRIMERA HERRAMIENTA →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">HERRAMIENTA 1 · VENTANA RR</span>
          <h1>No saber qué decir no te obliga a responder inmediatamente.</h1>

          <p className="trainingLead">
            Antes de explicar, puedes conseguir información. Preguntar no es
            esquivar la conversación: es prepararte para responder a la pregunta
            correcta.
          </p>

          <div className="conversation">
            <div>
              <span>PUEDES GANAR TIEMPO</span>
              <p>«Buena pregunta. Déjame pensar cómo explicártelo bien.»</p>
            </div>
            <div>
              <span>PUEDES DESCUBRIR QUÉ SABE</span>
              <p>«¿Tú qué crees que significa?»</p>
            </div>
            <div>
              <span>PUEDES DESCUBRIR DE DÓNDE VIENE</span>
              <p>«¿Dónde has escuchado esa palabra?»</p>
            </div>
            <div>
              <span>PUEDES ACLARAR LA PREGUNTA</span>
              <p>«¿Qué es exactamente lo que quieres saber?»</p>
            </div>
          </div>

          <h2>Construye ahora tu propia Ventana RR.</h2>
          <textarea
            value={preguntaVentana}
            onChange={(e) => setPreguntaVentana(e.target.value)}
            placeholder="Escribe la primera frase o pregunta que usarías antes de explicar..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(4)}
            disabled={!preguntaVentana.trim()}
          >
            PROBAR MI PREGUNTA →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">DESCUBRIR ANTES DE EXPLICAR</span>
          <h1>La misma pregunta puede necesitar respuestas distintas.</h1>

          <div className="yourFirstAnswer">
            <span>TU VENTANA RR</span>
            <p>{preguntaVentana}</p>
          </div>

          <p className="trainingLead">
            Imagina que después de preguntarle descubres algo más. ¿De dónde
            parece venir su pregunta?
          </p>

          <div className="choiceList">
            {origenes.map((item) => (
              <button
                type="button"
                key={item}
                className={origen === item ? "selectedChoice" : ""}
                onClick={() => setOrigen(item)}
              >
                {origen === item ? "✓ " : ""}
                {item}
              </button>
            ))}
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(5)}
            disabled={!origen}
          >
            DECIDIR QUÉ NECESITA →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">HERRAMIENTA 2 · AJUSTAR</span>
          <h1>No respondas a la palabra. Responde a la necesidad.</h1>

          <div className="yourFirstAnswer">
            <span>LO QUE HAS DESCUBIERTO</span>
            <p>{origen}</p>
          </div>

          <h2>¿Qué parece necesitar ahora?</h2>

          <div className="choiceList">
            {[
              "Una explicación sencilla",
              "Corregir algo que ha entendido mal",
              "Poder contarme algo sin sentirse juzgado",
              "Que compruebe primero si ha ocurrido algo preocupante",
              "Todavía necesito preguntar más",
            ].map((item) => (
              <button
                type="button"
                key={item}
                className={necesidad === item ? "selectedChoice" : ""}
                onClick={() => setNecesidad(item)}
              >
                {necesidad === item ? "✓ " : ""}
                {item}
              </button>
            ))}
          </div>

          <div className="criterionReminder">
            <span>CRITERIO RR</span>
            <p>
              La edad orienta cuánto explicar. Lo que acabas de descubrir orienta
              qué explicar.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(6)}
            disabled={!necesidad}
          >
            ABRIR MI CAJA DE HERRAMIENTAS →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CAJA DE HERRAMIENTAS</span>
          <h1>No necesitas una frase mágica. Necesitas recursos.</h1>

          <div className="conversation">
            {frasesHerramienta.map((item) => (
              <div key={item.uso}>
                <span>{item.uso}</span>
                <p>«{item.frase}»</p>
              </div>
            ))}
          </div>

          <div className="criterionReminder">
            <span>LAS FRASES SON MULETAS</span>
            <p>
              No tienes que memorizarlas. Observa para qué sirve cada una y
              utiliza tus propias palabras.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            VER QUÉ FRASES ABREN Y CUÁLES CIERRAN →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">HERRAMIENTA 3 · PUERTA ABIERTA</span>
          <h1>Dos frases pueden informar y producir efectos muy distintos.</h1>

          <div className="factStory">
            <div>
              <span>TIENDE A CERRAR</span>
              <p>«Eso no son cosas de niños.»</p>
            </div>
            <div>
              <span>TIENDE A ABRIR</span>
              <p>«Puedes preguntarme estas cosas.»</p>
            </div>
          </div>

          <div className="factStory">
            <div>
              <span>TIENDE A CERRAR</span>
              <p>«¿Quién te ha enseñado esa guarrada?»</p>
            </div>
            <div>
              <span>TIENDE A ABRIR</span>
              <p>«¿Dónde has escuchado esa palabra?»</p>
            </div>
          </div>

          <div className="factStory">
            <div>
              <span>TIENDE A CERRAR</span>
              <p>«Ya te lo explicaré cuando seas mayor.»</p>
            </div>
            <div>
              <span>TIENDE A ABRIR</span>
              <p>«Puedo explicarte la parte que necesitas saber ahora.»</p>
            </div>
          </div>

          <div className="lesson">
            <span>OBJETIVO</span>
            <blockquote>
              No buscamos que nunca te equivoques.
              <strong> Buscamos que tu hijo pueda volver a preguntarte.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            CONSTRUIR MI RESPUESTA →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN GUIADA · 10 KG</span>
          <h1>Ahora junta las piezas.</h1>

          <div className="conversation">
            <div>
              <span>1 · RECIBE</span>
              <p>Haz que la pregunta pueda existir sin vergüenza.</p>
            </div>
            <div>
              <span>2 · DESCUBRE</span>
              <p>Averigua qué sabe, qué ha ocurrido o qué quiere entender.</p>
            </div>
            <div>
              <span>3 · RESPONDE</span>
              <p>Da una explicación verdadera, sencilla y ajustada.</p>
            </div>
            <div>
              <span>4 · DEJA PUERTA ABIERTA</span>
              <p>Comprueba si era eso lo que quería saber y permite otra pregunta.</p>
            </div>
          </div>

          <div className="yourFirstAnswer">
            <span>LO QUE PARECE NECESITAR</span>
            <p>{necesidad}</p>
          </div>

          <h2>Construye tu respuesta completa.</h2>
          <textarea
            value={respuestaConstruida}
            onChange={(e) => setRespuestaConstruida(e.target.value)}
            placeholder="Escríbela con tus palabras. No copies una frase perfecta: construye la tuya."
          />

          <button
            className="trainingButton"
            onClick={() => irA(9)}
            disabled={!respuestaConstruida.trim()}
          >
            VER LO QUE ACABO DE HACER →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PROGRESO VISIBLE</span>
          <h1>Compara el antes con el después.</h1>

          <div className="comparison">
            <div>
              <span>ANTES DE ENTRENAR</span>
              <p>{respuestaInicial}</p>
            </div>
            <div>
              <span>DESPUÉS DE ENTRENAR</span>
              <p>{respuestaConstruida}</p>
            </div>
          </div>

          <div className="lesson">
            <span>LO QUE HAS ENTRENADO</span>
            <blockquote>
              Has pasado de buscar «la respuesta correcta» a tener un proceso:
              <strong> recibir → descubrir → ajustar → responder → abrir.</strong>
            </blockquote>
          </div>

          <div className="conversation">
            <div>
              <span>HAS MIRADO TU REACCIÓN</span>
              <p>Has identificado qué te provocaba la pregunta antes de actuar.</p>
            </div>
            <div>
              <span>HAS DESCUBIERTO ANTES DE SUPONER</span>
              <p>Has aprendido a preguntar antes de llenar los huecos.</p>
            </div>
            <div>
              <span>HAS AJUSTADO</span>
              <p>Has pensado qué necesita el niño, no todo lo que tú sabes.</p>
            </div>
            <div>
              <span>HAS CUIDADO LA PUERTA</span>
              <p>Has trabajado para que pueda volver a hablar contigo.</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            QUITAR LAS MULETAS · 20 KG →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 20 KG</span>
          <h1>La pregunta cambia. La herramienta permanece.</h1>

          <div className="scene">
            <blockquote>—Papá, ¿qué significa masturbarse?</blockquote>
          </div>

          <p className="trainingLead">
            Esta vez RR no te dará frases. Utiliza lo que acabas de aprender:
            recibe, descubre, ajusta, responde y deja abierta la conversación.
          </p>

          <textarea
            value={respuestaTransferencia}
            onChange={(e) => setRespuestaTransferencia(e.target.value)}
            placeholder="Construye ahora la respuesta tú solo..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(11)}
            disabled={!respuestaTransferencia.trim()}
          >
            TERMINAR ENTRENAMIENTO →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">ENTRENAMIENTO SUPERADO</span>
          <div className="finishMark">RR</div>

          <h1>No has memorizado una respuesta.</h1>
          <h2>Has empezado a aprender a construirlas.</h2>

          <div className="comparison">
            <div>
              <span>PRIMER SPOT</span>
              <p>{respuestaInicial}</p>
            </div>
            <div>
              <span>NUEVO SPOT · SIN MULETAS</span>
              <p>{respuestaTransferencia}</p>
            </div>
          </div>

          <div className="lesson">
            <span>TU MAPA RR</span>
            <blockquote>
              NOTO QUÉ ME PASA → DESCUBRO QUÉ NECESITA → AJUSTO → RESPONDO →
              <strong> DEJO LA PUERTA ABIERTA.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>¿QUÉ SIGNIFICA EDUCAR BIEN AQUÍ?</span>
            <p>
              No significa acertar siempre ni encontrar una frase perfecta.
              Significa aumentar las posibilidades de escuchar, comprender,
              responder con información ajustada y mantener un vínculo en el que
              tu hijo pueda volver a preguntar.
            </p>
          </div>

          <div className="nextSpot">
            <span>RR · CRECER</span>
            <strong>ANTES NO SABÍAS QUÉ DECIR.</strong>
            <p>
              Ahora tienes un proceso que puedes volver a utilizar cuando llegue
              una pregunta que todavía no habías preparado.
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
