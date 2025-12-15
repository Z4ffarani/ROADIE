'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, Calendar } from 'lucide-react'

interface CurriculumTimelineProps {
  curriculum: any
}

export function CurriculumTimeline({ curriculum }: CurriculumTimelineProps) {
  if (!curriculum || !curriculum.entries?.length) {
    return (
      <Card className="border-purple-500/20">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <Calendar className="h-16 w-16 text-muted-foreground mb-4" />
          <p className="text-lg font-medium mb-2">No Activity Yet</p>
          <p className="text-sm text-muted-foreground text-center max-w-md">
            Sua jornada de aprendizado aparecerá aqui conforme completa cursos e ganha certificados.
          </p>
        </CardContent>
      </Card>
    )
  }

  const entries = curriculum.entries || []

  return (
    <Card className="border-purple-500/20">
      <CardHeader>
        <CardTitle>Linha do Tempo</CardTitle>
        <CardDescription>
          Jornada concluída
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-500/20" />

          {/* Timeline items */}
          <div className="space-y-8">
            {entries.map((entry: any, index: number) => (
              <div key={entry.id} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/20 border-4 border-background">
                  <Award className="h-6 w-6 text-purple-400" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="p-6 rounded-lg border border-purple-500/20 bg-card">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-semibold leading-relaxed">
                        {entry.type === 'cert' && 'Certificate Earned'}
                        {entry.type === 'experience' && 'Experience Added'}
                        {entry.type === 'education' && 'Education Added'}
                        {entry.type === 'custom' && 'Custom Entry'}
                      </h4>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(entry.created_at).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {entry.type === 'cert' && entry.payload?.course_title && (
                        <p>Finalizado: <strong className="text-foreground">{entry.payload.course_title}</strong></p>
                      )}
                      {entry.payload?.description && (
                        <p className="mt-2">{entry.payload.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
