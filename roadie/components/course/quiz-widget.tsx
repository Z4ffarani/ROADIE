'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { useToast } from '@/hooks/use-toast'
import { apiClient } from '@/lib/api-client'
import { Loader2, CheckCircle, XCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'

interface Quiz {
  id: string
  total_questions: number
  passing_score: number
  questions: Array<{
    id: string
    question_text: string 
    options: string[]
    order_index: number,
    correct_index: number
  }>
}

interface QuizWidgetProps {
  quiz: Quiz
  courseId: string
  courseTitle: string   // ← adicionar
  onComplete: (result: any) => void
}

export function QuizWidget({ quiz, courseId, courseTitle, onComplete }: QuizWidgetProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>(new Array(quiz.questions.length).fill(-1))
  const [submitting, setSubmitting] = useState(false)
  const [showResultModal, setShowResultModal] = useState(false)
  const [quizResult, setQuizResult] = useState<any>(null)
  const { toast } = useToast()
  const router = useRouter()

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (answers[currentQuestion] === -1) {
      toast({
        title: 'Por favor escolha uma resposta',
        description: 'Você deve escolher uma resposta antes de continuar',
        variant: 'destructive',
      })
      return
    }

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }


  const handleSubmit = async () => {
    if (answers.includes(-1)) {
      toast({
        title: 'Quiz incompleto',
        description: 'Por favor responda todas as perguntas antes de finalizar',
        variant: 'destructive',
      })
      return
    }

    setSubmitting(true)

    try {
      // Gera resultados detalhados
      const detailedResults = quiz.questions.map((q, index) => ({
        question_id: q.id,
        question_text: q.question_text,
        selected_index: answers[index],
        selected_text: q.options[answers[index]],
        correct_index: q.correct_index,
        correct_text: q.options[q.correct_index],
        is_correct: answers[index] === q.correct_index,
      }))

      const correctCount = detailedResults.filter(r => r.is_correct).length
      const score = (correctCount / quiz.questions.length) * 100

      const raw = localStorage.getItem("roadie_user")
      const user = raw ? JSON.parse(raw) : {}

      const resultPayload = {
        course_id: courseId,
        course_title: courseTitle,
        quiz_id: quiz.id,
        total_questions: quiz.questions.length,
        correct_answers: correctCount,
        score,
        passing_score: quiz.passing_score,
        passed: score >= quiz.passing_score,
        detailed_results: detailedResults
      }

      // Se NÃO passou → NÃO SUBMITA, NÃO GERAR CERTIFICADO, NÃO CHAMAR CALLBACK
      if (score < quiz.passing_score) {
        setQuizResult({
          ...resultPayload,
          certificate: null,
        })

        setShowResultModal(true)

        toast({
          title: 'Quiz Concluído',
          description: `Você marcou ${score.toFixed(0)}%. Você precisa de ${quiz.passing_score}% para passar.`,
          variant: 'destructive',
        })

        return
      }

      // Se passou (>= 70%) → fluxo normal
      const cert = await apiClient.submitQuiz(courseId, {
        user_id: user.id,
        score,
        course_title: courseTitle,
      })

      setQuizResult({
        ...resultPayload,
        certificate: cert,
      })

      setShowResultModal(true)

      toast({
        title: 'Parabéns!',
        description: `Você passou com ${score.toFixed(0)}%! Seu certificado está pronto.`,
        variant: 'default',
      })

      onComplete({
        ...resultPayload,
        certificate: cert,
      })

    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Falha ao enviar quiz. Tente novamente mais tarde.',
        variant: 'destructive',
      })
    } finally {
      setSubmitting(false)
    }
  }

  const handleModalClose = () => {
    setShowResultModal(false)
    if (quizResult?.passed) {
      router.push('/profile')
    }
  }

  const question = quiz.questions[currentQuestion]

  return (
    <>
      <Card className="border-purple-500/20">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <CardTitle>QUIZ</CardTitle>
            <span className="text-sm text-muted-foreground">
              Questão {currentQuestion + 1} de {quiz.questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4 leading-relaxed">
              {question.question_text}
            </h3>

            <RadioGroup
              value={answers[currentQuestion]?.toString()}
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
            >
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors ${
                      answers[currentQuestion] === index
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-border hover:border-purple-500/50'
                    }`}
                  >
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                    />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer leading-relaxed"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center justify-between pt-4 ">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className='bg-[#b000eb34] text-white cursor-pointer active:scale-95'
            >
              Anterior
            </Button>

            {currentQuestion < quiz.questions.length - 1 ? (
              <Button
                className="bg-[#B200EB] hover:[#B200EB] cursor-pointer active:scale-95 text-white"
                onClick={handleNext}
              >
                Próximo
              </Button>
            ) : (
              <Button
                className="bg-[#B200EB] hover:[#B200EB] cursor-pointer active:scale-95 text-white"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin " />
                    Enviando...
                  </>
                ) : (
                  'Finalizar Quiz'
                )}
              </Button>
            )}
          </div>

          {/* Answer Grid */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">
              Navegação Rápida:
            </p>

            <div className="grid grid-cols-10 gap-2">
              {quiz.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`aspect-square rounded flex items-center justify-center text-sm font-medium transition-colors ${
                    answers[index] !== -1
                      ? 'bg-[#b000ebb7] text-white'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  } ${
                    currentQuestion === index
                      ? 'ring-2 ring-purple-400 ring-offset-2 ring-offset-background'
                      : ''
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={showResultModal}
        onOpenChange={setShowResultModal}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              {quizResult?.passed ? (
                <CheckCircle className="w-16 h-16 text-green-500" />
              ) : (
                <XCircle className="w-16 h-16 text-red-500" />
              )}
            </div>

            <DialogTitle className="text-center text-2xl">
              {quizResult?.passed ? 'Parabéns! 🎉' : 'Quase lá!'}
            </DialogTitle>

            <DialogDescription className="text-center text-lg">
              {quizResult?.passed
                ? `Você passou no quiz com ${quizResult.score.toFixed(0)}%!`
                : `Você acertou ${quizResult?.score.toFixed(0)}%. Você precisa de ${quiz.passing_score}% para passar.`}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {quizResult?.passed ? (
              <>
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4">
                  <p className="text-sm text-center text-green-700 dark:text-green-300">
                    Seu certificado foi adicionado ao seu currículo!
                  </p>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  Acesse seu perfil para visualizar e baixar o certificado.
                </div>
              </>
            ) : (
              <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-lg p-4">
                <p className="text-sm text-center text-orange-700 dark:text-orange-300">
                  Continue estudando e tente novamente!
                </p>
              </div>
            )}
          </div>

          <DialogFooter className="sm:justify-center">
            {quizResult?.passed ? (
              <>
                <Button
                  onClick={handleModalClose}
                  className="bg-[#B200EB] hover:[#B200EB]"
                >
                  Ver Currículo
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowResultModal(false)}
                >
                  Continuar Explorando
                </Button>
              </>
            ) : (
              <Button
                onClick={() => {
                  setShowResultModal(false)
                  setAnswers(new Array(quiz.questions.length).fill(-1))
                  setCurrentQuestion(0)
                }}
                className="bg-[#B200EB] hover:[#B200EB]"
              >
                Tentar Novamente
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
)
}