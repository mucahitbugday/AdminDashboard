'use client'

import { useAuth } from '@/contexts/AuthContext'

export default function StatisticsOverview() {
  const { user } = useAuth()

  // Sadece mucahit@admin kullanıcısı için içeriği göster
  if (user?.email !== 'mucahit@admin.com') {
    return <div>Bu sayfayı görüntüleme yetkiniz yok.</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">İstatistikler: Genel Bakış</h1>
      
      {/* Örnek tablo */}
      <table className="min-w-full bg-white border border-gray-300 mb-8">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Metrik</th>
            <th className="py-2 px-4 border-b">Değer</th>
            <th className="py-2 px-4 border-b">Değişim</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Toplam Kullanıcı</td>
            <td className="py-2 px-4 border-b">10,000</td>
            <td className="py-2 px-4 border-b text-green-500">+5%</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Aylık Aktif Kullanıcı</td>
            <td className="py-2 px-4 border-b">7,500</td>
            <td className="py-2 px-4 border-b text-red-500">-2%</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Toplam Gelir</td>
            <td className="py-2 px-4 border-b">500,000 TL</td>
            <td className="py-2 px-4 border-b text-green-500">+10%</td>
          </tr>
        </tbody>
      </table>

      {/* Örnek grafik için yer tutucu */}
      <div className="bg-gray-200 p-4 rounded-lg mb-8">
        <p className="text-center">Burada bir çizgi grafiği yer alacak</p>
        <div className="h-64 bg-gray-300 rounded mt-2"></div>
      </div>

      {/* Örnek metin içeriği */}
      <h2 className="text-2xl font-semibold mb-4">Aylık Rapor Özeti</h2>
      <p className="mb-4">
        Bu ay kullanıcı sayımızda %5'lik bir artış gözlemledik. Ancak, aylık aktif kullanıcı sayımızda
        %2'lik bir düşüş yaşandı. Buna rağmen, toplam gelirimiz geçen aya göre %10 arttı. Bu artışın
        ana nedeni yeni premium özelliklerimizin lansmanı ve başarılı pazarlama kampanyalarımız oldu.
      </p>
      <p>
        Önümüzdeki ay, aktif kullanıcı sayımızı artırmak için yeni özellikler planlamaktayız ve
        kullanıcı deneyimini iyileştirmeye odaklanacağız.
      </p>
    </div>
  )
}

