"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Me sale decirle que es demasiado pronto",
  "Quiero hablarle inmediatamente de embarazo e infecciones",
  "Me preocupa que después se arrepienta",
  "Me sale preguntarle exactamente qué piensa hacer",
  "Quiero ayudarle a pensar sin convertir la conversación en un interrogatorio",
];

export default function Pesa07Decidir1315() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaDecision, setRespuestaDecision] = useState("");
  const [respuestaCuidado, setRespuestaCuidado] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 13;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <TrainingProgressTracker
        stage="13-15"
        weightNumber={7}
        startedKg={30}
        completedKg={30}
        completed={paso === 12}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/13-15" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 07 · SEXUALIDAD, DECISIÓN Y CUIDADO</small>
        </div>

        <div className="kg">30 KG</div>
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
              src="/13-15/pesa07.png"
              alt="Pesa 07 · Creo que quiero hacerlo"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · DECIDIR SIN DELEGAR EL CRITERIO</span>
              <p>
                Cuando desaparece la presión evidente aparece un reto más
                difícil: acompañar una decisión que el adolescente siente como
                propia.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 30 KG</span>
          <h1>«Creo que quiero hacerlo.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —Creo que la persona con la que estoy saliendo y yo queremos tener
              relaciones sexuales. Quería hablar contigo antes.
            </blockquote>
          </div>

          <h2>¿Cuál sería tu primera respuesta?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe lo que realmente dirías..."
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
          <h1>Tu miedo puede aparecer antes que su pregunta.</h1>

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

          <h2>¿Qué historia has construido ya?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «No está preparado», «si pregunta es porque ya lo ha decidido», «esto va demasiado rápido»..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!reaccion || !historia.trim()}
          >
            HECHO ≠ HISTORIA →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>
          <h1>«Creo que quiero» todavía contiene una pregunta.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Está considerando una decisión sexual y ha elegido hablar
                contigo antes de tomarla.
              </p>
            </div>

            <div>
              <span>TODAVÍA NO SABES</span>
              <p>
                Qué significa exactamente para él, cuánto lo ha pensado, qué
                dudas tiene, qué sabe sobre cuidado o qué espera de ti.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>PRIMER OBJETIVO</span>
            <blockquote>
              No conviertas una conversación previa a una decisión en
              <strong> un castigo por haber confiado en ti.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>Preparación no es una sola pregunta.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES EXPLORAR</span>
              <p>«¿Qué hace que pienses que quieres dar ese paso?»</p>
              <p>«¿Hay algo que te preocupe o sobre lo que tengas dudas?»</p>
              <p>«¿Habéis podido hablar entre vosotros de límites y cuidado?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una pregunta que ayude a pensar sin interrogar..."
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
          <span className="trainingTag">APARECE SU CRITERIO ACTUAL</span>
          <h1>Ahora puedes trabajar con lo que realmente piensa.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                No es porque me estén presionando. Me apetece y confío en esa
                persona. Pero también estoy nervioso y no sé si estar nervioso
                significa que todavía no estoy preparado.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            La decisión no se resuelve buscando una emoción perfecta. Se
            construye observando varias dimensiones a la vez.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            CONSTRUIR CRITERIO →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">DECISIÓN MULTIVARIABLE</span>
          <h1>Querer es importante. No es la única variable.</h1>

          <div className="conversation">
            <div>
              <span>DESEO</span>
              <p>¿Lo quiero yo o estoy evitando un coste?</p>
            </div>

            <div>
              <span>CONSENTIMIENTO</span>
              <p>
                ¿Ambos podemos decir sí, no o parar sin presión ni represalias?
              </p>
            </div>

            <div>
              <span>COMUNICACIÓN</span>
              <p>¿Podemos hablar de límites, expectativas y cuidado?</p>
            </div>

            <div>
              <span>PROTECCIÓN</span>
              <p>
                ¿Sabemos cómo reducir riesgos de embarazo e infecciones de
                transmisión sexual?
              </p>
            </div>

            <div>
              <span>CONTEXTO</span>
              <p>
                ¿La situación permite decidir con claridad y sin miedo,
                intoxicación, presión o prisas?
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO RR</span>
            <p>
              Estar preparado no significa no sentir nervios. Significa poder
              mirar la decisión con suficiente claridad para cuidarse y cuidar
              a la otra persona.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            CONSTRUIR RESPUESTA →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 30 KG</span>
          <h1>No le entregues un veredicto. Ayúdale a construirlo.</h1>

          <div className="scene">
            <blockquote>
              —Me apetece, confío en esa persona, pero también estoy nervioso.
              ¿Eso significa que no estoy preparado?
            </blockquote>
          </div>

          <textarea
            value={respuestaDecision}
            onChange={(e) => setRespuestaDecision(e.target.value)}
            placeholder="¿Cómo le ayudarías a pensar esta decisión?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuestaDecision.trim()}
          >
            PASAR DEL DESEO AL CUIDADO →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">CUIDADO · INFORMACIÓN CONCRETA</span>
          <h1>Una conversación abierta también necesita información útil.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO PREGUNTA</span>
              <p>
                ¿Y qué deberíamos tener claro para cuidarnos si algún día
                decidimos hacerlo?
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>BASE DE CUIDADO</span>
            <blockquote>
              Hablar de anticoncepción y prevención de infecciones no empuja una
              decisión.
              <strong> Permite que, si se toma, sea más informada.</strong>
            </blockquote>
          </div>

          <p className="trainingLead">
            La información concreta debe adaptarse a la situación y a los
            recursos sanitarios disponibles. El preservativo ayuda a reducir el
            riesgo de infecciones de transmisión sexual y embarazo; otros
            métodos anticonceptivos pueden reducir el riesgo de embarazo, pero
            no sustituyen la protección frente a infecciones.
          </p>

          <textarea
            value={respuestaCuidado}
            onChange={(e) => setRespuestaCuidado(e.target.value)}
            placeholder="¿Cómo abrirías esta conversación sobre cuidado sin convertirla en un sermón?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaCuidado.trim()}
          >
            AÑADIR UNA VARIABLE DIFÍCIL →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONTEXTO · 30 KG</span>
          <h1>La misma decisión cambia si cambia el contexto.</h1>

          <div className="scene">
            <blockquote>
              —¿Y si estamos en una fiesta y hemos bebido un poco? Si los dos
              queremos, ¿da igual?
            </blockquote>
          </div>

          <p className="trainingLead">
            Aquí aparece un criterio esencial: alcohol u otras sustancias pueden
            afectar juicio, comunicación y capacidad para consentir. Cuando no
            hay claridad suficiente para saber qué quiere una persona, no es el
            momento de avanzar.
          </p>

          <div className="criterionReminder">
            <span>REGLA DE CUIDADO</span>
            <p>
              Si la capacidad para decidir o comunicar está afectada, la
              prioridad es parar, cuidar y posponer la decisión.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>De «te dejo / no te dejo» a construir criterio.</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>DECISIÓN</span>
              <p>{respuestaDecision}</p>
            </div>

            <div>
              <span>CUIDADO</span>
              <p>{respuestaCuidado}</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 30 KG</span>
          <h1>Ahora la decisión se frena sola.</h1>

          <div className="scene">
            <blockquote>
              —Ayer pensaba que sí quería, pero hoy me he levantado y ya no lo
              tengo tan claro. Me da vergüenza decírselo porque ya habíamos
              hablado de hacerlo.
            </blockquote>
          </div>

          <p className="trainingLead">
            No hay que encontrar una excusa. Haberlo hablado, preparado o
            deseado antes no crea una deuda. La posibilidad de cambiar de
            decisión forma parte del criterio que ya venimos entrenando.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cómo le ayudarías a responder ahora?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(11)}
            disabled={!transferencia.trim()}
          >
            VER MAPA RR →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · DECISIÓN Y CUIDADO</span>
          <h1>Una decisión íntima no necesita prisa para ser válida.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              DESCUBRO QUÉ QUIERO → COMPRUEBO QUE PUEDO DECIDIR LIBREMENTE →
              HABLAMOS DE CONSENTIMIENTO Y LÍMITES → INCORPORO PROTECCIÓN Y
              CONTEXTO → ACEPTO QUE PUEDO PARAR →
              <strong> DECIDO SIN CONVERTIR LO HABLADO EN UNA DEUDA.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>PUENTE DE CUIDADO</span>
            <p>
              Cuando existan dudas concretas sobre anticoncepción, infecciones
              de transmisión sexual o salud sexual, la conversación familiar
              puede continuar apoyándose en información sanitaria profesional y
              apropiada para su edad y situación.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 07 · COMPLETADA</span>

          <div className="finishMark">30</div>

          <h1>Querer forma parte de la decisión.</h1>
          <h2>Cuidarse también.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Acompañar no significa decidir por el adolescente ni retirarse de
              la conversación. Significa ayudarle a mirar deseo,
              consentimiento, comunicación, protección, contexto y posibilidad
              de cambiar de decisión.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 08 · «NO QUIERO CONTARTE TODO»</strong>
            <p>
              En la siguiente Pesa aparece una frontera decisiva de esta etapa:
              el adolescente necesita intimidad propia y el adulto sigue
              teniendo responsabilidad de cuidado. Entrenaremos cómo sostener
              ambas cosas sin convertir privacidad en abandono ni cuidado en
              vigilancia total.
            </p>
          </div>

          <Link
            href="/prepararme/13-15/pesa-08"
            className="trainingButton linkButton"
          >
            IR A PESA 08 →
          </Link>

          <Link href="/prepararme/13-15" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
