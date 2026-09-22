"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Me alegro y quiero saberlo todo",
  "Me preocupa que la relación le distraiga o le haga daño",
  "Me sale bromear con que ya tiene novio o novia",
  "Quiero darle normas inmediatamente",
  "Quiero escuchar qué significa esa relación para él o ella",
];

export default function Pesa02Decidir1315() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaRelacion, setRespuestaRelacion] = useState("");
  const [respuestaLimite, setRespuestaLimite] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 13;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/13-15" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 02 · RELACIONES Y LÍMITES</small>
        </div>

        <div className="kg">20 KG</div>
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
              src="/13-15/pesa02.png"
              alt="Pesa 02 · Estamos saliendo"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · RELACIONES Y LÍMITES</span>
              <p>
                Empezar una relación no convierte a dos personas en una sola.
                Siguen existiendo dos tiempos, dos intimidades y dos decisiones.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 20 KG</span>
          <h1>«Estamos saliendo.»</h1>

          <div className="scene">
            <p>Tu hijo te cuenta:</p>
            <blockquote>
              —¿Te acuerdas de la persona que te dije que me gustaba? Pues
              estamos saliendo.
            </blockquote>
          </div>

          <h2>¿Qué responderías primero?</h2>

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
          <h1>La relación es suya. Tu reacción también entra en la habitación.</h1>

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
            placeholder="Ej.: «Es demasiado pronto», «ahora querrá estar todo el día con esa persona»..."
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
          <h1>«Estamos saliendo» todavía cuenta muy poco.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>Tu hijo considera que ha empezado una relación con otra persona.</p>
            </div>

            <div>
              <span>TODAVÍA NO SABES</span>
              <p>
                Qué significa «salir» para ellos, cómo se tratan, qué esperan,
                qué límites tienen o qué preocupaciones puede haber.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              No respondas a tu definición adulta de relación antes de descubrir
              <strong> qué significa esa relación para ellos.</strong>
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
          <h1>Interés no es interrogatorio.</h1>

          <p className="trainingLead">
            Puedes mostrar que te importa sin pedir acceso inmediato a cada
            detalle de la relación.
          </p>

          <div className="conversation">
            <div>
              <span>PUEDES ABRIR</span>
              <p>«¿Y tú cómo te sientes con eso?»</p>
              <p>«¿Qué significa para vosotros estar saliendo?»</p>
              <p>«¿Hay algo de todo esto que quieras hablar conmigo?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye tu propia pregunta..."
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
          <span className="trainingTag">APARECE LA RELACIÓN REAL</span>
          <h1>Ahora ya no estás respondiendo a una etiqueta.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Estoy muy bien. Hablamos todo el tiempo. Pero ayer se enfadó
                porque tardé bastante en responderle a un mensaje.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Aquí aparece un criterio que servirá mucho más allá de esta
            relación: querer a alguien no da acceso permanente a su tiempo.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            ENTRENAR LÍMITES DENTRO DE LA RELACIÓN →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">RELACIÓN ≠ DISPONIBILIDAD TOTAL</span>
          <h1>Estar juntos no elimina el espacio propio.</h1>

          <div className="conversation">
            <div>
              <span>PUEDO QUERERTE</span>
              <p>y no contestar inmediatamente.</p>
            </div>

            <div>
              <span>PUEDO ESTAR CONTIGO</span>
              <p>y seguir queriendo tiempo con mis amigos o conmigo.</p>
            </div>

            <div>
              <span>PUEDO CONFIAR EN TI</span>
              <p>sin darte acceso automático a todas mis conversaciones.</p>
            </div>

            <div>
              <span>PUEDO CAMBIAR DE OPINIÓN</span>
              <p>sobre algo aunque antes hubiera dicho que sí.</p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO</span>
            <blockquote>
              Una relación añade vínculo.
              <strong> No borra autonomía.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            CONSTRUIR RESPUESTA →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 20 KG</span>
          <h1>No juzgues la relación. Ayúdale a observarla.</h1>

          <div className="scene">
            <blockquote>
              —Ayer se enfadó porque tardé bastante en responderle a un mensaje.
            </blockquote>
          </div>

          <textarea
            value={respuestaRelacion}
            onChange={(e) => setRespuestaRelacion(e.target.value)}
            placeholder="¿Qué le dirías o preguntarías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuestaRelacion.trim()}
          >
            NUEVA INFORMACIÓN →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">EL LÍMITE SE HACE MÁS VISIBLE</span>
          <h1>Ahora aparece una petición concreta.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO AÑADE</span>
              <p>
                También me ha pedido la contraseña del móvil. Dice que si somos
                pareja no deberíamos tener secretos.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Esta es una oportunidad para enseñar una distinción importante:
            privacidad y engaño no son la misma cosa.
          </p>

          <div className="lesson">
            <span>HECHO ≠ HISTORIA</span>
            <blockquote>
              Tener espacios privados no demuestra que ocultes algo malo.
              <strong> La confianza no exige vigilancia total.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            AYUDARLE A PENSAR EL LÍMITE →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">CRITERIO · 20 KG</span>
          <h1>No le des solo una norma. Dale una pregunta que pueda reutilizar.</h1>

          <p className="trainingLead">
            Puede preguntarse: «¿Estoy haciendo esto porque quiero o porque temo
            que la otra persona se enfade, dude de mí o me deje?»
          </p>

          <textarea
            value={respuestaLimite}
            onChange={(e) => setRespuestaLimite(e.target.value)}
            placeholder="Construye cómo le ayudarías a pensar la petición de la contraseña..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(9)}
            disabled={!respuestaLimite.trim()}
          >
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>De «qué bonita relación» a «cómo funciona esta relación».</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>CUANDO APARECE EL PRIMER LÍMITE</span>
              <p>{respuestaRelacion}</p>
            </div>

            <div>
              <span>CUANDO APARECE PRIVACIDAD</span>
              <p>{respuestaLimite}</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 20 KG</span>
          <h1>Ahora el límite va en la otra dirección.</h1>

          <div className="scene">
            <blockquote>
              —Le he preguntado con quién estaba hablando porque llevaba mucho
              rato conectado y no me lo quiere decir. Si somos pareja, ¿no
              debería contármelo?
            </blockquote>
          </div>

          <p className="trainingLead">
            Ya no estás ayudándole a defender su privacidad. Ahora tiene que
            reconocer la privacidad de la otra persona. El criterio debe
            funcionar en las dos direcciones.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cómo le ayudarías a pensarlo?"
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
          <span className="trainingTag">MAPA RR · RELACIONES</span>
          <h1>Un límite que solo vale para mí no es todavía un criterio.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RECIBO → DESCUBRO CÓMO FUNCIONA LA RELACIÓN → DISTINGO AFECTO DE
              CONTROL → IDENTIFICO EL LÍMITE → LO APLICO EN LAS DOS DIRECCIONES
              →
              <strong> DECIDO SIN UTILIZAR EL MIEDO COMO PRUEBA DE AMOR.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO TRANSFERIBLE</span>
            <p>
              Estar en una relación no me da propiedad sobre el tiempo, el
              móvil, las amistades, la intimidad o las decisiones de la otra
              persona. Tampoco se los entrega a ella sobre mí.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 02 · COMPLETADA</span>

          <div className="finishMark">20</div>

          <h1>Una relación une dos vidas.</h1>
          <h2>No convierte dos personas en una sola.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              El objetivo no es decidir desde fuera si una relación es «buena»
              por una sola escena. Es enseñar a observar cómo funciona: si hay
              espacio, reciprocidad, respeto, posibilidad de decir no y límites
              que valen para ambos.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>
              PESA 03 · «¿CÓMO SÉ SI LA OTRA PERSONA QUIERE?»
            </strong>
            <p>
              En la siguiente Pesa entramos directamente en consentimiento:
              dejar de adivinar y aprender a comprobar, escuchar y respetar que
              una decisión también puede cambiar.
            </p>
          </div>

          <Link
            href="/prepararme/13-15/pesa-03"
            className="trainingButton linkButton"
          >
            IR A PESA 03 →
          </Link>

          <Link href="/prepararme/13-15" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
