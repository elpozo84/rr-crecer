"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa08() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [criterios, setCriterios] = useState([]);
  const [respuestaFinal, setRespuestaFinal] = useState("");

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cambiarCriterio = (criterio) => {
    setCriterios((actuales) =>
      actuales.includes(criterio)
        ? actuales.filter((item) => item !== criterio)
        : [...actuales, criterio]
    );
  };

  const opcionesCriterio = [
    "Descubrir qué ha ocurrido realmente",
    "No culpabilizar por haberlo contado",
    "Respetar los límites corporales",
    "Mantener abierta la posibilidad de pedir ayuda",
    "Diferenciar privacidad de secreto",
    "Valorar si existe un problema de seguridad",
  ];

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/7-9" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 08 · INTEGRACIÓN</small>
        </div>

        <div className="kg">{paso <= 5 ? "20 KG" : "40 KG"}</div>
      </header>

      <div className="trainingProgress">
        <div
          className="trainingProgressFill"
          style={{
            width: `${Math.min(((paso + 1) / 11) * 100, 100)}%`,
          }}
        />
      </div>

      {paso === 0 && (
        <section className="trainingScreen">
          <div
            style={{
              width: "100%",
              marginBottom: "38px",
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.08)",
              background: "#fff",
            }}
          >
            <img
              src="/pesa08.png"
              alt="Pesa 08 · Integración"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <span className="trainingTag">SPOT · 20 KG</span>

          <h1>Esta vez RR no te dirá qué estás entrenando.</h1>

          <div className="scene">
            <p>
              Tu hijo vuelve de jugar en casa de otro niño. Está más callado de
              lo habitual.
            </p>

            <p>Después de un rato te dice:</p>

            <blockquote>
              —Papá, hoy pasó una cosa rara.
              <br />
              <br />
              Estábamos jugando y uno de los niños quiso enseñar una imagen
              con gente desnuda.
              <br />
              <br />
              Yo dije que no quería verla.
              <br />
              <br />
              Entonces se rieron de mí y me dijeron que
              <strong> no te lo contara.</strong>
            </blockquote>
          </div>

          <p className="trainingLead">
            No hay opciones. No hay pista.
          </p>

          <h2>¿Qué harías primero?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe qué harías y qué le dirías..."
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
          <span className="trainingTag">LECTURA DEL SPOT</span>

          <h1>¿Qué criterios has reconocido?</h1>

          <p className="trainingLead">
            Selecciona todos los que crees que pueden estar funcionando en esta
            situación.
          </p>

          <div className="choiceList">
            {opcionesCriterio.map((criterio) => (
              <button
                key={criterio}
                onClick={() => cambiarCriterio(criterio)}
                className={
                  criterios.includes(criterio) ? "selectedChoice" : ""
                }
              >
                {criterios.includes(criterio) ? "✓ " : ""}
                {criterio}
              </button>
            ))}
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={criterios.length === 0}
          >
            COMPROBAR →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA DEL SPOT</span>

          <h1>Hay varias Pesas trabajando a la vez.</h1>

          <div className="factStory">
            <div>
              <span>PREGUNTA REAL</span>
              <p>
                Todavía necesitamos comprender exactamente qué ocurrió.
              </p>
            </div>

            <div>
              <span>LÍMITE</span>
              <p>El niño expresó que no quería ver algo.</p>
            </div>
          </div>

          <div className="factStory">
            <div>
              <span>PRESIÓN</span>
              <p>
                Otros niños se rieron después de que expresara ese límite.
              </p>
            </div>

            <div>
              <span>SECRETO</span>
              <p>
                Le pidieron que ocultara lo ocurrido a un adulto de confianza.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>FÍJATE</span>
            <p>
              Una situación real rara vez llega etiquetada como «Pesa 02» o
              «Pesa 03». Los criterios aparecen mezclados.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">EV MAX</span>

          <h1>¿Qué necesita tu primera respuesta?</h1>

          <p className="trainingLead">
            Puedes tener muchas cosas que hacer después. Pero no todas necesitan
            ocurrir en los primeros diez segundos.
          </p>

          <div className="conversation">
            <div>
              <span>PRIMERO</span>
              <p>
                Reconocer que ha hecho bien en contarlo y que podía decir que
                no quería verlo.
              </p>
            </div>

            <div>
              <span>DESPUÉS</span>
              <p>
                Preguntar con calma qué ocurrió para comprender la situación.
              </p>
            </div>

            <div>
              <span>LUEGO</span>
              <p>
                Valorar qué medidas necesita el adulto según lo que descubra.
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>ORDEN RR</small>
            <h2>Conectar → comprender → proteger → actuar.</h2>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY</span>

          <h1>Mira ahora tu primera respuesta.</h1>

          <div className="yourFirstAnswer">
            <span>LO QUE ESCRIBISTE</span>
            <p>{respuestaInicial}</p>
          </div>

          <div className="criterionReminder">
            <span>REVISA</span>
            <p>
              ¿Tu respuesta facilita que siga hablando? ¿Reconoce su límite?
              ¿Evita culpabilizarlo? ¿Intenta comprender antes de sacar
              conclusiones?
            </p>
          </div>

          <h2>Constrúyela otra vez.</h2>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Escribe ahora tu respuesta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(5)}
            disabled={!respuestaFinal.trim()}
          >
            TERMINAR 20 KG →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">20 KG SUPERADOS</span>

          <div className="finishMark">20</div>

          <h1>Ahora quitamos casi todas las ayudas.</h1>

          <p className="trainingLead">
            En 40 KG no tendrás una lista de criterios ni una respuesta para
            elegir.
          </p>

          <div className="nextSpot">
            <span>ÚLTIMO SPOT</span>
            <strong>40 KG</strong>
            <p>
              La situación será ambigua. Tu trabajo será descubrir primero qué
              sabes, qué no sabes y si estamos todavía ante una conversación
              educativa o ante algo que requiere ayuda.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            SUBIR A 40 KG →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">SPOT FINAL · 40 KG</span>

          <h1>No sabes todavía qué significa esto.</h1>

          <div className="scene">
            <p>
              Tu hijo está nervioso. Después de varios minutos te dice:
            </p>

            <blockquote>
              —Papá...
              <br />
              <br />
              una persona me pidió que hiciera algo que
              <strong> no quería hacer</strong>.
              <br />
              <br />
              Me dijo que no pasaba nada y que no tenía que contártelo.
            </blockquote>
          </div>

          <p className="trainingLead">
            RR no va a completar la historia por ti.
          </p>

          <div className="bigQuestion">
            <small>PRIMER RETO</small>
            <h2>¿Qué sabes y qué todavía no sabes?</h2>
          </div>

          <textarea
            placeholder="Escribe mentalmente o aquí qué información tienes y qué no deberías asumir todavía..."
          />

          <button className="trainingButton" onClick={() => irA(7)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">40 KG · DECIDE</span>

          <h1>Tu primera reacción puede cambiar lo que ocurra después.</h1>

          <p className="trainingLead">
            No sabemos todavía exactamente qué pasó. Sí sabemos que aparecen
            tres señales relevantes: algo que no quería hacer, presión de otra
            persona y una petición de ocultarlo.
          </p>

          <div className="bigQuestion">
            <small>NO NECESITAS RESOLVER EL CASO AHORA</small>
            <h2>Necesitas mantener abierta la puerta y valorar su seguridad.</h2>
          </div>

          <div className="conversation">
            <div>
              <span>UNA PRIMERA RESPUESTA POSIBLE</span>
              <p>
                Gracias por contármelo. Puedes hablar conmigo. Quiero
                escucharte y ayudarte.
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">CAMBIO DE MODO</span>

          <h1>Hay un momento en que el gimnasio debe apartarse.</h1>

          <p className="trainingLead">
            Si al escuchar aparecen indicios de abuso, violencia, coerción,
            amenaza, explotación o un riesgo para el menor, el objetivo ya no
            es completar una Pesa.
          </p>

          <div className="criterionReminder">
            <span>RR · CRECER</span>
            <p>
              Escucha sin culpabilizar ni presionar para obtener un relato
              completo. Prioriza la seguridad del menor y busca orientación
              profesional o de los servicios de protección correspondientes
              cuando la situación lo requiera.
            </p>
          </div>

          <div className="lesson">
            <span>UN CRITERIO TAMBIÉN ES SABER CUÁNDO PARAR</span>
            <blockquote>
              No todo problema necesita más entrenamiento.
              <strong> Algunas situaciones necesitan ayuda real.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY DEL RECORRIDO</span>

          <h1>Ocho Pesas. Un sistema.</h1>

          <div className="conversation">
            <div>
              <span>01 · PREGUNTAS</span>
              <p>Descubre qué quiere saber realmente.</p>
            </div>

            <div>
              <span>02 · LÍMITES</span>
              <p>Mi cuerpo importa. El cuerpo del otro también.</p>
            </div>

            <div>
              <span>03 · SECRETOS</span>
              <p>Pedir ayuda siempre debe seguir siendo posible.</p>
            </div>

            <div>
              <span>04 · INTIMIDAD</span>
              <p>Privado no significa malo ni vergonzoso.</p>
            </div>

            <div>
              <span>05 · REPRODUCCIÓN</span>
              <p>Verdad suficiente. Profundidad progresiva.</p>
            </div>

            <div>
              <span>06 · CUERPO</span>
              <p>El cuerpo puede nombrarse con claridad.</p>
            </div>

            <div>
              <span>07 · PANTALLAS</span>
              <p>
                La primera reacción debe facilitar que vuelva a contarlo.
              </p>
            </div>

            <div>
              <span>08 · INTEGRACIÓN</span>
              <p>
                Reconoce qué criterios necesitas y cuándo necesitas ayuda
                externa.
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            CERRAR RECORRIDO →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">RECORRIDO 7–9 COMPLETADO</span>

          <div className="finishMark">40</div>

          <h1>No tienes ocho respuestas.</h1>

          <h2>Tienes criterios para conversaciones que todavía no existen.</h2>

          <div className="lesson">
            <span>RR · CRECER</span>
            <blockquote>
              No necesitamos preparar cada frase de su infancia.
              <strong>
                {" "}
                Necesitamos construir una relación en la que pueda seguir
                preguntando y pidiendo ayuda.
              </strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>7–9 · COMPRENDER</span>
            <strong>RECORRIDO TERMINADO</strong>
            <p>
              El siguiente nivel de RR · Crecer no consiste simplemente en
              saber más. A medida que crecen cambian las preguntas, los
              contextos y las decisiones que necesitan aprender a tomar.
            </p>
          </div>

          <Link
            href="/prepararme/7-9"
            className="trainingButton linkButton"
          >
            VOLVER AL GIMNASIO →
          </Link>
        </section>
      )}
    </main>
  );
}
