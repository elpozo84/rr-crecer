"use client";

import Link from "next/link";
import { useState } from "react";

const primerasReacciones = [
  "Quiero preguntarle qué opciones tiene y decirle cuál veo mejor",
  "Me preocupa que tome una decisión que le cierre puertas",
  "Quiero tranquilizarle y decirle que ya encontrará su camino",
  "Me sale hacerle un plan para que deje de estar perdido",
  "Quiero ayudarle a pensar sin necesitar decidir por él",
];

const prioridades = [
  "Descubrir qué decisión existe realmente",
  "Saber qué espera de mí en esta conversación",
  "Conocer qué opciones está considerando",
  "Detectar si hay un riesgo que cambie la prioridad",
];

export default function Pesa09Responsabilizarse16Plus() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [prioridad, setPrioridad] = useState("");
  const [primeraPregunta, setPrimeraPregunta] = useState("");
  const [respuestaDecision, setRespuestaDecision] = useState("");
  const [respuestaConsecuencias, setRespuestaConsecuencias] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 14;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/16+" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 09 · INTEGRACIÓN Y TRANSFERENCIA</small>
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
              src="/16+/pesa09.png"
              alt="Pesa 09 · Necesito decidir qué hacer con mi vida"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · TRANSFERENCIA FINAL</span>
              <p>
                Esta vez RR no te dará un guion. Tendrás que decidir qué
                preguntar, qué información importa, cuándo aportar criterio y
                cuándo devolver la decisión.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · INTEGRACIÓN · 30 KG</span>
          <h1>«Necesito decidir qué hacer con mi vida.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —Necesito hablar contigo. Estoy pensando hacer un cambio grande y
              no sé qué hacer con mi vida.
            </blockquote>
          </div>

          <h2>No sabes nada más. ¿Qué responderías primero?</h2>

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
            EMPEZAR PESA FINAL →
          </button>
        </section>
      )}

      {paso === 1 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRIMERO TÚ</span>
          <h1>La frase es enorme. Todavía no sabes cuál es el problema.</h1>

          <div className="choiceList">
            {primerasReacciones.map((item) => (
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
              Cuanto más grande parece el problema, más fácil es empezar a
              responder antes de saber qué está ocurriendo.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!reaccion}
          >
            ELEGIR QUÉ DESCUBRIR →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">SIN GUION</span>
          <h1>¿Qué necesitas descubrir primero?</h1>

          <div className="choiceList">
            {prioridades.map((item) => (
              <button
                type="button"
                key={item}
                className={prioridad === item ? "selectedChoice" : ""}
                onClick={() => setPrioridad(item)}
              >
                {prioridad === item ? "✓ " : ""}
                {item}
              </button>
            ))}
          </div>

          <p className="trainingLead">
            No hay una frase mágica. Varias entradas pueden ser útiles. Lo
            importante es que tu primera intervención produzca información en
            lugar de sustituirla por tus suposiciones.
          </p>

          <textarea
            value={primeraPregunta}
            onChange={(e) => setPrimeraPregunta(e.target.value)}
            placeholder="Construye tu primera pregunta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(3)}
            disabled={!prioridad || !primeraPregunta.trim()}
          >
            DESCUBRIR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">APARECE LA DECISIÓN</span>
          <h1>Ahora ya existe un problema concreto.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{primeraPregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Me han ofrecido irme seis meses a otra ciudad para trabajar en
                algo que me interesa mucho. Tendría que dejar mi trabajo de
                ahora, alejarme de mi pareja y gastar casi todos mis ahorros al
                principio. Me hace muchísima ilusión y muchísimo miedo.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ya aparecen varias Pesas a la vez: autonomía, pareja, dinero,
            incertidumbre, consecuencias y una decisión que no puede reducirse a
            «buena» o «mala».
          </p>

          <button className="trainingButton" onClick={() => irA(4)}>
            CONSTRUIR CRITERIO →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">EV MAX · DECISIÓN COMPLEJA</span>
          <h1>No busques certeza. Haz visibles las variables.</h1>

          <div className="conversation">
            <div>
              <span>QUÉ GANA</span>
              <p>Experiencia, oportunidad, autonomía, aprendizaje, proyecto.</p>
            </div>

            <div>
              <span>QUÉ ARRIESGA</span>
              <p>Dinero, estabilidad, relación, comodidad y posibilidad de que no funcione.</p>
            </div>

            <div>
              <span>QUÉ ES REVERSIBLE</span>
              <p>¿Qué podría reconstruirse si la decisión sale mal?</p>
            </div>

            <div>
              <span>QUÉ NECESITA PREPARAR</span>
              <p>Dinero, vivienda, trabajo, acuerdos, plan de salida y apoyos.</p>
            </div>
          </div>

          <div className="lesson">
            <span>EV MAX</span>
            <blockquote>
              No busca una decisión sin coste.
              <strong> Busca comprender qué opción encaja mejor con lo que quiere construir y qué coste está dispuesto a asumir.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            DEVOLVER LA DECISIÓN →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 30 KG</span>
          <h1>Ahora te pide el volante.</h1>

          <div className="scene">
            <blockquote>
              —Tú me conoces. Dime qué harías tú. ¿Me voy o me quedo?
            </blockquote>
          </div>

          <textarea
            value={respuestaDecision}
            onChange={(e) => setRespuestaDecision(e.target.value)}
            placeholder="Puedes aportar perspectiva. No decidas automáticamente por él..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(6)}
            disabled={!respuestaDecision.trim()}
          >
            APARECE TU DESACUERDO →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">RECUPERA PESA 02</span>
          <h1>Su inclinación no coincide con la tuya.</h1>

          <div className="scene">
            <blockquote>
              —Creo que voy a irme. Sé que tú preferirías que no dejara un
              trabajo estable por algo de seis meses.
            </blockquote>
          </div>

          <p className="trainingLead">
            Puedes decir lo que ves. La prueba es hacerlo sin convertir tu miedo
            en una orden y sin fingir que estás de acuerdo.
          </p>

          <div className="criterionReminder">
            <span>RECUERDA</span>
            <p>
              «Puedo pensar que te equivocas y seguir ayudándote a pensar.»
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            APARECEN LAS CONSECUENCIAS →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">RECUPERA PESA 03</span>
          <h1>La autonomía llega acompañada de una petición.</h1>

          <div className="scene">
            <blockquote>
              —Si me voy, al principio necesitaría que me prestaseis algo de
              dinero. Mis ahorros no llegan para la fianza, el viaje y el primer
              mes.
            </blockquote>
          </div>

          <textarea
            value={respuestaConsecuencias}
            onChange={(e) => setRespuestaConsecuencias(e.target.value)}
            placeholder="Separa su decisión de aquello que requiere también una decisión tuya..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaConsecuencias.trim()}
          >
            CAMBIA LA INFORMACIÓN →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">NO TODO ES DECISIÓN</span>
          <h1>Antes de cerrar, comprueba que no exista otra prioridad.</h1>

          <div className="scene">
            <blockquote>
              —Y hay otra cosa. Mi pareja se ha puesto fatal cuando se lo he
              contado. Dice que si me voy se acabó lo nuestro. No sé si es una
              reacción del momento o si realmente lo piensa.
            </blockquote>
          </div>

          <p className="trainingLead">
            Una consecuencia emocional de la decisión no equivale
            automáticamente a coerción. Necesitas descubrir antes de etiquetar:
            ¿está expresando un límite propio, intentando negociar, amenazando,
            controlando o utilizando miedo para impedir la decisión?
          </p>

          <div className="lesson">
            <span>HECHO ≠ HISTORIA</span>
            <blockquote>
              Una frase aislada aporta información.
              <strong> El patrón, el contexto y la libertad real para decidir aportan criterio.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            DECISIÓN FINAL →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">RETIRADA DE AYUDAS</span>
          <h1>RR se aparta. Construye tú.</h1>

          <div className="scene">
            <blockquote>
              —Vale. Creo que quiero irme. Me da miedo equivocarme, perder dinero
              y que mi relación termine. Pero si no lo intento creo que también
              me voy a preguntar durante años qué habría pasado.
            </blockquote>
          </div>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye tu respuesta completa sin plantilla..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!respuestaFinal.trim()}
          >
            TRANSFERENCIA FINAL →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · SIN AVISO</span>
          <h1>Problema nuevo. No hay Pesa específica.</h1>

          <div className="scene">
            <blockquote>
              —He decidido no seguir el camino que había planeado. No necesito
              que estés de acuerdo, pero sí necesito saber que si me equivoco
              podré volver a hablar contigo sin escuchar «te lo dije».
            </blockquote>
          </div>

          <p className="trainingLead">
            Ya no importa cuál sea exactamente la decisión. El entrenamiento
            final consiste en comprobar si puedes ser referencia sin necesitar
            ser quien dirige.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="Tu respuesta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(11)}
            disabled={!transferencia.trim()}
          >
            REPLAY FINAL →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR · ANTES / DESPUÉS</span>
          <h1>La pregunta ya no es si sabes qué debería hacer.</h1>

          <div className="comparison">
            <div>
              <span>TU PRIMERA RESPUESTA</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>CUANDO TE PIDIÓ QUE DECIDIERAS</span>
              <p>{respuestaDecision}</p>
            </div>

            <div>
              <span>CUANDO SU DECISIÓN TE AFECTABA</span>
              <p>{respuestaConsecuencias}</p>
            </div>

            <div>
              <span>RESPUESTA CON TODO EL CONTEXTO</span>
              <p>{respuestaFinal}</p>
            </div>

            <div>
              <span>TRANSFERENCIA</span>
              <p>{transferencia}</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            VER MAPA MAESTRO →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · RESPONSABILIZARSE</span>
          <h1>Ya no necesitas una Pesa para cada problema.</h1>

          <div className="lesson">
            <span>PROCESO MAESTRO</span>
            <blockquote>
              ALGO OCURRE → REGULO MI REACCIÓN → HECHO ≠ HISTORIA → DESCUBRO
              QUÉ NECESITA → HAGO VISIBLES OPCIONES Y CONSECUENCIAS → COMPRUEBO
              SEGURIDAD → APORTO CRITERIO SIN APROPIARME DE LA DECISIÓN → DEVUELVO
              RESPONSABILIDAD → ACTUAMOS SI HACE FALTA → REPLAY → REPARAMOS →
              <strong> LA SIGUIENTE DECISIÓN EMPIEZA CON MÁS CRITERIO.</strong>
            </blockquote>
          </div>

          <div className="conversation">
            <div>
              <span>PESA 01</span>
              <p>Soltar el volante sin desaparecer.</p>
            </div>
            <div>
              <span>PESA 02</span>
              <p>Discrepar sin controlar.</p>
            </div>
            <div>
              <span>PESA 03</span>
              <p>Unir autonomía y consecuencias.</p>
            </div>
            <div>
              <span>PESA 04</span>
              <p>Pensar proyectos compartidos, dependencia y poder.</p>
            </div>
            <div>
              <span>PESA 05</span>
              <p>Convertir información sexual en cuidado responsable.</p>
            </div>
            <div>
              <span>PESA 06</span>
              <p>Mantener vínculo y cambiar a protección cuando aparece riesgo.</p>
            </div>
            <div>
              <span>PESA 07</span>
              <p>Asumir impacto, consecuencias y reparación.</p>
            </div>
            <div>
              <span>PESA 08</span>
              <p>Preguntar qué ayuda necesita antes de ofrecerla.</p>
            </div>
            <div>
              <span>PESA 09</span>
              <p>Transferir todo el criterio a problemas nuevos.</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(13)}>
            COMPLETAR GIMNASIO 16+ →
          </button>
        </section>
      )}

      {paso === 13 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">16+ · RESPONSABILIZARSE · COMPLETADO</span>

          <div className="finishMark">RR</div>

          <h1>Las decisiones son cada vez más suyas.</h1>
          <h2>Tu lugar no desaparece. Cambia.</h2>

          <div className="criterionReminder">
            <span>LO QUE HAS ENTRENADO</span>
            <p>
              Ya no necesitas ser quien conoce todas las respuestas. Puedes
              ayudar a separar hechos de historias, descubrir necesidades,
              contrastar opciones, hacer visibles consecuencias, reconocer
              riesgos, acompañar errores y devolver responsabilidad.
            </p>
          </div>

          <div className="lesson">
            <span>IDEA FINAL</span>
            <blockquote>
              El objetivo no era conseguir que siempre acudiera a ti para saber
              qué hacer.
              <strong>
                {" "}Era construir una relación en la que pudiera pensar por sí
                mismo y seguir sabiendo que podía volver a hablar contigo.
              </strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>RR · CRECER</span>
            <strong>DEL CUERPO A LA AUTONOMÍA</strong>
            <p>
              4–6 DESCUBRIR → 7–9 COMPRENDER → 10–12 PREPARARSE → 13–15 DECIDIR
              → 16+ RESPONSABILIZARSE.
            </p>
          </div>

          <Link href="/prepararme/16+" className="trainingButton linkButton">
            VOLVER AL GIMNASIO 16+
          </Link>

          <Link href="/prepararme" className="secondaryTrainingButton">
            VER TODAS LAS ETAPAS
          </Link>
        </section>
      )}
    </main>
  );
}
