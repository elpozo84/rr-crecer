"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Me sale responder: «Mientras vivas aquí, no es solo tu vida»",
  "Quiero recordarle todo lo que hacemos por él",
  "Me preocupa que confunda libertad con hacer lo que quiera",
  "Me sale imponer consecuencias para que aprenda",
  "Quiero devolver responsabilidad sin recuperar el control",
];

export default function Pesa03Responsabilizarse16Plus() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaResponsabilidad, setRespuestaResponsabilidad] = useState("");
  const [respuestaImpacto, setRespuestaImpacto] = useState("");
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
        weightNumber={3}
        startedKg={20}
        completedKg={30}
        completed={paso === 12}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/16+" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 03 · AUTONOMÍA Y RESPONSABILIDAD</small>
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
            <img src="/16+/pesa03.png" alt="Pesa 03 · Es mi vida" />
            <div className="trainingVisualCaption">
              <span>SPOT RR · RESPONSABILIZARSE</span>
              <p>
                La autonomía permite elegir cada vez más. No hace desaparecer
                las consecuencias ni el impacto que algunas decisiones tienen
                sobre otras personas.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 20 → 30 KG</span>
          <h1>«Es mi vida.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —Voy a dejar el trabajo. No aguanto más. Es mi vida y prefiero
              estar un tiempo sin hacer nada hasta que sepa qué quiero.
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
          <h1>«Es mi vida» puede activar tu necesidad de recuperar autoridad.</h1>

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

          <h2>¿Qué historia aparece?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Quiere todos los derechos sin ninguna responsabilidad»..."
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
          <h1>Separa tres cosas que suelen mezclarse.</h1>

          <div className="conversation">
            <div>
              <span>SU DECISIÓN</span>
              <p>Puede decidir dejar un trabajo.</p>
            </div>

            <div>
              <span>SUS CONSECUENCIAS</span>
              <p>
                Perderá ingresos y tendrá que convivir con lo que esa decisión
                produzca en su proyecto.
              </p>
            </div>

            <div>
              <span>EL IMPACTO COMPARTIDO</span>
              <p>
                Si espera que otras personas financien indefinidamente esa
                decisión, ya no hablamos únicamente de «su vida».
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Autonomía significa poder decidir sobre lo propio.
              <strong> No significa decidir unilateralmente qué deben asumir los demás.</strong>
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
          <h1>Antes del límite, entiende qué quiere dejar y qué espera después.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES EXPLORAR</span>
              <p>«¿Qué está haciendo que quieras dejarlo ahora?»</p>
              <p>«¿Qué imaginas hacer durante ese tiempo?»</p>
              <p>«¿Cómo piensas cubrir tus gastos mientras decides?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una pregunta que haga visible decisión + consecuencias..."
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
          <span className="trainingTag">APARECE LA PARTE INVISIBLE</span>
          <h1>La decisión estaba completa solo a medias.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                No lo sé. Supongo que seguiría viviendo aquí y vosotros me
                ayudaríais hasta que encuentre algo que realmente me guste.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ahora aparece el aprendizaje central: elegir una opción también
            exige mirar quién absorbe sus costes.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            DEVOLVER RESPONSABILIDAD →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">RESPONSABILIDAD ≠ CASTIGO</span>
          <h1>No necesitas fabricar consecuencias. Muchas ya existen.</h1>

          <div className="conversation">
            <div>
              <span>CASTIGO</span>
              <p>
                Crear una consecuencia únicamente para obligarle a tomar la
                decisión que tú prefieres.
              </p>
            </div>

            <div>
              <span>RESCATE</span>
              <p>
                Absorber automáticamente todos los costes para que la decisión
                no tenga ningún efecto sobre él.
              </p>
            </div>

            <div>
              <span>RESPONSABILIDAD</span>
              <p>
                Aclarar qué consecuencias son suyas, qué apoyos quieres ofrecer
                y qué cargas no corresponde trasladar automáticamente a otros.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>PREGUNTA RR</span>
            <p>
              «¿Qué parte de esta decisión estás dispuesto a sostener tú?»
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            CONSTRUIR RESPUESTA →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 20 KG</span>
          <h1>Devuelve responsabilidad sin recuperar la decisión.</h1>

          <div className="scene">
            <blockquote>
              —Es mi vida. Si quiero dejarlo, puedo dejarlo.
            </blockquote>
          </div>

          <textarea
            value={respuestaResponsabilidad}
            onChange={(e) => setRespuestaResponsabilidad(e.target.value)}
            placeholder="¿Cómo reconocerías su autonomía y, a la vez, harías visibles las consecuencias?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuestaResponsabilidad.trim()}
          >
            SUBIR A 30 KG →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">30 KG · CUANDO AFECTA A OTROS</span>
          <h1>Ahora su decisión modifica directamente la vida familiar.</h1>

          <div className="scene">
            <blockquote>
              —Además, si dejo el trabajo necesitaré que me paguéis el coche,
              el móvil y mis gastos durante unos meses. Luego ya os lo
              devolveré.
            </blockquote>
          </div>

          <p className="trainingLead">
            No necesitas discutir si puede dejar el trabajo. Necesitas distinguir
            qué parte de la propuesta requiere también una decisión de quienes
            tendrían que asumir sus costes.
          </p>

          <textarea
            value={respuestaImpacto}
            onChange={(e) => setRespuestaImpacto(e.target.value)}
            placeholder="Construye tu respuesta sin usar el dinero como amenaza ni aceptar automáticamente la carga..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaImpacto.trim()}
          >
            HACER VISIBLE LA ECUACIÓN →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">EV RR · QUIÉN DECIDE / QUIÉN ASUME</span>
          <h1>Una decisión adulta necesita una ecuación completa.</h1>

          <div className="conversation">
            <div>
              <span>¿QUIÉN ELIGE?</span>
              <p>Identifica a quién pertenece la decisión.</p>
            </div>

            <div>
              <span>¿QUIÉN RECIBE EL BENEFICIO?</span>
              <p>Haz visible qué gana cada persona con la opción.</p>
            </div>

            <div>
              <span>¿QUIÉN ASUME EL COSTE?</span>
              <p>
                Incluye dinero, tiempo, convivencia, esfuerzo y consecuencias
                futuras.
              </p>
            </div>

            <div>
              <span>¿QUIÉN DEBE ACEPTAR?</span>
              <p>
                Si el coste se reparte, la decisión sobre ese coste también se
                reparte.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO</span>
            <blockquote>
              Cuanta más autonomía reclamo,
              <strong> más importante es reconocer qué parte de las consecuencias me corresponde.</strong>
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
          <h1>Cambia el escenario. Mantén la ecuación.</h1>

          <div className="scene">
            <blockquote>
              —He gastado casi todos mis ahorros en un viaje. El mes que viene
              no voy a poder pagar algo que me corresponde. ¿Me lo adelantáis?
            </blockquote>
          </div>

          <p className="trainingLead">
            La cuestión ya no es si el viaje fue una buena o mala decisión.
            Entrena algo más útil: reconocer la decisión pasada, el coste
            presente, qué responsabilidad corresponde asumir y qué ayuda, si la
            hay, quieres ofrecer voluntariamente.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="Construye tu respuesta..."
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
          <h1>¿Has dejado de confundir apoyo con rescate?</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>DEVOLVER RESPONSABILIDAD</span>
              <p>{respuestaResponsabilidad}</p>
            </div>

            <div>
              <span>CUANDO AFECTA A OTROS</span>
              <p>{respuestaImpacto}</p>
            </div>

            <div>
              <span>TRANSFERENCIA</span>
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
          <span className="trainingTag">MAPA RR · RESPONSABILIZARSE</span>
          <h1>Autonomía y responsabilidad crecen juntas.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RECONOZCO QUÉ DECISIÓN ES SUYA → DESCUBRO EL PLAN → HAGO VISIBLES
              CONSECUENCIAS → DISTINGO APOYO DE RESCATE → IDENTIFICO QUÉ AFECTA
              A OTROS → ACORDAMOS LO COMPARTIDO →
              <strong> DEVUELVO LO QUE LE CORRESPONDE ASUMIR.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO TRANSFERIBLE</span>
            <p>
              Puedo ayudarte porque quiero y porque considero que tiene sentido.
              Ayudarte no convierte automáticamente las consecuencias de tus
              decisiones en responsabilidad mía.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 03 · COMPLETADA</span>

          <div className="finishMark">30</div>

          <h1>«Es mi vida» puede ser verdad.</h1>
          <h2>Las consecuencias siguen necesitando dueño.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Responsabilizar no es castigar ni abandonar. Es permitir autonomía
              mientras hacemos visible qué consecuencias pertenecen a quien
              decide, qué impacto recae sobre otros y qué apoyos se ofrecen de
              manera consciente.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 04 · «QUIERO IRME A VIVIR CON MI PAREJA»</strong>
            <p>
              La siguiente Pesa lleva esta autonomía a una decisión de proyecto:
              convivencia, pareja, dinero, expectativas y capacidad de volver a
              pensar una elección sin convertirla en una guerra familiar.
            </p>
          </div>

          <Link
            href="/prepararme/16+/pesa-04"
            className="trainingButton linkButton"
          >
            IR A PESA 04 →
          </Link>

          <Link href="/prepararme/16+" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO 16+
          </Link>
        </section>
      )}
    </main>
  );
}
