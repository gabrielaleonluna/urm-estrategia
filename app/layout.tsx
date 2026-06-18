import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://urmestrategia.com"),
  title: {
    default: "URM Estrategia — Consultoría en Estrategia, Datos e IA",
    template: "%s | URM Estrategia",
  },
  description:
    "Firma de consultoría especializada en estrategia empresarial, analítica de datos e inteligencia artificial. Ayudamos a las organizaciones a tomar decisiones más inteligentes.",
  keywords: [
    "consultoría estratégica",
    "analítica de datos",
    "inteligencia artificial",
    "Power BI",
    "Power Platform",
    "planeación estratégica",
    "valoración de empresas",
    "URM Estrategia",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "URM Estrategia",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
