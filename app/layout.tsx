import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartFaith – Multi-Bot",
  description: "Showcase 6 bot Islami: Fiqh, Sirah, Tarikh, Nusantara, Muamalah, GenZ."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
