// Core types for the marketing website

export interface LeadCapture {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  languageInterest: string[]
  currentLevel: 'beginner' | 'intermediate' | 'advanced' | 'unknown'
  goals: string[]
  source: string
  createdAt: Date
}

export interface PlacementTestResult {
  id: string
  leadId: string
  score: number
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
  strengths: string[]
  weaknesses: string[]
  recommendations: string[]
  completedAt: Date
}

export interface Program {
  id: string
  name: string
  description: string
  features: string[]
  price: {
    amount: number
    currency: string
    period: 'one-time' | 'monthly' | 'yearly'
  }
  cta: {
    text: string
    url: string
  }
  level: string[]
  popular?: boolean
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    image: string
  }
  publishedAt: Date
  tags: string[]
  featured?: boolean
  readingTime: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  content: string
  image: string
  rating: number
  program: string
}