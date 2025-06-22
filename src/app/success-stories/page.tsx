import { Button } from "@/components/ui/button"
import Link from "next/link"

const successStories = [
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "Marketing Manager",
    company: "Global Tech Solutions",
    language: "English",
    image: "/testimonials/maria.jpg", // Placeholder - would use actual images
    story: "I needed to improve my English for international business meetings. The personalized approach helped me gain confidence in just 3 months. Now I lead global presentations with ease.",
    result: "Advanced from intermediate to fluent business English",
    program: "Business English Intensive",
    rating: 5,
    timeframe: "3 months"
  },
  {
    id: 2,
    name: "James Chen",
    role: "Software Engineer", 
    company: "Startup Founder",
    language: "Mandarin",
    image: "/testimonials/james.jpg",
    story: "As a startup founder expanding to Chinese markets, I needed to learn Mandarin quickly. The cultural immersion components were invaluable for understanding business etiquette.",
    result: "HSK Level 4 certification achieved",
    program: "Mandarin Business & Culture",
    rating: 5,
    timeframe: "6 months"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Travel Blogger",
    company: "Freelance",
    language: "Spanish",
    image: "/testimonials/sophie.jpg",
    story: "I wanted to connect authentically with local communities during my travels. The focus on practical conversation skills transformed my travel experiences in Latin America.",
    result: "Fluent conversational Spanish",
    program: "Travel & Cultural Spanish",
    rating: 5,
    timeframe: "4 months"
  },
  {
    id: 4,
    name: "Dr. Michael Thompson",
    role: "Research Scientist",
    company: "University Medical Center",
    language: "German",
    image: "/testimonials/michael.jpg",
    story: "Needed German for a research collaboration in Berlin. The academic focus and technical vocabulary training were perfect for my field. Exceeded my expectations completely.",
    result: "C1 level certification for academic purposes",
    program: "Academic German",
    rating: 5,
    timeframe: "8 months"
  },
  {
    id: 5,
    name: "Anna Kowalski",
    role: "HR Director",
    company: "Multinational Corporation",
    language: "French",
    image: "/testimonials/anna.jpg",
    story: "Managing teams across France required better French skills. The business communication focus and cultural training helped me build stronger relationships with my team.",
    result: "Promoted to Regional Director",
    program: "French for Management",
    rating: 5,
    timeframe: "5 months"
  },
  {
    id: 6,
    name: "Roberto Silva",
    role: "Restaurant Owner",
    company: "Silva's Authentic Cuisine",
    language: "English",
    image: "/testimonials/roberto.jpg",
    story: "Wanted to better serve English-speaking customers and expand my business. The practical conversation training helped me connect with customers and grow my restaurant.",
    result: "30% increase in customer satisfaction",
    program: "English for Hospitality",
    rating: 5,
    timeframe: "4 months"
  }
]

const stats = [
  { number: "10,000+", label: "Students Taught" },
  { number: "98%", label: "Success Rate" },
  { number: "15+", label: "Languages Offered" },
  { number: "50+", label: "Countries Served" }
]

export default function SuccessStoriesPage() {
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
            <Link href="/success-stories" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
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
              Real Students, Real Results
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how our personalized language training has transformed careers, 
              enabled travel adventures, and opened new opportunities for thousands of students worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Student Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                {/* Student Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.role}</p>
                    <p className="text-gray-500 text-sm">{story.company}</p>
                  </div>
                </div>

                {/* Language & Program */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {story.language}
                  </span>
                  <span className="text-gray-500 text-sm">{story.timeframe}</span>
                </div>

                {/* Story */}
                <blockquote className="text-gray-700 mb-6 italic">
                  "{story.story}"
                </blockquote>

                {/* Result */}
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                  <h4 className="font-semibold text-green-800 mb-1">Result:</h4>
                  <p className="text-green-700 text-sm">{story.result}</p>
                </div>

                {/* Program & Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">{story.program}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Video Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Placeholder 1 */}
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.6 5.2a1 1 0 011.2 0l5 3.75a1 1 0 010 1.6l-5 3.75a1 1 0 01-1.6-.8V6a1 1 0 01.4-.8z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">Maria's Journey to Fluency</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">From Beginner to Business Leader</h3>
                <p className="text-gray-600 text-sm">
                  Watch Maria share how mastering English transformed her career prospects.
                </p>
              </div>
            </div>

            {/* Video Placeholder 2 */}
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.6 5.2a1 1 0 011.2 0l5 3.75a1 1 0 010 1.6l-5 3.75a1 1 0 01-1.6-.8V6a1 1 0 01.4-.8z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">James' Mandarin Success</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Breaking Into Chinese Markets</h3>
                <p className="text-gray-600 text-sm">
                  Hear how James used Mandarin skills to expand his startup internationally.
                </p>
              </div>
            </div>

            {/* Video Placeholder 3 */}
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-violet-200 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.6 5.2a1 1 0 011.2 0l5 3.75a1 1 0 010 1.6l-5 3.75a1 1 0 01-1.6-.8V6a1 1 0 01.4-.8z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">Sophie's Travel Adventures</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Connecting Through Language</h3>
                <p className="text-gray-600 text-sm">
                  Discover how Spanish skills enhanced Sophie's travel blogging career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Success */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Success Across Industries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Technology</h3>
              <p className="text-gray-600">
                Software engineers, product managers, and tech entrepreneurs expanding globally
              </p>
              <div className="text-2xl font-bold text-blue-600">1,200+</div>
              <div className="text-sm text-gray-500">Tech professionals trained</div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Healthcare</h3>
              <p className="text-gray-600">
                Doctors, nurses, and medical professionals serving diverse communities
              </p>
              <div className="text-2xl font-bold text-green-600">800+</div>
              <div className="text-sm text-gray-500">Healthcare workers trained</div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Business</h3>
              <p className="text-gray-600">
                Executives, managers, and consultants working in international markets
              </p>
              <div className="text-2xl font-bold text-purple-600">2,500+</div>
              <div className="text-sm text-gray-500">Business professionals trained</div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Education</h3>
              <p className="text-gray-600">
                Teachers, researchers, and academics pursuing international opportunities
              </p>
              <div className="text-2xl font-bold text-orange-600">600+</div>
              <div className="text-sm text-gray-500">Educators trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Timeline */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Typical Student Progress Timeline
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h3 className="text-xl font-bold text-gray-900">Week 1-2</h3>
                    <p className="text-gray-600">Initial assessment and personalized curriculum design</p>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full relative z-10"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 font-medium">Foundation Building</p>
                      <p className="text-blue-600 text-sm">Core vocabulary and basic sentence structures</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800 font-medium">Confidence Building</p>
                      <p className="text-green-600 text-sm">First conversations and practical applications</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-green-600 rounded-full relative z-10"></div>
                  <div className="flex-1 pl-8">
                    <h3 className="text-xl font-bold text-gray-900">Month 1</h3>
                    <p className="text-gray-600">Basic conversational skills and cultural understanding</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <h3 className="text-xl font-bold text-gray-900">Month 2-3</h3>
                    <p className="text-gray-600">Intermediate proficiency and real-world application</p>
                  </div>
                  <div className="w-8 h-8 bg-purple-600 rounded-full relative z-10"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-purple-800 font-medium">Skill Expansion</p>
                      <p className="text-purple-600 text-sm">Complex conversations and professional contexts</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-orange-800 font-medium">Mastery & Certification</p>
                      <p className="text-orange-600 text-sm">Advanced fluency and specialized applications</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-orange-600 rounded-full relative z-10"></div>
                  <div className="flex-1 pl-8">
                    <h3 className="text-xl font-bold text-gray-900">Month 4-6</h3>
                    <p className="text-gray-600">Advanced fluency and goal achievement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of students who have achieved their language learning goals. 
              Start with our free placement test to discover your personalized path to fluency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link href="/placement-test">
                  Start Your Journey
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600" 
                asChild
              >
                <Link href="/contact">
                  Speak with Expert
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