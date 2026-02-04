import { Zap, Users, Code, HandshakeIcon, Target, Clock } from 'lucide-react'
import PageHero from '@components/PageHero'

export default function About() {
  const capabilities = [
    'Custom Website Development',
    'Web Application Development',
    'E-Commerce Solutions',
    'Performance Optimization',
    'Ongoing Maintenance & Support',
    'Mobile-Responsive Design',
  ]

  const values = [
    {
      icon: Zap,
      title: 'Performance First',
      description:
        'Every millisecond matters. We optimize for speed without sacrificing functionality.',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description:
        'We build websites that convert visitors into customers and drive real business growth.',
    },
    {
      icon: Code,
      title: 'Quality Code',
      description:
        'Clean, maintainable code built with modern technologies that scale with your business.',
    },
    {
      icon: HandshakeIcon,
      title: 'Partnership Approach',
      description: "We're not just developers—we're partners invested in your success.",
    },
    {
      icon: Users,
      title: 'Client Focused',
      description:
        'Your business goals drive every decision we make throughout the development process.',
    },
    {
      icon: Clock,
      title: 'Reliable Support',
      description: 'Ongoing maintenance and support to keep your website running smoothly.',
    },
  ]

  return (
    <div>
      <PageHero
        title="About Us"
        description="A web development agency helping local businesses establish their online presence."
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                <strong className="font-semibold text-gray-900">TaylorURL</strong> is a web
                development agency based in the Houston area, specializing in building professional
                websites for local businesses.
              </p>
              <p>
                Founded by <strong className="font-semibold text-gray-900">Trenton Taylor</strong>,
                we understand that most local businesses need a professional online presence but
                don't have the budget for enterprise solutions. That's why we offer straightforward
                pricing and reliable service.
              </p>
              <p>
                We believe every business deserves a fast, mobile-friendly website that helps them
                reach more customers. Our approach is simple: build quality websites at affordable
                prices with ongoing support you can count on.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                <span className="logo-wave-dark">What We Do</span>
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {capabilities.map(capability => (
                  <div
                    key={capability}
                    className="flex items-center rounded-lg border border-gray-200 px-4 py-3"
                  >
                    <span className="text-gray-900">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                <span className="logo-wave-dark">Our Values</span>
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {values.map(value => {
                  const Icon = value.icon
                  return (
                    <div key={value.title}>
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                        <Icon className="h-5 w-5 text-gray-900" strokeWidth={1.5} />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Let's <span className="logo-wave-dark">Work Together</span>
            </h2>
            <p className="mb-6 text-gray-600">
              Ready to get your business online? Let's talk about how we can help.
            </p>
            <a
              href="mailto:trenton@taylorurl.com"
              className="inline-block rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
