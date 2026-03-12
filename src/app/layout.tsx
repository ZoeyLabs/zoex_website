import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import { DM_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'ZoeX — Build. Ship. Integrate.',
  description: 'Mobile apps, SaaS products, APIs, and healthcare integrations. We build software that ships.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
