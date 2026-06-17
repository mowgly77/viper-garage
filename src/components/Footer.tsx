import { MessageCircle } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-black/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 ring-1 ring-primary/40">
            <span className="font-display text-xs font-black text-primary">
              V
            </span>
          </span>
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em]">
            {site.name} · {site.tagline}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border transition hover:border-primary hover:text-primary"
          >
            <FacebookIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border transition hover:border-primary hover:text-primary"
          >
            <InstagramIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border transition hover:border-primary hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div>
          © {new Date().getFullYear()} {site.name}. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
