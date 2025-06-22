import { Button } from "@/components/ui/button"
import Link from "next/link"

const pricingPlans = [
  {
    id: "essential",
    name: "Essential",
    subtitle: "Perfect for Getting Started",
    price: 399,
    period: "month",
    description: "Build your foundation with expert-led small group classes",
    features: [
      "4 small group classes per month (4-6 students)",
      "Native-speaking certified instructors",
      "Comprehensive learning materials included",
      "Access to online resource library",
      "Progress tracking and assessments",
      "Cultural immersion activities",
      "24/7 student support portal",
      "Certificate of completion"
    ],
    limitations: [
      "Group setting (less individual attention)",
      "Fixed schedule (limited flexibility)"
    ],
    popular: false,
    buttonText: "Start Essential",
    buttonVariant: "outline" as const
  },
  {
    id: "professional",
    name: "Professional",
    subtitle: "Most Popular Choice",
    price: 799,
    period: "month", 
    description: "Perfect balance of personalization and collaborative learning",
    features: [
      "2 individual one-on-one sessions per month",
      "2 small group classes per month",
      "Fully personalized curriculum design",
      "Flexible scheduling for individual sessions",
      "All Essential features included",
      "Priority instructor matching",
      "Business/professional language focus available",
      "Free makeup sessions for missed classes",
      "Quarterly progress consultations",
      "Access to premium learning apps"
    ],
    limitations: [],
    popular: true,
    buttonText: "Start Professional",
    buttonVariant: "default" as const
  },
  {
    id: "intensive",
    name: "Intensive",
    subtitle: "Maximum Results",
    price: 1299,
    period: "month",
    description: "Fully personalized instruction for rapid language mastery",
    features: [
      "4 individual one-on-one sessions per month",
      "Completely customized learning plan",
      "Flexible scheduling (evenings/weekends available)",
      "All Professional features included",
      "Dedicated instructor relationship",
      "Specialized focus areas (business, academic, etc.)",
      "Real-time curriculum adjustments",
      "Weekly progress reviews",
      "Priority customer support",
      "Exam preparation available",
      "Cultural mentorship included"
    ],
    limitations: [],
    popular: false,
    buttonText: "Start Intensive", 
    buttonVariant: "outline" as const
  }
]

const addOnServices = [
  {
    name: "Single Trial Session",
    price: 89,
    description: "Try before you commit with a one-hour individual session",
    features: ["1-hour individual session", "Level assessment", "Personalized recommendations"]
  },
  {
    name: "Intensive Immersion Package",
    price: 3499,
    description: "2-week accelerated program for rapid fluency gains",
    features: ["20 hours of instruction", "Cultural activities", "Homestay coordination", "Materials included"]
  },
  {
    name: "Exam Preparation Course",
    price: 1899,
    description: "Specialized preparation for DELE, DELF, TestDaF, JLPT, HSK, and more",
    features: ["12 targeted sessions", "Practice tests", "Exam strategies", "Score guarantee"]
  }
]

const corporateFeatures = [
  "Customized curriculum for your industry",
  "On-site or virtual delivery options", 
  "Team progress tracking and reporting",
  "Flexible scheduling around business hours",
  "Cultural training and business etiquette",
  "ROI measurement and analytics",
  "Dedicated account management",
  "Volume discounts available"
]

export default function PricingPage() {
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
            <Link href="/pricing" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
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
              Transparent Pricing for Every Goal
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Choose the perfect program to achieve your language learning goals. All plans include our 
              proven methodology, expert instructors, and 30-day money-back guarantee.
            </p>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-medium">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              30-Day Money-Back Guarantee • Free Placement Test • No Setup Fees
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Choose Your Learning Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-2xl shadow-lg border-2 p-8 relative ${
                  plan.popular 
                    ? 'border-blue-500 ring-4 ring-blue-50 scale-105 z-10' 
                    : 'border-gray-200 hover:border-gray-300'
                } transition-all duration-200`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-blue-600 font-medium">{plan.subtitle}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant={plan.buttonVariant} 
                  size="lg" 
                  className="w-full mb-4"
                  asChild
                >
                  <Link href="/placement-test">{plan.buttonText}</Link>
                </Button>

                <p className="text-center text-xs text-gray-500">
                  Start with free placement test • Cancel anytime
                </p>
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All plans include access to our proprietary Success Methodology, 24/7 student support, 
              and are backed by our 98% student success rate. Start with our free placement test to 
              get personalized recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Additional Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-3">${service.price}</div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Pricing */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Corporate & Enterprise
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Empower your team with customized language training solutions. 
                    Our corporate programs are designed to meet your organization's specific goals and schedule.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Starting at $2,500/month</h3>
                  <p className="text-blue-800">For teams of 5-10 employees. Custom pricing for larger organizations.</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Enterprise Features:</h4>
                  <ul className="space-y-3">
                    {corporateFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Schedule Demo</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Fortune 500 Trusted</h3>
                  <p className="text-gray-700">Join companies like Google, Microsoft, and Amazon who trust us with their global teams' language development.</p>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-purple-600">250+</div>
                    <div className="text-gray-600">Companies Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Pricing Questions & Answers
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Can I switch plans at any time?
              </h3>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle, 
                and we'll prorate any differences in pricing.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What's included in the 30-day money-back guarantee?
              </h3>
              <p className="text-gray-600">
                If you're not completely satisfied with your progress or experience within the first 30 days, 
                we'll refund your entire first month's payment, no questions asked.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Are there any additional fees or materials to purchase?
              </h3>
              <p className="text-gray-600">
                No hidden fees! All learning materials, digital resources, and platform access are included in your monthly plan. 
                The only optional extras are specialized exam preparation courses.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                How does billing work for missed sessions?
              </h3>
              <p className="text-gray-600">
                Professional and Intensive plans include free makeup sessions if you need to reschedule with 24+ hours notice. 
                Essential plan makeup sessions are subject to instructor availability.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Do you offer payment plans or discounts?
              </h3>
              <p className="text-gray-600">
                Yes! We offer quarterly (5% discount) and annual (10% discount) payment options. 
                Students, seniors, and military personnel receive additional discounts.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What happens after I reach my language goals?
              </h3>
              <p className="text-gray-600">
                Congratulations! You can switch to our maintenance program (50% off) to keep your skills sharp, 
                or start learning a new language with a returning student discount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Your Language Journey?
            </h2>
            <p className="text-xl text-blue-100">
              Take our free placement test to get personalized program recommendations 
              and see exactly how we'll help you achieve fluency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link href="/placement-test">
                  Take Free Placement Test
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
            <p className="text-sm text-blue-200">
              30-day money-back guarantee • No setup fees • Cancel anytime
            </p>
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