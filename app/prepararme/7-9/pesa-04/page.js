"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa04() {
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
          <small>PESA 04</small>
        </div>

        <div className="kg">{paso <= 6 ? "5 KG" : "10 KG"}</div>
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
          <div className="trainingVisual">
            <img
              src="/pesa04.png"
              alt="Pesa 04 · Intimidad sin vergüenza"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · INTIMIDAD SIN VERGÜENZA</span>
              <p>
                Tener intimidad no significa esconder algo malo. También podemos
                enseñar que el cuerpo es normal y que la privacidad se respeta.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · 5 KG</span>

          <h1>«¿Por qué no puedo entrar?»</h1>

          <div className="scene">
            <p>
              Estás cambiándote de ropa en tu habitación. Tu hijo abre la
              puerta y tú le dices que espere fuera.
            </p>

            <blockquote>
              —¿Por qué?
              <br />
              <br />
              <strong>¿Es que estás haciendo algo malo?</strong>
            </blockquote>
          </div>

          <h2>¿Qué le responderías?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe lo primero que probablemente le dirías..."
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

          <h1>Privado no significa malo.</h1>

          <p className="trainingLead">
            Los adultos utilizamos constantemente palabras como «privado»,
            «íntimo», «tápate» o «eso no se enseña». El niño intenta construir
            una explicación para entender por qué.
          </p>

          <div className="yourFirstAnswer">
            <span>TU RESPUESTA AUTOMÁTICA</span>
            <p>{respuestaInicial}</p>
          </div>

          <div className="bigQuestion">
            <small>¿QUÉ QUEREMOS QUE APRENDA?</small>
            <h2>
              Que algo pueda ser privado sin ser malo, sucio ni vergonzoso.
            </h2>
          </div>

          <button className="trainingButton" onClick={() => irA(2)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>

          <h1>La puerta cerrada no significa que haya algo malo detrás.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Una persona está cambiándose y quiere hacerlo sin que otra
                persona entre.
              </p>
            </div>

            <div>
              <span>HISTORIA POSIBLE DEL NIÑO</span>
              <p>
                «Si no puedo verlo, será porque el cuerpo desnudo es algo malo
                o vergonzoso.»
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Podemos corregir esa historia sin renunciar a la intimidad.
          </p>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR EL CRITERIO →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">CRITERIO RR</span>

          <h1>Intimidad significa poder elegir.</h1>

          <div className="conversation">
            <div>
              <span>TÚ</span>
              <p>No estoy haciendo nada malo. Me estoy cambiando.</p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>Entonces, ¿por qué no puedo entrar?</p>
            </div>

            <div>
              <span>TÚ</span>
              <p>
                Porque hay momentos en los que una persona quiere intimidad.
                Igual que tú puedes querer estar solo cuando te cambias o vas
                al baño.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO</span>

            <p>
              Intimidad no significa esconder algo malo. Significa que cada
              persona puede decidir cuándo necesita un espacio privado y quién
              puede estar presente.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">LA OTRA DIRECCIÓN</span>

          <h1>Tu intimidad también enseña a respetar la suya.</h1>

          <p className="trainingLead">
            El objetivo no es solamente que aprenda a llamar antes de entrar.
            Estamos construyendo una regla que también podrá utilizar sobre su
            propio cuerpo.
          </p>

          <div className="factStory">
            <div>
              <span>YO PUEDO</span>
              <p>
                Pedir intimidad cuando me cambio, me ducho, voy al baño o
                simplemente necesito estar solo.
              </p>
            </div>

            <div>
              <span>LOS DEMÁS PUEDEN</span>
              <p>
                Pedirme exactamente lo mismo y yo debo respetarlo.
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>REGLA TRANSFERIBLE</small>
            <h2>
              Puedo pedir privacidad y también tengo que respetar la tuya.
            </h2>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            VOLVER AL SPOT →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">TU RESPUESTA</span>

          <h1>Ahora constrúyela tú.</h1>

          <div className="scene">
            <blockquote>
              —¿Por qué no puedo entrar?
              <br />
              <br />
              ¿Es que estás haciendo algo malo?
            </blockquote>
          </div>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="¿Qué le dirías ahora?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(6)}
            disabled={!respuestaFinal.trim()}
          >
            TERMINAR 5 KG →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR · 5 KG</span>

          <div className="finishMark">RR</div>

          <h1>Has separado intimidad de vergüenza.</h1>

          <h2>Privado ≠ malo.</h2>

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

          <div className="lesson">
            <span>LO QUE TE LLEVAS</span>

            <blockquote>
              Mi cuerpo no es algo de lo que avergonzarme.
              <strong> Y aun así puedo querer intimidad.</strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE NIVEL</span>
            <strong>10 KG</strong>

            <p>
              Ahora será tu hijo quien pida intimidad y tendremos que comprobar
              si somos capaces de respetar el mismo criterio.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            SUBIR A 10 KG →
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
          <span className="trainingTag">SPOT · 10 KG</span>

          <h1>Ahora la puerta la cierra él.</h1>

          <div className="scene">
            <p>
              Tu hijo está cambiándose para ponerse el pijama. Entras en su
              habitación para dejar ropa sobre la cama.
            </p>

            <blockquote>
              —Papá, <strong>¿puedes salir mientras me cambio?</strong>
            </blockquote>
          </div>

          <h2>¿Cuál sería la respuesta más coherente con lo entrenado?</h2>

          <div className="choiceList">
            <button onClick={() => irA(8)}>
              «Soy tu padre. Te he visto desnudo miles de veces.»
            </button>

            <button onClick={() => irA(9)}>
              «Claro. Dejo esto aquí y salgo. Avísame cuando termines.»
            </button>

            <button onClick={() => irA(8)}>
              «No seas vergonzoso, que no pasa nada.»
            </button>

            <button onClick={() => irA(8)}>
              «¿Y desde cuándo te molesta que entre?»
            </button>
          </div>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY INMEDIATO</span>

          <h1>
            La intimidad no depende de si a nosotros nos parece necesaria.
          </h1>

          <p className="trainingLead">
            Que lo hayamos bañado, cambiado o visto desnudo muchas veces no
            significa que tenga que querer lo mismo hoy.
          </p>

          <div className="criterionReminder">
            <span>RECUPERA EL CRITERIO</span>

            <p>
              A medida que crece puede cambiar cuánto espacio corporal desea.
              Respetar una petición razonable de intimidad le enseña que sus
              límites pueden expresarse y ser escuchados.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            VOLVER AL SPOT →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA</span>

          <h1>La regla también funciona cuando no eres tú quien la pide.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>¿Puedes salir mientras me cambio?</p>
            </div>

            <div>
              <span>TÚ</span>
              <p>Claro. Dejo esto aquí y salgo. Avísame cuando termines.</p>
            </div>
          </div>

          <p className="trainingLead">
            No necesitamos convertir cada petición de intimidad en una gran
            conversación. A veces el aprendizaje está simplemente en que el
            límite se expresa y el adulto lo respeta.
          </p>

          <div className="bigQuestion">
            <small>LO QUE APRENDE SIN DISCURSO</small>
            <h2>«Puedo decirlo y me escuchan.»</h2>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            TERMINAR →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">10 KG SUPERADOS</span>

          <div className="finishMark">10</div>

          <h1>Has entrenado intimidad sin vergüenza.</h1>

          <div className="lesson">
            <span>CRITERIO RR · CRECER</span>

            <blockquote>
              El cuerpo no es malo ni vergonzoso.
              <strong> La intimidad sigue siendo un derecho.</strong>
            </blockquote>
          </div>

          <div className="factStory">
            <div>
              <span>NO ES</span>
              <p>«Tu cuerpo debe esconderse porque hay algo malo en él.»</p>
            </div>

            <div>
              <span>ES</span>
              <p>
                «Tu cuerpo es normal y puedes decidir cuándo quieres
                privacidad.»
              </p>
            </div>
          </div>

          <div className="nextSpot">
            <span>PRÓXIMA PESA</span>

            <strong>«¿DE DÓNDE VIENEN LOS BEBÉS?»</strong>

            <p>
              Ahora utilizaremos todo lo aprendido para entrar en reproducción:
              descubrir primero qué quiere saber, responder con verdad y
              ajustar la profundidad a su pregunta.
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
