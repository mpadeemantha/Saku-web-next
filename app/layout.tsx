import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Saku Japanese Language School | Study and Work in Japan",
    template: "%s | Saku Japanese Language School"
  },
  description: "Empowering Sri Lankan students and professionals with premium Japanese language education, SSW skill training, and visa consultancy for a successful career in Japan.",
  keywords: ["Japanese language school", "Sri Lanka", "JLPT", "SSW Japan", "Work in Japan", "Study in Japan", "Japan Visa"],
  metadataBase: new URL("https://sakujls.lk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://sakujls.lk",
    siteName: "Saku Japanese Language School",
    title: "Saku Japanese Language School | Study and Work in Japan",
    description: "Your gateway to Japan. Premium language courses, SSW training, and visa consultancy services.",
    images: [
      {
        url: "/sakulogoB.png",
        width: 1200,
        height: 630,
        alt: "Saku Japanese Language School",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased font-sans bg-white text-[#2D2D2D]`}
      >
        {children}
      </body>
    </html>

  );
}


