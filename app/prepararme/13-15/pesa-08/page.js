"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Me sale decirle que mientras sea menor tengo derecho a saberlo",
  "Me preocupa que esté ocultando algo importante",
  "Quiero revisar su móvil para quedarme tranquilo",
  "Me sale retirarme y esperar a que quiera hablar",
  "Quiero respetar su intimidad sin desaparecer como adulto",
];

export default function Pesa08Decidir1315() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaLimite, setRespuestaLimite] = useState("");
  const [respuestaCuidado, setRespuestaCuidado] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 13;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/13-15" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 08 · AUTONOMÍA Y VÍNCULO</small>
        </div>

        <div className="kg">30 KG</div>
      </header>

      <div className="trainingProgress">
        <div
          className="trainingProgressFill"
          style={{
            width: `${Math.min(((paso + 1) / totalPasos) * 100, 100)}%`,
          }}
        />
      </div>

      {paso === 0 && (
        <section className="trainingScreen">
          <div className="trainingVisual">
            <img
              src="/13-15/pesa08.png"
              alt="Pesa 08 · No quiero contarte todo"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · AUTONOMÍA Y VÍNCULO</span>
              <p>
                Crecer también significa tener una vida interior que ya no se
                comparte entera con los padres. El reto es seguir cuidando sin
                exigir acceso total.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 30 KG</span>
          <h1>«No quiero contarte todo.»</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —Hay cosas de mi relación que son privadas. No quiero tener que
              contártelo todo.
            </blockquote>
          </div>

          <h2>¿Qué responderías?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe tu respuesta real..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(1)}
            disabled={!respuestaInicial.trim()}
          >
            EMPEZAR A ENTRENAR →
          </button>
        </section>
      )}

      {paso === 1 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRIMERO TÚ</span>
          <h1>Cuando sabes menos, tu cabeza puede llenar los huecos.</h1>

          <div className="choiceList">
            {reacciones.map((item) => (
              <button
                type="button"
                key={item}
                className={reaccion === item ? "selectedChoice" : ""}
                onClick={() => setReaccion(item)}
              >
                {reaccion === item ? "✓ " : ""}
                {item}
              </button>
            ))}
          </div>

          <h2>¿Qué historia aparece?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Si no quiere contármelo será porque está haciendo algo malo»..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!reaccion || !historia.trim()}
          >
            HECHO ≠ HISTORIA →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>
          <h1>Privacidad no demuestra peligro.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>
                Tu hijo está pidiendo conservar partes de su relación y de su
                vida personal para sí mismo.
              </p>
            </div>

            <div>
              <span>NO PUEDES CONCLUIR SOLO POR ESO</span>
              <p>
                Que exista una situación de riesgo, que haya dejado de confiar
                en ti o que necesites conocer todos los detalles para cuidarle.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Intimidad propia y vínculo familiar
              <strong> pueden existir al mismo tiempo.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            ENCONTRAR LA FRONTERA →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>
          <h1>No necesitas elegir entre vigilar o desaparecer.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES ABRIR</span>
              <p>«Entiendo que haya cosas que quieras guardar para ti.»</p>
              <p>«No necesito saber cada detalle para estar disponible.»</p>
              <p>
                «Sí necesito seguir pendiente de que estés seguro y puedas pedir
                ayuda si algo se complica.»
              </p>
            </div>
          </div>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="Construye una respuesta que reconozca intimidad y mantenga el vínculo..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(4)}
            disabled={!pregunta.trim()}
          >
            ESCUCHAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">APARECE SU NECESIDAD</span>
          <h1>No está pidiendo que dejes de ser su padre.</h1>

          <div className="yourFirstAnswer">
            <span>TU RESPUESTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                No quiero dejar de hablar contigo. Solo me da vergüenza que me
                preguntes cada vez que vuelvo qué hemos hecho o de qué hemos
                hablado.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            La petición ya es más concreta: quiere conservar el vínculo sin
            sentir que cada conversación abre una auditoría.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            ENTRENAR PRESENCIA SIN INVASIÓN →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRIVACIDAD ≠ ABANDONO</span>
          <h1>Estar disponible no exige saberlo todo.</h1>

          <div className="conversation">
            <div>
              <span>INVADIR</span>
              <p>«Hasta que no me cuentes exactamente qué pasó, no me quedo tranquilo.»</p>
            </div>

            <div>
              <span>DESAPARECER</span>
              <p>«Pues si no quieres contarme nada, allá tú.»</p>
            </div>

            <div>
              <span>SOSTENER</span>
              <p>
                «No tienes que contarme cada detalle. Si alguna vez necesitas
                pensar algo conmigo o pedir ayuda, sigo aquí.»
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO RR</span>
            <p>
              La autonomía crece mejor cuando puede alejarse un poco sin perder
              completamente el lugar al que volver.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            CONSTRUIR EL LÍMITE ADULTO →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 30 KG</span>
          <h1>¿Qué puedes dejar de preguntar sin dejar de cuidar?</h1>

          <div className="scene">
            <blockquote>
              —No quiero que cada vez que vuelva me preguntes exactamente qué
              hemos hecho.
            </blockquote>
          </div>

          <textarea
            value={respuestaLimite}
            onChange={(e) => setRespuestaLimite(e.target.value)}
            placeholder="Construye cómo responderías..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuestaLimite.trim()}
          >
            AHORA CAMBIA EL CONTEXTO →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">NUEVA INFORMACIÓN</span>
          <h1>Respetar intimidad no significa ignorar señales.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>UNA SEMANA DESPUÉS</span>
              <p>
                Tu hijo deja de querer quedar con sus amigos, duerme peor y se
                pone muy nervioso cada vez que recibe mensajes de su pareja.
                Cuando preguntas si ocurre algo responde: «Es privado».
              </p>
            </div>
          </div>

          <p className="trainingLead">
            El principio no cambia, pero sí cambia el peso de las señales. Ya no
            estás pidiendo detalles por curiosidad: tienes motivos concretos para
            aumentar el cuidado.
          </p>

          <button className="trainingButton" onClick={() => irA(8)}>
            PRIVACIDAD + RESPONSABILIDAD →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">CUIDADO · 30 KG</span>
          <h1>El adulto no necesita todos los detalles para hacer una pregunta de seguridad.</h1>

          <p className="trainingLead">
            Puedes nombrar lo que observas sin acusar ni exigir una confesión:
            cambios de sueño, aislamiento, miedo, angustia o una reacción
            intensa ante determinados mensajes.
          </p>

          <div className="lesson">
            <span>FRONTERA RR</span>
            <blockquote>
              «Respeto que no quieras contarme todo. Pero estoy viendo cambios
              que me preocupan y
              <strong> necesito asegurarme de que estás bien y de que nadie te está haciendo daño.</strong>»
            </blockquote>
          </div>

          <textarea
            value={respuestaCuidado}
            onChange={(e) => setRespuestaCuidado(e.target.value)}
            placeholder="Construye tu propia forma de aumentar el cuidado sin exigir toda la historia..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(9)}
            disabled={!respuestaCuidado.trim()}
          >
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>La misma palabra —«privado»— no exige siempre la misma respuesta.</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>CUANDO PIDE INTIMIDAD</span>
              <p>{respuestaLimite}</p>
            </div>

            <div>
              <span>CUANDO APARECEN SEÑALES</span>
              <p>{respuestaCuidado}</p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 30 KG</span>
          <h1>Ahora no hay pareja ni sexualidad.</h1>

          <div className="scene">
            <blockquote>
              —No quiero enseñarte mis conversaciones con mis amigos. Son
              privadas.
            </blockquote>
          </div>

          <p className="trainingLead">
            No hay ninguna otra señal preocupante: mantiene sus rutinas, parece
            tranquilo y no has observado miedo, amenazas ni cambios relevantes.
            ¿Puede tu criterio distinguir esta situación de la anterior?
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cómo responderías ahora?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(11)}
            disabled={!transferencia.trim()}
          >
            VER MAPA RR →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · AUTONOMÍA Y CUIDADO</span>
          <h1>Ni acceso total ni retirada total.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RESPETO INTIMIDAD → NO CONFUNDO PRIVACIDAD CON PELIGRO → MANTENGO
              DISPONIBILIDAD → OBSERVO CAMBIOS CONCRETOS → AUMENTO CUIDADO SI
              APARECEN SEÑALES →
              <strong> PROTEJO SIN NECESITAR POSEER TODA SU VIDA PRIVADA.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>PUENTE DE SEGURIDAD</span>
            <p>
              Si aparecen miedo, amenazas, coerción, violencia, aislamiento
              impuesto, control persistente, chantaje u otras señales de riesgo,
              la protección pesa más que mantener intacta toda la privacidad.
            </p>
          </div>

          <Link href="/orientacion" className="secondaryTrainingButton">
            HA PASADO ALGO →
          </Link>

          <button className="trainingButton" onClick={() => irA(12)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 08 · COMPLETADA</span>

          <div className="finishMark">30</div>

          <h1>Privacidad no es abandono.</h1>
          <h2>Cuidar no significa poseer toda la información.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              A medida que crece, el adolescente necesita espacios propios. El
              adulto puede respetarlos y seguir disponible, observando hechos
              concretos y aumentando la protección cuando aparecen señales que
              justifican hacerlo.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 09 · «HE HECHO ALGO Y NO SÉ QUÉ HACER»</strong>
            <p>
              La última Pesa retira casi todas las ayudas. Ya no sabrás de
              entrada si el problema es una relación, presión, consentimiento,
              intimidad digital o una decisión que salió mal. Tendrás que
              construir el proceso.
            </p>
          </div>

          <Link
            href="/prepararme/13-15/pesa-09"
            className="trainingButton linkButton"
          >
            IR A PESA 09 →
          </Link>

          <Link href="/prepararme/13-15" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
