"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa02() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");
  const [estiloElegido, setEstiloElegido] = useState("");

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPasos = 15;

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/7-9" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 02 · CUERPO Y LÍMITES</small>
        </div>

        <div className="kg">{paso <= 9 ? "5 KG" : "10 KG"}</div>
      </header>

      <div className="trainingProgress">
        <div
          className="trainingProgressFill"
          style={{
            width: `${Math.min(
              ((paso + 1) / totalPasos) * 100,
              100
            )}%`,
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

          <button className="dontKnow" onClick={() => irA(1)}>
            NO SÉ QUÉ DIRÍA
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

          {respuestaInicial && (
            <div className="yourFirstAnswer">
              <span>TU RESPUESTA</span>
              <p>{respuestaInicial}</p>
            </div>
          )}

          <div className="bigQuestion">
            <small>LA PREGUNTA RR ES</small>

            <h2>
              ¿Qué puede aprender sobre su cuerpo con nuestra reacción?
            </h2>
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
            No tenemos que elegir entre educación y autonomía corporal.
            Podemos enseñar las dos.
          </p>

          <button className="trainingButton" onClick={() => irA(3)}>
            SEPARAR LOS DOS APRENDIZAJES →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">CRITERIO RR</span>

          <h1>Saludar sí. Contacto físico obligatorio, no.</h1>

          <div className="factStory">
            <div>
              <span>EDUCACIÓN</span>

              <p>
                Podemos enseñar a saludar, despedirse, dar las gracias y tratar
                con respeto a otras personas.
              </p>
            </div>

            <div>
              <span>CUERPO</span>

              <p>
                No necesitamos convertir un beso o un abrazo en la condición
                para demostrar educación o cariño.
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>CRITERIO RR</small>

            <h2>
              Puedo pedirte que saludes sin decidir por ti cómo usar tu cuerpo.
            </h2>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            ¿Y QUÉ DIGO? →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">
            PALABRAS PARA CUANDO TE QUEDES EN BLANCO · 7–9 AÑOS
          </span>

          <h1>Tres formas de responder.</h1>

          <p className="trainingLead">
            Las tres respetan el mismo criterio. Elige el lenguaje que encaje
            mejor contigo y con la situación.
          </p>

          <div className="conversation">
            <div>
              <span>A · NATURAL Y BREVE</span>

              <p>
                “Si no quieres dar un beso, no tienes que darlo. Saluda a la
                abuela de otra manera.”
              </p>
            </div>

            <div>
              <span>B · DANDO ALTERNATIVAS</span>

              <p>
                “No tienes que dar un beso si no quieres. Puedes decir hola,
                darle la mano, chocar los cinco, mandar un beso o elegir otra
                forma de saludar.”
              </p>
            </div>

            <div>
              <span>C · PROTEGIENDO EL LÍMITE DELANTE DEL ADULTO</span>

              <p>
                “Está bien. No tiene que dar un beso si no quiere. Puede elegir
                cómo saludar.”
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>FÍJATE</span>

            <p>
              No estamos enseñando «haz lo que quieras». Seguimos enseñando una
              norma social —saludar— pero dejamos de hacer obligatorio el
              contacto físico.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            ELEGIR MI FORMA →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">TU FORMA DE HABLAR</span>

          <h1>¿Cuál se parece más a ti?</h1>

          <div className="choiceList">
            <button
              onClick={() => setEstiloElegido("breve")}
            >
              {estiloElegido === "breve" ? "✓ " : ""}
              Sería breve: no hace falta besar, pero sí saludar.
            </button>

            <button
              onClick={() => setEstiloElegido("alternativas")}
            >
              {estiloElegido === "alternativas" ? "✓ " : ""}
              Le ofrecería varias formas de saludar.
            </button>

            <button
              onClick={() => setEstiloElegido("proteger")}
            >
              {estiloElegido === "proteger" ? "✓ " : ""}
              Expresaría yo mismo el límite delante del familiar.
            </button>

            <button
              onClick={() => setEstiloElegido("mezcla")}
            >
              {estiloElegido === "mezcla" ? "✓ " : ""}
              Mezclaría varias y lo diría con mis propias palabras.
            </button>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(6)}
            disabled={!estiloElegido}
          >
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">PERO LA VIDA SIGUE</span>

          <h1>«Pues la abuela se va a poner triste.»</h1>

          <div className="scene">
            <p>
              Alguien de la familia sonríe y dice:
            </p>

            <blockquote>
              —¿No le vas a dar un beso a la abuela?
              <br />
              <br />
              <strong>Se va a poner triste...</strong>
            </blockquote>
          </div>

          <p className="trainingLead">
            Aquí el límite ya no compite solamente con una norma social.
            Aparece algo más difícil: sentirse responsable de la emoción de
            otra persona.
          </p>

          <button className="trainingButton" onClick={() => irA(7)}>
            ¿QUÉ PUEDO DECIR? →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">
            PALABRAS PARA UNA SITUACIÓN INCÓMODA · 7–9 AÑOS
          </span>

          <h1>Cariño no significa obligación.</h1>

          <div className="conversation">
            <div>
              <span>A · MUY SENCILLA</span>

              <p>
                “Puedes querer mucho a la abuela y no querer dar un beso.”
              </p>
            </div>

            <div>
              <span>B · SEPARANDO EMOCIÓN Y CUERPO</span>

              <p>
                “Entiendo que no queramos que la abuela se ponga triste, pero
                no tienes que dar un beso que no quieres dar.”
              </p>
            </div>

            <div>
              <span>C · BUSCANDO OTRA FORMA DE CARIÑO</span>

              <p>
                “No tienes que darle un beso para demostrar que la quieres.
                Puedes buscar otra forma de demostrarle cariño que te resulte
                cómoda.”
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>UNA DISTINCIÓN IMPORTANTE</span>

            <blockquote>
              Puedo preocuparme por cómo se siente otra persona
              <strong> sin tener que ignorar mis límites corporales.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            CONSTRUIR MI RESPUESTA →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">TU LENGUAJE RR</span>

          <h1>Ahora dilo como tú lo dirías.</h1>

          <div className="scene">
            <blockquote>
              —Venga, dale un beso a la abuela.
              <br />
              <br />
              —No quiero.
            </blockquote>
          </div>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye tu propia respuesta..."
          />

          <div className="criterionReminder">
            <span>COMPRUEBA</span>

            <p>
              ¿Mantienes la educación? ¿Respetas el límite? ¿Evitas hacerle
              responsable de demostrar cariño mediante contacto físico?
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(9)}
            disabled={!respuestaFinal.trim()}
          >
            TERMINAR 5 KG →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR · 5 KG</span>

          <div className="finishMark">RR</div>

          <h1>Dos valores pueden convivir.</h1>

          <h2>Educación y autonomía corporal.</h2>

          <div className="comparison">
            <div>
              <span>ANTES</span>

              <p>
                {respuestaInicial || "No sabía qué responder."}
              </p>
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
              Hasta ahora hemos protegido el límite de tu hijo. Ahora será él
              quien tenga que respetar el límite de otra persona.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(10)}
          >
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

      {paso === 10 && (
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

          <h2>¿Qué harías?</h2>

          <div className="choiceList">
            <button onClick={() => irA(11)}>
              Si todavía se ríe, probablemente está jugando. Esperaría un poco.
            </button>

            <button onClick={() => irA(12)}>
              Intervendría: cuando alguien dice «para», paramos.
            </button>

            <button onClick={() => irA(11)}>
              Esperaría a que el otro niño viniera a pedirme ayuda.
            </button>
          </div>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY INMEDIATO</span>

          <h1>La señal más clara ya apareció.</h1>

          <p className="trainingLead">
            Que estuviera riéndose antes no elimina lo que acaba de decir.
          </p>

          <div className="criterionReminder">
            <span>CRITERIO</span>

            <p>
              Cuando alguien pide parar un contacto físico, enseñamos a parar.
              Después podemos hablar de lo ocurrido.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(10)}
          >
            VOLVER AL SPOT →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen">
          <span className="trainingTag">
            PALABRAS PARA CUANDO EL LÍMITE ES DEL OTRO · 7–9 AÑOS
          </span>

          <h1>También necesita saber qué decir y qué hacer.</h1>

          <div className="conversation">
            <div>
              <span>A · INMEDIATA</span>

              <p>
                “Ha dicho que pares. Paramos.”
              </p>
            </div>

            <div>
              <span>B · EXPLICANDO EL CAMBIO</span>

              <p>
                “Puede haberse estado divirtiendo antes y querer parar ahora.
                Cuando alguien dice que paremos, paramos.”
              </p>
            </div>

            <div>
              <span>C · ENSEÑANDO QUÉ HACER DESPUÉS</span>

              <p>
                “Ha dicho que ya no quiere cosquillas. Paramos. Puedes
                preguntarle si quiere seguir jugando de otra manera.”
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>LA REGLA COMPLETA</small>

            <h2>Mi NO importa. Tu NO también.</h2>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(13)}
          >
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 13 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA</span>

          <h1>«¡Pero si se estaba riendo!»</h1>

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

          <div className="lesson">
            <span>OTRA IDEA QUE EMPIEZA A APARECER</span>

            <blockquote>
              Querer algo hace un momento
              <strong> no obliga a seguir queriéndolo ahora.</strong>
            </blockquote>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(14)}
          >
            TERMINAR →
          </button>
        </section>
      )}

      {paso === 14 && (
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
            <span>LO QUE YA PUEDES LLEVARTE A CASA</span>

            <strong>FRASES UTILIZABLES</strong>

            <p>
              “No tienes que dar un beso si no quieres.”
              <br />
              “Puedes saludar de otra manera.”
              <br />
              “Puedes querer a alguien y no querer contacto ahora.”
              <br />
              “Ha dicho que paremos. Paramos.”
            </p>
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
