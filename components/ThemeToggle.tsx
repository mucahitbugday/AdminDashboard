'use client'

import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-transform duration-300 transform hover:scale-110" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
