"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa03() {
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
          <small>PESA 03</small>
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
              src="/pesa03.png"
              alt="Pesa 03 · Es nuestro secreto"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · SECRETOS Y PEDIR AYUDA</span>
              <p>
                No se trata de prohibir todos los secretos. Se trata de que pedir
                ayuda siempre siga siendo posible.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · 5 KG</span>

          <h1>«Es nuestro secreto.»</h1>

          <div className="scene">
            <p>
              Tu hijo llega a casa después de pasar la tarde con un familiar.
              Mientras merienda te dice:
            </p>

            <blockquote>
              —Me ha dado chocolate antes de cenar, pero me ha dicho que
              <strong> es nuestro secreto</strong> y que no te lo cuente.
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

          <h1>No todo secreto significa lo mismo.</h1>

          <p className="trainingLead">
            Podríamos reaccionar contra el familiar, prohibir todos los
            secretos o quitar importancia porque solo era chocolate.
          </p>

          <div className="yourFirstAnswer">
            <span>TU PRIMERA RESPUESTA</span>
            <p>{respuestaInicial}</p>
          </div>

          <div className="bigQuestion">
            <small>ANTES DE CREAR UNA REGLA</small>
            <h2>¿Qué queremos que aprenda para cuando nosotros no estemos?</h2>
          </div>

          <button className="trainingButton" onClick={() => irA(2)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ REGLA RÁPIDA</span>

          <h1>«Nunca guardes secretos» parece sencillo.</h1>

          <p className="trainingLead">
            Pero en la vida también existen privacidad, confidencias y
            sorpresas. Necesitamos un criterio más útil que una palabra
            prohibida.
          </p>

          <div className="factStory">
            <div>
              <span>SORPRESA</span>
              <p>
                «No le digas todavía a mamá qué regalo hemos comprado.»
              </p>
            </div>

            <div>
              <span>PRIVACIDAD</span>
              <p>
                «No tienes que contar a todo el mundo todo lo que piensas,
                sientes o haces.»
              </p>
            </div>
          </div>

          <div className="factStory">
            <div>
              <span>SECRETO COTIDIANO</span>
              <p>
                Alguien le pide ocultar algo pequeño para evitar una norma o
                una consecuencia.
              </p>
            </div>

            <div>
              <span>SECRETO QUE NECESITA AYUDA</span>
              <p>
                Algo le da miedo, vergüenza, incomodidad, le hace daño o alguien
                le dice que no puede contárselo a un adulto de confianza.
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR EL CRITERIO →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">CRITERIO RR</span>

          <h1>La puerta de salida siempre debe existir.</h1>

          <div className="criterionReminder">
            <span>IDEA CENTRAL</span>

            <p>
              Un niño puede tener intimidad y privacidad. Pero debe saber que
              ninguna persona puede exigirle guardar algo que le haga sentir
              miedo, daño, presión o incomodidad, ni impedirle pedir ayuda.
            </p>
          </div>

          <div className="conversation">
            <div>
              <span>TÚ</span>
              <p>
                Gracias por contármelo. Aunque alguien te diga que algo es un
                secreto, siempre puedes contármelo a mí o a otro adulto de
                confianza si te preocupa o te hace sentir incómodo.
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>¿Aunque haya prometido no decirlo?</p>
            </div>

            <div>
              <span>TÚ</span>
              <p>
                Sí. Una promesa nunca te obliga a quedarte solo con algo que
                necesitas contar.
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
          <span className="trainingTag">RED DE SEGURIDAD</span>

          <h1>No basta con decir «cuéntamelo a mí».</h1>

          <p className="trainingLead">
            Puede haber momentos en los que tú no estés disponible, seas parte
            del problema o al niño le resulte más fácil acudir primero a otra
            persona.
          </p>

          <div className="bigQuestion">
            <small>MEJOR QUE UNA SOLA PERSONA</small>
            <h2>Construye una pequeña red de adultos de confianza.</h2>
          </div>

          <div className="criterionReminder">
            <span>ENTRENAMIENTO</span>

            <p>
              El niño debería poder identificar varios adultos seguros a los
              que acudir y saber que, si uno no entiende o no ayuda, puede
              seguir contándolo hasta encontrar ayuda.
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

          <h1>Ahora constrúyela tú.</h1>

          <div className="scene">
            <blockquote>
              —Me ha dado chocolate antes de cenar, pero dice que es nuestro
              secreto y que no te lo cuente.
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

          <h1>No has prohibido una palabra.</h1>

          <h2>Has construido una puerta para pedir ayuda.</h2>

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
              Puedes tener privacidad.
              <strong>
                {" "}
                Nunca tienes que quedarte solo con algo que necesitas contar.
              </strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE NIVEL</span>
            <strong>10 KG</strong>

            <p>
              Esta vez no habrá chocolate. Tendrás que detectar cuándo una
              petición de secreto necesita una respuesta diferente.
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

          <h1>La frase es la misma. El contexto no.</h1>

          <div className="scene">
            <p>
              Tu hijo está más callado de lo habitual. Después de preguntarle
              varias veces si ocurre algo, te dice:
            </p>

            <blockquote>
              —Una persona me ha dicho que
              <strong> no puedo contarte lo que pasó</strong> porque se
              enfadaría conmigo.
            </blockquote>
          </div>

          <h2>¿Cuál sería tu primer objetivo?</h2>

          <div className="choiceList">
            <button onClick={() => irA(8)}>
              Conseguir inmediatamente todos los detalles para saber quién ha
              sido y qué ha ocurrido.
            </button>

            <button onClick={() => irA(9)}>
              Hacerle saber que puede contarlo, escuchar sin presionarlo y
              priorizar su seguridad.
            </button>

            <button onClick={() => irA(8)}>
              Decirle que nunca debería haber aceptado guardar un secreto.
            </button>

            <button onClick={() => irA(8)}>
              Restarle importancia para que no se asuste y esperar a que lo
              cuente cuando quiera.
            </button>
          </div>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY INMEDIATO</span>

          <h1>Primero necesitamos conservar la puerta abierta.</h1>

          <p className="trainingLead">
            Ante una revelación preocupante, interrogar, culpabilizar o
            minimizar puede dificultar que siga hablando.
          </p>

          <div className="criterionReminder">
            <span>PRIMER OBJETIVO</span>

            <p>
              Escuchar con calma, dejar claro que puede contarlo, evitar
              prometer cosas que no puedas cumplir y valorar su seguridad.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            VOLVER AL SPOT →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">CAMBIO DE MODO</span>

          <h1>Aquí dejamos de entrenar una conversación cotidiana.</h1>

          <p className="trainingLead">
            Una petición de secreto acompañada de miedo, amenaza, daño,
            coerción o una posible situación de abuso requiere tomar en serio
            la seguridad del menor.
          </p>

          <div className="conversation">
            <div>
              <span>TÚ</span>
              <p>
                Puedes contármelo. Gracias por decírmelo. Quiero escucharte y
                ayudarte.
              </p>
            </div>

            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>¿No te vas a enfadar conmigo?</p>
            </div>

            <div>
              <span>TÚ</span>
              <p>
                No estás en problemas por contármelo. Vamos a ocuparnos de que
                estés seguro.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>RR · CRECER CAMBIA DE FUNCIÓN</span>

            <p>
              Si existe una preocupación real por abuso, violencia, coerción o
              seguridad, la aplicación no debe intentar resolver el caso con
              otra Pesa. Debe orientar hacia ayuda profesional y recursos de
              protección adecuados.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">10 KG SUPERADOS</span>

          <div className="finishMark">10</div>

          <h1>Has aprendido cuándo dejar de entrenar.</h1>

          <div className="lesson">
            <span>CRITERIO RR · CRECER</span>

            <blockquote>
              Privacidad no significa aislamiento.
              <strong>
                {" "}
                Pedir ayuda siempre debe seguir siendo posible.
              </strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>PRÓXIMA PESA</span>

            <strong>«¿POR QUÉ NO PUEDO ENTRAR?»</strong>

            <p>
              Entrenaremos cómo enseñar intimidad sin convertir el cuerpo en
              algo vergonzoso o prohibido.
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
