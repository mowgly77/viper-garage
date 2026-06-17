import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios de taller mecánico en Querétaro",
  description:
    "Afinaciones, frenos, suspensiones, alineación, balanceo y diagnóstico computarizado en Viper Garage, Querétaro. Conoce qué incluye cada servicio.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Hoja de servicios
          </div>
          <h1 className="font-display text-4xl font-black uppercase md:text-5xl">
            Todo lo que tu auto necesita
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Cada servicio incluye diagnóstico previo, refacciones de calidad
            y garantía. Selecciona uno para ver el detalle completo.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-viper)] transition hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            ¿No sabes cuál necesitas? Pregúntanos
          </a>
        </div>
      </div>
    </section>
  );
}
