import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conozca URM Estrategia: nuestra historia, misión, visión y el equipo que impulsa la transformación estratégica de las organizaciones.",
};

const allies = [
  { name: "Desarrollador de Software A", desc: "Desarrollo de soluciones tecnológicas a medida" },
  { name: "Consultor Asociado B", desc: "Especialista sectorial en industria financiera" },
  { name: "Partner Cloud C", desc: "Implementación de arquitecturas cloud Azure y AWS" },
  { name: "Firma Jurídica D", desc: "Cumplimiento normativo y protección de datos" },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nosotros</h1>
          <p className="text-slate-200 text-lg max-w-2xl">
            Una firma de consultoría especializada en estrategia, analítica de datos e inteligencia artificial,
            comprometida con el éxito y la transformación de nuestros clientes.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Who we are */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-5 h-0.5 bg-teal" />
              <span className="text-teal text-xs font-bold uppercase tracking-widest">Quiénes somos</span>
            </div>
            <h2 className="text-3xl font-bold text-navy mb-5">Expertos en estrategia, datos y tecnología</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                URM Estrategia es una firma de consultoría fundada con el propósito de ayudar a las organizaciones
                a tomar decisiones más inteligentes. Nuestro nombre refleja los tres pilares que guían nuestro trabajo:
                <strong className="text-navy"> Utilidad, Rentabilidad y Marca</strong>.
              </p>
              <p>
                Trabajamos con empresas medianas y grandes, startups, fondos de inversión y entidades públicas que
                buscan transformar sus capacidades analíticas, optimizar sus procesos y fortalecer su posición
                competitiva mediante el uso estratégico de los datos y la inteligencia artificial.
              </p>
              <p>
                Nuestro equipo combina formación sólida en ciencias económicas, ingeniería de datos y ciencias de la
                computación con experiencia práctica en múltiples sectores e industrias.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "8+", label: "Servicios especializados" },
              { num: "2", label: "Líneas de práctica" },
              { num: "100%", label: "Soluciones a medida" },
              { num: "RGPD", label: "Cumplimiento normativo" },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-50 rounded-xl p-5 text-center border border-slate-100">
                <p className="text-3xl font-bold text-navy mb-1">{stat.num}</p>
                <p className="text-xs text-slate-500 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-navy text-white rounded-2xl p-8">
            <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-teal-light">Misión</h3>
            <p className="text-slate-200 leading-relaxed">
              Potenciar la capacidad de decisión de las organizaciones mediante la integración de estrategia
              empresarial, analítica de datos e inteligencia artificial, entregando soluciones a medida que
              generan valor real, medible y sostenible.
            </p>
          </div>
          <div className="bg-petrol text-white rounded-2xl p-8">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Visión</h3>
            <p className="text-slate-200 leading-relaxed">
              Ser la firma de consultoría de referencia en estrategia basada en datos e inteligencia artificial
              para organizaciones latinoamericanas que buscan competir con éxito en la economía digital global.
            </p>
          </div>
        </section>

        {/* Confidentiality */}
        <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy mb-3">Compromiso con la confidencialidad</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                En URM Estrategia, la confidencialidad de la información de nuestros clientes es un compromiso
                fundamental, no solo una práctica estándar. Todos nuestros proyectos se rigen bajo acuerdos de
                no divulgación (NDA) desde el primer contacto.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Nuestros procesos de gestión de información cumplen con el{" "}
                <strong className="text-navy">Reglamento General de Protección de Datos (RGPD)</strong> de la
                Unión Europea y con las normativas locales de protección de datos aplicables en cada jurisdicción
                donde operamos. La integridad, confidencialidad y disponibilidad de la información de nuestros
                clientes son garantías que asumimos con cada encargo.
              </p>
            </div>
          </div>
        </section>

        {/* Allies */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-0.5 bg-teal" />
            <span className="text-teal text-xs font-bold uppercase tracking-widest">Ecosistema</span>
          </div>
          <h2 className="text-2xl font-bold text-navy mb-2">Aliados estratégicos</h2>
          <p className="text-slate-500 mb-8">
            Trabajamos con un ecosistema de socios seleccionados que complementan y potencian nuestras
            capacidades para ofrecer soluciones integrales.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allies.map((ally) => (
              <div
                key={ally.name}
                className="border-2 border-dashed border-slate-200 rounded-xl p-5 text-center hover:border-teal/40 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-100 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="font-semibold text-navy text-sm mb-1">{ally.name}</p>
                <p className="text-xs text-slate-400">{ally.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">Logos próximamente</p>
        </section>
      </div>

      <CTASection />
    </>
  );
}
