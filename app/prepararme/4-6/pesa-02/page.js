"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Le ayudo directamente",
  "Le digo que ya es mayor",
  "Le pregunto qué necesita",
  "Me preocupa hacerlo mal",
  "No sé cuándo intervenir",
];

export default function Pesa02Descubrir46() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
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
        <Link href="/prepararme/4-6" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 02 · CUIDADO Y AUTONOMÍA CORPORAL</small>
        </div>

        <div className="kg">{paso <= 7 ? "5 KG" : "10 KG"}</div>
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
            <img src="/4-6/pesa02.png" alt="Pesa 02 · Yo solo" />
            <div className="trainingVisualCaption">
              <span>SPOT RR · AUTONOMÍA COTIDIANA</span>
              <p>
                Aprender a cuidar el propio cuerpo también significa aprender
                cuándo puedo hacerlo solo y cuándo necesito ayuda.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 5 KG</span>

          <h1>«¡Yo solo!»</h1>

          <div className="scene">
            <p>
              Tu hijo está en el baño. Vas a ayudarle a limpiarse y aparta tu
              mano.
            </p>
            <blockquote>—¡No! ¡Yo solo!</blockquote>
            <p>
              Lo intenta, pero todavía no consigue hacerlo bien y necesita algo
              de ayuda.
            </p>
          </div>

          <h2>¿Qué harías y qué le dirías?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe lo que harías de verdad..."
          />

          <div className="criterionReminder">
            <span>NO BUSQUES LA RESPUESTA PERFECTA</span>
            <p>
              Esta Pesa empieza exactamente donde estás. Al final volveremos a
              la misma situación.
            </p>
          </div>

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

          <h1>Cuando dice «yo solo», ¿qué haces automáticamente?</h1>

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

          <div className="criterionReminder">
            <span>VENTANA RR</span>
            <p>
              Autonomía no significa dejar de cuidar. Cuidar tampoco significa
              hacer automáticamente por él todo lo que todavía está aprendiendo.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!reaccion}
          >
            VER EL CONFLICTO →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">DOS NECESIDADES A LA VEZ</span>

          <h1>No tienes que elegir entre autonomía y cuidado.</h1>

          <div className="factStory">
            <div>
              <span>AUTONOMÍA</span>
              <p>Quiere empezar a hacer cosas relacionadas con su cuerpo por sí mismo.</p>
            </div>
            <div>
              <span>CUIDADO</span>
              <p>Todavía puede necesitar ayuda real para higiene, salud o seguridad.</p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Ayudar no significa apropiarse de su cuerpo.
              <strong> Podemos ayudar explicando qué hacemos y por qué.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            CAMBIAR LA FORMA DE AYUDAR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">DESCUBRIR ANTES DE INTERVENIR</span>

          <h1>En vez de hacerlo directamente, averigua qué necesita.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES PROBAR</span>
              <p>«Vale, inténtalo tú. ¿Quieres que te ayude si lo necesitas?»</p>
            </div>
            <div>
              <span>O</span>
              <p>«¿Qué parte puedes hacer tú y en cuál necesitas ayuda?»</p>
            </div>
          </div>

          <h2>Construye tu propia pregunta.</h2>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="¿Cómo le ofrecerías ayuda sin quitárselo de las manos?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(4)}
            disabled={!pregunta.trim()}
          >
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">AYUDA PREVISIBLE</span>

          <h1>Si tienes que ayudar, que sepa qué está ocurriendo.</h1>

          <div className="conversation">
            <div>
              <span>ANTES</span>
              <p>«Voy a ayudarte a limpiarte porque todavía queda un poco.»</p>
            </div>
            <div>
              <span>DURANTE</span>
              <p>«Te ayudo aquí y después sigues tú.»</p>
            </div>
            <div>
              <span>DESPUÉS</span>
              <p>«Cada vez podrás hacer más cosas tú solo.»</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>QUÉ ESTAMOS ENTRENANDO</span>
            <p>
              Que recibir ayuda con el cuerpo no tenga que significar quedarse
              pasivo, confundido o sin saber qué está haciendo el adulto.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            AÑADIR UN LÍMITE →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">NO TODA AYUDA ES IGUAL</span>

          <h1>El contexto importa.</h1>

          <p className="trainingLead">
            Un niño pequeño puede necesitar ayuda corporal de sus cuidadores y,
            en algunos contextos, de profesionales que le atienden. Eso no
            elimina la posibilidad de explicarle qué ocurre y escucharle.
          </p>

          <div className="factStory">
            <div>
              <span>CUIDADO</span>
              <p>
                La ayuda tiene una razón comprensible: higiene, salud, seguridad
                o una necesidad concreta.
              </p>
            </div>
            <div>
              <span>CRITERIO</span>
              <p>
                El adulto explica, evita secretos innecesarios y presta atención
                si el niño expresa dolor, miedo o incomodidad.
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            CONSTRUIR EL MENSAJE →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">BANCO DE LENGUAJE</span>

          <h1>Frases que construyen autonomía mientras cuidas.</h1>

          <div className="conversation">
            <div><span>DAR ESPACIO</span><p>«Prueba tú primero.»</p></div>
            <div><span>OFRECER AYUDA</span><p>«Si necesitas ayuda, me lo dices.»</p></div>
            <div><span>EXPLICAR</span><p>«Voy a ayudarte porque aquí todavía te cuesta.»</p></div>
            <div><span>DEVOLVER AUTONOMÍA</span><p>«Esta parte la haces tú.»</p></div>
            <div><span>ESCUCHAR</span><p>«Si algo te molesta o te duele, dímelo.»</p></div>
          </div>

          <div className="criterionReminder">
            <span>LAS FRASES SON MULETAS, NO GUIONES</span>
            <p>
              Lo importante es la estructura: espacio para intentar, ayuda
              cuando hace falta, explicación y devolución de autonomía.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            VOLVER AL SPOT →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN GUIADA · 5 KG</span>

          <h1>Ahora responde otra vez a «¡yo solo!».</h1>

          <div className="conversation">
            <div><span>1 · ESCUCHA</span><p>Reconoce que quiere intentarlo.</p></div>
            <div><span>2 · OBSERVA</span><p>Decide qué puede hacer solo realmente.</p></div>
            <div><span>3 · EXPLICA</span><p>Si ayudas, dile qué vas a hacer y por qué.</p></div>
            <div><span>4 · DEVUELVE</span><p>Deja que haga por sí mismo todo lo que ya pueda.</p></div>
          </div>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="¿Qué harías y qué dirías ahora?"
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
          <span className="trainingTag">REPLAY RR · 10 KG</span>

          <h1>Mira qué ha cambiado.</h1>

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
            <span>NO BUSCAMOS UNA FRASE MÁS BONITA</span>
            <blockquote>
              Buscamos que ahora puedas ver
              <strong> autonomía y cuidado al mismo tiempo.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            TRANSFERIR EL CRITERIO →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 10 KG</span>

          <h1>Ahora cambia la situación.</h1>

          <div className="scene">
            <p>Después del baño quiere vestirse completamente solo.</p>
            <blockquote>—No me ayudes. Yo puedo.</blockquote>
            <p>
              Tiene prisa, se atasca con la ropa y empieza a enfadarse.
            </p>
          </div>

          <p className="trainingLead">
            RR ya no te da los cuatro pasos. Aplica el criterio sin convertir
            autonomía en abandono ni ayuda en sustitución.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cómo actuarías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!transferencia.trim()}
          >
            COMPROBAR CRITERIO →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR</span>

          <h1>Ya tienes un criterio reutilizable.</h1>

          <div className="lesson">
            <span>PESA 02</span>
            <blockquote>
              ESCUCHO → OBSERVO QUÉ PUEDE HACER → OFREZCO AYUDA → EXPLICO →
              <strong> DEVUELVO AUTONOMÍA.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>UNA IDEA PARA LLEVARTE</span>
            <p>
              «Mi cuerpo es mío» no significa «nadie puede ayudarme nunca».
              Significa también aprender que el cuidado corporal puede ser
              comprensible, respetuoso y cada vez más autónomo.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            TERMINAR PESA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 02 · COMPLETADA</span>

          <div className="finishMark">10</div>

          <h1>De hacer por él a enseñarle a cuidarse.</h1>

          <p className="trainingLead">
            Has entrenado una capacidad que aparecerá muchas veces durante su
            crecimiento: ayudar sin borrar la autonomía que está naciendo.
          </p>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 03 · ¿PUEDO ESTAR DESNUDO?</strong>
            <p>
              Ahora damos el siguiente paso: descubrir que un cuerpo puede ser
              completamente normal y, al mismo tiempo, tener intimidad.
            </p>
          </div>

          <Link href="/prepararme/4-6/pesa-03" className="trainingButton linkButton">
            IR A PESA 03 →
          </Link>

          <Link href="/prepararme/4-6" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
