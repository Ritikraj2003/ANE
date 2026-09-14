import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ANE Technology Corp // Engineering the Physical & Digital Frontier",
  description:
    "ANE is a technology company from Kokrajhar, Assam, synthesizing precision physical hardware, spatial computing, and high-performance cloud architectures.",
  keywords: [
    "ANE Labs",
    "Kokrajhar",
    "Assam",
    "3D Spatial Engineering",
    "Digital Twin",
    "Enterprise SaaS",
    "Hardware Prototyping",
    "CNC Machining",
    "Deep Tech India",
  ],
  icons: {
    icon: "/images/logo/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('ane_theme');
                  var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Header />
          <main style={{ flex: "1 0 auto" }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
