import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-xl font-bold text-blue-600">Help Me Speak Languages</Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
              About
            </Link>
            <Link href="/programs" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Programs
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
              Transforming Lives Through Language
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over a decade, we've helped thousands of students master new languages 
              with our proven methodology and personalized approach to language learning.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To break down language barriers and connect people across cultures by providing 
                  world-class language training that is accessible, effective, and engaging. We believe 
                  that language learning should be a transformative journey that opens doors to new 
                  opportunities and deeper cultural understanding.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the global leader in personalized language education, empowering individuals 
                  and organizations to communicate confidently across linguistic and cultural boundaries. 
                  We envision a world where language is never a barrier to success, connection, or understanding.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Proven Success</h3>
                <p className="text-gray-700">98% of our students achieve their language goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Story</h2>
            
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <p>
                Help Me Speak Languages was founded with a simple yet powerful belief: that anyone can 
                master a new language with the right methodology, expert guidance, and personalized approach. 
                Our journey began when our founder recognized the gap between traditional language education 
                and what students actually needed to become confident, fluent speakers.
              </p>
              
              <p>
                Unlike conventional language schools that rely on one-size-fits-all curricula, we developed 
                a revolutionary approach that begins with understanding each student's unique learning style, 
                goals, and current proficiency level. Our comprehensive placement testing system ensures 
                that every student starts their journey at exactly the right point.
              </p>
              
              <p>
                Today, we've helped over 10,000 students across 15+ languages achieve their communication 
                goals. From business professionals preparing for international assignments to travelers 
                seeking cultural immersion, our students consistently achieve remarkable results through 
                our proven Success Methodology.
              </p>
              
              <p>
                What sets us apart is our commitment to real-world application. Every lesson, exercise, 
                and interaction is designed to build practical communication skills that students can 
                use immediately in their personal and professional lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Personalization</h3>
              <p className="text-gray-600">
                Every student is unique. We tailor our approach to match individual learning styles, 
                goals, and pace for maximum effectiveness.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from instructor certification 
                to curriculum development and student support.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our methods, incorporating the latest research in language 
                acquisition and educational technology.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Support</h3>
              <p className="text-gray-600">
                Learning a language is a journey. We provide comprehensive support every step of 
                the way to ensure student success.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Results</h3>
              <p className="text-gray-600">
                We're committed to measurable outcomes. Our success is measured by our students' 
                ability to confidently communicate in their target language.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Cultural Bridge</h3>
              <p className="text-gray-600">
                Language learning is about more than words. We help students understand and 
                appreciate the cultures behind the languages they're learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Success Methodology</h2>
            <p className="text-xl text-gray-600 mb-12">
              Our proven 4-stage approach ensures every student achieves their language learning goals
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Assess</h3>
                <p className="text-gray-600 text-sm">Comprehensive placement testing to understand your current level and learning style</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Personalize</h3>
                <p className="text-gray-600 text-sm">Custom learning path designed specifically for your goals and preferences</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Practice</h3>
                <p className="text-gray-600 text-sm">Immersive learning with real-world scenarios and expert instructor guidance</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Master</h3>
                <p className="text-gray-600 text-sm">Achieve fluency through continuous practice and real-world application</p>
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
              Ready to Start Your Language Journey?
            </h2>
            <p className="text-xl text-blue-100">
              Discover your current level and get personalized recommendations with our free placement test.
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
                <Link href="/contact">
                  Contact Us
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