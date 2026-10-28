import type { Metadata, Viewport } from "next";
import { ToastProvider } from "@/components/Toast";
import "./globals.css";

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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#0F0F0F] text-white font-sans-clean antialiased selection:bg-white selection:text-black">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
