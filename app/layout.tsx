import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// NOTE: metadataBase is intentionally left unset — AdEra Labs has not
// finalized a domain name yet. Once the domain is live, add:
//   metadataBase: new URL("https://aderalabs.com"),
// and update the absolute URLs used for Open Graph / Twitter images below.
export const metadata: Metadata = {
  title: "AdEra Labs — Pakistan's Leading Platform for Global Business Access",
  description:
    "AdEra Labs empowers Pakistani entrepreneurs with Silicon Valley connections, US company formation, and visa solutions. 900+ entrepreneurs, 15+ countries, 10+ years of experience.",
  keywords: [
    "AdEra Labs",
    "Silicon Valley Tech Exchange",
    "USA company formation Pakistan",
    "US visa consultation Pakistan",
    "Pakistan tech ecosystem",
    "Future Fest",
    "Pakistan Tech Summit",
  ],
  openGraph: {
    title: "AdEra Labs — Pakistan's Leading Platform for Global Business Access",
    description:
      "Empowering Pakistani entrepreneurs with Silicon Valley connections, US company formation, and visa solutions.",
    siteName: "AdEra Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdEra Labs — Pakistan's Leading Platform for Global Business Access",
    description:
      "Empowering Pakistani entrepreneurs with Silicon Valley connections, US company formation, and visa solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
