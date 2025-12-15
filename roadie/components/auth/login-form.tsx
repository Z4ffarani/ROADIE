'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import type { UserInfo } from '@/db/user-info'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const isCompany = email.includes('company') || email.includes('empresa')

      const user: UserInfo = {
        id: '650e8400-e29b-41d4-a716-446655440001',
        email,
        name: email.split('@')[0] || 'User',
        bio: '',
        phone: '',
        location: '',
        linkedin: '',
        github: '',
        saving: false,
        role: isCompany ? 'company-admin' : 'user',
        company_id: isCompany ? 'company-1' : undefined,
      }

      const token = 'mock-token-' + Date.now()

      localStorage.setItem('roadie_user', JSON.stringify(user))
      localStorage.setItem('roadie_token', token)

      toast({
        title: 'Sucesso',
        description: 'Login foi um sucesso',
      })

      if (user.role === 'company-admin' || user.role === 'recruiter') {
        router.push('/dashboard/company')
      } else {
        router.push('/explore')
      }

    } catch {
      toast({
        title: 'Erro',
        description: 'Login falhou',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-purple-500/20">
      <CardHeader>
        <CardTitle>Cadastre-se</CardTitle>
        <CardDescription>Adicione suas credenciais para continuar</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-2">
            Demo: Use qualquer email (company@example.com para visualização do recrutador)
          </p>

        </form>
      </CardContent>
    </Card>
  )
}
