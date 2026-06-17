import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog · Consejos de mantenimiento automotriz",
  description:
    "Guías y consejos de mantenimiento automotriz para conductores en Querétaro: afinaciones, frenos, diagnóstico y más, escritos por el equipo de Viper Garage.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-12 text-center">
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Blog
          </div>
          <h1 className="font-display text-4xl font-black uppercase md:text-5xl">
            Consejos para tu auto
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Guías prácticas escritas por nuestros mecánicos para que tomes
            mejores decisiones sobre el mantenimiento de tu vehículo.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Muy pronto publicaremos los primeros artículos.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-lg border border-border bg-card p-6 transition hover:border-primary/60"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  {new Date(post.date).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <h2 className="mt-3 font-display text-xl font-bold uppercase leading-snug transition group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
