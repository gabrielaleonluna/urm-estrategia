import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="bg-gradient-hero text-white pt-28 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-1 text-slate-300 hover:text-white text-sm mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </Link>
          <span className="inline-block bg-teal/20 text-teal-light text-xs font-bold px-3 py-1.5 rounded-full border border-teal/30 mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-slate-300 text-sm">
            <span>{new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>·</span>
            <span>{post.readTime} de lectura</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="relative h-64 md:h-96 -mt-4">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-transparent" />
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium border-l-4 border-teal pl-5">
          {post.excerpt}
        </p>
        <div
          className="prose prose-slate max-w-none prose-headings:text-navy prose-headings:font-bold prose-a:text-teal prose-strong:text-navy prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:leading-relaxed prose-p:text-slate-600"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "").replace(/##\s(.+)/g, "<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/([^>])\n\n/g, "$1</p><p>").replace(/<p>\s*<h2>/g, "<h2>").replace(/<\/h2>\s*<\/p>/g, "</h2>") }}
        />
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-slate-50 py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy mb-7">Artículos relacionados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group card overflow-hidden flex gap-4">
                  <div className="relative w-28 flex-shrink-0">
                    <Image src={p.image} alt={p.title} fill className="object-cover" sizes="112px" />
                  </div>
                  <div className="p-4 flex flex-col justify-center">
                    <span className="text-xs text-teal font-semibold mb-1">{p.category}</span>
                    <h3 className="text-sm font-semibold text-navy leading-snug group-hover:text-teal transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <span className="text-xs text-slate-400 mt-1">{p.readTime} de lectura</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
