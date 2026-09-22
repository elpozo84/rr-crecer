import Link from "next/link";

const pesas = [
  {
    id: "01",
    titulo: "PAPÁ, ¿QUÉ SIGNIFICA...?",
    capacidad: "Responder preguntas inesperadas",
    descripcion:
      "Aprende a descubrir qué quiere saber realmente antes de lanzarte a explicar.",
    estado: "EMPEZAR",
    href: "/prepararme/7-9/pesa-01",
  },
  {
    id: "02",
    titulo: "DALE UN BESO",
    capacidad: "Afecto, cuerpo y límites",
    descripcion:
      "Enseñar que puede poner límites sobre su cuerpo y también debe respetar los de los demás.",
    estado: "PRÓXIMAMENTE",
  },
  {
    id: "03",
    titulo: "ES NUESTRO SECRETO",
    capacidad: "Secretos, sorpresas y pedir ayuda",
    descripcion:
      "Ayudarle a distinguir privacidad, sorpresas y situaciones que necesita contar.",
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
            <span>TU RECORRIDO</span>
            <strong>0 de 5 Pesas</strong>
          </div>

          <div className="progressTrack">
            <div className="progressFill" />
          </div>

          <small>Estás empezando.</small>
        </div>
      </section>

      <section className="gymContent">
        <div className="gymHeading">
          <span>PRIMER RECORRIDO</span>
          <h2>Construye primero el lugar donde pueda preguntar.</h2>
        </div>

        <div className="weights">
          {pesas.map((pesa) => {
            const content = (
              <>
                <div className="weightNumber">{pesa.id}</div>

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

            return pesa.href ? (
              <Link className="weightCard" href={pesa.href} key={pesa.id}>
                {content}
              </Link>
            ) : (
              <div className="weightCard locked" key={pesa.id}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section className="gymPrinciple">
        <span>PRINCIPIO RR · CRECER</span>

        <blockquote>
          No buscamos que conozcas una frase perfecta.
          <strong>
            {" "}
            Entrenamos para que puedas construir una buena respuesta cuando
            llegue el momento.
          </strong>
        </blockquote>
      </section>
    </main>
  );
}
