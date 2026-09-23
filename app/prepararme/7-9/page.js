import Link from "next/link";

const pesas = [
  {
    id: "01",
    imagen: "/pesa01.png",
    kg: "5 → 10 KG",
    nivel: "DESCUBRIR",
    titulo: "PAPÁ, ¿QUÉ SIGNIFICA...?",
    capacidad: "Preguntas inesperadas",
    descripcion:
      "Aprende a descubrir qué quiere saber realmente antes de lanzarte a explicar.",
    aprendizaje: "Descubre primero la pregunta real.",
    href: "/prepararme/7-9/pesa-01",
  },
  {
    id: "02",
    imagen: "/pesa02.png",
    kg: "5 → 10 KG",
    nivel: "DESCUBRIR",
    titulo: "DALE UN BESO",
    capacidad: "Cuerpo y límites",
    descripcion:
      "Entrena cómo enseñar autonomía corporal sin confundir educación, cariño y contacto físico obligatorio.",
    aprendizaje: "Mi límite importa. El del otro también.",
    href: "/prepararme/7-9/pesa-02",
  },
  {
    id: "03",
    imagen: "/pesa03.png",
    kg: "5 → 10 KG",
    nivel: "DESCUBRIR",
    titulo: "ES NUESTRO SECRETO",
    capacidad: "Secretos y pedir ayuda",
    descripcion:
      "Diferencia privacidad, sorpresas y secretos manteniendo siempre abierta la posibilidad de pedir ayuda.",
    aprendizaje: "Pedir ayuda siempre debe seguir siendo posible.",
    href: "/prepararme/7-9/pesa-03",
  },
  {
    id: "04",
    imagen: "/pesa04.png",
    kg: "5 → 10 KG",
    nivel: "RECONOCER",
    titulo: "¿POR QUÉ NO PUEDO ENTRAR?",
    capacidad: "Intimidad sin vergüenza",
    descripcion:
      "Aprende a enseñar intimidad y respeto por los espacios privados sin presentar el cuerpo como algo malo.",
    aprendizaje: "Privado no significa malo.",
    href: "/prepararme/7-9/pesa-04",
  },
  {
    id: "05",
    imagen: "/pesa05.png",
    kg: "5 → 10 KG",
    nivel: "RECONOCER",
    titulo: "¿DE DÓNDE VIENEN LOS BEBÉS?",
    capacidad: "Reproducción",
    descripcion:
      "Entrena cómo responder con verdad y ajustar la profundidad a lo que realmente quiere comprender.",
    aprendizaje: "Verdad suficiente. Profundidad progresiva.",
    href: "/prepararme/7-9/pesa-05",
  },
  {
    id: "06",
    imagen: "/pesa06.png",
    kg: "5 → 10 KG",
    nivel: "RECONOCER",
    titulo: "¿POR QUÉ SE LLAMA PENE / VULVA?",
    capacidad: "Nombrar el cuerpo",
    descripcion:
      "Entrena cómo hablar de las partes del cuerpo con claridad, precisión y naturalidad.",
    aprendizaje: "El cuerpo puede nombrarse sin vergüenza.",
    href: "/prepararme/7-9/pesa-06",
  },
  {
    id: "07",
    imagen: "/pesa07.png",
    kg: "10 → 20 KG",
    nivel: "COMBINAR",
    titulo: "ME HA SALIDO ESTO EN EL MÓVIL",
    capacidad: "Pantallas y contenido inesperado",
    descripcion:
      "Entrena qué hacer cuando aparece contenido para el que no estaba preparado sin cerrar la comunicación.",
    aprendizaje: "Comprender primero. Proteger después.",
    href: "/prepararme/7-9/pesa-07",
  },
  {
    id: "08",
    imagen: "/pesa08.png",
    kg: "20 → 30 KG",
    nivel: "DECIDIR",
    titulo: "INTEGRACIÓN",
    capacidad: "Transferir lo aprendido",
    descripcion:
      "Integra límites, presión, secretos, pantallas y seguridad. RR retira ayuda y te obliga a decidir cuándo seguir educando y cuándo proteger.",
    aprendizaje: "Reconoce el criterio y también cuándo pedir ayuda.",
    href: "/prepararme/7-9/pesa-08",
  },
  {
    id: "09",
    imagen: "/pesa09.png",
    kg: "10 → 20 → 30 KG",
    nivel: "TRANSFERIR",
    titulo: "¿POR QUÉ HACE ESOS RUIDOS?",
    capacidad: "Imitación, grupo y sexualidad",
    descripcion:
      "Entrena cómo responder cuando la sexualidad aparece a través de otros niños, la imitación y las risas del grupo.",
    aprendizaje:
      "No saber no me obliga a reírme, imitar ni inventar. Puedo preguntar.",
    href: "/prepararme/7-9/pesa-09",
  },
];

export default function Comprender79() {
  return (
    <main className="premiumGymPage rrStage">
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
              <span>7–9 AÑOS</span>
              <i />
              <span>COMPRENDER</span>
            </div>

            <h1>
              No tienes que preparar
              <span> todas las respuestas.</span>
            </h1>

            <p>
              Entrena criterios para hablar sobre el cuerpo, los límites, la
              intimidad, la reproducción, las pantallas, el grupo y cómo pedir
              ayuda.
            </p>

            <Link href="/prepararme/7-9/pesa-01" className="premiumPrimary">
              EMPEZAR PESA 01 <span>→</span>
            </Link>
          </div>

          <div className="premiumGymProgress">
            <div className="premiumGymProgressTop">
              <span>RECORRIDO · COMPRENDER</span>
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
              Empiezas con situaciones guiadas. RR irá retirando ayuda hasta
              que puedas reconocer el criterio y construir tu propia respuesta.
            </p>

            <div className="premiumGymScale">
              <span>5 KG</span>
              <i />
              <span>10 KG</span>
              <i />
              <span>20 KG</span>
              <i />
              <span>30 KG</span>
            </div>
          </div>
        </div>
      </section>

      <section className="premiumGymWeights">
        <div className="premiumGymHeading">
          <div>
            <div className="sectionTag">GIMNASIO RR · CRECER</div>
            <h2>
              La ayuda disminuye.
              <span> El criterio empieza a ser tuyo.</span>
            </h2>
          </div>

          <p>
            Cada Pesa parte de una situación que podría ocurrir mañana. No
            entrenas una frase: entrenas qué mirar, qué preguntar y cómo
            decidir.
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
            No aumentamos teoría.
            <span> Retiramos ayuda.</span>
          </h2>

          <p>
            Al principio RR señala qué mirar. Después tendrás que reconocer el
            criterio, combinar aprendizajes y decidir qué hacer por ti mismo.
          </p>

          <blockquote>
            Llegar a más KG no significa saber más respuestas.
            <strong> Significa necesitar menos ayuda para pensar.</strong>
          </blockquote>
        </div>

        <div className="premiumGymLevels">
          <div>
            <span>01</span>
            <strong>5 KG</strong>
            <b>DESCUBRIR</b>
            <p>RR te ayuda a ver lo que antes podía pasar desapercibido.</p>
          </div>

          <div>
            <span>02</span>
            <strong>10 KG</strong>
            <b>RECONOCER</b>
            <p>Empiezas a identificar el criterio dentro de la situación.</p>
          </div>

          <div>
            <span>03</span>
            <strong>20 KG</strong>
            <b>COMBINAR</b>
            <p>Una conversación puede necesitar varios criterios a la vez.</p>
          </div>

          <div>
            <span>04</span>
            <strong>30 KG</strong>
            <b>DECIDIR</b>
            <p>RR se aparta y construyes la respuesta con menos apoyo.</p>
          </div>
        </div>
      </section>

      <section className="premiumGymBodies">
        <div>
          <span>MI CUERPO</span>
          <h2>Puedo poner límites.</h2>
          <p>Aprender a reconocerlos y expresarlos también es entrenamiento.</p>
        </div>

        <div className="premiumGymBodiesMark">RR</div>

        <div>
          <span>TU CUERPO</span>
          <h2>Tengo que respetar los tuyos.</h2>
          <p>El criterio no termina en lo que yo quiero o no quiero.</p>
        </div>
      </section>

      <section className="premiumGymPrinciple">
        <div className="premiumGymPrincipleMark">RR</div>

        <div>
          <span>PRINCIPIO RR · CRECER</span>
          <h2>
            No queremos preparar a una familia para nueve conversaciones.
          </h2>
          <p>
            Queremos que pueda responder mejor a conversaciones que todavía no
            sabemos que existirán.
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
            explotación, una amenaza o un riesgo para un menor, RR · Crecer
            deja de tratarla como un simple entrenamiento educativo.
          </p>

          <small>
            RR · Crecer es una herramienta educativa y no sustituye atención
            médica, psicológica ni servicios de protección infantil.
          </small>
        </div>
      </section>

      <section className="premiumGymClosing">
        <span>7–9 · COMPRENDER</span>
        <p>Nueve Pesas. Cada vez menos ayuda.</p>
        <h2>Criterios que crecen contigo.</h2>

        <Link href="/prepararme/7-9/pesa-01" className="premiumPrimary">
          EMPEZAR PESA 01 <span>→</span>
        </Link>
      </section>

      <footer className="premiumFooter">
        <div>
          <strong>RR · CRECER</strong>
          <span>Un proyecto del Método Ruiz Rivas</span>
        </div>

        <span>7–9 · COMPRENDER · 9 PESAS · 5–30 KG</span>
      </footer>
    </main>
  );
}
