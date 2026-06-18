import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicesData } from "@/lib/services-data";

const SLUG = "analitica-de-datos";

export async function generateMetadata(): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === SLUG);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary.slice(0, 160),
  };
}

export default function ServicePage() {
  const service = servicesData.find((s) => s.slug === SLUG);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
