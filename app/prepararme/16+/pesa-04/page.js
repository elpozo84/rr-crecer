"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Me sale decirle que es demasiado pronto",
  "Quiero preguntarle cómo piensa pagarlo",
  "Me preocupa que dependa demasiado de su pareja",
  "Quiero enumerarle todos los problemas de convivir juntos",
  "Quiero ayudarle a probar la solidez del plan sin decidir por él",
];

export default function Pesa04Responsabilizarse16Plus() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaProyecto, setRespuestaProyecto] = useState("");
  const [respuestaDependencia, setRespuestaDependencia] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 13;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <TrainingProgressTracker
        stage="16+"
        weightNumber={4}
        startedKg={30}
        completedKg={30}
        completed={paso === 12}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/16+" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 04 · RELACIÓN, CONVIVENCIA Y PROYECTO</small>
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
              src="/16+/pesa04.png"
              alt="Pesa 04 · Quiero irme a vivir con mi pareja"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · PROYECTO COMPARTIDO</span>
              <p>
                Una relación puede convertirse en una decisión de vivienda,
                dinero, rutinas y futuro. Querer a alguien no sustituye la
                necesidad de pensar cómo funcionará la vida compartida.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 30 KG</span>
          <h1>«Quiero irme a vivir con mi pareja.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —Estamos pensando irnos a vivir juntos. Hemos visto un piso y
              queremos probar.
            </blockquote>
          </div>

          <h2>¿Qué responderías?</h2>

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
          <h1>Tu experiencia puede ayudarte. También puede adelantarse demasiado.</h1>

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
            placeholder="Ej.: «Se está precipitando», «esto va a salir mal», «acabará dependiendo de esa persona»..."
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
          <h1>Irse a vivir juntos no demuestra que el proyecto sea bueno ni malo.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Están considerando compartir vivienda y han empezado a mirar una
                opción concreta.
              </p>
            </div>

            <div>
              <span>TODAVÍA NO SABES</span>
              <p>
                Cómo repartirán gastos, qué ingresos tienen, qué expectativas
                manejan, cómo resolverán desacuerdos o qué ocurriría si la
                convivencia no funciona.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              No necesito decidir si la relación durará.
              <strong> Puedo ayudarle a comprobar si el proyecto está pensado.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            ABRIR EL PROYECTO →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>De «¿estás seguro?» a preguntas que producen información.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES EXPLORAR</span>
              <p>«¿Cómo habéis pensado repartir los gastos?»</p>
              <p>«¿Qué espera cada uno de vivir juntos?»</p>
              <p>«¿Qué haríais si uno se queda sin ingresos?»</p>
              <p>«¿Habéis hablado de qué pasaría si alguno quisiera dejar la convivencia?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una pregunta que pruebe el proyecto sin atacar la relación..."
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
          <span className="trainingTag">APARECE EL PLAN REAL</span>
          <h1>Ahora puedes trabajar con algo más que ilusión.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Mi pareja gana bastante más que yo, así que al principio pagaría
                casi todo. Yo pondría lo que pudiera y ya compensaría cuando
                encuentre algo mejor.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Que una persona aporte más dinero no convierte automáticamente la
            relación en un problema. Pero sí abre preguntas sobre dependencia,
            acuerdos y capacidad real de elegir si las circunstancias cambian.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            ENTRENAR PROYECTO →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">PAREJA ≠ FUSIÓN</span>
          <h1>Compartir vida no exige perder capacidad de decisión.</h1>

          <div className="conversation">
            <div>
              <span>DINERO</span>
              <p>¿Cómo se acuerda lo que aporta cada uno?</p>
            </div>

            <div>
              <span>ESPACIO</span>
              <p>¿Siguen existiendo tiempos, amistades y actividades propias?</p>
            </div>

            <div>
              <span>DECISIONES</span>
              <p>¿Cómo se resuelven desacuerdos que afectan a ambos?</p>
            </div>

            <div>
              <span>SALIDA</span>
              <p>
                ¿Puede cualquiera replantearse la convivencia sin quedar
                completamente atrapado económica o emocionalmente?
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO RR</span>
            <p>
              La dependencia económica puede existir sin control. Lo importante
              es hacer visible qué poder crea, cómo se acuerda y qué margen de
              elección conserva cada persona.
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
          <h1>No dictes el proyecto. Ayúdale a someterlo a prueba.</h1>

          <div className="scene">
            <blockquote>
              —No veo el problema en que al principio pague más mi pareja. Nos
              queremos y lo hacemos entre los dos.
            </blockquote>
          </div>

          <textarea
            value={respuestaProyecto}
            onChange={(e) => setRespuestaProyecto(e.target.value)}
            placeholder="¿Cómo responderías sin convertir diferencia económica en condena ni ignorarla?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuestaProyecto.trim()}
          >
            CAMBIA UNA VARIABLE →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">NUEVA INFORMACIÓN</span>
          <h1>La dependencia empieza a utilizarse como argumento.</h1>

          <div className="scene">
            <blockquote>
              —Ayer discutimos y me dijo: «Si soy yo quien paga casi todo,
              tampoco puedes hacer siempre lo que te dé la gana».
            </blockquote>
          </div>

          <p className="trainingLead">
            Ahora la cuestión ya no es quién aporta más. Aparece algo diferente:
            utilizar una contribución económica para reclamar poder sobre
            decisiones personales.
          </p>

          <textarea
            value={respuestaDependencia}
            onChange={(e) => setRespuestaDependencia(e.target.value)}
            placeholder="¿Cómo le ayudarías a distinguir contribución, acuerdos y control?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaDependencia.trim()}
          >
            HACER VISIBLE EL CRITERIO →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">DINERO Y PODER</span>
          <h1>Pagar más puede cambiar un acuerdo. No compra a la otra persona.</h1>

          <div className="conversation">
            <div>
              <span>LEGÍTIMO</span>
              <p>
                Hablar de cuánto aporta cada uno, qué gastos pueden asumir y qué
                acuerdos necesita la convivencia.
              </p>
            </div>

            <div>
              <span>REVISABLE</span>
              <p>
                Cambiar un reparto si uno siente que la situación es injusta o
                insostenible.
              </p>
            </div>

            <div>
              <span>ALERTA</span>
              <p>
                Convertir dinero, vivienda o dependencia en derecho a controlar
                amistades, intimidad, movimiento, decisiones personales o
                capacidad de terminar la relación.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO</span>
            <blockquote>
              Un recurso compartido puede crear obligaciones acordadas.
              <strong> No convierte a quien aporta más en propietario de quien aporta menos.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 30 KG</span>
          <h1>El proyecto funciona. Ahora quiere volver.</h1>

          <div className="scene">
            <blockquote>
              —Llevamos ocho meses viviendo juntos. No ha pasado nada grave,
              pero ya no quiero seguir. Me da vergüenza volver a casa porque
              sentiría que he fracasado.
            </blockquote>
          </div>

          <p className="trainingLead">
            Una decisión adulta no queda validada únicamente si dura para
            siempre. Poder revisar una elección con información nueva también
            forma parte de responsabilizarse.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cómo acompañarías esta revisión sin «ya te lo dije» ni rescate automático?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!transferencia.trim()}
          >
            REPLAY →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>¿Estás evaluando la relación o entrenando la calidad de sus decisiones?</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>PROYECTO</span>
              <p>{respuestaProyecto}</p>
            </div>

            <div>
              <span>CUANDO APARECE PODER</span>
              <p>{respuestaDependencia}</p>
            </div>

            <div>
              <span>CUANDO QUIERE REVISAR</span>
              <p>{transferencia}</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            VER MAPA RR →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · PROYECTO COMPARTIDO</span>
          <h1>Querer a alguien no elimina la necesidad de pensar.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RECIBO EL PROYECTO → SEPARO HECHO/HISTORIA → DESCUBRO EXPECTATIVAS
              → HAGO VISIBLES DINERO, ESPACIO Y ACUERDOS → OBSERVO DEPENDENCIAS
              Y PODER → COMPRUEBO CAPACIDAD DE REVISAR →
              <strong> DEVUELVO LA DECISIÓN SIN DESAPARECER.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>PUENTE DE SEGURIDAD</span>
            <p>
              Si aparecen miedo, amenazas, aislamiento, control económico,
              coerción, violencia o imposibilidad real de salir con seguridad,
              el objetivo deja de ser analizar la convivencia y pasa a ser
              aumentar protección y buscar orientación adecuada.
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
          <span className="trainingTag">PESA 04 · COMPLETADA</span>

          <div className="finishMark">30</div>

          <h1>Una relación es también un sistema de decisiones.</h1>
          <h2>Amor, dinero, espacio y poder necesitan poder hablarse.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Acompañar un proyecto de pareja no consiste en predecir si
              funcionará. Consiste en ayudar a mirar acuerdos, recursos,
              dependencia, capacidad de decidir y posibilidad de revisar el
              proyecto si la realidad cambia.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 05 · «NO SIEMPRE USAMOS PROTECCIÓN»</strong>
            <p>
              La siguiente Pesa entra en una conversación adulta sobre salud
              sexual y riesgo: cómo hablar de cuidado cuando las decisiones ya
              están ocurriendo y el objetivo no es vigilar, sino aumentar
              criterio y responsabilidad.
            </p>
          </div>

          <Link
            href="/prepararme/16+/pesa-05"
            className="trainingButton linkButton"
          >
            IR A PESA 05 →
          </Link>

          <Link href="/prepararme/16+" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO 16+
          </Link>
        </section>
      )}
    </main>
  );
}
