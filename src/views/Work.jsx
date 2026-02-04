import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
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

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map(project => (
                <div key={project.title} className="rounded-lg border border-gray-200 p-6">
                  <div className="mb-3 text-sm font-medium text-gray-500">{project.category}</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mb-4 text-gray-600">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-1">
                    {project.results.map(result => (
                      <li key={result} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400"
                          strokeWidth={2}
                        />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Want to <span className="logo-wave-dark">See More?</span>
            </h2>
            <p className="mb-6 text-gray-600">
              These are just a few examples. Let's discuss how I can help with your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
