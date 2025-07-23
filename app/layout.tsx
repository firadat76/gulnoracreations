import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gulnora Creations",
  description: "Handcrafted bags made with love and attention to detail - Gulnora Creations",
  generator: "v0.dev",
  icons: {
    icon: "/images/gulnora-logo.png",
    shortcut: "/images/gulnora-logo.png",
    apple: "/images/gulnora-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
