"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Me sale intentar convencerle",
  "Quiero enumerarle todo lo que puede salir mal",
  "Me cuesta no tomar su decisión como un rechazo a mi experiencia",
  "Me sale decir «haz lo que quieras» y retirarme",
  "Quiero expresar mi desacuerdo sin convertirlo en una orden",
];

export default function Pesa02Responsabilizarse16Plus() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [desacuerdo, setDesacuerdo] = useState("");
  const [limite, setLimite] = useState("");
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
          <small>PESA 02 · DISCREPAR SIN CONTROLAR</small>
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
              src="/16+/pesa02.png"
              alt="Pesa 02 · No estoy de acuerdo con tu decisión"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · DISCREPAR</span>
              <p>
                Respetar una decisión no significa aprobarla. El entrenamiento
                empieza cuando tu criterio y el suyo dejan de coincidir.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 20 KG</span>
          <h1>«No estoy de acuerdo con tu decisión.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —He decidido dejar los estudios este año. Quiero trabajar y ya
              veré más adelante si vuelvo.
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
          <h1>Tu desacuerdo también necesita una Ventana RR.</h1>

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
            placeholder="Ej.: «Está tirando su futuro», «si le dejo hacerlo luego será demasiado tarde»..."
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
          <h1>Una decisión que no compartes no es automáticamente una catástrofe.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Está planteando interrumpir sus estudios para trabajar y dejar
                abierta la posibilidad de retomarlos más adelante.
              </p>
            </div>

            <div>
              <span>TODAVÍA NO SABES</span>
              <p>
                Por qué quiere hacerlo, qué alternativas ha considerado, qué
                trabajo tiene realmente disponible, qué plan tiene o cuánto ha
                pensado las consecuencias.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Puedo pensar que una decisión es mala
              <strong> sin necesitar convertir mi opinión en su obligación.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR SU RAZONAMIENTO →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>Antes de discutir la conclusión, conoce el camino que le llevó hasta ella.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES EXPLORAR</span>
              <p>«¿Qué te ha llevado a querer dejarlo ahora?»</p>
              <p>«¿Qué esperas conseguir trabajando este año?»</p>
              <p>«¿Qué opciones has pensado si dentro de seis meses cambias de idea?»</p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una pregunta que te permita comprender antes de intentar convencer..."
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
          <span className="trainingTag">APARECE SU RAZONAMIENTO</span>
          <h1>Comprender no obliga a estar de acuerdo.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Estoy estudiando por seguir estudiando. No sé qué quiero hacer y
                siento que estoy perdiendo el tiempo. Un amigo puede conseguirme
                trabajo y quiero probar cómo es ganar mi dinero.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ahora puedes discutir la decisión real, no la que habías construido
            en tu cabeza. Y todavía puedes pensar que se equivoca.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            APRENDER A DISCREPAR →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">DESACUERDO ≠ CONTROL</span>
          <h1>No tienes que fingir neutralidad.</h1>

          <div className="conversation">
            <div>
              <span>CONTROLAR</span>
              <p>«Mientras yo pueda impedirlo, no vas a dejar los estudios.»</p>
            </div>

            <div>
              <span>FINGIR</span>
              <p>«Me parece estupendo» cuando realmente no lo piensas.</p>
            </div>

            <div>
              <span>DISCREPAR</span>
              <p>
                «Yo veo riesgos que me preocupan y te los quiero explicar. Pero
                también quiero entender cómo los estás valorando tú.»
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>CAPACIDAD</span>
            <p>
              El objetivo no es eliminar el desacuerdo. Es conseguir que el
              desacuerdo siga permitiendo pensamiento.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            CONSTRUIR TU DESACUERDO →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 20 KG</span>
          <h1>Di lo que piensas sin cerrar la decisión.</h1>

          <div className="scene">
            <blockquote>
              —Entonces dime la verdad. ¿Tú crees que estoy haciendo una
              tontería?
            </blockquote>
          </div>

          <textarea
            value={desacuerdo}
            onChange={(e) => setDesacuerdo(e.target.value)}
            placeholder="Expresa tu criterio con claridad sin convertirlo en sentencia..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!desacuerdo.trim()}
          >
            AHORA APARECE UN LÍMITE →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">AUTONOMÍA ≠ FIN DE LOS LÍMITES</span>
          <h1>Su decisión puede ser suya y algunas consecuencias también.</h1>

          <div className="scene">
            <blockquote>
              —Si dejo de estudiar y el trabajo no sale, puedo quedarme en casa
              sin hacer nada hasta que encuentre otra cosa.
            </blockquote>
          </div>

          <p className="trainingLead">
            Aquí aparece una distinción importante: no controlar su proyecto
            vital no significa que tenga derecho automático a decidir las
            condiciones de convivencia, dinero o responsabilidades que afectan
            también a otras personas.
          </p>

          <div className="lesson">
            <span>FRONTERA RR</span>
            <blockquote>
              «La decisión sobre estudiar o trabajar puede ser cada vez más
              tuya. Las condiciones que afectan a toda la casa
              <strong> tendremos que acordarlas entre todos.</strong>»
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            CONSTRUIR LÍMITE SIN CASTIGO →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">LÍMITE ADULTO</span>
          <h1>No uses los recursos compartidos para comprar obediencia.</h1>

          <p className="trainingLead">
            Una cosa es establecer responsabilidades reales de convivencia.
            Otra distinta es convertir vivienda, dinero o afecto en una amenaza
            diseñada únicamente para obligarle a elegir lo que tú quieres.
          </p>

          <textarea
            value={limite}
            onChange={(e) => setLimite(e.target.value)}
            placeholder="¿Cómo separarías su decisión de las responsabilidades compartidas?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(9)}
            disabled={!limite.trim()}
          >
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 20 KG</span>
          <h1>Ahora sí tienes experiencia directa.</h1>

          <div className="scene">
            <blockquote>
              —Quiero comprarme una moto con el dinero que he ahorrado. Sé que
              tú no quieres, pero la voy a pagar yo.
            </blockquote>
          </div>

          <p className="trainingLead">
            Esta vez puedes tener argumentos fuertes, experiencia y miedo real.
            El entrenamiento sigue siendo el mismo: distinguir qué puedes
            aportar, qué decisión corresponde al joven y qué consecuencias
            afectan legítimamente a otras personas.
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
            REPLAY →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>¿Puedes seguir siendo referencia cuando no te hacen caso?</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>TU DESACUERDO</span>
              <p>{desacuerdo}</p>
            </div>

            <div>
              <span>TU LÍMITE</span>
              <p>{limite}</p>
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
          <span className="trainingTag">MAPA RR · DISCREPAR</span>
          <h1>Tu criterio no desaparece cuando aparece su autonomía.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              REGULO MI REACCIÓN → DESCUBRO SU RAZONAMIENTO → SEPARO HECHO E
              HISTORIA → EXPRESO MI CRITERIO → CONTRASTAMOS CONSECUENCIAS →
              DISTINGO SU DECISIÓN DE LO QUE AFECTA A OTROS →
              <strong> MANTENGO EL VÍNCULO AUNQUE NO COINCIDAMOS.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO TRANSFERIBLE</span>
            <p>
              Respetar que una decisión le corresponde no me obliga a aprobarla,
              financiarla, ocultar lo que pienso ni asumir todas sus
              consecuencias.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 02 · COMPLETADA</span>

          <div className="finishMark">20</div>

          <h1>Puedo pensar que te equivocas.</h1>
          <h2>Y seguir ayudándote a pensar.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              El desacuerdo no tiene por qué romper la autonomía ni el vínculo.
              Puedes expresar tu criterio, señalar riesgos y poner límites sobre
              aquello que también te afecta sin necesitar controlar toda la
              decisión.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 03 · «ES MI VIDA»</strong>
            <p>
              Ahora iremos un paso más allá: el joven utilizará su autonomía
              como argumento para separar decisión y consecuencias. Entrenaremos
              cómo devolver responsabilidad sin recuperar el control.
            </p>
          </div>

          <Link
            href="/prepararme/16+/pesa-03"
            className="trainingButton linkButton"
          >
            IR A PESA 03 →
          </Link>

          <Link href="/prepararme/16+" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO 16+
          </Link>
        </section>
      )}
    </main>
  );
}
