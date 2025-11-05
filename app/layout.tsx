import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'Tafel van Twee',
  description: 'Tafel van Twee website',
  icons: {
    icon: '/Icoon.png',
    apple: '/Icoon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/Icoon.png" type="image/png" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

