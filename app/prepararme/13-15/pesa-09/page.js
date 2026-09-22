"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const primerasReacciones = [
  "Quiero saber inmediatamente qué ha hecho",
  "Me sale decirle que puede contarme cualquier cosa",
  "Me preocupa que sea algo grave",
  "Quiero tranquilizarle antes de saber qué ocurre",
  "Intentaría no adivinar y descubrir primero",
];

const prioridades = [
  "Saber todos los detalles",
  "Descubrir si está seguro ahora mismo",
  "Decidir quién tuvo la culpa",
  "Explicarle lo que debería haber hecho",
];

export default function Pesa09Decidir1315() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [primeraPregunta, setPrimeraPregunta] = useState("");
  const [prioridad, setPrioridad] = useState("");
  const [respuestaSeguridad, setRespuestaSeguridad] = useState("");
  const [respuestaDecision, setRespuestaDecision] = useState("");
  const [reparacion, setReparacion] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 14;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <TrainingProgressTracker
        stage="13-15"
        weightNumber={9}
        startedKg={30}
        completedKg={30}
        completed={paso === 13}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/13-15" className="backLink">
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
              src="/13-15/pesa09.png"
              alt="Pesa 09 · He hecho algo y no sé qué hacer"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · INTEGRACIÓN</span>
              <p>
                Esta vez no sabes qué herramienta necesitas. Primero tendrás
                que descubrir qué está ocurriendo.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · TRANSFERENCIA · 30 KG</span>
          <h1>«He hecho algo y no sé qué hacer.»</h1>

          <div className="scene">
            <p>Tu hijo entra en la habitación y te dice:</p>
            <blockquote>
              —Necesito contarte algo. He hecho algo y ahora no sé qué hacer.
            </blockquote>
          </div>

          <h2>No tienes más información. ¿Qué respondes?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe tu primera respuesta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(1)}
            disabled={!respuestaInicial.trim()}
          >
            EMPEZAR →
          </button>
        </section>
      )}

      {paso === 1 && (
        <section className="trainingScreen">
          <span className="trainingTag">SIN PISTAS</span>
          <h1>Tu mente ya quiere completar la historia.</h1>

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

          <div className="lesson">
            <span>HECHO ≠ HISTORIA</span>
            <blockquote>
              Solo sabes que ha ocurrido algo, que no sabe cómo responder y que
              <strong> ha elegido acudir a ti.</strong>
            </blockquote>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!reaccion}
          >
            DESCUBRIR SIN INTERROGAR →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR · TÚ CONSTRUYES</span>
          <h1>Elige tu primera pregunta.</h1>

          <p className="trainingLead">
            No hay opciones. No sabes todavía si hablamos de presión,
            consentimiento, una imagen, una relación, un error o algo que
            requiere protección inmediata.
          </p>

          <textarea
            value={primeraPregunta}
            onChange={(e) => setPrimeraPregunta(e.target.value)}
            placeholder="¿Qué preguntarías primero?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(3)}
            disabled={!primeraPregunta.trim()}
          >
            ESCUCHAR LA RESPUESTA →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">APARECE INFORMACIÓN</span>
          <h1>Ahora sí tienes un SPOT.</h1>

          <div className="yourFirstAnswer">
            <span>TU PRIMERA PREGUNTA</span>
            <p>{primeraPregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Ayer estaba con la persona con la que salgo. Hicimos algo íntimo
                y al principio los dos queríamos. Después me dijo que parara.
                Yo tardé un poco en hacerlo. Ahora me siento fatal.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ya no necesitas una respuesta automática. Necesitas ordenar el
            problema: seguridad, hechos, responsabilidad, reparación y
            aprendizaje.
          </p>

          <button className="trainingButton" onClick={() => irA(4)}>
            ELEGIR PRIORIDAD →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRIORIZAR</span>
          <h1>¿Qué necesitas saber primero?</h1>

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

          {prioridad && prioridad !== "Descubrir si está seguro ahora mismo" && (
            <div className="criterionReminder">
              <span>REVISA EL ORDEN</span>
              <p>
                Eso puede importar después. Antes conviene saber si alguien está
                en peligro ahora, si existen amenazas, lesiones, miedo,
                coerción, difusión de imágenes u otra situación que requiera
                protección inmediata.
              </p>
            </div>
          )}

          <button
            className="trainingButton"
            onClick={() => irA(5)}
            disabled={!prioridad}
          >
            COMPROBAR SEGURIDAD →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">PUENTE DE SEGURIDAD</span>
          <h1>Antes de analizar, comprueba si alguien necesita protección.</h1>

          <p className="trainingLead">
            No necesitas conocer cada detalle íntimo. Necesitas información
            suficiente para saber si existe un riesgo actual y qué apoyo puede
            ser necesario.
          </p>

          <textarea
            value={respuestaSeguridad}
            onChange={(e) => setRespuestaSeguridad(e.target.value)}
            placeholder="¿Cómo comprobarías seguridad sin convertirlo en un interrogatorio?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(6)}
            disabled={!respuestaSeguridad.trim()}
          >
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHOS · SIN BORRAR RESPONSABILIDAD</span>
          <h1>La intención y el impacto no son la misma cosa.</h1>

          <div className="conversation">
            <div>
              <span>HECHO 1</span>
              <p>Al principio ambos querían continuar.</p>
            </div>

            <div>
              <span>HECHO 2</span>
              <p>La otra persona cambió de decisión y pidió parar.</p>
            </div>

            <div>
              <span>HECHO 3</span>
              <p>Tu hijo reconoce que no paró inmediatamente.</p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RECUPERADO · PESA 03</span>
            <blockquote>
              Un consentimiento anterior no permanece activo para siempre.
              <strong> Cuando cambia la decisión, hay que respetar el cambio.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            RESPONSABILIDAD SIN HUMILLACIÓN →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">HACERSE CARGO</span>
          <h1>Evita dos extremos.</h1>

          <div className="conversation">
            <div>
              <span>MINIMIZAR</span>
              <p>«Bueno, tardaste un poco. Tampoco pasa nada.»</p>
            </div>

            <div>
              <span>DESTRUIR</span>
              <p>Convertir un comportamiento que debe revisar en una condena sobre quién es.</p>
            </div>

            <div>
              <span>HACERSE CARGO</span>
              <p>
                Reconocer con claridad lo que ocurrió, el límite que no se
                respetó a tiempo y qué debe cambiar a partir de ahora.
              </p>
            </div>
          </div>

          <textarea
            value={respuestaDecision}
            onChange={(e) => setRespuestaDecision(e.target.value)}
            placeholder="¿Cómo hablarías de responsabilidad sin minimizar ni humillar?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaDecision.trim()}
          >
            REPARAR NO ES BORRAR →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPARACIÓN</span>
          <h1>No toda reparación consiste en acercarse inmediatamente.</h1>

          <p className="trainingLead">
            Pedir perdón puede formar parte de asumir responsabilidad, pero la
            reparación no da derecho a obtener respuesta, perdón, contacto o
            tranquilidad de la otra persona. Según lo ocurrido, puede ser
            necesario respetar distancia y buscar orientación adulta o
            profesional.
          </p>

          <div className="lesson">
            <span>REPLAY RR</span>
            <blockquote>
              «¿En qué momento cambió la situación? ¿Qué señal apareció? ¿Qué
              tendría que hacer diferente
              <strong> la próxima vez que alguien dude, se aparte o diga que pare?</strong>»
            </blockquote>
          </div>

          <textarea
            value={reparacion}
            onChange={(e) => setReparacion(e.target.value)}
            placeholder="¿Cómo convertirías lo ocurrido en responsabilidad + aprendizaje?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(9)}
            disabled={!reparacion.trim()}
          >
            RETIRAR LAS AYUDAS →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA FINAL</span>
          <h1>Nuevo problema. Ninguna etiqueta.</h1>

          <div className="scene">
            <blockquote>
              —Una amiga me contó algo que le está pasando y me hizo prometer
              que no se lo diría a nadie. Pero ahora creo que puede estar en
              peligro. No sé si romper la promesa.
            </blockquote>
          </div>

          <p className="trainingLead">
            No te diremos qué Pesa utilizar. Decide qué necesitas descubrir, qué
            hechos importan, dónde termina la privacidad y cuándo aparece un
            puente de seguridad.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="Construye tu proceso completo..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!transferencia.trim()}
          >
            VER TU REPLAY →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY · ANTES / DESPUÉS</span>
          <h1>Ya no estás buscando una frase correcta.</h1>

          <div className="comparison">
            <div>
              <span>PRIMERA RESPUESTA</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>SEGURIDAD</span>
              <p>{respuestaSeguridad}</p>
            </div>

            <div>
              <span>RESPONSABILIDAD</span>
              <p>{respuestaDecision}</p>
            </div>

            <div>
              <span>REPARACIÓN</span>
              <p>{reparacion}</p>
            </div>

            <div>
              <span>TRANSFERENCIA</span>
              <p>{transferencia}</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            INTEGRAR LAS 9 PESAS →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · 13–15</span>
          <h1>DECIDIR no significa decidir solo.</h1>

          <div className="conversation">
            <div>
              <span>01 · DESEO</span>
              <p>Puedo sentir algo sin saber qué siente la otra persona.</p>
            </div>

            <div>
              <span>02 · RELACIÓN</span>
              <p>Estar juntos no da propiedad sobre el otro.</p>
            </div>

            <div>
              <span>03 · CONSENTIMIENTO</span>
              <p>No adivino: compruebo, escucho y respeto cambios.</p>
            </div>

            <div>
              <span>04 · GRUPO</span>
              <p>La comparación no crea mi calendario.</p>
            </div>

            <div>
              <span>05 · INTIMIDAD DIGITAL</span>
              <p>Antes de enviar decido; después puedo perder control.</p>
            </div>

            <div>
              <span>06 · PRESIÓN EMOCIONAL</span>
              <p>Observo qué coste temido está empujando mi decisión.</p>
            </div>

            <div>
              <span>07 · SEXUALIDAD Y CUIDADO</span>
              <p>Querer importa. Cuidarse también.</p>
            </div>

            <div>
              <span>08 · AUTONOMÍA</span>
              <p>Privacidad y cuidado pueden convivir.</p>
            </div>

            <div>
              <span>09 · INTEGRACIÓN</span>
              <p>Descubro antes de elegir qué herramienta necesito.</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            VER EL PROCESO MAESTRO →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen">
          <span className="trainingTag">PROCESO MAESTRO</span>
          <h1>Cuando no sabes qué decir, todavía sabes qué hacer.</h1>

          <div className="lesson">
            <span>RR · DECIDIR</span>
            <blockquote>
              RECIBO → REGULO MI REACCIÓN → SEPARO HECHO/HISTORIA → DESCUBRO →
              COMPRUEBO SEGURIDAD → IDENTIFICO DESEO, PRESIÓN, LÍMITES Y
              CONSECUENCIAS → DEVUELVO CRITERIO → ACTUAMOS SI HACE FALTA →
              <strong> REPLAY → REPARO → APRENDO.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>PUENTE DE SEGURIDAD</span>
            <p>
              Si aparecen amenazas, coerción, violencia, miedo, lesiones,
              difusión de imágenes, participación de adultos, explotación u
              otras señales de riesgo, la prioridad deja de ser completar un
              entrenamiento: toca proteger y buscar orientación adecuada.
            </p>
          </div>

          <Link href="/orientacion" className="secondaryTrainingButton">
            HA PASADO ALGO →
          </Link>

          <button className="trainingButton" onClick={() => irA(13)}>
            COMPLETAR ETAPA →
          </button>
        </section>
      )}

      {paso === 13 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">13–15 · DECIDIR · COMPLETADO</span>

          <div className="finishMark">30</div>

          <h1>No podrás tomar todas sus decisiones.</h1>
          <h2>Sí puedes ayudarle a construir con qué decidirlas.</h2>

          <div className="criterionReminder">
            <span>LO QUE HAS ENTRENADO</span>
            <p>
              Ya no dependes de tener preparada una frase para cada pregunta.
              Has entrenado cómo recibir, descubrir, contrastar, devolver
              criterio, detectar presión, respetar autonomía, aumentar cuidado y
              reconocer cuándo una situación necesita protección.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ETAPA</span>
            <strong>16+ · RESPONSABILIZARSE</strong>
            <p>
              La autonomía aumenta. Las decisiones son cada vez más suyas. El
              reto del adulto cambia otra vez: seguir siendo una referencia sin
              intentar seguir siendo quien conduce.
            </p>
          </div>

          <Link href="/prepararme/16+" className="trainingButton linkButton">
            IR A 16+ · RESPONSABILIZARSE →
          </Link>

          <Link href="/prepararme/13-15" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO 13–15
          </Link>
        </section>
      )}
    </main>
  );
}
