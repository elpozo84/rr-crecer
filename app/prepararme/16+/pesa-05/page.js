"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Me entra miedo y quiero darle una charla inmediata",
  "Me sale preguntar exactamente qué hace y con quién",
  "Quiero decirle que está siendo irresponsable",
  "Me preocupa que si no insisto parezca que me da igual",
  "Quiero conseguir que pueda hablar conmigo sin quitar importancia al riesgo",
];

export default function Pesa05Responsabilizarse16Plus() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaCuidado, setRespuestaCuidado] = useState("");
  const [respuestaAccion, setRespuestaAccion] = useState("");
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
        weightNumber={5}
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
          <small>PESA 05 · SALUD SEXUAL Y CUIDADO</small>
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
              src="/16+/pesa05.png"
              alt="Pesa 05 · No siempre usamos protección"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · CUIDADO REAL</span>
              <p>
                Cuando la sexualidad ya forma parte de su vida, tu objetivo no
                es recuperar el control. Es conseguir que el cuidado también
                forme parte de sus decisiones.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 30 KG</span>
          <h1>«No siempre usamos protección.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —No siempre usamos preservativo. Sé que debería, pero algunas
              veces no lo hacemos.
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
          <h1>El miedo puede convertir una conversación útil en un interrogatorio.</h1>

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
            placeholder="Ej.: «No entiende el peligro», «si ha hecho esto una vez lo hará siempre», «tengo que conseguir que prometa que no volverá a pasar»..."
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
          <h1>Ya tienes un dato importante. No necesitas inventar los demás.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Ha habido relaciones sexuales en las que no siempre se utilizó
                preservativo y ha decidido contártelo.
              </p>
            </div>

            <div>
              <span>TODAVÍA NO SABES</span>
              <p>
                Qué prácticas hubo, cuándo ocurrió, si existe posibilidad de
                embarazo, qué otros métodos se utilizan, qué exposición a
                infecciones puede haber o qué información necesita.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Antes de corregir una conducta,
              <strong> descubre qué cuidado necesita ahora.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR SIN INTERROGAR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>Haz preguntas que cambien lo que hay que hacer.</h1>

          <div className="conversation">
            <div>
              <span>PREGUNTAS ÚTILES</span>
              <p>«¿Te preocupa algo concreto de lo que ha pasado?»</p>
              <p>«¿Ha sido recientemente?»</p>
              <p>«¿Utilizáis algún otro método anticonceptivo?»</p>
              <p>«¿Quieres que busquemos información o atención sanitaria?»</p>
            </div>
          </div>

          <p className="trainingLead">
            No necesitas conocer detalles íntimos por curiosidad. Necesitas la
            información suficiente para que pueda valorar riesgos y actuar.
          </p>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una primera pregunta que mantenga abierta la conversación..."
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
          <span className="trainingTag">APARECE LA DUDA REAL</span>
          <h1>Ahora ya sabes qué conversación estás teniendo.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                La última vez fue hace pocos días. Mi pareja utiliza otro método
                anticonceptivo, pero me preocupa el tema de las infecciones. No
                sé si deberíamos hacernos pruebas.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            La conversación ya no necesita una bronca. Necesita información
            fiable, valoración del riesgo y, si corresponde, atención sanitaria.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            ORDENAR EL CUIDADO →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA DE CUIDADO</span>
          <h1>Embarazo e infecciones no son la misma pregunta.</h1>

          <div className="conversation">
            <div>
              <span>EMBARAZO</span>
              <p>
                Los métodos anticonceptivos tienen funciones y eficacia
                diferentes. Si existe una posible exposición relevante, el
                momento en que ocurrió puede cambiar las opciones disponibles.
              </p>
            </div>

            <div>
              <span>ITS</span>
              <p>
                El preservativo reduce el riesgo de muchas infecciones de
                transmisión sexual. Otros métodos anticonceptivos pueden
                prevenir embarazos, pero no sustituyen esa protección frente a
                ITS.
              </p>
            </div>

            <div>
              <span>PRUEBAS Y ATENCIÓN</span>
              <p>
                Qué prueba conviene y cuándo realizarla depende de la práctica,
                la exposición y el tiempo transcurrido. Un profesional
                sanitario puede orientar el siguiente paso.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>RR</span>
            <p>
              No hace falta convertir al padre en médico. Hace falta que sepa
              reconocer cuándo una conversación debe terminar en una acción
              sanitaria concreta.
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
          <h1>Informa sin utilizar el miedo como herramienta.</h1>

          <div className="scene">
            <blockquote>
              —Entonces, ¿he hecho una barbaridad?
            </blockquote>
          </div>

          <textarea
            value={respuestaCuidado}
            onChange={(e) => setRespuestaCuidado(e.target.value)}
            placeholder="¿Cómo reconocerías el riesgo sin avergonzar ni tranquilizar falsamente?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuestaCuidado.trim()}
          >
            DE HABLAR A ACTUAR →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">RESPONSABILIDAD PRÁCTICA</span>
          <h1>Una buena conversación debería mejorar la siguiente acción.</h1>

          <div className="scene">
            <blockquote>
              —Vale. No quiero quedarme dándole vueltas. ¿Qué hago ahora?
            </blockquote>
          </div>

          <p className="trainingLead">
            Aquí el entrenamiento cambia de comprensión a acción: buscar
            orientación sanitaria adecuada, aclarar qué riesgos existen y
            construir un plan de cuidado para las siguientes decisiones.
          </p>

          <textarea
            value={respuestaAccion}
            onChange={(e) => setRespuestaAccion(e.target.value)}
            placeholder="Construye una respuesta que convierta preocupación en un siguiente paso..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaAccion.trim()}
          >
            CRITERIO PARA EL FUTURO →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">PREVENCIÓN ≠ PROMESA</span>
          <h1>«No volverá a pasar» no es todavía un plan.</h1>

          <div className="conversation">
            <div>
              <span>ANTICIPAR</span>
              <p>¿Qué protección quieren utilizar y por qué?</p>
            </div>

            <div>
              <span>DISPONIBILIDAD</span>
              <p>¿La tienen realmente cuando la necesitan?</p>
            </div>

            <div>
              <span>ACUERDO</span>
              <p>¿Pueden hablarlo antes y no únicamente en mitad del momento?</p>
            </div>

            <div>
              <span>CAMBIO DE DECISIÓN</span>
              <p>
                Si no están las condiciones de cuidado que consideran
                necesarias, ¿pueden parar o elegir otra cosa?
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO</span>
            <blockquote>
              Cuidarse no consiste en saber que existe un riesgo.
              <strong> Consiste en incorporar ese conocimiento a la decisión.</strong>
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
          <h1>Ahora no viene a confesarte nada. Viene a pedir ayuda.</h1>

          <div className="scene">
            <blockquote>
              —Quiero pedir cita para informarme y hacerme unas pruebas, pero me
              da corte. ¿Me ayudas a ver dónde tengo que ir?
            </blockquote>
          </div>

          <p className="trainingLead">
            El objetivo de todo el entrenamiento aparece aquí: que pedir ayuda
            sea compatible con hacerse responsable. Puedes facilitar acceso,
            información o compañía sin exigir convertirte en propietario de su
            intimidad.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cómo responderías?"
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
          <h1>¿Tu respuesta aumenta vergüenza o aumenta capacidad de cuidado?</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>CUANDO APARECE EL RIESGO</span>
              <p>{respuestaCuidado}</p>
            </div>

            <div>
              <span>SIGUIENTE ACCIÓN</span>
              <p>{respuestaAccion}</p>
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
          <span className="trainingTag">MAPA RR · SALUD SEXUAL</span>
          <h1>La conversación útil termina con más capacidad de cuidarse.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RECIBO SIN HUMILLAR → DESCUBRO QUÉ HA OCURRIDO Y QUÉ PREOCUPA →
              DISTINGO EMBARAZO, ITS Y OTROS RIESGOS → BUSCO INFORMACIÓN FIABLE
              → ACTÚO SI HACE FALTA → CONSTRUIMOS PREVENCIÓN →
              <strong> DEVUELVO RESPONSABILIDAD.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>IMPORTANTE</span>
            <p>
              Ante una exposición concreta, síntomas, posible embarazo o dudas
              sobre pruebas, tratamientos o tiempos, la orientación debe
              individualizarse con servicios sanitarios. RR entrena la
              conversación y la toma de decisiones; no sustituye la atención
              médica.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 05 · COMPLETADA</span>

          <div className="finishMark">30</div>

          <h1>La intimidad puede ser suya.</h1>
          <h2>El cuidado también debe aprender a serlo.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Cuando las decisiones sexuales ya están ocurriendo, una
              conversación eficaz no intenta recuperar el pasado. Descubre qué
              riesgo existe, qué acción necesita el presente y qué criterio
              puede mejorar la siguiente decisión.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>
              PESA 06 · «SÉ QUE NO ME HACE BIEN, PERO NO PUEDO DEJARLO»
            </strong>
            <p>
              La siguiente Pesa cambia de problema: tu hijo reconoce que una
              relación le está haciendo daño, pero todavía no está preparado
              para salir. Entrenaremos cómo acompañar sin ordenar, abandonar ni
              confundir autonomía con pasividad ante el riesgo.
            </p>
          </div>

          <Link
            href="/prepararme/16+/pesa-06"
            className="trainingButton linkButton"
          >
            IR A PESA 06 →
          </Link>

          <Link href="/prepararme/16+" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO 16+
          </Link>
        </section>
      )}
    </main>
  );
}
