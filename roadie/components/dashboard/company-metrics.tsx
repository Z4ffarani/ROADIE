'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Award, TrendingUp, MessageSquare } from 'lucide-react'

export function CompanyMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="border-purple-500/20">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Candidatos Totais</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">847</div>
          <p className="text-xs text-muted-foreground mt-1">
            <span className="text-green-500">+12%</span> desde último mês
          </p>
        </CardContent>
      </Card>

      <Card className="border-purple-500/20">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Profissionais Certificados</CardTitle>
          <Award className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">523</div>
          <p className="text-xs text-muted-foreground mt-1">
            <span className="text-green-500">+8%</span> desde o último mês
          </p>
        </CardContent>
      </Card>

      <Card className="border-purple-500/20">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Conversas Ativas</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">20</div>
          <p className="text-xs text-muted-foreground mt-1">
            3 novas mensagens hoje
          </p>
        </CardContent>
      </Card>

      <Card className="border-purple-500/20">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Tempo Médio de Finalização</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">14d</div>
          <p className="text-xs text-muted-foreground mt-1">
            Por constelação
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
