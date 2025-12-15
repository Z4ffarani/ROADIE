'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Send, ArrowLeft, Building2, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { apiClient } from '@/lib/api-client'

import type { ChatMessage } from '@/lib/api-client'
import type { Conversation } from '@/lib/api-client'

export default function ChatPage() {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null)
  const [conversationMessages, setConversationMessages] = useState<Record<string, ChatMessage[]>>({})
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const [currentUser, setCurrentUser] = useState<any>(null)
  const [userType, setUserType] = useState<'user' | 'company'>('user')

  // --- Carrega dados do usuário ---
  useEffect(() => {
    const data = localStorage.getItem('roadie_user')
    if (data) {
      const user = JSON.parse(data)
      setCurrentUser(user)
      setUserType(user.role === 'company-admin' ? 'company' : 'user')
    }
  }, [])

  // --- Carregar conversas e mensagens ---
  useEffect(() => {
    if (!currentUser) return

    const loadConversationsAndMessages = async () => {
      const chats = apiClient.getFilteredConversations(currentUser)
      setConversations(chats)

      const messagesPromises = chats.map(async conv => {
        const msgs = await apiClient.getConversationMessages(conv.id)
        return [
          conv.id,
          msgs.length
            ? msgs
            : [{
                id: `msg-init-${conv.id}`,
                conversation_id: conv.id,
                sender_id: conv.user_id,
                sender_type: 'user' as 'user',
                content: conv.last_message,
                timestamp: conv.updated_at
              }]
        ] as const
      })

      const messagesArray = await Promise.all(messagesPromises)
      const initialMessages: Record<string, ChatMessage[]> = {}
      messagesArray.forEach(([id, msgs]) => {
        initialMessages[id] = msgs
      })

      setConversationMessages(initialMessages)
    }

    loadConversationsAndMessages()
  }, [currentUser])

  // --- Carregar mensagens da conversa selecionada ---
  useEffect(() => {
    if (selectedConversation && !conversationMessages[selectedConversation.id]) {
      loadMessages(selectedConversation.id)
    }
  }, [selectedConversation])

  const loadMessages = async (conversationId: string) => {
    const messages = await apiClient.getConversationMessages(conversationId)
    setConversationMessages(prev => ({
      ...prev,
      [conversationId]: messages
    }))
  }

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [conversationMessages, selectedConversation])

  // --- Enviar mensagem ---
  const handleSend = async () => {
    if (!selectedConversation || !input.trim()) return

    setIsLoading(true)
    const newMessage = await apiClient.sendMessage(selectedConversation.id, input)

    setConversationMessages(prev => ({
      ...prev,
      [selectedConversation.id]: [
        ...(prev[selectedConversation.id] || []),
        newMessage
      ]
    }))

    // Atualiza last_message na conversa
    setConversations(prev =>
      prev.map(c =>
        c.id === selectedConversation.id
          ? { ...c, last_message: input, updated_at: newMessage.timestamp }
          : c
      )
    )

    setInput('')
    setIsLoading(false)
  }

  const messages = selectedConversation ? conversationMessages[selectedConversation.id] || [] : []

  if (!currentUser) {
    return (
      <div className="flex h-screen items-center justify-center bg-black/40">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-[#0b0d109c]">
      {/* Lista de conversas */}
      <div className="w-80 border-r border-purple-500/20 bg-black/20 flex flex-col">
        <div className="p-4 border-b border-purple-500/20">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="mb-2 cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h2 className="text-lg font-semibold">Mensagens</h2>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground text-sm">
              Nenhuma conversa
            </div>
          ) : (
            conversations.map(conv => (
              <div
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`w-full p-4 border-b border-purple-500/10 hover:bg-purple-500/10 text-left cursor-pointer ${
                  selectedConversation?.id === conv.id ? 'bg-purple-500/20' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-purple-600">
                      {userType === 'user' ? <Building2 className="w-5 h-5" /> : <User className="w-5 h-5" />}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">
                      {userType === 'user' ? conv.company_name : conv.user_name}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      {conv.last_message}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className='cursor-pointer active:scale-95'
                    onClick={(e) => {
                      e.stopPropagation()
                      setConversations(prev => prev.filter(c => c.id !== conv.id))
                      setConversationMessages(prev => {
                        const copy = { ...prev }
                        delete copy[conv.id]
                        return copy
                      })
                      if (selectedConversation?.id === conv.id) setSelectedConversation(null)
                    }}
                  >
                    ❌
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Área de mensagens */}
      <div className="flex-1 flex flex-col">
        <div className="fixed inset-0 -z-10">
          <img
            src="/chatGalaxy.jpg"
            alt="chat-galaxy"
            className="w-full h-full object-cover opacity-40 scale-x-[-1]"
          />
        </div>
        {selectedConversation ? (
          <>
            <div className="p-4 border-b border-purple-500/20 bg-black/20">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-purple-600">
                    {userType === 'user' ? <Building2 className="w-5 h-5" /> : <User className="w-5 h-5" />}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">
                    {userType === 'user' ? selectedConversation.company_name : selectedConversation.user_name}
                  </h3>
                  <p className="text-sm text-muted-foreground">Online</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(m => {
                const isOwn = m.sender_type === userType
                return (
                  <div key={m.id} className={`flex gap-3 ${isOwn ? 'flex-row-reverse' : 'flex-row'}`}>
                    <Avatar className="flex-shrink-0">
                      <AvatarFallback className={isOwn ? 'bg-blue-600' : 'bg-purple-600'}>
                        {isOwn
                          ? userType === 'user' ? <User className="w-4 h-4" /> : <Building2 className="w-4 h-4" />
                          : userType === 'user' ? <Building2 className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </AvatarFallback>
                    </Avatar>

                    <Card className={`p-3 max-w-[70%] ${isOwn ? 'bg-blue-600 text-white border-blue-600' : 'bg-card'}`}>
                      <p className="text-sm whitespace-pre-wrap">{m.content}</p>
                      <p className={`text-xs mt-1 ${isOwn ? 'text-blue-100' : 'text-muted-foreground'}`}>
                        {new Date(m.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </Card>
                  </div>
                )
              })}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-purple-500/20 bg-black/20">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleSend() } }}
                  placeholder="Digite sua mensagem..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button className='bg-[#B200EB] active:scale-95 cursor-pointer' onClick={handleSend} disabled={!input.trim() || isLoading} size="icon">
                  <Send className="w-4 h-4 text-white" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground">Selecione uma conversa para começar</p>
          </div>
        )}
      </div>
    </div>
  )
}