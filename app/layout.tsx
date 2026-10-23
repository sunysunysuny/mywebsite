import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/data/portfolio";
import SWRegister from "@/components/SWRegister";

const description = profile.tagline;

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description,
  appleWebApp: { capable: true, title: profile.shortName, statusBarStyle: "black-translucent" },
  icons: { apple: "/apple-touch-icon.png" },
  openGraph: { title: `${profile.name} — ${profile.title}`, description, type: "website" },
  twitter: { card: "summary_large_image", title: profile.name, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

// Runs before paint: saved choice → system preference → dark
const themeScript = `try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';if(t==='dark')document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh pb-[calc(3.5rem+env(safe-area-inset-bottom))] font-sans text-base md:pb-0">
        {children}
        <SWRegister />
      </body>
    </html>
  );
}
