import Link from "next/link";
import "./prepararme.css";

const etapas = [
  {
    edad: "4–6",
    numero: "01",
    nombre: "DESCUBRIR",
    texto: "Mi cuerpo, sus nombres, intimidad, límites y pedir ayuda.",
    idea: "Empieza por lo cercano: conocer el cuerpo, nombrarlo y aprender que también puede tener límites.",
  },
  {
    edad: "7–9",
    numero: "02",
    nombre: "COMPRENDER",
    texto: "Cuerpo, reproducción, preguntas, consentimiento y seguridad.",
    idea: "Las preguntas crecen. Entrenamos cómo descubrir qué quieren saber antes de responder.",
    disponible: true,
  },
  {
    edad: "10–12",
    numero: "03",
    nombre: "PREPARARSE",
    texto: "Pubertad, cambios corporales, atracción, Internet y sexualidad.",
    idea: "Preparar antes de que los cambios y las nuevas situaciones lleguen.",
  },
  {
    edad: "13–15",
    numero: "04",
    nombre: "DECIDIR",
    texto: "Deseo, relaciones, presión, consentimiento y protección.",
    idea: "Acompañar decisiones cada vez más propias sin desaparecer de la conversación.",
  },
  {
    edad: "16+",
    numero: "05",
    nombre: "RESPONSABILIZARSE",
    texto: "Sexualidad, relaciones, cuidado, decisiones y responsabilidad.",
    idea: "Pasar de proteger a acompañar criterio, cuidado y responsabilidad.",
  },
];

function hrefEtapa(edad) {
  if (edad === "16+") return "/prepararme/16+";
  return `/prepararme/${edad.replace("–", "-")}`;
}

export default function Prepararme() {
  return (
    <main className="rrPreparePage">
      <header className="rrPrepareHeader">
        <Link className="rrPrepareBrand" href="/">
          <span className="rrPrepareMark">RR</span>
          <span className="rrPrepareBrandText">
            <strong>CRECER</strong>
            <small>MÉTODO RUIZ RIVAS</small>
          </span>
        </Link>

        <Link className="rrPrepareBack" href="/">
          ← VOLVER
        </Link>
      </header>

      <section className="rrPrepareHero">
        <div className="rrPrepareCopy">
          <div className="rrPrepareKicker">
            <span>RR · CRECER</span>
            <i />
            <span>QUIERO PREPARARME</span>
          </div>

          <h1>
            ¿A quién quieres
            <em> acompañar?</em>
          </h1>

          <p>
            La misma conversación cambia mientras crecen. Elige una etapa
            para ajustar el lenguaje, la profundidad y los entrenamientos.
          </p>
        </div>

        <div className="rrPrepareGuide">
          <div className="rrPrepareGuideTop">
            <span>ANTES DE EMPEZAR</span>
            <b>RR</b>
          </div>

          <p>
            No buscamos que memorices respuestas.
            <strong>
              {" "}
              Entrenamos para que puedas construirlas cuando las necesites.
            </strong>
          </p>

          <div className="rrPrepareGuideRoute">
            <span>OBSERVA</span>
            <i />
            <span>DESCUBRE</span>
            <i />
            <span>CONSTRUYE</span>
          </div>
        </div>
      </section>

      <section className="rrPrepareSelection">
        <div className="rrPrepareHeading">
          <div>
            <span className="rrPrepareTag">ELIGE UNA ETAPA</span>
            <h2>La profundidad cambia. El vínculo permanece.</h2>
          </div>

          <p>
            La edad es una orientación para adaptar el entrenamiento. No es una
            etiqueta ni una frontera rígida.
          </p>
        </div>

        <div className="rrPrepareAgeList">
          {etapas.map((etapa) => (
            <Link
              href={hrefEtapa(etapa.edad)}
              className={`rrPrepareAgeCard ${
                etapa.disponible ? "rrPrepareAgeFeatured" : ""
              }`}
              key={etapa.edad}
            >
              <span className="rrPrepareAgeIndex">{etapa.numero}</span>

              <div className="rrPrepareAgeYears">
                <strong>{etapa.edad}</strong>
                <small>AÑOS</small>
              </div>

              <div className="rrPrepareAgeInfo">
                <div className="rrPrepareAgeTitle">
                  <span>{etapa.nombre}</span>
                  {etapa.disponible && <b>GIMNASIO DISPONIBLE</b>}
                </div>

                <h3>{etapa.texto}</h3>
                <p>{etapa.idea}</p>
              </div>

              <span className="rrPrepareAgeArrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rrPreparePrinciple">
        <div className="rrPreparePrincipleMark">RR</div>

        <div>
          <span>UNA ORIENTACIÓN, NO UNA ETIQUETA</span>

          <h2>
            No necesitamos explicarlo todo hoy.
            <strong>
              {" "}
              Tampoco necesitamos esperar a que aparezca un problema.
            </strong>
          </h2>

          <p>
            Cada niño, cada adolescente y cada familia tienen su propio ritmo.
            La etapa nos ayuda a elegir cuánto profundizar; la conversación nos
            dice qué necesita realmente esa persona en ese momento.
          </p>
        </div>
      </section>

      <section className="rrPrepareNext">
        <span>RR · CRECER</span>
        <p>Prepararse no es adelantarse a todo.</p>
        <h2>Es llegar a la conversación con más criterio que miedo.</h2>
      </section>
    </main>
  );
}
