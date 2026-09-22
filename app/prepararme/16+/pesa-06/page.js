"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Me sale decirle que termine la relación ya",
  "Quiero explicarle todo lo que yo veo y él no",
  "Me desespera que reconozca el problema y siga ahí",
  "Me sale decir «si vuelves, luego no te quejes»",
  "Quiero seguir siendo un lugar al que pueda volver mientras aumenta su capacidad de decidir",
];

export default function Pesa06Responsabilizarse16Plus() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaAmbivalencia, setRespuestaAmbivalencia] = useState("");
  const [respuestaSeguridad, setRespuestaSeguridad] = useState("");
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
          <small>PESA 06 · RELACIONES DIFÍCILES</small>
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
              src="/16+/pesa06.png"
              alt="Pesa 06 · Sé que no me hace bien, pero no puedo dejarlo"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · AMBIVALENCIA</span>
              <p>
                Ver que una relación hace daño no significa estar preparado para
                terminarla. El vínculo contigo puede ser especialmente
                importante mientras todavía existe esa contradicción.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 30 KG</span>
          <h1>«Sé que no me hace bien, pero no puedo dejarlo.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —Sé que esta relación no me está haciendo bien. Discutimos
              muchísimo y estoy peor desde que estamos juntos. Pero no puedo
              dejarlo.
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
          <h1>Cuando tú ves una salida clara, cuesta aceptar que él todavía no pueda verla igual.</h1>

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
            placeholder="Ej.: «Si sabe que le hace daño y sigue, es porque no quiere ayudarse», «tengo que hacerle entrar en razón»..."
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
          <h1>Reconocer un problema y poder salir de él son dos capacidades distintas.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Percibe que la relación está afectándole negativamente y, al
                mismo tiempo, siente que no puede terminarla.
              </p>
            </div>

            <div>
              <span>TODAVÍA NO SABES</span>
              <p>
                Qué le mantiene ahí: afecto, miedo, esperanza de cambio,
                dependencia, culpa, aislamiento, presión, amenazas o una mezcla
                de varias cosas.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Antes de empujar hacia la salida,
              <strong> descubre qué está haciendo difícil salir.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>«¿Por qué no lo dejas?» suele llegar demasiado pronto.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES EXPLORAR</span>
              <p>«¿Qué es lo que más te cuesta imaginar si termináis?»</p>
              <p>«¿Qué cosas hacen que quieras irte y cuáles hacen que quieras quedarte?»</p>
              <p>«¿Hay algo que te dé miedo que ocurra si intentas terminar?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una pregunta que explore sin juzgar..."
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
          <span className="trainingTag">APARECE LA AMBIVALENCIA</span>
          <h1>Puede querer dos cosas incompatibles al mismo tiempo.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Cuando estamos bien estamos muy bien. Me promete que va a
                cambiar y yo quiero creerlo. Pero cada vez veo menos a mis
                amigos porque siempre acabamos discutiendo por eso.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            No necesitas resolver la contradicción por él. Puedes ayudarle a
            verla completa: qué recibe de la relación, qué está perdiendo y qué
            patrón se repite.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            HACER VISIBLE EL PATRÓN →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY DE LA RELACIÓN</span>
          <h1>No analices solo la última discusión. Mira la secuencia.</h1>

          <div className="conversation">
            <div>
              <span>OCURRE</span>
              <p>Aparece un conflicto, celos, presión o control.</p>
            </div>

            <div>
              <span>IMPACTO</span>
              <p>Se siente peor, reduce espacios propios o cambia conductas para evitar conflictos.</p>
            </div>

            <div>
              <span>REPARACIÓN</span>
              <p>Llegan disculpas, promesas, reconciliación o un periodo bueno.</p>
            </div>

            <div>
              <span>REPETICIÓN</span>
              <p>¿El problema cambia realmente o vuelve con otra forma?</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>RR</span>
            <p>
              Una promesa puede ser sincera. Para valorar un cambio necesitas
              observar también qué ocurre después de la promesa.
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
          <h1>No necesitas ganar la discusión contra su pareja.</h1>

          <div className="scene">
            <blockquote>
              —Ya sé lo que vas a decir: que lo deje. Pero no quiero hacerlo
              todavía.
            </blockquote>
          </div>

          <textarea
            value={respuestaAmbivalencia}
            onChange={(e) => setRespuestaAmbivalencia(e.target.value)}
            placeholder="¿Cómo mantendrías el vínculo sin fingir que no ves el problema?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuestaAmbivalencia.trim()}
          >
            COMPROBAR SEGURIDAD →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">PUENTE DE SEGURIDAD</span>
          <h1>Autonomía no significa esperar pasivamente ante cualquier situación.</h1>

          <div className="scene">
            <blockquote>
              —Cuando intento irme en mitad de una discusión se pone delante de
              la puerta. Nunca me ha pegado, pero alguna vez me ha dado miedo.
            </blockquote>
          </div>

          <p className="trainingLead">
            La información ha cambiado. Ya no estás únicamente ante una relación
            que genera malestar. Aparecen miedo y una conducta que limita
            físicamente la posibilidad de salir.
          </p>

          <textarea
            value={respuestaSeguridad}
            onChange={(e) => setRespuestaSeguridad(e.target.value)}
            placeholder="¿Qué responderías ahora?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaSeguridad.trim()}
          >
            CAMBIAR EL OBJETIVO →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">CUANDO CAMBIA EL OBJETIVO</span>
          <h1>Primero seguridad. Después, el resto.</h1>

          <div className="conversation">
            <div>
              <span>NO MINIMICES</span>
              <p>
                Que no haya habido una agresión física no convierte el miedo o
                la restricción de movimiento en irrelevantes.
              </p>
            </div>

            <div>
              <span>NO LE CULPES</span>
              <p>
                Haber permanecido en la relación no elimina su derecho a pedir
                ayuda ahora.
              </p>
            </div>

            <div>
              <span>NO IMPROVISES UNA CONFRONTACIÓN</span>
              <p>
                Si existe miedo, coerción, amenazas o violencia, conviene
                priorizar un plan seguro y orientación especializada.
              </p>
            </div>

            <div>
              <span>MANTÉN EL CANAL</span>
              <p>
                «No tienes que resolverlo todo ahora. Vamos a pensar cómo estar
                seguro y qué ayuda necesitamos.»
              </p>
            </div>
          </div>

          <Link href="/orientacion" className="secondaryTrainingButton">
            NECESITO ORIENTACIÓN →
          </Link>

          <button className="trainingButton" onClick={() => irA(9)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 30 KG</span>
          <h1>No siempre habrá una señal clara de peligro.</h1>

          <div className="scene">
            <blockquote>
              —Hemos vuelto. Sé que no te gusta, pero quiero intentarlo otra vez.
              Si sale mal, ya veré.
            </blockquote>
          </div>

          <p className="trainingLead">
            Si no aparece una emergencia inmediata, tu reto vuelve a ser
            difícil: no castigar el regreso, no fingir aprobación y conservar
            un puente por el que pueda volver a pedir ayuda.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="Construye una respuesta que mantenga criterio + vínculo + puerta abierta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!transferencia.trim()}
          >
            REPLAY →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>¿Tu respuesta necesita que obedezca para poder seguir ayudándole?</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>ANTE LA AMBIVALENCIA</span>
              <p>{respuestaAmbivalencia}</p>
            </div>

            <div>
              <span>CUANDO APARECE MIEDO</span>
              <p>{respuestaSeguridad}</p>
            </div>

            <div>
              <span>SI DECIDE VOLVER</span>
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
          <span className="trainingTag">MAPA RR · RELACIÓN DIFÍCIL</span>
          <h1>Acompañar no es aprobar. Proteger no siempre es controlar.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RECIBO SIN «YA TE LO DIJE» → DESCUBRO QUÉ LE MANTIENE AHÍ →
              OBSERVO PATRONES → HAGO VISIBLE EL COSTE → MANTENGO EL VÍNCULO →
              COMPRUEBO SEGURIDAD →
              <strong> SI APARECE RIESGO, CAMBIO DE ENTRENAR A PROTEGER.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO TRANSFERIBLE</span>
            <p>
              No necesito conseguir hoy la decisión que considero correcta para
              poder aumentar hoy su claridad, su seguridad y su capacidad de
              volver a pedirme ayuda.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 06 · COMPLETADA</span>

          <div className="finishMark">30</div>

          <h1>No siempre podrás sacarle de una relación.</h1>
          <h2>Sí puedes evitar convertirte en otra puerta que se cierra.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Cuando alguien reconoce que una relación le hace daño pero todavía
              no está preparado para terminarla, puedes ayudarle a observar
              patrones, recuperar apoyos y pensar. Si aparecen miedo, amenazas,
              coerción, violencia, aislamiento grave u otras señales de riesgo,
              la prioridad pasa a ser la seguridad y la orientación adecuada.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 07 · «ME HE EQUIVOCADO»</strong>
            <p>
              En la siguiente Pesa cambiaremos completamente la posición: ya no
              será tu hijo quien está recibiendo daño. Vendrá después de haber
              tomado una decisión que ha perjudicado a otra persona. Entrenaremos
              responsabilidad, consecuencias y reparación sin humillación ni
              rescate.
            </p>
          </div>

          <Link
            href="/prepararme/16+/pesa-07"
            className="trainingButton linkButton"
          >
            IR A PESA 07 →
          </Link>

          <Link href="/prepararme/16+" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO 16+
          </Link>
        </section>
      )}
    </main>
  );
}
