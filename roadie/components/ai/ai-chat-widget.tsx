'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { X, Send, Mic, MicOff, User, Bot, Sparkle, Star } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        `Olá! Sou a Stella.

Escreva uma das perguntas abaixo:

• O que é computação quântica
• O que faz um engenheiro de IA
• O que é singularidade tecnológica
• O que é Bioinformática
• O que é o metaverso

O que gostaria de saber?`,
      timestamp: new Date().toISOString()
    }
  ])
  
  
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<any>(null)
  const pathname = usePathname()

  // ---------------------------------------------------
  // PERGUNTAS SELECIONADAS – NORMALIZADAS
  // ---------------------------------------------------
  const mockQuestions: Record<string, string> = {
    "o que e computacao quantica":
      "Computação quântica usa qubits para realizar cálculos muito além do possível em máquinas tradicionais.",
    "o que faz um engenheiro de ia":
      "Engenheiros de IA projetam, treinam, otimizam e implantam sistemas inteligentes em larga escala.",
    "o que e singularidade tecnologica":
      "É o ponto em que a inteligência artificial supera a humana e passa a evoluir sozinha.",
    "o que e bioinformatica":
      "Bioinformática integra computação e biologia para analisar dados genéticos e acelerar pesquisas médicas.",
    "o que e o metaverso":
      "O metaverso é um ambiente digital imersivo que combina realidade virtual, realidade aumentada e interações em tempo real."
  }

  // Normalização do texto
  const normalize = (text: string) =>
    text
      .toLowerCase()
      .replace(/[áàãâ]/g, 'a')
      .replace(/[éê]/g, 'e')
      .replace(/[í]/g, 'i')
      .replace(/[óôõ]/g, 'o')
      .replace(/[ú]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[^\w\s]/g, '')
      .trim()

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Reconhecimento de voz
  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
      recognitionRef.current.lang = 'pt-BR'

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInput(transcript)
        setIsListening(false)
      }

      recognitionRef.current.onerror = () => setIsListening(false)
      recognitionRef.current.onend = () => setIsListening(false)
    }
  }, [])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    await new Promise(res => setTimeout(res, 700))

    const normalized = normalize(input)

    if (mockQuestions[normalized]) {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: mockQuestions[normalized],
        timestamp: new Date().toISOString()
      }

      setMessages(prev => [...prev, assistantMessage])
      setInput('')
      setIsLoading(false)
      return
    }

    const fallbackMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content:
        'Posso responder perguntas sobre: computação quântica, engenheiro de IA, singularidade tecnológica, bioinformática e metaverso.',
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, fallbackMessage])
    setInput('')
    setIsLoading(false)
  }

  const handleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition não disponível neste navegador.')
      return
    }

    if (isListening) {
      recognitionRef.current.stop()
    } else {
      recognitionRef.current.start()
      setIsListening(true)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const isOnChatPage = pathname === '/chat'
  if (isOnChatPage) return null

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="cursor-pointer fixed bottom-6 right-6 w-14 h-14 rounded-full active:scale-90 shadow-lg bg-[#B200EB] hover:bg-[#B200EB] z-50"
        >
          <Sparkle className="w-10 h-10 scale-150 text-white" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[400px] h-[600px] bg-background border-2 border-[#702670cb] rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden">

          <div className="flex items-center justify-between p-4 border-b bg-[#B200EB] text-white">
            <h3 className="font-semibold text-2xl">Stella</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-[#B200EB] h-8 w-8 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.role === 'user' ? 'flex-row-reverse ' : 'flex-row '
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user' ? 'bg-blue-600' : 'bg-[#B200EB]'
                  }`}
                >
                  {message.role === 'user'
                    ? <User className="w-4 h-4 text-white " />
                    : <Sparkle className="w-4 h-4 text-white" />}
                </div>

                <Card
                  className={`p-3 max-w-[75%] ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-[#70267069]'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                  </p>
                </Card>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[#B200EB] flex items-center justify-center">
                  <Sparkle className="w-4 h-4 text-white" />
                </div>
                <Card className="p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-[#B200EB] rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-[#B200EB] rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 bg-[#B200EB] rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </Card>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-2 border-t-[#702670cb] p-4 bg-background">
            <div className="flex gap-2">
              <Button
                variant={isListening ? 'default' : 'outline'}
                size="icon"
                onClick={handleVoiceInput}
                className={isListening ? 'bg-red-600 hover:bg-red-700 flex-shrink-0 cursor-pointer' : 'flex-shrink-0 cursor-pointer'}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>

              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite ou fale..."
                disabled={isLoading}
                className="flex-1"
              />

              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                size="icon"
                variant="ghost"
                className="flex-shrink-0 cursor-pointer bg-[#B200EB]"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            {isListening && (
              <p className="text-xs text-[#B200EB] text-center mt-2 animate-pulse">
                Ouvindo... Fale agora
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}