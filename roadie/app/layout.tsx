import type { Metadata } from "next/config"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import { AIChatWidget } from "@/components/ai/ai-chat-widget"
import "./globals.css"
import { Suspense } from "react"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ROADIE",
  description:
    "Explore constelações de habilidades, conclua cursos, obtenha certificações e conecte-se com oportunidades.",

  icons: {
    icon: [
      { url: "/astro.png", type: "image/png" },
      { rel: "shortcut icon", url: "/astro.png", type: "image/png" },
    ],
    apple: "/astro.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`font-sans antialiased`}>
        <Suspense>{children}</Suspense>

        <AIChatWidget />

        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}