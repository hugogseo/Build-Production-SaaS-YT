import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentic Coding Boilerplate",
  description:
    "Complete agentic coding boilerplate with authentication, database, AI integration, and modern tooling - perfect for building AI-powered applications and autonomous agents by Leon van Zyl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Remove browser extension attributes before React hydration
                const observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' && mutation.target.nodeType === 1) {
                      const elem = mutation.target;
                      if (elem.hasAttribute('bis_skin_checked')) {
                        elem.removeAttribute('bis_skin_checked');
                      }
                    }
                  });
                });

                if (typeof window !== 'undefined') {
                  // Clean existing elements
                  document.addEventListener('DOMContentLoaded', function() {
                    const elementsWithBis = document.querySelectorAll('[bis_skin_checked]');
                    elementsWithBis.forEach(el => el.removeAttribute('bis_skin_checked'));
                  });

                  // Observe future changes
                  observer.observe(document.documentElement, {
                    attributes: true,
                    subtree: true,
                    attributeFilter: ['bis_skin_checked']
                  });
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
