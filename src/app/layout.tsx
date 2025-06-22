import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Help Me Speak Languages - Master Any Language with Expert Training",
  description: "Transform your language learning journey with our proven methodology. Take our free placement test and discover your personalized path to fluency.",
  keywords: "language learning, language training, fluency, placement test, personalized learning",
  openGraph: {
    title: "Help Me Speak Languages - Master Any Language with Expert Training",
    description: "Transform your language learning journey with our proven methodology. Take our free placement test and discover your personalized path to fluency.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Me Speak Languages - Master Any Language with Expert Training",
    description: "Transform your language learning journey with our proven methodology. Take our free placement test and discover your personalized path to fluency.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}
