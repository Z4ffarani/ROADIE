'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { apiClient } from '@/lib/api-client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { VideoPlayer } from './video-player'
import { ArticleContent } from './article-content'
import { QuizWidget } from './quiz-widget'
import { CertificateModal } from './certificate-modal'
import { Loader2, ArrowLeft } from 'lucide-react'

interface Course {
  id: string
  constellation_id: string
  title: string
  video_iframe_url?: string
  article_md?: string
  locked: boolean
  quiz?: {
    id: string
    total_questions: number
    passing_score: number
    questions: Array<{
      id: string
      question_text: string
      options: string[]
      order_index: number
    }>
  }
}

export function CourseView({ courseId }: { courseId: string }) {
  const [course, setCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizResult, setQuizResult] = useState<any>(null)
  const [showCertificate, setShowCertificate] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    loadCourse()
  }, [courseId])

  const loadCourse = async () => {
    try {
      const data = await apiClient.getCourse(courseId)
      setCourse(data)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load course',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleQuizComplete = (result: any) => {
    setQuizResult(result)
    if (result.passed) {
      setShowCertificate(true)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0d10] via-[#12151a] to-[#0b0d10]">
        <Loader2 className="h-8 w-8 animate-spin text-[#B200EB]" />
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0d10] via-[#12151a] to-[#0b0d10]">
        <Card className="border-purple-500/20">
          <CardHeader>
            <CardTitle>Curso não encontrado</CardTitle>
            <CardDescription>O curso procurado não existe.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/explore')} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar Para Constelações
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0d10] via-[#12151a] to-[#0b0d10]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-[#0b0d10]/80 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            size="sm"
            onClick={() => router.push('/explore')}
            className='bg-[#00000000] text-white hover:bg-[#b000eb36] cursor-pointer active:scale-95'
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar Para Constelações
          </Button>
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-[#B200EB] bg-clip-text text-transparent">
            {course.title}
          </h1>
          <div className="w-24" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Video */}
          <div className="space-y-6">
            {course.video_iframe_url && (
              <VideoPlayer url={course.video_iframe_url} title={course.title} />
            )}
            
            {!showQuiz && course.quiz && (
              <Card className="border-purple-500/20">
                <CardHeader>
                  <CardTitle>Preparado para avaliar seu conhecimento?</CardTitle>
                  <CardDescription>
                    Acerte o quiz em {course.quiz.passing_score}% ou mais para conquistar seu certificado!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-[#B200EB] hover:bg-[#B200EB] cursor-pointer active:scale-95 text-white"
                    onClick={() => setShowQuiz(true)}
                  >
                    Começar Quiz ({course.quiz.total_questions} Questões)
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column: Article or Quiz */}
          <div className="space-y-6">
            {!showQuiz ? (
              <ArticleContent markdown={course.article_md || ''} />
            ) : (
              course.quiz && (
                <QuizWidget
                  quiz={course.quiz}
                  courseId={course.id}
                  courseTitle={course.title} 
                  onComplete={handleQuizComplete}
                />
              )
            )}
          </div>
        </div>
      </main>

      {/* Certificate Modal */}
      {showCertificate && quizResult && (
        <CertificateModal
          open={showCertificate}
          onClose={() => setShowCertificate(false)}
          result={quizResult}
          courseTitle={course.title}
        />
      )}
    </div>
  )
}
