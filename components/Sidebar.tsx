'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BarChart2, Users, Settings, Palette, ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useAuth } from '@/contexts/AuthContext'
import logo from '@/public/logo.png';


const menuItems = [
  { name: 'Ana Sayfa', href: '/', icon: Home },
  {
    name: 'İstatistikler',
    icon: BarChart2,
    subItems: [
      { name: 'Genel Bakış', href: '/statistics/overview' },
      { name: 'Satışlar', href: '/statistics/sales' },
      { name: 'Kullanıcılar', href: '/statistics/users' },
    ],
  },
  {
    name: 'Kullanıcılar',
    icon: Users,
    subItems: [
      { name: 'Tüm Kullanıcılar', href: '/users/all' },
      { name: 'Roller', href: '/users/roles' },
      { name: 'İzinler', href: '/users/permissions' },
    ],
  },
  { name: 'Ayarlar', href: '/settings', icon: Settings },
  { name: 'UI Ayarları', href: '/ui-settings', icon: Palette },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([])
  const { user } = useAuth()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSubMenu = (menuName: string) => {
    setOpenSubMenus((prev) =>
      prev.includes(menuName)
        ? prev.filter((item) => item !== menuName)
        : [...prev, menuName]
    )
  }

  return (
    <>
      <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>
      <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 shadow-md lg:translate-x-0 lg:static`}>
        <nav className="h-full overflow-y-auto">

          <div className="flex items-center justify-center py-6 bg-white-100 dark:bg-gray-900 h-16">
            <img src={logo.src} alt="Logo" className="w-auto" />
          </div>



          <ul className="py-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleSubMenu(item.name)}
                      className={`flex items-center w-full px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                      {openSubMenus.includes(item.name) ? (
                        <ChevronDown className="ml-auto h-4 w-4" />
                      ) : (
                        <ChevronRight className="ml-auto h-4 w-4" />
                      )}
                    </button>
                    {openSubMenus.includes(item.name) && (
                      <ul className="bg-gray-50 dark:bg-gray-700">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link href={subItem.href} className={`flex items-center w-full pl-14 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname === subItem.href ? 'bg-gray-100 dark:bg-gray-700' : ''
                              }`}>
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href={item.href} className={`flex items-center w-full px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${pathname === item.href ? 'bg-gray-100 dark:bg-gray-700' : ''
                    }`}>
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

