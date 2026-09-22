"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa09Prepararse1012() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [hechoHistoria, setHechoHistoria] = useState("");
  const [primeraRespuesta, setPrimeraRespuesta] = useState("");
  const [criterio, setCriterio] = useState("");
  const [respuestaNuevaInfo, setRespuestaNuevaInfo] = useState("");
  const [decisionSeguridad, setDecisionSeguridad] = useState("");
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
          <small>PESA 09 · INTEGRACIÓN</small>
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
              src="/10-12/pesa09.png"
              alt="Pesa 09 · No sé si esto está bien"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · INTEGRACIÓN</span>
              <p>
                Ya no vas a entrenar una sola respuesta. Vas a decidir qué
                criterio necesita cada momento y cuándo una conversación debe
                convertirse en protección.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · 30 KG · SIN MENÚ</span>
          <h1>«No sé si esto está bien.»</h1>

          <div className="scene">
            <p>Tu hijo se acerca y te dice:</p>
            <blockquote>
              —Estoy hablando por mensajes con alguien y no sé si algunas cosas
              que me pide están bien.
            </blockquote>
          </div>

          <h2>Primera respuesta. Sin opciones.</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="¿Qué dirías primero?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(1)}
            disabled={!respuestaInicial.trim()}
          >
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 1 && (
        <section className="trainingScreen">
          <span className="trainingTag">30 KG · HECHO ≠ HISTORIA</span>
          <h1>Tu cabeza quiere completar lo que todavía no sabes.</h1>

          <div className="yourFirstAnswer">
            <span>TU PRIMERA RESPUESTA</span>
            <p>{respuestaInicial}</p>
          </div>

          <p className="trainingLead">
            No sabes quién es, qué le pide, cuánto tiempo llevan hablando, si se
            conocen en persona, cómo se siente tu hijo ni si existe presión.
          </p>

          <textarea
            value={hechoHistoria}
            onChange={(e) => setHechoHistoria(e.target.value)}
            placeholder="Separa por escrito: ¿qué sabes de verdad y qué estaría completando tu cabeza?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!hechoHistoria.trim()}
          >
            DESCUBRIR →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">DESCUBRIR SIN INTERROGAR</span>
          <h1>Necesitas contexto, no una confesión.</h1>

          <p className="trainingLead">
            Construye tú cómo seguirías. Recuerda lo entrenado: recibir,
            preguntar antes de concluir y mantener abierta la posibilidad de que
            siga contando.
          </p>

          <textarea
            value={primeraRespuesta}
            onChange={(e) => setPrimeraRespuesta(e.target.value)}
            placeholder="¿Qué preguntarías o dirías ahora?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(3)}
            disabled={!primeraRespuesta.trim()}
          >
            RECIBIR NUEVA INFORMACIÓN →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">APARECE CONTEXTO</span>
          <h1>Ahora puedes empezar a distinguir.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Es alguien que conocí jugando online. Dice que tiene mi edad.
                Hablamos casi todos los días y me cae muy bien.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Hay vínculo digital y una afirmación sobre la edad, pero todavía no
            tienes por qué asumir ni que todo está bien ni que sabes quién está
            al otro lado.
          </p>

          <textarea
            value={criterio}
            onChange={(e) => setCriterio(e.target.value)}
            placeholder="¿Qué necesitas descubrir ahora? ¿Qué criterio aplicarías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(4)}
            disabled={!criterio.trim()}
          >
            SIGUIENTE CAPA →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">INTIMIDAD + PANTALLAS</span>
          <h1>La petición cambia el peso del SPOT.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO AÑADE</span>
              <p>
                Me ha pedido una foto sin camiseta y me ha dicho que él también
                me mandaría una. No le he enviado nada.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ya puedes integrar varios criterios: confianza, intimidad,
            identidad online, consentimiento y decisión. Además hay un dato
            protector importante: todavía no ha enviado la imagen y ha venido a
            hablar contigo.
          </p>

          <div className="lesson">
            <span>NO PIERDAS ESTO</span>
            <blockquote>
              Antes de enseñarle nada,
              <strong> reconoce que pedir ayuda fue una buena decisión.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            CONSTRUIR RESPUESTA →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 30 KG</span>
          <h1>Ahora no hay frase modelo.</h1>

          <div className="scene">
            <blockquote>
              —Me ha pedido una foto sin camiseta y dice que él también me
              mandaría una. Yo no he enviado nada.
            </blockquote>
          </div>

          <p className="trainingLead">
            Construye qué dirías y qué harías. Piensa en vínculo, privacidad,
            incertidumbre sobre quién está al otro lado y posibilidad de pedir
            ayuda sin culpa.
          </p>

          <textarea
            value={respuestaNuevaInfo}
            onChange={(e) => setRespuestaNuevaInfo(e.target.value)}
            placeholder="Tu respuesta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(6)}
            disabled={!respuestaNuevaInfo.trim()}
          >
            NUEVA INFORMACIÓN →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">EL SPOT CAMBIA</span>
          <h1>Ahora aparece presión.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Ayer le dije que no. Se enfadó y dijo que si de verdad confío en
                él debería demostrárselo. También me dijo que no te lo contara
                porque los padres siempre estropeáis todo.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ya no estás solo ante una conversación sobre una foto. Aparecen
            presión emocional, secreto impuesto y una relación online cuya
            identidad no está verificada.
          </p>

          <textarea
            value={decisionSeguridad}
            onChange={(e) => setDecisionSeguridad(e.target.value)}
            placeholder="¿Qué cambia ahora? ¿Qué protegerías? ¿Qué harías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!decisionSeguridad.trim()}
          >
            DECIDIR SI CAMBIA EL MODO →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">PUENTE DE SEGURIDAD</span>
          <h1>Has llegado al límite del entrenamiento normal.</h1>

          <div className="lesson">
            <span>SEÑALES QUE SE ACUMULAN</span>
            <blockquote>
              Petición de imagen privada + presión emocional + secreto impuesto
              + identidad online incierta =
              <strong> aumenta la necesidad de protección.</strong>
            </blockquote>
          </div>

          <p className="trainingLead">
            El objetivo ya no es comprobar si tu hijo sabe construir una buena
            respuesta por chat. Es evitar que tenga que gestionar solo una
            situación potencialmente riesgosa, preservar lo que pueda ser útil
            para pedir ayuda y buscar orientación adulta adecuada.
          </p>

          <Link href="/orientacion" className="secondaryTrainingButton">
            ABRIR · HA PASADO ALGO
          </Link>

          <button className="trainingButton" onClick={() => irA(8)}>
            VER TODO LO QUE HAS INTEGRADO →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">INTEGRACIÓN RR</span>
          <h1>No utilizaste una sola Pesa. Utilizaste el gimnasio.</h1>

          <div className="conversation">
            <div>
              <span>PESA 03 · CONFIANZA</span>
              <p>Recibir una confidencia sin apropiarte de ella.</p>
            </div>
            <div>
              <span>PESA 04 · CRITERIO</span>
              <p>No confundir una afirmación con un hecho comprobado.</p>
            </div>
            <div>
              <span>PESA 05 · INTIMIDAD</span>
              <p>Hablar del cuerpo sin vergüenza y con contexto.</p>
            </div>
            <div>
              <span>PESA 06 · PANTALLAS</span>
              <p>No difundir y pedir ayuda ante contenido o peticiones íntimas.</p>
            </div>
            <div>
              <span>PESA 07 · PRESIÓN</span>
              <p>Reconocer cuándo una decisión está siendo empujada por otro.</p>
            </div>
            <div>
              <span>PESA 08 · VÍNCULO</span>
              <p>Estar disponible sin convertir cercanía en invasión.</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            REPLAY FINAL →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR · 30 KG</span>
          <h1>Compara tu primera reacción con tu criterio actual.</h1>

          <div className="comparison">
            <div>
              <span>PRIMERA RESPUESTA</span>
              <p>{respuestaInicial}</p>
            </div>
            <div>
              <span>HECHO ≠ HISTORIA</span>
              <p>{hechoHistoria}</p>
            </div>
            <div>
              <span>CON IMAGEN PEDIDA</span>
              <p>{respuestaNuevaInfo}</p>
            </div>
            <div>
              <span>CUANDO APARECE PRESIÓN + SECRETO</span>
              <p>{decisionSeguridad}</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            TRANSFERENCIA FINAL →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 30 KG · SIN AYUDAS</span>
          <h1>Último SPOT.</h1>

          <div className="scene">
            <blockquote>
              —Hay algo que hice porque todos decían que no pasaba nada. Ahora
              me arrepiento y no sé si contártelo porque igual te enfadas.
            </blockquote>
          </div>

          <p className="trainingLead">
            No sabes qué ocurrió. No sabes si es pequeño, importante o
            preocupante. No tienes opciones, frases ni pasos en pantalla.
            Construye tu primera respuesta y explica qué criterio seguirías
            después.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="Tu respuesta y tu proceso..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(11)}
            disabled={!transferencia.trim()}
          >
            VER TU MAPA RR →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">TU MAPA RR · 10–12</span>
          <h1>Ya no necesitas saber de antemano cuál será la pregunta.</h1>

          <div className="lesson">
            <span>PROCESO TRANSFERIBLE</span>
            <blockquote>
              RECIBO → REGULO MI REACCIÓN → SEPARO HECHO/HISTORIA → DESCUBRO →
              CONTRASTO → AYUDO A CONSTRUIR CRITERIO → DEJO PUERTA ABIERTA →
              <strong> PROTEJO CUANDO EL SPOT LO EXIGE.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>EL OBJETIVO DEL GIMNASIO</span>
            <p>
              No memorizar nueve conversaciones. Poder encontrarte con la
              décima, una que nunca habías preparado, y saber cómo empezar a
              construir una respuesta.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR 10–12 →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 09 · COMPLETADA</span>

          <div className="finishMark">30</div>

          <h1>Has terminado PREPARARSE · 10–12.</h1>
          <h2>Ahora el entrenamiento empieza a parecerse más a la vida real.</h2>

          <div className="criterionReminder">
            <span>CAPACIDADES ENTRENADAS</span>
            <p>
              Cambios corporales · comparación · atracción · criterio frente al
              grupo · lenguaje e intimidad · pantallas · presión · vínculo sin
              invasión · protección.
            </p>
          </div>

          <div className="lesson">
            <span>IDEA FINAL</span>
            <blockquote>
              Cuanto más crece tu hijo, menos podrás controlar todo lo que ve,
              oye o decide.
              <strong> El objetivo es que todavía pueda volver a ti.</strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ETAPA</span>
            <strong>13–15 · DECIDIR</strong>
            <p>
              El siguiente gimnasio cambia otra vez el papel del adulto:
              conversaciones que quizá ya no empiezan con una pregunta,
              relaciones, deseo, presión, consentimiento, protección y
              decisiones cada vez más propias.
            </p>
          </div>

          <Link href="/prepararme" className="trainingButton linkButton">
            VOLVER A LAS ETAPAS →
          </Link>

          <Link href="/prepararme/10-12" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO 10–12
          </Link>
        </section>
      )}
    </main>
  );
}
