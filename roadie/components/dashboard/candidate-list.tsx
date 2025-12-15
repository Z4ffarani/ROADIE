'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Award, MapPin } from 'lucide-react'
import candidatesData from '@/db/candidates.json'

export interface Candidate {
  id: string
  name: string
  email: string
  bio: string
  phone: string
  location: string
  linkedin: string
  github: string
  role: string
  companies_applying: string[]
  skills: string[]
  lastActive: string
  constellation?: string
  seniority?: string
}

interface CandidateListProps {
  candidates?: Candidate[]
  selectedCandidate: Candidate | null
  onSelectCandidate: (candidate: Candidate) => void
}

export function CandidateList({
  candidates,
  selectedCandidate,
  onSelectCandidate
}: CandidateListProps) {
  // Se não houver candidatos filtrados, exibe todos
  const displayCandidates = candidates && candidates.length > 0 ? candidates : candidatesData

  return (
    <Card className="border-purple-500/20">
      <CardHeader>
        <CardTitle>Candidatos ({displayCandidates.length})</CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-350px)]">
          <div className="space-y-2 p-6 pt-0">
            {displayCandidates.map(candidate => (
              <div
                key={candidate.id}
                onClick={() => onSelectCandidate(candidate)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedCandidate?.id === candidate.id
                    ? 'border-3 border-[#b000eb96] bg-purple-500/10'
                    : 'border-border hover:border-purple-500/40 hover:bg-card/80'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-purple-600">
                      {candidate.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold leading-none mb-2">{candidate.name}</h4>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <MapPin className="h-3 w-3" />
                      {candidate.location}
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        <Award className="mr-1 h-3 w-3" />
                        {candidate.companies_applying.length} aplicações
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {candidate.skills.slice(0, 3).map(skill => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs border-purple-500/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground mt-2">
                      Última sessão: {new Date(candidate.lastActive).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}