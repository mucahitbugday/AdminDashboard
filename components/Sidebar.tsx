'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Settings, Palette, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useAuth } from '@/contexts/AuthContext'
import logo from '@/public/logo.png'

const menuItems = [
  { name: 'Ana Sayfa', href: '/', icon: Home },
  { name: 'Ayarlar', href: '/settings', icon: Settings },
  { name: 'UI Ayarları', href: '/ui-settings', icon: Palette },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 1024
      setIsMobile(isMobileView)
      if (!isMobileView) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMenuClick = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Hamburger Menü */}
      <Button
        variant="outline"
        size="icon"
        className={`fixed top-4 left-4 z-50 transition-transform ${isOpen ? 'translate-x-64' : 'translate-x-0'
          } lg:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Blur Arka Plan - Sadece mobilde */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-30 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Yan Menü */}
      <aside
        className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 shadow-md lg:translate-x-0 lg:static`}
      >
        <nav className="h-full overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center justify-center py-6 bg-white-100 dark:bg-gray-900 h-16 overflow-hidden">
            <img src={logo.src} alt="Logo" className="w-auto" />
          </div>

          {/* Menü Öğeleri */}
          <ul className="py-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center w-full px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname === item.href
                    ? 'bg-gray-100 dark:bg-gray-700'
                    : ''
                    }`}
                  onClick={handleMenuClick}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
