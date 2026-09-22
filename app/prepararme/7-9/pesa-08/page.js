"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

export default function Pesa08() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [respuestaIntegrada, setRespuestaIntegrada] = useState("");

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPasos = 13;

  return (
    <main className="trainingPage">
      <TrainingProgressTracker
        stage="7-9"
        weightNumber={8}
        startedKg={20}
        completedKg={30}
        completed={paso === 12}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/7-9" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 08 · INTEGRACIÓN</small>
        </div>

        <div className="kg">{paso <= 6 ? "20 KG" : "30 KG"}</div>
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
              src="/pesa08.png"
              alt="Pesa 08 · Integración de criterios"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · INTEGRACIÓN</span>
              <p>
                Ya no entrenamos una sola respuesta. Ahora tendrás que descubrir
                qué está ocurriendo, qué criterios necesitas y cuándo proteger
                importa más que seguir entrenando.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · 20 KG</span>

          <h1>«Me dijo que no se lo contara a nadie.»</h1>

          <div className="scene">
            <p>
              Tu hijo llega del colegio algo serio. Después de un rato te dice:
            </p>

            <blockquote>
              —Un niño mayor nos enseñó un vídeo en su móvil. Salía gente desnuda.
              Luego dijo que era una broma y que
              <strong> no se lo contáramos a nadie.</strong>
            </blockquote>

            <p>
              No sabes todavía cuánto vio, quién estaba allí ni por qué le han
              pedido que lo mantenga en secreto.
            </p>
          </div>

          <h2>¿Qué harías o dirías primero?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe tu respuesta real, aunque no estés seguro..."
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
          <span className="trainingTag">VENTANA RR</span>

          <h1>No corras a completar la historia.</h1>

          <div className="yourFirstAnswer">
            <span>TU RESPUESTA INICIAL</span>
            <p>{respuestaInicial}</p>
          </div>

          <div className="factStory">
            <div>
              <span>HECHOS</span>
              <p>
                Ha visto un vídeo con desnudos. Lo mostró un niño mayor. Le
                pidieron que no lo contara. Tu hijo ha venido a decírtelo.
              </p>
            </div>

            <div>
              <span>TODAVÍA NO SABEMOS</span>
              <p>
                Qué contenía exactamente, si hubo presión, si alguien pidió hacer
                algo, si el contenido fue enviado o si existe alguna otra persona
                implicada.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>HECHO ≠ HISTORIA</span>
            <p>
              La situación merece atención. Precisamente por eso necesitamos
              comprender antes de completar los huecos con miedo o suposiciones.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(2)}>
            DESCUBRIR SIN INTERROGAR →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">INTEGRACIÓN</span>

          <h1>Ya conoces varias herramientas. Ahora elige el orden.</h1>

          <div className="factStory">
            <div>
              <span>PESA 01 · DESCUBRIR</span>
              <p>No asumir qué significa una frase antes de preguntar.</p>
            </div>

            <div>
              <span>PESA 03 · SECRETOS</span>
              <p>
                Una petición de silencio nunca debe impedir acudir a un adulto de
                confianza.
              </p>
            </div>
          </div>

          <div className="factStory">
            <div>
              <span>PESA 07 · PANTALLAS</span>
              <p>
                No reenviar el contenido y proteger que pueda volver a contártelo.
              </p>
            </div>

            <div>
              <span>VENTANA RR</span>
              <p>
                Regular tu primera reacción para poder obtener información útil.
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>EL RETO YA NO ES RECORDAR FRASES</small>
            <h2>Es saber qué criterio necesita este momento.</h2>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRIMER MOVIMIENTO</span>

          <h1>Protege la puerta por la que acaba de entrar.</h1>

          <div className="conversation">
            <div>
              <span>TÚ</span>
              <p>
                Gracias por contármelo. Aunque alguien diga que no lo cuentes,
                puedes venir a decírmelo cuando algo te preocupa, te incomoda o
                no entiendes qué está pasando.
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>Pero se va a enfadar si sabe que te lo he dicho.</p>
            </div>

            <div>
              <span>TÚ</span>
              <p>
                Entiendo que eso te preocupe. Ahora lo importante es que yo pueda
                entender bien qué ocurrió para ayudarte.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>OBSERVA EL ORDEN</span>
            <p>
              Recibes lo que te cuenta, reduces el miedo a hablar y después
              empiezas a descubrir.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            DESCUBRIR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">DESCUBRIR</span>

          <h1>Pregunta para comprender, no para conseguir una confesión.</h1>

          <div className="conversation">
            <div>
              <span>PREGUNTA ÚTIL</span>
              <p>Cuéntame desde el principio qué pasó.</p>
            </div>

            <div>
              <span>PREGUNTA ÚTIL</span>
              <p>¿Quién estaba allí?</p>
            </div>

            <div>
              <span>PREGUNTA ÚTIL</span>
              <p>¿Alguien os pidió hacer algo además de mirar?</p>
            </div>

            <div>
              <span>PREGUNTA ÚTIL</span>
              <p>¿Ese vídeo os lo enviaron o solo estaba en ese móvil?</p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO</span>
            <blockquote>
              Necesitamos información suficiente para proteger.
              <strong> No necesitamos convertir al niño en investigador.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">NUEVA INFORMACIÓN</span>

          <h1>La situación cambia con una sola frase.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Solo nos lo enseñó. Cuando yo dije que me iba, me dijo que no
                fuera un bebé y que todos los demás se habían quedado.
              </p>
            </div>
          </div>

          <h2>¿Qué aparece ahora?</h2>

          <div className="choiceList">
            <button onClick={() => irA(6)}>
              Solo curiosidad. No hay nada más que valorar.
            </button>

            <button onClick={() => irA(7)}>
              Aparece presión del grupo y necesitamos integrar límites, pantallas,
              criterio propio y pedir ayuda.
            </button>

            <button onClick={() => irA(6)}>
              El problema principal es que utilizó la palabra «bebé».
            </button>

            <button onClick={() => irA(6)}>
              Lo mejor es decirle que no vuelva a juntarse nunca con esos niños y
              cerrar la conversación.
            </button>
          </div>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY INMEDIATO</span>

          <h1>Cuando aparece información nueva, el criterio también puede cambiar.</h1>

          <p className="trainingLead">
            El objetivo no es acertar una etiqueta a la primera. Es actualizar
            nuestra respuesta a medida que entendemos mejor lo ocurrido.
          </p>

          <div className="criterionReminder">
            <span>AHORA SABEMOS ALGO MÁS</span>
            <p>
              Hubo presión para quedarse mirando. Eso añade una cuestión de
              límites y decisión propia a la situación de pantalla.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            VOLVER AL SPOT →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">20 KG · INTEGRAR</span>

          <h1>No basta con decir «no mires eso».</h1>

          <div className="conversation">
            <div>
              <span>TÚ</span>
              <p>
                Si algo te incomoda, puedes apartarte aunque los demás se queden o
                se rían. No tienes que demostrar nada quedándote.
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>¿Y si luego se ríen de mí?</p>
            </div>

            <div>
              <span>TÚ</span>
              <p>
                Puede pasar, y puede ser incómodo. Pero que un grupo se ría no
                convierte una decisión que te protege en una mala decisión.
              </p>
            </div>
          </div>

          <div className="factStory">
            <div>
              <span>LÍMITE</span>
              <p>Puedes salir de una situación que no quieres.</p>
            </div>

            <div>
              <span>GRUPO</span>
              <p>Que otros lo hagan no obliga a imitarlo.</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            SUBIR A 30 KG →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">SPOT · 30 KG</span>

          <h1>Ahora RR retira casi toda la ayuda.</h1>

          <div className="scene">
            <p>Tu hijo te cuenta:</p>

            <blockquote>
              —Otro día ese niño dijo que si queríamos ver más vídeos teníamos
              que ir a un sitio donde no hubiera adultos.
            </blockquote>
          </div>

          <h2>Construye tu respuesta completa.</h2>

          <p className="trainingLead">
            Piensa en el orden: recibir, comprender, valorar seguridad, proteger y
            decidir qué debe ocurrir después.
          </p>

          <textarea
            value={respuestaIntegrada}
            onChange={(e) => setRespuestaIntegrada(e.target.value)}
            placeholder="¿Qué dirías y qué harías ahora?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(9)}
            disabled={!respuestaIntegrada.trim()}
          >
            COMPROBAR MI CRITERIO →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">CAMBIO DE MODO</span>

          <h1>Esto ya no es solo una conversación educativa.</h1>

          <p className="trainingLead">
            La propuesta de aislar a menores de los adultos para mostrarles más
            contenido sexual cambia el nivel de preocupación. Ya no buscamos una
            frase perfecta ni seguimos aumentando los kilos.
          </p>

          <div className="yourFirstAnswer">
            <span>TU RESPUESTA</span>
            <p>{respuestaIntegrada}</p>
          </div>

          <div className="lesson">
            <span>PUENTE RR · SEGURIDAD</span>
            <blockquote>
              Cuando aparecen señales que pueden requerir protección,
              <strong> el entrenamiento se detiene y la prioridad cambia.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>PRIMERAS PRIORIDADES</span>
            <p>
              Escuchar sin culpar, evitar promesas que no puedas cumplir,
              preservar la información relevante y buscar orientación adecuada
              para valorar los siguientes pasos.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            VER QUÉ HE ENTRENADO →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY RR</span>

          <h1>Compara el principio con el final.</h1>

          <div className="comparison">
            <div>
              <span>AL ENTRAR</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>30 KG</span>
              <p>{respuestaIntegrada}</p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>NO MIDAS SI SUENA BONITO</small>
            <h2>Mide qué capacidades aparecen ahora en tu respuesta.</h2>
          </div>

          <div className="factStory">
            <div>
              <span>DESCUBRIR</span>
              <p>No completas la historia antes de escuchar.</p>
            </div>

            <div>
              <span>PROTEGER LA CONVERSACIÓN</span>
              <p>No castigas el hecho de que haya venido a contártelo.</p>
            </div>
          </div>

          <div className="factStory">
            <div>
              <span>INTEGRAR</span>
              <p>Combinas pantallas, secretos, presión y límites.</p>
            </div>

            <div>
              <span>CAMBIAR DE MODO</span>
              <p>Reconoces cuándo la situación necesita protección real.</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            VER EL MAPA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · INTEGRACIÓN</span>

          <h1>Ya no necesitas recordar cada conversación.</h1>

          <div className="conversation">
            <div>
              <span>1 · RECIBO</span>
              <p>Cuido que pueda seguir hablando conmigo.</p>
            </div>

            <div>
              <span>2 · SEPARO</span>
              <p>Distingo hechos de lo que mi cabeza está completando.</p>
            </div>

            <div>
              <span>3 · DESCUBRO</span>
              <p>Pregunto lo necesario para comprender.</p>
            </div>

            <div>
              <span>4 · INTEGRO</span>
              <p>Activo los criterios que necesita la situación.</p>
            </div>

            <div>
              <span>5 · DECIDO</span>
              <p>Elijo qué enseñar, qué límite poner y qué acción tomar.</p>
            </div>

            <div>
              <span>6 · PROTEJO</span>
              <p>
                Si aparecen señales preocupantes, dejo de entrenar y busco la
                ayuda adecuada.
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            TERMINAR PESA 08 →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 08 · SUPERADA</span>

          <div className="finishMark">30</div>

          <h1>Los criterios ya no viven separados.</h1>

          <h2>Empiezan a convertirse en una forma de responder.</h2>

          <div className="lesson">
            <span>CRITERIO RR · CRECER</span>
            <blockquote>
              No necesitas saber de antemano todas las respuestas.
              <strong> Necesitas saber construir el siguiente paso.</strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 09 · TRANSFERENCIA</strong>
            <p>
              En la siguiente Pesa aparecerá una conversación cotidiana con
              humor, grupo y sexualidad. RR retirará todavía más ayuda para que
              seas tú quien construya la respuesta.
            </p>
          </div>

          <Link
            href="/orientacion"
            className="secondaryTrainingButton"
          >
            HA PASADO ALGO · NECESITO ORIENTACIÓN
          </Link>

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
