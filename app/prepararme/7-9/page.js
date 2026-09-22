import Link from "next/link";

const pesas = [
  {
    id: "01",
    kg: "5 → 10 KG",
    titulo: "PAPÁ, ¿QUÉ SIGNIFICA...?",
    capacidad: "Preguntas inesperadas",
    descripcion:
      "Aprende a descubrir qué quiere saber realmente antes de lanzarte a explicar.",
    aprendizaje: "Descubre primero la pregunta real.",
    href: "/prepararme/7-9/pesa-01",
  },
  {
    id: "02",
    kg: "5 → 10 KG",
    titulo: "DALE UN BESO",
    capacidad: "Cuerpo y límites",
    descripcion:
      "Entrena cómo enseñar autonomía corporal sin confundir educación, cariño y contacto físico obligatorio.",
    aprendizaje: "Mi límite importa. El del otro también.",
    href: "/prepararme/7-9/pesa-02",
  },
  {
    id: "03",
    kg: "5 → 10 KG",
    titulo: "ES NUESTRO SECRETO",
    capacidad: "Secretos y pedir ayuda",
    descripcion:
      "Diferencia privacidad, sorpresas y secretos manteniendo siempre abierta la posibilidad de pedir ayuda.",
    aprendizaje: "Pedir ayuda siempre debe seguir siendo posible.",
    href: "/prepararme/7-9/pesa-03",
  },
  {
    id: "04",
    kg: "5 → 10 KG",
    titulo: "¿POR QUÉ NO PUEDO ENTRAR?",
    capacidad: "Intimidad sin vergüenza",
    descripcion:
      "Aprende a enseñar intimidad y respeto por los espacios privados sin presentar el cuerpo como algo malo.",
    aprendizaje: "Privado no significa malo.",
    href: "/prepararme/7-9/pesa-04",
  },
  {
    id: "05",
    kg: "5 → 10 KG",
    titulo: "¿DE DÓNDE VIENEN LOS BEBÉS?",
    capacidad: "Reproducción",
    descripcion:
      "Entrena cómo responder con verdad y ajustar la profundidad a lo que realmente quiere comprender.",
    aprendizaje: "Verdad suficiente. Profundidad progresiva.",
    href: "/prepararme/7-9/pesa-05",
  },
  {
    id: "06",
    kg: "5 → 10 KG",
    titulo: "¿POR QUÉ SE LLAMA PENE / VULVA?",
    capacidad: "Nombrar el cuerpo",
    descripcion:
      "Entrena cómo hablar de las partes del cuerpo con claridad, precisión y naturalidad.",
    aprendizaje: "El cuerpo puede nombrarse sin vergüenza.",
    href: "/prepararme/7-9/pesa-06",
  },
  {
    id: "07",
    kg: "10 → 20 KG",
    titulo: "ME HA SALIDO ESTO EN EL MÓVIL",
    capacidad: "Pantallas y contenido inesperado",
    descripcion:
      "Entrena qué hacer cuando aparece contenido para el que no estaba preparado sin cerrar la comunicación.",
    aprendizaje: "Comprender primero. Proteger después.",
    href: "/prepararme/7-9/pesa-07",
  },
  {
    id: "08",
    kg: "20 → 40 KG",
    titulo: "INTEGRACIÓN",
    capacidad: "Transferir lo aprendido",
    descripcion:
      "Una situación compleja mezcla límites, presión, secretos, pantallas y seguridad. Esta vez RR retira casi toda la ayuda.",
    aprendizaje: "Reconoce el criterio y también cuándo pedir ayuda.",
    href: "/prepararme/7-9/pesa-08",
  },
  {
    id: "09",
    kg: "10 → 20 KG",
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
          No tienes que prepararte
          <em> todas las respuestas.</em>
        </h1>

        <p>
          Entrena criterios para hablar sobre el cuerpo, los límites, la
          intimidad, la reproducción, las pantallas, el grupo y cómo pedir
          ayuda.
        </p>

        <div className="progressBox">
          <div>
            <span>RECORRIDO · COMPRENDER</span>
            <strong>9 PESAS</strong>
          </div>

          <div className="progressTrack">
            <div className="progressFill" />
          </div>

          <small>
            Empieza con situaciones guiadas y avanza hacia conversaciones en
            las que tendrás que reconocer y aplicar los criterios con cada vez
            menos ayuda.
          </small>
        </div>
      </section>

      <section className="gymContent">
        <div className="gymHeading">
          <span>GIMNASIO RR · CRECER</span>

          <h2>
            La ayuda disminuye a medida que el criterio empieza a ser tuyo.
          </h2>
        </div>

        <div className="weights">
          {pesas.map((pesa) => (
            <Link className="weightCard" href={pesa.href} key={pesa.id}>
              <div className="weightNumber">{pesa.id}</div>

              <div className="weightBody">
                <span>
                  {pesa.capacidad} · {pesa.kg}
                </span>

                <h3>{pesa.titulo}</h3>

                <p>{pesa.descripcion}</p>

                <small
                  style={{
                    display: "block",
                    marginTop: "13px",
                    color: "var(--green)",
                    lineHeight: "1.5",
                  }}
                >
                  {pesa.aprendizaje}
                </small>
              </div>

              <div className="weightStatus weightAvailable">
                ENTRENAR <b>→</b>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="method">
        <div>
          <div className="sectionTag">PROGRESIÓN RR</div>

          <h2>No repetimos la misma dificultad.</h2>
          <h2 className="accent">Retiramos ayuda.</h2>

          <p>
            Al principio RR señala qué mirar. Después tendrás que reconocer el
            criterio, combinar aprendizajes y decidir qué hacer por ti mismo.
          </p>
        </div>

        <div className="spot">
          <span>PROGRESIÓN DEL RECORRIDO</span>

          <div className="steps">
            <b>5 KG · DESCUBRIR</b>
            <i>↓</i>
            <b>10 KG · RECONOCER</b>
            <i>↓</i>
            <b>20 KG · COMBINAR</b>
            <i>↓</i>
            <b>40 KG · DECIDIR</b>
          </div>

          <p>
            El objetivo no es llegar a 40 KG porque sepas más teoría.
          </p>

          <strong>
            Llegas porque necesitas menos ayuda para pensar.
          </strong>
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

      <section className="gymPrinciple">
        <span>PRINCIPIO RR · CRECER</span>

        <blockquote>
          No queremos preparar a una familia para nueve conversaciones.
          <strong>
            {" "}
            Queremos que pueda responder mejor a conversaciones que todavía no
            sabemos que existirán.
          </strong>
        </blockquote>
      </section>

      <section className="safety">
        <span>CUANDO ENTRENAR NO ES SUFICIENTE</span>

        <h2>También entrenamos cuándo pedir ayuda.</h2>

        <p>
          Si una situación puede implicar abuso, coerción, violencia,
          explotación, una amenaza o un riesgo para un menor, RR · Crecer deja
          de tratarla como un simple entrenamiento educativo.
        </p>

        <p className="safetySmall">
          RR · Crecer es una herramienta educativa y no sustituye atención
          médica, psicológica ni servicios de protección infantil.
        </p>
      </section>

      <section className="closing">
        <span>7–9 · COMPRENDER</span>

        <h2>Nueve Pesas.</h2>
        <h2 className="accent">Criterios que crecen contigo.</h2>

        <Link href="/prepararme/7-9/pesa-01" className="primary">
          EMPEZAR PESA 01 <span>→</span>
        </Link>
      </section>

      <footer>
        <div>
          <strong>RR · CRECER</strong>
          <span>Un proyecto del Método Ruiz Rivas</span>
        </div>

        <span>7–9 · COMPRENDER · 9 PESAS · 5–40 KG</span>
      </footer>
    </main>
  );
}
