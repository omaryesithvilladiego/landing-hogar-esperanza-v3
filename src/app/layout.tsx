import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/normalize.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="body">{children}</body>
    </html>
  );
}
