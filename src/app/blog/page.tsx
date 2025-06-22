import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "10 Proven Strategies to Accelerate Your Language Learning",
    excerpt: "Discover the scientifically-backed methods that help students achieve fluency 50% faster than traditional approaches.",
    author: "Dr. Sarah Martinez",
    publishedAt: "2024-01-15",
    readingTime: "8 min read",
    category: "Learning Tips",
    featured: true,
    tags: ["methodology", "tips", "fluency"]
  },
  {
    id: 2,
    title: "The Cultural Side of Language Learning: Why Context Matters",
    excerpt: "Understanding cultural nuances isn't just helpful—it's essential for true language mastery and authentic communication.",
    author: "James Chen",
    publishedAt: "2024-01-12",
    readingTime: "6 min read",
    category: "Culture",
    featured: false,
    tags: ["culture", "communication", "immersion"]
  },
  {
    id: 3,
    title: "Business Language Skills That Will Transform Your Career",
    excerpt: "Learn which professional language skills are most valued by employers and how to develop them effectively.",
    author: "Maria Rodriguez",
    publishedAt: "2024-01-10",
    readingTime: "10 min read",
    category: "Business",
    featured: true,
    tags: ["business", "career", "professional"]
  },
  {
    id: 4,
    title: "Breaking Through the Intermediate Plateau",
    excerpt: "Stuck at intermediate level? Here are expert strategies to push through to advanced proficiency.",
    author: "Prof. Michael Thompson",
    publishedAt: "2024-01-08",
    readingTime: "7 min read",
    category: "Learning Tips",
    featured: false,
    tags: ["intermediate", "progress", "breakthrough"]
  },
  {
    id: 5,
    title: "Technology Tools That Actually Help Language Learning",
    excerpt: "A curated review of digital tools and apps that complement traditional language instruction effectively.",
    author: "Lisa Wang",
    publishedAt: "2024-01-05",
    readingTime: "12 min read",
    category: "Technology",
    featured: false,
    tags: ["technology", "apps", "tools"]
  },
  {
    id: 6,
    title: "The Science Behind Memory and Language Acquisition",
    excerpt: "Understanding how your brain processes and retains new languages can revolutionize your learning approach.",
    author: "Dr. Robert Kim",
    publishedAt: "2024-01-03",
    readingTime: "9 min read",
    category: "Science",
    featured: false,
    tags: ["neuroscience", "memory", "learning"]
  }
]

const categories = [
  { name: "All Posts", count: 6 },
  { name: "Learning Tips", count: 2 },
  { name: "Culture", count: 1 },
  { name: "Business", count: 1 },
  { name: "Technology", count: 1 },
  { name: "Science", count: 1 }
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

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
            <Link href="/success-stories" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Success Stories
            </Link>
            <Link href="/blog" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
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
              Language Learning Insights & Tips
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Expert advice, proven strategies, and inspiring stories to accelerate your 
              language learning journey. Written by our team of linguistic experts and successful students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/placement-test">Start Learning Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#newsletter">Subscribe to Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Featured Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post, index) => (
              <article key={post.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${index === 0 ? 'md:col-span-2' : ''}`}>
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                      FEATURED
                    </span>
                    <span className="text-gray-500 text-sm">{post.readingTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-xs font-bold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-sm sticky top-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-between"
                      >
                        <span className="text-gray-700">{category.name}</span>
                        <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {['fluency', 'business', 'culture', 'tips', 'methodology', 'career'].map((tag) => (
                        <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
                
                <div className="space-y-8">
                  {regularPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                              {post.category}
                            </span>
                            <span className="text-gray-500 text-sm">{post.readingTime}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="text-gray-600 mb-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-gray-600 text-xs font-bold">
                                  {post.author.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <span className="text-sm text-gray-600">{post.author}</span>
                              <span className="text-gray-400">•</span>
                              <span className="text-sm text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</span>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/blog/${post.id}`}>Read More →</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-20 bg-blue-600">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Never Miss a Language Learning Tip
            </h2>
            <p className="text-xl text-blue-100">
              Get our latest insights, expert advice, and exclusive content delivered 
              straight to your inbox. Join 5,000+ language learners who rely on our weekly updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              />
              <Button size="lg" variant="secondary" className="px-8">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-blue-200">
              No spam, ever. Unsubscribe anytime with one click.
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