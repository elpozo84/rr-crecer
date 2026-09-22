"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Me asusto y quiero coger el móvil",
  "Me enfado con quien la ha enviado",
  "Quiero saber inmediatamente quién aparece",
  "Me preocupa que mi hijo haya hecho algo",
  "Intentaría mantener la calma y escuchar primero",
];

export default function Pesa06Prepararse1012() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [primeraRespuesta, setPrimeraRespuesta] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 12;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <TrainingProgressTracker
        stage="10-12"
        weightNumber={6}
        startedKg={20}
        completedKg={30}
        completed={paso === 11}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/10-12" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 06 · PANTALLAS Y AYUDA</small>
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
              src="/10-12/pesa06.png"
              alt="Pesa 06 · Me han mandado una foto"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · PANTALLAS Y AYUDA</span>
              <p>
                Cuando un menor acude a ti después de recibir una imagen íntima,
                tu primera reacción puede influir en si vuelve a pedir ayuda la
                próxima vez.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 20 KG</span>
          <h1>«Me han mandado una foto.»</h1>

          <div className="scene">
            <p>Tu hijo se acerca con el móvil y te dice:</p>
            <blockquote>
              —Me han mandado una foto de una persona desnuda al grupo de clase.
              Yo no la pedí.
            </blockquote>
          </div>

          <h2>¿Qué harías y qué dirías primero?</h2>

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
          <h1>Antes del móvil está tu reacción.</h1>

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

          <h2>¿Qué historia completa tu cabeza?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Seguro que la han reenviado todos», «¿qué hace mi hijo en ese grupo?»..."
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
          <h1>No investigues desde el pánico.</h1>

          <div className="factStory">
            <div>
              <span>HECHOS</span>
              <p>
                Ha recibido una imagen de desnudez en un grupo y afirma que no
                la pidió. Ha decidido acudir a ti.
              </p>
            </div>

            <div>
              <span>TODAVÍA NO SABES</span>
              <p>
                Quién la envió, quién aparece, si se ha reenviado, si existe
                presión, amenazas, burlas o si alguien le ha pedido que haga
                algo con ella.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>PRIMER DATO IMPORTANTE</span>
            <blockquote>
              Ha venido a contártelo.
              <strong> No conviertas pedir ayuda en el comienzo de un castigo.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            CONSTRUIR LA PRIMERA RESPUESTA →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRESERVAR EL CANAL</span>
          <h1>Primero: «Has hecho bien en contármelo.»</h1>

          <div className="conversation">
            <div>
              <span>RECIBE</span>
              <p>«Gracias por venir a decírmelo.»</p>
            </div>
            <div>
              <span>QUITA CULPA AUTOMÁTICA</span>
              <p>«Que te llegue algo que no has pedido no significa que sea culpa tuya.»</p>
            </div>
            <div>
              <span>MARCA UNA ACCIÓN</span>
              <p>«No la reenvíes ni la compartas con nadie.»</p>
            </div>
          </div>

          <textarea
            value={primeraRespuesta}
            onChange={(e) => setPrimeraRespuesta(e.target.value)}
            placeholder="Construye tus primeras frases..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(4)}
            disabled={!primeraRespuesta.trim()}
          >
            DESCUBRIR SIN INTERROGAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONTEXTO</span>
          <h1>Necesitas información para proteger, no una confesión.</h1>

          <div className="yourFirstAnswer">
            <span>TU PRIMERA RESPUESTA</span>
            <p>{primeraRespuesta}</p>
          </div>

          <div className="conversation">
            <div>
              <span>PREGUNTAS ÚTILES</span>
              <p>«¿Sabes quién la ha enviado?»</p>
              <p>«¿Sabes quién aparece en la imagen?»</p>
              <p>«¿Alguien te ha pedido que la reenvíes o que no lo cuentes?»</p>
            </div>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Un compañero la mandó. Creo que es una chica del colegio. Varios
                empezaron a reenviarla y a hacer bromas.
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            CAMBIAR A MODO PROTECCIÓN →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">PUENTE DE SEGURIDAD</span>
          <h1>Ya no estamos ante una simple duda sobre Internet.</h1>

          <p className="trainingLead">
            Si la imagen puede ser íntima y corresponder a una persona menor de
            edad, la prioridad es detener su circulación, preservar la seguridad
            y buscar orientación adulta adecuada. No hace falta que tu hijo
            investigue ni que siga abriendo o difundiendo el contenido.
          </p>

          <div className="comparison">
            <div>
              <span>EVITA</span>
              <p>Reenviarla «para demostrar lo ocurrido».</p>
              <p>Compartirla con otros padres o grupos.</p>
              <p>Interrogar o culpar al menor que vino a pedir ayuda.</p>
            </div>

            <div>
              <span>PRIORIZA</span>
              <p>Que no continúe compartiéndose.</p>
              <p>Escuchar qué ha ocurrido y si existe presión o amenaza.</p>
              <p>Buscar ayuda adulta/institucional adecuada para gestionar la situación.</p>
            </div>
          </div>

          <Link href="/orientacion" className="secondaryTrainingButton">
            ABRIR · HA PASADO ALGO
          </Link>

          <button className="trainingButton" onClick={() => irA(6)}>
            CONTINUAR ENTRENAMIENTO →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CRITERIO TRANSFERIBLE</span>
          <h1>El móvil no elimina los límites.</h1>

          <div className="conversation">
            <div>
              <span>SI NO LO PEDÍ</span>
              <p>Puedo cerrar, apartarme y pedir ayuda.</p>
            </div>
            <div>
              <span>SI ES ÍNTIMO</span>
              <p>No tengo permiso automático para compartirlo.</p>
            </div>
            <div>
              <span>SI ME PRESIONAN</span>
              <p>Puedo no participar y contárselo a un adulto de confianza.</p>
            </div>
            <div>
              <span>SI ME EQUIVOQUÉ</span>
              <p>Pedir ayuda sigue siendo mejor que ocultarlo y dejar que crezca.</p>
            </div>
          </div>

          <div className="lesson">
            <span>OBJETIVO RR</span>
            <blockquote>
              No solo enseñes qué hacer con esta foto.
              <strong> Construye un criterio para la próxima pantalla.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            CONSTRUIR RESPUESTA COMPLETA →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 20 KG</span>
          <h1>Vuelve al SPOT completo.</h1>

          <div className="scene">
            <blockquote>
              —Me han mandado una foto de una persona desnuda al grupo de clase.
              Yo no la pedí.
            </blockquote>
          </div>

          <p className="trainingLead">
            Integra vínculo, escucha, no difusión, descubrimiento del contexto y
            protección. No necesitas resolver toda la situación en una sola
            frase.
          </p>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye qué dirías y qué harías..."
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
          <h1>Primero vínculo. Después criterio. Y cuando toca, protección.</h1>

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
              RECIBO → REGULO MI REACCIÓN → EVITO CULPAR → FRENO LA DIFUSIÓN →
              DESCUBRO CONTEXTO →
              <strong> PROTEJO Y PIDO AYUDA CUANDO ES NECESARIO.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · MENOS AYUDA</span>
          <h1>Ahora cambia la presión.</h1>

          <div className="scene">
            <blockquote>
              —Un chico me ha dicho que si no le mando una foto mía, va a decir
              cosas sobre mí en el grupo.
            </blockquote>
          </div>

          <p className="trainingLead">
            Ya no es una imagen recibida: aparece presión para producir una
            imagen íntima. Construye tu primera respuesta y decide qué cambia en
            el nivel de protección.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Qué dirías y qué priorizarías?"
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
          <span className="trainingTag">MAPA RR · PANTALLAS</span>
          <h1>No puedes estar dentro de cada pantalla.</h1>

          <p className="trainingLead">
            Sí puedes intentar construir una ruta mental para cuando aparezca
            algo inesperado, incómodo o preocupante.
          </p>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              PARO → NO DIFUNDO → NO CULPO → CUENTO → DESCUBRIMOS QUÉ HA PASADO
              →
              <strong> AUMENTAMOS PROTECCIÓN SI HAY PRESIÓN O RIESGO.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>MENSAJE QUE QUEREMOS DEJAR</span>
            <p>
              «Si algún día te llega algo raro o haces algo de lo que después no
              sabes salir, prefiero que vengas a contármelo a que tengas que
              manejarlo solo.»
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 06 · COMPLETADA</span>

          <div className="finishMark">20</div>

          <h1>Que venga a contártelo ya es parte de la protección.</h1>
          <h2>No conviertas la petición de ayuda en un segundo problema.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Pantallas, intimidad y presión necesitan algo más que prohibiciones:
              un menor que sepa detenerse, no difundir, pedir ayuda y confiar en
              que será escuchado.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 07 · «SI DIGO QUE NO, SE VAN A REÍR DE MÍ»</strong>
            <p>
              La siguiente Pesa sube a 20→30 KG. Ya no bastará con conocer el
              límite: habrá que sostenerlo cuando pertenecer al grupo parece
              estar en juego.
            </p>
          </div>

          <Link
            href="/prepararme/10-12/pesa-07"
            className="trainingButton linkButton"
          >
            IR A PESA 07 →
          </Link>

          <Link href="/prepararme/10-12" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
