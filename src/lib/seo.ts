export const siteUrl = "https://kamilahelta.pl";
export const siteName = "Kamila Helta Psychoterapia";
export const contactEmail = "kamila@helta.pl";
export const contactPhone = "+48889470294";
export const displayPhone = "889 470 294";

export const professionalServiceJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kamila Helta - Psychoterapia Gestalt i terapia uzależnień",
  url: siteUrl,
  image: `${siteUrl}/images/kamila-helta.jpg`,
  telephone: contactPhone,
  email: contactEmail,
  areaServed: [
    { "@type": "City", name: "Gdańsk" },
    { "@type": "City", name: "Chojnice" },
    { "@type": "Country", name: "Polska" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gdańsk / Chojnice",
    addressCountry: "PL",
  },
  founder: {
    "@type": "Person",
    name: "Kamila Helta",
    jobTitle: "Psychoterapeutka Gestalt, specjalistka terapii uzależnień",
  },
  serviceType: [
    "Psychoterapia online",
    "Psychoterapia",
    "Psychoterapia uzależnień",
    "Konsultacje psychoterapeutyczne",
  ],
  sameAs: [],
});
