import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GetStartedPage() {
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
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Language Learning Journey Starts Here
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Take the first step towards fluency with our proven methodology. 
              Choose your path and begin transforming your communication skills today.
            </p>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Free placement test • Expert guidance • Personalized plan
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            How to Get Started in 3 Simple Steps
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Take Your Free Assessment</h3>
                <p className="text-gray-600">
                  Complete our comprehensive placement test to determine your current level 
                  and learning style preferences.
                </p>
                <Button asChild className="w-full">
                  <Link href="/placement-test">Start Assessment</Link>
                </Button>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Get Your Personalized Plan</h3>
                <p className="text-gray-600">
                  Receive customized program recommendations and speak with our language 
                  specialists about your goals.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Begin Your Journey</h3>
                <p className="text-gray-600">
                  Start your personalized language training program and watch your 
                  confidence grow with expert guidance.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/programs">View Programs</Link>
                </Button>
              </div>
            </div>

            {/* Connection Lines (Hidden on mobile) */}
            <div className="hidden md:block relative -mt-10">
              <div className="absolute top-1/2 left-1/4 right-3/4 h-px bg-gray-300 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-3/4 right-1/4 h-px bg-gray-300 transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Options */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Choose Your Starting Point
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Complete Beginner */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Complete Beginner</h3>
                <p className="text-gray-600">
                  Never studied the language before? Perfect! We'll start from the very basics 
                  and build your foundation step by step.
                </p>
                <ul className="text-left space-y-2 text-gray-600 text-sm">
                  <li>• Foundation vocabulary (500+ words)</li>
                  <li>• Basic grammar and sentence structure</li>
                  <li>• Pronunciation and listening skills</li>
                  <li>• Cultural introduction</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/placement-test">Start Here</Link>
                </Button>
              </div>
            </div>

            {/* Some Experience */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-green-200">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold text-gray-900">Some Experience</h3>
                <p className="text-gray-600">
                  Know some basics but struggle with conversation? We'll assess your level 
                  and fill in the gaps for confident communication.
                </p>
                <ul className="text-left space-y-2 text-gray-600 text-sm">
                  <li>• Skill gap assessment</li>
                  <li>• Conversation practice focus</li>
                  <li>• Grammar refinement</li>
                  <li>• Real-world applications</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/placement-test">Take Assessment</Link>
                </Button>
              </div>
            </div>

            {/* Advanced Learner */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Advanced Learner</h3>
                <p className="text-gray-600">
                  Already conversational but want to reach fluency? We'll help you master 
                  nuances, idioms, and professional communication.
                </p>
                <ul className="text-left space-y-2 text-gray-600 text-sm">
                  <li>• Advanced conversation practice</li>
                  <li>• Business/academic language</li>
                  <li>• Cultural nuances and idioms</li>
                  <li>• Certification preparation</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Discuss Goals</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Types Quick Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Learning Formats That Fit Your Life
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Individual Training */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1-on-1 Training</h3>
              </div>
              <p className="text-gray-600">
                Personalized instruction with expert native speakers. Completely customized 
                to your pace, goals, and schedule.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900">Best For:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Busy professionals</li>
                    <li>• Specific goals</li>
                    <li>• Flexible scheduling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Features:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Custom curriculum</li>
                    <li>• Real-time feedback</li>
                    <li>• Progress tracking</li>
                  </ul>
                </div>
              </div>
              <Button asChild className="w-full">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>

            {/* Group Classes */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Small Group Classes</h3>
              </div>
              <p className="text-gray-600">
                Interactive learning with 4-6 students at your level. Benefit from peer 
                interaction while receiving expert instruction.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900">Best For:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Social learners</li>
                    <li>• Cost-conscious</li>
                    <li>• Structured schedule</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Features:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Peer practice</li>
                    <li>• Group activities</li>
                    <li>• Competitive motivation</li>
                  </ul>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Guarantee */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Success Guarantee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="space-y-2">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-blue-100">Student Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">30-Day</div>
                <div className="text-blue-100">Money-Back Guarantee</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-100">Student Support</div>
              </div>
            </div>
            <p className="text-xl text-blue-100">
              We're so confident in our methodology that we guarantee your satisfaction. 
              If you're not seeing progress within 30 days, we'll refund your investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link href="/placement-test">
                  Start Free Assessment
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                How quickly can I start learning?
              </h3>
              <p className="text-gray-600">
                You can begin immediately! Take our free placement test, schedule a consultation 
                within 24 hours, and start your first lesson within a week.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What if I'm not satisfied with my progress?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee. If you're not seeing improvement within 
                the first month, we'll refund your investment completely.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Do you offer flexible scheduling?
              </h3>
              <p className="text-gray-600">
                Absolutely! Our 1-on-1 programs offer complete flexibility, and our group classes 
                have multiple time slots throughout the week including evenings and weekends.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Are your instructors native speakers?
              </h3>
              <p className="text-gray-600">
                Yes, all our instructors are native speakers with teaching certifications and 
                extensive experience in language education and cultural training.
              </p>
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