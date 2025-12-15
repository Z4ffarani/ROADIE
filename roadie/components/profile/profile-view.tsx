'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useToast } from '@/hooks/use-toast'
import { CurriculumVisual } from './curriculum-visual'
import { CurriculumTimeline } from './curriculum-timeline'
import { PersonalInfoEditor } from './personal-info-editor'
import { Loader2, Download, ArrowLeft } from 'lucide-react'

export function ProfileView() {
  const [user, setUser] = useState<any>(null)
  const [curriculum, setCurriculum] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = () => {
    const raw = localStorage.getItem("roadie_user")

    if (!raw) {
      setUser(null)
      setCurriculum({ certificates: [], activities: [] })
      setLoading(false) // ← ESSENCIAL
      return
    }

    const parsed = JSON.parse(raw)

    // força reconstrução para evitar cache stale do React
    const freshUser = { ...parsed }
    setUser(freshUser)

    const certs = freshUser.certificates || []

    setCurriculum({
      certificates: [...certs],
      activities: certs.map(cert => ({
        id: cert.id,
        type: "certificate",
        title: `Earned certificate for ${cert.course_title}`,
        description: `Scored ${(Number(cert.score) || 0).toFixed(0)}%`,
        timestamp: cert.issued_at
      }))
    })

    setLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0d10] via-[#12151a] to-[#0b0d10]">
        <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#000000d5]">
      {/* Header */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/spacestract.jpg"
          alt="abstract-space"
          className="w-full h-full object-cover opacity-40 scale-x-[-1]"
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-[#0b0d10]/80 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            size="sm"
            onClick={() => router.push('/explore')}
            className='bg-[#00000000] text-white hover:bg-[#b000eb36] cursor-pointer active:scale-95'
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar Para Constelações
          </Button>
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-[#B200EB] bg-clip-text text-transparent">
            Meu Perfil
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* User Info Card */}
          <Card className="border-purple-500/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{user?.name}</CardTitle>
                  <CardDescription className="mt-1">{user?.email}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Certificados Obtidos</div>
                  <div className="text-3xl font-bold text-purple-400">
                    {curriculum?.certificates?.length || 0}
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Curriculum Tabs */}
          <Tabs defaultValue="visual" className="w-full">
            <TabsList className="grid w-full grid-cols-3 border-1 border-[#00000071]">
              <TabsTrigger value="visual" className='cursor-pointer text-[#7a7a7a]'>Currículo Dinâmico</TabsTrigger>
              <TabsTrigger value="timeline" className='cursor-pointer text-[#7a7a7a]'>Linha do Tempo</TabsTrigger>
              <TabsTrigger value="info" className='cursor-pointer text-[#7a7a7a]'>Informações Pessoais</TabsTrigger>
            </TabsList>

            <TabsContent value="visual" className="mt-6">
              <CurriculumVisual curriculum={curriculum} />
            </TabsContent>

            <TabsContent value="timeline" className="mt-6">
              <CurriculumTimeline curriculum={curriculum} />
            </TabsContent>

            <TabsContent value="info" className="mt-6">
              <PersonalInfoEditor user={user} onUpdate={setUser} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
