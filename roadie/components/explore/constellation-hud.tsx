'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import logo from '@/public/logo.png'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { User, MessageSquare, LogOut, Compass, Home } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { apiClient } from '@/lib/api-client'

export function ConstellationHUD() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('roadie_user')
      if (userData) {
        setUser(JSON.parse(userData))
      }
    }
  }, [])

  const handleLogout = () => {
    apiClient.logout()
    router.push('/login')
  }

  return (
    <>
      <div className='absolute top-4 left-4 z-10 flex'>
        <button onClick={() => router.push('/')} className='cursor-pointer hover:scale-105 active:scale-100 transition-all duration-300 ease'>
          <Image src={logo} alt="logo" className='w-[135px] h-[35px]' />
        </button>
      </div>
      {/* Top Right - User Menu */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
        <Button
          variant="ghost"
          size='icon'
          className="bg-[#7026707c] cursor-pointer"
          onClick={() => router.push('/')}
          title="Voltar ao início"
        >
          <Home className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size='icon'
          className="bg-[#7026707c] cursor-pointer"
          onClick={() => router.push('/chat')}
        >
          <MessageSquare className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/30 backdrop-blur hover:bg-black/50 rounded-full cursor-pointer"
            >
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-[#7026707c] hover:bg-[#B200EB]">
                  {user?.name?.charAt(0) || 'U'}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.name || 'User'}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user?.email || 'user@example.com'}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='cursor-pointer' onClick={() => router.push('/profile')}>
              <User className="mr-2 h-4 w-4 " />
              Perfil & Currículo Dyn.
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='cursor-pointer' onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4 cursor-pointer" />
              Encerrar sessão
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
        <div className="select-none absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-[80%] sm:w-auto">
          <div className="bg-black/30 backdrop-blur px-6 py-3 rounded-xl sm:rounded-full border border-[#702670]">
            <div className="text-sm text-muted-foreground flex-start sm:flex items-center gap-4 justify-center flex-wrap">
              <div className='mb-4 sm:mb-0'>
                <kbd className="px-2 sm:px-2 py-1 bg-[#702670a8] rounded text-xs mr-2">Clicar</kbd>
                {'Explora Constelação'}
              </div>
              <div className='mb-4 sm:mb-0'>
                <kbd className="px-2 py-1 bg-[#702670a8] rounded text-xs mr-2">Arrastar</kbd>
                {'Rotaciona'}
              </div>
              <div className='mb-4 sm:mb-0'>
                <kbd className="px-2 py-1 bg-[#702670a8] rounded text-xs mr-2">Scroll</kbd>
                Zoom
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
