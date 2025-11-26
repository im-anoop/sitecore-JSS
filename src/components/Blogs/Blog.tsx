"use client"
import { useState } from "react";
import styles from "./Blog.module.css";
import { BlogFields } from "./Blogs.model";
import Image from "next/image";

interface BlogProps {
  blogs: { id: string; fields: BlogFields }[];
}

export default function Blogs({ blogs }: BlogProps) {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleBlogs = blogs.slice(0, visibleCount);

  return (
    <section className={styles.blogs}>
      <h2>Latest Blogs</h2>
      <div className={styles.grid}>
        {visibleBlogs.map((blog) => (
          <article key={blog.id} className={styles.card}>
            <Image
              src={blog.fields.image.src}
              alt={blog.fields.image.alt || blog.fields.title.value}
              width={300}
              height={200}
              className={styles.image}
            />
            <h3>{blog.fields.title.value}</h3>
            <p>{blog.fields.summary.value}</p>
            <a href={blog.fields.cta.href} className={styles.cta}>
              {blog.fields.cta.text}
            </a>
          </article>
        ))}
      </div>
      {visibleCount < blogs.length && (
        <button className={styles.loadMore} onClick={() => setVisibleCount(visibleCount + 3)}>
          Load More
        </button>
      )}
    </section>
  );
}