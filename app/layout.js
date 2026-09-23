import "./globals.css";
import "./dark-theme.css";

export const metadata = {
  title: "RR · Crecer | Método Ruiz Rivas",
  description:
    "Educación afectiva, corporal y sexual para familias. Entrenamientos para crecer juntos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
