"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Me sale decirle que eso es manipulación",
  "Quiero decirle que deje inmediatamente a esa persona",
  "Me preocupa que ceda por miedo a perder la relación",
  "Me sale explicarle cómo debería responder",
  "Quiero ayudarle a reconocer el mecanismo por sí mismo",
];

export default function Pesa06Decidir1315() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaPresion, setRespuestaPresion] = useState("");
  const [respuestaCambio, setRespuestaCambio] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 13;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <TrainingProgressTracker
        stage="13-15"
        weightNumber={6}
        startedKg={30}
        completedKg={30}
        completed={paso === 12}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/13-15" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 06 · PRESIÓN EMOCIONAL</small>
        </div>

        <div className="kg">30 KG</div>
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
              src="/13-15/pesa06.png"
              alt="Pesa 06 · Si confías en mí, demuéstramelo"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · PRESIÓN EMOCIONAL</span>
              <p>
                Algunas presiones no parecen órdenes. Llegan disfrazadas de
                confianza, amor, pertenencia o miedo a perder a alguien.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 30 KG</span>
          <h1>«Si confías en mí, demuéstramelo.»</h1>

          <div className="scene">
            <p>Tu hijo te cuenta:</p>
            <blockquote>
              —A veces cuando digo que no quiero hacer algo me responde:
              «Entonces será que no confías en mí».
            </blockquote>
          </div>

          <h2>¿Qué le responderías?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe tu respuesta real..."
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
          <h1>Nombrarlo demasiado pronto también puede quitarle aprendizaje.</h1>

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

          <h2>¿Qué conclusión has sacado ya?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Esa persona quiere controlarle», «esta relación es tóxica», «tiene que dejarla»..."
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
          <h1>No necesitas diagnosticar la relación para observar la presión.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Cuando tu hijo pone determinados límites, la otra persona
                relaciona esos límites con una supuesta falta de confianza.
              </p>
            </div>

            <div>
              <span>NO NECESITAS CONCLUIR TODAVÍA</span>
              <p>
                Qué intención tiene la otra persona, cómo es toda la relación o
                qué decisión final debería tomar tu hijo.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Puedo observar un mecanismo concreto sin necesitar convertirlo
              inmediatamente en
              <strong> una etiqueta sobre toda la persona o toda la relación.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            HACER VISIBLE EL MECANISMO →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>Ayúdale a mirar qué cambia dentro de él.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES DESCUBRIR</span>
              <p>«¿Qué sientes cuando te dice eso?»</p>
              <p>«¿Después de escucharlo te apetece más hacerlo o te da miedo decir que no?»</p>
              <p>«Si supieras que no se va a enfadar ni te va a dejar, ¿qué elegirías?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una pregunta que haga visible la presión..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(4)}
            disabled={!pregunta.trim()}
          >
            ESCUCHAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">APARECE EL COSTE</span>
          <h1>La decisión ya no ocurre en las mismas condiciones.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Si supiera que no se va a enfadar, diría que no. Pero cuando me
                dice eso pienso que igual me deja o cree que no le quiero.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ahora puedes ver el mecanismo sin adivinar intenciones: el coste
            emocional de mantener el límite está empujando la decisión.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            ENTRENAR PRESIÓN EMOCIONAL →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">DESEO ≠ MIEDO AL COSTE</span>
          <h1>Una decisión puede parecer voluntaria y estar muy condicionada.</h1>

          <div className="conversation">
            <div>
              <span>QUIERO HACERLO</span>
              <p>La acción coincide con lo que deseo.</p>
            </div>

            <div>
              <span>LO HAGO PARA QUE NO SE ENFADE</span>
              <p>La acción evita un coste emocional.</p>
            </div>

            <div>
              <span>LO HAGO PARA QUE NO ME DEJE</span>
              <p>El miedo a perder la relación entra en la decisión.</p>
            </div>

            <div>
              <span>LO HAGO PARA DEMOSTRAR ALGO</span>
              <p>Mi límite se convierte en una prueba que tengo que superar.</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>PREGUNTA RR</span>
            <p>
              «Si desapareciera el miedo a su reacción, ¿seguiría queriendo hacer
              lo mismo?»
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            CONSTRUIR RESPUESTA →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 30 KG</span>
          <h1>No decidas por él. Devuélvele visibilidad.</h1>

          <div className="scene">
            <blockquote>
              —Si supiera que no se va a enfadar, diría que no.
            </blockquote>
          </div>

          <textarea
            value={respuestaPresion}
            onChange={(e) => setRespuestaPresion(e.target.value)}
            placeholder="¿Cómo le ayudarías a reconocer lo que está ocurriendo?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuestaPresion.trim()}
          >
            CAMBIAR DE ESCENARIO →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">MISMO MECANISMO · OTRA FORMA</span>
          <h1>La presión no siempre utiliza la palabra «confianza».</h1>

          <div className="scene">
            <blockquote>
              —También me dice: «Yo haría esto por ti. Se ve que tú no me quieres
              igual».
            </blockquote>
          </div>

          <p className="trainingLead">
            Cambia la frase, pero observa la estructura: una emoción o una
            relación se convierten en una deuda que debe pagarse con una acción.
          </p>

          <textarea
            value={respuestaCambio}
            onChange={(e) => setRespuestaCambio(e.target.value)}
            placeholder="Ayúdale a reconocer el patrón sin limitarte a repetir la respuesta anterior..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaCambio.trim()}
          >
            GENERALIZAR EL CRITERIO →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">PATRÓN RR</span>
          <h1>La frase cambia. El mecanismo puede ser el mismo.</h1>

          <div className="conversation">
            <div>
              <span>«SI ME QUISIERAS...»</span>
              <p>El afecto se convierte en prueba.</p>
            </div>

            <div>
              <span>«SI CONFIARAS EN MÍ...»</span>
              <p>La confianza se convierte en prueba.</p>
            </div>

            <div>
              <span>«TODO EL MUNDO LO HACE...»</span>
              <p>La pertenencia se convierte en presión.</p>
            </div>

            <div>
              <span>«DESPUÉS DE TODO LO QUE HAGO POR TI...»</span>
              <p>La reciprocidad se convierte en deuda.</p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO</span>
            <blockquote>
              Una relación puede pedir conversación y negociación.
              <strong> No debería necesitar convertir mis límites en pruebas de amor.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>De juzgar a la persona a reconocer el mecanismo.</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>CUANDO APARECE MIEDO AL COSTE</span>
              <p>{respuestaPresion}</p>
            </div>

            <div>
              <span>CUANDO CAMBIA LA FRASE</span>
              <p>{respuestaCambio}</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 30 KG</span>
          <h1>Ahora no hay pareja.</h1>

          <div className="scene">
            <blockquote>
              —Un amigo me ha dicho que si de verdad soy de los suyos tengo que
              acompañarlos esta noche. Yo no quiero ir, pero si no voy sé que se
              van a reír de mí.
            </blockquote>
          </div>

          <p className="trainingLead">
            El escenario ha cambiado por completo. Si el criterio está
            aprendido, debería poder detectar de nuevo la relación entre
            pertenencia, coste emocional y decisión.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="Construye tu respuesta sin usar un guion sobre parejas..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(11)}
            disabled={!transferencia.trim()}
          >
            VER MAPA RR →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · PRESIÓN EMOCIONAL</span>
          <h1>No necesito leer la mente del otro para observar qué me ocurre.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              DESCUBRO QUÉ QUIERO → IDENTIFICO QUÉ COSTE TEMO → OBSERVO QUÉ
              FRASE ESTÁ EMPUJANDO MI DECISIÓN → IMAGINO LA DECISIÓN SIN ESE
              COSTE →
              <strong> RECUPERO MI CAPACIDAD DE ELEGIR.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>PUENTE DE SEGURIDAD</span>
            <p>
              Si la presión escala a amenazas, miedo, aislamiento, control
              persistente, chantaje, coerción o violencia, ya no basta con
              entrenar una respuesta. Hay que aumentar protección y buscar
              orientación adecuada.
            </p>
          </div>

          <Link href="/orientacion" className="secondaryTrainingButton">
            HA PASADO ALGO →
          </Link>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 06 · COMPLETADA</span>

          <div className="finishMark">30</div>

          <h1>La presión cambia de frase.</h1>
          <h2>El criterio permite reconocer el mecanismo.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              No siempre necesitamos decidir inmediatamente qué intención tiene
              la otra persona. Podemos empezar observando algo más accesible:
              qué quiero yo, qué coste temo y cuánto está influyendo ese coste
              en mi decisión.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 07 · «CREO QUE QUIERO HACERLO»</strong>
            <p>
              En la siguiente Pesa desaparece la presión evidente. El reto será
              más difícil: acompañar una decisión sexual que el adolescente
              siente como propia sin sustituirla, moralizarla ni reducirla a un
              simple «sí o no».
            </p>
          </div>

          <Link
            href="/prepararme/13-15/pesa-07"
            className="trainingButton linkButton"
          >
            IR A PESA 07 →
          </Link>

          <Link href="/prepararme/13-15" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
