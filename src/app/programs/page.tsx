import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProgramsPage() {
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
            <Link href="/programs" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Language Training Programs
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose from our comprehensive range of language programs designed to meet your specific 
              goals, schedule, and learning style. All programs include personalized assessment and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Find Your Perfect Program
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Individual Programs */}
            <div className="relative bg-white border-2 border-blue-200 rounded-xl p-8 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              {/* Most Popular Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Individual Training</h3>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-blue-600 font-semibold text-lg">Starting at $89/hour</p>
                </div>
                <p className="text-gray-600">
                  One-on-one instruction tailored to your specific needs, schedule, and learning pace.
                </p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Fully personalized curriculum</li>
                  <li>• Flexible scheduling</li>
                  <li>• Expert native-speaking instructors</li>
                  <li>• Real-time progress tracking</li>
                  <li>• Cultural immersion components</li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Group Programs */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-8 hover:border-green-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Small Group Classes</h3>
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <p className="text-green-600 font-semibold text-lg">Starting at $35/class</p>
                </div>
                <p className="text-gray-600">
                  Interactive group learning with 4-6 students at similar proficiency levels.
                </p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Level-matched participants</li>
                  <li>• Collaborative learning environment</li>
                  <li>• Structured curriculum progression</li>
                  <li>• Peer practice opportunities</li>
                  <li>• Cost-effective option</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Corporate Programs */}
            <div className="bg-white border-2 border-purple-200 rounded-xl p-8 hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Corporate Training</h3>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-purple-600 font-semibold text-lg">Custom Pricing</p>
                </div>
                <p className="text-gray-600">
                  Customized language solutions for businesses and organizations.
                </p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Industry-specific vocabulary</li>
                  <li>• On-site or virtual delivery</li>
                  <li>• Business communication focus</li>
                  <li>• Team building through language</li>
                  <li>• ROI tracking and reporting</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Languages */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Available Languages
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: "Spanish", flag: "🇪🇸", students: "2,500+" },
              { name: "French", flag: "🇫🇷", students: "1,800+" },
              { name: "German", flag: "🇩🇪", students: "1,200+" },
              { name: "Italian", flag: "🇮🇹", students: "900+" },
              { name: "Portuguese", flag: "🇵🇹", students: "700+" },
              { name: "Mandarin", flag: "🇨🇳", students: "1,100+" },
              { name: "Japanese", flag: "🇯🇵", students: "800+" },
              { name: "Korean", flag: "🇰🇷", students: "600+" },
              { name: "Arabic", flag: "🇸🇦", students: "500+" },
              { name: "Russian", flag: "🇷🇺", students: "400+" },
              { name: "Dutch", flag: "🇳🇱", students: "300+" },
              { name: "Swedish", flag: "🇸🇪", students: "250+" },
              { name: "Norwegian", flag: "🇳🇴", students: "200+" },
              { name: "Polish", flag: "🇵🇱", students: "300+" },
              { name: "Turkish", flag: "🇹🇷", students: "200+" }
            ].map((language) => (
              <div key={language.name} className="bg-white rounded-lg p-4 md:p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <div className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{language.flag}</div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{language.name}</h3>
                <p className="text-xs md:text-sm text-gray-600">{language.students} students</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Specialized Training Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Business Language */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Business Language Training</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Master professional communication in your target language with industry-specific 
                vocabulary, presentation skills, and business etiquette training.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Meeting facilitation and participation</li>
                <li>• Email and written communication</li>
                <li>• Presentation and public speaking</li>
                <li>• Negotiation and sales conversations</li>
                <li>• Industry-specific terminology</li>
              </ul>
            </div>

            {/* Intensive Immersion */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Intensive Immersion</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Accelerated programs for rapid language acquisition with full cultural immersion 
                components and intensive practice sessions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 20+ hours of instruction per week</li>
                <li>• Cultural activities and excursions</li>
                <li>• Homestay or immersion housing options</li>
                <li>• Real-world application projects</li>
                <li>• Certification preparation</li>
              </ul>
            </div>

            {/* Exam Preparation */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Exam Preparation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Targeted preparation for official language proficiency exams including DELE, DELF, 
                TestDaF, JLPT, HSK, and other international certifications.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Exam-specific strategies and techniques</li>
                <li>• Practice tests and mock examinations</li>
                <li>• Score improvement guarantees</li>
                <li>• Test anxiety management</li>
                <li>• Post-exam career guidance</li>
              </ul>
            </div>

            {/* Travel & Culture */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Travel & Cultural Immersion</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Practical language skills for travelers, expatriates, and cultural enthusiasts 
                looking to connect authentically with local communities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Survival phrases and emergency communication</li>
                <li>• Cultural etiquette and customs</li>
                <li>• Navigation and transportation vocabulary</li>
                <li>• Food, shopping, and accommodation</li>
                <li>• Local traditions and celebrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            What's Included in Every Program
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Placement Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation to determine your starting level and learning style
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Expert Instructors</h3>
              <p className="text-gray-600 text-sm">
                Native speakers with teaching certifications and cultural expertise
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Learning Materials</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive textbooks, digital resources, and multimedia content
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Progress Tracking</h3>
              <p className="text-gray-600 text-sm">
                Regular assessments and detailed progress reports to track your advancement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Find Your Perfect Language Program
            </h2>
            <p className="text-xl text-blue-100">
              Take our free placement test to discover which program is right for you, 
              or speak with one of our language specialists for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link href="/placement-test">
                  Take Free Assessment
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600" 
                asChild
              >
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600" 
                asChild
              >
                <Link href="/contact">
                  Speak with Specialist
                </Link>
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