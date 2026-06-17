import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-md bg-black ring-1 ring-primary/40">
            <Image
              src="/images/logo-icon.jpg"
              alt="Viper Garage"
              fill
              sizes="44px"
              className="object-cover"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-black tracking-widest">
              VIPER GARAGE
            </span>
            <span className="block text-[10px] tracking-[0.35em] text-primary">
              {site.tagline.toUpperCase()}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wider md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${site.phoneE164}`}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold tracking-wide text-primary-foreground shadow-[var(--shadow-viper)] transition hover:brightness-110"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{site.phoneDisplay}</span>
          <span className="sm:hidden">Llamar</span>
        </a>
      </div>
    </header>
  );
}
