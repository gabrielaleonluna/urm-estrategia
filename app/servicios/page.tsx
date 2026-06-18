import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { techServices, managementServices } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Servicios de Consultoría",
  description:
    "Descubra nuestras dos líneas de servicio: Tecnología y Analítica Avanzada, y Gestión Empresarial. Soluciones de consultoría estratégica a medida.",
};

const techIcons: Record<string, React.ReactNode> = {
  "analitica-de-datos": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  "inteligencia-artificial": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
    </svg>
  ),
  "power-platform": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-slate-200 text-lg max-w-2xl mx-auto">
            Dos líneas de servicio complementarias que cubren los desafíos estratégicos y tecnológicos
            más relevantes de las organizaciones actuales.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Tech line */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-0.5 bg-teal" />
            <span className="text-teal text-xs font-bold uppercase tracking-widest">Línea 1</span>
          </div>
          <h2 className="text-3xl font-bold text-navy mb-2">Tecnología y Analítica Avanzada</h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            Soluciones tecnológicas que transforman los datos de su organización en inteligencia estratégica y ventajas competitivas medibles.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techServices.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="group card p-7 hover:border-teal/40 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-5 group-hover:bg-teal group-hover:text-white transition-colors">
                  {techIcons[service.slug]}
                </div>
                <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">{service.summary}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 bg-teal/10 text-teal rounded-full">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-teal">
                  Ver detalles
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Management line */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-6 h-0.5 bg-petrol" />
            <span className="text-petrol text-xs font-bold uppercase tracking-widest">Línea 2</span>
          </div>
          <h2 className="text-3xl font-bold text-navy mb-2">Gestión Empresarial</h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            Consultoría estratégica y financiera para maximizar la rentabilidad, el valor y la competitividad de su organización.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementServices.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="group card p-7 hover:border-petrol/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-petrol transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">{service.summary}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 bg-petrol/10 text-petrol rounded-full">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-petrol">
                  Ver detalles
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <CTASection
        title="¿No encuentra lo que busca?"
        description="Cuéntenos su desafío. Diseñamos soluciones a medida para necesidades que van más allá de nuestro catálogo estándar."
      />
    </>
  );
}
