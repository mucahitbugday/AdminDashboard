'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bell, User, Settings, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Header() {
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const clearNotifications = () => {
    setUnreadNotifications(0);
  };

  return (
    <header className="bg-gradient-to-r from-white-500 to-white-600 dark:from-gray-800 dark:to-black shadow-md p-4 sm:px-6 lg:px-8 flex justify-between items-center">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6 text-white dark:text-gray-200" />
        </Button>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Admin Dashboard
        </h1>
      </div>

      {/* Right-side Actions */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative text-gray-800 dark:text-gray-200">
              <Bell className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              {unreadNotifications > 0 && (
                <span className="absolute top-0 right-0 h-5 w-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {unreadNotifications}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 sm:w-80 bg-white dark:bg-gray-900" align="end" forceMount>
            <DropdownMenuLabel className="text-gray-800 dark:text-gray-200">
              Bildirimler
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[50vh] overflow-auto">
              <DropdownMenuItem className="text-gray-800 dark:text-gray-200">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-2" />
                <span>Yeni bir kullanıcı kaydoldu</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-800 dark:text-gray-200">
                <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2" />
                <span>Sistem güncellemesi mevcut</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-800 dark:text-gray-200">
                <span className="h-2 w-2 rounded-full bg-red-500 mr-2" />
                <span>Kritik hata tespit edildi</span>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-center text-gray-800 dark:text-gray-200"
              onClick={clearNotifications}
            >
              Tüm bildirimleri okundu olarak işaretle
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-12 w-12 rounded-full">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/avatars/01.png" alt={user?.email || 'User'} />
                <AvatarFallback>{user?.email?.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white dark:bg-gray-900" align="end" forceMount>
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{user?.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-gray-800 dark:text-gray-200">
              <User className="mr-2 h-4 w-4 text-gray-800 dark:text-gray-200" />
              <span>Profil</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-800 dark:text-gray-200">
              <Settings className="mr-2 h-4 w-4 text-gray-800 dark:text-gray-200" />
              <span>Ayarlar</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* Theme Toggle in Dropdown */}
            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-gray-800 dark:text-gray-200">Tema</span>
              <ThemeToggle />
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-red-500 dark:text-red-400"
            >
              <LogOut className="mr-2 h-4 w-4 text-red-500 dark:text-red-400" />
              <span>Çıkış Yap</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
