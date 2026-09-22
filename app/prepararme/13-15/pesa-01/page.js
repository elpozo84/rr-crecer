"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Me sale preguntarle inmediatamente quién es",
  "Quiero animarle a decírselo cuanto antes",
  "Me preocupa que le rechacen y lo pase mal",
  "Me sale bromear para quitarle importancia",
  "Quiero escuchar antes de empujarle a hacer nada",
];

export default function Pesa01Decidir1315() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuesta10, setRespuesta10] = useState("");
  const [respuesta20, setRespuesta20] = useState("");
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
        weightNumber={1}
        startedKg={10}
        completedKg={20}
        completed={paso === 12}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/13-15" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 01 · DESEO E INCERTIDUMBRE</small>
        </div>

        <div className="kg">10 → 20 KG</div>
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
              src="/13-15/pesa01.png"
              alt="Pesa 01 · Me gusta pero no sé si yo le gusto"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · DESEO, INCERTIDUMBRE Y RECHAZO</span>
              <p>
                A esta edad no solo aparece la atracción. Aparece también la
                incertidumbre: querer acercarse sin saber qué siente la otra
                persona.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 10 KG</span>
          <h1>«Me gusta, pero no sé si yo le gusto.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —Me gusta alguien de mi clase, pero no sé si yo le gusto. No sé
              qué hacer.
            </blockquote>
          </div>

          <h2>¿Qué le responderías?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe lo que realmente dirías..."
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
          <h1>Una confidencia puede despertar tus ganas de resolver.</h1>

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

          <h2>¿Qué historia completa tu cabeza?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Seguro que también le gusta», «si no se lo dice perderá la oportunidad»..."
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
          <h1>Sentir algo no te dice qué siente la otra persona.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>Le gusta una persona de su clase.</p>
            </div>

            <div>
              <span>TODAVÍA NO SABEMOS</span>
              <p>
                Si la otra persona siente lo mismo, si quiere hablar de ello,
                si tu hijo quiere expresarlo o si simplemente necesita entender
                lo que siente.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Lo que siento me informa sobre mí.
              <strong> No me da información automática sobre el otro.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR QUÉ NECESITA →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>No conviertas «me gusta» en «tienes que conseguirlo».</h1>

          <div className="conversation">
            <div>
              <span>PUEDES DESCUBRIR</span>
              <p>«¿Qué es lo que más te preocupa?»</p>
              <p>«¿Quieres decírselo o todavía no lo sabes?»</p>
              <p>«¿Qué te gustaría que ocurriera?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una pregunta que no decida por él..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(4)}
            disabled={!pregunta.trim()}
          >
            ESCUCHAR SU NECESIDAD →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">APARECE EL VERDADERO PROBLEMA</span>
          <h1>No está preguntando cómo conquistar a nadie.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Me gustaría decírselo, pero si me dice que no me voy a sentir
                fatal. Y luego tengo que verla todos los días en clase.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ahora aparece el núcleo del SPOT: no solo deseo. También
            vulnerabilidad, incertidumbre y posibilidad de rechazo.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            ENTRENAR EL RECHAZO →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">RECHAZO ≠ FRACASO</span>
          <h1>Que no sea correspondido no convierte su emoción en un error.</h1>

          <div className="comparison">
            <div>
              <span>EVITA</span>
              <p>«Seguro que te dice que sí.»</p>
              <p>«Tú inténtalo, no tienes nada que perder.»</p>
              <p>«Hay muchos peces en el mar.»</p>
            </div>

            <div>
              <span>CONSTRUYE CRITERIO</span>
              <p>
                Puede expresar lo que siente sin controlar la respuesta que
                recibirá.
              </p>
              <p>
                La otra persona puede sentir lo mismo, sentir otra cosa o no
                querer una relación.
              </p>
              <p>
                Una respuesta que no desea escuchar puede doler y seguir siendo
                una respuesta que debe respetarse.
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            CONSTRUIR RESPUESTA · 10 KG →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 10 KG</span>
          <h1>Acompaña sin prometer el resultado.</h1>

          <div className="scene">
            <blockquote>
              —Me gustaría decírselo, pero tengo miedo de que me diga que no.
            </blockquote>
          </div>

          <textarea
            value={respuesta10}
            onChange={(e) => setRespuesta10(e.target.value)}
            placeholder="Construye qué le dirías..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuesta10.trim()}
          >
            SUBIR A 20 KG →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">NUEVA INFORMACIÓN · 20 KG</span>
          <h1>Ahora el deseo empieza a buscar pruebas.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO AÑADE</span>
              <p>
                A veces me escribe por la noche y se ríe mucho conmigo. Mis
                amigos dicen que eso significa que seguro que le gusto.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Aquí aparece una habilidad importante para las relaciones: no
            convertir gestos ambiguos en consentimiento, promesas o certezas.
          </p>

          <div className="lesson">
            <span>HECHO ≠ HISTORIA</span>
            <blockquote>
              «Me escribe y se ríe conmigo» puede ser un hecho.
              <strong> «Seguro que le gusto» sigue siendo una interpretación.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            DECIDIR SIN ADIVINAR →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">DECISIÓN · 20 KG</span>
          <h1>Puede acercarse sin reclamar una respuesta concreta.</h1>

          <p className="trainingLead">
            Si decide expresar lo que siente, el entrenamiento no consiste en
            darle una técnica para obtener un «sí». Consiste en poder ser claro,
            respetuoso y capaz de recibir la respuesta del otro.
          </p>

          <textarea
            value={respuesta20}
            onChange={(e) => setRespuesta20(e.target.value)}
            placeholder="¿Cómo le ayudarías a pensar esta decisión?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(9)}
            disabled={!respuesta20.trim()}
          >
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>Del resultado al criterio.</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>10 KG · INCERTIDUMBRE</span>
              <p>{respuesta10}</p>
            </div>

            <div>
              <span>20 KG · DECISIÓN</span>
              <p>{respuesta20}</p>
            </div>
          </div>

          <div className="lesson">
            <span>CAPACIDAD ENTRENADA</span>
            <blockquote>
              RECONOZCO LO QUE SIENTO → NO ADIVINO AL OTRO → DECIDO SI QUIERO
              EXPRESARLO →
              <strong> RESPETO LA RESPUESTA QUE RECIBA.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 20 KG</span>
          <h1>Ahora ya recibió una respuesta.</h1>

          <div className="scene">
            <blockquote>
              —Se lo dije. Me ha dicho que me quiere mucho, pero que solo como
              amigo. Me siento fatal y mañana no quiero ir a clase.
            </blockquote>
          </div>

          <p className="trainingLead">
            Sin menú. No necesitas borrar el dolor ni convencerle de que «no es
            para tanto». Construye una respuesta que acompañe la emoción sin
            convertir el rechazo en humillación, culpa o insistencia.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Qué le dirías ahora?"
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
          <span className="trainingTag">MAPA RR · DESEO</span>
          <h1>Querer no es poseer. Preguntar no garantiza un sí.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RECIBO → DESCUBRO QUÉ NECESITA → SEPARO HECHO/HISTORIA →
              RECONOZCO DESEO E INCERTIDUMBRE → AYUDO A DECIDIR →
              <strong> RESPETO LA RESPUESTA DEL OTRO.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>PRIMER CRITERIO DE DECIDIR</span>
            <p>
              Puedo expresar lo que siento. La otra persona conserva exactamente
              el mismo derecho a sentir otra cosa.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 01 · COMPLETADA</span>

          <div className="finishMark">20</div>

          <h1>El deseo habla de lo que quiero.</h1>
          <h2>No decide lo que la otra persona tiene que querer.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Acompañar una atracción no consiste en enseñar a conseguir a
              alguien. Consiste en ayudar a reconocer lo que siente, tolerar la
              incertidumbre, expresarse con respeto y aceptar que la respuesta
              pertenece al otro.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 02 · «ESTAMOS SALIENDO»</strong>
            <p>
              En la siguiente Pesa aparece una relación. El reto ya no será
              acercarse, sino comprender que estar con alguien no elimina la
              autonomía, la intimidad ni los límites de ninguno de los dos.
            </p>
          </div>

          <Link
            href="/prepararme/13-15/pesa-02"
            className="trainingButton linkButton"
          >
            IR A PESA 02 →
          </Link>

          <Link href="/prepararme/13-15" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
