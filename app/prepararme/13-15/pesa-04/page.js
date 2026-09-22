"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Me sale decirle que no tenga ninguna prisa",
  "Quiero saber quién dice haberlo hecho",
  "Me preocupa que haga algo solo por encajar",
  "Me sale darle una charla sobre sexo y riesgos",
  "Quiero ayudarle a distinguir lo que quiere de lo que el grupo espera",
];

export default function Pesa04Decidir1315() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuesta20, setRespuesta20] = useState("");
  const [respuesta30, setRespuesta30] = useState("");
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
        weightNumber={4}
        startedKg={20}
        completedKg={30}
        completed={paso === 12}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/13-15" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 04 · GRUPO, COMPARACIÓN Y SEXO</small>
        </div>

        <div className="kg">20 → 30 KG</div>
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
              src="/13-15/pesa04.png"
              alt="Pesa 04 · Todos dicen que ya lo han hecho"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · CUANDO EL GRUPO CREA UN CALENDARIO</span>
              <p>
                Cuando todos parecen ir por delante, es fácil confundir
                comparación con una señal de que también deberías hacerlo.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 20 KG</span>
          <h1>«Todos dicen que ya lo han hecho.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —En mi grupo casi todos dicen que ya han tenido relaciones
              sexuales. Yo no. Empiezo a sentir que soy el raro.
            </blockquote>
          </div>

          <h2>¿Qué le responderías?</h2>

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
          <h1>¿Qué quieres resolver antes de escucharle?</h1>

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

          <h2>¿Qué historia aparece en tu cabeza?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Sus amigos le están presionando», «seguro que exageran», «esto va demasiado rápido»..."
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
          <h1>«Todos dicen» no significa «todos han hecho».</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                En su grupo varias personas dicen haber tenido relaciones
                sexuales y él se está comparando con ellas.
              </p>
            </div>

            <div>
              <span>NO SABEMOS</span>
              <p>
                Si todo lo que cuentan es cierto, qué significa exactamente
                «haberlo hecho» para cada uno ni cómo se sintieron con sus
                decisiones.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Lo que otros cuentan puede informar sobre el grupo.
              <strong> No crea automáticamente mi calendario.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR LA PRESIÓN →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>La pregunta no es solo «¿lo has hecho?».</h1>

          <div className="conversation">
            <div>
              <span>PUEDES DESCUBRIR</span>
              <p>«¿Tú quieres hacerlo o te preocupa quedarte atrás?»</p>
              <p>«¿Qué crees que cambiaría si fueras el último?»</p>
              <p>«¿Qué significa para ti estar preparado?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una pregunta que separe deseo de comparación..."
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
          <span className="trainingTag">APARECE EL NÚCLEO</span>
          <h1>No está diciendo «quiero hacerlo».</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                No sé si quiero. Lo que me molesta es sentir que todos saben más
                que yo y que cuando hablan de eso tengo que fingir.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            La presión no siempre llega como «hazlo». A veces llega como la
            sensación de que pertenecer exige aparentar experiencia.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            ENTRENAR CRITERIO →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">COMPARACIÓN ≠ PREPARACIÓN</span>
          <h1>No existe una carrera que tenga que alcanzar.</h1>

          <div className="conversation">
            <div>
              <span>EL GRUPO PUEDE DECIR</span>
              <p>«Todo el mundo lo hace.»</p>
            </div>

            <div>
              <span>MI CUERPO PUEDE DECIR</span>
              <p>«Tengo curiosidad, pero todavía no quiero.»</p>
            </div>

            <div>
              <span>MI CABEZA PUEDE DECIR</span>
              <p>«No estoy seguro de estar preparado.»</p>
            </div>

            <div>
              <span>MI DECISIÓN PUEDE SER</span>
              <p>«Todavía no.»</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>IMPORTANTE</span>
            <p>
              «Todavía no» no necesita una fecha de caducidad. Tampoco obliga a
              justificar la decisión ante el grupo.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            CONSTRUIR RESPUESTA · 20 KG →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 20 KG</span>
          <h1>Devuélvele su propio calendario.</h1>

          <div className="scene">
            <blockquote>
              —No sé si quiero. Me preocupa parecer el único que no sabe nada.
            </blockquote>
          </div>

          <textarea
            value={respuesta20}
            onChange={(e) => setRespuesta20(e.target.value)}
            placeholder="Construye tu respuesta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuesta20.trim()}
          >
            SUBIR A 30 KG →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">30 KG · LA PRESIÓN SE ACERCA</span>
          <h1>Ahora ya no es solo conversación de grupo.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO AÑADE</span>
              <p>
                La persona con la que estoy saliendo me ha dicho que casi todas
                las parejas de nuestra edad ya lo hacen y que no entiende por
                qué nosotros tenemos que esperar.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            La comparación del grupo ha entrado dentro de la relación. Ahora
            tiene que distinguir lo que quiere de lo que teme perder si dice
            «todavía no».
          </p>

          <button className="trainingButton" onClick={() => irA(8)}>
            DECIDIR CON PRESIÓN →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">DECISIÓN · 30 KG</span>
          <h1>Un «sí» para evitar un coste no merece pasar desapercibido.</h1>

          <p className="trainingLead">
            Ayúdale a observar qué ocurriría si la otra persona aceptara un
            «todavía no». Y qué información aporta sobre la relación si ese
            límite provoca enfado, insistencia, culpa o amenaza de ruptura.
          </p>

          <div className="lesson">
            <span>EV MAX</span>
            <blockquote>
              No preguntes solo «¿quieres hacerlo?».
              <strong>
                {" "}
                Pregunta también «¿seguirías eligiéndolo si no tuvieras miedo a
                quedar atrás o perder a alguien?».
              </strong>
            </blockquote>
          </div>

          <textarea
            value={respuesta30}
            onChange={(e) => setRespuesta30(e.target.value)}
            placeholder="¿Cómo le ayudarías a pensar esta nueva situación?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(9)}
            disabled={!respuesta30.trim()}
          >
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>Del calendario del grupo a una decisión propia.</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>20 KG · COMPARACIÓN</span>
              <p>{respuesta20}</p>
            </div>

            <div>
              <span>30 KG · PRESIÓN EN LA RELACIÓN</span>
              <p>{respuesta30}</p>
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
          <h1>Cambia el tema. Mantén el criterio.</h1>

          <div className="scene">
            <blockquote>
              —Todos mis amigos beben cuando salen. Yo no quería, pero el otro
              día cogí un vaso porque estaba cansado de que me llamaran niño.
            </blockquote>
          </div>

          <p className="trainingLead">
            Ya no estamos hablando de sexo. Si el aprendizaje era real, debería
            sobrevivir al cambio de escenario: comparación, pertenencia, coste
            social y decisión propia.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="Aplica el criterio sin repetir el guion anterior..."
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
          <span className="trainingTag">MAPA RR · PRESIÓN Y COMPARACIÓN</span>
          <h1>Que muchos elijan algo no convierte esa elección en mía.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              ESCUCHO LA COMPARACIÓN → SEPARO HECHO/HISTORIA → DESCUBRO QUÉ
              QUIERO → HAGO VISIBLE LA PRESIÓN → MIRO EL COSTE →
              <strong> DECIDO CON MI CRITERIO, NO CON EL CALENDARIO DEL GRUPO.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO TRANSFERIBLE</span>
            <p>
              Pertenecer importa. Pero pertenecer no debería exigir que entregue
              automáticamente mis tiempos, mis límites o mis decisiones.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 04 · COMPLETADA</span>

          <div className="finishMark">30</div>

          <h1>El grupo puede tener un calendario.</h1>
          <h2>Tu hijo no tiene por qué vivir dentro de él.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              La comparación puede hacer que una decisión ajena parezca una
              obligación propia. El entrenamiento consiste en reconocer esa
              presión, descubrir qué quiere realmente y poder sostener un ritmo
              distinto sin convertirlo en inferioridad.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 05 · «ME HA PEDIDO UNA FOTO»</strong>
            <p>
              En la siguiente Pesa una decisión íntima entra en el móvil. Antes
              de enviar habrá que pensar no solo «¿quiero?», sino también qué
              control puede perderse una vez que algo privado sale del
              dispositivo.
            </p>
          </div>

          <Link
            href="/prepararme/13-15/pesa-05"
            className="trainingButton linkButton"
          >
            IR A PESA 05 →
          </Link>

          <Link href="/prepararme/13-15" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
