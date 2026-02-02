import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Palette, Code2, Zap, Eye, Wrench, Lightbulb, ArrowRight, Check } from 'lucide-react'
import PageHero from '@components/PageHero'

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Website Design & Development',
      description:
        'Custom websites built from scratch with modern technologies and best practices.',
      features: [
        'Responsive design for all devices',
        'SEO-optimized structure',
        'Fast page load times',
        'Custom animations and interactions',
        'Content management integration',
      ],
    },
    {
      icon: Code2,
      title: 'React Application Development',
      description: 'Complex web applications built with React and modern JavaScript frameworks.',
      features: [
        'Component-based architecture',
        'State management solutions',
        'API integration',
        'Real-time features',
        'Progressive Web Apps (PWA)',
      ],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Make your existing website faster and improve user experience.',
      features: [
        'Core Web Vitals improvement',
        'Image and asset optimization',
        'Code splitting and lazy loading',
        'Caching strategies',
        'Performance monitoring setup',
      ],
    },
    {
      icon: Eye,
      title: 'Accessibility Implementation',
      description: 'Ensure your website is usable by everyone, including people with disabilities.',
      features: [
        'WCAG 2.1 compliance',
        'Keyboard navigation',
        'Screen reader optimization',
        'Color contrast improvements',
        'Accessibility documentation',
      ],
    },
    {
      icon: Wrench,
      title: 'Ongoing Maintenance & Support',
      description: 'Keep your website running smoothly with continuous support.',
      features: [
        'Regular updates and patches',
        'Bug fixes and troubleshooting',
        'Content updates',
        'Performance monitoring',
        'Security updates',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Technical Consulting',
      description: 'Expert guidance on technology choices and project planning.',
      features: [
        'Technology stack recommendations',
        'Architecture planning',
        'Code reviews',
        'Team training',
        'Best practices implementation',
      ],
    },
  ]

  return (
    <div>
      <PageHero
        title="Services"
        description="Comprehensive web development services with transparent, straightforward pricing."
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-2">
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group border-b border-gray-100 pb-12 last:border-0"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-900">
                      <Icon
                        className="h-5 w-5 text-gray-900 transition-colors group-hover:text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="mb-4 text-gray-600">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400"
                            strokeWidth={2}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Simple, <span className="logo-wave-dark">Transparent Pricing</span>
            </h2>
            <p className="mb-6 text-gray-600">
              One upfront fee starting at $500 + $49.99/month for ongoing support and maintenance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800"
              >
                View Pricing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
