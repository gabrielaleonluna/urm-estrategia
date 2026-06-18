import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Casos de Éxito",
  description:
    "Descubra cómo URM Estrategia ha ayudado a organizaciones a transformar sus operaciones con analítica de datos, inteligencia artificial y consultoría estratégica.",
};

const cases = [
  {
    title: "Transformación del reporting financiero",
    sector: "Servicios Financieros",
    category: "Analítica de Datos",
    result: "Reducción del 75% en tiempo de generación de reportes mensuales",
    description:
      "Diseño e implementación de un ecosistema de dashboards en Power BI conectado a múltiples fuentes de datos, eliminando el proceso manual de consolidación de hojas de cálculo y habilitando el monitoreo en tiempo real de indicadores clave.",
    tags: ["Power BI", "SQL", "ETL"],
    accent: "teal",
  },
  {
    title: "Modelo predictivo de demanda",
    sector: "Manufactura",
    category: "Inteligencia Artificial",
    result: "Reducción del 30% en inventario de seguridad manteniendo nivel de servicio al 98%",
    description:
      "Desarrollo de un modelo de machine learning para previsión de demanda a 12 semanas, integrando variables históricas, estacionalidad, promociones y factores macroeconómicos. Implementado en producción con actualización semanal automatizada.",
    tags: ["Python", "Scikit-learn", "Azure ML"],
    accent: "teal",
  },
  {
    title: "Valoración para proceso de M&A",
    sector: "Tecnología",
    category: "Valoración de Empresas",
    result: "Valoración independiente utilizada como base para transacción de compraventa exitosa",
    description:
      "Elaboración de informe de valoración integral mediante metodologías DCF y comparables de mercado para una empresa de software SaaS en proceso de adquisición. Acompañamiento durante el due diligence y la negociación final.",
    tags: ["DCF", "Comparables", "M&A"],
    accent: "petrol",
  },
  {
    title: "Plan estratégico 2025-2030",
    sector: "Retail",
    category: "Planeación Estratégica",
    result: "Hoja de ruta definida con 12 iniciativas estratégicas priorizadas y OKRs corporativos",
    description:
      "Proceso completo de planeación estratégica con talleres ejecutivos, análisis de entorno y competencia, redefinición del modelo de negocio y diseño del cuadro de mando integral. Implementación del sistema de seguimiento con Power BI.",
    tags: ["OKRs", "Balanced Scorecard", "Power BI"],
    accent: "petrol",
  },
];

export default function CasosDeExitoPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Casos de Éxito</h1>
          <p className="text-slate-200 text-lg max-w-2xl">
            Resultados reales para organizaciones reales. Estas son algunas de las historias
            de transformación que hemos acompañado.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c) => (
            <article key={c.title} className="card overflow-hidden">
              <div className={`h-1.5 ${c.accent === "teal" ? "bg-gradient-to-r from-teal to-teal-light" : "bg-gradient-to-r from-petrol to-petrol-light"}`} />
              <div className="p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${c.accent === "teal" ? "bg-teal/10 text-teal" : "bg-petrol/10 text-petrol"}`}>
                    {c.category}
                  </span>
                  <span className="text-xs text-slate-400">{c.sector}</span>
                </div>
                <h2 className="text-xl font-bold text-navy mb-3">{c.title}</h2>
                <div className={`flex items-start gap-2 mb-4 p-3 rounded-lg ${c.accent === "teal" ? "bg-teal/5 border border-teal/20" : "bg-petrol/5 border border-petrol/20"}`}>
                  <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${c.accent === "teal" ? "text-teal" : "text-petrol"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <p className={`text-sm font-semibold ${c.accent === "teal" ? "text-teal" : "text-petrol"}`}>{c.result}</p>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{c.description}</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            Por razones de confidencialidad, los nombres de nuestros clientes están protegidos bajo acuerdo de no divulgación.
          </p>
        </div>
      </div>

      <CTASection
        title="¿Su empresa podría ser nuestro próximo caso de éxito?"
        description="Cuéntenos su desafío y construyamos juntos los resultados que su organización merece."
      />
    </>
  );
}
