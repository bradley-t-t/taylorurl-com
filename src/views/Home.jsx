import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  ArrowRight,
  Zap,
  Code,
  TrendingUp,
  Search,
  Clock,
  DollarSign,
  Users,
  Smartphone,
  Shield,
  MessageSquare,
  Check,
  Star,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = e => {
    e.preventDefault()
    window.location.href = `mailto:trenton@taylorurl.com?subject=Newsletter Signup&body=Please add me to your newsletter: ${email}`
    setEmail('')
  }

  return (
    <div className="pt-20">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              Helping local businesses get online
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Your Business Deserves
              <br />
              <span className="text-primary-600">A Professional Website</span>
            </h1>

            <p className="mb-12 max-w-2xl text-xl leading-relaxed text-gray-600">
              Stop losing customers to competitors with better websites. Get a fast, mobile-friendly
              site that turns visitors into paying customers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-gray-800"
              >
                Get Your Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-900 px-8 py-4 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-50"
              >
                See Pricing
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                No contracts
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                Free consultation
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Is Your Business Invisible Online?
            </h2>
            <p className="text-lg text-gray-600">
              97% of consumers search online for local businesses. Without a website, you're
              invisible to potential customers actively looking for your services.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Local Businesses Need a Website
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A professional website is no longer optional. It's how customers find you, trust you,
              and choose you over the competition.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Get Found on Google',
                desc: 'Show up when customers search for services like yours in your area. No website means no visibility.',
                icon: Search,
              },
              {
                title: 'Open 24/7',
                desc: 'Your website works while you sleep. Customers can learn about you, see your work, and contact you anytime.',
                icon: Clock,
              },
              {
                title: 'Build Trust Instantly',
                desc: "75% of consumers judge a business's credibility based on their website design.",
                icon: Shield,
              },
              {
                title: 'Reach More Customers',
                desc: 'Expand beyond word-of-mouth. A website lets you reach customers across your entire service area.',
                icon: Users,
              },
              {
                title: 'Mobile-First Design',
                desc: '60% of searches happen on phones. Your site will look perfect on every device.',
                icon: Smartphone,
              },
              {
                title: 'Affordable Investment',
                desc: 'For less than a cup of coffee per day, get a professional online presence that pays for itself.',
                icon: DollarSign,
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-gray-200 bg-white p-8"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <Icon className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="leading-relaxed text-gray-600">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-900 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              No hidden fees. No long-term contracts. Just a professional website for your business
              at a price you can afford.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-8">
              <div className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-400">
                One-Time
              </div>
              <div className="mb-4 text-5xl font-bold">$500+</div>
              <p className="mb-6 text-gray-400">Setup fee based on your needs</p>
              <ul className="space-y-3">
                {[
                  'Custom design',
                  'Mobile responsive',
                  'SEO optimized',
                  'Contact forms',
                  'Fast hosting',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Check className="h-5 w-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8">
              <div className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-400">
                Monthly
              </div>
              <div className="mb-4 text-5xl font-bold">$49.99</div>
              <p className="mb-6 text-gray-400">Everything to keep your site running</p>
              <ul className="space-y-3">
                {[
                  'Hosting included',
                  'Security updates',
                  'Content changes',
                  'Technical support',
                  'Monthly backups',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Check className="h-5 w-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-100"
            >
              View Full Pricing Details
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Getting your business online is easier than you think. Here's the simple process.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Free Consultation',
                  desc: "Tell me about your business and what you need. I'll give you honest advice and a clear quote.",
                },
                {
                  step: '2',
                  title: 'Design & Build',
                  desc: "I create your custom website. You'll see progress and can request changes along the way.",
                },
                {
                  step: '3',
                  title: 'Launch & Grow',
                  desc: 'Your site goes live. I handle all the technical stuff so you can focus on your business.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-900 text-2xl font-bold text-gray-900">
                    {item.step}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              What Business Owners Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  'Our new website has brought in more customers in 3 months than we got all last year from our old one.',
                name: 'Mike R.',
                business: 'Local Plumbing Co.',
                stars: 5,
              },
              {
                quote:
                  'I was nervous about the tech stuff, but Trenton made it so easy. Now I actually have customers finding me on Google!',
                name: 'Sarah T.',
                business: 'Sweet Treats Bakery',
                stars: 5,
              },
              {
                quote:
                  "Best investment I've made for my business. The monthly fee is nothing compared to what I'd pay someone else.",
                name: 'James K.',
                business: 'JK Landscaping',
                stars: 5,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-8"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(item.stars)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-gray-700">"{item.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.business}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                q: 'How long does it take to build my website?',
                a: "Most websites are completed within 1-2 weeks. Complex projects may take 3-4 weeks. I'll give you a timeline during our consultation.",
              },
              {
                q: 'Do I need to provide content and images?',
                a: "It helps if you have photos of your work, but I can guide you on what's needed. I'll write the content based on information you provide about your business.",
              },
              {
                q: 'What if I need changes after the site is live?',
                a: "Content updates are included in your monthly fee. Need to add a new service or change your hours? Just let me know and I'll update it.",
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. There are no long-term contracts. If you decide to cancel, just give 30 days notice. Your site files are always yours.',
              },
              {
                q: 'Will my site work on phones?',
                a: 'Absolutely. Every site I build is mobile-responsive, meaning it looks great and works perfectly on phones, tablets, and computers.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-gray-900">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">Have more questions?</p>
            <Link to="/contact" className="font-medium text-primary-600 hover:underline">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 text-center md:p-12">
            <MessageSquare className="mx-auto mb-6 h-12 w-12 text-gray-400" />
            <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
              Get Tips for Your Local Business
            </h2>
            <p className="mb-8 text-gray-600">
              Subscribe to get free tips on marketing your local business online. No spam, just
              practical advice you can use.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
              <button
                type="submit"
                className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">Free. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-900 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get More Customers?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
            Stop letting competitors with better websites steal your customers. Let's build
            something that works for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-100"
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              Call Me
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
