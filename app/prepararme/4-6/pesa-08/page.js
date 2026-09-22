"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Me alarmo inmediatamente",
  "Le digo que eso no se hace",
  "Le pregunto exactamente qué hicieron",
  "Intento mantener la calma y escuchar",
  "No sé distinguir cuándo preocuparme",
];

export default function Pesa08Descubrir46() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [decision, setDecision] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 14;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <TrainingProgressTracker
        stage="4-6"
        weightNumber={8}
        startedKg={10}
        completedKg={20}
        completed={paso === 13}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/4-6" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 08 · CURIOSIDAD, LÍMITES Y CONTEXTO</small>
        </div>

        <div className="kg">{paso <= 7 ? "10 KG" : "20 KG"}</div>
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
            <img src="/4-6/pesa08.png" alt="Pesa 08 · Jugábamos a médicos" />
            <div className="trainingVisualCaption">
              <span>SPOT RR · CUANDO NECESITAS CONTEXTO</span>
              <p>
                Algunas situaciones no se entienden por una sola frase. Antes
                de decidir qué significan, necesitamos escuchar qué ocurrió,
                cómo ocurrió y cómo lo vivió el niño.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 10 KG</span>
          <h1>«Jugábamos a médicos.»</h1>

          <div className="scene">
            <p>Tu hijo vuelve de jugar con otro niño y comenta con naturalidad:</p>
            <blockquote>—Jugábamos a médicos y mirábamos nuestros cuerpos.</blockquote>
          </div>

          <h2>¿Qué harías en ese momento?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe tu reacción real..."
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
          <h1>Antes de interpretar, observa tu reacción.</h1>

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

          <div className="criterionReminder">
            <span>VENTANA RR</span>
            <p>
              La calma no significa quitar importancia. Significa intentar que
              tu primera reacción no cierre una conversación de la que todavía
              necesitas información.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!reaccion}
          >
            HECHO ≠ HISTORIA →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>
          <h1>Todavía sabes muy poco.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Tu hijo dice que estaba jugando a médicos con otro niño y que
                miraban sus cuerpos.
              </p>
            </div>

            <div>
              <span>NO SABES TODAVÍA</span>
              <p>
                Qué ocurrió exactamente, las edades, si ambos querían participar,
                si alguien insistió, si hubo miedo, dolor, amenazas, secretos o
                intervención de otra persona.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              No minimizo y no dramatizo antes de tiempo.
              <strong> Primero necesito comprender.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            PROTEGER LA CONVERSACIÓN →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">ESCUCHAR SIN INTERROGAR</span>
          <h1>Que siga hablando es información.</h1>

          <div className="comparison">
            <div>
              <span>PUEDE CERRAR</span>
              <p>«¿Quién empezó?»</p>
              <p>«¿Te tocó?»</p>
              <p>«¿Por qué hiciste eso?»</p>
              <p>«Eso está muy mal.»</p>
            </div>

            <div>
              <span>PUEDE ABRIR</span>
              <p>«Cuéntame cómo era el juego.»</p>
              <p>«¿Y qué pasó después?»</p>
              <p>«¿Cómo te sentiste?»</p>
              <p>«Gracias por contármelo.»</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>IMPORTANTE</span>
            <p>
              No necesitas obtener todos los detalles en una sola conversación.
              Escucha sin sugerir respuestas ni convertirlo en un interrogatorio.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            CONSTRUIR UNA PREGUNTA →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">DESCUBRIR</span>
          <h1>Haz una pregunta abierta.</h1>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="¿Qué preguntarías para comprender mejor sin poner palabras en su boca?"
          />

          <div className="criterionReminder">
            <span>PISTA</span>
            <p>
              Busca relato y experiencia: qué ocurrió, cómo siguió el juego y
              cómo se sintió. Evita preguntas que ya contienen una respuesta.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(5)}
            disabled={!pregunta.trim()}
          >
            ESCUCHAR →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRIMER CONTEXTO</span>
          <h1>Ahora sabes algo más.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Nos miramos la barriga y luego él quería que nos bajáramos los
                pantalones. Yo no quería y le dije que no.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            La situación ya no es la misma que imaginabas al escuchar
            «jugábamos a médicos». Ha aparecido un límite expresado por tu hijo.
          </p>

          <button className="trainingButton" onClick={() => irA(6)}>
            IDENTIFICAR QUÉ ENSEÑAR →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">EDUCAR DESDE LO QUE OCURRIÓ</span>
          <h1>Hay una conducta que puedes reforzar.</h1>

          <div className="conversation">
            <div>
              <span>RECONOCER</span>
              <p>«Hiciste bien en decir que no si no querías.»</p>
            </div>
            <div>
              <span>CRITERIO</span>
              <p>
                «Podemos tener curiosidad, pero no tenemos que enseñar ni mirar
                partes privadas para jugar.»
              </p>
            </div>
            <div>
              <span>PUERTA ABIERTA</span>
              <p>
                «Si alguien insiste cuando tú no quieres, puedes irte y
                contármelo.»
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            PERO FALTA UNA PIEZA →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">NUEVA INFORMACIÓN</span>
          <h1>El contexto puede cambiar la decisión.</h1>

          <div className="scene">
            <p>Tu hijo añade:</p>
            <blockquote>
              —Luego me dijo que si no me bajaba los pantalones ya no iba a ser
              mi amigo.
            </blockquote>
          </div>

          <div className="lesson">
            <span>AHORA APARECE PRESIÓN</span>
            <blockquote>
              Ya no estamos solo ante curiosidad.
              <strong> Hay un intento de conseguir algo mediante presión.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            SUBIR A 20 KG →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">DECIDIR · 20 KG</span>
          <h1>No todo se resuelve con la misma respuesta.</h1>

          <p className="trainingLead">
            El adulto necesita aprender a distinguir entre una situación que
            puede abordarse principalmente con educación y límites y otra que
            requiere aumentar la protección y buscar ayuda adecuada.
          </p>

          <div className="factStory">
            <div>
              <span>ME ORIENTA A EDUCAR Y OBSERVAR</span>
              <p>
                Curiosidad infantil sin presión, miedo o daño, con límites que
                se respetan cuando alguien dice que no.
              </p>
            </div>
            <div>
              <span>ME HACE AUMENTAR PROTECCIÓN</span>
              <p>
                Presión persistente, miedo, amenazas, dolor, secreto impuesto,
                diferencias importantes de edad o poder, participación de una
                persona adulta u otros elementos preocupantes.
              </p>
            </div>
          </div>

          <h2>¿Qué harías con la información que tienes ahora?</h2>

          <textarea
            value={decision}
            onChange={(e) => setDecision(e.target.value)}
            placeholder="Escribe tu decisión y qué intentarías proteger..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(9)}
            disabled={!decision.trim()}
          >
            CONSTRUIR RESPUESTA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 20 KG</span>
          <h1>Habla con tu hijo antes de resolver el resto.</h1>

          <div className="conversation">
            <div><span>RECIBO</span><p>«Gracias por contármelo.»</p></div>
            <div><span>REFUERZO</span><p>«Puedes decir que no y alejarte si no quieres participar.»</p></div>
            <div><span>QUITO CULPA</span><p>«No has hecho nada malo por venir a contármelo.»</p></div>
            <div><span>PROTEJO</span><p>«Yo me voy a ocupar de ayudarte con esto.»</p></div>
          </div>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye tu respuesta con tus propias palabras..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!respuestaFinal.trim()}
          >
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>La frase inicial no contenía información suficiente.</h1>

          <div className="comparison">
            <div><span>ANTES</span><p>{respuestaInicial}</p></div>
            <div><span>DESPUÉS</span><p>{respuestaFinal}</p></div>
          </div>

          <div className="lesson">
            <span>CAPACIDAD ENTRENADA</span>
            <blockquote>
              ESCUCHAR → OBTENER CONTEXTO → RECONOCER LÍMITES →
              <strong> AJUSTAR LA INTERVENCIÓN A LO QUE REALMENTE OCURRIÓ.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 20 KG</span>
          <h1>Ahora aparece una situación diferente.</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —Un niño mayor quería que fuéramos al baño para jugar a algo y me
              dijo que no podía contártelo.
            </blockquote>
          </div>

          <p className="trainingLead">
            No necesitas diagnosticar qué ha ocurrido. Necesitas decidir cómo
            recibir la información, qué necesitas saber sin interrogar y cuándo
            dejar de tratarlo como un entrenamiento cotidiano.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cómo actuarías ahora?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(12)}
            disabled={!transferencia.trim()}
          >
            CAMBIO DE MODO →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen">
          <span className="trainingTag">PUENTE RR · SEGURIDAD</span>
          <h1>Hay momentos en los que entrenar deja de ser lo prioritario.</h1>

          <p className="trainingLead">
            Si aparecen elementos preocupantes como coerción, amenazas, miedo,
            dolor, secreto impuesto, una diferencia relevante de edad o poder,
            participación de una persona adulta u otros indicios de posible
            riesgo, la prioridad es la protección del niño y la orientación
            adecuada.
          </p>

          <div className="lesson">
            <span>CAMBIO DE MODO</span>
            <blockquote>
              ESCUCHO → NO CULPO → NO PRESIONO →
              CONSERVO LA INFORMACIÓN →
              <strong> PROTEJO Y BUSCO AYUDA ADECUADA.</strong>
            </blockquote>
          </div>

          <Link href="/orientacion" className="secondaryTrainingButton">
            IR A · HA PASADO ALGO →
          </Link>

          <button className="trainingButton" onClick={() => irA(13)}>
            TERMINAR PESA →
          </button>
        </section>
      )}

      {paso === 13 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 08 · COMPLETADA</span>

          <div className="finishMark">20</div>

          <h1>No reaccionar antes de comprender.</h1>

          <div className="lesson">
            <span>TU MAPA RR</span>
            <blockquote>
              RECIBO → SEPARO HECHO/HISTORIA → ESCUCHO → MIRO CONTEXTO →
              IDENTIFICO LÍMITES →
              <strong> EDUCO O AUMENTO PROTECCIÓN.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>LO QUE HAS ENTRENADO</span>
            <p>
              La misma frase inicial puede esconder situaciones muy distintas.
              El criterio no consiste en adivinar: consiste en saber escuchar,
              observar y cambiar de modo cuando la información lo exige.
            </p>
          </div>

          <div className="nextSpot">
            <span>ÚLTIMO ENTRENAMIENTO · 4–6</span>
            <strong>PESA 09 · ME DIJO QUE NO LO CONTARA</strong>
            <p>
              La última Pesa integrará cuerpo, intimidad, límites, secretos y
              pedir ayuda. RR retirará gran parte de las ayudas.
            </p>
          </div>

          <Link href="/prepararme/4-6/pesa-09" className="trainingButton linkButton">
            IR A PESA 09 →
          </Link>

          <Link href="/prepararme/4-6" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
