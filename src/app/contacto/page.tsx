import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Llama, escribe por WhatsApp o visita Viper Garage en Prolongación Bernardo Quintana 5006, Puertas del Sol II, Santiago de Querétaro. Lun-Sáb 9:00 a.m. - 6:00 p.m.",
  alternates: { canonical: "/contacto" },
};

const fullAddress = `${site.address.streetAddress}, ${site.address.postalCode} ${site.address.addressLocality}, ${site.address.addressRegion}`;

export default function ContactoPage() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
        <div>
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Contacto
          </div>
          <h1 className="font-display text-4xl font-black uppercase leading-tight md:text-5xl">
            Visítanos o
            <br />
            agenda tu cita
          </h1>
          <p className="mt-4 text-muted-foreground">
            Estamos listos para atenderte. Llámanos, escríbenos por WhatsApp
            o pásate al taller.
          </p>

          <div className="mt-8 space-y-5">
            <a href={`tel:${site.phoneE164}`}>
              <div className="group flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition hover:border-primary/60">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Teléfono
                  </div>
                  <div className="mt-0.5 font-semibold">
                    {site.phoneDisplay}
                  </div>
                </div>
              </div>
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              <div className="group flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition hover:border-primary/60">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    WhatsApp
                  </div>
                  <div className="mt-0.5 font-semibold">
                    +{site.phoneE164.replace("+", "")}
                  </div>
                </div>
              </div>
            </a>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                `${site.name} ${site.address.streetAddress} ${site.address.addressLocality}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition hover:border-primary/60">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Dirección
                  </div>
                  <div className="mt-0.5 font-semibold">{fullAddress}</div>
                </div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Horario
                </div>
                <div className="mt-0.5 font-semibold">{site.hours}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
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
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-border">
          <iframe
            title="Ubicación Viper Garage"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              fullAddress
            )}&output=embed`}
            className="h-full min-h-[420px] w-full grayscale-[40%] contrast-110"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
