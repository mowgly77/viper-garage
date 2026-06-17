import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ShieldCheck, CircleCheck } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import StarRating from "@/components/StarRating";
import SocialFeed from "@/components/SocialFeed";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const featuredService = services.find((s) => s.featured)!;
const gridServices = services.filter((s) => !s.featured);

const testimonials = [
  {
    quote: "Excelente servicio, honestos y buen trato.",
    author: "Cliente verificado",
  },
  {
    quote: "Muy limpio el taller, muy buena atención.",
    author: "Cliente verificado",
  },
  {
    quote:
      "Realmente agradezco que aún haya mecánicos honestos como aquí.",
    author: "Cliente verificado",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <Image
          src="https://picsum.photos/seed/viper-hero/1920/1080"
          alt="Auto en revisión dentro del taller Viper Garage"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-20 md:grid-cols-[1.2fr_0.8fr] md:pb-32 md:pt-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Santiago de Querétaro · Abierto hoy
            </div>
            <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
              Tu auto en manos
              <br />
              <span className="text-primary text-glow-red">honestas</span> y
              expertas.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              En Viper Garage cuidamos tu vehículo como si fuera nuestro.
              Afinaciones, frenos, suspensiones y diagnóstico computarizado
              con la confianza de más de{" "}
              <strong className="text-foreground">5,000 clientes</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition hover:border-primary hover:text-primary"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <StarRating />
              <div className="text-sm">
                <span className="font-bold text-foreground">
                  {site.rating.count.toLocaleString("es-MX")}
                </span>
                <span className="text-muted-foreground">
                  {" "}
                  reseñas en Google
                </span>
              </div>
            </div>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-[80px]" />
              <div className="flex h-[280px] w-[280px] items-center justify-center rounded-2xl border border-border/60 bg-card">
                <span className="font-display text-7xl font-black text-primary">
                  V
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-y border-border bg-black/40 py-4">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-x-8 gap-y-2 px-5 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-primary">★ Mecánicos certificados</span>
            <span>★ Refacciones de calidad</span>
            <span className="text-primary">★ Diagnóstico computarizado</span>
            <span>★ Servicio garantizado</span>
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section className="relative overflow-hidden border-b border-border bg-card py-20">
        <div className="absolute inset-0 hex-pattern opacity-30" />
        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Promoción
          </div>
          <h2 className="font-display text-4xl font-black uppercase leading-tight md:text-6xl">
            ¡Obtén un <span className="text-primary text-glow-red">descuento</span>
            <br />
            en tu primer servicio!
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Visítanos por primera vez y recibe un descuento especial. Solo
            menciona esta promoción al agendar.
          </p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-viper)] transition hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Reclamar descuento
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="relative py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-primary">
                Servicios
              </div>
              <h2 className="font-display text-4xl font-black uppercase md:text-5xl">
                Lo que hacemos mejor
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Servicio integral para tu vehículo con equipo profesional y
              atención personalizada.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gridServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/servicios"
              className="text-sm font-bold uppercase tracking-wider text-primary underline-offset-4 hover:underline"
            >
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIO MAYOR */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[360px]">
            <Image
              src="https://picsum.photos/seed/viper-engine/1280/1280"
              alt="Servicio mayor de motor en Viper Garage"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background" />
          </div>
          <div className="bg-card p-10 md:p-16">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-primary">
              Paquete destacado
            </div>
            <h2 className="font-display text-4xl font-black uppercase md:text-5xl">
              {featuredService.title}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {featuredService.short}
            </p>
            <ul className="mt-8 space-y-3">
              {featuredService.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-base font-semibold uppercase tracking-wide"
                >
                  <CircleCheck
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3 rounded-md border border-primary/40 bg-primary/10 px-5 py-4">
              <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />
              <div>
                <div className="font-display text-sm font-bold uppercase tracking-wider">
                  Revisión general
                </div>
                <div className="text-xs uppercase tracking-widest text-primary">
                  ¡Totalmente gratis!
                </div>
              </div>
            </div>
            <a
              href={`tel:${site.phoneE164}`}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-viper)] transition hover:brightness-110"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Agenda tu cita
            </a>
          </div>
        </div>
      </section>

      {/* NOSOTROS preview */}
      <section className="relative py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-border">
            <Image
              src="https://picsum.photos/seed/viper-shop/1280/1280"
              alt="Interior del taller Viper Garage"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-primary">
              Por qué elegirnos
            </div>
            <h2 className="font-display text-4xl font-black uppercase leading-tight md:text-5xl">
              Honestidad, limpieza
              <br />
              <span className="text-primary text-glow-red">y resultados.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              En Viper Garage entendemos que confiar tu auto a un mecánico no
              es fácil. Por eso, cada diagnóstico es transparente, cada
              presupuesto detallado, y cada reparación respaldada.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
              {[
                ["5,016", "Reseñas Google"],
                ["5.0", "Calificación"],
                ["+10", "Años de experiencia"],
                ["100%", "Servicio honesto"],
              ].map(([value, label]) => (
                <div key={label} className="bg-card p-6">
                  <div className="font-display text-3xl font-black text-primary md:text-4xl">
                    {value}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/nosotros"
              className="mt-6 inline-block text-sm font-bold uppercase tracking-wider text-primary underline-offset-4 hover:underline"
            >
              Conoce más sobre nosotros →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="relative border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-primary">
              Opiniones
            </div>
            <h2 className="font-display text-4xl font-black uppercase md:text-5xl">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.quote}
                className="rounded-lg border border-border bg-background p-7"
              >
                <div className="mb-3">
                  <StarRating />
                </div>
                <blockquote className="text-lg font-medium leading-relaxed">
                  &quot;{t.quote}&quot;
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  — {t.author}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/search?q=Viper+Garage+Queretaro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-wider text-primary underline-offset-4 hover:underline"
            >
              Ver las {site.rating.count.toLocaleString("es-MX")} reseñas en
              Google →
            </a>
          </div>
        </div>
      </section>

      <SocialFeed />

      {/* CONTACTO CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-3xl font-black uppercase md:text-4xl">
            Visítanos o agenda tu cita
          </h2>
          <p className="mt-3 text-muted-foreground">{site.hours}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-viper)] transition hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition hover:border-primary hover:text-primary"
            >
              Ver dirección y horario
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
