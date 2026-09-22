"use client";

import Link from "next/link";
import { useState } from "react";

export default function Pesa09() {
  const [paso, setPaso] = useState(0);
  const [respuestaInicial, setRespuestaInicial] = useState("");
  const [respuesta10kg, setRespuesta10kg] = useState("");
  const [respuestaFinal, setRespuestaFinal] = useState("");

  const irA = (numero) => {
    setPaso(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPasos = 15;

  return (
    <main className="trainingPage">
      <header className="trainingHeader">
        <Link href="/prepararme/7-9" className="backLink">
          ← SALIR DE LA PESA
        </Link>

        <div className="trainingBrand">
          <span>RR · CRECER</span>
          <small>PESA 09 · GRUPO Y SEXUALIDAD</small>
        </div>

        <div className="kg">{paso <= 6 ? "10 KG" : "20 KG"}</div>
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
          <span className="trainingTag">SPOT · 10 KG</span>

          <h1>«¿Por qué hace esos ruidos?»</h1>

          <div
            style={{
              width: "100%",
              marginBottom: "38px",
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.08)",
              background: "#fff",
            }}
          >
            <img
              src="/pesa09.png"
              alt="Pesa 09 · ¿Por qué hace esos ruidos?"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <div className="scene">
            <p>
              Tu hijo llega del colegio y te cuenta algo que ha ocurrido con
              otros niños.
            </p>

            <blockquote>
              —Papá, hay un niño que se pone a hacer «ahhh, ahhh» y todos
              empiezan a reírse.
              <br />
              <br />
              <strong>¿Por qué hace esos ruidos?</strong>
            </blockquote>
          </div>

          <p className="trainingLead">
            Todavía no busques la respuesta perfecta. Escribe lo que
            probablemente le dirías de verdad.
          </p>

          <h2>¿Qué le responderías?</h2>

          <textarea
            value={respuestaInicial}
            onChange={(e) => setRespuestaInicial(e.target.value)}
            placeholder="Escribe tu respuesta..."
          />

          <button
            className="trainingButton"
            onClick={() => irA(1)}
            disabled={!respuestaInicial.trim()}
          >
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 1 && (
        <section className="trainingScreen">
          <span className="trainingTag">VENTANA RR</span>

          <h1>Antes de explicar, descubre qué sabe.</h1>

          <p className="trainingLead">
            «¿Por qué hace esos ruidos?» parece una pregunta sencilla, pero
            todavía no sabemos qué quiere comprender tu hijo.
          </p>

          <div className="yourFirstAnswer">
            <span>TU RESPUESTA INICIAL</span>
            <p>{respuestaInicial}</p>
          </div>

          <div className="conversation">
            <div>
              <span>UNA PRIMERA RESPUESTA POSIBLE</span>
              <p>
                No sé por qué ese niño los hace. ¿Tú sabes qué creen los demás
                que significan?
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>VENTANA RR</span>
            <p>
              No estamos esquivando su pregunta. Estamos descubriendo cuál es
              realmente.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(2)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 2 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA</span>

          <h1>No sabemos de dónde lo ha aprendido.</h1>

          <div className="factStory">
            <div>
              <span>HECHO</span>
              <p>Un niño hace unos sonidos y otros niños se ríen.</p>
            </div>

            <div>
              <span>TODAVÍA NO SABEMOS</span>
              <p>
                Dónde los escuchó, si sabe qué significan, si los vio en
                Internet, si los oyó en casa, a otros niños o si simplemente
                está imitando algo.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>CRITERIO RR</span>
            <p>
              Una posibilidad no es un hecho. No necesitamos inventar la
              historia de ese niño para responder al nuestro.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(3)}>
            DESCUBRIR QUÉ SABE →
          </button>
        </section>
      )}

      {paso === 3 && (
        <section className="trainingScreen">
          <span className="trainingTag">LA PREGUNTA REAL</span>

          <h1>Ahora tu hijo abre la puerta.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Dicen que esos ruidos los hace la gente cuando está follando.
              </p>
            </div>
          </div>

          <p className="trainingLead">
            Ahora sabemos mucho mejor qué quiere comprender.
          </p>

          <div className="bigQuestion">
            <small>LA PREGUNTA REAL PODRÍA SER</small>
            <h2>
              ¿Es verdad que algunas personas hacen esos sonidos cuando tienen
              relaciones sexuales?
            </h2>
          </div>

          <button className="trainingButton" onClick={() => irA(4)}>
            RESPONDER →
          </button>
        </section>
      )}

      {paso === 4 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRES MULETAS RR</span>

          <h1>Puedes decir la verdad sin convertirlo en una clase.</h1>

          <p className="trainingLead">
            No hay una frase obligatoria. Estas son tres formas de responder
            para un niño de 7–9 años.
          </p>

          <div className="conversation">
            <div>
              <span>A · BREVE</span>
              <p>
                Algunas personas pueden hacer sonidos cuando tienen relaciones
                sexuales. Pero no sabemos por qué ese niño los está imitando.
              </p>
            </div>

            <div>
              <span>B · EXPLICATIVA</span>
              <p>
                Cuando algunas personas tienen relaciones sexuales pueden sentir
                sensaciones agradables y a veces hacen sonidos. No todas las
                personas los hacen. Y que ese niño los imite no significa que
                sepamos dónde los aprendió.
              </p>
            </div>

            <div>
              <span>C · CONVERSACIONAL</span>
              <p>
                Puede estar imitando sonidos que ha escuchado. ¿Tú sabes qué
                creen los demás que significan?
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>RECUERDA</span>
            <p>
              Las frases son muletas, no guiones. Utiliza las palabras que
              encajen con vuestra familia y deja espacio para la siguiente
              pregunta.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(5)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 5 && (
        <section className="trainingScreen">
          <span className="trainingTag">GRUPO ≠ CRITERIO</span>

          <h1>Pero todavía queda algo más que enseñar.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>Todos nos reímos cuando lo hace.</p>
            </div>

            <div>
              <span>TÚ</span>
              <p>
                Entiendo que os pueda hacer gracia porque es algo raro para
                vosotros. Pero que todos se rían no significa que tú tengas que
                hacerlo.
              </p>
            </div>

            <div>
              <span>PUEDES AÑADIR</span>
              <p>
                Piensa cómo se sentiría él si cada vez que hace algo todos se
                ríen de él.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>NUEVO CRITERIO</span>
            <blockquote>
              Que todos hagan algo
              <strong> no decide automáticamente lo que hago yo.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(6)}>
            HACER REPLAY →
          </button>
        </section>
      )}

      {paso === 6 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY · 10 KG</span>

          <h1>Vuelve al principio.</h1>

          <div className="scene">
            <blockquote>
              —Papá, hay un niño que hace esos ruidos y todos se ríen. ¿Por qué
              los hace?
            </blockquote>
          </div>

          <textarea
            value={respuesta10kg}
            onChange={(e) => setRespuesta10kg(e.target.value)}
            placeholder="¿Qué le dirías ahora?"
          />

          <button
            className="trainingButton"
            onClick={() => irA(7)}
            disabled={!respuesta10kg.trim()}
          >
            TERMINAR 10 KG →
          </button>
        </section>
      )}

      {paso === 7 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">10 KG SUPERADOS</span>

          <div className="finishMark">10</div>

          <h1>No has aprendido qué historia hay detrás del otro niño.</h1>

          <h2>Has aprendido a no inventarla.</h2>

          <div className="comparison">
            <div>
              <span>ANTES</span>
              <p>{respuestaInicial}</p>
            </div>

            <div>
              <span>DESPUÉS DE ENTRENAR</span>
              <p>{respuesta10kg}</p>
            </div>
          </div>

          <div className="lesson">
            <span>LO QUE TE LLEVAS</span>
            <blockquote>
              No saber qué significa algo no me obliga a reírme, imitarlo ni
              inventar.
              <strong> Puedo preguntar.</strong>
            </blockquote>
          </div>

          <div className="nextSpot">
            <span>AHORA SUBIMOS EL PESO</span>
            <strong>20 KG</strong>
            <p>
              Esta vez tu hijo ya no será solamente quien observa al grupo.
              También habrá participado.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            SUBIR A 20 KG →
          </button>
        </section>
      )}

      {paso === 8 && (
        <section className="trainingScreen">
          <span className="trainingTag">SPOT · 20 KG</span>

          <h1>Ahora tu hijo también participa.</h1>

          <div className="scene">
            <blockquote>
              —Papá, hoy nosotros también hemos empezado a hacer los ruidos.
              Todos los hacíamos y nos partíamos de risa.
              <br />
              <br />
              <strong>¿Qué pasa? Si solo estamos jugando.</strong>
            </blockquote>
          </div>

          <h2>¿Cuál sería tu primer movimiento?</h2>

          <div className="choiceList">
            <button onClick={() => irA(9)}>
              Decirle que eso son cosas de mayores y que no quieres que vuelva a
              hacerlo.
            </button>

            <button onClick={() => irA(9)}>
              Decirle que no pasa nada porque son tonterías de niños.
            </button>

            <button onClick={() => irA(10)}>
              Reconocer que puede resultarles gracioso y ayudarle a pensar qué
              ocurre cuando todos imitan a un niño y se ríen de él.
            </button>

            <button onClick={() => irA(9)}>
              Preguntar inmediatamente quién empezó para hablar con sus padres.
            </button>
          </div>
        </section>
      )}

      {paso === 9 && (
        <section className="trainingScreen">
          <span className="trainingTag">REPLAY INMEDIATO</span>

          <h1>No necesitamos elegir entre prohibir e ignorar.</h1>

          <p className="trainingLead">
            La situación permite enseñar algo más útil que una prohibición: cómo
            decidir cuando el grupo empuja en una dirección.
          </p>

          <div className="criterionReminder">
            <span>RECUPERA EL CRITERIO</span>
            <p>
              Que algo haga reír al grupo no significa que no pueda afectar a
              otra persona. Y que todos participen no elimina mi capacidad de
              decidir.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(8)}>
            VOLVER AL SPOT →
          </button>
        </section>
      )}

      {paso === 10 && (
        <section className="trainingScreen">
          <span className="trainingTag">TRANSFERENCIA · 20 KG</span>

          <h1>Ahora hazle pensar.</h1>

          <div className="conversation">
            <div>
              <span>UNA RESPUESTA POSIBLE</span>
              <p>
                Entiendo que os haga gracia y que cuando todos empiezan sea
                fácil seguirlos. Pero si estáis imitando a ese niño y todos os
                reís, él puede sentir que os estáis riendo de él.
              </p>
            </div>
          </div>

          <div className="bigQuestion">
            <small>PREGUNTA RR</small>
            <h2>«Si nadie más se riera, ¿tú seguirías haciéndolo?»</h2>
          </div>

          <p className="trainingLead">
            Ya no le estamos diciendo solamente qué hacer. Le estamos ayudando
            a observar cuánto pesa el grupo sobre su decisión.
          </p>

          <button className="trainingButton" onClick={() => irA(11)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 11 && (
        <section className="trainingScreen">
          <span className="trainingTag">HECHO ≠ HISTORIA · 20 KG</span>

          <h1>Entonces llega otra pregunta.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                ¿Y si ese niño hace esos ruidos porque ha escuchado a sus
                padres?
              </p>
            </div>

            <div>
              <span>UNA RESPUESTA POSIBLE</span>
              <p>
                Puede ser. También puede haberlos escuchado en Internet, en una
                película, a otro niño o en otro sitio. No lo sabemos.
              </p>
            </div>

            <div>
              <span>PUEDES AÑADIR</span>
              <p>
                Como no lo sabemos, no necesitamos inventarnos una historia
                sobre él ni sobre su familia.
              </p>
            </div>
          </div>

          <div className="lesson">
            <span>CRITERIO</span>
            <blockquote>
              La curiosidad no convierte una posibilidad
              <strong> en un hecho.</strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(12)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 12 && (
        <section className="trainingScreen">
          <span className="trainingTag">VERDAD PROGRESIVA</span>

          <h1>«Pero ¿por qué hacen esos sonidos los adultos?»</h1>

          <p className="trainingLead">
            Ahora la pregunta sí es directa. Podemos responder con verdad y
            ajustar la profundidad.
          </p>

          <div className="conversation">
            <div>
              <span>A · BREVE</span>
              <p>
                Algunas personas hacen sonidos cuando sienten sensaciones
                agradables durante una relación sexual.
              </p>
            </div>

            <div>
              <span>B · EXPLICATIVA</span>
              <p>
                Durante una relación sexual algunas partes del cuerpo pueden
                producir sensaciones agradables y algunas personas expresan
                esas sensaciones haciendo sonidos. Otras no.
              </p>
            </div>

            <div>
              <span>C · CONVERSACIONAL</span>
              <p>
                Pueden hacerlos porque están sintiendo algo agradable. ¿Era eso
                lo que querías saber o te preguntabas otra cosa?
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>Y AHORA, PARA</span>
            <p>
              No añadas cinco explicaciones porque puedas hacerlo. Deja que la
              siguiente pregunta decida si necesita más información.
            </p>
          </div>

          <button className="trainingButton" onClick={() => irA(13)}>
            CONTINUAR →
          </button>
        </section>
      )}

      {paso === 13 && (
        <section className="trainingScreen">
          <span className="trainingTag">CUANDO EL SPOT CAMBIA</span>

          <h1>Una información nueva puede cambiar lo que necesitamos hacer.</h1>

          <div className="conversation">
            <div className="childAnswer">
              <span>TU HIJO</span>
              <p>
                Es que no solo hacía los ruidos. El otro día nos enseñó un vídeo
                y nos dijo que hiciéramos lo mismo.
              </p>
            </div>

            <div>
              <span>UNA PRIMERA RESPUESTA POSIBLE</span>
              <p>
                Gracias por contármelo. Quiero entender bien qué pasó. No estás
                en problemas por decírmelo.
              </p>
            </div>
          </div>

          <div className="criterionReminder">
            <span>CAMBIO DE MODO</span>
            <p>
              Ahora existe información nueva. Escucha con calma qué ocurrió sin
              convertir la conversación en un interrogatorio ni completar tú
              las partes que todavía no conoces.
            </p>
          </div>

          <div className="lesson">
            <span>SEGURIDAD</span>
            <blockquote>
              Si aparecen exposición sexual preocupante, presión, amenazas,
              secretos, contacto sexual o participación de un adulto,
              <strong>
                {" "}
                la prioridad deja de ser terminar el entrenamiento y pasa a ser
                la seguridad del menor y la ayuda adecuada.
              </strong>
            </blockquote>
          </div>

          <button className="trainingButton" onClick={() => irA(14)}>
            HACER REPLAY FINAL →
          </button>
        </section>
      )}

      {paso === 14 && (
        <section className="trainingScreen finishScreen">
          <span className="trainingTag">20 KG SUPERADOS</span>

          <div className="finishMark">20</div>

          <h1>Lo que parecía una broma también podía enseñarnos a pensar.</h1>

          <p className="trainingLead">
            Vuelve mentalmente al primer momento:
          </p>

          <div className="scene">
            <blockquote>
              —Papá, hay un niño que hace esos ruidos y todos se ríen. ¿Por qué
              los hace?
            </blockquote>
          </div>

          <h2>¿Qué le dirías ahora con tus propias palabras?</h2>

          <textarea
            value={respuestaFinal}
            onChange={(e) => setRespuestaFinal(e.target.value)}
            placeholder="Construye tu respuesta sin copiar las frases anteriores..."
          />

          <div className="lesson">
            <span>CRITERIO RR · CRECER</span>
            <blockquote>
              No saber qué significa algo no me obliga a reírme, imitarlo ni
              inventar su historia.
              <strong> Puedo preguntar.</strong>
            </blockquote>
          </div>

          <div className="factStory">
            <div>
              <span>HECHO ≠ HISTORIA</span>
              <p>No invento dónde aprendió algo otro niño.</p>
            </div>

            <div>
              <span>GRUPO ≠ CRITERIO</span>
              <p>
                Que todos participen no decide automáticamente lo que hago.
              </p>
            </div>
          </div>

          <div className="factStory">
            <div>
              <span>VERDAD PROGRESIVA</span>
              <p>
                Respondo lo que quiere saber sin convertir cada pregunta en una
                clase completa.
              </p>
            </div>

            <div>
              <span>SEGURIDAD</span>
              <p>
                Si aparece información preocupante, dejo de especular y
                comprendo qué ha ocurrido.
              </p>
            </div>
          </div>

          <div className="nextSpot">
            <span>PESA 09 · COMPLETADA</span>
            <strong>UNA PUERTA ABIERTA</strong>
            <p>
              No podemos controlar todo lo que nuestros hijos van a escuchar.
              Podemos conseguir que, cuando no entiendan algo, sepan dónde
              preguntar.
            </p>
          </div>

          <Link
            href="/prepararme/7-9"
            className="trainingButton linkButton"
          >
            VOLVER AL GIMNASIO →
          </Link>
        </section>
      )}
    </main>
  );
}
