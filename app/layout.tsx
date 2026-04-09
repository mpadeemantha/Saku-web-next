import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saku Japanese Language School | Neo-Tokyo Zen education",
  description: "Experience the fusion of traditional Japanese culture and modern education at Saku Japanese Language School.",
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


