export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: "Settings" | "Disc" | "Activity" | "Gauge" | "Cog" | "Wrench";
  bullets: string[];
  faqs: { q: string; a: string }[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "afinaciones",
    title: "Afinaciones",
    short: "Tune-up completo con bujías, filtros y aceite premium.",
    description:
      "Una afinación a tiempo evita fallas mayores y mejora el rendimiento de combustible. Revisamos bujías, filtros, aceite y sistema de encendido con diagnóstico previo para no cambiar lo que no necesita cambio.",
    icon: "Settings",
    bullets: [
      "Cambio de bujías y filtros",
      "Aceite premium según especificación del fabricante",
      "Revisión de sistema de encendido",
      "Diagnóstico previo incluido",
    ],
    faqs: [
      {
        q: "¿Cada cuánto debo afinar mi auto?",
        a: "La mayoría de autos modernos requieren afinación cada 20,000–40,000 km, pero depende del fabricante y tipo de uso. En tu cita revisamos el manual de tu auto para confirmar el intervalo exacto.",
      },
      {
        q: "¿Cuánto tarda una afinación?",
        a: "En promedio entre 1 y 2 horas, dependiendo del modelo y si se detectan piezas adicionales por reemplazar.",
      },
    ],
  },
  {
    slug: "frenos",
    title: "Frenos",
    short: "Cambio de balatas, discos y revisión del sistema completo.",
    description:
      "El sistema de frenos no da segundas oportunidades. Revisamos balatas, discos, líquido de frenos y mangueras para que cada frenado sea seguro.",
    icon: "Disc",
    bullets: [
      "Cambio de balatas y discos",
      "Revisión de líquido de frenos",
      "Inspección de mangueras y calibres",
      "Prueba de frenado post-servicio",
    ],
    faqs: [
      {
        q: "¿Qué señales indican que necesito cambiar las balatas?",
        a: "Chillidos al frenar, vibración en el pedal, el auto se 'jala' hacia un lado, o la luz de frenos encendida son señales de revisión inmediata.",
      },
      {
        q: "¿Cada cuánto se cambian los discos de freno?",
        a: "Normalmente cada 60,000–100,000 km, pero depende del estilo de manejo y la ciudad. Lo confirmamos con medición directa del espesor del disco.",
      },
    ],
  },
  {
    slug: "suspension",
    title: "Suspensiones",
    short: "Amortiguadores, rótulas y tirantes para un manejo perfecto.",
    description:
      "Una suspensión en mal estado afecta el control, el frenado y el desgaste de tus llantas. Revisamos amortiguadores, rótulas y tirantes con prueba de manejo incluida.",
    icon: "Activity",
    bullets: [
      "Cambio de amortiguadores",
      "Revisión de rótulas y tirantes",
      "Inspección de bujes y soportes",
      "Prueba de manejo post-servicio",
    ],
    faqs: [
      {
        q: "¿Cómo sé si mi suspensión está dañada?",
        a: "Rebote excesivo al pasar topes, ruidos al dar vuelta, o desgaste irregular de llantas son las señales más comunes.",
      },
    ],
  },
  {
    slug: "alineacion-balanceo",
    title: "Alineación y Balanceo",
    short: "Alineación computarizada y balanceo dinámico de precisión.",
    description:
      "Alineación computarizada y balanceo dinámico para evitar vibraciones, desgaste irregular de llantas y mejorar el manejo en carretera.",
    icon: "Gauge",
    bullets: [
      "Alineación computarizada de precisión",
      "Balanceo dinámico de las 4 ruedas",
      "Revisión de presión y desgaste de llantas",
    ],
    faqs: [
      {
        q: "¿Cada cuánto debo alinear y balancear?",
        a: "Recomendamos cada 10,000 km o después de golpear un bache fuerte, cambiar llantas, o notar que el volante 'jala' hacia un lado.",
      },
    ],
  },
  {
    slug: "diagnostico",
    title: "Diagnóstico Computarizado",
    short: "Escaneo computarizado para detectar fallas al instante.",
    description:
      "Escaneo computarizado de todos los sistemas electrónicos del auto para detectar fallas antes de que se conviertan en reparaciones costosas.",
    icon: "Wrench",
    bullets: [
      "Escaneo de códigos de falla (OBD-II)",
      "Revisión de sensores y sistema eléctrico",
      "Diagnóstico de testigos en el tablero",
      "Reporte detallado de hallazgos",
    ],
    faqs: [
      {
        q: "¿Se me prendió una luz en el tablero, qué hago?",
        a: "Agenda un diagnóstico lo antes posible. Algunas luces (como la de aceite o temperatura) indican un riesgo inmediato; otras son preventivas pero igual conviene revisarlas pronto.",
      },
    ],
  },
  {
    slug: "servicio-mayor",
    title: "Servicio Mayor",
    short: "Mantenimiento completo: filtros, bujías, aceite premium y limpieza de inyectores.",
    description:
      "Nuestro paquete más completo para que tu auto siga rindiendo al máximo: filtros, bujías, aceite premium y lavado de inyectores, más una revisión general totalmente gratis.",
    icon: "Cog",
    bullets: [
      "Filtros",
      "Bujías",
      "Aceite premium",
      "Lavado de inyectores",
      "Revisión general gratis",
    ],
    faqs: [
      {
        q: "¿Qué diferencia hay entre afinación y servicio mayor?",
        a: "El servicio mayor incluye todo lo de una afinación más limpieza de inyectores y una revisión general completa del vehículo, sin costo adicional.",
      },
    ],
    featured: true,
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
