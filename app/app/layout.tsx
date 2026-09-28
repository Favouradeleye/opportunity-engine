import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./navigation";

export const metadata: Metadata = {
  title: "Opportunity Engine",
  description:
    "A global platform connecting people, opportunities, skills, services and financial wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
