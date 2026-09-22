"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Me sale prohibirlo inmediatamente",
  "Me preocupa que la imagen termine circulando",
  "Quiero saber quién se la ha pedido",
  "Me sale asustarle para que no la envíe",
  "Quiero que pueda contármelo sin pensar que va a meterse en un problema",
];

export default function Pesa05Decidir1315() {
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
        weightNumber={5}
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
          <small>PESA 05 · INTIMIDAD DIGITAL</small>
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
              src="/13-15/pesa05.png"
              alt="Pesa 05 · Me ha pedido una foto"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · INTIMIDAD DIGITAL</span>
              <p>
                Una decisión puede durar segundos. Lo que sale del dispositivo
                puede dejar de estar bajo nuestro control.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 20 KG</span>
          <h1>«Me ha pedido una foto.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —La persona con la que estoy saliendo me ha pedido una foto
              íntima. No sé qué contestarle.
            </blockquote>
          </div>

          <h2>¿Qué responderías primero?</h2>

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
          <h1>Tu alarma puede proteger. También puede cerrar la conversación.</h1>

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

          <h2>¿Qué historia completa tu cabeza?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Si se la pide es porque le está presionando», «seguro que ya ha enviado alguna»..."
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
          <h1>Primero descubre qué ha ocurrido.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Alguien con quien mantiene una relación le ha pedido una imagen
                íntima y él ha venido a contártelo antes de decidir.
              </p>
            </div>

            <div>
              <span>TODAVÍA NO SABES</span>
              <p>
                Si existe presión, si ha enviado algo antes, qué respuesta espera
                la otra persona o qué teme que ocurra si dice que no.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>PRIMER OBJETIVO</span>
            <blockquote>
              Antes de corregir una decisión que todavía no ha tomado,
              <strong> conserva el canal por el que acaba de pedir ayuda.</strong>
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
          <h1>Pregunta lo necesario, no todo lo imaginable.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES DESCUBRIR</span>
              <p>«¿Tú quieres enviarla?»</p>
              <p>«¿Qué crees que pasaría si dijeras que no?»</p>
              <p>«¿Te lo ha pedido una vez o está insistiendo?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una pregunta que ayude a descubrir sin interrogar..."
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
          <span className="trainingTag">APARECE LA DECISIÓN</span>
          <h1>No basta con «quiero» o «no quiero».</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Una parte de mí quiere porque confío en esa persona. Pero me da
                miedo que algún día deje de estar bajo mi control.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ha aparecido un criterio nuevo: una decisión digital no termina
            necesariamente en el momento de pulsar «enviar».
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            ENTRENAR CONTROL Y CONSECUENCIAS →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">ANTES / DESPUÉS DE ENVIAR</span>
          <h1>Hay decisiones que cambian de naturaleza al salir de tu dispositivo.</h1>

          <div className="conversation">
            <div>
              <span>ANTES DE ENVIAR</span>
              <p>
                Puedo decidir si creo la imagen, si la comparto y con quién.
              </p>
            </div>

            <div>
              <span>DESPUÉS DE ENVIAR</span>
              <p>
                Ya no puedo garantizar copias, capturas, reenvíos, almacenamiento
                o qué ocurrirá con ella en el futuro.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO RR</span>
            <p>
              Confiar en una persona y reconocer que una imagen digital puede
              escapar de mi control no son ideas incompatibles.
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
          <h1>No uses el miedo como única herramienta.</h1>

          <div className="scene">
            <blockquote>
              —Confío en esa persona, pero me preocupa perder el control de la
              foto.
            </blockquote>
          </div>

          <p className="trainingLead">
            El objetivo es que pueda reconocer el riesgo sin necesitar una
            historia de terror para hacerlo.
          </p>

          <textarea
            value={respuesta20}
            onChange={(e) => setRespuesta20(e.target.value)}
            placeholder="¿Cómo le ayudarías a pensar antes de decidir?"
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
          <span className="trainingTag">30 KG · APARECE PRESIÓN</span>
          <h1>La petición deja de ser neutral.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO AÑADE</span>
              <p>
                Le dije que no estaba seguro y me respondió: «Si de verdad
                confiaras en mí, no tendrías problema».
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CAMBIO DE SPOT</span>
            <blockquote>
              Ya no solo estamos valorando una decisión digital.
              <strong>
                {" "}
                Ahora la confianza está siendo utilizada para empujar esa
                decisión.
              </strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            HACER VISIBLE LA PRESIÓN →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">DECISIÓN · 30 KG</span>
          <h1>La confianza no necesita una prueba íntima.</h1>

          <p className="trainingLead">
            Una relación puede incluir deseo, curiosidad e intimidad. Pero
            convertir un límite en una prueba de amor o confianza altera las
            condiciones en las que se está tomando la decisión.
          </p>

          <textarea
            value={respuesta30}
            onChange={(e) => setRespuesta30(e.target.value)}
            placeholder="¿Cómo responderías ahora, sabiendo que ha aparecido presión?"
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
          <h1>De prohibir una foto a reconocer cómo se construye la decisión.</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>20 KG · CONTROL DIGITAL</span>
              <p>{respuesta20}</p>
            </div>

            <div>
              <span>30 KG · PRESIÓN</span>
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
          <h1>Ahora la imagen ya existe.</h1>

          <div className="scene">
            <blockquote>
              —Al final mandé una foto hace unos días. Ahora hemos discutido y
              tengo miedo de que la enseñe. No sé qué hacer.
            </blockquote>
          </div>

          <p className="trainingLead">
            Aquí el objetivo cambia. Ya no sirve una lección sobre lo que
            debería haber hecho. Primero hay que conservar la confianza,
            descubrir qué está ocurriendo y valorar qué protección necesita.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cuál sería tu primera respuesta ahora?"
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
          <span className="trainingTag">MAPA RR · INTIMIDAD DIGITAL</span>
          <h1>Cuando algo ya ha ocurrido, primero ayudamos. Después aprendemos.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RECIBO → NO CULPO → DESCUBRO → SEPARO DESEO DE PRESIÓN → HAGO
              VISIBLE QUÉ CONTROL PUEDE PERDERSE → DECIDIMOS EL SIGUIENTE PASO →
              <strong> AUMENTO PROTECCIÓN SI APARECEN AMENAZAS O DIFUSIÓN.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>PUENTE DE SEGURIDAD</span>
            <p>
              Si aparecen amenazas, chantaje, presión persistente, difusión sin
              permiso, participación de adultos u otras señales de riesgo, deja
              de ser solo una conversación educativa. Hay que proteger y buscar
              orientación adecuada.
            </p>
          </div>

          <Link href="/orientacion" className="secondaryTrainingButton">
            HA PASADO ALGO →
          </Link>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 05 · COMPLETADA</span>

          <div className="finishMark">30</div>

          <h1>Antes de enviar decides tú.</h1>
          <h2>Después, parte del control puede dejar de ser tuyo.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              La intimidad digital exige pensar no solo en lo que quiero ahora,
              sino en qué control conservaré después. Y si algo ya ha ocurrido,
              pedir ayuda debe seguir siendo una salida posible.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>
              PESA 06 · «SI CONFÍAS EN MÍ, DEMUÉSTRAMELO»
            </strong>
            <p>
              En la siguiente Pesa dejamos la foto y entrenamos el mecanismo que
              acaba de aparecer: cuando afecto, confianza o miedo a perder una
              relación se utilizan para empujar una decisión.
            </p>
          </div>

          <Link
            href="/prepararme/13-15/pesa-06"
            className="trainingButton linkButton"
          >
            IR A PESA 06 →
          </Link>

          <Link href="/prepararme/13-15" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
