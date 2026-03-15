import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPost, posts, CATEGORIES, type Category, type ContentBlock } from "@/data/posts";

/* ── Static params for build-time generation ── */
export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

/* ── Per-post metadata ── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | RelentCare Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.relentcarehospitals.com/post/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.relentcarehospitals.com/post/${post.slug}`,
      images: [{ url: post.coverImage }],
    },
  };
}

/* ── Render a single content block ── */
function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="text-2xl sm:text-3xl font-serif text-[#1a1a1a] mt-8 mb-3">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-xl font-serif text-[#1a1a1a] mt-6 mb-2">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="text-[#2d2d2d] leading-relaxed mb-4">{block.text}</p>
      );
    case "ul":
      return (
        <ul className="list-disc list-inside space-y-1.5 mb-4">
          {block.items.map((item, i) => (
            <li key={i} className="text-[#2d2d2d] leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

/* ── Page component ── */
export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const hasContent = post.content && post.content.length > 0;

  return (
    <div className="min-h-screen bg-[#f5f0e1]">
      <Header />

      {/* Category filter bar — same as blog listing */}
      <div className="border-b border-[#ccc7b8] bg-[#f5f0e1]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto">
            {CATEGORIES.map((cat: Category) => (
              <Link
                key={cat}
                href={cat === "All" ? "/blog" : `/blog?cat=${encodeURIComponent(cat)}`}
                className="flex-shrink-0 px-5 py-4 text-sm font-medium border-b-2 border-transparent text-[#555] hover:text-[#1a1a1a] hover:border-[#6b7c5e] transition-colors whitespace-nowrap"
              >
                {cat === "All" ? "All Posts" : cat}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Article */}
      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#888] mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-[#6b7c5e]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#6b7c5e]">Blog</Link>
          <span>/</span>
          <span className="text-[#555] line-clamp-1">{post.title}</span>
        </nav>

        <article className="bg-white border border-[#e5dfd0] overflow-hidden">
          {/* Cover image */}
          <div className="relative w-full aspect-[16/7] bg-[#ddd8cc]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="px-6 sm:px-10 py-8">
            {/* Category tag */}
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-[#6b7c5e] mb-3">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-serif text-[#1a1a1a] leading-tight mb-4">
              {post.title}
            </h1>

            {/* Author / date / read time */}
            <div className="flex items-center gap-2 text-sm text-[#888] pb-6 border-b border-[#eee8dc] mb-6">
              <div className="w-8 h-8 rounded-full bg-[#6b7c5e] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                S
              </div>
              <span className="font-medium text-[#555]">{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            {/* Content */}
            {hasContent ? (
              <div>
                {post.content.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            ) : (
              /* Fallback when scraper hasn't been run */
              <div>
                <p className="text-[#2d2d2d] leading-relaxed mb-4 text-lg">
                  {post.excerpt}
                </p>
                <div className="mt-8 p-4 bg-[#f5f0e1] border border-[#ccc7b8] text-sm text-[#555]">
                  <p>
                    Full article content will be available shortly. To read the complete article, visit{" "}
                    <a
                      href={`https://www.relentcarehospitals.com/post/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6b7c5e] underline"
                    >
                      the original article
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}

            {/* Back link */}
            <div className="mt-10 pt-6 border-t border-[#eee8dc]">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#6b7c5e] hover:text-[#5a6b4e] transition-colors"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
