import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import PageHero from '@components/PageHero'

export default function Work() {
  const projects = [
    {
      title: 'Company Management Platform',
      category: 'Enterprise Software',
      description:
        'Logistical asset tracker and regional management software supporting multiple regions with comprehensive fleet operations capabilities.',
      tech: ['Modern Web Stack', 'Real-time Database', 'AI Integration'],
      results: [
        'Manages mixers, tractors, trailers, heavy equipment',
        'AI-validated data entry and summaries',
        'Weekly verification systems for asset accuracy',
        'Role-based access across regions and plants',
        'Real-time leaderboards, reports, and notifications',
      ],
    },
    {
      title: 'Racetrack Management System',
      category: 'Local Business Software',
      description:
        'Complete business management solution for a local racetrack with integrated invoicing and payment processing.',
      tech: ['Modern Web Stack', 'Payment Processing', 'Analytics'],
      results: [
        'Secure payment integration',
        'Comprehensive invoicing system',
        'Analytics dashboard for business insights',
        'Staff management portal',
      ],
    },
    {
      title: 'Maritime Industry Website',
      category: 'Corporate Website',
      description:
        'Corporate website for one of the largest barge fleeting companies in the USA, supplier to the largest concrete producer in America.',
      tech: ['Modern Web Stack', 'Animations', 'Cloud Hosting'],
      results: [
        'Professional corporate presence',
        'Mobile-responsive design',
        'Fast page load times',
        'SEO optimized',
      ],
    },
  ]

  return (
    <div>
      <PageHero
        title="My Work"
        description="Recent projects showcasing expertise in modern web development."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-[#38ff6d]/30 hover:shadow-xl hover:shadow-[#38ff6d]/5"
                >
                  <div className="p-8">
                    <div className="mb-4 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      {project.category}
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold text-gray-900">{project.title}</h3>
                    <p className="mb-5 text-gray-600">{project.description}</p>

                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                          <span
                            key={tech}
                            className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {project.results.map(result => (
                        <li key={result} className="flex items-start gap-3 text-sm text-gray-600">
                          <Check
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38ff6d]"
                            strokeWidth={2}
                          />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Want to <span className="logo-wave-dark">See More?</span>
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              These are just a few examples. Let's discuss how I can help with your project.
            </p>
            <Link
              to="/pricing"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#38ff6d] px-8 py-4 font-semibold text-black shadow-lg shadow-[#38ff6d]/25 transition-all duration-300 hover:scale-105 hover:bg-[#2de85e] hover:shadow-xl hover:shadow-[#38ff6d]/30"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
