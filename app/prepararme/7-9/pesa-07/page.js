"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa07() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/7-9" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 07</small>
        </div>

        <div className="kg">{paso <= 5 ? "10 KG" : "20 KG"}</div>
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
          <span className="trainingTag">SPOT · 10 KG</span>

          <h1>«Me ha salido esto en el móvil.»</h1>

          <div className="scene">
            <p>
              Tu hijo estaba utilizando un móvil para ver vídeos. Se acerca,
              te lo entrega y dice:
            </p>

            <blockquote>
              —Papá, estaba viendo vídeos y
              <strong> me ha salido gente desnuda haciendo cosas.</strong>
              <br />
              <br />
              Lo he quitado.
            </blockquote>
          </div>

          <h2>¿Qué harías primero?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe lo primero que probablemente harías o dirías..."
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
          <span className="trainingTag">VENTANA RR</span>

          <h1>Hay dos problemas posibles.</h1>

          <div className="factStory">
            <div>
              <span>LO QUE HA APARECIDO</span>
              <p>
                Contenido que puede no ser adecuado para su edad y que
                necesitamos gestionar.
              </p>
            </div>

            <div>
              <span>LO QUE PUEDE OCURRIR AHORA</span>
              <p>
                Nuestra reacción puede enseñarle si la próxima vez debe venir
                a contárnoslo o esconderlo.
              </p>
            </div>
          </div>

          <div className="yourFirstAnswer">
            <span>TU PRIMERA REACCIÓN</span>
            <p>{respuestaInicial}</p>
          </div>

          <div className="bigQuestion">
            <small>PRIMER OBJETIVO</small>
            <h2>No perder al mensajero mientras atendemos el problema.</h2>
          </div>

          <button className="trainingButton" onClick={() => irA(2)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>

          <h1>Todavía no sabemos cómo llegó hasta allí.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Ha visto algo, lo ha cerrado y ha venido a contártelo.
              </p>
            </div>

            <div>
              <span>HISTORIAS POSIBLES</span>
              <p>
                «Lo estaba buscando.» «Alguien se lo ha enviado.» «Ya lleva
                tiempo viendo estas cosas.»
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>NO ADIVINES TODAVÍA</span>
            <p>
              Antes de enfadarte, castigar o dar una explicación, descubre qué
              ocurrió.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR QUÉ PASÓ →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">CRITERIO RR</span>

          <h1>Primero protege la conversación.</h1>

          <div className="conversation">
            <div>
              <span>TÚ</span>
              <p>
                Gracias por venir a enseñármelo. Has hecho bien en contármelo.
                ¿Qué estabas viendo cuando apareció?
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Un vídeo de un juego. Después salió otro vídeo y lo abrí porque
                no sabía qué era.
              </p>
            </div>

            <div>
              <span>TÚ</span>
              <p>
                Vale. ¿Lo viste mucho rato o lo cerraste enseguida?
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Un poco. No entendía qué estaban haciendo y después lo quité.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>OBSERVA</span>
            <p>
              Estamos obteniendo información sin convertir la conversación en
              un interrogatorio ni castigar el hecho de haberlo contado.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">PREPARAR PARA LA PRÓXIMA VEZ</span>

          <h1>No podemos garantizar que nunca vuelva a aparecer.</h1>

          <p className="trainingLead">
            Los filtros y las normas importan, pero también necesitamos que el
            niño sepa qué hacer cuando algo inesperado atraviesa esas barreras.
          </p>

          <div className="conversation">
            <div>
              <span>SI VUELVE A OCURRIR</span>
              <p>
                Puedes cerrar la imagen o el vídeo y venir a decírmelo.
              </p>
            </div>

            <div>
              <span>SI TE LO ENVÍA ALGUIEN</span>
              <p>
                No tienes que seguir mirándolo ni reenviarlo. Puedes enseñármelo
                o acudir a otro adulto de confianza.
              </p>
            </div>

            <div>
              <span>SI TE DA VERGÜENZA</span>
              <p>
                La vergüenza no significa que tengas que resolverlo solo.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>OBJETIVO</span>
            <blockquote>
              No preparar un Internet perfecto.
              <strong> Preparar al niño para cuando Internet no lo sea.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            CONSTRUIR MI RESPUESTA →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY · 10 KG</span>

          <h1>Vuelve al primer momento.</h1>

          <div className="scene">
            <blockquote>
              —Papá, estaba viendo vídeos y me ha salido gente desnuda haciendo
              cosas. Lo he quitado.
            </blockquote>
          </div>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="¿Qué harías y qué le dirías ahora?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(6)}
            disabled={!respuestaFinal.trim()}
          >
            TERMINAR 10 KG →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">10 KG SUPERADOS</span>

          <div className="finishMark">10</div>

          <h1>Has protegido algo más importante que una pantalla.</h1>

          <h2>Has protegido la posibilidad de que vuelva a contártelo.</h2>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>DESPUÉS DE ENTRENAR</span>
              <p>{respuestaFinal}</p>
            </div>
          </div>

          <div className="nextSpot">
            <span>AHORA SUBIMOS EL PESO</span>
            <strong>20 KG</strong>
            <p>
              Esta vez el contenido no ha aparecido por accidente. Alguien se
              lo ha enviado.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            SUBIR A 20 KG →
          </button>

          <Link
            href="/prepararme/7-9"
            className="secondaryTrainingButton"
          >
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">SPOT · 20 KG</span>

          <h1>Ahora hay otra persona al otro lado.</h1>

          <div className="scene">
            <p>
              Tu hijo se acerca con el móvil y te dice:
            </p>

            <blockquote>
              —Un niño me ha enviado una imagen de gente desnuda.
              <br />
              <br />
              Me dijo que era graciosa y que
              <strong> se la mandara a otros.</strong>
            </blockquote>
          </div>

          <h2>¿Cuál es el mejor primer movimiento?</h2>

          <div className="choiceList">
            <button onClick={() => irA(8)}>
              Quitarle inmediatamente el móvil y prohibírselo durante varias
              semanas.
            </button>

            <button onClick={() => irA(9)}>
              Reconocer que ha hecho bien en contarlo, averiguar qué ocurrió y
              enseñarle que no debe reenviar ese contenido.
            </button>

            <button onClick={() => irA(8)}>
              Exigirle que diga inmediatamente quién fue para hablar con sus
              padres.
            </button>

            <button onClick={() => irA(8)}>
              Borrar la imagen y no darle más importancia para evitar que se
              obsesione con el tema.
            </button>
          </div>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY INMEDIATO</span>

          <h1>Hay decisiones que vendrán después.</h1>

          <p className="trainingLead">
            Puede ser necesario revisar el dispositivo, ajustar controles,
            conocer el origen del contenido o intervenir con otros adultos.
            Pero el primer movimiento sigue teniendo una función concreta:
            comprender lo ocurrido y mantener abierta la comunicación.
          </p>

          <div className="criterionReminder">
            <span>ORDEN RR</span>
            <p>
              Primero comprende. Después protege. Luego decide qué medidas
              adicionales necesita la situación.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            VOLVER AL SPOT →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 20 KG</span>

          <h1>Ahora aparecen varios criterios a la vez.</h1>

          <div className="conversation">
            <div>
              <span>TÚ</span>
              <p>
                Has hecho bien en enseñármelo. No lo reenvíes. Vamos a ver
                juntos qué ha ocurrido.
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Pero si digo quién me lo mandó se va a enfadar conmigo.
              </p>
            </div>
          </div>

          <div className="factStory">
            <div>
              <span>PESA 01</span>
              <p>Primero descubre qué ha ocurrido realmente.</p>
            </div>

            <div>
              <span>PESA 03</span>
              <p>
                El miedo a que alguien se enfade no debe impedir pedir ayuda.
              </p>
            </div>
          </div>

          <div className="factStory">
            <div>
              <span>PESA 04</span>
              <p>
                Privacidad no convierte el cuerpo en algo malo o vergonzoso.
              </p>
            </div>

            <div>
              <span>PESA 07</span>
              <p>
                No reenviar, cerrar el contenido y acudir a un adulto de
                confianza.
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            TERMINAR →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">20 KG SUPERADOS</span>

          <div className="finishMark">20</div>

          <h1>Los criterios empiezan a trabajar juntos.</h1>

          <div className="lesson">
            <span>CRITERIO RR · CRECER</span>
            <blockquote>
              La primera reacción no debería enseñarle a ocultarlo.
              <strong> Debería enseñarle qué hacer con ello.</strong>
            </blockquote>
          </div>

          <div className="factStory">
            <div>
              <span>SI APARECE</span>
              <p>Cerrar, apartarse y contarlo.</p>
            </div>

            <div>
              <span>SI LO ENVÍAN</span>
              <p>No reenviarlo y pedir ayuda.</p>
            </div>
          </div>

          <div className="nextSpot">
            <span>QUEDA UNA PESA</span>
            <strong>PESA 08 · INTEGRACIÓN</strong>
            <p>
              Ya no vamos a enseñarte un criterio nuevo. Te pondremos delante
              de una situación ambigua y RR retirará gran parte de la ayuda.
              Tendrás que decidir qué está ocurriendo, qué criterios necesitas
              y cuándo una situación deja de ser un entrenamiento y necesita
              ayuda real.
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
