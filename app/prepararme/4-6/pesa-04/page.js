"use client";

import Link from "next/link";
import { useState } from "react";

const reacciones = [
  "Me río con él",
  "Le digo que eso no se hace",
  "Le digo que deje de hacer el tonto",
  "Le explico que depende del lugar",
  "No sé cómo poner el límite sin avergonzarlo",
];

export default function Pesa04Descubrir46() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [criterio, setCriterio] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 12;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/4-6" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 04 · HUMOR, CUERPO Y CONTEXTO</small>
        </div>

        <div className="kg">{paso <= 6 ? "5 KG" : "10 KG"}</div>
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
            <img src="/4-6/pesa04.png" alt="Pesa 04 · Humor, cuerpo y contexto" />
            <div className="trainingVisualCaption">
              <span>SPOT RR · EL CUERPO TAMBIÉN HACE GRACIA</span>
              <p>
                A los 4–6 años algunas palabras y partes del cuerpo provocan
                carcajadas. El entrenamiento no consiste en eliminar el humor,
                sino en añadir contexto y respeto.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 5 KG</span>

          <h1>«¡Mira mi culo!»</h1>

          <div className="scene">
            <p>
              Está jugando en casa con otros niños. Se baja un poco el pantalón,
              enseña el culo y todos empiezan a reírse.
            </p>
            <blockquote>—¡Mira mi culo!</blockquote>
          </div>

          <h2>¿Qué harías y qué le dirías?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe tu reacción real..."
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
          <h1>¿Qué te sale hacer automáticamente?</h1>

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

          <div className="criterionReminder">
            <span>VENTANA RR</span>
            <p>
              Que algo resulte gracioso no significa que no necesite un límite.
              Que necesite un límite tampoco significa que tengamos que
              convertir el cuerpo en algo sucio o vergonzoso.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!reaccion}
          >
            SEPARAR CONDUCTA Y CUERPO →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>
          <h1>El problema no es tener culo.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>Ha enseñado una parte privada de su cuerpo para hacer reír.</p>
            </div>
            <div>
              <span>HISTORIA</span>
              <p>
                «Está haciendo una guarrada», «qué vergüenza» o «no debería
                hacer bromas con el cuerpo».
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              Corrige la conducta que necesita un límite.
              <strong> No conviertas el cuerpo en el problema.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            AÑADIR CONTEXTO →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">HUMOR + CONTEXTO</span>
          <h1>La risa también puede aprender dónde está.</h1>

          <div className="conversation">
            <div>
              <span>PUEDO RECONOCER</span>
              <p>«Veo que os hace mucha gracia.»</p>
            </div>
            <div>
              <span>PUEDO PONER LÍMITE</span>
              <p>«Pero no necesitamos enseñar partes privadas para hacer reír.»</p>
            </div>
            <div>
              <span>PUEDO DAR CRITERIO</span>
              <p>
                «Hay bromas que podemos hacer y también cuidamos nuestra
                intimidad y la de los demás.»
              </p>
            </div>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            DIFERENCIAR RISA Y PERMISO →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">UNA DISTINCIÓN IMPORTANTE</span>
          <h1>Que todos se rían no convierte todo en válido.</h1>

          <div className="factStory">
            <div>
              <span>RISA</span>
              <p>Nos dice que algo les ha parecido divertido.</p>
            </div>
            <div>
              <span>PERMISO</span>
              <p>
                Nos dice si una acción respeta los límites propios y los de
                otras personas.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>SEMILLA PARA MÁS ADELANTE</span>
            <blockquote>
              «Nos reímos»
              <strong> no significa automáticamente «está bien hacerlo».</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            CONSTRUIR EL CRITERIO →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">TUS PALABRAS</span>
          <h1>¿Qué quieres que aprenda de esta situación?</h1>

          <textarea
            value={criterio}
            onChange={(e) => setCriterio(e.target.value)}
            placeholder="No escribas todavía la frase que dirías. Escribe el criterio que quieres enseñarle..."
          />

          <div className="criterionReminder">
            <span>EJEMPLO DE CRITERIO</span>
            <p>
              «El cuerpo no es vergonzoso, pero las partes privadas no necesitan
              convertirse en un juego para los demás.»
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(6)}
            disabled={!criterio.trim()}
          >
            PASAR DEL CRITERIO A LAS PALABRAS →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">BANCO DE LENGUAJE</span>
          <h1>Primero criterio. Después frase.</h1>

          <div className="conversation">
            <div><span>RECONOCER</span><p>«Ya veo que os hace gracia.»</p></div>
            <div><span>LÍMITE</span><p>«Súbete el pantalón, por favor.»</p></div>
            <div><span>EXPLICAR</span><p>«Cuidamos las partes privadas de nuestro cuerpo.»</p></div>
            <div><span>REDIRIGIR</span><p>«Podéis seguir jugando sin enseñar el cuerpo.»</p></div>
          </div>

          <div className="criterionReminder">
            <span>LAS FRASES SON MULETAS</span>
            <p>
              Puedes ser breve. No hace falta transformar una tontería infantil
              en una conferencia.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            CONSTRUIR MI RESPUESTA · 10 KG →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 10 KG</span>
          <h1>Vuelve al SPOT.</h1>

          <div className="yourFirstAnswer">
            <span>EL CRITERIO QUE HAS ELEGIDO</span>
            <p>{criterio}</p>
          </div>

          <div className="scene">
            <blockquote>—¡Mira mi culo!</blockquote>
          </div>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Ahora construye una respuesta breve..."
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
          <h1>¿Qué ha cambiado en tu forma de intervenir?</h1>

          <div className="comparison">
            <div><span>ANTES</span><p>{respuestaInicial}</p></div>
            <div><span>DESPUÉS</span><p>{respuestaFinal}</p></div>
          </div>

          <div className="lesson">
            <span>OBJETIVO</span>
            <blockquote>
              Poder poner un límite
              <strong> sin enseñar vergüenza corporal.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(9)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 10 KG</span>
          <h1>Ahora no enseña su propio cuerpo.</h1>

          <div className="scene">
            <p>Está jugando con un amigo y empieza a tirar de su camiseta.</p>
            <blockquote>—¡Enséñales la barriga!</blockquote>
            <p>El otro niño aparta sus manos y dice que no.</p>
          </div>

          <p className="trainingLead">
            Aplica lo aprendido. Esta vez aparece además el límite de otra
            persona.
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="¿Cómo intervendrías?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(10)}
            disabled={!transferencia.trim()}
          >
            VER EL MAPA →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">MAPA RR · PESA 04</span>
          <h1>El humor no elimina los límites.</h1>

          <div className="lesson">
            <span>TU MAPA</span>
            <blockquote>
              RECONOZCO → SEPARO CUERPO/CONDUCTA → MIRO EL CONTEXTO →
              PONGO LÍMITE →
              <strong> REDIRIJO SIN AVERGONZAR.</strong>
            </blockquote>
          </div>

          <div className="criterionReminder">
            <span>LO QUE ESTÁS CONSTRUYENDO</span>
            <p>
              Un niño puede reírse, jugar y hablar de su cuerpo mientras aprende
              que su intimidad y los límites de otras personas también cuentan.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(11)}>
            TERMINAR PESA →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 04 · COMPLETADA</span>

          <div className="finishMark">10</div>

          <h1>El límite puede ser firme sin convertir el cuerpo en algo sucio.</h1>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 05 · QUIERO VERLO</strong>
            <p>
              El siguiente paso es más exigente: cuando la curiosidad ya no se
              refiere solo al propio cuerpo, sino al cuerpo de otra persona.
            </p>
          </div>

          <Link href="/prepararme/4-6/pesa-05" className="trainingButton linkButton">
            IR A PESA 05 →
          </Link>

          <Link href="/prepararme/4-6" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
