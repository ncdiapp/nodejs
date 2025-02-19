import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AppContextProvider } from "@/contexts/AppContextProvider";


const fontFamilies: string[] = ["Roboto", "Open Sans", "Lato", "Montserrat", "Source+Sans+Pro"];

export const metadata: Metadata = {
  title: "NextJs App",
  description: "Create NextJs App Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {fontFamilies.map(font => (
          <link
            key={font}
            href={`https://fonts.googleapis.com/css2?family=${font.replace(" ", "+")}:wght@400;500;600;700&display=swap`}
            rel="stylesheet"
          />
        ))}
      </head>

      <AppContextProvider>
        <body className="flex flex-col min-h-screen">
          <Header />
          <div className="w-full flex-grow">
            {children}
          </div>
          <Footer />
        </body>
      </AppContextProvider>

    </html>
  );
}
