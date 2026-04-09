import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Pineda — Software Developer",
  description:
    "Systems Engineering student specializing in full-stack development and machine learning. TypeScript, React, Next.js, NestJS, Python — open to international internship opportunities.",
  generator: "Daniel Pineda",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Daniel Pineda — Software Developer",
    description:
      "Systems Engineering student specializing in full-stack development and machine learning. Open to international internship opportunities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Pineda — Software Developer",
    description:
      "Systems Engineering student specializing in full-stack development and machine learning. Open to international internships.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
