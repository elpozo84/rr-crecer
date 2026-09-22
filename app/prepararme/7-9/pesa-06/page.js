"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa06() {
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
          <small>PESA 06</small>
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

          <h1>«¿Por qué se llama pene?»</h1>

          <div className="scene">
            <p>
              Tu hijo está hablando contigo sobre las partes del cuerpo. De
              repente pregunta:
            </p>

            <blockquote>
              —Papá, ¿por qué esto se llama <strong>pene</strong>?
              <br />
              <br />
              En el colegio algunos niños le llaman de otras maneras.
            </blockquote>
          </div>

          <h2>¿Qué le responderías?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe lo que probablemente le dirías..."
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

          <h1>Prueba a decir la palabra.</h1>

          <p className="trainingLead">
            Hay adultos capaces de decir «codo», «rodilla» o «estómago» sin
            pensarlo y que, al llegar a los genitales, cambian el tono, utilizan
            un apodo o intentan terminar la conversación rápidamente.
          </p>

          <div className="yourFirstAnswer">
            <span>TU RESPUESTA INICIAL</span>
            <p>{respuestaInicial}</p>
          </div>

          <div className="bigQuestion">
            <small>OBSERVA TU REACCIÓN</small>
            <h2>
              ¿Estoy enseñando algo sobre el cuerpo sin darme cuenta?
            </h2>
          </div>

          <button className="trainingButton" onClick={() => irA(2)}>
            MIRAR MÁS DE CERCA →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>

          <h1>La palabra no convierte la conversación en sexual.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Pene y vulva son nombres de partes del cuerpo.
              </p>
            </div>

            <div>
              <span>HISTORIA POSIBLE DEL ADULTO</span>
              <p>
                «Si utilizo estas palabras con naturalidad, estoy hablando de
                sexualidad demasiado pronto.»
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>SEPARA LAS COSAS</span>
            <p>
              Nombrar correctamente una parte del cuerpo no exige convertir el
              momento en una explicación sobre relaciones sexuales.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">CRITERIO RR</span>

          <h1>El cuerpo necesita palabras.</h1>

          <p className="trainingLead">
            Los nombres cotidianos o familiares pueden existir. El objetivo no
            es prohibirlos. El niño también debería conocer los términos
            anatómicos básicos.
          </p>

          <div className="conversation">
            <div>
              <span>TÚ</span>
              <p>
                Se llama pene. Igual que esto se llama brazo y esto se llama
                rodilla.
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Pero Marcos le llama de otra manera.
              </p>
            </div>

            <div>
              <span>TÚ</span>
              <p>
                Hay personas que usan apodos o palabras diferentes. Pero pene
                es uno de los nombres correctos para esa parte del cuerpo.
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRECISIÓN SIN EXAMEN</span>

          <h1>No necesitamos convertir el cuerpo en una clase de anatomía.</h1>

          <p className="trainingLead">
            Conocer palabras correctas sirve para comprender el propio cuerpo,
            hacer preguntas y explicar con mayor claridad si algo duele,
            molesta o ha ocurrido.
          </p>

          <div className="factStory">
            <div>
              <span>NATURALIDAD</span>
              <p>
                Podemos utilizar nombres correctos sin poner una voz especial,
                reírnos ni mostrar alarma.
              </p>
            </div>

            <div>
              <span>PRECISIÓN</span>
              <p>
                También podemos corregir poco a poco confusiones anatómicas sin
                exigir que el niño memorice un manual.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>UN EJEMPLO IMPORTANTE</span>
            <p>
              En las niñas, «vulva» se refiere a los genitales externos.
              «Vagina» no es el nombre de toda la zona genital. Podemos
              introducir esta diferencia de forma sencilla cuando sea útil.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            VOLVER AL SPOT →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">TU RESPUESTA</span>

          <h1>Ahora responde con tus palabras.</h1>

          <div className="scene">
            <blockquote>
              —¿Por qué esto se llama pene? En el colegio algunos niños le
              llaman de otras maneras.
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

          <h1>No has enseñado una palabra.</h1>

          <h2>Has entrenado una forma de hablar del cuerpo.</h2>

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
              Si una parte pertenece al cuerpo,
              <strong> también podemos darle un nombre sin vergüenza.</strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE NIVEL</span>
            <strong>10 KG</strong>
            <p>
              Ahora la palabra aparecerá en una situación más incómoda y RR
              retirará parte de la ayuda.
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

          <h1>Ahora hay otras personas delante.</h1>

          <div className="scene">
            <p>
              Estáis comiendo con familiares. Tu hijo dice delante de todos:
            </p>

            <blockquote>
              —Papá, esta mañana me picaba
              <strong> el pene</strong>.
            </blockquote>

            <p>
              Alguien en la mesa se ríe y otra persona le dice:
              «Eso no se dice aquí».
            </p>
          </div>

          <h2>¿Cuál sería tu primer movimiento?</h2>

          <div className="choiceList">
            <button onClick={() => irA(8)}>
              Decirle que esas cosas se cuentan en privado y cambiar
              inmediatamente de tema.
            </button>

            <button onClick={() => irA(9)}>
              No tratar la palabra como algo malo, comprobar después qué le
              ocurre y enseñarle también que algunos asuntos personales pueden
              hablarse con más privacidad.
            </button>

            <button onClick={() => irA(8)}>
              Reírse con los demás para quitar importancia al momento.
            </button>

            <button onClick={() => irA(8)}>
              Corregirlo porque debería haber utilizado una palabra menos
              explícita delante de la familia.
            </button>
          </div>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY INMEDIATO</span>

          <h1>Naturalidad e intimidad pueden convivir.</h1>

          <p className="trainingLead">
            Que algo pueda hablarse con mayor privacidad no significa que el
            nombre de esa parte del cuerpo sea incorrecto, sucio o prohibido.
          </p>

          <div className="criterionReminder">
            <span>RECUPERA LOS CRITERIOS</span>
            <p>
              Pesa 04: privado no significa malo. Pesa 06: las partes del
              cuerpo pueden nombrarse correctamente.
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

          <h1>Dos aprendizajes funcionan al mismo tiempo.</h1>

          <div className="conversation">
            <div>
              <span>TÚ</span>
              <p>
                Vale, luego me cuentas bien lo del picor para ver qué ocurre.
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>¿He dicho algo malo?</p>
            </div>

            <div>
              <span>TÚ</span>
              <p>
                No. Pene es una palabra correcta. Hay cosas personales que a
                veces preferimos hablar con un poco más de intimidad, pero no
                has dicho una palabra mala.
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>INTEGRACIÓN</small>
            <h2>Correcto no significa que todo tenga que ser público.</h2>
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

          <h1>El cuerpo ya tiene palabras.</h1>

          <div className="lesson">
            <span>CRITERIO RR · CRECER</span>

            <blockquote>
              Nombrar el cuerpo con claridad
              <strong> no elimina la intimidad ni crea vergüenza.</strong>
            </blockquote>
          </div>

          <div className="factStory">
            <div>
              <span>PRECISIÓN</span>
              <p>
                Conocer palabras correctas permite preguntar y explicar mejor.
              </p>
            </div>

            <div>
              <span>NATURALIDAD</span>
              <p>
                La reacción del adulto también enseña qué partes del cuerpo
                parecen normales y cuáles parecen prohibidas.
              </p>
            </div>
          </div>

          <div className="nextSpot">
            <span>PRÓXIMA PESA</span>
            <strong>«ME HA SALIDO ESTO EN EL MÓVIL»</strong>
            <p>
              En la Pesa 07 aparecerá algo inesperado en una pantalla. El
              entrenamiento será conseguir que la primera reacción del adulto
              no cierre precisamente la conversación que necesitamos mantener
              abierta.
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
