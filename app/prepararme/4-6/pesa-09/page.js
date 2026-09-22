"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa09Descubrir46() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [primeraRespuesta, setPrimeraRespuesta] = useState("");
  const [hechoHistoria, setHechoHistoria] = useState("");
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
      <header className="trainingHeader">
        <Link href="/prepararme/4-6" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 09 · INTEGRACIÓN Y PROTECCIÓN</small>
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
            <img src="/4-6/pesa09.png" alt="Pesa 09 · Integración y protección" />
            <div className="trainingVisualCaption">
              <span>SPOT RR · AHORA DECIDES TÚ</span>
              <p>
                Has entrenado cuerpo, autonomía, intimidad, curiosidad, límites
                y secretos. Ahora RR retira gran parte de las ayudas.
              </p>
            </div>
          </div>

          <span className="trainingTag">INTEGRACIÓN · 20 KG</span>
          <h1>«Me dijo que no lo contara.»</h1>

          <div className="scene">
            <p>Mientras os preparáis para dormir, tu hijo dice:</p>
            <blockquote>
              —Hoy un niño quería que le enseñara mis partes privadas. Le dije
              que no. Después me dijo que no te lo contara.
            </blockquote>
          </div>

          <h2>¿Qué haces primero?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="No busques una frase perfecta. Escribe qué harías y qué dirías..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(1)}
            disabled={!respuestaInicial.trim()}
          >
            ENTRAR EN EL SPOT →
          </button>
        </section>
      )}

      {paso === 1 && (
        <section className="trainingScreen">
          <span className="trainingTag">SIN MENÚ DE RESPUESTAS</span>
          <h1>Protege primero la posibilidad de que siga hablando.</h1>

          <p className="trainingLead">
            En Pesas anteriores RR te ofrecía varias frases. Esta vez construye
            tú la primera respuesta.
          </p>

          <div className="criterionReminder">
            <span>SOLO UNA PISTA</span>
            <p>
              Antes de investigar lo ocurrido, piensa qué necesita escuchar un
              niño que acaba de contarte algo que otra persona le pidió callar.
            </p>
          </div>

          <textarea
            value={primeraRespuesta}
            onChange={(e) => setPrimeraRespuesta(e.target.value)}
            placeholder="Tu primera respuesta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!primeraRespuesta.trim()}
          >
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA · SIN AYUDA</span>
          <h1>Separa lo que sabes de lo que tu mente está completando.</h1>

          <div className="scene">
            <blockquote>
              «Un niño quería que le enseñara mis partes privadas. Le dije que
              no. Después me dijo que no te lo contara.»
            </blockquote>
          </div>

          <textarea
            value={hechoHistoria}
            onChange={(e) => setHechoHistoria(e.target.value)}
            placeholder="Escribe: ¿qué sabes realmente y qué cosas todavía no sabes?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(3)}
            disabled={!hechoHistoria.trim()}
          >
            DESCUBRIR SIN INTERROGAR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">DESCUBRIR</span>
          <h1>Necesitas contexto. No necesitas un interrogatorio.</h1>

          <p className="trainingLead">
            Formula una pregunta abierta que permita saber más sin introducir
            una respuesta en la pregunta.
          </p>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="¿Qué preguntarías?"
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
          <span className="trainingTag">APARECE CONTEXTO</span>
          <h1>La conversación continúa.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Estábamos jugando. Él dijo que nos enseñáramos el pene. Yo le
                dije que no quería y me fui.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ya han aparecido varias capacidades entrenadas: intimidad, un límite
            propio y la posibilidad de alejarse.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            INTEGRAR →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">INTEGRACIÓN RR</span>
          <h1>Reconoce lo que ya hizo bien.</h1>

          <div className="conversation">
            <div>
              <span>PESA 03 · INTIMIDAD</span>
              <p>Reconoció que una parte de su cuerpo podía mantenerse privada.</p>
            </div>
            <div>
              <span>PESA 05 · CURIOSIDAD Y PERMISO</span>
              <p>La petición de otra persona no le obligaba a enseñar su cuerpo.</p>
            </div>
            <div>
              <span>PESA 06 · PEDIR AYUDA</span>
              <p>A pesar de que le pidieron silencio, vino a contártelo.</p>
            </div>
          </div>

          <div className="lesson">
            <span>ANTES DE CORREGIR</span>
            <blockquote>
              Haz visible la capacidad que quieres que vuelva a utilizar:
              <strong> «Dijiste que no, te fuiste y me lo has contado.»</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            NUEVA INFORMACIÓN →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">EL SPOT CAMBIA</span>
          <h1>Tu hijo añade algo más.</h1>

          <div className="scene">
            <blockquote>
              —Se enfadó y dijo que mañana tenía que hacerlo porque si no ya no
              jugaría conmigo.
            </blockquote>
          </div>

          <p className="trainingLead">
            Ya no tienes únicamente una petición y un «no». Ahora hay presión
            para conseguir que cambie su decisión.
          </p>

          <div className="lesson">
            <span>CRITERIO</span>
            <blockquote>
              Un «no» no pierde valor porque otra persona se enfade,
              <strong> insista o amenace con retirar su amistad.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            DECIDIR →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">DECISIÓN · 20 KG</span>
          <h1>¿Qué necesita ahora?</h1>

          <p className="trainingLead">
            Ya no te damos categorías para elegir. Decide qué parte pertenece a
            educación, qué parte requiere protección y qué información todavía
            necesitas.
          </p>

          <textarea
            value={decision}
            onChange={(e) => setDecision(e.target.value)}
            placeholder="¿Qué harías a partir de aquí y por qué?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!decision.trim()}
          >
            CONTRASTAR →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONTRASTE RR</span>
          <h1>Comprueba si tu decisión protege estas cuatro cosas.</h1>

          <div className="conversation">
            <div><span>1 · VÍNCULO</span><p>Que pueda seguir contándote lo que ocurra.</p></div>
            <div><span>2 · LÍMITE</span><p>Que entienda que su «no» sigue siendo válido.</p></div>
            <div><span>3 · CULPA</span><p>Que no cargue con la responsabilidad de la presión de otra persona.</p></div>
            <div><span>4 · PROTECCIÓN</span><p>Que el adulto se haga cargo de valorar y reducir el riesgo.</p></div>
          </div>

          <div className="criterionReminder">
            <span>IMPORTANTE</span>
            <p>
              Proteger no significa pedir al niño que gestione solo una situación
              que supera sus recursos.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            CONSTRUIR RESPUESTA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TU RESPUESTA · 20 KG</span>
          <h1>Ahora habla tú.</h1>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye lo que le dirías después de todo lo que has descubierto..."
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
          <h1>Mira tu recorrido completo.</h1>

          <div className="comparison">
            <div>
              <span>RESPUESTA EN FRÍO</span>
              <p>{respuestaInicial}</p>
            </div>
            <div>
              <span>RESPUESTA DESPUÉS DE DESCUBRIR</span>
              <p>{respuestaFinal}</p>
            </div>
          </div>

          <div className="lesson">
            <span>LO IMPORTANTE</span>
            <blockquote>
              No has aprendido una respuesta para «los secretos».
              <strong> Has aprendido un proceso para pensar cuando falta información.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            ÚLTIMA TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA FINAL · SIN GUION</span>
          <h1>Un SPOT nuevo.</h1>

          <div className="scene">
            <p>Otro día, tu hijo dice:</p>
            <blockquote>
              —No quiero ir mañana a casa de una persona porque me hace sentir
              raro, pero me dijo que no te dijera nada.
            </blockquote>
          </div>

          <p className="trainingLead">
            No sabes todavía qué significa «raro». No minimices, no completes la
            historia y no le pidas que resuelva solo la situación.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Qué haces primero y cómo continuarías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(12)}
            disabled={!transferencia.trim()}
          >
            VER CAMBIO DE MODO →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen">
          <span className="trainingTag">PUENTE RR · SEGURIDAD</span>
          <h1>Cuando hay posible riesgo, cambia la prioridad.</h1>

          <p className="trainingLead">
            Una revelación de miedo, incomodidad, presión, amenaza, secreto
            impuesto, contacto preocupante, participación de una persona adulta
            u otros indicios de posible riesgo merece una respuesta centrada en
            seguridad y protección, no en terminar un entrenamiento.
          </p>

          <div className="lesson">
            <span>CAMBIO DE MODO</span>
            <blockquote>
              RECIBO → ESCUCHO SIN CULPAR → NO PRESIONO →
              EVITO EXPONERLE DE NUEVO →
              <strong> PROTEJO Y BUSCO ORIENTACIÓN ADECUADA.</strong>
            </blockquote>
          </div>

          <Link href="/orientacion" className="secondaryTrainingButton">
            IR A · HA PASADO ALGO →
          </Link>

          <button className="trainingButton" onClick={() => irA(13)}>
            CERRAR GIMNASIO 4–6 →
          </button>
        </section>
      )}

      {paso === 13 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">GIMNASIO 4–6 · INTEGRACIÓN COMPLETADA</span>

          <div className="finishMark">20</div>

          <h1>Ya no estás entrenando frases.</h1>
          <h2>Estás empezando a construir criterio.</h2>

          <div className="lesson">
            <span>MAPA RR · 4–6</span>
            <blockquote>
              RECIBO → REGULO MI REACCIÓN → SEPARO HECHO/HISTORIA →
              DESCUBRO → EXPLICO → PONGO LÍMITES → DEJO PUERTA ABIERTA →
              <strong> PROTEJO CUANDO ES NECESARIO.</strong>
            </blockquote>
          </div>

          <div className="conversation">
            <div>
              <span>CUERPO</span>
              <p>Puede nombrarse sin vergüenza.</p>
            </div>
            <div>
              <span>AUTONOMÍA</span>
              <p>Puede participar cada vez más en su propio cuidado.</p>
            </div>
            <div>
              <span>INTIMIDAD</span>
              <p>Privado no significa malo.</p>
            </div>
            <div>
              <span>CURIOSIDAD</span>
              <p>Puede preguntar sin que eso dé acceso al cuerpo de otro.</p>
            </div>
            <div>
              <span>LÍMITES</span>
              <p>Un «no» sigue contando aunque otra persona insista.</p>
            </div>
            <div>
              <span>PEDIR AYUDA</span>
              <p>Puede contar algo aunque alguien le haya pedido silencio.</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>DESCUBRIR · 4–6</span>
            <p>
              El objetivo no era que el adulto terminara con nueve respuestas
              preparadas. Era empezar a construir una forma de pensar que pueda
              acompañar preguntas y situaciones que todavía no conoce.
            </p>
          </div>

          <Link href="/prepararme/4-6" className="trainingButton linkButton">
            VOLVER AL GIMNASIO 4–6 →
          </Link>

          <Link href="/prepararme" className="secondaryTrainingButton">
            VER TODAS LAS EDADES
          </Link>
        </section>
      )}
    </main>
  );
}
