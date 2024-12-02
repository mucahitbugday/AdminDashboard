'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function UISettings() {
  const { user } = useAuth()
  const [primaryColor, setPrimaryColor] = useState('#3B82F6')
  const [fontSize, setFontSize] = useState('16')

  // Sadece mucahit@admin kullanıcısı için içeriği göster
  if (user?.email !== 'mucahit@admin.com') {
    return <div>Bu sayfayı görüntüleme yetkiniz yok.</div>
  }

  const handleSave = () => {
    // Burada ayarları kaydetme işlemi yapılacak
    console.log('Ayarlar kaydedildi:', { primaryColor, fontSize })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">UI Ayarları</h1>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700">
            Ana Renk
          </label>
          <Input
            type="color"
            id="primaryColor"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700">
            Yazı Boyutu (px)
          </label>
          <Input
            type="number"
            id="fontSize"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="mt-1"
          />
        </div>

        <Button onClick={handleSave}>Ayarları Kaydet</Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Yardım</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>UI Ayarları Hakkında</DialogTitle>
              <DialogDescription>
                Bu sayfada, uygulamanın görünümünü özelleştirebilirsiniz. Ana renk, uygulamanın genel renk temasını belirler. Yazı boyutu, tüm metinlerin boyutunu etkiler.
              </DialogDescription>
            </DialogHeader>
            <p>Değişikliklerinizi kaydetmeyi unutmayın!</p>
          </DialogContent>
        </Dialog>
      </div>

      {/* Örnek önizleme */}
      <div className="mt-8 p-4 border rounded-lg" style={{ backgroundColor: primaryColor, fontSize: `${fontSize}px` }}>
        <h2 className="text-white font-bold mb-2">Önizleme</h2>
        <p className="text-white">Bu, seçtiğiniz ayarların nasıl görüneceğine dair bir önizlemedir.</p>
      </div>
    </div>
  )
}

