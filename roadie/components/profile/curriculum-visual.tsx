'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Star } from 'lucide-react'

export function CurriculumVisual() {
  // Carrega exatamente como no QuizWidget
  const user =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('roadie_user') || '{}')
      : {}

  const certificates = user.certificates || []

  if (!certificates.length) {
    return (
      <Card className="border-purple-500/20">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <Award className="h-16 w-16 text-muted-foreground mb-4" />
          <p className="text-lg font-medium mb-2">Sem certificados</p>
          <p className="text-sm text-muted-foreground text-center max-w-md">
            Comece explorando constelações e complete cursos para ganhar seu primeiro certificado!
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">

      {/* Certifications */}
      <Card className="border-purple-500/20">
        <CardHeader>
          <CardTitle>Certificações obtidas</CardTitle>
          <CardDescription>
            Suas conquestias e caminhos de aprendizado concluídos
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert: any) => (
              <div
                key={cert.id}
                className="p-6 rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-950/20 to-purple-900/10 hover:border-purple-500/40 transition-colors"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-600/20">
                    <Award className="h-6 w-6 text-purple-400" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold leading-relaxed truncate">
                      {cert.course_title}
                    </h4>

                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(cert.issued_at).toLocaleDateString('pt-BR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>

                <Badge variant="secondary" className="w-full justify-center">
                  <Star className="mr-1 h-3 w-3" />
                  Certified
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="border-purple-500/20">
        <CardHeader>
          <CardTitle>Habilidades Adquiridas</CardTitle>
          <CardDescription>Baseado nos seus cursos concluídos</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {certificates.map((cert: any, index: number) => (
              <Badge key={index} variant="outline" className="border-purple-500/30">
                {cert.course_title || cert.title || 'Course'}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

    </div>
  )
}