'use client'

import { useAuth } from '@/contexts/AuthContext'

export default function DashboardContent() {
  const { user } = useAuth()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p>DashboardContent, {user?.email}!</p>
    </div>
  )
}

