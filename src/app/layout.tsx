import type { Metadata, Viewport } from 'next'
import AuthProvider from '@/components/provider/AuthProvider'
import '@/styles/globals.css'
import '@/styles/fonts.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="font-Dovemayo font-regular bg-white">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
