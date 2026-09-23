import Link from "next/link";
import Image from "next/image";

const paths = [
  {
    number: "01",
    title: "ENTRENA PARA LO QUE VENDRÁ",
    text: "Practica situaciones reales según la edad de tu hijo. Aprende a preguntar, responder, poner límites y acompañar sin necesitar tener preparada cada respuesta.",
    action: "ENTRAR AL GIMNASIO",
    href: "/prepararme",
  },
  {
    number: "02",
    title: "ME ACABA DE PREGUNTAR ALGO",
    text: "Te ha hecho una pregunta y no sabes qué decir, cuánto explicar o cómo hacerlo.",
    action: "AYÚDAME A RESPONDER",
    href: "/responder",
  },
  {
    number: "03",
    title: "QUIERO HABLAR DE UN TEMA",
    text: "Cuerpo, reproducción, pubertad, sexualidad, consentimiento, Internet y relaciones.",
    action: "ELEGIR TEMA",
    href: "/temas",
  },
  {
    number: "04",
    title: "HA PASADO ALGO",
    text: "Has visto, escuchado o te han contado algo que te preocupa.",
    action: "NECESITO ORIENTACIÓN",
    href: "/orientacion",
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
    <main className="premiumHome">
      <header className="header premiumHeader">
        <Link className="brand" href="/">
          <span className="mark">RR</span>
          <span>
            <strong>CRECER</strong>
            <small>MÉTODO RUIZ RIVAS</small>
          </span>
        </Link>

        <nav>
          <a href="#como">Cómo funciona</a>
          <a href="#familias">Para familias</a>
          <Link href="/acceso">Entrar</Link>
          <Link className="navButton" href="/prepararme">
            Empezar
          </Link>
        </nav>
      </header>

      <section className="premiumHero">
        <div className="premiumHeroGlow" />

        <div className="premiumHeroInner">
          <div className="premiumHeroCopy">
            <div className="premiumKicker">
              <span>RR · CRECER</span>
              <i />
              <span>EDUCACIÓN PARA CRECER JUNTOS</span>
            </div>

            <h1>
              Hay conversaciones
              <span> que crecen con ellos.</span>
            </h1>

            <p className="premiumHeroLead">
              Educación afectiva, corporal y sexual para familias.
            </p>

            <p className="premiumHeroText">
              No necesitas tener todas las respuestas.
              <strong> Necesitas que puedan seguir preguntándote.</strong>
            </p>

            <div className="premiumHeroActions">
              <Link href="/prepararme" className="premiumPrimary">
                <span>EMPEZAR GRATIS</span>
                <b>→</b>
              </Link>

              <a href="#como" className="premiumSecondary">
                VER CÓMO FUNCIONA
              </a>
            </div>

            <p className="premiumMicro">
              Para madres, padres y cuidadores · Entrenamiento progresivo según
              su etapa
            </p>
          </div>

          <div className="premiumHeroPanel">
            <div className="premiumHeroPhoto">
              <Image
                src="/hero-crecer.png"
                alt="Un padre escucha a su hijo mientras conversan en casa"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 44vw"
              />
            </div>
            <div className="premiumPanelTop">
              <span>UN SPOT REAL</span>
              <b>10 KG</b>
            </div>

            <div className="premiumQuote">
              <small>TU HIJO TE PREGUNTA</small>
              <p>
                “Papá, hay un niño que hace unos ruidos y todos se ríen.
                <strong> ¿Por qué los hace?</strong>”
              </p>
            </div>

            <div className="premiumPanelLine" />

            <div className="premiumPanelBottom">
              <span>NO BUSQUES LA FRASE PERFECTA</span>
              <strong>Aprende a construir tu respuesta.</strong>
            </div>

            <div className="premiumPanelMark">RR</div>
          </div>
        </div>

        <div className="premiumGrowth">
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

      <section className="premiumIntro" id="familias">
        <div className="premiumSectionNumber">01</div>

        <div className="premiumIntroCopy">
          <div className="sectionTag">NO ES «LA CHARLA»</div>
          <h2>Cientos de pequeñas conversaciones.</h2>
        </div>

        <div className="premiumIntroText">
          <p>
            Una palabra que escucha en el colegio. Una pregunta mientras vais en
            coche. El primer cambio corporal. Una imagen que aparece en Internet.
            Alguien que le gusta. Una duda que le da vergüenza preguntar.
          </p>

          <blockquote>
            La educación no ocurre un día.
            <strong> Crece con ellos.</strong>
          </blockquote>
        </div>
      </section>

      <section className="premiumChoose" id="empezar">
        <div className="premiumSectionHead">
          <div>
            <div className="sectionTag">EMPECEMOS POR HOY</div>
            <h2>¿Qué necesitas?</h2>
          </div>

          <p>
            No todas las conversaciones empiezan igual. Entra por donde estés
            hoy.
          </p>
        </div>

        <div className="premiumCards">
          {paths.map((item) => (
            <Link
              href={item.href}
              className={`premiumCard ${item.serious ? "premiumCardSerious" : ""}`}
              key={item.number}
            >
              <div className="premiumCardTop">
                <span>{item.number}</span>
                <b>→</b>
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              <strong>{item.action}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="premiumMethod" id="como">
        <div className="premiumMethodCopy">
          <div className="sectionTag">MÉTODO RR</div>

          <h2>
            No vienes solamente a leer.
            <span> Vienes a entrenar.</span>
          </h2>

          <p>
            Practica situaciones reales antes de encontrártelas fuera de la
            pantalla. Empiezas con ayuda y, poco a poco, RR la retira para que
            seas tú quien construya la respuesta.
          </p>

          <div className="premiumMethodNote">
            <span>DE 5 A 30 KG</span>
            <strong>Menos ayuda. Más criterio propio.</strong>
          </div>
        </div>

        <div className="premiumTraining">
          <div className="premiumTrainingTop">
            <span>SPOT · PREGUNTA INESPERADA</span>
            <b>RR</b>
          </div>

          <div className="premiumTrainingQuestion">
            <small>ANTES DE RESPONDER</small>
            <p>¿Qué ha ocurrido dentro de ti?</p>
          </div>

          <div className="premiumTrainingSteps">
            <div>
              <span>01</span>
              <p>
                <b>NOTO</b>
                <small>Qué he sentido y pensado.</small>
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                <b>SEPARO</b>
                <small>Hecho ≠ Historia.</small>
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                <b>DESCUBRO</b>
                <small>Qué necesita realmente saber.</small>
              </p>
            </div>

            <div>
              <span>04</span>
              <p>
                <b>CONSTRUYO</b>
                <small>Mi propia respuesta.</small>
              </p>
            </div>

            <div>
              <span>05</span>
              <p>
                <b>REPLAY</b>
                <small>Comparo antes y después.</small>
              </p>
            </div>
          </div>

          <Link href="/prepararme" className="premiumTrainingButton">
            <span>ENTRAR AL GIMNASIO</span>
            <b>→</b>
          </Link>
        </div>
      </section>

      <section className="premiumStages">
        <div className="premiumSectionHead">
          <div>
            <div className="sectionTag">CRECE CON ELLOS</div>
            <h2>La conversación cambia con la edad.</h2>
          </div>

          <p>
            No tienes que explicarlo todo hoy. La profundidad cambia a medida
            que crecen.
          </p>
        </div>

        <div className="premiumStageList">
          {stages.map(([age, title, text], index) => (
            <Link
              href={`/prepararme/${age.replace("–", "-")}`}
              className="premiumStage"
              key={age}
            >
              <span className="premiumStageIndex">
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{age}</strong>

              <div>
                <b>{title}</b>
                <p>{text}</p>
              </div>

              <span className="premiumStageArrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="premiumPrinciple">
        <div>
          <span>MI CUERPO</span>
          <h2>Puedo poner límites.</h2>
        </div>

        <div className="premiumPrincipleMark">
          <span>RR</span>
          <small>CRITERIO</small>
        </div>

        <div>
          <span>TU CUERPO</span>
          <h2>Tengo que respetar los tuyos.</h2>
        </div>
      </section>

      <section className="premiumSafety">
        <div className="premiumSafetyIcon">!</div>

        <div>
          <span>CUANDO ENTRENAR NO ES SUFICIENTE</span>
          <h2>Hay situaciones que necesitan ayuda.</h2>
        </div>

        <div className="premiumSafetyText">
          <p>
            Si una situación puede implicar riesgo, abuso, coerción o un problema
            de salud, RR · Crecer deja de ser un gimnasio y orienta hacia recursos
            profesionales adecuados.
          </p>

          <p>
            RR · Crecer es una herramienta educativa y no sustituye atención
            médica, psicológica ni servicios de protección infantil.
          </p>

          <Link href="/orientacion">
            HA PASADO ALGO <b>→</b>
          </Link>
        </div>
      </section>

      <section className="premiumClosing">
        <span>RR · CRECER</span>

        <h2>
          No necesitas tener
          <br />
          todas las respuestas.
        </h2>

        <p>Necesitas que puedan seguir preguntándote.</p>

        <Link href="/prepararme" className="premiumPrimary">
          <span>EMPEZAR RR · CRECER</span>
          <b>→</b>
        </Link>
      </section>

      <footer className="premiumFooter">
        <div>
          <strong>RR · CRECER</strong>
          <span>Un proyecto del Método Ruiz Rivas</span>
        </div>

        <span>Educación · Entrenamiento · Conversación</span>
      </footer>
    </main>
  );
}
