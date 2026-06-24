import type { Metadata } from "next";
import {
  CheckCircle2,
  Circle,
  Globe,
  Mail,
  CreditCard,
  CalendarClock,
  Bell,
  Share2,
  Server,
  RefreshCw,
  Inbox,
  MessageCircle,
} from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cotización — Viper Garage",
  description: "Cotización de sitio web profesional para Viper Garage.",
  robots: { index: false, follow: false },
};

const incluido = [
  "Landing profesional y responsiva (celular y computadora)",
  "Secciones: servicios, promoción, por qué elegirnos, reseñas, ubicación y horario",
  "Botón de WhatsApp para agendar en un toque",
  "Registro y habilitación de dominio .com.mx",
  "Hosting incluido sin costo (Vercel)",
  "Correo profesional contacto@vipergarage.com.mx con redirección a tu Gmail",
  "Ajustes de diseño con tu marca, logo y fotos reales",
  "Blog y SEO técnico para aparecer en búsquedas locales",
  "Una ronda de ajustes incluida antes de publicar",
];

const addOns = [
  {
    icon: CalendarClock,
    title: "Agendamiento de citas en línea",
    desc: "Calendario en el sitio para que el cliente elija fecha y hora sin escribir por WhatsApp.",
    price: "$2,500 – $4,000",
    tipo: "Único",
  },
  {
    icon: Inbox,
    title: "Buzón de correo propio (Google Workspace)",
    desc: "Cuenta de correo empresarial completa (buzón, calendario, espacio) independiente de tu Gmail personal. Opcional — la redirección de correo ya viene incluida sin costo.",
    price: "~$140 MXN/mes",
    tipo: "Opcional · Recurrente",
    highlight: true,
  },
  {
    icon: CreditCard,
    title: "Links de facturación en línea",
    desc: "Botón de pago con Mercado Pago, Clip o Stripe para cobrar anticipos o servicios sin que el cliente vaya al taller.",
    price: "Cotización",
    tipo: "Único",
  },
  {
    icon: Globe,
    title: "Links integrados para agendar cita",
    desc:
      'Enlaces o botones "inteligentes" dentro del sitio (por ejemplo WhatsApp con el servicio y la fecha ya escritos, o un Calendly conectado) para que el cliente agende con un clic, sin tener que explicar nada por mensaje.',
    price: "$800 – $1,500",
    tipo: "Único",
  },
  {
    icon: Bell,
    title: "Automatizaciones (recordatorios y seguimiento)",
    desc: "Mensajes automáticos de recordatorio de cita o seguimiento post-servicio.",
    price: "Cotización",
    tipo: "Único",
  },
  {
    icon: Share2,
    title: "Integración Instagram / Facebook en vivo",
    desc: "El feed real de tus redes se muestra automáticamente en el sitio.",
    price: "$1,200 – $2,000",
    tipo: "Único",
  },
];

const recurrentes = [
  {
    icon: Server,
    title: "Hosting + mantenimiento",
    price: "Incluido · $0",
    note: "Desplegado en Vercel, sin costo",
  },
  {
    icon: RefreshCw,
    title: "Renovación de dominio .com.mx",
    price: "$199.99 MXN / año",
    note: "Precio de registro vigente, 1er año",
  },
];

export default function CotizacionPage() {
  return (
    <section className="bg-gradient-to-b from-[#1a1a1d] via-background to-background py-16">
      <div className="mx-auto max-w-5xl px-5">
        {/* Encabezado */}
        <div className="mb-10 border-b border-white/15 pb-8">
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Cotización
          </div>
          <h1 className="font-display text-4xl font-black uppercase leading-tight md:text-5xl">
            Sitio web profesional
            <br />
            <span className="text-primary text-glow-red">{site.name}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Convierte tu calificación perfecta de {site.rating.value} en
            Google en un canal propio que trabaja para ti las 24 horas. Esta
            cotización resume el sitio que ya viste funcionando hoy, sus
            add-ons opcionales para más adelante, y lo que se necesita para
            arrancar.
          </p>
          <div className="mt-5 grid gap-1 text-sm text-zinc-300 sm:grid-cols-2">
            <div>
              <span className="font-semibold text-foreground">Cliente:</span>{" "}
              {site.name} · Santiago de Querétaro
            </div>
            <div>
              <span className="font-semibold text-foreground">
                Presentado por:
              </span>{" "}
              Roberto Alcántara · Brick &amp; Mortar
            </div>
          </div>
        </div>

        {/* Paquete */}
        <div className="mb-10 overflow-hidden rounded-lg border border-primary/50 bg-[#1c1c20] shadow-lg shadow-black/40">
          <div className="flex flex-col items-start justify-between gap-3 border-b border-white/10 bg-primary/15 p-6 sm:flex-row sm:items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Paquete seleccionado
              </div>
              <h2 className="font-display text-2xl font-black uppercase">
                Paquete Base
              </h2>
            </div>
            <div className="text-left sm:text-right">
              <div className="font-display text-4xl font-black text-primary">
                $4,800 MXN
              </div>
              <div className="text-xs uppercase tracking-widest text-zinc-300">
                Pago único
              </div>
            </div>
          </div>
          <ul className="grid gap-3 p-6 sm:grid-cols-2">
            {incluido.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-zinc-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Add-ons */}
        <div className="mb-10">
          <div className="mb-1 text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Opcional · A futuro
          </div>
          <h2 className="font-display text-2xl font-black uppercase">
            Menú de add-ons
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-300">
            No se pagan de golpe. Se activan cuando tú decidas, a tu ritmo.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {addOns.map((a) => (
              <div
                key={a.title}
                className={`rounded-lg border p-5 shadow-md shadow-black/30 ${
                  a.highlight
                    ? "border-primary/60 bg-primary/10"
                    : "border-white/10 bg-[#1c1c20]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <a.icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div className="flex-1">
                    <div className="font-semibold leading-tight text-foreground">
                      {a.title}
                    </div>
                    <p className="mt-1 text-sm text-zinc-300">{a.desc}</p>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        {a.tipo}
                      </span>
                      <span className="font-display font-bold text-primary">
                        {a.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recurrentes */}
        <div className="mb-10">
          <h2 className="font-display text-xl font-black uppercase">
            Servicios recurrentes (sugeridos)
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {recurrentes.map((r) => (
              <div
                key={r.title}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-[#1c1c20] p-4 shadow-md shadow-black/30"
              >
                <div className="flex items-center gap-3">
                  <r.icon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {r.title}
                    </div>
                    <div className="text-xs text-zinc-400">{r.note}</div>
                  </div>
                </div>
                <span className="text-sm font-bold text-primary">
                  {r.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Correo profesional */}
        <div className="mb-10 rounded-lg border border-white/10 bg-[#1c1c20] p-6 shadow-md shadow-black/30">
          <div className="flex items-start gap-3">
            <Mail
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-display text-lg font-black uppercase">
                Correo profesional
              </h2>
              <p className="mt-2 text-sm text-zinc-300">
                <span className="font-semibold text-foreground">
                  Incluido, sin costo:
                </span>{" "}
                contacto@vipergarage.com.mx queda redirigido a tu Gmail
                actual (Cloudflare Email Routing). Te llegan los correos ahí
                mismo y respondes “como” contacto@ desde tu Gmail.
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                <span className="font-semibold text-foreground">
                  Opcional, si más adelante quieres un buzón aparte:
                </span>{" "}
                Google Workspace (~$140 MXN/mes) o Zoho Mail (gratis – ~$20
                MXN/mes), ver tabla de add-ons arriba.
              </p>
            </div>
          </div>
        </div>

        {/* Requisitos */}
        <div className="mb-10 rounded-lg border border-primary/50 bg-primary/10 p-6">
          <h2 className="font-display text-xl font-black uppercase text-primary">
            Requisitos para iniciar
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-md bg-black/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-zinc-300">
                Total
              </div>
              <div className="font-display text-2xl font-black">
                $4,800 MXN
              </div>
            </div>
            <div className="rounded-md bg-black/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-zinc-300">
                Anticipo para arrancar (50%)
              </div>
              <div className="font-display text-2xl font-black text-primary">
                $2,400 MXN
              </div>
            </div>
          </div>
          <p className="mt-3 text-sm text-zinc-300">
            El 50% restante ($2,400 MXN) se liquida a la entrega, con el
            sitio publicado y funcionando.
          </p>
          <ul className="mt-5 space-y-2.5">
            {[
              "Logo en buena calidad y fotos del taller, equipo y trabajos",
              "Decisión de dominio: lo registramos a nombre de Viper Garage, o nos dan acceso si ya lo tienen",
              "Gmail al que se redirige el correo contacto@",
              "Confirmación del número de WhatsApp y horario para el botón de contacto",
              "Textos o promoción que quieran destacar (si no los tienen, los redactamos juntos)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <Circle
                  className="mt-1 h-2 w-2 shrink-0 fill-primary text-primary"
                  aria-hidden="true"
                />
                <span className="text-zinc-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-lg border border-white/10 bg-[#1c1c20] p-8 text-center shadow-lg shadow-black/40">
          <h2 className="font-display text-2xl font-black uppercase">
            ¿Le entramos?
          </h2>
          <p className="mt-2 text-zinc-300">
            Confirmando hoy, el sitio queda publicado este fin de semana.
          </p>
          <a
            href="https://wa.me/525583672523"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-viper)] transition hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Confirmar por WhatsApp
          </a>
          <p className="mt-4 text-xs text-zinc-400">
            Roberto Alcántara · Brick &amp; Mortar · www.brick-mortar.com.mx
          </p>
        </div>
      </div>
    </section>
  );
}
