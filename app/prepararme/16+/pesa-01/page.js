"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Me sale decirle exactamente qué debería hacer",
  "Quiero advertirle de todo lo que puede salir mal",
  "Me cuesta aceptar que pueda elegir algo que yo no elegiría",
  "Me sale retirarme y decir «es tu vida»",
  "Quiero ayudarle a pensar sin quedarme con su decisión",
];

export default function Pesa01Responsabilizarse16Plus() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaAcompanamiento, setRespuestaAcompanamiento] = useState("");
  const [respuestaConsecuencia, setRespuestaConsecuencia] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 13;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/16+" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 01 · SOLTAR SIN DESAPARECER</small>
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
              src="/16+/pesa01.png"
              alt="Pesa 01 · Ya no puedo decidir eso por ti"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · CAMBIO DE PAPEL</span>
              <p>
                Acompañar a alguien que empieza a dirigir su propia vida exige
                aprender una habilidad incómoda: seguir presente sin ocupar su
                lugar.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 20 KG</span>
          <h1>«Ya no puedo decidir eso por ti.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —Me han ofrecido un trabajo para los fines de semana. No sé si
              aceptarlo. ¿Tú qué harías?
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
          <h1>Dar una respuesta puede ser más fácil que devolver una decisión.</h1>

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
            placeholder="Ej.: «Si se equivoca y yo podía evitarlo, habré fallado», «todavía no sabe decidir bien»..."
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
          <h1>Que te pregunte no significa que quiera entregarte el volante.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Tiene una decisión delante y ha acudido a ti para pensarla.
              </p>
            </div>

            <div>
              <span>HISTORIA POSIBLE</span>
              <p>
                «Todavía necesita que yo decida», «si no le digo qué hacer lo
                estoy dejando solo» o «si se equivoca será responsabilidad mía».
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Ser una referencia no exige tener
              <strong> la última palabra.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR ANTES DE ACONSEJAR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>En vez de responder «yo haría...», descubre qué está decidiendo.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES EXPLORAR</span>
              <p>«¿Qué te atrae de aceptar?»</p>
              <p>«¿Qué te preocupa perder si lo haces?»</p>
              <p>«¿Qué sería importante para ti que siguiera cabiendo en tu semana?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una pregunta que le devuelva pensamiento..."
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
          <span className="trainingTag">APARECEN SUS VARIABLES</span>
          <h1>Ahora la decisión empieza a ser suya de verdad.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Me vendría bien ganar mi dinero y tener experiencia. Lo que me
                preocupa es quedarme sin tiempo para estudiar y acabar dejando
                de ver a mis amigos.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ya no necesitas fabricar la decisión desde fuera. Puedes ayudarle a
            comparar lo que gana, lo que arriesga y qué condiciones necesitaría
            para que la opción encaje con sus prioridades.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            ENTRENAR DEVOLUCIÓN →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">AYUDAR ≠ DECIDIR</span>
          <h1>Puedes aportar criterio sin apropiarte del resultado.</h1>

          <div className="conversation">
            <div>
              <span>DECIDIR POR ÉL</span>
              <p>«Acéptalo. Te vendrá bien.»</p>
            </div>

            <div>
              <span>DESENTENDERSE</span>
              <p>«Es tu vida. Haz lo que quieras.»</p>
            </div>

            <div>
              <span>ACOMPAÑAR</span>
              <p>
                «Podemos mirar juntos qué ganas, qué sacrificas y qué podrías
                hacer si ves que no funciona. La decisión final tendrá que ser
                tuya.»
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>CAMBIO DE PAPEL</span>
            <p>
              Antes tu ayuda podía consistir en elegir por él. Ahora puede
              consistir en mejorar la calidad de la decisión que él toma.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            CONSTRUIR RESPUESTA →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 20 KG</span>
          <h1>Devuelve la decisión sin retirar tu presencia.</h1>

          <div className="scene">
            <blockquote>
              —Entonces, ¿tú crees que debería aceptar el trabajo?
            </blockquote>
          </div>

          <textarea
            value={respuestaAcompanamiento}
            onChange={(e) => setRespuestaAcompanamiento(e.target.value)}
            placeholder="¿Cómo responderías sin decidir por él ni abandonarlo?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuestaAcompanamiento.trim()}
          >
            APARECEN CONSECUENCIAS →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">DOS MESES DESPUÉS</span>
          <h1>Eligió. Y no está saliendo como esperaba.</h1>

          <div className="scene">
            <blockquote>
              —Acepté el trabajo. Estoy agotado, he bajado las notas y ahora no
              sé si dejarlo. Creo que me equivoqué.
            </blockquote>
          </div>

          <p className="trainingLead">
            Aquí aparece la segunda mitad de la autonomía: no solo poder elegir,
            sino poder revisar una decisión cuando la realidad aporta
            información nueva.
          </p>

          <button className="trainingButton" onClick={() => irA(8)}>
            RESPONSABILIDAD ≠ CASTIGO →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>Equivocarse también produce datos.</h1>

          <div className="conversation">
            <div>
              <span>NO NECESITA</span>
              <p>«Ya te lo dije.»</p>
            </div>

            <div>
              <span>TAMPOCO NECESITA</span>
              <p>Que tú resuelvas inmediatamente las consecuencias.</p>
            </div>

            <div>
              <span>PUEDE NECESITAR</span>
              <p>
                Revisar qué esperaba, qué ocurrió realmente, qué puede cambiar
                y qué responsabilidad le corresponde asumir.
              </p>
            </div>
          </div>

          <textarea
            value={respuestaConsecuencia}
            onChange={(e) => setRespuestaConsecuencia(e.target.value)}
            placeholder="¿Cómo le ayudarías a revisar la decisión?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(9)}
            disabled={!respuestaConsecuencia.trim()}
          >
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 20 KG</span>
          <h1>Cambia el problema. Mantén tu nuevo papel.</h1>

          <div className="scene">
            <blockquote>
              —Estoy pensando dejar el equipo en el que llevo años. Ya no me
              hace ilusión, pero me da miedo arrepentirme. Dime tú qué hago.
            </blockquote>
          </div>

          <p className="trainingLead">
            Ya no hay trabajo, dinero ni estudios. Si has aprendido el criterio,
            deberías poder acompañar igualmente: descubrir variables, aportar
            perspectiva y devolver la elección.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="Construye tu respuesta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!transferencia.trim()}
          >
            REPLAY ANTES / DESPUÉS →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>¿Sigues dando respuestas o estás construyendo criterio?</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>ACOMPAÑAMIENTO</span>
              <p>{respuestaAcompanamiento}</p>
            </div>

            <div>
              <span>CUANDO LA DECISIÓN SALE MAL</span>
              <p>{respuestaConsecuencia}</p>
            </div>

            <div>
              <span>TRANSFERENCIA</span>
              <p>{transferencia}</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            VER MAPA RR →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · SOLTAR</span>
          <h1>Soltar el volante no significa bajarse del coche.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RECIBO LA DECISIÓN → REGULO MI NECESIDAD DE RESOLVER → DESCUBRO
              SUS VARIABLES → APORTO PERSPECTIVA → DEVUELVO LA ELECCIÓN →
              ACOMPAÑO CONSECUENCIAS →
              <strong> REPLAY → APRENDE → VUELVE A DECIDIR.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO TRANSFERIBLE</span>
            <p>
              Mi experiencia puede mejorar su decisión sin convertirse
              automáticamente en su decisión.
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

          <h1>Ayudar más ya no siempre significa intervenir más.</h1>
          <h2>A veces significa ayudarle a pensar mejor y devolverle la decisión.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Acompañar la autonomía no exige silencio ni indiferencia. Puedes
              preguntar, contrastar, advertir, compartir experiencia y ayudar a
              anticipar consecuencias sin convertir todo eso en una orden.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 02 · «NO ESTOY DE ACUERDO CON TU DECISIÓN»</strong>
            <p>
              La siguiente Pesa será más incómoda: ya no solo tendrás que
              devolver una decisión. Tendrás que hacerlo cuando la decisión que
              toma sea distinta de la que tú consideras mejor.
            </p>
          </div>

          <Link
            href="/prepararme/16+/pesa-02"
            className="trainingButton linkButton"
          >
            IR A PESA 02 →
          </Link>

          <Link href="/prepararme/16+" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO 16+
          </Link>
        </section>
      )}
    </main>
  );
}
