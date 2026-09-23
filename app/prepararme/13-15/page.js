"use client";

import Link from "next/link";

const pesas = [
  {
    id: "01",
    kg: "10 → 20 KG",
    nivel: "RECONOCER",
    capacidad: "DESEO, INCERTIDUMBRE Y RECHAZO",
    titulo: "«ME GUSTA, PERO NO SÉ SI YO LE GUSTO»",
    descripcion:
      "Acompañar atracción e incertidumbre sin convertirlas en una misión para conseguir a la otra persona.",
    imagen: "/13-15/pesa01.png",
    href: "/prepararme/13-15/pesa-01",
  },
  {
    id: "02",
    kg: "20 KG",
    nivel: "ACOMPAÑAR",
    capacidad: "RELACIONES Y LÍMITES",
    titulo: "«ESTAMOS SALIENDO»",
    descripcion:
      "Seguir siendo referencia cuando aparece una relación sin invadirla, ridiculizarla ni dirigirla.",
    imagen: "/13-15/pesa02.png",
    href: "/prepararme/13-15/pesa-02",
  },
  {
    id: "03",
    kg: "20 KG",
    nivel: "COMPRENDER",
    capacidad: "CONSENTIMIENTO",
    titulo: "«¿CÓMO SÉ SI LA OTRA PERSONA QUIERE?»",
    descripcion:
      "Entrenar un criterio de consentimiento que no dependa de adivinar silencios, gestos o ausencia de resistencia.",
    imagen: "/13-15/pesa03.png",
    href: "/prepararme/13-15/pesa-03",
  },
  {
    id: "04",
    kg: "20 → 30 KG",
    nivel: "CONTRASTAR",
    capacidad: "PRESIÓN, COMPARACIÓN Y SEXO",
    titulo: "«TODOS DICEN QUE YA LO HAN HECHO»",
    descripcion:
      "Separar lo que el grupo cuenta de lo que realmente ocurre y evitar convertir comparación en calendario.",
    imagen: "/13-15/pesa04.png",
    href: "/prepararme/13-15/pesa-04",
  },
  {
    id: "05",
    kg: "20 → 30 KG",
    nivel: "DECIDIR",
    capacidad: "INTIMIDAD DIGITAL",
    titulo: "«ME HA PEDIDO UNA FOTO»",
    descripcion:
      "Pensar privacidad, confianza, permanencia digital y presión antes de que una decisión íntima salga de su control.",
    imagen: "/13-15/pesa05.png",
    href: "/prepararme/13-15/pesa-05",
  },
  {
    id: "06",
    kg: "30 KG",
    nivel: "DETECTAR",
    capacidad: "PRESIÓN EMOCIONAL",
    titulo: "«SI CONFÍAS EN MÍ, DEMUÉSTRAMELO»",
    descripcion:
      "Reconocer cuándo afecto, confianza o miedo a perder una relación empiezan a utilizarse para empujar una decisión.",
    imagen: "/13-15/pesa06.png",
    href: "/prepararme/13-15/pesa-06",
  },
  {
    id: "07",
    kg: "30 KG",
    nivel: "DECIDIR",
    capacidad: "SEXUALIDAD Y CUIDADO",
    titulo: "«CREO QUE QUIERO HACERLO»",
    descripcion:
      "Acompañar una decisión íntima sin sustituirla: deseo, consentimiento, preparación, cuidado y posibilidad real de parar.",
    imagen: "/13-15/pesa07.png",
    href: "/prepararme/13-15/pesa-07",
  },
  {
    id: "08",
    kg: "30 KG",
    nivel: "SOSTENER",
    capacidad: "AUTONOMÍA Y VÍNCULO",
    titulo: "«NO QUIERO CONTARTE TODO»",
    descripcion:
      "Aceptar que crecer incluye intimidad propia y aprender a seguir cerca sin exigir acceso total.",
    imagen: "/13-15/pesa08.png",
    href: "/prepararme/13-15/pesa-08",
  },
  {
    id: "09",
    kg: "30 KG",
    nivel: "TRANSFERIR",
    capacidad: "INTEGRACIÓN",
    titulo: "«HE HECHO ALGO Y NO SÉ QUÉ HACER»",
    descripcion:
      "Integrar vínculo, decisión, presión, consentimiento, intimidad digital, cuidado y protección cuando ya no hay guion.",
    imagen: "/13-15/pesa09.png",
    href: "/prepararme/13-15/pesa-09",
    featured: true,
  },
];

export default function GimnasioDecidir1315() {
  return (
    <main className="premiumGymPage rrStage">
      <header className="premiumGymHeader">
        <Link href="/" className="premiumGymBrand" aria-label="RR Crecer, inicio">
          <span className="premiumGymMark">RR</span>
          <span className="premiumGymBrandText">
            <b>CRECER</b>
            <small>MÉTODO RUIZ RIVAS</small>
          </span>
        </Link>

        <nav className="premiumGymNav" aria-label="Navegación">
          <Link href="/">Inicio</Link>
          <Link href="/prepararme">Etapas</Link>
          <Link href="/orientacion">Ha pasado algo</Link>
        </nav>
      </header>

      <section className="premiumGymHero">
        <div className="premiumGymHeroCopy">
          <span className="premiumEyebrow">13–15 AÑOS · DECIDIR</span>

          <h1>
            Ya no basta con saber
            <em> qué está bien.</em>
          </h1>

          <p className="premiumGymLead">
            Empiezan decisiones que ocurren fuera de tu mirada: relaciones,
            deseo, grupo, intimidad, pantallas y límites. Tu papel cambia. No
            puedes decidir cada vez más cosas por él, pero todavía puedes
            ayudarle a construir el criterio con el que decidirá.
          </p>

          <div className="premiumGymHeroActions">
            <Link
              href="/prepararme/13-15/pesa-01"
              className="premiumPrimaryButton"
            >
              EMPEZAR PESA 01 <span>→</span>
            </Link>

            <a href="#pesas" className="premiumSecondaryButton">
              VER LAS 9 PESAS
            </a>
          </div>
        </div>

        <aside className="premiumGymHeroPanel">
          <span>CAMBIO DE ETAPA</span>
          <strong>DE PREPARARSE A DECIDIR</strong>
          <p>
            En 10–12 entrenábamos cómo moverse por un mundo que el adulto ya no
            controla del todo. En 13–15 aparece otro salto: elegir dentro de ese
            mundo.
          </p>

          <div className="premiumGymScale">
            <span>20 KG</span>
            <div />
            <span>30 KG</span>
          </div>
        </aside>
      </section>

      <section className="premiumGymPrinciple">
        <span>PRINCIPIO DE ESTA ETAPA</span>
        <blockquote>
          Tu objetivo no es conseguir que tome siempre la decisión que tú
          tomarías.
          <strong>
            {" "}
            Es ayudarle a reconocer qué está decidiendo, por qué y qué
            consecuencias puede tener.
          </strong>
        </blockquote>
      </section>

      <section className="premiumGymIntro">
        <div>
          <span>EL NUEVO RETO</span>
          <h2>Menos control. Más criterio.</h2>
        </div>

        <p>
          Una prohibición puede funcionar mientras tú estás delante. El
          entrenamiento busca algo más difícil: que pueda pensar cuando está con
          su pareja, con amigos, frente a una pantalla o ante una decisión que
          no te contará antes de tomarla.
        </p>
      </section>

      <section className="premiumWeightsSection" id="pesas">
        <div className="premiumSectionHeading">
          <div>
            <span>GIMNASIO RR · 13–15</span>
            <h2>9 Pesas para entrenar DECIDIR.</h2>
          </div>

          <p>
            La dificultad aumenta hasta 30 KG. Cada vez habrá menos frases
            preparadas y más situaciones en las que tendrás que construir el
            criterio.
          </p>
        </div>

        <div className="premiumWeightsList">
          {pesas.map((pesa) => (
            <Link
              href={pesa.href}
              key={pesa.id}
              className={`premiumWeightCard ${
                pesa.featured ? "featured" : ""
              }`}
            >
              <div className="premiumWeightVisual">
                <img src={pesa.imagen} alt="" />
                <div className="premiumWeightVisualShade" />
                <span>PESA {pesa.id}</span>
              </div>

              <div className="premiumWeightNumber">{pesa.id}</div>

              <div className="premiumWeightMeta">
                <span>{pesa.kg}</span>
                <small>{pesa.nivel}</small>
              </div>

              <div className="premiumWeightContent">
                <span>{pesa.capacidad}</span>
                <h3>{pesa.titulo}</h3>
                <p>{pesa.descripcion}</p>
              </div>

              <div className="premiumWeightArrow">→</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="premiumGymJourney">
        <div className="premiumSectionHeading">
          <div>
            <span>PROGRESIÓN</span>
            <h2>Lo que va cambiando dentro del gimnasio.</h2>
          </div>
        </div>

        <div className="premiumJourneyGrid">
          <article>
            <span>01</span>
            <strong>DESEO</strong>
            <p>
              Puedo sentir algo sin convertirlo automáticamente en una obligación
              de conseguir, demostrar o actuar.
            </p>
          </article>

          <article>
            <span>02</span>
            <strong>RELACIÓN</strong>
            <p>
              Una relación no elimina mis límites ni los de la otra persona.
            </p>
          </article>

          <article>
            <span>03</span>
            <strong>CONSENTIMIENTO</strong>
            <p>
              No necesito adivinar. Puedo preguntar, escuchar y aceptar un cambio
              de decisión.
            </p>
          </article>

          <article>
            <span>04</span>
            <strong>GRUPO</strong>
            <p>
              Lo que otros dicen haber hecho no tiene por qué convertirse en mi
              calendario.
            </p>
          </article>

          <article>
            <span>05</span>
            <strong>INTIMIDAD</strong>
            <p>
              Antes de compartir algo privado puedo pensar qué control perderé
              después de enviarlo.
            </p>
          </article>

          <article>
            <span>06</span>
            <strong>PRESIÓN</strong>
            <p>
              El afecto no convierte una presión en consentimiento ni una prueba
              de amor en obligación.
            </p>
          </article>

          <article>
            <span>07</span>
            <strong>DECISIÓN</strong>
            <p>
              Querer algo es una parte de decidir. También importan preparación,
              cuidado, contexto y consecuencias.
            </p>
          </article>

          <article>
            <span>08</span>
            <strong>AUTONOMÍA</strong>
            <p>
              Puedo tener intimidad propia y seguir teniendo adultos a los que
              acudir.
            </p>
          </article>

          <article>
            <span>09</span>
            <strong>TRANSFERENCIA</strong>
            <p>
              Cuando la situación no se parece a ningún ejemplo, utilizo el
              criterio entrenado para construir el siguiente paso.
            </p>
          </article>
        </div>
      </section>

      <section className="premiumGymMethod">
        <div>
          <span>¿QUÉ ENTRENA EL ADULTO?</span>
          <h2>No dirigir cada decisión.</h2>
        </div>

        <div className="premiumMethodSteps">
          <article>
            <span>01</span>
            <strong>RECIBIR</strong>
            <p>
              Conseguir que una confidencia no se convierta inmediatamente en
              juicio, sermón o interrogatorio.
            </p>
          </article>

          <article>
            <span>02</span>
            <strong>DESCUBRIR</strong>
            <p>
              Saber qué está ocurriendo antes de responder a la película que
              construye la cabeza adulta.
            </p>
          </article>

          <article>
            <span>03</span>
            <strong>CONTRASTAR</strong>
            <p>
              Separar deseo, presión, miedo, información, suposiciones y
              consecuencias.
            </p>
          </article>

          <article>
            <span>04</span>
            <strong>DEVOLVER DECISIÓN</strong>
            <p>
              Ayudar a pensar sin convertir «acompañar» en elegir por la otra
              persona.
            </p>
          </article>

          <article>
            <span>05</span>
            <strong>PROTEGER</strong>
            <p>
              Reconocer cuándo autonomía no significa dejar solo y es necesario
              aumentar el cuidado.
            </p>
          </article>
        </div>
      </section>

      <section className="premiumSafetyBlock">
        <div>
          <span>PUENTE DE SEGURIDAD</span>
          <h2>Hay situaciones que dejan de ser entrenamiento.</h2>
        </div>

        <p>
          Si aparecen amenazas, coerción, miedo, difusión de contenido íntimo,
          una diferencia de edad o poder preocupante, violencia, participación
          de adultos u otras señales de riesgo, el objetivo cambia: escuchar,
          proteger y buscar orientación adecuada.
        </p>

        <Link href="/orientacion" className="premiumSafetyButton">
          HA PASADO ALGO <span>→</span>
        </Link>
      </section>

      <section className="premiumGymClosing">
        <span>13–15 · DECIDIR</span>
        <h2>
          No podrás tomar todas sus decisiones.
          <em> Sí puedes ayudarle a construir con qué decidirlas.</em>
        </h2>

        <Link
          href="/prepararme/13-15/pesa-01"
          className="premiumPrimaryButton"
        >
          EMPEZAR EL GIMNASIO <span>→</span>
        </Link>
      </section>

      <footer className="premiumGymFooter">
        <div>
          <strong>RR · CRECER</strong>
          <span>Un proyecto del Método Ruiz Rivas</span>
        </div>

        <div>
          <Link href="/">Inicio</Link>
          <Link href="/prepararme">Etapas</Link>
          <Link href="/orientacion">Ha pasado algo</Link>
        </div>
      </footer>
    </main>
  );
}
