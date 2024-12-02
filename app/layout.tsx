import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'
import AuthLayout from '@/components/AuthLayout'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Next.js ile oluşturulmuş bir admin dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.className}>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <AuthLayout>
              {children}
            </AuthLayout>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

