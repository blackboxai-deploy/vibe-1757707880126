import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron'
})

export const metadata: Metadata = {
  title: 'Uniq For Dev - Innovation. Security. Development.',
  description: 'A community and development hub focused on FiveM scripting, anti-cheat systems, and server development.',
  keywords: 'FiveM, scripting, anti-cheat, UniqGuard, ESX, QBCore, server development',
  authors: [{ name: 'Uniq For Dev Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#00f5ff'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} font-inter bg-black text-white antialiased overflow-x-hidden`}>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
          {children}
        </div>
      </body>
    </html>
  )
}