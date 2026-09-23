"use client";

import Link from "next/link";

const pesas = [
  {
    n: "01",
    kg: "20 KG",
    capacidad: "SOLTAR",
    titulo: "«YA NO PUEDO DECIDIR ESO POR TI»",
    descripcion:
      "Entrenar el paso de dirigir a acompañar cuando la decisión ya pertenece al joven.",
    href: "/prepararme/16+/pesa-01",
    imagen: "/16+/pesa01.png",
  },
  {
    n: "02",
    kg: "20 KG",
    capacidad: "DISCREPAR",
    titulo: "«NO ESTOY DE ACUERDO CON TU DECISIÓN»",
    descripcion:
      "Mantener criterio propio sin convertir el desacuerdo en control, amenaza o retirada afectiva.",
    href: "/prepararme/16+/pesa-02",
    imagen: "/16+/pesa02.png",
  },
  {
    n: "03",
    kg: "20 → 30 KG",
    capacidad: "RESPONSABILIZARSE",
    titulo: "«ES MI VIDA»",
    descripcion:
      "Distinguir autonomía de ausencia de consecuencias y devolver responsabilidad sin apropiarse de la decisión.",
    href: "/prepararme/16+/pesa-03",
    imagen: "/16+/pesa03.png",
  },
  {
    n: "04",
    kg: "30 KG",
    capacidad: "RELACIONARSE",
    titulo: "«QUIERO IRME A VIVIR CON MI PAREJA»",
    descripcion:
      "Pensar vínculos, convivencia, dependencia y proyecto sin convertir la conversación en permiso o prohibición.",
    href: "/prepararme/16+/pesa-04",
    imagen: "/16+/pesa04.png",
  },
  {
    n: "05",
    kg: "30 KG",
    capacidad: "CUIDARSE",
    titulo: "«NO SIEMPRE USAMOS PROTECCIÓN»",
    descripcion:
      "Sostener conversaciones adultas sobre salud sexual, riesgo y cuidado cuando ya existen decisiones reales.",
    href: "/prepararme/16+/pesa-05",
    imagen: "/16+/pesa05.png",
  },
  {
    n: "06",
    kg: "30 KG",
    capacidad: "DETECTAR",
    titulo: "«SÉ QUE NO ME HACE BIEN, PERO NO PUEDO DEJARLO»",
    descripcion:
      "Acompañar relaciones difíciles sin sustituir la voluntad del joven y reconocer cuándo aumentar protección.",
    href: "/prepararme/16+/pesa-06",
    imagen: "/16+/pesa06.png",
  },
  {
    n: "07",
    kg: "30 KG",
    capacidad: "ASUMIR",
    titulo: "«ME HE EQUIVOCADO»",
    descripcion:
      "Pasar del rescate a la responsabilidad: consecuencias, reparación, aprendizaje y siguiente decisión.",
    href: "/prepararme/16+/pesa-07",
    imagen: "/16+/pesa07.png",
  },
  {
    n: "08",
    kg: "30 KG",
    capacidad: "ESTAR",
    titulo: "«NO QUIERO QUE ME SOLUCIONES NADA»",
    descripcion:
      "Aprender a ser referencia sin convertir cada problema en una intervención.",
    href: "/prepararme/16+/pesa-08",
    imagen: "/16+/pesa08.png",
  },
  {
    n: "09",
    kg: "30 KG",
    capacidad: "TRANSFERIR",
    titulo: "«NECESITO DECIDIR QUÉ HACER CON MI VIDA»",
    descripcion:
      "Integración final: acompañar una decisión compleja sin ocupar el volante ni abandonar el vínculo.",
    href: "/prepararme/16+/pesa-09",
    imagen: "/16+/pesa09.png",
  },
];

export default function Gimnasio16Plus() {
  return (
    <main className="gymPage rrStage">
      <header className="gymHeader">
        <Link href="/" className="gymBrand">
          <span className="gymBrandMark">RR</span>
          <span>
            <strong>CRECER</strong>
            <small>MÉTODO RUIZ RIVAS</small>
          </span>
        </Link>

        <nav className="gymNav">
          <Link href="/">Inicio</Link>
          <Link href="/prepararme">Entrenar</Link>
          <Link href="/responder">Pregúntame</Link>
          <Link href="/temas">Temas</Link>
          <Link href="/orientacion">Ha pasado algo</Link>
        </nav>
      </header>

      <section className="gymHero">
        <div className="gymHeroEyebrow">
          <span>16+</span>
          <span>RESPONSABILIZARSE</span>
        </div>

        <h1>
          Ya no conduces.
          <br />
          <em>Pero todavía puedes ser referencia.</em>
        </h1>

        <p>
          A medida que aumenta su autonomía, cambia tu trabajo. Ya no se trata
          de conseguir que tome la decisión que tú tomarías, sino de ayudarle a
          pensar, asumir consecuencias, cuidarse, reparar cuando se equivoca y
          saber que puede volver a hablar contigo sin entregarte el volante.
        </p>

        <div className="gymHeroPrinciple">
          <span>PRINCIPIO DE ETAPA</span>
          <strong>
            Su vida es cada vez más suya. Tu presencia puede seguir teniendo
            valor sin convertirse en control.
          </strong>
        </div>
      </section>

      <section className="gymIntro">
        <span className="gymSectionTag">EL CAMBIO DE PAPEL</span>
        <h2>De dirigir decisiones a sostener criterio.</h2>

        <div className="gymMethodGrid">
          <article>
            <span>01</span>
            <strong>ESCUCHAR</strong>
            <p>
              Comprender qué decisión existe antes de ofrecer la que tú
              tomarías.
            </p>
          </article>

          <article>
            <span>02</span>
            <strong>CONTRASTAR</strong>
            <p>
              Aportar preguntas, información y perspectiva sin apropiarte de la
              elección.
            </p>
          </article>

          <article>
            <span>03</span>
            <strong>DEVOLVER</strong>
            <p>
              Recordar que autonomía también significa asumir consecuencias.
            </p>
          </article>

          <article>
            <span>04</span>
            <strong>ESTAR</strong>
            <p>
              Seguir disponible incluso cuando no elige lo que tú preferirías.
            </p>
          </article>

          <article>
            <span>05</span>
            <strong>PROTEGER</strong>
            <p>
              Aumentar intervención cuando aparecen señales reales de peligro,
              coerción, violencia o explotación.
            </p>
          </article>
        </div>
      </section>

      <section className="gymWeights">
        <div className="gymSectionHeading">
          <div>
            <span className="gymSectionTag">9 PESAS · 16+</span>
            <h2>RESPONSABILIZARSE</h2>
          </div>

          <p>
            La dificultad ya no aumenta porque haya más teoría. Aumenta porque
            el adulto tiene que intervenir menos y tolerar mejor que una buena
            decisión no siempre sea exactamente su decisión.
          </p>
        </div>

        <div className="gymWeightsGrid">
          {pesas.map((pesa) => (
            <Link href={pesa.href} className="gymWeightCard" key={pesa.n}>
              <div className="gymWeightImage">
                <img src={pesa.imagen} alt={pesa.titulo} />
                <span className="gymWeightNumber">{pesa.n}</span>
                <span className="gymWeightKg">{pesa.kg}</span>
              </div>

              <div className="gymWeightBody">
                <span className="gymWeightCapacity">{pesa.capacidad}</span>
                <h3>{pesa.titulo}</h3>
                <p>{pesa.descripcion}</p>
                <span className="gymWeightAction">
                  ENTRENAR <b>→</b>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="gymProgression">
        <span className="gymSectionTag">PROGRESIÓN RR</span>
        <h2>La retirada de ayuda también se entrena.</h2>

        <div className="gymProgressionLine">
          <div>
            <span>20 KG</span>
            <strong>CAMBIAR DE PAPEL</strong>
            <p>
              Aprendes a no confundir acompañar con seguir decidiendo.
            </p>
          </div>

          <div>
            <span>30 KG</span>
            <strong>SOSTENER AUTONOMÍA</strong>
            <p>
              Puedes discrepar, aportar criterio y seguir presente sin
              apropiarte del resultado.
            </p>
          </div>

          <div>
            <span>TRANSFERENCIA</span>
            <strong>SER REFERENCIA</strong>
            <p>
              El joven trae un problema nuevo y tú ya no necesitas un guion
              específico para acompañarlo.
            </p>
          </div>
        </div>
      </section>

      <section className="gymSafety">
        <div>
          <span>CUANDO ACOMPAÑAR NO BASTA</span>
          <h2>Autonomía no significa mirar hacia otro lado ante el peligro.</h2>
          <p>
            Si aparecen violencia, amenazas, coerción, explotación, miedo,
            lesiones, control grave, difusión de imágenes íntimas u otras
            señales de riesgo, el objetivo cambia: primero protección y
            orientación adecuada.
          </p>
        </div>

        <Link href="/orientacion" className="gymSafetyButton">
          HA PASADO ALGO →
        </Link>
      </section>

      <section className="gymClosing">
        <span>16+ · RESPONSABILIZARSE</span>
        <h2>
          Llegará un momento en que no puedas elegir por él.
          <br />
          <em>Eso no significa que hayas dejado de tener un lugar.</em>
        </h2>
        <p>
          El objetivo final no es que necesite preguntarte qué hacer para cada
          decisión. Es que pueda pensar mejor, hacerse cargo de lo que elige y
          saber que puede volver a ti cuando necesite perspectiva, apoyo o ayuda.
        </p>

        <Link href="/prepararme/16+/pesa-01" className="gymStartButton">
          EMPEZAR PESA 01 →
        </Link>
      </section>
    </main>
  );
}
