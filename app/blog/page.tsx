import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Perspectivas, análisis y tendencias sobre estrategia empresarial, analítica de datos e inteligencia artificial.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-slate-200 text-lg max-w-2xl">
            Perspectivas, análisis y tendencias sobre estrategia, analítica de datos e inteligencia
            artificial para líderes empresariales y profesionales del sector.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Future pagination placeholder */}
        <div className="mt-12 flex justify-center">
          <p className="text-slate-400 text-sm">Más artículos próximamente</p>
        </div>
      </div>
    </>
  );
}
