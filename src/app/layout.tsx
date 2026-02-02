
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Habtamu Baye | Full-Stack Web & Mobile Developer",
  description: "Professional portfolio of Habtamu Baye, a Software Engineer specializing in full-stack web and mobile development, and web penetration testing.",
  keywords: ["Habtamu Baye", "Software Engineer", "Full-Stack Developer", "Next.js Portfolio", "React Native Developer", "Web Security"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background min-h-screen relative shadow-2xl">
            <Navbar />
            <main>
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
