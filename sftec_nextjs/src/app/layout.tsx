
import type { Metadata } from "next";
import { AppContextProvider } from '../contexts/AppContext';
import { Inter } from "next/font/google";
import "./globals.css";
import '../lib/fontawesome';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SFtec NextJs PWA",  
  description: "SFtec NextJs PWA",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["SFtec"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "NCDI" },
    {
      name: "NCDI",
      url: "",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} dir="ltr">
        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <AppContextProvider>
              {children}
            </AppContextProvider>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
