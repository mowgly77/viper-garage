// Datos centrales del negocio. Cambiar aquí actualiza todo el sitio
// (header, footer, contacto, JSON-LD, metadata por defecto).

export const site = {
  name: "Viper Garage",
  tagline: "Car Service",
  legalName: "Viper Garage",
  description:
    "Taller automotriz Viper Garage en Querétaro. Afinaciones, frenos, suspensiones, alineación, balanceo y diagnóstico computarizado. Mecánicos honestos, +5,000 reseñas.",
  url: "https://viper-garage.vercel.app",
  phoneDisplay: "442 143 9345",
  phoneE164: "+524421439345",
  whatsapp: "https://wa.me/524421439345",
  email: "contacto@vipergarage.mx",
  address: {
    streetAddress: "Prolongación Bernardo Quintana 5006, Puertas del Sol II",
    addressLocality: "Santiago de Querétaro",
    addressRegion: "Querétaro",
    postalCode: "76114",
    addressCountry: "MX",
  },
  geo: {
    latitude: 20.6147,
    longitude: -100.4308,
  },
  hours: "Lun – Sáb · 9:00 a.m. – 6:00 p.m.",
  openingHours: ["Mo-Sa 09:00-18:00"],
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  rating: {
    value: 5.0,
    count: 5016,
  },
} as const;
