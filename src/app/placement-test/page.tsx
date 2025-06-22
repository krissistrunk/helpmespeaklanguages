"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const questions = [
  {
    id: 1,
    question: "What is your primary goal for learning a new language?",
    type: "single",
    options: [
      "Career advancement and business communication",
      "Travel and cultural exploration",
      "Academic studies or certification",
      "Personal enrichment and hobby",
      "Communicating with family/friends"
    ]
  },
  {
    id: 2,
    question: "How much time can you dedicate to language learning per week?",
    type: "single",
    options: [
      "Less than 2 hours",
      "2-5 hours",
      "5-10 hours",
      "10-15 hours",
      "More than 15 hours"
    ]
  },
  {
    id: 3,
    question: "What is your preferred learning style? (Select all that apply)",
    type: "multiple",
    options: [
      "Visual learning (reading, charts, images)",
      "Auditory learning (listening, speaking)",
      "Hands-on practice and interaction",
      "Self-paced online study",
      "Group learning and discussion"
    ]
  },
  {
    id: 4,
    question: "Which language are you most interested in learning?",
    type: "single",
    options: [
      "Spanish",
      "French",
      "German",
      "Italian",
      "Mandarin Chinese",
      "Japanese",
      "Portuguese",
      "Other (we'll contact you for details)"
    ]
  },
  {
    id: 5,
    question: "What is your current level in your target language?",
    type: "single",
    options: [
      "Complete beginner (no prior knowledge)",
      "False beginner (some exposure, limited skills)",
      "Elementary (basic phrases and vocabulary)",
      "Intermediate (can hold simple conversations)",
      "Advanced (fluent but need refinement)"
    ]
  }
]

export default function PlacementTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string[] }>({})
  const [showResults, setShowResults] = useState(false)
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  })

  const handleAnswer = (questionId: number, answer: string, isMultiple: boolean = false) => {
    if (isMultiple) {
      const currentAnswers = answers[questionId] || []
      const newAnswers = currentAnswers.includes(answer)
        ? currentAnswers.filter(a => a !== answer)
        : [...currentAnswers, answer]
      setAnswers({ ...answers, [questionId]: newAnswers })
    } else {
      setAnswers({ ...answers, [questionId]: [answer] })
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const isAnswered = () => {
    return answers[questions[currentQuestion].id] && answers[questions[currentQuestion].id].length > 0
  }

  const submitTest = () => {
    // In a real application, this would submit to your backend
    console.log("Test submitted:", { answers, contactInfo })
    alert("Thank you! We'll send your personalized learning recommendations to your email within 24 hours.")
  }

  if (showResults) {
    return (
      <main className="flex min-h-screen flex-col">
        {/* Navigation Header */}
        <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-xl font-bold text-blue-600">Help Me Speak Languages</Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/programs" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Programs
              </Link>
              <Link href="/pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Pricing
              </Link>
              <Link href="/success-stories" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Success Stories
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/placement-test">Free Test</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Results Section */}
        <section className="flex-1 bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center space-y-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900">
                  Assessment Complete!
                </h1>
                
                <p className="text-lg text-gray-600">
                  Thank you for completing our placement assessment. Based on your responses, 
                  we'll create personalized learning recommendations just for you.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Get Your Personalized Results
                  </h3>
                  <p className="text-gray-600">
                    Enter your contact information to receive your detailed assessment results 
                    and customized program recommendations.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={contactInfo.firstName}
                      onChange={(e) => setContactInfo({...contactInfo, firstName: e.target.value})}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={contactInfo.lastName}
                      onChange={(e) => setContactInfo({...contactInfo, lastName: e.target.value})}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full text-lg py-6"
                  onClick={submitTest}
                  disabled={!contactInfo.firstName || !contactInfo.lastName || !contactInfo.email}
                >
                  Get My Personalized Results
                </Button>

                <p className="text-sm text-gray-500">
                  We'll send your results within 24 hours. No spam, we promise!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-xl font-bold text-blue-600">Help Me Speak Languages</Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/programs" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Programs
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="/success-stories" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Success Stories
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/placement-test">Free Test</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Free Language Placement Assessment
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover your current level and get personalized program recommendations 
              with our comprehensive 5-minute assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section className="flex-1 py-12 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(
                      questions[currentQuestion].id, 
                      option, 
                      questions[currentQuestion].type === "multiple"
                    )}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                      answers[questions[currentQuestion].id]?.includes(option)
                        ? 'border-blue-500 bg-blue-50 text-blue-900'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        answers[questions[currentQuestion].id]?.includes(option)
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {answers[questions[currentQuestion].id]?.includes(option) && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <span className="text-gray-900">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {questions[currentQuestion].type === "multiple" && (
                <p className="text-sm text-gray-500 mt-4">
                  * You can select multiple options for this question
                </p>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Previous</span>
              </Button>

              <Button
                onClick={nextQuestion}
                disabled={!isAnswered()}
                className="flex items-center space-x-2"
              >
                <span>{currentQuestion === questions.length - 1 ? 'Complete Assessment' : 'Next Question'}</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Help Me Speak Languages</h3>
              <p className="text-gray-400">
                Transforming language learning through expert instruction and personalized methodology.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/programs" className="hover:text-white transition-colors">All Languages</Link></li>
                <li><Link href="/programs/business" className="hover:text-white transition-colors">Business Language</Link></li>
                <li><Link href="/programs/intensive" className="hover:text-white transition-colors">Intensive Courses</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/placement-test" className="hover:text-white transition-colors">Free Assessment</Link></li>
                <li><Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Help Me Speak Languages. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}