'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Filter } from 'lucide-react'
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
  lastActive: string,
  certificates?: string[]
}

interface CandidateFiltersProps {
  onFilteredCandidates: (candidates: Candidate[]) => void
}

export function CandidateFilters({ onFilteredCandidates }: CandidateFiltersProps) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [availableSkills, setAvailableSkills] = useState<string[]>([])

  // Extrai todas as skills únicas e mostra todos os candidatos inicialmente
  useEffect(() => {
    const skillsSet = new Set<string>()
    candidatesData.forEach(c => c.skills.forEach(s => skillsSet.add(s)))
    setAvailableSkills(Array.from(skillsSet))
  }, [])

  
  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    )
  }
  
  const handleApplyFilters = () => {
    const filtered = candidatesData.filter(candidate => {
      if (selectedSkills.length === 0) return true
      return selectedSkills.every(skill => candidate.skills.includes(skill))
    })
    onFilteredCandidates(
      filtered.length > 0
        ? filtered.map(c => ({ ...c, certificates: c.certificates || [] }))
        : candidatesData.map(c => ({ ...c, certificates: c.certificates || [] }))
    )
  }

  const handleReset = () => {
    setSelectedSkills([])
    onFilteredCandidates(candidatesData.map(c => ({ ...c, certificates: c.certificates || [] })))
  }
  
  return (
    <Card className="border-purple-500/20 sticky top-24">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg flex items-center gap-2">
          <Filter className="h-4 w-4" /> Filtros
        </CardTitle>
        <Button className='cursor-pointer active:scale-95' variant="ghost" size="sm" onClick={handleReset}>
          Redefinir
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Skills */}
        <div className="space-y-3">
          <Label>Habilidades</Label>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {availableSkills.map(skill => (
              <div key={skill} className="flex items-center space-x-2">
                <Checkbox
                  className='cursor-pointer'
                  id={skill}
                  checked={selectedSkills.includes(skill)}
                  onCheckedChange={() => handleSkillToggle(skill)}
                />
                <label htmlFor={skill} className="text-sm font-medium cursor-pointer">
                  {skill}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Button className="text-white cursor-pointer active:scale-95 w-full bg-[#B200EB] hover:bg-[#B200EB]" onClick={handleApplyFilters}>
          Aplicar Filtros
        </Button>
      </CardContent>
    </Card>
  )
}