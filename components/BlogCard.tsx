import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group card overflow-hidden flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-teal text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {post.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
          <span>{new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span>·</span>
          <span>{post.readTime} de lectura</span>
        </div>
        <h3 className="font-semibold text-navy text-base leading-snug mb-3 group-hover:text-teal transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-teal">
          Leer artículo
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
