"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Me incomoda la pregunta",
  "Me sale responder muy rápido",
  "Quiero saber dónde lo ha escuchado",
  "Me preocupa explicar demasiado",
  "No sé cómo hablar de ello sin que suene raro",
];

export default function Pesa05Prepararse1012() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 12;

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
          <small>PESA 05 · INTIMIDAD Y LENGUAJE</small>
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
            <img
              src="/10-12/pesa05.png"
              alt="Pesa 05 · Qué es masturbarse"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · PREGUNTA DIRECTA</span>
              <p>
                Una palabra puede llegar desde el colegio, una conversación o
                Internet. La pregunta no te dice todavía cuánto sabe ni cuánto
                necesita saber.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 20 KG</span>
          <h1>«¿Qué es masturbarse?»</h1>

          <div className="scene">
            <p>Sin previo aviso, tu hijo te pregunta:</p>
            <blockquote>—¿Qué es masturbarse?</blockquote>
          </div>

          <h2>¿Qué le responderías ahora mismo?</h2>

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
          <h1>La palabra puede incomodarte antes de saber qué necesita.</h1>

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

          <h2>¿Qué pensamiento aparece?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Es demasiado pronto», «¿quién le ha enseñado esa palabra?»..."
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
          <h1>Conocer una palabra no demuestra una experiencia.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>Tu hijo ha preguntado qué significa «masturbarse».</p>
            </div>

            <div>
              <span>HISTORIA POSIBLE</span>
              <p>
                «Ya lo hace», «ha visto contenido sexual», «sus amigos hablan de
                cosas demasiado avanzadas» o «tengo que darle toda la charla».
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Una pregunta te da permiso para responder a esa pregunta.
              <strong> No para inventar todo lo que hay detrás.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR EL PUNTO DE PARTIDA →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>Una pregunta antes de una explicación.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES PREGUNTAR</span>
              <p>«¿Dónde has escuchado esa palabra?»</p>
            </div>
            <div>
              <span>O</span>
              <p>«¿Tú qué crees que significa?»</p>
            </div>
            <div>
              <span>O</span>
              <p>«¿Quieres saber qué significa la palabra o hay algo más que te da curiosidad?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye tu pregunta para descubrir qué necesita..."
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
          <span className="trainingTag">AHORA SABES MÁS</span>
          <h1>La necesidad era mucho más pequeña que tu imaginación.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Lo dijeron unos niños en el recreo y se rieron. Yo no sabía qué
                significaba.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ya tienes el punto de partida: quiere entender una palabra. No
            necesitas convertirlo en una conversación mucho mayor para responder
            bien.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            RESPONDER CON VERDAD →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">VERDAD SENCILLA</span>
          <h1>Breve no significa evasivo.</h1>

          <div className="comparison">
            <div>
              <span>EVITA LA VERGÜENZA</span>
              <p>«Eso son cosas que no tienes que saber todavía.»</p>
              <p>«¿Quién te ha enseñado eso?»</p>
            </div>

            <div>
              <span>RESPUESTA AJUSTADA</span>
              <p>
                «Masturbarse significa tocarse las partes íntimas del propio
                cuerpo porque puede producir sensaciones agradables. Es algo
                privado.»
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>TRES PIEZAS</span>
            <p>
              Nombre correcto + explicación sencilla + criterio de intimidad.
              Después puedes comprobar si esa respuesta resolvió su duda.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            COMPROBAR SIN SOBREEXPLICAR →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">UNA CAPA CADA VEZ</span>
          <h1>No tienes que llenar todos los silencios.</h1>

          <div className="conversation">
            <div>
              <span>DESPUÉS DE RESPONDER</span>
              <p>«¿Era eso lo que querías saber?»</p>
            </div>
            <div>
              <span>SI QUIERE SABER MÁS</span>
              <p>Amplías una capa.</p>
            </div>
            <div>
              <span>SI DICE «AH, VALE»</span>
              <p>
                La conversación puede terminar ahí y seguir abierta para otro
                día.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              No midas una buena conversación por cuánto has explicado.
              <strong> Mídela también por si puede volver a preguntar.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            CONSTRUIR MI RESPUESTA →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 20 KG</span>
          <h1>Ahora responde tú.</h1>

          <div className="scene">
            <blockquote>—¿Qué es masturbarse?</blockquote>
          </div>

          <p className="trainingLead">
            Descubre primero, responde con lenguaje claro, introduce intimidad
            sin vergüenza y deja una puerta abierta.
          </p>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye tu respuesta completa..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaFinal.trim()}
          >
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>La naturalidad también se entrena.</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>
            <div>
              <span>DESPUÉS</span>
              <p>{respuestaFinal}</p>
            </div>
          </div>

          <div className="lesson">
            <span>CAPACIDAD ENTRENADA</span>
            <blockquote>
              REGULO MI REACCIÓN → DESCUBRO → NOMBRO → EXPLICO LO NECESARIO →
              AÑADO INTIMIDAD →
              <strong> COMPRUEBO SI NECESITA MÁS.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · SIN GUIÓN</span>
          <h1>Otra palabra. El mismo proceso.</h1>

          <div className="scene">
            <blockquote>
              —¿Qué significa tener una erección?
            </blockquote>
          </div>

          <p className="trainingLead">
            No tienes frases preparadas. Decide qué preguntar primero, cómo
            explicarlo de manera sencilla y qué información necesita realmente.
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
            VER MAPA RR →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · PREGUNTAS DIRECTAS</span>
          <h1>No necesitas preparar un discurso para cada palabra.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              REGULO → DESCUBRO QUÉ SABE → RESPONDO A SU PREGUNTA → DOY CONTEXTO
              → COMPRUEBO →
              <strong> AMPLÍO SOLO SI LO NECESITA.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>LAS FRASES SON MULETAS, NO GUIONES</span>
            <p>
              El objetivo no es memorizar una definición perfecta. Es poder
              construir una explicación adecuada incluso cuando la siguiente
              pregunta sea una que nunca habías preparado.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 05 · COMPLETADA</span>

          <div className="finishMark">20</div>

          <h1>Una pregunta directa no necesita una reacción enorme.</h1>
          <h2>Verdad, lenguaje sencillo, intimidad y puerta abierta.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Cuando aparezca una palabra que te incomode, no necesitas huir ni
              explicarlo todo. Descubre qué necesita y responde una capa cada
              vez.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 06 · «ME HAN MANDADO UNA FOTO»</strong>
            <p>
              En la siguiente Pesa entra el móvil. El objetivo cambia: preservar
              la confianza, detener la difusión y ayudar a actuar sin convertir
              la primera reacción del adulto en otro problema.
            </p>
          </div>

          <Link
            href="/prepararme/10-12/pesa-06"
            className="trainingButton linkButton"
          >
            IR A PESA 06 →
          </Link>

          <Link href="/prepararme/10-12" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
