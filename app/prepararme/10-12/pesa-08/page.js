"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Me sale insistir hasta saber qué pasa",
  "Me preocupa que me esté ocultando algo importante",
  "Me enfada que antes me contara más cosas",
  "Me sale retirarme y esperar a que venga",
  "Quiero estar disponible sin invadir",
];

export default function Pesa08Prepararse1012() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [puerta, setPuerta] = useState("");
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
      <header className="trainingHeader">
        <Link href="/prepararme/10-12" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 08 · VÍNCULO SIN INVASIÓN</small>
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
              src="/10-12/pesa08.png"
              alt="Pesa 08 · No quiero hablar contigo de eso"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · CUANDO NO QUIERE HABLAR</span>
              <p>
                A medida que crece, mantener el vínculo ya no significa tener
                acceso inmediato a todo lo que piensa, siente o vive.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 20 KG</span>
          <h1>«No quiero hablar contigo de eso.»</h1>

          <div className="scene">
            <p>Notas que algo le preocupa y preguntas. Te responde:</p>
            <blockquote>
              —No quiero hablar contigo de eso. Déjame.
            </blockquote>
          </div>

          <h2>¿Qué harías ahora?</h2>

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
          <h1>Su silencio también activa historias en ti.</h1>

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

          <h2>¿Qué interpretación aparece?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Ya no confía en mí», «si no me lo cuenta es porque es grave»..."
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
          <h1>No querer hablar ahora no significa no confiar en ti.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>En este momento no quiere hablar contigo sobre eso.</p>
            </div>
            <div>
              <span>HISTORIA POSIBLE</span>
              <p>
                «Me oculta algo», «ya no me necesita», «he perdido su confianza»
                o «tengo derecho a saberlo porque soy su padre/madre».
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Estar disponible no es lo mismo que
              <strong> tener acceso inmediato.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            APRENDER A DEJAR UNA PUERTA →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VÍNCULO SIN INVASIÓN</span>
          <h1>Retirarte no tiene que significar desaparecer.</h1>

          <div className="comparison">
            <div>
              <span>INVADIR</span>
              <p>«Hasta que no me digas qué pasa no te vas.»</p>
              <p>«Soy tu padre. Tienes que contármelo.»</p>
            </div>
            <div>
              <span>DESAPARECER</span>
              <p>«Pues si no quieres hablar, allá tú.»</p>
            </div>
            <div>
              <span>DEJAR PUERTA</span>
              <p>
                «Vale. No tienes que contármelo ahora. Si luego quieres hablar,
                estoy aquí.»
              </p>
            </div>
          </div>

          <textarea
            value={puerta}
            onChange={(e) => setPuerta(e.target.value)}
            placeholder="Construye una frase que respete su espacio sin cerrar el vínculo..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(4)}
            disabled={!puerta.trim()}
          >
            VER QUÉ CAMBIA →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">EL TIEMPO TAMBIÉN FORMA PARTE</span>
          <h1>No todas las conversaciones ocurren cuando tú decides.</h1>

          <div className="yourFirstAnswer">
            <span>TU PUERTA</span>
            <p>{puerta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>MÁS TARDE</span>
              <p>
                No es nada grave. Unos amigos estaban hablando de quién les
                gusta y me preguntaron a mí. No sabía qué decir y me dio
                vergüenza.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Respetar el primer «no quiero hablar» no garantizaba que volviera.
            Pero evitó que la conversación se convirtiera en una lucha por el
            control.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            CONSTRUIR RESPUESTA · 20 KG →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 20 KG</span>
          <h1>Ahora que habla, no cobres la espera.</h1>

          <p className="trainingLead">
            Evita «¿ves como tenías que habérmelo contado antes?». Recíbelo como
            una nueva oportunidad de vínculo.
          </p>

          <div className="scene">
            <blockquote>
              —Me preguntaron quién me gusta. No sabía qué decir y me dio
              vergüenza.
            </blockquote>
          </div>

          <textarea
            value={respuesta20}
            onChange={(e) => setRespuesta20(e.target.value)}
            placeholder="¿Qué responderías ahora?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(6)}
            disabled={!respuesta20.trim()}
          >
            SUBIR A 30 KG →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">30 KG · NO TODO SILENCIO ES IGUAL</span>
          <h1>Respetar intimidad no significa ignorar señales.</h1>

          <div className="scene">
            <p>Otro día ocurre algo distinto.</p>
            <blockquote>
              —No quiero ir mañana al entrenamiento. Y no quiero hablar de por
              qué.
            </blockquote>
          </div>

          <p className="trainingLead">
            Además, observas que está claramente angustiado y que este rechazo
            apareció de forma repentina.
          </p>

          <div className="lesson">
            <span>NUEVO CRITERIO</span>
            <blockquote>
              «No quiero hablar» merece respeto.
              <strong> Pero el adulto sigue teniendo responsabilidad de cuidado.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            DECIDIR CUÁNTO ACERCARME →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR · 30 KG</span>
          <h1>Ni interrogatorio ni retirada automática.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES RESPETAR</span>
              <p>«No tienes que contarme todos los detalles ahora.»</p>
            </div>
            <div>
              <span>Y A LA VEZ CUIDAR</span>
              <p>
                «Pero veo que esto te está afectando y necesito saber al menos
                si estás seguro y si alguien te está haciendo daño, presionando
                o asustando.»
              </p>
            </div>
          </div>

          <textarea
            value={respuesta30}
            onChange={(e) => setRespuesta30(e.target.value)}
            placeholder="Construye tu respuesta equilibrando espacio y protección..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuesta30.trim()}
          >
            VER EL LÍMITE DEL ESPACIO →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">PUENTE DE SEGURIDAD</span>
          <h1>Hay momentos en que esperar deja de ser suficiente.</h1>

          <p className="trainingLead">
            Si aparecen miedo intenso, amenazas, presión, dolor, cambios
            importantes de conducta, rechazo persistente de una persona o lugar,
            secretos impuestos u otras señales preocupantes, el adulto puede
            necesitar aumentar la protección aunque el menor todavía no quiera
            explicar todos los detalles.
          </p>

          <div className="lesson">
            <span>RR NO DICE</span>
            <blockquote>
              «Respeta siempre su silencio».
              <strong> Dice: distingue intimidad de posible riesgo.</strong>
            </blockquote>
          </div>

          <Link href="/orientacion" className="secondaryTrainingButton">
            ABRIR · HA PASADO ALGO
          </Link>

          <button className="trainingButton" onClick={() => irA(9)}>
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>Disponibilidad no es persecución. Espacio no es abandono.</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>
            <div>
              <span>20 KG · ESPACIO</span>
              <p>{respuesta20}</p>
            </div>
            <div>
              <span>30 KG · ESPACIO + CUIDADO</span>
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
          <h1>Ahora no tienes contexto.</h1>

          <div className="scene">
            <blockquote>
              —No pasa nada. Solo quiero que dejes de preguntarme por el móvil.
            </blockquote>
          </div>

          <p className="trainingLead">
            Has notado que desde hace varios días gira la pantalla cuando te
            acercas y está más tenso después de recibir mensajes. No sabes por
            qué.
          </p>

          <p className="trainingLead">
            Sin menú: decide qué es hecho, qué es historia, qué espacio puedes
            respetar y qué necesitarías observar o preguntar para valorar si
            debes aumentar la protección.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="Construye tu respuesta y tu criterio..."
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
          <span className="trainingTag">MAPA RR · VÍNCULO</span>
          <h1>Seguir siendo referencia cambia de forma.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              REGULO MI NECESIDAD DE SABER → SEPARO HECHO/HISTORIA → RESPETO
              ESPACIO → DEJO PUERTA ABIERTA → OBSERVO →
              <strong> AUMENTO CUIDADO SI APARECEN SEÑALES DE RIESGO.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>PREPARARSE</span>
            <p>
              Cuando era más pequeño podías conocer casi todo su mundo. Ahora
              parte de ese mundo será suyo. Tu trabajo no es recuperar todo el
              acceso: es conseguir que sigas siendo un lugar al que pueda volver.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 08 · COMPLETADA</span>

          <div className="finishMark">30</div>

          <h1>No necesitas saberlo todo para seguir estando cerca.</h1>
          <h2>Pero estar cerca también significa saber cuándo no basta con esperar.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Aprende a soportar no saber inmediatamente. Respeta su intimidad,
              deja una puerta abierta y distingue un silencio normal de señales
              que pueden requerir más cuidado y protección.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 09 · «NO SÉ SI ESTO ESTÁ BIEN»</strong>
            <p>
              Llegamos a la integración. Menos ayudas, menos frases preparadas y
              varios criterios a la vez: confianza, grupo, pantallas, intimidad,
              límites y protección.
            </p>
          </div>

          <Link
            href="/prepararme/10-12/pesa-09"
            className="trainingButton linkButton"
          >
            IR A PESA 09 →
          </Link>

          <Link href="/prepararme/10-12" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
