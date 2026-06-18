import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}

export default function CTASection({
  title = "¿Listo para transformar su organización?",
  description = "Agenda una consultoría gratuita y descubre cómo podemos ayudarte a tomar decisiones más inteligentes con datos e IA.",
  primaryLabel = "Agenda una consultoría",
  primaryHref = "/contacto",
  secondaryLabel = "Ver nuestros servicios",
  secondaryHref = "/servicios",
  dark = true,
}: CTASectionProps) {
  return (
    <section className={dark ? "bg-gradient-hero py-20" : "bg-slate-50 py-20"}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? "text-white" : "text-navy"}`}>
          {title}
        </h2>
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${dark ? "text-slate-200" : "text-slate-500"}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryHref} className="btn-primary">
            {primaryLabel}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href={secondaryHref} className={dark ? "btn-secondary" : "btn-outline"}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
