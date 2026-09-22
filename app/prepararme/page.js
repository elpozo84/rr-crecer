import Link from "next/link";

const etapas = [
  {
    edad: "4–6",
    nombre: "DESCUBRIR",
    texto: "Mi cuerpo, sus nombres, intimidad, límites y pedir ayuda.",
  },
  {
    edad: "7–9",
    nombre: "COMPRENDER",
    texto: "Cuerpo, reproducción, preguntas, consentimiento y seguridad.",
  },
  {
    edad: "10–12",
    nombre: "PREPARARSE",
    texto: "Pubertad, cambios corporales, atracción, Internet y sexualidad.",
  },
  {
    edad: "13–15",
    nombre: "DECIDIR",
    texto: "Deseo, relaciones, presión, consentimiento y protección.",
  },
  {
    edad: "16+",
    nombre: "RESPONSABILIZARSE",
    texto: "Sexualidad, relaciones, cuidado, decisiones y responsabilidad.",
  },
];

export default function Prepararme() {
  return (
    <main className="agePage">
      <header className="header">
        <Link className="brand" href="/">
          <span className="mark">RR</span>
          <span>
            <strong>CRECER</strong>
            <small>MÉTODO RUIZ RIVAS</small>
          </span>
        </Link>

        <Link className="backLink" href="/">
          ← VOLVER
        </Link>
      </header>

      <section className="ageHero">
        <div className="sectionTag">QUIERO PREPARARME</div>

        <h1>¿A quién quieres acompañar?</h1>

        <p>
          La misma conversación cambia mientras crecen.
          <br />
          Elige una etapa para ajustar el lenguaje, la profundidad y los
          entrenamientos.
        </p>
      </section>

      <section className="ageGrid">
        {etapas.map((etapa) => (
          <Link
            href={`/prepararme/${etapa.edad
              .replace("–", "-")
              .replace("+", "plus")}`}
            className="ageCard"
            key={etapa.edad}
          >
            <span className="ageNumber">{etapa.edad}</span>

            <div className="ageInfo">
              <span className="ageName">{etapa.nombre}</span>
              <p>{etapa.texto}</p>
            </div>

            <span className="ageArrow">→</span>
          </Link>
        ))}
      </section>

      <section className="ageNote">
        <span>UNA ORIENTACIÓN, NO UNA ETIQUETA</span>

        <p>
          La edad nos ayuda a adaptar el contenido, pero cada niño y cada
          familia tienen su propio ritmo.
        </p>

        <strong>
          No necesitamos explicarlo todo hoy. Tampoco necesitamos esperar a que
          aparezca un problema.
        </strong>
      </section>
    </main>
  );
}
