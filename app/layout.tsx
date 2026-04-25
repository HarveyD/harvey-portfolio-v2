import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.scss";

const sansFont = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const themeInitializer = `
  (() => {
    const storageKey = "harvey-portfolio-theme";
    const stored = window.localStorage.getItem(storageKey);
    const theme = stored === "light" || stored === "dark" ? stored : "dark";

    document.documentElement.dataset.theme = theme;
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.harveydelaney.com"),
  title: {
    default: "Harvey Delaney | Senior Front End Engineer",
    template: "%s | Harvey Delaney",
  },
  description:
    "Senior Front End Engineer at Amazon Web Services based in Seattle, focused on front-end systems, product quality, and maintainable delivery.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Harvey Delaney" }],
  keywords: [
    "Harvey Delaney",
    "Senior Front End Engineer",
    "Front-end engineer",
    "Amazon Web Services",
    "React",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Harvey Delaney | Senior Front End Engineer",
    description:
      "Senior Front End Engineer at Amazon Web Services based in Seattle, focused on front-end systems, product quality, and maintainable delivery.",
    url: "https://www.harveydelaney.com",
    siteName: "Harvey Delaney",
    images: [
      {
        url: "/images/harvey-640x640.jpg",
        width: 640,
        height: 640,
        alt: "Portrait of Harvey Delaney.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harvey Delaney | Senior Front End Engineer",
    description:
      "Senior Front End Engineer at Amazon Web Services based in Seattle, focused on front-end systems, product quality, and maintainable delivery.",
    creator: "@harveydelaney",
    images: ["/images/harvey-640x640.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sansFont.variable} ${monoFont.variable}`}
      data-theme="dark"
      data-scroll-behavior="smooth"
    >
      <body>
        <Script id="theme-initializer" strategy="beforeInteractive">
          {themeInitializer}
        </Script>
        {children}
      </body>
    </html>
  );
}
