"use client";

import Link from "next/link";
import TrainingProgressTracker from "../../../../components/TrainingProgressTracker";
import { useState } from "react";

const primerasReacciones = [
  "Le digo que a mamá se lo contamos todo",
  "Le pregunto inmediatamente qué secreto es",
  "Le digo que no debe guardar secretos",
  "Intento averiguar cómo se siente",
  "Me preocupo y empiezo a imaginar cosas",
];

export default function Pesa06Descubrir46() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [reaccion, setReaccion] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");
  const [transferencia, setTransferencia] = useState("");

  const totalPasos = 13;

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="trainingPage">
      <TrainingProgressTracker
        stage="4-6"
        weightNumber={6}
        startedKg={10}
        completedKg={10}
        completed={paso === 12}
      />
      <header className="trainingHeader">
        <Link href="/prepararme/4-6" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 06 · SECRETOS Y PEDIR AYUDA</small>
        </div>

        <div className="kg">10 KG</div>
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
            <img src="/4-6/pesa06.png" alt="Pesa 06 · Secretos y pedir ayuda" />
            <div className="trainingVisualCaption">
              <span>SPOT RR · APARECE UN SECRETO</span>
              <p>
                A esta edad no necesitamos que memorice una clasificación
                complicada. Necesitamos construir una idea sencilla: hay cosas
                que siempre puede contar cuando le preocupan, le incomodan o
                necesita ayuda.
              </p>
            </div>
          </div>

          <span className="trainingTag">SPOT · RESPUESTA REAL · 10 KG</span>

          <h1>«Me dijo que no se lo dijera a mamá.»</h1>

          <div className="scene">
            <p>Tu hijo está contándote algo que ocurrió mientras jugaba.</p>
            <blockquote>
              —Y después me dijo: «esto es un secreto, no se lo digas a mamá».
            </blockquote>
          </div>

          <h2>¿Qué harías ahora?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe lo que dirías o preguntarías de verdad..."
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
          <h1>La palabra «secreto» puede activar al adulto muy rápido.</h1>

          <div className="choiceList">
            {primerasReacciones.map((item) => (
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
              Que aparezca un secreto merece atención. Pero escuchar bien suele
              darnos más información que reaccionar con alarma antes de saber
              qué ha ocurrido.
            </p>
          </div>

          <button
            className="trainingButton"
            onClick={() => irA(2)}
            disabled={!reaccion}
          >
            HECHO ≠ HISTORIA →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>
          <h1>Sabemos una cosa. Todavía desconocemos muchas.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>Alguien le ha pedido que no cuente algo a mamá.</p>
            </div>

            <div>
              <span>TODAVÍA NO SABEMOS</span>
              <p>
                Quién se lo pidió, qué ocurrió, cómo se sintió, si hubo presión,
                miedo o contacto, ni qué significa «secreto» en esta situación.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO RR</span>
            <blockquote>
              No minimizo.
              <strong> Tampoco completo la historia antes de escuchar.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            PROTEGER LA CONVERSACIÓN →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">PRIMERO, QUE PUEDA SEGUIR CONTANDO</span>
          <h1>La primera respuesta puede abrir o cerrar lo siguiente.</h1>

          <div className="comparison">
            <div>
              <span>PUEDE CERRAR</span>
              <p>«¿Quién te ha dicho eso?»</p>
              <p>«¡Tú no puedes guardar secretos!»</p>
              <p>«¿Qué te han hecho?»</p>
            </div>

            <div>
              <span>PUEDE ABRIR</span>
              <p>«Gracias por contármelo.»</p>
              <p>«Puedes contarme lo que pasó.»</p>
              <p>«Quiero entenderlo bien.»</p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>OBJETIVO</span>
            <p>
              Antes de enseñar la regla sobre los secretos, protege algo todavía
              más importante: que pueda seguir hablando contigo.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            PREGUNTAR SIN INTERROGAR →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">DESCUBRIR</span>
          <h1>Haz una pregunta abierta.</h1>

          <div className="conversation">
            <div><span>PUEDES USAR</span><p>«¿Qué pasó después?»</p></div>
            <div><span>O</span><p>«Cuéntame qué era lo que no quería que contaras.»</p></div>
            <div><span>O</span><p>«¿Cómo te sentiste cuando te dijo eso?»</p></div>
          </div>

          <h2>Construye tu pregunta.</h2>

          <textarea
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            placeholder="¿Qué preguntarías para comprender sin sugerirle una respuesta?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(5)}
            disabled={!pregunta.trim()}
          >
            ESCUCHAR →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">LA HISTORIA CONTINÚA</span>
          <h1>Ahora aparece el contexto.</h1>

          <div className="yourFirstAnswer">
            <span>TU PREGUNTA</span>
            <p>{pregunta}</p>
          </div>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Era porque habíamos escondido un dibujo para regalárselo mañana
                por su cumpleaños.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            La palabra «secreto» por sí sola no explicaba la situación. Escuchar
            evitó que tu mente decidiera antes que los hechos.
          </p>

          <button className="trainingButton" onClick={() => irA(6)}>
            ENSEÑAR UN CRITERIO SIMPLE →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">SORPRESA, PRIVACIDAD Y AYUDA</span>
          <h1>No hace falta prohibir todos los secretos.</h1>

          <div className="conversation">
            <div>
              <span>SORPRESA</span>
              <p>
                Algo que guardamos un rato para hacer feliz a alguien y que
                después se descubre.
              </p>
            </div>

            <div>
              <span>PRIVACIDAD</span>
              <p>
                Hay cosas personales que no necesitamos contar a todo el mundo.
              </p>
            </div>

            <div>
              <span>CUANDO NECESITO AYUDA</span>
              <p>
                Si algo me asusta, me preocupa, me hace sentir incómodo o alguien
                me presiona para callarlo, puedo contárselo a un adulto de
                confianza.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>PARA 4–6</span>
            <blockquote>
              No necesita memorizar categorías.
              <strong> Necesita saber que siempre puede venir a contarte algo.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(7)}>
            QUÉ FRASES AYUDAN →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen">
          <span className="trainingTag">BANCO DE LENGUAJE</span>
          <h1>Construye una puerta de salida.</h1>

          <div className="conversation">
            <div><span>SEGURIDAD</span><p>«Puedes contarme cosas aunque alguien te diga que no.»</p></div>
            <div><span>SIN CASTIGO</span><p>«No te vas a meter en problemas por venir a pedirme ayuda.»</p></div>
            <div><span>EMOCIÓN</span><p>«Si algo te da miedo o te hace sentir raro, puedes decírmelo.»</p></div>
            <div><span>ALTERNATIVA</span><p>«Y si alguna vez no puedes contármelo a mí, puedes buscar a otro adulto que te cuide y en quien confíes.»</p></div>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            CONSTRUIR MI RESPUESTA →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">CONSTRUCCIÓN · 10 KG</span>
          <h1>Vuelve al SPOT inicial.</h1>

          <div className="scene">
            <blockquote>
              —Me dijo: «esto es un secreto, no se lo digas a mamá».
            </blockquote>
          </div>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="¿Cómo responderías ahora?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(9)}
            disabled={!respuestaFinal.trim()}
          >
            REPLAY RR →
          </button>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">REPLAY RR</span>
          <h1>El objetivo no era encontrar una frase sobre secretos.</h1>

          <div className="comparison">
            <div><span>ANTES</span><p>{respuestaInicial}</p></div>
            <div><span>DESPUÉS</span><p>{respuestaFinal}</p></div>
          </div>

          <div className="lesson">
            <span>CAPACIDAD ENTRENADA</span>
            <blockquote>
              RECIBIR SIN ASUSTAR → ESCUCHAR →
              <strong> DAR UNA VÍA PARA PEDIR AYUDA.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(10)}>
            TRANSFERENCIA →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 10 KG</span>
          <h1>Ahora falta información.</h1>

          <div className="scene">
            <p>Tu hijo te dice:</p>
            <blockquote>
              —Un niño mayor me dijo que tenemos un secreto.
            </blockquote>
            <p>Y deja de hablar.</p>
          </div>

          <p className="trainingLead">
            No supongas qué ocurrió y tampoco lo descartes. ¿Cómo mantendrías la
            conversación abierta?
          </p>

          <textarea
            value={transferencia}
            onChange={(e) => setTransferencia(e.target.value)}
            placeholder="Escribe cómo responderías..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(11)}
            disabled={!transferencia.trim()}
          >
            VER EL CAMBIO DE MODO →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">PUENTE RR · SEGURIDAD</span>
          <h1>Hay información que cambia el tipo de conversación.</h1>

          <p className="trainingLead">
            Si al escuchar aparecen miedo, amenazas, presión para mantener
            silencio, contacto corporal preocupante, participación de una
            persona adulta u otras señales de posible riesgo, el objetivo deja
            de ser completar esta Pesa.
          </p>

          <div className="lesson">
            <span>CAMBIO DE MODO</span>
            <blockquote>
              ESCUCHAR → NO CULPAR → NO PRESIONAR →
              <strong> PRIORIZAR PROTECCIÓN Y AYUDA ADECUADA.</strong>
            </blockquote>
          </div>

          <Link href="/orientacion" className="secondaryTrainingButton">
            HA PASADO ALGO · ORIENTACIÓN →
          </Link>

          <button className="trainingButton" onClick={() => irA(12)}>
            TERMINAR PESA →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">PESA 06 · COMPLETADA</span>

          <div className="finishMark">10</div>

          <h1>El aprendizaje no es «cuéntamelo todo».</h1>

          <h2>Es «si necesitas ayuda, siempre puedes contarlo».</h2>

          <div className="lesson">
            <span>TU MAPA RR</span>
            <blockquote>
              RECIBO → SEPARO HECHO/HISTORIA → ESCUCHO → COMPRENDO →
              DOY CRITERIO →
              <strong> DEJO UNA PUERTA PARA PEDIR AYUDA.</strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>SIGUIENTE ENTRENAMIENTO</span>
            <strong>PESA 07 · ¿CÓMO HA ENTRADO EL BEBÉ EN LA BARRIGA?</strong>
            <p>
              Ahora cambia el reto: aprender a descubrir cuánto necesita saber
              antes de empezar a explicar.
            </p>
          </div>

          <Link href="/prepararme/4-6/pesa-07" className="trainingButton linkButton">
            IR A PESA 07 →
          </Link>

          <Link href="/prepararme/4-6" className="secondaryTrainingButton">
            VOLVER AL GIMNASIO
          </Link>
        </section>
      )}
    </main>
  );
}
