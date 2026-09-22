import Link from "next/link";

const pesas = [
  {
    id: "01",
    imagen: "/4-6/pesa01.png",
    kg: "5 KG",
    nivel: "DESCUBRIR",
    titulo: "¿POR QUÉ YO TENGO PENE Y ELLA NO?",
    capacidad: "Conocer y nombrar el cuerpo",
    descripcion:
      "Entrena cómo responder a las primeras comparaciones corporales con palabras claras, sencillas y sin convertir el cuerpo en algo vergonzoso.",
    aprendizaje: "El cuerpo puede conocerse y nombrarse con naturalidad.",
    href: "/prepararme/4-6/pesa-01",
  },
  {
    id: "02",
    imagen: "/4-6/pesa02.png",
    kg: "5 KG",
    nivel: "DESCUBRIR",
    titulo: "NO QUIERO DARLE UN BESO",
    capacidad: "Autonomía corporal",
    descripcion:
      "Aprende a acompañar un no corporal sin confundir educación, cariño y obligación de besar, abrazar o dejarse tocar.",
    aprendizaje: "Mi cuerpo también puede decir no.",
    href: "/prepararme/4-6/pesa-02",
  },
  {
    id: "03",
    imagen: "/4-6/pesa03.png",
    kg: "5 → 10 KG",
    nivel: "RECONOCER",
    titulo: "¿POR QUÉ CIERRAS LA PUERTA?",
    capacidad: "Intimidad sin vergüenza",
    descripcion:
      "Entrena cómo explicar la privacidad como una necesidad normal sin presentar el cuerpo, el baño o cambiarse de ropa como algo malo.",
    aprendizaje: "Privado no significa malo.",
    href: "/prepararme/4-6/pesa-03",
  },
  {
    id: "04",
    imagen: "/4-6/pesa04.png",
    kg: "5 → 10 KG",
    nivel: "RECONOCER",
    titulo: "MIRA MI CULO",
    capacidad: "Cuerpo, humor y contexto",
    descripcion:
      "Trabaja esas risas y juegos infantiles alrededor del cuerpo para enseñar contexto y respeto sin reaccionar con vergüenza o dramatismo.",
    aprendizaje: "Algo puede hacer gracia y seguir necesitando un límite.",
    href: "/prepararme/4-6/pesa-04",
  },
  {
    id: "05",
    imagen: "/4-6/pesa05.png",
    kg: "10 KG",
    nivel: "RECONOCER",
    titulo: "¿PUEDO TOCARLO?",
    capacidad: "Curiosidad y permiso",
    descripcion:
      "Entrena una diferencia esencial: sentir curiosidad por otro cuerpo no significa tener permiso para tocarlo.",
    aprendizaje: "Curiosidad y permiso son cosas diferentes.",
    href: "/prepararme/4-6/pesa-05",
  },
  {
    id: "06",
    imagen: "/4-6/pesa06.png",
    kg: "10 KG",
    nivel: "COMBINAR",
    titulo: "ME DIJO QUE ERA UN SECRETO",
    capacidad: "Secretos y pedir ayuda",
    descripcion:
      "Aprende a diferenciar sorpresas, privacidad y secretos que hacen sentir mal, manteniendo abierta la posibilidad de acudir a un adulto.",
    aprendizaje: "Siempre puedo pedir ayuda.",
    href: "/prepararme/4-6/pesa-06",
  },
  {
    id: "07",
    imagen: "/4-6/pesa07.png",
    kg: "10 KG",
    nivel: "COMBINAR",
    titulo: "¿DE DÓNDE SALEN LOS BEBÉS?",
    capacidad: "Verdad sencilla y progresiva",
    descripcion:
      "Entrena cómo descubrir qué está preguntando realmente y responder con una verdad comprensible sin adelantar una explicación que no necesita.",
    aprendizaje: "Verdad suficiente. Una pregunta cada vez.",
    href: "/prepararme/4-6/pesa-07",
  },
  {
    id: "08",
    imagen: "/4-6/pesa08.png",
    kg: "10 → 20 KG",
    nivel: "COMBINAR",
    titulo: "HE VISTO A MAMÁ / PAPÁ DESNUDO",
    capacidad: "Desnudez, cuerpo e intimidad",
    descripcion:
      "Integra naturalidad corporal y privacidad para evitar dos extremos: convertir la desnudez en algo malo o enseñar que los límites no importan.",
    aprendizaje: "El cuerpo es normal. La intimidad también.",
    href: "/prepararme/4-6/pesa-08",
  },
  {
    id: "09",
    imagen: "/4-6/pesa09.png",
    kg: "20 KG",
    nivel: "INTEGRAR",
    titulo: "INTEGRACIÓN",
    capacidad: "Cuerpo, límites y pedir ayuda",
    descripcion:
      "Una situación reúne curiosidad, contacto, secretos y límites. RR retira ayuda para que reconozcas qué necesita el momento y cuándo toca proteger.",
    aprendizaje: "No memorizar respuestas. Reconocer qué necesita la situación.",
    href: "/prepararme/4-6/pesa-09",
  },
];

export default function Descubrir46() {
  return (
    <main className="premiumGymPage">
      <header className="header premiumHeader">
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

      <section className="premiumGymHero">
        <div className="premiumGymHeroInner">
          <div className="premiumGymHeroCopy">
            <div className="premiumKicker">
              <span>4–6 AÑOS</span>
              <i />
              <span>DESCUBRIR</span>
            </div>

            <h1>
              Las primeras preguntas
              <span> también educan.</span>
            </h1>

            <p>
              Entrena cómo acompañar la curiosidad sobre el cuerpo, los nombres,
              la intimidad y los límites sin transmitir vergüenza y sin perder
              de vista la protección.
            </p>

            <Link href="/prepararme/4-6/pesa-01" className="premiumPrimary">
              EMPEZAR PESA 01 <span>→</span>
            </Link>
          </div>

          <div className="premiumGymProgress">
            <div className="premiumGymProgressTop">
              <span>RECORRIDO · DESCUBRIR</span>
              <strong>9 PESAS</strong>
            </div>

            <div className="premiumGymProgressNumber">
              <span>01</span>
              <small>/ 09</small>
            </div>

            <div className="premiumGymProgressTrack">
              <i />
            </div>

            <p>
              Empiezas con situaciones muy guiadas. Poco a poco RR deja de darte
              la respuesta para que aprendas a reconocer qué necesita cada
              conversación.
            </p>

            <div className="premiumGymScale">
              <span>5 KG</span>
              <i />
              <span>10 KG</span>
              <i />
              <span>20 KG</span>
            </div>
          </div>
        </div>
      </section>

      <section className="premiumGymWeights">
        <div className="premiumGymHeading">
          <div>
            <div className="sectionTag">GIMNASIO RR · CRECER</div>
            <h2>
              Primero acompañamos.
              <span> Después retiramos ayuda.</span>
            </h2>
          </div>

          <p>
            Cada Pesa nace de una situación cotidiana. El objetivo no es
            memorizar una frase correcta, sino aprender qué mirar antes de
            responder.
          </p>
        </div>

        <div className="premiumWeightList">
          {pesas.map((pesa) => (
            <Link
              className={`premiumWeightCard ${
                pesa.id === "09" ? "premiumWeightCardFeatured" : ""
              }`}
              href={pesa.href}
              key={pesa.id}
            >
              <div className="premiumWeightVisual">
                <img
                  src={pesa.imagen}
                  alt={`Imagen del entrenamiento ${pesa.id}: ${pesa.titulo}`}
                />
                <span>PESA {pesa.id}</span>
              </div>

              <div className="premiumWeightId">
                <small>PESA</small>
                <strong>{pesa.id}</strong>
              </div>

              <div className="premiumWeightMeta">
                <span>{pesa.nivel}</span>
                <b>{pesa.kg}</b>
              </div>

              <div className="premiumWeightContent">
                <span>{pesa.capacidad}</span>
                <h3>{pesa.titulo}</h3>
                <p>{pesa.descripcion}</p>
                <strong className="premiumWeightLearning">
                  {pesa.aprendizaje}
                </strong>
              </div>

              <div className="premiumWeightAction">
                <span>ENTRENAR</span>
                <b>→</b>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="premiumGymMethod">
        <div className="premiumGymMethodCopy">
          <div className="sectionTag">PROGRESIÓN RR</div>

          <h2>
            A esta edad no necesitamos grandes discursos.
            <span> Necesitamos buenos criterios.</span>
          </h2>

          <p>
            RR empieza ayudándote mucho. Después te pide que distingas
            curiosidad, intimidad, límites y situaciones en las que pedir ayuda
            es más importante que continuar una explicación.
          </p>

          <blockquote>
            Subir de peso no significa hablar de temas más adultos.
            <strong> Significa necesitar menos ayuda para responder bien.</strong>
          </blockquote>
        </div>

        <div className="premiumGymLevels">
          <div>
            <span>01</span>
            <strong>5 KG</strong>
            <b>DESCUBRIR</b>
            <p>RR te ayuda a observar qué está preguntando realmente.</p>
          </div>

          <div>
            <span>02</span>
            <strong>10 KG</strong>
            <b>RECONOCER</b>
            <p>Empiezas a distinguir el criterio detrás de la situación.</p>
          </div>

          <div>
            <span>03</span>
            <strong>20 KG</strong>
            <b>INTEGRAR</b>
            <p>Combinas aprendizajes y decides con mucha menos ayuda.</p>
          </div>
        </div>
      </section>

      <section className="premiumGymBodies">
        <div>
          <span>MI CUERPO</span>
          <h2>Puedo conocerlo y poner límites.</h2>
          <p>Nombrar, preguntar y decir que no también forman parte del aprendizaje.</p>
        </div>

        <div className="premiumGymBodiesMark">RR</div>

        <div>
          <span>TU CUERPO</span>
          <h2>También merece respeto.</h2>
          <p>Mi curiosidad nunca convierte el cuerpo de otra persona en algo disponible.</p>
        </div>
      </section>

      <section className="premiumGymPrinciple">
        <div className="premiumGymPrincipleMark">RR</div>

        <div>
          <span>PRINCIPIO RR · CRECER</span>
          <h2>
            No queremos que un niño aprenda que preguntar sobre su cuerpo está mal.
          </h2>
          <p>
            Queremos que pueda conocerlo, cuidarlo, respetar otros cuerpos y
            acudir a un adulto cuando algo le preocupa, le confunde o le hace
            sentir incómodo.
          </p>
        </div>
      </section>

      <section className="premiumGymSafety">
        <div className="premiumGymSafetyIcon">!</div>

        <div>
          <span>CUANDO ENTRENAR NO ES SUFICIENTE</span>
          <h2>También entrenamos cuándo pedir ayuda.</h2>

          <p>
            Si una situación puede implicar abuso, coerción, violencia,
            explotación, amenazas o riesgo para un menor, RR · Crecer deja de
            tratarla como un simple entrenamiento educativo.
          </p>

          <small>
            RR · Crecer es una herramienta educativa y no sustituye atención
            médica, psicológica ni servicios de protección infantil.
          </small>
        </div>
      </section>

      <section className="premiumGymClosing">
        <span>4–6 · DESCUBRIR</span>
        <p>Nueve Pesas. Cada vez menos ayuda.</p>
        <h2>Las primeras preguntas también construyen criterio.</h2>

        <Link href="/prepararme/4-6/pesa-01" className="premiumPrimary">
          EMPEZAR PESA 01 <span>→</span>
        </Link>
      </section>

      <footer className="premiumFooter">
        <div>
          <strong>RR · CRECER</strong>
          <span>Un proyecto del Método Ruiz Rivas</span>
        </div>

        <span>4–6 · DESCUBRIR · 9 PESAS · 5–20 KG</span>
      </footer>
    </main>
  );
}
