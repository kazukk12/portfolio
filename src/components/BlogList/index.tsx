"use client";

import { getBlogList } from "@/lib/microcms";
import { Blog } from "@/types/microcms";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getBlogList();
      setBlogs(data);
    })();
  }, []);

  return (
    <section id="blogList" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">ブログ</h2>
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <div className="border p-4 rounded shadow hover:bg-gray-200 transition cursor-pointer">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-600">{blog.publishedAt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}