"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Me sale empezar a proponer soluciones",
  "Quiero hacer preguntas hasta descubrir qué debería hacer",
  "Me cuesta escuchar un problema si no vamos a resolverlo",
  "Me preocupa parecer indiferente si solo escucho",
  "Quiero aprender a preguntar qué tipo de ayuda necesita antes de ofrecerla",
];

export default function Pesa08Responsabilizarse16Plus() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaEscucha, setRespuestaEscucha] = useState("");
  const [respuestaCambio, setRespuestaCambio] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 13;

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
          <small>PESA 08 · ESTAR SIN INVADIR</small>
        </div>

        <div className="kg">30 KG</div>
      </header>

      <div className="trainingProgress">
        <div
          className="trainingProgressFill"
          style={{ width: `${Math.min(((paso + 1) / totalPasos) * 100, 100)}%` }}
        />
      </div>

      {paso === 0 && (
        <section className="trainingScreen">
          <div className="trainingVisual">
            <img
              src="/16+/pesa08.png"
              alt="Pesa 08 · No quiero que me soluciones nada"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · PRESENCIA</span>
              <p>
                A veces alguien te cuenta un problema para pensar acompañado,
                sentirse comprendido o simplemente no llevarlo solo. Escuchar
                también puede ser una intervención.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 30 KG</span>
          <h1>«No quiero que me soluciones nada.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —Estoy fatal con todo últimamente, pero antes de que empieces: no
              quiero que me soluciones nada. Solo quería contártelo.
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
          <h1>Resolver puede ser una forma de calmar tu propia incomodidad.</h1>

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
            placeholder="Ej.: «Si no hago algo, no estoy ayudando», «si me lo cuenta será porque quiere consejo»..."
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
          <h1>Que te cuente un problema no define todavía tu trabajo.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Está pasando un momento difícil, ha elegido hablar contigo y ha
                pedido explícitamente que no intentes solucionarlo de entrada.
              </p>
            </div>

            <div>
              <span>HISTORIA POSIBLE</span>
              <p>
                «Si no doy una solución no sirvo», «en realidad quiere que le
                diga qué hacer» o «tengo que sacarle toda la información».
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Antes de elegir cómo ayudar,
              <strong> descubre qué ayuda está pidiendo.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR EL TIPO DE AYUDA →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>Una pregunta puede evitar veinte consejos innecesarios.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES PREGUNTAR</span>
              <p>«¿Quieres que simplemente te escuche?»</p>
              <p>«¿Quieres ordenar conmigo lo que te pasa?»</p>
              <p>«¿Quieres mi opinión o prefieres que no te la dé ahora?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una pregunta para saber qué necesita de ti..."
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
          <span className="trainingTag">DEFINE TU PAPEL</span>
          <h1>Ahora sabes qué necesita.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Solo quiero poder decirlo en voz alta. Llevo semanas pensando si
                cambiar de trabajo y tengo la cabeza hecha un lío. No quiero
                decidirlo hoy.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            El objetivo de esta conversación ya no es llegar a una decisión. Es
            darle un espacio donde pueda ordenar lo que piensa sin tener que
            defenderse de una solución.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            ENTRENAR ESCUCHA →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">ESCUCHAR ≠ QUEDARSE MUDO</span>
          <h1>Puedes participar sin dirigir.</h1>

          <div className="conversation">
            <div>
              <span>REFLEJAR</span>
              <p>«Parece que llevas bastante tiempo dándole vueltas.»</p>
            </div>

            <div>
              <span>ACLARAR</span>
              <p>«¿Qué parte es la que más te pesa ahora mismo?»</p>
            </div>

            <div>
              <span>RESUMIR</span>
              <p>
                «Te gusta parte del trabajo, pero el ritmo te está pasando
                factura y todavía no sabes qué pesa más.»
              </p>
            </div>

            <div>
              <span>DEJAR ESPACIO</span>
              <p>No rellenar inmediatamente cada silencio.</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>RR</span>
            <p>
              Una conversación puede ser útil aunque termine sin una decisión.
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
          <h1>Resiste la tentación de convertir lo que escuchas en un plan.</h1>

          <div className="scene">
            <blockquote>
              —Estoy cansado, pero tampoco sé si irme sería peor. No sé. Solo
              necesitaba decírselo a alguien.
            </blockquote>
          </div>

          <textarea
            value={respuestaEscucha}
            onChange={(e) => setRespuestaEscucha(e.target.value)}
            placeholder="Responde sin solucionar, minimizar ni desaparecer..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuestaEscucha.trim()}
          >
            AHORA CAMBIA SU PETICIÓN →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">EL CONTRATO PUEDE CAMBIAR</span>
          <h1>Escuchar ahora no te obliga a escuchar para siempre.</h1>

          <div className="scene">
            <blockquote>
              —Vale. Ahora sí. ¿Tú qué harías en mi lugar?
            </blockquote>
          </div>

          <p className="trainingLead">
            La petición ha cambiado. Ya puedes aportar perspectiva, pero no
            necesitas convertir «¿tú qué harías?» en «haz lo que yo haría».
          </p>

          <textarea
            value={respuestaCambio}
            onChange={(e) => setRespuestaCambio(e.target.value)}
            placeholder="¿Cómo compartirías tu perspectiva devolviéndole después su decisión?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaCambio.trim()}
          >
            SABER CUÁNDO NO BASTA ESCUCHAR →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRESENCIA ≠ PASIVIDAD</span>
          <h1>Hay momentos en los que «solo escuchar» deja de ser suficiente.</h1>

          <div className="scene">
            <blockquote>
              —No quiero soluciones, pero llevo varios días sin apenas dormir y
              ayer conduciendo casi tuve un accidente porque me quedé medio
              dormido.
            </blockquote>
          </div>

          <p className="trainingLead">
            Respetar la petición inicial no obliga a ignorar información nueva.
            Cuando aparecen riesgos concretos, puedes nombrarlos y proponer
            acciones de cuidado sin convertir toda la conversación en control.
          </p>

          <div className="lesson">
            <span>CRITERIO</span>
            <blockquote>
              Primero pregunto qué ayuda necesita.
              <strong> Si aparece un riesgo relevante, actualizo mi respuesta.</strong>
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
          <h1>Ahora el problema es sentimental.</h1>

          <div className="scene">
            <blockquote>
              —He terminado con mi pareja. Sé que era lo que tenía que hacer,
              pero estoy hecho polvo. Y por favor, no me digas que ya encontraré
              a otra persona.
            </blockquote>
          </div>

          <p className="trainingLead">
            No necesita que conviertas rápidamente el dolor en optimismo. Tu
            tarea es reconocer qué pide, acompañar el presente y mantener
            disponible la posibilidad de otra ayuda si después la necesita.
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
          <h1>¿Has aprendido a ser útil sin ocupar todo el espacio?</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>CUANDO SOLO QUIERE SER ESCUCHADO</span>
              <p>{respuestaEscucha}</p>
            </div>

            <div>
              <span>CUANDO PIDE TU OPINIÓN</span>
              <p>{respuestaCambio}</p>
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
          <span className="trainingTag">MAPA RR · ESTAR</span>
          <h1>No toda ayuda necesita empezar por una solución.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RECIBO → REGULO MI URGENCIA POR RESOLVER → PREGUNTO QUÉ NECESITA
              → ESCUCHO → REFLEJO Y ACLARO SIN DIRIGIR → ACTUALIZO MI PAPEL SI
              ME PIDE OTRA AYUDA →
              <strong> INTERVENGO MÁS SI APARECE UN RIESGO RELEVANTE.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO TRANSFERIBLE</span>
            <p>
              Antes de dar consejo puedo preguntar: «¿Quieres que te escuche,
              que pensemos juntos o que te diga lo que veo?»
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

          <h1>No siempre necesita tu respuesta.</h1>
          <h2>A veces necesita un lugar donde pueda encontrar la suya.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Estar disponible no significa resolver cada problema. Puedes
              escuchar, ayudar a ordenar, ofrecer perspectiva cuando te la
              piden y reconocer cuándo una situación necesita pasar de
              acompañamiento a acción.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>
              PESA 09 · «NECESITO DECIDIR QUÉ HACER CON MI VIDA»
            </strong>
            <p>
              La última Pesa integrará todo el gimnasio 16+: autonomía,
              desacuerdo, consecuencias, relaciones, cuidado, reparación,
              escucha y criterio. Esta vez RR retirará casi todas las ayudas.
            </p>
          </div>

          <Link
            href="/prepararme/16+/pesa-09"
            className="trainingButton linkButton"
          >
            IR A PESA 09 →
          </Link>

          <Link href="/prepararme/16+" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO 16+
          </Link>
        </section>
      )}
    </main>
  );
}
