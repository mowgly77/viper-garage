import Image from "next/image";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { site } from "@/lib/site";

export default function Footer() {
  const fullAddress = `${site.address.streetAddress}, ${site.address.addressLocality}`;

  return (
    <footer className="border-t border-border bg-black/60 py-10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-center justify-between gap-4 border-b border-border/60 pb-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="relative h-9 w-[100px] shrink-0">
              <Image
                src="/images/logo-header.jpg"
                alt="Viper Garage Car Service"
                fill
                sizes="100px"
                className="object-contain"
              />
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <a
              href={`tel:${site.phoneE164}`}
              className="flex items-center gap-2 transition hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {fullAddress}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-sm text-muted-foreground md:flex-row">
          <div className="text-center md:text-left">
            <div>
              © {new Date().getFullYear()} {site.name}. Todos los derechos
              reservados.
            </div>
            <div className="mt-1 text-xs text-muted-foreground/70">
              Desarrollado por{" "}
              <a
                href="https://www.brick-mortar.com.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Brick &amp; Mortar
              </a>
            </div>
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
        </div>
      </div>
    </footer>
  );
}
