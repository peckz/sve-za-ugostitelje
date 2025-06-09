import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sve za ugostitelje - Vaš partner u ugostiteljstvu",
  description: "Sve što vam je potrebno za uspešan restoran. Od menija do opreme - kvalitetni proizvodi za ugostiteljstvo po povoljnim cenama.",
  keywords: "ugostiteljstvo, restoran, meni, oprema, katalog, gastro",
  authors: [{ name: "Sve za ugostitelje" }],
  openGraph: {
    title: "Sve za ugostitelje - Vaš partner u ugostiteljstvu",
    description: "Sve što vam je potrebno za uspešan restoran. Od menija do opreme - kvalitetni proizvodi za ugostiteljstvo po povoljnim cenama.",
    url: "https://svezaugostitelje.com",
    siteName: "Sve za ugostitelje",
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
