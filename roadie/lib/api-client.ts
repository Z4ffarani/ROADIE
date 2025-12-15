// db/api-client.ts

import { mockCourses } from '@/db/constellations'

import companiesData from '@/db/companies.json'
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
  role: 'user' | 'company-admin' | 'recruiter'
  companies_applying: string[]
  skills: string[]
  lastActive: string
  certificates: Certificate[]
}

interface FilterOptions {
  constellation?: string
  skills?: string[]
  seniority?: string
}

export interface ChatMessage {
  id: string
  conversation_id: string
  sender_id: string
  sender_type: 'user' | 'company'
  content: string
  timestamp: string
}

export interface Conversation {
  id: string
  user_id: string
  company_id: string
  user_name: string
  company_name: string
  last_message: string
  updated_at: string
}

export interface Certificate {
  id: string
  user_id: string
  course_id: string
  course_title: string
  score: number
  issued_at: string
}

export class ApiClient {
  token: string | null = null

  private candidates = candidatesData
  private companies = companiesData

  private mockChatMessages: Record<string, ChatMessage> = {}
  private mockConversations: Record<string, Conversation> = {}

  constructor() {
    // Inicializa conversas com base nos dados de companies.json
    this.companies.forEach(company => {
      company.conversation.forEach(conv => {
        const candidate = this.candidates.find(c => c.name === conv.candidateName)
        if (!candidate) return
        const convId = `conv-${candidate.id}-${company.id}`
        this.mockConversations[convId] = {
          id: convId,
          user_id: candidate.id,
          company_id: company.id,
          user_name: candidate.name,
          company_name: company.name,
          last_message: conv.initialMessage,
          updated_at: conv.updatedAt
        }
        const msgId = `msg-init-${convId}`
        this.mockChatMessages[msgId] = {
          id: msgId,
          conversation_id: convId,
          sender_id: candidate.id,
          sender_type: 'user',
          content: conv.initialMessage,
          timestamp: conv.updatedAt
        }
      })
    })
  }

  async login(email: string) {
    const user = this.candidates.find(c => c.email === email) || this.companies.find(c => c.name.toLowerCase() === email.split('@')[0])
    if (!user) throw new Error('Usuário não encontrado')

    const data = { token: 'mock-token-123', user }
    localStorage.setItem('roadie_token', data.token)
    localStorage.setItem('roadie_user', JSON.stringify(user))
    this.token = data.token
    return data
  }

  async getCurrentUser() {
    const raw = localStorage.getItem('roadie_user')
    if (!raw) return null
    return JSON.parse(raw)
  }

  logout() {
    this.token = null
    localStorage.removeItem('roadie_token')
    localStorage.removeItem('roadie_user')
  }

  // constellations
  async getConstellations() {
    return Object.values(mockCourses)
  }

  async getConstellationById(id: string) {
    return mockCourses[id] || null
  }

  // courses
  async getCourse(id: string) {
    return mockCourses[id] || null
  }

  async submitQuiz(
    courseId: string,
    data: { user_id: string; score: number; course_title: string }
  ): Promise<Certificate> {

    const cert: Certificate = {
      id: crypto.randomUUID(),
      user_id: data.user_id,
      course_id: courseId,
      course_title: data.course_title,
      score: data.score,
      issued_at: new Date().toISOString()
    }

    const raw = localStorage.getItem("roadie_user")
    if (raw) {
      const userObj = JSON.parse(raw)
      if (!Array.isArray(userObj.certificates)) userObj.certificates = []
      userObj.certificates.push(cert)
      localStorage.setItem("roadie_user", JSON.stringify(userObj))
    }

    return cert
  }

  // conversations
  getFilteredConversations(currentUser: any) {
    const all = Object.values(this.mockConversations)

    if (currentUser.role === 'company-admin') {
      return all.filter(c => c.company_id === currentUser.id)
    }

    const nameLower = currentUser.name?.toLowerCase() || ''
    const emailPrefix = currentUser.email?.split('@')[0].toLowerCase() || ''

    return all.filter(conv => {
      const convUserName = conv.user_name.toLowerCase()
      const convCompanyName = conv.company_name.toLowerCase()
      return convUserName.includes(nameLower) || convCompanyName.includes(emailPrefix)
    })
  }

  getConversationMessages(conversationId: string) {
    return Object.values(this.mockChatMessages).filter(m => m.conversation_id === conversationId)
  }

  async sendMessage(conversationId: string, content: string) {
    const current = await this.getCurrentUser()
    if (!current) return null

    const senderType: 'user' | 'company' =
      current.role === 'company-admin' || current.role === 'recruiter'
        ? 'company'
        : 'user'

    const msg: ChatMessage = {
      id: `msg-${Date.now()}`,
      conversation_id: conversationId,
      sender_id: current.id,
      sender_type: senderType,
      content,
      timestamp: new Date().toISOString()
    }

    // ✅ Armazena no mock da instância
    this.mockChatMessages[msg.id] = msg

    // ✅ Atualiza o last_message da conversa
    const conv = Object.values(this.mockConversations).find(c => c.id === conversationId)
    if (conv) {
      conv.last_message = content
      conv.updated_at = msg.timestamp
    }

    return msg
  }

  async createOrOpenConversation(candidateId: string, candidateName: string) {
    const current = await this.getCurrentUser()
    if (!current) return null

    const existing = Object.values(this.mockConversations).find(c => c.user_id === candidateId && c.company_id === current.id)
    if (existing) return existing

    const convId = `conv-${candidateId}-${current.id}`
    const conv: Conversation = {
      id: convId,
      user_id: candidateId,
      company_id: current.id,
      user_name: candidateName,
      company_name: current.name,
      last_message: `Conversa iniciada com ${candidateName}`,
      updated_at: new Date().toISOString()
    }

    this.mockConversations[convId] = conv

    const welcome: ChatMessage = {
      id: `msg-${Date.now()}`,
      conversation_id: conv.id,
      sender_id: current.id,
      sender_type: 'company',
      content: `Olá ${candidateName}! Vi seu perfil e gostaria de conversar.`,
      timestamp: new Date().toISOString()
    }

    this.mockChatMessages[welcome.id] = welcome
    return conv
  }
}

export const apiClient = new ApiClient()
