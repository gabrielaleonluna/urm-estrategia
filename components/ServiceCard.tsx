import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  category?: "tech" | "management";
}

export default function ServiceCard({ title, description, href, icon, category }: ServiceCardProps) {
  const accent = category === "tech" ? "teal" : "petrol";

  return (
    <Link
      href={href}
      className="group card p-6 flex flex-col gap-4 hover:border-teal/30 transition-all duration-200"
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0 ${
          accent === "teal" ? "bg-teal" : "bg-petrol"
        } group-hover:scale-105 transition-transform`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-navy text-base mb-1.5 group-hover:text-teal transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
      <div className={`flex items-center gap-1 text-sm font-semibold ${accent === "teal" ? "text-teal" : "text-petrol"} mt-auto`}>
        Más información
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
}
