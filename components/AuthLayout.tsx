'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  // useEffect(() => {
  //   if (!user && pathname !== '/login' && pathname !== '/register') {
  //     router.push('/login')
  //   }
  // }, [user, pathname, router])

  // Login ve register sayfalarında layout'u gösterme
  if (pathname === '/login' || pathname === '/register') {
    return <>{children}</>
  }

  // Kullanıcı giriş yapmamışsa sadece içeriği göster
  if (!user) {
    return null
  }

  // Kullanıcı giriş yapmışsa tam layout'u göster
  return (
    <div className="flex flex-col h-screen bg-gray-100 lg:flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <main className="flex-1 p-4 overflow-y-auto lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

