import type { Metadata } from "next";
import ServiceLanding from "@/components/seo/ServiceLanding";
import { landingPages } from "@/lib/landing-pages";

const page = landingPages.find((item) => item.slug === "psychoterapia-gestalt-gdansk")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: `/${page.slug}`,
  },
};

export default function PsychoterapiaGestaltGdanskPage() {
  return <ServiceLanding page={page} />;
}
