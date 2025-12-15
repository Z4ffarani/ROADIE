'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CandidateFilters, Candidate } from './candidate-filters'
import { CandidateList } from './candidate-list'
import { CandidateDetail } from './candidate-detail'
import { CompanyMetrics } from './company-metrics'
import { LogOut, MessageSquare, Home } from 'lucide-react'
import candidatesData from '@/db/candidates.json'
import { apiClient } from '@/lib/api-client'

export function CompanyDashboard() {
  const router = useRouter()
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null)
  const [showFilters, setShowFilters] = useState(true)
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>(candidatesData)

  const handleLogout = () => {
    apiClient.logout()
    router.push('/login')
  }

  const handleFilteredCandidates = (filtered: Candidate[]) => {
    const mapped = filtered.map(c => ({ ...c, certificates: c.certificates || [] }))
    setFilteredCandidates(mapped.length > 0 ? mapped : candidatesData.map(c => ({ ...c, certificates: c.certificates || [] })))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#0b0d10a6]">
      {/* Header */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/wavy.jpg"
          alt="abstract-space"
          className="w-full h-full object-cover opacity-40 scale-x-[-1]"
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-[#0b0d10]/80 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-[#B200EB] bg-clip-text text-transparent">
            RECRUTAMENTO
          </h1>
          <div className="flex items-center gap-3">
            <Button className="cursor-pointer active:scale-95" variant="ghost" size="sm" onClick={() => router.push('/')}>
              <Home className="mr-2 h-4 w-4" /> Menu
            </Button>
            <Button className="cursor-pointer active:scale-95" variant="ghost" size="sm" onClick={() => router.push('/chat')}>
              <MessageSquare className="mr-2 h-4 w-4" /> Mensagens
            </Button>
            <Button className="cursor-pointer active:scale-95" variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" /> Encerrar Sessão
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Metrics */}
        <CompanyMetrics />

        {/* Dashboard Grid */}
        <div className={`grid grid-cols-1 gap-6 mt-8 ${showFilters ? 'lg:grid-cols-12' : 'lg:grid-cols-9'}`}>
          {/* Filters - Left Sidebar */}
          {showFilters && (
            <div className="lg:col-span-3">
              <CandidateFilters onFilteredCandidates={handleFilteredCandidates} />
            </div>
          )}

          {!showFilters && (
            <div className="lg:col-span-12 mb-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(true)}
                className="border-purple-500/30"
              >
                Mostrar Filtros
              </Button>
            </div>
          )}

          {/* Candidate List - Center */}
          <div className={showFilters ? 'lg:col-span-5' : 'lg:col-span-5'}>
            <CandidateList
              candidates={filteredCandidates}
              selectedCandidate={selectedCandidate}
              onSelectCandidate={candidate => setSelectedCandidate({ ...candidate, certificates: candidate.certificates || [] })}
            />
          </div>

          {/* Candidate Detail - Right */}
          <div className="lg:col-span-4">
            {selectedCandidate ? (
              <CandidateDetail candidate={selectedCandidate} />
            ) : (
              <Card className="border-purple-500/20 h-full">
                <CardContent className="flex flex-col items-center justify-center h-full min-h-[400px]">
                  <p className="text-muted-foreground text-center">
                    Selecione um candidato para ver seu perfil.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
