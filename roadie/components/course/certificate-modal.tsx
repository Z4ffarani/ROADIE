'use client'

import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Award, Download, Eye } from 'lucide-react'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'

interface CertificateModalProps {
  open: boolean
  onClose: () => void
  result: {
    score: number
    passed: boolean
    certificate_id?: string
    cert_url?: string
  }
  courseTitle: string
}

export function CertificateModal({ open, onClose, result, courseTitle }: CertificateModalProps) {
  const router = useRouter()

  useEffect(() => {
    if (open && result.passed) {
      // Trigger confetti animation
      const duration = 3000
      const end = Date.now() + duration

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#8A2BE2', '#9D4EDD', '#C77DFF'],
        })
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#8A2BE2', '#9D4EDD', '#C77DFF'],
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      }

      frame()
    }
  }, [open, result.passed])

  const handleViewCurriculum = () => {
    onClose()
    router.push('/profile')
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-purple-500/20">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-purple-600/20 flex items-center justify-center">
              <Award className="w-10 h-10 text-purple-400" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">
            Parabéns!
          </DialogTitle>
          <DialogDescription className="text-center leading-relaxed">
            Você completou <strong className="text-foreground">{courseTitle}</strong> com uma pontuação de {' '}
            <strong className="text-purple-400">{result.score.toFixed(0)}%</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          <Button
            className="w-full bg-purple-600 hover:bg-purple-700"
            onClick={handleViewCurriculum}
          >
            <Eye className="mr-2 h-4 w-4" />
            Ver Currículo
          </Button>

          {result.cert_url && (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                // TODO: Implement PDF download
                window.open(result.cert_url, '_blank')
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Baixar Certificado
            </Button>
          )}

          <Button variant="ghost" className="w-full" onClick={onClose}>
            Continuar Aprendendo
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-4">
          Seu certificado foi adicionado ao seu currículo e é visível para recrutadores.
        </p>
      </DialogContent>
    </Dialog>
  )
}
