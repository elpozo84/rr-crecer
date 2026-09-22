"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa02() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");
  const [eleccion, setEleccion] = useState("");

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const opciones = [
    {
      id: "obligar",
      texto: "Decirle que le dé el beso. Es familia y no pasa nada.",
    },
    {
      id: "saludar",
      texto:
        "No obligarle a besar, pero pedirle que salude de alguna manera.",
    },
    {
      id: "irse",
      texto:
        "Dejar que se vaya sin decir nada para no presionarlo.",
    },
  ];

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/7-9" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 02</small>
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
          <span className="trainingTag">SPOT · 5 KG</span>

          <h1>«Dale un beso a la abuela.»</h1>

          <div className="scene">
            <p>
              Llegáis a una reunión familiar. La abuela abre los brazos para
              saludarlo.
            </p>

            <blockquote>
              —Venga, dale un beso a la abuela.
              <br />
              <br />
              Tu hijo responde:
              <br />
              <strong>—No quiero.</strong>
            </blockquote>
          </div>

          <h2>¿Qué harías tú?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe lo que probablemente harías o dirías..."
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
          <span className="trainingTag">MIRA EL AUTOMÁTICO</span>

          <h1>Una frase pequeña puede enseñar mucho.</h1>

          <p className="trainingLead">
            Muchos adultos no pretenden enseñar nada sobre el cuerpo en esta
            situación. Solo quieren que el niño sea educado.
          </p>

          <div className="yourFirstAnswer">
            <span>TU RESPUESTA</span>
            <p>{respuestaInicial}</p>
          </div>

          <div className="bigQuestion">
            <small>LA PREGUNTA RR ES</small>
            <h2>¿Qué puede aprender sobre su cuerpo con nuestra reacción?</h2>
          </div>

          <button className="trainingButton" onClick={() => irA(2)}>
            MIRAR MÁS DE CERCA →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ INTENCIÓN</span>

          <h1>Tu intención y su aprendizaje pueden ser distintos.</h1>

          <div className="factStory">
            <div>
              <span>INTENCIÓN DEL ADULTO</span>
              <p>
                «Quiero que aprenda educación, cariño y respeto hacia su
                familia.»
              </p>
            </div>

            <div>
              <span>POSIBLE APRENDIZAJE</span>
              <p>
                «A veces tengo que aceptar contacto físico aunque no quiera
                para que otro adulto no se sienta mal.»
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Eso no significa que debamos dejar de enseñar educación. Significa
            que podemos separar dos aprendizajes que normalmente mezclamos.
          </p>

          <button className="trainingButton" onClick={() => irA(3)}>
            SEPARARLOS →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">CRITERIO RR</span>

          <h1>Saludar sí. Contacto físico obligatorio, no.</h1>

          <div className="conversation">
            <div>
              <span>ADULTO</span>
              <p>
                No tienes que dar un beso si no quieres. Pero sí vamos a
                saludar a la abuela.
              </p>
            </div>

            <div className="childAnswer">
              <span>NIÑO</span>
              <p>Hola, abuela.</p>
            </div>

            <div>
              <span>ADULTO</span>
              <p>
                Puedes decir hola, darle la mano, chocar los cinco o elegir
                otra forma de saludar.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>EL CRITERIO</span>
            <p>
              Podemos enseñar normas sociales sin enseñar que el cuerpo de un
              niño está disponible para satisfacer las expectativas afectivas
              de otras personas.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">PERO FALTA LA MITAD</span>

          <h1>«Mi cuerpo es mío» no basta.</h1>

          <p className="trainingLead">
            La autonomía corporal tiene dos direcciones.
          </p>

          <div className="factStory">
            <div>
              <span>MI CUERPO</span>
              <p>
                Puedo decir que no quiero un beso, abrazo, cosquillas u otro
                contacto.
              </p>
            </div>

            <div>
              <span>TU CUERPO</span>
              <p>
                Cuando otra persona dice que no quiere contacto, yo también
                tengo que parar.
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>LA REGLA COMPLETA</small>
            <h2>Mi NO importa. Tu NO también.</h2>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            CONSTRUIR MI RESPUESTA →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">TU RESPUESTA</span>

          <h1>Vuelve al primer momento.</h1>

          <div className="scene">
            <blockquote>
              —Venga, dale un beso a la abuela.
              <br />
              <br />
              —No quiero.
            </blockquote>
          </div>

          <h2>¿Qué harías ahora?</h2>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye ahora tu propia respuesta..."
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

          <h1>Dos valores no tienen que competir.</h1>

          <h2>Educación y autonomía corporal pueden convivir.</h2>

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
              Puedo enseñarte a respetar a los demás
              <strong> sin enseñarte a ignorar tus propios límites.</strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE NIVEL</span>
            <strong>10 KG</strong>
            <p>
              Ahora será tu hijo quien quiera tocar a otra persona que ha dicho
              que no.
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

          <h1>Ahora el límite es del otro.</h1>

          <div className="scene">
            <p>
              Tu hijo está jugando con un primo. Empieza a hacerle cosquillas.
              El primo se ríe al principio, pero después dice:
            </p>

            <blockquote>
              <strong>—Para, ya no quiero.</strong>
              <br />
              <br />
              Tu hijo continúa unos segundos porque el otro todavía se está
              riendo.
            </blockquote>
          </div>

          <h2>¿Qué criterio aplicarías?</h2>

          <div className="choiceList">
            <button
              onClick={() => {
                setEleccion("risa");
                irA(8);
              }}
            >
              Si todavía se ríe, probablemente está jugando y no hace falta
              intervenir.
            </button>

            <button
              onClick={() => {
                setEleccion("parar");
                irA(9);
              }}
            >
              Cuando alguien dice «para», se para aunque parezca que sigue
              divirtiéndose.
            </button>

            <button
              onClick={() => {
                setEleccion("adulto");
                irA(8);
              }}
            >
              Esperaría a que el otro niño viniera a pedirme ayuda.
            </button>
          </div>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY INMEDIATO</span>

          <h1>La señal más clara ya apareció.</h1>

          <p className="trainingLead">
            La risa, el juego previo o lo que estaba ocurriendo hace diez
            segundos no anulan un límite expresado ahora.
          </p>

          <div className="criterionReminder">
            <span>CRITERIO</span>
            <p>
              Cuando alguien pide parar un contacto físico, enseñamos a parar.
              Después podemos aclarar qué ocurrió.
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

          <h1>Ahora la regla funciona en las dos direcciones.</h1>

          <div className="conversation">
            <div>
              <span>TÚ</span>
              <p>Ha dicho «para». Paramos.</p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>¡Pero si se estaba riendo!</p>
            </div>

            <div>
              <span>TÚ</span>
              <p>
                Puede haberse estado divirtiendo antes y querer parar ahora.
                Cuando alguien dice que paremos, paramos.
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>LO IMPORTANTE</small>
            <h2>Un sí anterior no convierte el siguiente momento en un sí.</h2>
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

          <h1>Has entrenado reciprocidad.</h1>

          <div className="lesson">
            <span>CRITERIO RR · CRECER</span>

            <blockquote>
              Mi cuerpo merece respeto.
              <strong> El cuerpo del otro también.</strong>
            </blockquote>
          </div>

          <div className="factStory">
            <div>
              <span>PUEDO</span>
              <p>Decir que no quiero contacto físico.</p>
            </div>

            <div>
              <span>DEBO</span>
              <p>Parar cuando otra persona no quiere ese contacto.</p>
            </div>
          </div>

          <div className="nextSpot">
            <span>PRÓXIMA PESA</span>
            <strong>«ES NUESTRO SECRETO»</strong>
            <p>
              El siguiente entrenamiento distinguirá intimidad, sorpresas,
              secretos y situaciones que siempre deben poder contarse.
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
