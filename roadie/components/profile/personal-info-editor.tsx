'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Save } from 'lucide-react'
import { UserInfo } from '@/db/user-info'

interface PersonalInfoEditorProps {
  user: UserInfo
  onUpdate: (user: UserInfo) => void
}

export function PersonalInfoEditor({ user, onUpdate }: PersonalInfoEditorProps) {
  const [name, setName] = useState(user.name)
  const [bio, setBio] = useState(user.bio)
  const [phone, setPhone] = useState(user.phone)
  const [location, setLocation] = useState(user.location)
  const [linkedin, setLinkedin] = useState(user.linkedin)
  const [github, setGithub] = useState(user.github)

  const [saving, setSaving] = useState(false)
  const { toast } = useToast()

  const handleSave = async () => {
    setSaving(true)

    try {
      const updatedUser: UserInfo = {
        ...user,
        name,
        bio,
        phone,
        location,
        linkedin,
        github,
        saving: false, // sempre falso no objeto
      }

      onUpdate(updatedUser)

      if (typeof window !== 'undefined') {
        localStorage.setItem('roadie_user', JSON.stringify(updatedUser))
      }

      toast({
        title: 'Success',
        description: 'Profile updated successfully',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update profile',
        variant: 'destructive',
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card className="border-purple-500/20">
      <CardHeader>
        <CardTitle>Informação Pessoal</CardTitle>
        <CardDescription>
          Atualize suas informações pessoais e informações de contato
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={user.id}
              disabled
              className="opacity-60"
            />
            <p className="text-xs text-muted-foreground">Email não pode ser alterado</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+55 (11) 99999-9999"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Localização</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, State"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Fale sobre você..."
            rows={4}
          />
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium">Redes Sociais</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="linkedin.com/in/username"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github">GitHub</Label>
              <Input
                id="github"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="github.com/username"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button
            onClick={handleSave}
            disabled={saving}
            className="bg-purple-600 hover:bg-[#B200EB] text-white cursor-pointer active:scale-90"
          >
            {saving ? (
              <>
                <Save className="mr-2 h-4 w-4 animate-spin" />
                Salvando...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Salvar Alterações
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}