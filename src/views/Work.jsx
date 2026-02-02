import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import PageHero from '@components/PageHero'

export default function Work() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack Development',
      description:
        'Modern online store with real-time inventory management and seamless checkout experience.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      results: ['40% increase in conversions', '99.9% uptime', 'Sub-2s page loads'],
    },
    {
      title: 'SaaS Dashboard',
      category: 'React Application',
      description: 'Complex data visualization dashboard for B2B analytics platform.',
      tech: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
      results: ['Used by 10K+ users', 'Highly rated UX', 'Real-time updates'],
    },
    {
      title: 'Healthcare Portal',
      category: 'Accessible Web App',
      description: 'HIPAA-compliant patient portal with accessibility features.',
      tech: ['React', 'ARIA', 'WCAG 2.1', 'Firebase'],
      results: ['WCAG AA compliant', 'HIPAA certified', '95% user satisfaction'],
    },
    {
      title: 'Marketing Website',
      category: 'Website Design & Dev',
      description: 'High-converting marketing site with custom animations and CMS integration.',
      tech: ['React', 'Framer Motion', 'Contentful', 'Vercel'],
      results: ['50% faster than previous', 'SEO score: 100', '2x lead generation'],
    },
    {
      title: 'Mobile-First App',
      category: 'Progressive Web App',
      description: 'PWA with offline functionality and push notifications.',
      tech: ['React', 'Service Workers', 'IndexedDB', 'PWA'],
      results: ['Works offline', 'App-like experience', '90+ Lighthouse score'],
    },
    {
      title: 'Performance Overhaul',
      category: 'Optimization Project',
      description: 'Complete performance optimization for high-traffic e-commerce site.',
      tech: ['Optimization', 'CDN', 'Caching', 'Code Splitting'],
      results: ['3s to 0.8s load time', '60% bandwidth reduction', '25% more sales'],
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
