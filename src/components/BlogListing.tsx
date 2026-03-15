"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { posts, CATEGORIES, type Category, type Post } from "@/data/posts";

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f5f0e1]">
      {/* Category filter bar */}
      <div className="border-b border-[#ccc7b8] bg-[#f5f0e1] sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? "border-[#6b7c5e] text-[#6b7c5e]"
                    : "border-transparent text-[#555] hover:text-[#1a1a1a]"
                }`}
              >
                {cat === "All" ? "All Posts" : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Post list */}
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-6">
        {filtered.length === 0 && (
          <p className="text-[#555] text-center py-16">No posts in this category yet.</p>
        )}
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.slug}`} className="block group">
      <article className="bg-white border border-[#e5dfd0] overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow">
        {/* Cover image */}
        <div className="relative w-full sm:w-[46%] flex-shrink-0 aspect-[16/10] sm:aspect-auto sm:min-h-[220px] bg-[#ddd8cc]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 46vw"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            {/* Category + meta */}
            <div className="flex items-center gap-2 mb-3 text-xs text-[#6b7c5e] font-semibold uppercase tracking-wide">
              <span>{post.category}</span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-serif text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#6b7c5e] transition-colors">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-sm text-[#555] leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          {/* Author / date row */}
          <div className="mt-4 pt-3 border-t border-[#eee8dc] flex items-center gap-2 text-xs text-[#888]">
            {/* Avatar placeholder */}
            <div className="w-6 h-6 rounded-full bg-[#6b7c5e] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
              S
            </div>
            <span className="font-medium text-[#555]">{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
