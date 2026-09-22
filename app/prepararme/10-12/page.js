import Link from "next/link";

const pesas = [
  {
    id: "01",
    title: "«MI CUERPO ESTÁ CAMBIANDO»",
    capacity: "PUBERTAD Y CAMBIO",
    kg: "10 KG",
    level: "RECONOCER",
    description:
      "Acompañar los primeros cambios corporales sin convertirlos en un problema, una broma o un interrogatorio.",
    image: "/10-12/pesa01.png",
    href: "/prepararme/10-12/pesa-01",
  },
  {
    id: "02",
    title: "«SOY EL ÚNICO AL QUE NO LE HA PASADO»",
    capacity: "COMPARACIÓN Y RITMOS",
    kg: "10 KG",
    level: "COMPRENDER",
    description:
      "Entrenar una respuesta que reduzca la comparación sin prometer que todos los cuerpos cambian igual ni al mismo tiempo.",
    image: "/10-12/pesa02.png",
    href: "/prepararme/10-12/pesa-02",
  },
  {
    id: "03",
    title: "«CREO QUE ME GUSTA ALGUIEN»",
    capacity: "ATRACCIÓN Y EMOCIONES",
    kg: "10 → 20 KG",
    level: "ACOMPAÑAR",
    description:
      "Recibir una confidencia sin bromear, etiquetar, invadir ni convertirla inmediatamente en una conversación que el menor no pidió.",
    image: "/10-12/pesa03.png",
    href: "/prepararme/10-12/pesa-03",
  },
  {
    id: "04",
    title: "«EN CLASE TODOS HABLAN DE SEXO»",
    capacity: "GRUPO Y CRITERIO",
    kg: "10 → 20 KG",
    level: "CONTRASTAR",
    description:
      "Separar lo que el grupo dice, presume o exagera de lo que realmente se sabe, se quiere y se necesita comprender.",
    image: "/10-12/pesa04.png",
    href: "/prepararme/10-12/pesa-04",
  },
  {
    id: "05",
    title: "«¿QUÉ ES MASTURBARSE?»",
    capacity: "INTIMIDAD Y LENGUAJE",
    kg: "20 KG",
    level: "EXPLICAR",
    description:
      "Responder con lenguaje sencillo y natural, añadiendo intimidad y contexto sin vergüenza ni una explicación innecesariamente extensa.",
    image: "/10-12/pesa05.png",
    href: "/prepararme/10-12/pesa-05",
  },
  {
    id: "06",
    title: "«ME HAN MANDADO UNA FOTO»",
    capacity: "PANTALLAS Y AYUDA",
    kg: "20 KG",
    level: "PROTEGER",
    description:
      "Preservar la confianza cuando aparece contenido íntimo o sexual y enseñar a no compartirlo, salir de la situación y pedir ayuda.",
    image: "/10-12/pesa06.png",
    href: "/prepararme/10-12/pesa-06",
  },
  {
    id: "07",
    title: "«SI DIGO QUE NO, SE VAN A REÍR DE MÍ»",
    capacity: "PRESIÓN DE GRUPO",
    kg: "20 → 30 KG",
    level: "DECIDIR",
    description:
      "Entrenar cómo sostener una decisión propia cuando pertenecer al grupo parece depender de hacer algo que no se quiere.",
    image: "/10-12/pesa07.png",
    href: "/prepararme/10-12/pesa-07",
  },
  {
    id: "08",
    title: "«NO QUIERO HABLAR CONTIGO DE ESO»",
    capacity: "VÍNCULO SIN INVASIÓN",
    kg: "20 → 30 KG",
    level: "SOSTENER",
    description:
      "Aprender a seguir disponible cuando el menor no quiere hablar: respetar espacio sin desaparecer como figura de referencia.",
    image: "/10-12/pesa08.png",
    href: "/prepararme/10-12/pesa-08",
  },
  {
    id: "09",
    title: "«NO SÉ SI ESTO ESTÁ BIEN»",
    capacity: "INTEGRACIÓN",
    kg: "30 KG",
    level: "TRANSFERIR",
    description:
      "Integrar atracción, grupo, móvil, intimidad, límites y petición de ayuda cuando RR ya no te entrega una respuesta preparada.",
    image: "/10-12/pesa09.png",
    href: "/prepararme/10-12/pesa-09",
    featured: true,
  },
];

export default function Gimnasio1012() {
  return (
    <main className="premiumGym">
      <header className="premiumHeader">
        <Link href="/" className="premiumBrand">
          <span className="premiumBrandMark">RR</span>
          <span className="premiumBrandText">
            <b>CRECER</b>
            <small>MÉTODO RUIZ RIVAS</small>
          </span>
        </Link>

        <nav className="premiumNav" aria-label="Navegación principal">
          <Link href="/">Inicio</Link>
          <Link href="/prepararme">Entrenar</Link>
          <Link href="/responder">Pregúntame</Link>
          <Link href="/temas">Temas</Link>
          <Link href="/orientacion">Ha pasado algo</Link>
        </nav>
      </header>

      <section className="premiumGymHero">
        <div className="premiumGymHeroCopy">
          <span className="premiumKicker">10–12 AÑOS · PREPARARSE</span>

          <h1>
            Ya no basta con
            <br />
            <em>tener una respuesta.</em>
          </h1>

          <p className="premiumHeroLead">
            A esta edad el mundo empieza a llegar antes que muchas
            conversaciones familiares.
          </p>

          <p className="premiumHeroText">
            Cambia el cuerpo, aumenta la comparación, el grupo pesa más y las
            pantallas pueden introducir preguntas antes de que el adulto haya
            pensado cómo responderlas. Este gimnasio entrena algo distinto:
            seguir siendo una referencia sin necesitar controlar cada
            conversación.
          </p>

          <div className="premiumGymStats">
            <div>
              <strong>9</strong>
              <span>PESAS</span>
            </div>
            <div>
              <strong>10→30</strong>
              <span>KG</span>
            </div>
            <div>
              <strong>1</strong>
              <span>CRITERIO QUE CRECE</span>
            </div>
          </div>
        </div>

        <aside className="premiumGymHeroPanel">
          <span className="premiumPanelEyebrow">OBJETIVO DEL NIVEL</span>
          <h2>Prepararse antes de necesitar improvisar.</h2>
          <p>
            No entrenamos discursos perfectos. Entrenamos al adulto para
            descubrir qué está ocurriendo, ajustar lo que explica, sostener
            conversaciones incómodas y reconocer cuándo una situación necesita
            protección.
          </p>

          <div className="premiumMethodLine">
            <span>CAMBIO</span>
            <i>→</i>
            <span>GRUPO</span>
            <i>→</i>
            <span>CRITERIO</span>
          </div>
        </aside>
      </section>

      <section className="premiumGymIntro">
        <div>
          <span className="premiumSectionNumber">01</span>
          <div>
            <span className="premiumKicker">TU RECORRIDO</span>
            <h2>Nueve situaciones. Cada vez menos ayuda.</h2>
          </div>
        </div>

        <p>
          Empiezas acompañando cambios relativamente concretos. Terminas ante
          una situación ambigua en la que tendrás que integrar por ti mismo lo
          aprendido.
        </p>
      </section>

      <section className="premiumWeights">
        {pesas.map((pesa) => (
          <Link
            href={pesa.href}
            key={pesa.id}
            className={`premiumWeightCard ${
              pesa.featured ? "premiumWeightFeatured" : ""
            }`}
          >
            <div className="premiumWeightVisual">
              <img src={pesa.image} alt="" />
              <span>PESA {pesa.id}</span>
            </div>

            <div className="premiumWeightNumber">{pesa.id}</div>

            <div className="premiumWeightMeta">
              <span>{pesa.capacity}</span>
              <strong>{pesa.kg}</strong>
              <small>{pesa.level}</small>
            </div>

            <div className="premiumWeightCopy">
              <h3>{pesa.title}</h3>
              <p>{pesa.description}</p>
            </div>

            <div className="premiumWeightArrow" aria-hidden="true">
              →
            </div>
          </Link>
        ))}
      </section>

      <section className="premiumGymMethod">
        <div className="premiumGymMethodHead">
          <span className="premiumSectionNumber">02</span>
          <div>
            <span className="premiumKicker">CÓMO SUBE EL PESO</span>
            <h2>RR va retirando las muletas.</h2>
          </div>
        </div>

        <div className="premiumLevelGrid">
          <article>
            <strong>10 KG</strong>
            <span>RECONOCER</span>
            <p>
              RR hace visibles los elementos de la situación y te ayuda a
              separar lo que ocurre de lo que estás suponiendo.
            </p>
          </article>

          <article>
            <strong>20 KG</strong>
            <span>COMBINAR</span>
            <p>
              Ya tienes que combinar escucha, información, límites, intimidad y
              contexto para construir tu respuesta.
            </p>
          </article>

          <article>
            <strong>30 KG</strong>
            <span>DECIDIR</span>
            <p>
              Aparece un SPOT nuevo. Hay menos instrucciones y debes decidir
              qué necesita la situación antes de actuar.
            </p>
          </article>
        </div>
      </section>

      <section className="premiumGymPrinciple">
        <span className="premiumKicker">PRINCIPIO DEL NIVEL</span>
        <blockquote>
          Cuanto más crece tu hijo, menos podrás controlar lo que escucha,
          ve o piensa.
          <strong> Tu objetivo es que todavía pueda volver a ti.</strong>
        </blockquote>
      </section>

      <section className="premiumGymSafety">
        <div>
          <span className="premiumKicker">CUANDO ENTRENAR NO ES LO PRIMERO</span>
          <h2>Hay situaciones que requieren cambiar de modo.</h2>
        </div>

        <p>
          Si durante una conversación aparecen presión, amenazas, miedo,
          exposición sexual preocupante, contacto no deseado, participación de
          una persona adulta u otros indicios de posible riesgo, la prioridad
          deja de ser completar una Pesa y pasa a ser escuchar, proteger y
          buscar orientación adecuada.
        </p>

        <Link href="/orientacion" className="premiumSecondary">
          IR A · HA PASADO ALGO →
        </Link>
      </section>

      <section className="premiumGymFooter">
        <div>
          <span>RR · CRECER</span>
          <strong>10–12 · PREPARARSE</strong>
        </div>

        <p>
          9 Pesas · 10–30 KG · Del cambio corporal a la construcción de
          criterio.
        </p>

        <Link href="/prepararme" className="premiumSecondary">
          ← VER TODAS LAS EDADES
        </Link>
      </section>
    </main>
  );
}
