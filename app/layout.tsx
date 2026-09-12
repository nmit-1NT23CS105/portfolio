import type { Metadata, Viewport } from "next";
import { Antonio, Space_Grotesk, Inter } from "next/font/google";
import { ToastProvider } from "@/components/Toast";
import "./globals.css";

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kataru Rahul Reddy — Computer Science & Backend/Data Developer",
  description:
    "Portfolio of Kataru Rahul Reddy. Computer Science undergraduate with hands-on experience in Python, SQL, data analysis, database systems, and backend development.",
  keywords: [
    "Kataru Rahul Reddy",
    "Portfolio",
    "Machine Learning",
    "FastAPI",
    "Python",
    "Data Developer",
    "Backend Developer",
    "Bangalore",
    "NMIT",
  ],
  authors: [{ name: "Kataru Rahul Reddy" }],
  icons: {
    icon: "/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${antonio.variable} ${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0F0F0F] text-white font-sans-clean antialiased selection:bg-white selection:text-black">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
