import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "URM Estrategia — Consultoría en Estrategia, Datos e IA",
  description:
    "Ayudamos a las organizaciones a tomar decisiones inteligentes combinando estrategia, analítica de datos e inteligencia artificial.",
};

const techServices = [
  {
    title: "Analítica de Datos",
    desc: "Transformamos datos en conocimiento estratégico accionable para optimizar la toma de decisiones.",
    href: "/servicios/analitica-de-datos",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Inteligencia Artificial",
    desc: "Desarrollamos modelos de IA y machine learning que automatizan procesos y generan predicciones de alta precisión.",
    href: "/servicios/inteligencia-artificial",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
  },
  {
    title: "Microsoft Power Platform",
    desc: "Digitalizamos y automatizamos procesos con Power Apps, Power Automate y Power BI sin necesidad de desarrollo complejo.",
    href: "/servicios/power-platform",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const managementServices = [
  {
    title: "Evaluación Financiera",
    desc: "Análisis financiero riguroso para decisiones de inversión con modelos DCF, VAN, TIR y análisis de escenarios.",
    href: "/servicios/evaluacion-financiera",
  },
  {
    title: "Financiación de Proyectos",
    desc: "Identificamos y estructuramos las fuentes de capital más adecuadas para financiar sus proyectos de inversión.",
    href: "/servicios/financiacion-de-proyectos",
  },
  {
    title: "Mejoramiento de Procesos",
    desc: "Rediseñamos procesos operativos con Lean, Six Sigma y BPM para reducir costos y aumentar la eficiencia.",
    href: "/servicios/mejoramiento-de-procesos",
  },
  {
    title: "Valoración de Empresas",
    desc: "Determinamos el valor justo de mercado de su empresa con metodologías reconocidas internacionalmente.",
    href: "/servicios/valoracion-de-empresas",
  },
  {
    title: "Planeación Estratégica",
    desc: "Co-construimos su hoja de ruta estratégica con OKRs, Balanced Scorecard y talleres ejecutivos.",
    href: "/servicios/planeacion-estrategica",
  },
];

const technologies = [
  "Power BI", "Power Platform", "Python", "Azure", "AWS",
  "TensorFlow", "SQL", "Tableau", "Scikit-learn", "MLflow",
  "Bizagi", "Lean Six Sigma", "OKRs", "Balanced Scorecard",
];

const whyUs = [
  {
    title: "Equipo certificado y especializado",
    desc: "Consultores con certificaciones en Microsoft, AWS, Azure y metodologías internacionales de gestión empresarial.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Soluciones a medida",
    desc: "Cada organización es única. Diseñamos soluciones específicas para su contexto, sector y objetivos.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Confidencialidad y cumplimiento",
    desc: "Operamos bajo estrictos protocolos de confidencialidad y cumplimiento con RGPD y normativas locales de protección de datos.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Enfoque en resultados",
    desc: "Nos comprometemos con métricas de impacto concretas. El éxito de nuestros clientes es nuestra mejor referencia.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-hero text-white overflow-hidden min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div>
            <span className="inline-block bg-teal/20 text-teal-light text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 border border-teal/30">
              Estrategia · Datos · Inteligencia Artificial
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Decisiones más
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-teal">
                inteligentes
              </span>
              para su organización
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Ayudamos a las organizaciones a transformar datos en ventajas competitivas sostenibles,
              combinando estrategia empresarial, analítica avanzada e inteligencia artificial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-primary text-base py-3.5 px-7">
                Agenda una consultoría
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/servicios" className="btn-secondary text-base py-3.5 px-7">
                Ver servicios
              </Link>
            </div>
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Equipo certificado
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Soluciones a medida
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Confidencialidad total
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service lines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tech */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-5 h-0.5 bg-teal" />
              <span className="text-teal text-xs font-bold uppercase tracking-widest">Línea 1</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <h2 className="text-3xl font-bold text-navy max-w-md">Tecnología y Analítica Avanzada</h2>
              <Link href="/servicios" className="text-sm font-semibold text-teal hover:underline flex items-center gap-1">
                Ver todos →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {techServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group card p-6 hover:border-teal/30"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-4 group-hover:bg-teal group-hover:text-white transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="font-semibold text-navy mb-2 group-hover:text-teal transition-colors">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Management */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-5 h-0.5 bg-petrol" />
              <span className="text-petrol text-xs font-bold uppercase tracking-widest">Línea 2</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <h2 className="text-3xl font-bold text-navy max-w-md">Gestión Empresarial</h2>
              <Link href="/servicios" className="text-sm font-semibold text-petrol hover:underline flex items-center gap-1">
                Ver todos →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {managementServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group card p-5 hover:border-petrol/30"
                >
                  <h3 className="font-semibold text-navy text-sm mb-2 group-hover:text-petrol transition-colors">{s.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                  <p className="mt-4 text-xs font-semibold text-petrol flex items-center gap-1">
                    Ver más
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">¿Por qué elegir URM Estrategia?</h2>
            <p className="section-subtitle mx-auto text-slate-500">
              Combinamos rigor analítico, experiencia sectorial y tecnología de punta para entregar resultados medibles.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-navy text-white flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule a consultation */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Agenda una consultoría gratuita</h2>
          <p className="section-subtitle mx-auto text-slate-500 mb-10">
            Elige el horario que mejor se ajuste a tu agenda y conversemos sobre su proyecto.
          </p>
          <CalendlyEmbed />
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Tecnologías y metodologías con las que trabajamos
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:border-teal hover:text-teal transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="section-title">Últimas publicaciones</h2>
              <p className="text-slate-500">Perspectivas y análisis sobre estrategia, datos e inteligencia artificial.</p>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-teal hover:underline flex-shrink-0">
              Ver todas las publicaciones →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
