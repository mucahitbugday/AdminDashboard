'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'

type User = {
  name: string;
  email: string;
} | null

type AuthContextType = {
  user: User
  loading: boolean // Loading durumunu ekledik
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (name: string, email: string, password: string) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState<boolean>(true) 

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false) // Yükleme tamamlandı
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true) // Login işlemi başlıyor
    // Burada normalde bir API çağrısı yapılır
    if (email === 'mucahit@admin.com' && isValidPassword(password)) {
      const newUser = { name: 'Mücahit', email }
      setUser(newUser)
      localStorage.setItem('user', JSON.stringify(newUser))
      setLoading(false) // Login tamamlandı
      return true
    }
    setLoading(false) // Hatalı giriş
    return false
  }

  const logout = () => {
    setLoading(true) // Logout işlemi başlıyor
    setUser(null)
    localStorage.removeItem('user')
    setLoading(false) // Logout tamamlandı
  }

  const register = async (name: string, email: string, password: string) => {
    setLoading(true) // Register işlemi başlıyor
    // Burada normalde bir API çağrısı yapılır
    const newUser = { name, email }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
    setLoading(false) // Register tamamlandı
    return true
  }

  const isValidPassword = (password: string) => {
    const today = new Date()
    const day = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const year = today.getFullYear()

    const correctPassword = `${day}${month}${year}`
    return password === '123'
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
