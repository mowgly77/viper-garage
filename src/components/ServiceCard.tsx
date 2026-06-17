import Link from "next/link";
import { Settings, Disc, Activity, Gauge, Cog, Wrench } from "lucide-react";
import type { Service } from "@/lib/services";

const icons = { Settings, Disc, Activity, Gauge, Cog, Wrench };

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group relative block overflow-hidden rounded-lg border border-border bg-card p-7 transition hover:border-primary/60 hover:bg-card/80"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/30" />
      <div className="relative">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="font-display text-xl font-bold uppercase tracking-wide">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{service.short}</p>
      </div>
    </Link>
  );
}
