
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { portfolioData } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // SEO: Optimize font loading
});

// SEO: Comprehensive metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://habtamubaye.vercel.app"), // Update with your actual domain
  title: {
    default: "Habtamu Baye | Full-Stack Web & Mobile Developer",
    template: "%s | Habtamu Baye"
  },
  description: "Professional portfolio of Habtamu Baye, a Software Engineer specializing in full-stack web and mobile development with React, Next.js, Node.js, and NestJS. Experienced in building scalable applications and web security.",
  keywords: [
    "Habtamu Baye",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS Developer",
    "React Native",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Security",
    "Penetration Testing",
    "Portfolio",
    "Ethiopia Developer",
    "Adama Developer"
  ],
  authors: [{ name: "Habtamu Baye", url: "https://habtamubaye.vercel.app" }],
  creator: "Habtamu Baye",
  publisher: "Habtamu Baye",

  // SEO: Open Graph tags for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://habtamubaye.vercel.app",
    title: "Habtamu Baye | Full-Stack Web & Mobile Developer",
    description: "Professional portfolio showcasing full-stack web and mobile development projects. Specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Habtamu Baye Portfolio",
    images: [
      {
        url: "/og-image.png", // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Habtamu Baye - Full-Stack Developer Portfolio",
      },
    ],
  },

  // SEO: Twitter Card tags
  twitter: {
    card: "summary_large_image",
    title: "Habtamu Baye | Full-Stack Web & Mobile Developer",
    description: "Professional portfolio showcasing full-stack web and mobile development projects.",
    creator: "@habtamubaye", // Update with your Twitter handle if you have one
    images: ["/og-image.png"],
  },

  // SEO: Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // SEO: Verification tags (add your verification codes when available)
  verification: {
    google: "your-google-verification-code", // Add when you set up Google Search Console
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  alternates: {
    canonical: "https://habtamubaye.vercel.app",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // SEO: JSON-LD Structured Data for Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    url: "https://habtamubaye.vercel.app",
    image: "https://habtamubaye.vercel.app/profile-image.jpg", // Add your profile image
    sameAs: [
      portfolioData.github,
      portfolioData.linkedin,
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Adama",
      addressCountry: "Ethiopia",
    },
    email: portfolioData.email,
    telephone: portfolioData.phone,
    description: portfolioData.summary,
    knowsAbout: [
      "Web Development",
      "Mobile Development",
      "Full-Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Web Security",
    ],
  };

  // SEO: JSON-LD Structured Data for WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Habtamu Baye Portfolio",
    url: "https://habtamubaye.vercel.app",
    description: "Professional portfolio of Habtamu Baye, Full-Stack Web & Mobile Developer",
    author: {
      "@type": "Person",
      name: portfolioData.name,
    },
    inLanguage: "en-US",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* SEO: Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* SEO: Theme color for mobile browsers */}
        <meta name="theme-color" content="#2563eb" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#3b82f6" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${inter.className} antialiased bg-background`}>
        {/* SEO: Skip to main content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg">
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background min-h-screen relative shadow-2xl overflow-x-hidden">
            <Navbar />
            <main id="main-content">
              {children}
            </main>
            <Footer />
            <FloatingActions />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
