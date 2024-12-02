'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function HomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Ana Sayfa</h1>
      <p>Hoş geldiniz 1111, {user.email}!</p>
    </div>
  )
}

