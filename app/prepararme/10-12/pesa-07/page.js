"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Me sale decirle que ignore a los demás",
  "Quiero darle una frase exacta para responder",
  "Me preocupa que lo excluyan",
  "Me enfada que le presionen",
  "Quiero ayudarle a decidir qué quiere hacer",
];

export default function Pesa07Prepararse1012() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [criterio, setCriterio] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");
  const [decision30, setDecision30] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 13;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <TrainingProgressTracker
        stage="10-12"
        weightNumber={7}
        startedKg={20}
        completedKg={30}
        completed={paso === 12}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/10-12" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 07 · PRESIÓN DE GRUPO</small>
        </div>

        <div className="kg">20 → 30 KG</div>
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
              src="/10-12/pesa07.png"
              alt="Pesa 07 · Si digo que no se van a reír de mí"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · PRESIÓN DE GRUPO</span>
              <p>
                Saber que puedes decir «no» es una cosa. Mantenerlo cuando
                parece que tu lugar en el grupo depende de decir «sí» es otra.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 20 KG</span>
          <h1>«Si digo que no, se van a reír de mí.»</h1>

          <div className="scene">
            <p>Tu hijo te cuenta:</p>
            <blockquote>
              —Mañana quieren que hagamos una broma grabando a otro niño en el
              vestuario. Yo no quiero, pero si digo que no se van a reír de mí.
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
          <h1>¿Qué problema intentas resolver primero?</h1>

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

          <h2>¿Qué historia aparece en tu cabeza?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Si no participa lo apartarán», «debería saber decir que no»..."
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
          <h1>Hay dos fuerzas distintas.</h1>

          <div className="factStory">
            <div>
              <span>LO QUE QUIERE</span>
              <p>No quiere participar en la grabación.</p>
            </div>
            <div>
              <span>LO QUE TEME</span>
              <p>Que negarse tenga un coste social: burlas, presión o exclusión.</p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              El problema no es que no sepa lo que quiere.
              <strong> El problema es cuánto cree que le costará sostenerlo.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            NO BORRAR EL COSTE →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VALIDAR SIN CEDER EL CRITERIO</span>
          <h1>«Que no te importe» no funciona si sí le importa.</h1>

          <div className="comparison">
            <div>
              <span>SIMPLIFICA DEMASIADO</span>
              <p>«Pues que se rían. Tú di que no y ya está.»</p>
            </div>
            <div>
              <span>RECONOCE EL COSTE</span>
              <p>
                «Entiendo que te preocupe quedar mal con ellos. Pertenecer al
                grupo importa.»
              </p>
              <p>
                «Y también podemos pensar si hacer algo que no quieres es el
                precio que quieres pagar para evitar esa burla.»
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            CONSTRUIR CRITERIO →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">EV MAX · DECISIÓN</span>
          <h1>No decidas por él. Haz visible la decisión.</h1>

          <div className="conversation">
            <div>
              <span>OPCIÓN A</span>
              <p>Participar para evitar la burla.</p>
            </div>
            <div>
              <span>GANANCIA CORTA</span>
              <p>Quizá evita sentirse fuera en ese momento.</p>
            </div>
            <div>
              <span>COSTE POSIBLE</span>
              <p>
                Hace algo que no quería y participa en una situación que invade
                la intimidad de otra persona.
              </p>
            </div>
            <div>
              <span>OPCIÓN B</span>
              <p>No participar y afrontar la reacción del grupo.</p>
            </div>
          </div>

          <textarea
            value={criterio}
            onChange={(e) => setCriterio(e.target.value)}
            placeholder="¿Qué pregunta le harías para ayudarle a pensar su decisión?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(5)}
            disabled={!criterio.trim()}
          >
            PREPARAR EL NO →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">DEL CRITERIO A LA ACCIÓN</span>
          <h1>Una decisión también puede ensayarse.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{criterio}</p>
          </div>

          <div className="conversation">
            <div>
              <span>NO NECESITA UN DISCURSO</span>
              <p>«Paso. Yo no voy a grabar eso.»</p>
            </div>
            <div>
              <span>PUEDE SALIR DE LA SITUACIÓN</span>
              <p>Un límite no obliga a quedarse debatiendo hasta convencer al grupo.</p>
            </div>
            <div>
              <span>PUEDE PEDIR APOYO</span>
              <p>
                Si la situación continúa o alguien va a ser grabado sin permiso,
                buscar a un adulto también es una acción.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>LAS FRASES SON MULETAS, NO GUIONES</span>
            <p>
              Ensayar una frase puede ayudar. El objetivo real es que entienda
              por qué quiere sostener ese límite.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            CONSTRUIR RESPUESTA · 20 KG →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 20 KG</span>
          <h1>Ahora acompaña sin sustituir.</h1>

          <div className="scene">
            <blockquote>
              —Yo no quiero hacerlo, pero si digo que no se van a reír de mí.
            </blockquote>
          </div>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye tu respuesta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuestaFinal.trim()}
          >
            SUBIR A 30 KG →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">NUEVA INFORMACIÓN · 30 KG</span>
          <h1>El coste sube.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO AÑADE</span>
              <p>
                El que organiza la broma me ha dicho que si aviso a alguien,
                enseñará al grupo unos mensajes míos para que todos se rían.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ahora hay presión y amenaza. Ya no basta con entrenar una frase para
            decir «no». Tienes que reconocer que el nivel de protección ha
            cambiado.
          </p>

          <textarea
            value={decision30}
            onChange={(e) => setDecision30(e.target.value)}
            placeholder="¿Qué cambia ahora? ¿Qué priorizarías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!decision30.trim()}
          >
            PUENTE DE SEGURIDAD →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">PUENTE DE SEGURIDAD</span>
          <h1>Cuando aparece amenaza, no le dejes solo sosteniendo el límite.</h1>

          <div className="lesson">
            <span>CAMBIO DE MODO</span>
            <blockquote>
              Autonomía no significa:
              <strong> «resuélvelo tú porque tienes que aprender».</strong>
            </blockquote>
          </div>

          <p className="trainingLead">
            Escucha, evita culparle por los mensajes, comprende qué está
            ocurriendo y aumenta la protección. Si existe una amenaza, presión,
            difusión de contenido privado u otro riesgo, puede ser necesario
            implicar a adultos responsables y buscar orientación adecuada.
          </p>

          <Link href="/orientacion" className="secondaryTrainingButton">
            ABRIR · HA PASADO ALGO
          </Link>

          <button className="trainingButton" onClick={() => irA(9)}>
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>Un límite necesita criterio. A veces también respaldo.</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>
            <div>
              <span>20 KG</span>
              <p>{respuestaFinal}</p>
            </div>
            <div>
              <span>30 KG · CUANDO APARECE AMENAZA</span>
              <p>{decision30}</p>
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
          <h1>Sin menú. Sin frase preparada.</h1>

          <div className="scene">
            <blockquote>
              —Mis amigos quieren entrar en una página que dicen que es para
              mayores. Si no entro con ellos, me llaman bebé.
            </blockquote>
          </div>

          <p className="trainingLead">
            Construye tú el proceso. ¿Qué necesitas descubrir? ¿Qué parte es
            presión? ¿Qué criterio quieres que aprenda? ¿Cuándo bastaría con
            acompañar y cuándo aumentarías la protección?
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="Tu respuesta y tu criterio..."
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
          <span className="trainingTag">MAPA RR · PRESIÓN</span>
          <h1>El objetivo no es que nunca sienta presión.</h1>

          <p className="trainingLead">
            Es que aprenda a reconocer cuándo está a punto de intercambiar una
            decisión propia por pertenencia, aprobación o miedo.
          </p>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              DESCUBRO QUÉ QUIERE → HAGO VISIBLE LA PRESIÓN → RECONOZCO EL COSTE
              → AYUDO A DECIDIR → PREPARAMOS LA ACCIÓN →
              <strong> AUMENTO PROTECCIÓN SI APARECE AMENAZA.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 07 · COMPLETADA</span>

          <div className="finishMark">30</div>

          <h1>Decir «no» no siempre es la parte difícil.</h1>
          <h2>A veces lo difícil es soportar lo que creemos que perderemos.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              No minimices el poder del grupo. Ayúdale a ver la presión, pensar
              el coste y construir su decisión. Y cuando aparezcan amenazas o
              riesgo, no conviertas la autonomía en abandono.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 08 · «NO QUIERO HABLAR CONTIGO DE ESO»</strong>
            <p>
              La siguiente Pesa cambia el problema: ya no tendrás una pregunta
              que responder. Tendrás que aprender a seguir disponible cuando tu
              hijo no quiere contarte nada.
            </p>
          </div>

          <Link
            href="/prepararme/10-12/pesa-08"
            className="trainingButton linkButton"
          >
            IR A PESA 08 →
          </Link>

          <Link href="/prepararme/10-12" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
