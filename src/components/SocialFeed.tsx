import { MessageCircle } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { site } from "@/lib/site";

export default function SocialFeed() {
  return (
    <section className="border-y border-border bg-card/40 py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-8 text-center">
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Síguenos
          </div>
          <h2 className="font-display text-3xl font-black uppercase md:text-4xl">
            Lo que pasa en el taller, en tiempo real
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Conecta tu Instagram y Facebook reales aquí para mostrar trabajos
            terminados, reseñas y promociones sin que el visitante salga del
            sitio.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-lg border border-border bg-background text-muted-foreground"
            >
              <InstagramIcon className="h-8 w-8 opacity-40" aria-hidden="true" />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            <FacebookIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            <InstagramIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
