"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Quiero saber exactamente qué están diciendo",
  "Me preocupa que esté aprendiendo cosas falsas",
  "Me sale decirle que no haga caso",
  "Pienso que quizá ya debería explicárselo todo",
  "No sé cuánto sabe realmente",
];

export default function Pesa04Prepararse1012() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
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
        <Link href="/prepararme/10-12" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 04 · GRUPO Y CRITERIO</small>
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
              src="/10-12/pesa04.png"
              alt="Pesa 04 · En clase todos hablan de sexo"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · GRUPO Y CRITERIO</span>
              <p>
                A esta edad pueden aparecer palabras, bromas y afirmaciones que
                suenan a conocimiento. El reto no es aislarle de ellas, sino
                ayudarle a aprender a contrastarlas.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 10 KG</span>
          <h1>«En clase todos hablan de sexo.»</h1>

          <div className="scene">
            <p>Tu hijo te comenta:</p>
            <blockquote>
              —En clase todos hablan de sexo. Hay uno que dice que sabe un
              montón.
            </blockquote>
          </div>

          <h2>¿Qué responderías?</h2>

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
          <h1>¿Qué hace tu cabeza cuando escuchas «todos hablan de sexo»?</h1>

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

          <h2>¿Qué estás suponiendo?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Seguro que están viendo cosas que no deberían», «ya saben muchísimo»..."
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
          <h1>Hablar no es lo mismo que saber.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                En su clase hablan sobre sexo y un compañero afirma que sabe
                mucho.
              </p>
            </div>

            <div>
              <span>LO QUE TODAVÍA NO SABES</span>
              <p>
                Qué palabras utilizan, qué creen que significan, de dónde sale
                la información, qué ha entendido tu hijo o qué quiere saber.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              La seguridad con la que alguien cuenta algo
              <strong> no demuestra que la información sea correcta.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR ANTES DE EXPLICAR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>No conviertas «sexo» en una charla de veinte minutos.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES PREGUNTAR</span>
              <p>«¿Qué cosas dicen?»</p>
            </div>
            <div>
              <span>O</span>
              <p>«¿Hay algo de lo que dicen que no entiendas?»</p>
            </div>
            <div>
              <span>O</span>
              <p>«¿Tú qué piensas de lo que has escuchado?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una pregunta que te permita descubrir qué sabe..."
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
          <span className="trainingTag">APARECE UNA AFIRMACIÓN</span>
          <h1>Ahora sí tienes algo concreto que contrastar.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Dice que una chica no puede quedarse embarazada la primera vez
                que tiene relaciones sexuales.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ya no estás respondiendo a «todo lo que se dice en clase». Tienes
            una afirmación concreta que puede comprobarse.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            CONTRASTAR SIN RIDICULIZAR →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONTRASTE</span>
          <h1>Corrige la información, no humilles a quien la dijo.</h1>

          <div className="comparison">
            <div>
              <span>CIERRA</span>
              <p>«Eso es una tontería. Tu amigo no tiene ni idea.»</p>
            </div>

            <div>
              <span>ENSEÑA CRITERIO</span>
              <p>
                «Eso que te han contado no es correcto. Un embarazo puede
                ocurrir también la primera vez si se dan las condiciones para
                que un espermatozoide fecunde un óvulo.»
              </p>
              <p>
                «Por eso, cuando escuches algo sobre sexo, salud o el cuerpo, no
                pasa nada por preguntar o comprobarlo.»
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>OBJETIVO</span>
            <p>
              No queremos que aprenda simplemente «mi padre sabe más». Queremos
              que aprenda: «una afirmación se puede contrastar».
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            SUBIR A 20 KG →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">NUEVA CAPA · 20 KG</span>
          <h1>Pero el grupo no solo transmite información.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO AÑADE</span>
              <p>
                Yo no digo nada porque parece que todos saben más que yo. Si
                pregunto, seguro que se ríen.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ahora aparece el verdadero entrenamiento: tolerar no saber frente al
            grupo sin tener que fingir conocimiento.
          </p>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Decir «no lo sé» y comprobarlo puede ser una señal de criterio,
              <strong> no de inferioridad.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            CONSTRUIR RESPUESTA →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 20 KG</span>
          <h1>Responde sin convertirte en un examen.</h1>

          <div className="scene">
            <blockquote>
              —Parece que todos saben más que yo. Si pregunto, seguro que se
              ríen.
            </blockquote>
          </div>

          <p className="trainingLead">
            Ayúdale a separar parecer informado de estar informado, y deja claro
            que puede volver a ti con palabras, dudas o afirmaciones que no
            entienda.
          </p>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye tu respuesta..."
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
          <span className="trainingTag">REPLAY RR</span>
          <h1>De controlar lo que oye a enseñarle qué hacer con ello.</h1>

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
            <span>CAPACIDAD ENTRENADA</span>
            <blockquote>
              ESCUCHO → DESCUBRO QUÉ HA OÍDO → SEPARO AFIRMACIÓN/HECHO →
              CONTRASTO →
              <strong> ENSEÑO A PREGUNTAR SIN VERGÜENZA.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · MENOS AYUDA</span>
          <h1>Ahora cambia la fuente.</h1>

          <div className="scene">
            <blockquote>
              —He visto un vídeo que decía que puedes saber si alguien es virgen
              mirando su cuerpo. ¿Es verdad?
            </blockquote>
          </div>

          <p className="trainingLead">
            No basta con responder sí o no. Entrena el proceso: qué afirma,
            dónde lo ha visto, qué evidencia existe y cómo reconocer una fuente
            poco fiable.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cómo construirías la respuesta?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!transferencia.trim()}
          >
            VER MAPA RR →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · CONTRASTAR</span>
          <h1>No podrás escuchar todo lo que él escucha.</h1>

          <p className="trainingLead">
            Por eso el objetivo no es revisar cada conversación, sino dejarle
            una herramienta que pueda usar cuando tú no estés delante.
          </p>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RECIBO → DESCUBRO QUÉ HA OÍDO → IDENTIFICO LA AFIRMACIÓN →
              CONTRASTO → EXPLICO →
              <strong> ENSEÑO A COMPROBAR.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>PREGUNTA RR</span>
            <p>
              «¿Cómo sabemos que eso es verdad?» puede ser más valiosa a largo
              plazo que memorizar cien respuestas.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 04 · COMPLETADA</span>

          <div className="finishMark">20</div>

          <h1>Hablar con seguridad no convierte una afirmación en verdad.</h1>
          <h2>Preguntar y contrastar también es madurar.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              No necesitas competir con el grupo por ser la fuente que más sabe.
              Entrena a tu hijo para reconocer dudas, contrastar información y
              poder volver a preguntarte sin sentirse ignorante.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 05 · «¿QUÉ ES MASTURBARSE?»</strong>
            <p>
              En la siguiente Pesa la pregunta será directa. El reto será
              responder con naturalidad, precisión e intimidad sin convertir una
              duda concreta en una explicación desproporcionada.
            </p>
          </div>

          <Link
            href="/prepararme/10-12/pesa-05"
            className="trainingButton linkButton"
          >
            IR A PESA 05 →
          </Link>

          <Link href="/prepararme/10-12" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
