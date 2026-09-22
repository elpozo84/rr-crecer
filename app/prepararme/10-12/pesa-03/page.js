"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const reacciones = [
  "Me sale sonreír o bromear",
  "Quiero saber inmediatamente quién es",
  "Me preocupa que sea demasiado pronto",
  "Me hace ilusión que me lo haya contado",
  "No sé cómo seguir sin incomodarle",
];

export default function Pesa03Prepararse1012() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [historia, setHistoria] = useState("");
  const [respuestaPuerta, setRespuestaPuerta] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 12;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <TrainingProgressTracker
        stage="10-12"
        weightNumber={3}
        startedKg={10}
        completedKg={20}
        completed={paso === 11}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/10-12" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 03 · ATRACCIÓN Y EMOCIONES</small>
        </div>

        <div className="kg">10 → 20 KG</div>
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
              src="/10-12/pesa03.png"
              alt="Pesa 03 · Creo que me gusta alguien"
            />
            <div className="trainingVisualCaption">
              <span>SPOT RR · UNA CONFIDENCIA</span>
              <p>
                Hay conversaciones que se cierran no porque el adulto diga algo
                terrible, sino porque convierte demasiado rápido una confidencia
                pequeña en un acontecimiento enorme.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 10 KG</span>
          <h1>«Creo que me gusta alguien.»</h1>

          <div className="scene">
            <p>Vais en el coche. De repente te dice:</p>
            <blockquote>—Creo que me gusta alguien de mi clase.</blockquote>
          </div>

          <h2>¿Qué responderías espontáneamente?</h2>

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
          <h1>Una confidencia también activa al adulto.</h1>

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

          <h2>¿Qué historia empieza a montar tu cabeza?</h2>

          <textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            placeholder="Ej.: «Ya empieza con novios», «quiero saber quién es», «es demasiado pequeño»..."
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
          <h1>«Me gusta alguien» significa exactamente eso... por ahora.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>Te ha contado que cree que le gusta alguien de su clase.</p>
            </div>

            <div>
              <span>HISTORIA DEL ADULTO</span>
              <p>
                «Tiene novio o novia», «quiere hacer algo», «ya está entrando en
                relaciones», «tengo que darle una charla».
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Una emoción no necesita convertirse inmediatamente en una
              etiqueta, una relación o una lección.
              <strong> Primero puede ser simplemente escuchada.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            APRENDER A RECIBIR →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">RECIBIR SIN APROPIARTE</span>
          <h1>La primera respuesta decide si la puerta sigue abierta.</h1>

          <div className="comparison">
            <div>
              <span>PUEDE CERRAR</span>
              <p>«¡Uy! ¿Quién? ¿Quién? ¡Cuéntamelo todo!»</p>
              <p>«¿Ya tienes novia?»</p>
              <p>«Pero si eres muy pequeño para esas cosas.»</p>
            </div>

            <div>
              <span>PUEDE ABRIR</span>
              <p>«Ah, ¿sí? Gracias por contármelo.»</p>
              <p>«¿Y cómo te hace sentir eso?»</p>
              <p>«Si te apetece hablar de ello, te escucho.»</p>
            </div>
          </div>

          <textarea
            value={respuestaPuerta}
            onChange={(e) => setRespuestaPuerta(e.target.value)}
            placeholder="Construye una primera frase que mantenga abierta la conversación..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(4)}
            disabled={!respuestaPuerta.trim()}
          >
            VER QUÉ OCURRE →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">LA PUERTA SIGUE ABIERTA</span>
          <h1>No necesitaba que averiguaras quién era.</h1>

          <div className="yourFirstAnswer">
            <span>TU RESPUESTA</span>
            <p>{respuestaPuerta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                No sé si me gusta de verdad. Solo quiero estar mucho con esa
                persona y me pongo nervioso cuando me habla.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ahora tienes información que un interrogatorio quizá habría cerrado:
            está intentando entender una emoción, no anunciar una relación.
          </p>

          <button className="trainingButton" onClick={() => irA(5)}>
            ACOMPAÑAR SIN DEFINIR POR ÉL →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">LENGUAJE PARA ENTENDERSE</span>
          <h1>No hace falta resolver qué siente hoy.</h1>

          <div className="conversation">
            <div>
              <span>PUEDES NORMALIZAR</span>
              <p>
                «A veces alguien nos gusta, nos atrae o simplemente nos hace
                sentir especialmente bien y al principio no sabemos muy bien
                cómo llamarlo.»
              </p>
            </div>

            <div>
              <span>PUEDES DEVOLVERLE AGENCIA</span>
              <p>
                «No tienes que decidir ahora qué significa. Puedes ir viendo
                cómo te sientes.»
              </p>
            </div>

            <div>
              <span>PUEDES MANTENER LA PUERTA</span>
              <p>
                «Y si algún día quieres contarme más o preguntarme algo, puedes
                hacerlo.»
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            SUBIR A 20 KG →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">NUEVA INFORMACIÓN · 20 KG</span>
          <h1>Ahora aparece el grupo.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO AÑADE</span>
              <p>
                Mis amigos dicen que mañana tengo que decírselo. Si no, dicen
                que soy un cobarde.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            El SPOT ya no es solo una emoción. Aparece presión para actuar antes
            de que él haya decidido qué quiere hacer.
          </p>

          <div className="lesson">
            <span>NUEVO CRITERIO</span>
            <blockquote>
              Sentir algo por alguien no obliga a hacer nada inmediatamente.
              <strong> La emoción es suya y la decisión también.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            CONSTRUIR RESPUESTA COMPLETA →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 20 KG</span>
          <h1>Ahora integra emoción, autonomía y grupo.</h1>

          <div className="scene">
            <blockquote>
              —Creo que me gusta alguien. Mis amigos dicen que mañana tengo que
              decírselo o soy un cobarde.
            </blockquote>
          </div>

          <p className="trainingLead">
            No le digas qué decisión debe tomar. Ayúdale a distinguir lo que
            siente, lo que quiere y lo que el grupo quiere que haga.
          </p>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye tu respuesta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(8)}
            disabled={!respuestaFinal.trim()}
          >
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>De reaccionar a acompañar.</h1>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>DESPUÉS</span>
              <p>{respuestaFinal}</p>
            </div>
          </div>

          <div className="lesson">
            <span>CAPACIDAD ENTRENADA</span>
            <blockquote>
              RECIBO → NO ETIQUETO → DESCUBRO → ACOMPAÑO LA EMOCIÓN →
              <strong> DEVUELVO LA DECISIÓN A QUIEN LA VIVE.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · MENOS AYUDA</span>
          <h1>Ahora la confidencia cambia.</h1>

          <div className="scene">
            <blockquote>
              —Creo que a una persona de mi clase le gusto, pero yo no siento lo
              mismo. No quiero hacerle daño.
            </blockquote>
          </div>

          <p className="trainingLead">
            Aquí no hay una respuesta preparada. Entrena el mismo proceso:
            escuchar, no decidir por él y ayudarle a pensar cómo ser claro y
            respetuoso.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cómo acompañarías esta situación?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!transferencia.trim()}
          >
            VER MAPA RR →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · CONFIDENCIAS</span>
          <h1>Que te lo cuente es más valioso que saber todos los detalles.</h1>

          <div className="lesson">
            <span>TU PROCESO</span>
            <blockquote>
              RECIBO → REGULO MI REACCIÓN → NO ETIQUETO → DESCUBRO QUÉ NECESITA
              → ACOMPAÑO →
              <strong> RESPETO SU RITMO Y SU DECISIÓN.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>PREPARARSE</span>
            <p>
              A medida que crece, no tendrás acceso automático a todo lo que
              siente. La confianza aumenta cuando descubre que contarte algo no
              significa perder inmediatamente el control sobre ello.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            COMPLETAR PESA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 03 · COMPLETADA</span>

          <div className="finishMark">20</div>

          <h1>No necesitas sacarle toda la historia.</h1>
          <h2>Necesitas que pueda seguir contándotela.</h2>

          <div className="criterionReminder">
            <span>LO QUE TE LLEVAS</span>
            <p>
              Una confidencia no es una invitación automática a investigar.
              Recíbela, descubre qué necesita y ayuda a construir criterio sin
              sustituir su decisión.
            </p>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 04 · «EN CLASE TODOS HABLAN DE SEXO»</strong>
            <p>
              La siguiente Pesa introduce ruido de grupo: palabras,
              exageraciones y afirmaciones que pueden sonar a conocimiento sin
              serlo.
            </p>
          </div>

          <Link
            href="/prepararme/10-12/pesa-04"
            className="trainingButton linkButton"
          >
            IR A PESA 04 →
          </Link>

          <Link href="/prepararme/10-12" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
