import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a Viper Garage: más de 10 años de experiencia, mecánicos certificados y más de 5,000 reseñas de clientes en Querétaro.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center">
        <div className="relative aspect-square overflow-hidden rounded-lg border border-border">
          <Image
            src="https://picsum.photos/seed/viper-team/1280/1280"
            alt="Equipo de mecánicos de Viper Garage"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Nuestra historia
          </div>
          <h1 className="font-display text-4xl font-black uppercase leading-tight md:text-5xl">
            Más de 10 años cuidando autos
            <br />
            <span className="text-primary text-glow-red">en Querétaro.</span>
          </h1>
          <p className="mt-5 text-muted-foreground">
            Viper Garage nació de una idea simple: un taller donde el
            diagnóstico es transparente, el presupuesto se explica antes de
            cobrarse, y cada reparación queda respaldada. Esa filosofía es la
            razón por la que hoy tenemos más de{" "}
            {site.rating.count.toLocaleString("es-MX")} reseñas en Google con
            calificación de {site.rating.value}.
          </p>
          <p className="mt-4 text-muted-foreground">
            Nuestro equipo de mecánicos certificados trabaja con refacciones
            de calidad y equipo de diagnóstico computarizado, para que cada
            visita resuelva el problema real — no solo el síntoma.
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
        </div>
      </div>
    </section>
  );
}
