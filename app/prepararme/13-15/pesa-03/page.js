"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Me sale darle una regla exacta",
  "Quiero decirle que si duda, mejor no haga nada",
  "Me preocupa que interprete mal las señales",
  "Me sale hablarle de riesgos antes de escuchar",
  "Quiero ayudarle a dejar de adivinar",
];

export default function Pesa03Decidir1315() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuesta20, setRespuesta20] = useState("");
  const [cambioDecision, setCambioDecision] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 13;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/13-15" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 03 · CONSENTIMIENTO</small>
        </div>

        <div className="kg">20 KG</div>
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
              src="/13-15/pesa03.png"
              alt="Pesa 03 · Cómo sé si la otra persona quiere"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · CONSENTIMIENTO</span>
              <p>
                El consentimiento no consiste en aprender a interpretar mejor
                señales ambiguas. Consiste en no necesitar adivinarlas.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 20 KG</span>
          <h1>«¿Cómo sé si la otra persona quiere?»</h1>

          <div className="scene">
            <p>Tu hijo te pregunta:</p>
            <blockquote>
              —Si estoy con alguien y quiero besarle, ¿cómo sé si la otra
              persona también quiere?
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
          <h1>¿Estás a punto de enseñarle a adivinar?</h1>

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

          <h2>¿Qué historia aparece?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Si se acerca es que quiere», «si no dice que no, será que sí»..."
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
          <h1>Una señal no siempre tiene un único significado.</h1>

          <div className="factStory">
            <div>
              <span>PUEDES OBSERVAR</span>
              <p>
                Que se acerca, sonríe, te escribe, te abraza o quiere pasar
                tiempo contigo.
              </p>
            </div>

            <div>
              <span>NO PUEDES CONCLUIR AUTOMÁTICAMENTE</span>
              <p>
                Que por eso quiere un beso, una caricia o cualquier otro tipo de
                contacto.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Si necesito saber qué quiere la otra persona,
              <strong> puedo comprobarlo con ella.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR QUÉ LE PREOCUPA →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>Antes de explicar, descubre dónde está su duda.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES PREGUNTAR</span>
              <p>«¿Te preocupa que preguntar corte el momento?»</p>
              <p>«¿Te ha pasado alguna situación en la que no estabas seguro?»</p>
              <p>«¿Qué harías si la respuesta fuera que no?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una pregunta..."
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
          <span className="trainingTag">APARECE LA DUDA REAL</span>
          <h1>Preguntar le parece menos natural que adivinar.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Es que preguntar «¿puedo besarte?» me parece raro. Pensaba que
                esas cosas simplemente pasan.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Aquí el entrenamiento no consiste en imponer una frase exacta.
            Consiste en desmontar la idea de que una relación auténtica exige
            leer la mente del otro.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            ENTRENAR CONSENTIMIENTO →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">CLARO · LIBRE · ACTUAL</span>
          <h1>Consentimiento no es ausencia de un «no».</h1>

          <div className="conversation">
            <div>
              <span>CLARO</span>
              <p>
                No necesito construir un sí a partir de silencios o señales
                ambiguas.
              </p>
            </div>

            <div>
              <span>LIBRE</span>
              <p>
                Una respuesta pierde valor si aparece por presión, miedo,
                insistencia o culpa.
              </p>
            </div>

            <div>
              <span>ACTUAL</span>
              <p>
                Haber querido algo antes no obliga a quererlo ahora.
              </p>
            </div>

            <div>
              <span>ESPECÍFICO</span>
              <p>
                Aceptar una cosa no significa aceptar automáticamente todo lo
                demás.
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            LLEVARLO A LA VIDA REAL →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 20 KG</span>
          <h1>No necesitas convertirlo en un contrato.</h1>

          <p className="trainingLead">
            Comprobar puede ser verbal y natural: preguntar, acercarse despacio,
            observar una respuesta y seguir comunicándose. Lo importante es que
            la incertidumbre no se resuelva imponiendo la interpretación más
            conveniente.
          </p>

          <div className="scene">
            <blockquote>
              —Entonces, ¿siempre tengo que preguntar exactamente «puedo
              besarte»?
            </blockquote>
          </div>

          <textarea
            value={respuesta20}
            onChange={(e) => setRespuesta20(e.target.value)}
            placeholder="Construye tu explicación..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuesta20.trim()}
          >
            EL CONSENTIMIENTO PUEDE CAMBIAR →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">NUEVA INFORMACIÓN</span>
          <h1>Un sí no se guarda para después.</h1>

          <div className="scene">
            <p>Tu hijo plantea otra situación:</p>
            <blockquote>
              —¿Y si primero quiere y luego, cuando estamos besándonos, me dice
              que pare?
            </blockquote>
          </div>

          <div className="lesson">
            <span>CRITERIO</span>
            <blockquote>
              Una persona puede cambiar de decisión.
              <strong> Parar no invalida lo que quiso antes.</strong>
            </blockquote>
          </div>

          <textarea
            value={cambioDecision}
            onChange={(e) => setCambioDecision(e.target.value)}
            placeholder="¿Cómo se lo explicarías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!cambioDecision.trim()}
          >
            APLICARLO EN LAS DOS DIRECCIONES →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">RECIPROCIDAD</span>
          <h1>El mismo criterio también le protege a él.</h1>

          <div className="conversation">
            <div>
              <span>LA OTRA PERSONA</span>
              <p>Puede decir sí, no o parar.</p>
            </div>

            <div>
              <span>TU HIJO</span>
              <p>También puede decir sí, no o parar.</p>
            </div>

            <div>
              <span>UNA RELACIÓN</span>
              <p>No convierte ningún sí anterior en una deuda futura.</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO TRANSFERIBLE</span>
            <p>
              Consentimiento no es aprender a conseguir permiso. Es construir
              una interacción en la que ambos pueden decidir y cambiar de
              decisión.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>De interpretar señales a comprobar decisiones.</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>CONSENTIMIENTO</span>
              <p>{respuesta20}</p>
            </div>

            <div>
              <span>CUANDO CAMBIA DE OPINIÓN</span>
              <p>{cambioDecision}</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 20 KG</span>
          <h1>Ahora aparece presión sin una amenaza explícita.</h1>

          <div className="scene">
            <blockquote>
              —Mi pareja me ha dicho que todavía no quiere hacer una cosa. Yo le
              he preguntado varias veces porque pensé que quizá cambiaría de
              opinión. ¿Eso está mal?
            </blockquote>
          </div>

          <p className="trainingLead">
            No basta con enseñarle a escuchar la palabra «no». Tiene que poder
            observar cuándo insistir empieza a convertir su deseo en presión
            sobre la decisión de otra persona.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cómo le ayudarías a pensarlo?"
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
          <span className="trainingTag">MAPA RR · CONSENTIMIENTO</span>
          <h1>No adivino. No presiono. Compruebo y escucho.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RECONOZCO LO QUE QUIERO → NO LO CONFUNDO CON LO QUE QUIERE EL OTRO
              → COMPRUEBO → ESCUCHO LA RESPUESTA → RESPETO EL NO →
              <strong> RESPETO TAMBIÉN UN CAMBIO DE DECISIÓN.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO TRANSFERIBLE</span>
            <p>
              El consentimiento funciona en las dos direcciones y durante toda
              la interacción. Nadie tiene que continuar algo solo porque lo
              empezó.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 03 · COMPLETADA</span>

          <div className="finishMark">20</div>

          <h1>No necesitas aprender a leer la mente.</h1>
          <h2>Necesitas aprender a comunicarte con otra persona.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Consentimiento no significa encontrar una señal mágica. Significa
              que las decisiones pueden expresarse, comprobarse, respetarse y
              cambiar durante una interacción.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 04 · «TODOS DICEN QUE YA LO HAN HECHO»</strong>
            <p>
              En la siguiente Pesa el problema deja de estar entre dos personas:
              entra todo el grupo. Comparación, exageraciones, presión y la
              sensación de que existe una edad en la que «ya deberías».
            </p>
          </div>

          <Link
            href="/prepararme/13-15/pesa-04"
            className="trainingButton linkButton"
          >
            IR A PESA 04 →
          </Link>

          <Link href="/prepararme/13-15" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
