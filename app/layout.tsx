import "./globals.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import { site } from "@/config";
import { ThemeProvider } from "@/components/providers/theme-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  metadataBase: new URL(site.url),
  description: site.description,
  keywords: site.keywords,
  authors: [
    {
      name: site.name,
      url: site.url,
    },
  ],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.ogImage],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "SJ9-nZtuwBviDN4oP1q4QxlURhgRGLCs6gMqw5-51Lw",
  },
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen ${dmSans.className}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3ZZLHRNHSM"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3ZZLHRNHSM');
          `}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastContainer position="top-right" autoClose={3000} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
