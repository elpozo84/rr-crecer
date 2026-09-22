"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Intento explicárselo todo",
  "Cambio de tema",
  "Le digo que ya se lo contaré cuando sea mayor",
  "Le pregunto qué quiere saber",
  "No sé cuánto debería contarle",
];

export default function Pesa07Descubrir46() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [preguntaDescubrir, setPreguntaDescubrir] = useState("");
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
        stage="4-6"
        weightNumber={7}
        startedKg={10}
        completedKg={20}
        completed={paso === 11}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/4-6" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 07 · VERDAD SENCILLA Y PROGRESIVA</small>
        </div>

        <div className="kg">10 KG</div>
      </header>

      <div className="trainingProgress">
        <div
          className="trainingProgressFill"
          style={{ width: `${Math.min(((paso + 1) / totalPasos) * 100, 100)}%` }}
        />
      </div>

      {paso === 0 && (
        <section className="trainingScreen">
          <div className="trainingVisual">
            <img src="/4-6/pesa07.png" alt="Pesa 07 · Cómo ha entrado el bebé en la barriga" />
            <div className="trainingVisualCaption">
              <span>SPOT RR · UNA PREGUNTA GRANDE</span>
              <p>
                Una pregunta puede sonar enorme en la cabeza del adulto y ser
                mucho más pequeña en la cabeza del niño.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 10 KG</span>
          <h1>«¿Cómo ha entrado el bebé en la barriga?»</h1>

          <div className="scene">
            <p>Habéis visto a una mujer embarazada y tu hijo pregunta:</p>
            <blockquote>—¿Cómo ha entrado el bebé ahí dentro?</blockquote>
          </div>

          <h2>¿Qué responderías ahora mismo?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe tu respuesta real..."
          />

          <button className="trainingButton" onClick={() => irA(1)} disabled={!respuestaInicial.trim()}>
            EMPEZAR A ENTRENAR →
          </button>
        </section>
      )}

      {paso === 1 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRIMERO TÚ</span>
          <h1>¿Qué problema intentas resolver tú?</h1>

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
              Antes de decidir cuánto explicar, descubre qué pregunta existe
              realmente detrás de sus palabras.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(2)} disabled={!reaccion}>
            HECHO ≠ HISTORIA →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>
          <h1>La pregunta del niño y la pregunta que oyes tú pueden ser distintas.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>Ha preguntado cómo ha entrado un bebé en la barriga.</p>
            </div>
            <div>
              <span>HISTORIA DEL ADULTO</span>
              <p>
                «Me está preguntando por sexo», «tengo que explicarle la
                reproducción completa» o «es demasiado pequeño para esto».
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              No respondas todavía a la pregunta que imaginas.
              <strong> Descubre la pregunta que realmente tiene.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">UNA PREGUNTA ANTES DE UNA EXPLICACIÓN</span>
          <h1>Haz espacio para que concrete.</h1>

          <div className="conversation">
            <div><span>PUEDES PREGUNTAR</span><p>«¿Tú cómo crees que ha llegado ahí?»</p></div>
            <div><span>O</span><p>«¿Qué es lo que quieres saber?»</p></div>
            <div><span>O</span><p>«¿Te preguntas cómo empieza a crecer un bebé dentro de una barriga?»</p></div>
          </div>

          <textarea
            value={preguntaDescubrir}
            onChange={(e) => setPreguntaDescubrir(e.target.value)}
            placeholder="Construye tu pregunta para descubrir..."
          />

          <button className="trainingButton" onClick={() => irA(4)} disabled={!preguntaDescubrir.trim()}>
            ESCUCHAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">LA RESPUESTA CAMBIA EL CAMINO</span>
          <h1>Ahora sabes qué estaba intentando entender.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{preguntaDescubrir}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Yo pensaba que la mamá se lo había comido y luego el bebé crecía
                en la barriga.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ya tienes una pista concreta: está intentando entender cómo comienza
            un embarazo, no pidiendo necesariamente una explicación completa.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            VERDAD PROGRESIVA →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">VERDAD SUFICIENTE</span>
          <h1>Verdad no significa decirlo todo de una vez.</h1>

          <div className="conversation">
            <div>
              <span>UNA PRIMERA RESPUESTA POSIBLE</span>
              <p>
                «No se lo ha comido. Un bebé empieza cuando una célula llamada
                óvulo y otra llamada espermatozoide se unen. Después empieza a
                crecer dentro del útero.»
              </p>
            </div>
            <div>
              <span>Y DESPUÉS</span>
              <p>«¿Era eso lo que querías saber?»</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>IMPORTANTE</span>
            <p>
              La respuesta puede ampliarse si vuelve a preguntar. No hace falta
              inventar historias ni descargar toda la información en una sola
              conversación.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            SI PREGUNTA MÁS →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">UNA CAPA CADA VEZ</span>
          <h1>La siguiente pregunta decide la siguiente capa.</h1>

          <div className="scene">
            <blockquote>—¿Y cómo se juntan el óvulo y el espermatozoide?</blockquote>
          </div>

          <p className="trainingLead">
            Ahora sí ha aparecido una pregunta nueva. Puedes responder con
            palabras sencillas y verdaderas, ajustadas a lo que está preguntando.
          </p>

          <div className="conversation">
            <div>
              <span>UNA RESPUESTA POSIBLE</span>
              <p>
                «Hay distintas maneras. Una forma es cuando el pene entra en la
                vagina y un espermatozoide puede llegar hasta un óvulo. También
                hay familias que necesitan ayuda médica para que ocurra.»
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>PROGRESIÓN RR</span>
            <blockquote>
              PREGUNTA → RESPUESTA SUFICIENTE → COMPRUEBO →
              <strong> SOLO AMPLÍO SI APARECE OTRA PREGUNTA.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            EVITAR DOS EXTREMOS →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">DOS EXTREMOS</span>
          <h1>Ni cuento inventado ni conferencia.</h1>

          <div className="comparison">
            <div>
              <span>QUEDARSE CORTO</span>
              <p>«Ya lo entenderás cuando seas mayor.»</p>
              <p>«Los trae la cigüeña.»</p>
            </div>
            <div>
              <span>SOBRECARGAR</span>
              <p>
                Dar una explicación larga y detallada que responde a muchas
                preguntas que todavía no ha hecho.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>PUNTO RR</span>
            <p>
              Una respuesta breve, verdadera y comprensible puede ser suficiente
              hoy. Mañana puede aparecer otra pregunta.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            CONSTRUIR MI RESPUESTA →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 10 KG</span>
          <h1>Vuelve a la pregunta inicial.</h1>

          <div className="scene">
            <blockquote>—¿Cómo ha entrado el bebé en la barriga?</blockquote>
          </div>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye ahora tu respuesta..."
          />

          <button className="trainingButton" onClick={() => irA(9)} disabled={!respuestaFinal.trim()}>
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>¿Has aprendido qué decir o cuándo decir cuánto?</h1>

          <div className="comparison">
            <div><span>ANTES</span><p>{respuestaInicial}</p></div>
            <div><span>DESPUÉS</span><p>{respuestaFinal}</p></div>
          </div>

          <div className="lesson">
            <span>CAPACIDAD ENTRENADA</span>
            <blockquote>
              DESCUBRIR → RESPONDER CON VERDAD →
              <strong> AJUSTAR LA CANTIDAD DE INFORMACIÓN.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 10 KG</span>
          <h1>Una nueva pregunta. Sin guion.</h1>

          <div className="scene">
            <blockquote>—¿Y por dónde sale el bebé?</blockquote>
          </div>

          <p className="trainingLead">
            Utiliza el criterio aprendido. Descubre si lo necesitas y construye
            una respuesta breve, verdadera y comprensible.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cómo responderías?"
          />

          <button className="trainingButton" onClick={() => irA(11)} disabled={!transferencia.trim()}>
            TERMINAR PESA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 07 · COMPLETADA</span>

          <div className="finishMark">10</div>

          <h1>La verdad puede crecer al ritmo de sus preguntas.</h1>

          <div className="lesson">
            <span>TU MAPA RR</span>
            <blockquote>
              ESCUCHO → DESCUBRO QUÉ PREGUNTA → RESPONDO CON VERDAD →
              COMPRUEBO →
              <strong> AMPLÍO SOLO SI LO NECESITA.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>LO QUE QUEREMOS CONSERVAR</span>
            <p>
              Que pueda volver mañana con otra pregunta porque la conversación
              de hoy no convirtió su curiosidad en algo incómodo o prohibido.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 08 · JUGÁBAMOS A MÉDICOS</strong>
            <p>
              La siguiente Pesa sube a 20 KG. Ya no basta con explicar: tendrás
              que observar contexto, límites y señales que pueden cambiar el
              tipo de intervención.
            </p>
          </div>

          <Link href="/prepararme/4-6/pesa-08" className="trainingButton linkButton">
            IR A PESA 08 →
          </Link>

          <Link href="/prepararme/4-6" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
