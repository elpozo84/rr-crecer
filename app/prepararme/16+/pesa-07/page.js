"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Me sale preguntarle inmediatamente qué ha hecho",
  "Quiero quitarle importancia para que no se machaque",
  "Me enfada pensar que haya podido hacer daño a alguien",
  "Quiero resolver el problema por él cuanto antes",
  "Quiero ayudarle a asumir lo ocurrido sin convertir el error en su identidad",
];

export default function Pesa07Responsabilizarse16Plus() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaResponsabilidad, setRespuestaResponsabilidad] = useState("");
  const [respuestaReparacion, setRespuestaReparacion] = useState("");
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
        weightNumber={7}
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
          <small>PESA 07 · RESPONSABILIDAD Y REPARACIÓN</small>
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
            <img src="/16+/pesa07.png" alt="Pesa 07 · Me he equivocado" />
            <div className="trainingVisualCaption">
              <span>SPOT RR · HACERSE CARGO</span>
              <p>
                Responsabilizarse no consiste en sentirse peor. Consiste en
                poder mirar lo ocurrido, reconocer el impacto y decidir qué
                hacer ahora.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 30 KG</span>
          <h1>«Me he equivocado.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —He hecho algo y creo que he fastidiado de verdad a un amigo. Me
              siento fatal.
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
          <h1>Cuando quien quieres ha hecho daño, aparecen dos tentaciones opuestas.</h1>

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
            placeholder="Ej.: «Tengo que protegerle», «¿cómo ha podido hacer eso?», «si se siente culpable ya ha aprendido»..."
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
          <h1>Sentirse culpable todavía no te dice qué ocurrió.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Cree que una acción suya ha perjudicado a otra persona y ha
                venido a contártelo.
              </p>
            </div>

            <div>
              <span>TODAVÍA NO SABES</span>
              <p>
                Qué hizo, qué impacto tuvo, qué sabía en ese momento, qué
                responsabilidad le corresponde ni qué reparación es posible.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Ni absolver antes de conocer los hechos ni condenar antes de
              comprenderlos.
              <strong> Primero: realidad.</strong>
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
          <h1>Pregunta para comprender, no para preparar la sentencia.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES EMPEZAR POR</span>
              <p>«Cuéntame qué pasó.»</p>
              <p>«¿Qué hiciste tú exactamente?»</p>
              <p>«¿Qué ocurrió después?»</p>
              <p>«¿Qué crees que le ha supuesto a la otra persona?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye tu primera pregunta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(4)}
            disabled={!pregunta.trim()}
          >
            ESCUCHAR LOS HECHOS →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">APARECEN LOS HECHOS</span>
          <h1>Ahora sí puedes trabajar con responsabilidad.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Un amigo me contó algo privado sobre su relación. Yo se lo conté
                a otra persona porque pensé que no pasaría nada. Se ha acabado
                enterando más gente y ahora él sabe que salió de mí.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            La intención importa para comprender la decisión. El impacto importa
            para hacerse cargo de ella. Que no quisiera provocar ese resultado
            no hace desaparecer lo que ocurrió.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            INTENCIÓN ≠ IMPACTO →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">INTENCIÓN ≠ IMPACTO</span>
          <h1>«No quería hacer daño» puede ser verdad y no cerrar la conversación.</h1>

          <div className="conversation">
            <div>
              <span>INTENCIÓN</span>
              <p>No esperaba que la información siguiera circulando.</p>
            </div>

            <div>
              <span>ACCIÓN</span>
              <p>Compartió información privada que otra persona le había confiado.</p>
            </div>

            <div>
              <span>IMPACTO</span>
              <p>
                La información llegó a más personas y la confianza quedó
                afectada.
              </p>
            </div>

            <div>
              <span>RESPONSABILIDAD</span>
              <p>
                Reconocer qué parte depende de él y qué puede hacer ahora sin
                exigir que el daño desaparezca inmediatamente.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>RR</span>
            <p>
              Explicar por qué hice algo puede ayudar a comprenderme. No debe
              utilizarse automáticamente para borrar su impacto.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            CONSTRUIR RESPONSABILIDAD →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 30 KG</span>
          <h1>Evita los dos extremos: «no pasa nada» y «eres horrible».</h1>

          <div className="scene">
            <blockquote>
              —Pero yo no quería que se enterara todo el mundo. Solo se lo dije
              a una persona.
            </blockquote>
          </div>

          <textarea
            value={respuestaResponsabilidad}
            onChange={(e) => setRespuestaResponsabilidad(e.target.value)}
            placeholder="¿Cómo reconocerías su intención sin borrar su responsabilidad?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuestaResponsabilidad.trim()}
          >
            REPARAR →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPARACIÓN RR</span>
          <h1>Pedir perdón no es conseguir que todo vuelva a estar bien.</h1>

          <div className="conversation">
            <div>
              <span>RECONOCER</span>
              <p>Nombrar lo que hizo sin esconderlo detrás de una excusa.</p>
            </div>

            <div>
              <span>ESCUCHAR</span>
              <p>
                Dejar espacio para que la otra persona diga cómo le ha afectado,
                si quiere hacerlo.
              </p>
            </div>

            <div>
              <span>REPARAR</span>
              <p>
                Preguntarse si existe alguna acción concreta que pueda reducir
                parte del daño.
              </p>
            </div>

            <div>
              <span>ACEPTAR</span>
              <p>
                La otra persona puede no perdonar, no responder o necesitar
                distancia.
              </p>
            </div>
          </div>

          <textarea
            value={respuestaReparacion}
            onChange={(e) => setRespuestaReparacion(e.target.value)}
            placeholder="¿Cómo le ayudarías a pensar una reparación sin escribirle tú la disculpa?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaReparacion.trim()}
          >
            LO QUE NO PUEDE CONTROLAR →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPARAR ≠ BORRAR</span>
          <h1>Hacerse cargo incluye tolerar una consecuencia que no puedes arreglar.</h1>

          <div className="scene">
            <blockquote>
              —Le he pedido perdón, pero me ha dicho que ahora mismo no quiere
              hablar conmigo. ¿Qué más hago?
            </blockquote>
          </div>

          <div className="lesson">
            <span>CRITERIO</span>
            <blockquote>
              Puedes ofrecer reparación.
              <strong> No puedes exigir reconciliación como recompensa por haber reparado.</strong>
            </blockquote>
          </div>

          <p className="trainingLead">
            A veces el siguiente paso responsable es precisamente respetar el
            espacio de la persona afectada y utilizar el malestar para revisar
            qué harás diferente la próxima vez.
          </p>

          <button className="trainingButton" onClick={() => irA(9)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 30 KG</span>
          <h1>Ahora el coste es económico.</h1>

          <div className="scene">
            <blockquote>
              —Cogí el coche y le di un golpe aparcando. No te lo dije porque
              pensé que podría arreglarlo antes de que lo vieras.
            </blockquote>
          </div>

          <p className="trainingLead">
            Cambia el error, pero no el criterio: hechos, responsabilidad,
            consecuencias, reparación y aprendizaje. Tu reto es no resolver
            automáticamente todo el coste ni utilizar el error para definir a la
            persona.
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
          <h1>¿Estás intentando quitarle culpa o construir responsabilidad?</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>RESPONSABILIDAD</span>
              <p>{respuestaResponsabilidad}</p>
            </div>

            <div>
              <span>REPARACIÓN</span>
              <p>{respuestaReparacion}</p>
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
          <span className="trainingTag">MAPA RR · REPARAR</span>
          <h1>Un error no necesita convertirse en identidad para convertirse en aprendizaje.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              DESCUBRO LOS HECHOS → DISTINGO INTENCIÓN E IMPACTO → IDENTIFICO MI
              PARTE → ASUMO CONSECUENCIAS → REPARO LO REPARABLE → RESPETO LO QUE
              NO PUEDO CONTROLAR →
              <strong> DISEÑO QUÉ HARÉ DIFERENTE LA PRÓXIMA VEZ.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO TRANSFERIBLE</span>
            <p>
              «Hice algo mal» permite actuar. «Soy malo» puede dejarme atrapado.
              La responsabilidad necesita suficiente incomodidad para moverme,
              no tanta vergüenza que solo quiera esconderme.
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

          <h1>No puedes deshacer todas tus decisiones.</h1>
          <h2>Sí puedes decidir qué haces después de ellas.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Responsabilizar no es humillar, rescatar ni conseguir que la culpa
              desaparezca. Es mirar los hechos, reconocer el impacto, asumir la
              parte propia, reparar cuando sea posible y convertir lo ocurrido
              en criterio para la siguiente decisión.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 08 · «NO QUIERO QUE ME SOLUCIONES NADA»</strong>
            <p>
              La siguiente Pesa entrenará una capacidad especialmente difícil:
              seguir siendo útil cuando tu hijo no quiere soluciones, consejos
              ni un plan. A veces la ayuda que necesita es poder pensar delante
              de ti sin que conviertas cada problema en una intervención.
            </p>
          </div>

          <Link
            href="/prepararme/16+/pesa-08"
            className="trainingButton linkButton"
          >
            IR A PESA 08 →
          </Link>

          <Link href="/prepararme/16+" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO 16+
          </Link>
        </section>
      )}
    </main>
  );
}
