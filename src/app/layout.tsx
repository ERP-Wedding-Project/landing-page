import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
});

export const metadata: Metadata = {
  title: "Wedhub: Perencanaan Pernikahan Profesional & Modern",
  description: "Mulai rencanakan pernikahan impian Anda dengan Wedhub. Paduan sempurna antara keanggunan floral dan manajemen profesional untuk hari bahagia Anda.",
  keywords: ["pernikahan", "wedding planner", "checklist pernikahan", "anggaran pernikahan", "wedhub"],
  openGraph: {
    title: "Wedhub: Rencanakan Pernikahan Impian Anda",
    description: "Kelola anggaran, daftar tamu, dan tugas pernikahan dengan mudah dan elegan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${epilogue.variable} font-display antialiased`}>
        {children}
      </body>
    </html>
  );
}
