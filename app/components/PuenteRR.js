import Link from "next/link";

export default function PuenteRR({
  tipo = "conversacion",
  origen,
  destino,
  titulo,
  texto,
  href,
  onContinuar,
}) {
  const esSeguridad = tipo === "seguridad";

  return (
    <aside
      className={`puenteRR ${
        esSeguridad ? "puenteRRSafety" : ""
      }`}
    >
      <div className="puenteRRTop">
        <span className="puenteRRIcon">
          {esSeguridad ? "!" : "RR"}
        </span>

        <div>
          <span className="puenteRREyebrow">
            {esSeguridad
              ? "PUENTE RR · SEGURIDAD"
              : "PUENTE RR · HA APARECIDO OTRA CONVERSACIÓN"}
          </span>

          <h2>{titulo}</h2>
        </div>
      </div>

      <p className="puenteRRText">{texto}</p>

      {!esSeguridad && (
        <div className="puenteRRRoute">
          <div>
            <small>ESTÁS ENTRENANDO</small>
            <strong>{origen}</strong>
          </div>

          <span className="puenteRRArrow">→</span>

          <div>
            <small>PUEDES ENTRENAR</small>
            <strong>{destino}</strong>
          </div>
        </div>
      )}

      <div className="puenteRRActions">
        <Link href={href} className="puenteRRPrimary">
          {esSeguridad
            ? "IR A · HA PASADO ALGO →"
            : `ENTRENAR ${destino} →`}
        </Link>

        {!esSeguridad && onContinuar && (
          <button
            type="button"
            className="puenteRRSecondary"
            onClick={onContinuar}
          >
            SEGUIR CON {origen}
          </button>
        )}
      </div>

      {!esSeguridad && (
        <p className="puenteRRNote">
          No tienes que cambiar de entrenamiento. El puente aparece porque
          vuestra conversación acaba de abrir otra posibilidad.
        </p>
      )}
    </aside>
  );
}
