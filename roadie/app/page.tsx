import Link from 'next/link'
import { Button } from '@/components/ui/button'
import logo from '@/public/logo.png'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0d10cb]">
      <div className="fixed inset-0 -z-10">
        <img
          src="/galaxy.jpg"
          alt="galaxy"
          className="w-full h-full object-cover opacity-40 scale-x-[-1]"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <div className="space-y-4 flex flex-col items-center">

          <div className="relative float-vertical">
            <Image src={logo} alt="Logo" className="metallic scale-[80%]" />
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {'Navegue pela sua carreira entre as estrelas. Explore constelações de habilidades, conclua cursos, obtenha certificações e conecte-se com oportunidades.'}
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="bg-[#702670] hover:bg-[#702670] hover:scale-95 text-white">
            <Link href="/login">Cadastro</Link>
          </Button>
          <Button asChild size="lg" className='bg-[#B200EB] hover:bg-[#B200EB] hover:scale-95 text-white'>
            <Link href="/explore">Explorar Constelações</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur border-2 border-[#702670]">
            <div className="text-4xl mb-4 float-vertical">🌟</div>
            <h3 className="text-lg font-semibold mb-2 blinky">Aprenda Habilidades</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {'Navegue por constelações 3D que representam trajetórias de carreira e conclua cursos para desbloquear novas habilidades.'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card/50 backdrop-blur border-2 border-[#702670]">
            <div className="text-4xl mb-4 float-vertical">📜</div>
            <h3 className="text-lg font-semibold mb-2 blinky">Ganhe Certificados</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {'Passe nos quizzes com 70% ou mais para obter certificados e construir seu currículo dinâmico.'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card/50 backdrop-blur border-2 border-[#702670]">
            <div className="text-4xl mb-4 float-vertical">🤝</div>
            <h3 className="text-lg font-semibold mb-2 blinky">Seja Recrutado</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {'As empresas podem descobrir suas habilidades e conectar-se com você para oportunidades.'}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mt-12 pt-12 border-t border-gray-800">
          <Button asChild className='blinky active:scale-90 bg-[#00000] hover:bg-[#B200EB] text-white' size="sm">
            <Link href="/explore">Constelações 3D</Link>
          </Button>
          <Button asChild className='blinky active:scale-90 bg-[#00000] hover:bg-[#B200EB] text-white' size="sm">
            <Link href="/profile">Meu Perfil</Link>
          </Button>
          <Button asChild className='blinky active:scale-90 bg-[#00000] hover:bg-[#B200EB] text-white' size="sm">
            <Link href="/chat">Mensagens</Link>
          </Button>
          <Button asChild className='blinky active:scale-90 bg-[#00000] hover:bg-[#B200EB] text-white' size="sm">
            <Link href="/dashboard/company">Dashboard Empresarial</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
