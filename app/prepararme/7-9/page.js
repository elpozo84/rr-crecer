import Link from "next/link";

const pesas = [
  {
    id: "01",
    titulo: "PAPÁ, ¿QUÉ SIGNIFICA...?",
    capacidad: "Responder preguntas inesperadas",
    descripcion:
      "Aprende a descubrir qué quiere saber realmente antes de lanzarte a explicar.",
    estado: "ENTRENAR",
    href: "/prepararme/7-9/pesa-01",
  },
  {
    id: "02",
    titulo: "DALE UN BESO",
    capacidad: "Afecto, cuerpo y límites",
    descripcion:
      "Entrena cómo enseñar autonomía corporal sin confundir educación, cariño y contacto físico obligatorio.",
    estado: "ENTRENAR",
    href: "/prepararme/7-9/pesa-02",
  },
  {
    id: "03",
    titulo: "ES NUESTRO SECRETO",
    capacidad: "Secretos, sorpresas y pedir ayuda",
    descripcion:
      "Ayúdale a distinguir privacidad, sorpresas y situaciones que necesita poder contar.",
    estado: "PRÓXIMAMENTE",
  },
  {
    id: "04",
    titulo: "¿POR QUÉ NO PUEDO ENTRAR?",
    capacidad: "Intimidad sin vergüenza",
    descripcion:
      "Comprender que privado no significa malo y aprender a respetar espacios íntimos.",
    estado: "PRÓXIMAMENTE",
  },
  {
    id: "05",
    titulo: "¿DE DÓNDE VIENEN LOS BEBÉS?",
    capacidad: "Hablar de reproducción",
    descripcion:
      "Responder con verdad, sencillez y una profundidad adecuada a lo que realmente pregunta.",
    estado: "PRÓXIMAMENTE",
  },
];

export default function Comprender79() {
  return (
    <main className="gymPage">
      <header className="header">
        <Link className="brand" href="/">
          <span className="mark">RR</span>

          <span>
            <strong>CRECER</strong>
            <small>MÉTODO RUIZ RIVAS</small>
          </span>
        </Link>

        <Link className="backLink" href="/prepararme">
          ← CAMBIAR ETAPA
        </Link>
      </header>

      <section className="gymHero">
        <div className="gymAge">7–9 AÑOS</div>

        <div className="sectionTag">COMPRENDER</div>

        <h1>
          No tienes que explicárselo
          <em> todo hoy.</em>
        </h1>

        <p>
          En esta etapa entrenamos cómo hablar sobre el cuerpo, los límites,
          las primeras preguntas sobre reproducción y cómo pedir ayuda.
        </p>

        <div className="progressBox">
          <div>
            <span>PRIMER RECORRIDO</span>
            <strong>5 Pesas</strong>
          </div>

          <div className="progressTrack">
            <div className="progressFill" />
          </div>

          <small>
            Empieza por una Pesa. No necesitas completar todo de una vez.
          </small>
        </div>
      </section>

      <section className="gymContent">
        <div className="gymHeading">
          <span>GIMNASIO RR · CRECER</span>

          <h2>
            Entrena hoy la conversación que mañana puede aparecer sola.
          </h2>
        </div>

        <div className="weights">
          {pesas.map((pesa) => {
            const contenido = (
              <>
                <div className="weightNumber">
                  {pesa.id}
                </div>

                <div className="weightBody">
                  <span>{pesa.capacidad}</span>

                  <h3>{pesa.titulo}</h3>

                  <p>{pesa.descripcion}</p>
                </div>

                <div
                  className={`weightStatus ${
                    pesa.href ? "weightAvailable" : ""
                  }`}
                >
                  {pesa.estado}

                  {pesa.href && <b>→</b>}
                </div>
              </>
            );

            if (pesa.href) {
              return (
                <Link
                  className="weightCard"
                  href={pesa.href}
                  key={pesa.id}
                >
                  {contenido}
                </Link>
              );
            }

            return (
              <div
                className="weightCard locked"
                key={pesa.id}
              >
                {contenido}
              </div>
            );
          })}
        </div>
      </section>

      <section className="twoSides">
        <div>
          <span>MI CUERPO</span>
          <h2>Puedo poner límites.</h2>
        </div>

        <div className="circle">
          RR
        </div>

        <div>
          <span>TU CUERPO</span>
          <h2>Tengo que respetar los tuyos.</h2>
        </div>
      </section>

      <section className="gymPrinciple">
        <span>PRINCIPIO RR · CRECER</span>

        <blockquote>
          No buscamos que memorices qué decir en cada situación.
          <strong>
            {" "}
            Entrenamos criterios que puedas utilizar cuando aparezca una
            situación que nunca habíamos previsto.
          </strong>
        </blockquote>
      </section>
    </main>
  );
}
