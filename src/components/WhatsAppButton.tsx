import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-viper)] transition hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
