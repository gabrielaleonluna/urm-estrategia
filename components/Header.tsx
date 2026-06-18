"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const techServices = [
  { name: "Analítica de Datos", href: "/servicios/analitica-de-datos" },
  { name: "Inteligencia Artificial", href: "/servicios/inteligencia-artificial" },
  { name: "Microsoft Power Platform", href: "/servicios/power-platform" },
];

const managementServices = [
  { name: "Evaluación Financiera", href: "/servicios/evaluacion-financiera" },
  { name: "Financiación de Proyectos", href: "/servicios/financiacion-de-proyectos" },
  { name: "Mejoramiento de Procesos", href: "/servicios/mejoramiento-de-procesos" },
  { name: "Valoración de Empresas", href: "/servicios/valoracion-de-empresas" },
  { name: "Planeación Estratégica", href: "/servicios/planeacion-estrategica" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLink = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      className={`text-sm font-medium transition-colors duration-150 hover:text-teal ${
        pathname === href ? "text-teal" : "text-slate-700"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="URM Estrategia"
              width={44}
              height={44}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-navy leading-tight tracking-wide">URM ESTRATEGIA</p>
              <p className="text-[9px] text-slate-400 tracking-widest uppercase">
                Utilidad · Rentabilidad · Marca
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLink("/", "Inicio")}

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                onMouseEnter={() => setServicesOpen(true)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-150 hover:text-teal ${
                  pathname.startsWith("/servicios") ? "text-teal" : "text-slate-700"
                }`}
                aria-expanded={servicesOpen}
              >
                Servicios
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white rounded-xl shadow-xl border border-slate-100 p-5 grid grid-cols-2 gap-x-6"
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-teal mb-3">
                      Tecnología & Analítica
                    </p>
                    <ul className="space-y-1.5">
                      {techServices.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            className="block text-sm text-slate-600 hover:text-navy hover:font-medium transition-colors py-0.5"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-petrol mb-3">
                      Gestión Empresarial
                    </p>
                    <ul className="space-y-1.5">
                      {managementServices.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            className="block text-sm text-slate-600 hover:text-navy hover:font-medium transition-colors py-0.5"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-2 mt-3 pt-3 border-t border-slate-100">
                    <Link
                      href="/servicios"
                      className="text-xs text-teal font-semibold hover:underline"
                    >
                      Ver todos los servicios →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLink("/nosotros", "Nosotros")}
            {navLink("/casos-de-exito", "Casos de Éxito")}
            {navLink("/blog", "Blog")}

            <Link
              href="/contacto"
              className="ml-2 btn-primary text-sm py-2 px-5"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-navy"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1">
          <Link href="/" className="block py-2 text-sm font-medium text-slate-700 hover:text-teal">Inicio</Link>

          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="w-full flex items-center justify-between py-2 text-sm font-medium text-slate-700 hover:text-teal"
          >
            Servicios
            <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {mobileServicesOpen && (
            <div className="pl-3 space-y-1 border-l-2 border-teal/30">
              <p className="text-[10px] font-bold uppercase tracking-widest text-teal pt-1 pb-0.5">Tecnología & Analítica</p>
              {techServices.map((s) => (
                <Link key={s.href} href={s.href} className="block py-1.5 text-sm text-slate-600 hover:text-navy">{s.name}</Link>
              ))}
              <p className="text-[10px] font-bold uppercase tracking-widest text-petrol pt-2 pb-0.5">Gestión Empresarial</p>
              {managementServices.map((s) => (
                <Link key={s.href} href={s.href} className="block py-1.5 text-sm text-slate-600 hover:text-navy">{s.name}</Link>
              ))}
            </div>
          )}

          <Link href="/nosotros" className="block py-2 text-sm font-medium text-slate-700 hover:text-teal">Nosotros</Link>
          <Link href="/casos-de-exito" className="block py-2 text-sm font-medium text-slate-700 hover:text-teal">Casos de Éxito</Link>
          <Link href="/blog" className="block py-2 text-sm font-medium text-slate-700 hover:text-teal">Blog</Link>
          <Link href="/contacto" className="block mt-3 btn-primary text-center text-sm">Contacto</Link>
        </div>
      )}
    </header>
  );
}
