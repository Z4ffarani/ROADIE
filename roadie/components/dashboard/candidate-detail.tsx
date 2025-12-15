'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { MessageSquare, Mail, Award, MapPin, Calendar } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { apiClient } from '@/lib/api-client'
import type { Candidate } from '@/lib/api-client'

interface CandidateDetailProps {
  candidate: Candidate
}

export function CandidateDetail({ candidate }: CandidateDetailProps) {
  const router = useRouter()

  const handleStartChat = async () => {
    await apiClient.createOrOpenConversation(candidate.id, candidate.name)
    router.push('/chat')
  }

  return (
    <Card className="border-purple-500/20 sticky top-24">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-purple-600 text-xl">
              {candidate.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-xl mb-1">{candidate.name}</CardTitle>
            {candidate.location && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {candidate.location}
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            className="text-white cursor-pointer active:scale-95 flex-1 bg-[#B200EB] hover:bg-[#B200EB]"
            onClick={handleStartChat}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Iniciar Conversa
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-4 w-4" />
          </Button>
        </div>

        <Separator />

        {/* Certificates */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-purple-400" />
            <h4 className="font-semibold">Certificados</h4>
          </div>
          <div className="space-y-2">
            {[...Array(candidate.certificateCount)].map((_, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-purple-950/20 border border-purple-500/20"
              >
                <p className="text-sm font-medium">Certificado {i + 1}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Obtido {Math.floor(Math.random() * 30) + 1} dias atrás
                </p>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Skills */}
        <div className="space-y-3">
          <h4 className="font-semibold">Habilidades</h4>
          <div className="flex flex-wrap gap-2">
            {candidate.skills.map(skill => (
              <Badge key={skill} variant="outline" className="border-purple-500/30">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Activity */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-purple-400" />
            <h4 className="font-semibold">Atividade Recente</h4>
          </div>
          <div className="text-sm text-muted-foreground">
            {candidate.lastActive && <p>Última sessão: {candidate.lastActive}</p>}
            <p className="mt-1">
              Curso finalizado há {Math.floor(Math.random() * 7) + 1} dias atrás
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}