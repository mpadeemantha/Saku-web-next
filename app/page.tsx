import { Metadata } from "next";
import HomePageWrapper from "./HomePageWrapper";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Saku Japanese Language School | Japan Visa & Language Classes in Sri Lanka",
  description: "Learn Japanese online or at our classes in Gampaha, Colombo, Kandy, Galle, Matara, and Anuradhapura. Expert JLPT N4 N5 preparation, Japan student & work visa application support, COE guidance, and affordable language courses.",
  keywords: [
    "japan visa requirements", "japan visa", "japan visa from sri lanka", "japan student visa",
    "japan work visa", "japan visa application", "japan class in sri lanka", "japan class gampaha",
    "japan class in colombo", "japan class in kandy", "japan class in galle", "japan class in mathara",
    "japan class in anuradapura", "japan language classes online", "online Japan classes",
    "online Japan courses", "Japanese language school", "Learn Japanese online",
    "Japanese language course for beginners", "JLPT preparation course", "JLPT N4 N5 online class",
    "Japanese conversation class", "Japanese grammar course online", "Affordable Japanese language school",
    "Japan student visa application", "Japanese student visa requirements 2026", "Certificate of Eligibility Japan COE",
    "Japan student visa JLPT N5", "Japan visa language school enrollment", "ryugaku visa Japan",
    "Japan visa support school", "Japan student visa 2026 new rules"
  ],
  openGraph: {
    title: "Saku Japanese Language School | Japan Visa & Classes in Sri Lanka",
    description: "Your gateway to Japan. Affordable language courses, JLPT preparation, and expert student/work visa guidance in Sri Lanka.",
    type: "website",
    locale: "en_LK",
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Saku Japanese Language School",
    "description": "Premier Japanese language school in Sri Lanka offering JLPT preparation, online classes, and expert guidance for Japan student visas, COE, and work visas.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK"
    },
    "areaServed": ["Sri Lanka", "Gampaha", "Colombo", "Kandy", "Galle", "Matara", "Anuradhapura", "Online"],
    "offers": [
      {
        "@type": "Offer",
        "name": "Japan Student Visa Support"
      },
      {
        "@type": "Offer",
        "name": "JLPT N4 & N5 Classes"
      },
      {
        "@type": "Offer",
        "name": "Japanese Language Course for Beginners"
      }
    ]
  };

  return (
    <>
      <Script
        id="saku-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageWrapper />
    </>
  );
}
