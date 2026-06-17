import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, CircleCheck } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} en Querétaro`,
    description: service.description,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: `${service.title} · ${site.name}`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-20">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-5">
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-primary">
          Servicio
        </div>
        <h1 className="font-display text-4xl font-black uppercase md:text-5xl">
          {service.title}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          {service.description}
        </p>

        <h2 className="mt-10 font-display text-xl font-bold uppercase tracking-wide">
          Qué incluye
        </h2>
        <ul className="mt-4 space-y-3">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-3 text-base font-semibold"
            >
              <CircleCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>

        {service.faqs.length > 0 && (
          <>
            <h2 className="mt-12 font-display text-xl font-bold uppercase tracking-wide">
              Preguntas frecuentes
            </h2>
            <div className="mt-4 space-y-4">
              {service.faqs.map((f) => (
                <div
                  key={f.q}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <div className="font-semibold">{f.q}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-12 flex flex-wrap gap-3 rounded-lg border border-primary/40 bg-primary/10 p-6">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-viper)] transition hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Agenda por WhatsApp
          </a>
          <a
            href={`tel:${site.phoneE164}`}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition hover:border-primary hover:text-primary"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
