import Link from "next/link";
import type { ServiceData } from "@/lib/services-data";

interface ServicePageTemplateProps {
  service: ServiceData;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const accentClass = service.category === "tech" ? "text-teal" : "text-petrol";
  const bgAccentClass = service.category === "tech" ? "bg-teal" : "bg-petrol";
  const borderAccentClass = service.category === "tech" ? "border-teal" : "border-petrol";

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Todos los servicios
            </Link>
          </div>
          <p className="text-teal-light text-xs font-bold uppercase tracking-widest mb-3">
            {service.category === "tech" ? "Tecnología & Analítica Avanzada" : "Gestión Empresarial"}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">{service.title}</h1>
          <p className="text-slate-200 text-lg leading-relaxed max-w-3xl">{service.summary}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Objective */}
        <section>
          <h2 className={`text-2xl font-bold text-navy mb-4 flex items-center gap-3`}>
            <span className={`w-1 h-7 ${bgAccentClass} rounded-full inline-block`} />
            Objetivo del servicio
          </h2>
          <p className="text-slate-600 leading-relaxed text-base">{service.objective}</p>
        </section>

        {/* Characteristics */}
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
            <span className={`w-1 h-7 ${bgAccentClass} rounded-full inline-block`} />
            Características del servicio
          </h2>
          <ol className="space-y-3">
            {service.characteristics.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className={`flex-shrink-0 w-7 h-7 rounded-full ${bgAccentClass} text-white text-xs font-bold flex items-center justify-center mt-0.5`}>
                  {i + 1}
                </span>
                <p className="text-slate-600 leading-relaxed">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Benefits */}
        <section className="bg-slate-50 rounded-2xl p-7">
          <h2 className="text-2xl font-bold text-navy mb-6">Beneficios para el cliente</h2>
          <ul className="space-y-3">
            {service.benefits.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${accentClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-slate-600 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Scope + Modalities grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-3">
              <span className={`w-1 h-6 ${bgAccentClass} rounded-full inline-block`} />
              Ámbitos de aplicación
            </h2>
            <ul className="space-y-2">
              {service.scope.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full ${bgAccentClass} flex-shrink-0 mt-2`} />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-3">
              <span className={`w-1 h-6 ${bgAccentClass} rounded-full inline-block`} />
              Modalidades del servicio
            </h2>
            <ul className="space-y-2">
              {service.modalities.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full ${bgAccentClass} flex-shrink-0 mt-2`} />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Technologies */}
        <section>
          <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-3">
            <span className={`w-1 h-6 ${bgAccentClass} rounded-full inline-block`} />
            Tecnologías y metodologías utilizadas
          </h2>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1.5 text-sm font-medium rounded-full border ${borderAccentClass} ${accentClass} bg-white`}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={`rounded-2xl p-8 bg-gradient-hero text-white text-center`}>
          <h2 className="text-2xl font-bold mb-3">
            ¿Te interesa este servicio?
          </h2>
          <p className="text-slate-200 mb-6 max-w-lg mx-auto">
            Cuéntanos tu desafío y diseñaremos juntos la solución más adecuada para tu organización.
          </p>
          <Link
            href={`/contacto?servicio=${encodeURIComponent(service.title)}`}
            className="btn-primary"
          >
            Solicita más información
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </section>
      </div>
    </>
  );
}
