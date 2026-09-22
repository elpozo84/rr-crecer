"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Le digo que se vista",
  "Me río",
  "Le digo que no pasa nada",
  "Intento explicarle dónde sí y dónde no",
  "No sé cómo explicarlo sin darle vergüenza",
];

export default function Pesa03Descubrir46() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [explicacion, setExplicacion] = useState("");
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
          <small>PESA 03 · INTIMIDAD Y CONTEXTO</small>
        </div>

        <div className="kg">{paso <= 6 ? "5 KG" : "10 KG"}</div>
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
            <img src="/4-6/pesa03.png" alt="Pesa 03 · Intimidad y contexto" />
            <div className="trainingVisualCaption">
              <span>SPOT RR · CUERPO E INTIMIDAD</span>
              <p>
                Enseñar intimidad no exige enseñar vergüenza. El reto es explicar
                que un cuerpo puede ser completamente normal y no pertenecer a
                todos los contextos.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 5 KG</span>

          <h1>«¿Puedo estar desnudo?»</h1>

          <div className="scene">
            <p>
              Tu hijo acaba de salir del baño y empieza a caminar desnudo por
              casa. Vais a recibir visita en unos minutos.
            </p>

            <blockquote>
              —¿Por qué tengo que vestirme? A mí me gusta estar desnudo.
            </blockquote>
          </div>

          <h2>¿Qué le responderías?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe lo que dirías de verdad..."
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

          <h1>¿Qué aparece primero en ti?</h1>

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
              Si reaccionamos únicamente con «tápate» o «eso no se hace»,
              podemos enseñar la norma sin enseñar el criterio que la sostiene.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!reaccion}
          >
            VER EL CRITERIO →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>

          <h1>Estar desnudo no significa estar haciendo algo malo.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>Un niño está desnudo después del baño y quiere seguir así.</p>
            </div>

            <div>
              <span>HISTORIA QUE PUEDE AÑADIR EL ADULTO</span>
              <p>
                «Qué vergüenza», «eso está feo», «que nadie te vea» o «estar
                desnudo está mal».
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              El cuerpo no es malo.
              <strong> La intimidad nos ayuda a decidir dónde, cuándo y con quién.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            ENSEÑAR CONTEXTO →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRIVADO ≠ PROHIBIDO</span>

          <h1>Hay cosas normales que no hacemos en todos los lugares.</h1>

          <div className="conversation">
            <div>
              <span>COMER</span>
              <p>Es normal, pero elegimos lugares y momentos.</p>
            </div>

            <div>
              <span>IR AL BAÑO</span>
              <p>Es normal, pero buscamos intimidad.</p>
            </div>

            <div>
              <span>ESTAR DESNUDO</span>
              <p>
                El cuerpo es normal y también podemos elegir espacios privados
                para estar desnudos.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>CAMBIO DE LENGUAJE</span>
            <p>
              En lugar de «eso no se hace», entrenamos una explicación:
              «ahora vamos a vestirnos porque vienen visitas y cuidamos nuestra
              intimidad».
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            CONSTRUIR UNA EXPLICACIÓN →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">TUS PALABRAS</span>

          <h1>Explícale intimidad sin utilizar vergüenza.</h1>

          <p className="trainingLead">
            No hace falta una definición adulta. Necesita una idea que pueda
            comprender y reutilizar.
          </p>

          <textarea
            value={explicacion}
            onChange={(e) => setExplicacion(e.target.value)}
            placeholder="¿Cómo explicarías qué significa tener intimidad?"
          />

          <div className="conversation">
            <div>
              <span>UNA MULETA POSIBLE</span>
              <p>
                «Tu cuerpo está bien. Hay momentos en los que podemos estar
                desnudos y otros en los que preferimos vestirnos porque cuidamos
                nuestra intimidad.»
              </p>
            </div>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(5)}
            disabled={!explicacion.trim()}
          >
            AÑADIR EL OTRO LADO →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">MI INTIMIDAD · TU INTIMIDAD</span>

          <h1>El criterio funciona en las dos direcciones.</h1>

          <div className="factStory">
            <div>
              <span>MI CUERPO</span>
              <p>Puedo aprender cuándo quiero intimidad y cómo cuidarla.</p>
            </div>

            <div>
              <span>OTROS CUERPOS</span>
              <p>
                También respeto cuando otra persona se cambia, va al baño,
                cierra una puerta o quiere estar sola.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>SEMILLA DE CRITERIO</span>
            <blockquote>
              Mi intimidad importa.
              <strong> La de los demás también.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            VER QUÉ CIERRA Y QUÉ ABRE →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">LENGUAJE QUE EDUCA</span>

          <h1>La misma norma puede enseñar cosas distintas.</h1>

          <div className="comparison">
            <div>
              <span>PUEDE CERRAR</span>
              <p>«¡Tápate, qué vergüenza!»</p>
              <p>«Eso no se enseña.»</p>
              <p>«No estés desnudo, está feo.»</p>
            </div>

            <div>
              <span>PUEDE ABRIR</span>
              <p>«Tu cuerpo no tiene nada malo.»</p>
              <p>«Ahora vamos a vestirnos porque vienen visitas.»</p>
              <p>«Hay momentos privados y momentos compartidos.»</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>NO ES PERMISIVIDAD</span>
            <p>
              Puedes poner exactamente el mismo límite —«ahora toca vestirse»—
              sin convertir el cuerpo en el problema.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            CONSTRUIR MI RESPUESTA · 10 KG →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 10 KG</span>

          <h1>Vuelve al SPOT.</h1>

          <div className="scene">
            <blockquote>
              —¿Por qué tengo que vestirme? A mí me gusta estar desnudo.
            </blockquote>
          </div>

          <div className="conversation">
            <div><span>1</span><p>No conviertas el cuerpo en algo malo.</p></div>
            <div><span>2</span><p>Explica el contexto.</p></div>
            <div><span>3</span><p>Pon el límite que corresponda.</p></div>
            <div><span>4</span><p>Deja una idea reutilizable sobre intimidad.</p></div>
          </div>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye ahora tu respuesta..."
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

          <h1>¿Solo has cambiado la frase?</h1>

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
            <span>EL CAMBIO IMPORTANTE</span>
            <blockquote>
              Ya no necesitas elegir entre
              <strong> naturalizar el cuerpo o enseñar intimidad.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 10 KG</span>

          <h1>Ahora la intimidad es de otra persona.</h1>

          <div className="scene">
            <p>Su hermana se está cambiando en su habitación.</p>
            <blockquote>
              —¿Por qué no puedo entrar si solo se está vistiendo?
            </blockquote>
          </div>

          <p className="trainingLead">
            Ya no tienes los cuatro pasos delante. Aplica el mismo criterio
            desde el otro lado.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Qué le responderías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!transferencia.trim()}
          >
            VER EL MAPA →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · PESA 03</span>

          <h1>Una norma empieza a convertirse en criterio.</h1>

          <div className="lesson">
            <span>TU MAPA</span>
            <blockquote>
              NORMALIZO EL CUERPO → MIRO EL CONTEXTO → EXPLICO →
              PONGO EL LÍMITE →
              <strong> RESPETO MI INTIMIDAD Y LA DE LOS DEMÁS.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>LO QUE QUEREMOS QUE QUEDE</span>
            <p>
              «Mi cuerpo no es algo vergonzoso» y «mi cuerpo puede tener
              intimidad» pueden aprenderse al mismo tiempo.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            TERMINAR PESA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 03 · COMPLETADA</span>

          <div className="finishMark">10</div>

          <h1>Privado no significa malo.</h1>

          <p className="trainingLead">
            Has entrenado cómo poner límites de intimidad sin utilizar el cuerpo
            como motivo de miedo o vergüenza.
          </p>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 04 · MIRA MI CULO</strong>
            <p>
              El siguiente reto aparece cuando el cuerpo entra en el humor:
              risas, bromas y normas sociales sin convertir la curiosidad
              infantil en algo sucio.
            </p>
          </div>

          <Link href="/prepararme/4-6/pesa-04" className="trainingButton linkButton">
            IR A PESA 04 →
          </Link>

          <Link href="/prepararme/4-6" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
