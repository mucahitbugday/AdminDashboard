'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import PieChart from '@/components/chart/PieChart'
import BarChart from '@/components/chart/BarChart'
import LineChart from '@/components/chart/LineChart'
import StatCard from '@/components/card/StatCard'
import { Globe, DollarSign, ShoppingCart, MessageCircle } from 'lucide-react'
import HeatmapChart from '@/components/chart/HeatmapChart'


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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Ana Sayfa</h1>
      <p className="mb-6">Hoş geldiniz, {user.email}!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="TODAY'S VISITS" value="7,842,900" description="Better than last week (70.1%)" bgColor="bg-teal-500" icon={<Globe />} />
        <StatCard title="TODAY'S PROFIT" value="180,200" description="Better than last week (40.5%)" bgColor="bg-blue-500" icon={<DollarSign />} />
        <StatCard title="NEW ORDERS" value="38,900" description="Better than last week (76.3%)" bgColor="bg-purple-500" icon={<ShoppingCart />} />
        <StatCard title="NEW COMMENTS" value="3,988" description="Better than last week (54.9%)" bgColor="bg-gray-800" icon={<MessageCircle />} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PieChart />
        <BarChart />
        <LineChart />
        <HeatmapChart type='Veri' />
      </div>


    </div>
  )
}
