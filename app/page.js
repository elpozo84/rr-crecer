const paths = [
  {
    number: "01",
    title: "QUIERO PREPARARME",
    text: "Entrena conversaciones antes de necesitarlas.",
    action: "ENTRAR AL GIMNASIO",
  },
  {
    number: "02",
    title: "ME ACABA DE PREGUNTAR ALGO",
    text: "Te ha hecho una pregunta y no sabes qué decir, cuánto explicar o cómo hacerlo.",
    action: "AYÚDAME A RESPONDER",
  },
  {
    number: "03",
    title: "QUIERO HABLAR DE UN TEMA",
    text: "Cuerpo, reproducción, pubertad, sexualidad, consentimiento, Internet y relaciones.",
    action: "ELEGIR TEMA",
  },
  {
    number: "04",
    title: "HA PASADO ALGO",
    text: "Has visto, escuchado o te han contado algo que te preocupa.",
    action: "NECESITO ORIENTACIÓN",
    serious: true,
  },
];

const stages = [
  ["4–6", "DESCUBRIR", "Mi cuerpo · nombres · intimidad · límites · pedir ayuda"],
  ["7–9", "COMPRENDER", "Cuerpo · reproducción · preguntas · consentimiento · seguridad"],
  ["10–12", "PREPARARSE", "Pubertad · cambios · atracción · Internet · sexualidad"],
  ["13–15", "DECIDIR", "Deseo · relaciones · presión · consentimiento · protección"],
  ["16+", "RESPONSABILIZARSE", "Sexualidad · relaciones · cuidado · decisiones · responsabilidad"],
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#">
          <span className="mark">RR</span>
          <span>
            <strong>CRECER</strong>
            <small>MÉTODO RUIZ RIVAS</small>
          </span>
        </a>

        <nav>
          <a href="#como">Cómo funciona</a>
          <a href="#familias">Para familias</a>
          <a href="#">Entrar</a>
          <a className="navButton" href="#empezar">Empezar</a>
        </nav>
      </header>

      <section className="hero">
        <div className="eyebrow">EDUCACIÓN PARA CRECER JUNTOS</div>

        <h1>
          Hay conversaciones que
          <span> crecen con ellos.</span>
        </h1>

        <p className="heroLead">
          Educación afectiva, corporal y sexual para familias.
        </p>

        <p className="heroText">
          No necesitas tener todas las respuestas.
          <br />
          <strong>Necesitas que puedan seguir preguntándote.</strong>
        </p>

        <a href="#empezar" className="primary">
          EMPEZAR GRATIS <span>→</span>
        </a>

        <p className="micro">
          Para madres, padres y cuidadores · Contenido progresivo según su etapa
        </p>

        <div className="growth">
          <span>CUERPO</span>
          <i />
          <span>PREGUNTAS</span>
          <i />
          <span>PUBERTAD</span>
          <i />
          <span>SEXUALIDAD</span>
          <i />
          <span>RELACIONES</span>
          <i />
          <span>RESPONSABILIDAD</span>
        </div>
      </section>

      <section className="intro" id="familias">
        <div className="sectionTag">NO ES «LA CHARLA»</div>
        <h2>Cientos de pequeñas conversaciones.</h2>
        <p>
          Una palabra que escucha en el colegio. Una pregunta mientras vais en
          coche. El primer cambio corporal. Una imagen que aparece en Internet.
          Alguien que le gusta. Una duda que le da vergüenza preguntar.
        </p>

        <blockquote>
          La educación no ocurre un día.
          <strong> Crece con ellos.</strong>
        </blockquote>
      </section>

      <section className="choose" id="empezar">
        <div className="sectionTag">EMPECEMOS POR HOY</div>
        <h2>¿Qué necesitas?</h2>

        <div className="cards">
          {paths.map((item) => (
            <article
              className={`card ${item.serious ? "serious" : ""}`}
              key={item.number}
            >
              <span className="cardNumber">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button>{item.action} →</button>
            </article>
          ))}
        </div>
      </section>

      <section className="method" id="como">
        <div>
          <div className="sectionTag">MÉTODO RR</div>
          <h2>No vienes solamente a leer.</h2>
          <h2 className="accent">Vienes a entrenar.</h2>

          <p>
            Practica situaciones reales antes de encontrártelas fuera de la
            pantalla.
          </p>
        </div>

        <div className="spot">
          <span>SPOT · 5 KG</span>
          <p>Tu hijo te hace una pregunta que no esperabas.</p>
          <strong>¿Qué responderías tú?</strong>

          <div className="steps">
            <b>VENTANA RR</b>
            <i>↓</i>
            <b>HECHO ≠ HISTORIA</b>
            <i>↓</i>
            <b>DESCUBRE EL CRITERIO</b>
            <i>↓</i>
            <b>CONSTRUYE TU RESPUESTA</b>
            <i>↓</i>
            <b>REPLAY</b>
          </div>
        </div>
      </section>

      <section className="stages">
        <div className="sectionTag">CRECE CON ELLOS</div>
        <h2>La conversación cambia con la edad.</h2>
        <p className="stageIntro">
          No tienes que explicarlo todo hoy. La información gana profundidad a
          medida que crecen.
        </p>

        <div className="stageList">
          {stages.map(([age, title, text]) => (
            <div className="stage" key={age}>
              <strong>{age}</strong>
              <div>
                <b>{title}</b>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="twoSides">
        <div>
          <span>MI CUERPO</span>
          <h2>Puedo poner límites.</h2>
        </div>

        <div className="circle">RR</div>

        <div>
          <span>TU CUERPO</span>
          <h2>Tengo que respetar los tuyos.</h2>
        </div>
      </section>

      <section className="safety">
        <span>CUANDO ENTRENAR NO ES SUFICIENTE</span>
        <h2>Hay situaciones que necesitan ayuda.</h2>
        <p>
          Si una situación puede implicar riesgo, abuso, coerción o un problema
          de salud, RR · Crecer deja de ser un gimnasio y orienta hacia recursos
          profesionales adecuados.
        </p>
        <p className="safetySmall">
          RR · Crecer es una herramienta educativa y no sustituye atención
          médica, psicológica ni servicios de protección infantil.
        </p>
      </section>

      <section className="closing">
        <span>RR · CRECER</span>
        <h2>No necesitas tener todas las respuestas.</h2>
        <h2 className="accent">Necesitas que puedan seguir preguntándote.</h2>
        <a href="#empezar" className="primary">
          EMPEZAR RR · CRECER →
        </a>
      </section>

      <footer>
        <div>
          <strong>RR · CRECER</strong>
          <span>Un proyecto del Método Ruiz Rivas</span>
        </div>
        <span>Educación · Entrenamiento · Conversación</span>
      </footer>
    </main>
  );
}
