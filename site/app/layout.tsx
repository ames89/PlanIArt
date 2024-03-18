import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlanIArt",
  description: "Atención y PlanIArt es todo lo que necesitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ margin: 0, height: "100%", width: "100%" }}>
      <body
        style={{ margin: 0, height: "100%", width: "100%" }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
