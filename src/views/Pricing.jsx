import { Link } from 'react-router-dom'
import { DollarSign, RefreshCw, Check, ArrowRight } from 'lucide-react'
import PageHero from '@components/PageHero'

export default function Pricing() {
  const additionalCosts = [
    {
      name: 'External API Services',
      example: 'Payment processing, email services, etc.',
      cost: 'Variable',
    },
    { name: 'AI Token Usage', example: 'ChatGPT, image generation, etc.', cost: 'Usage-based' },
    { name: 'Advertising Costs', example: 'Google Ads, Facebook Ads, etc.', cost: 'As spent' },
    {
      name: 'Premium Plugins/Tools',
      example: 'Advanced analytics, specialized libraries',
      cost: 'Variable',
    },
    { name: 'Cloud Storage', example: 'Additional file storage, backups', cost: 'Usage-based' },
    {
      name: 'Email Services',
      example: 'Transactional emails, marketing emails',
      cost: 'Usage-based',
    },
  ]

  const included = [
    'Website hosting and domain',
    'Regular updates and patches',
    'Security monitoring',
    'Bug fixes',
    'Performance optimization',
    'Backup management',
    'Content updates',
    'Technical support',
    'Monthly analytics reports',
  ]

  const steps = [
    {
      number: '1',
      title: 'Initial Consultation',
      description:
        'We discuss your project requirements, goals, and timeline. I provide a custom quote for the one-time setup fee based on complexity.',
    },
    {
      number: '2',
      title: 'Development & Launch',
      description:
        'Pay the one-time setup fee and I build your project. Monthly billing begins upon project launch.',
    },
    {
      number: '3',
      title: 'Ongoing Partnership',
      description:
        'Your $49.99/month covers everything you need to keep your site running perfectly. Cancel anytime with 30 days notice.',
    },
  ]

  return (
    <div>
      <PageHero title="Pricing" description="Simple, transparent pricing with no hidden fees." />

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border-2 border-gray-900 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900">
                  <DollarSign className="h-5 w-5 text-white" strokeWidth={2} />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">One-Time Setup</h3>
                <div className="mb-3 text-4xl font-bold text-gray-900">$500+</div>
                <p className="text-gray-600">
                  Initial development cost based on project scope and complexity
                </p>
              </div>

              <div className="rounded-lg bg-gray-900 p-6 text-white">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  <RefreshCw className="h-5 w-5 text-gray-900" strokeWidth={2} />
                </div>
                <h3 className="mb-1 text-lg font-semibold">Monthly Recurring</h3>
                <div className="mb-3 text-4xl font-bold">
                  $49.99<span className="text-lg font-normal">/mo</span>
                </div>
                <p className="text-gray-400">Ongoing maintenance, support, hosting, and updates</p>
              </div>
            </div>

            <div className="mb-12 rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">Included in Monthly Fee</h2>
              <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {included.map(item => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" strokeWidth={2} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8 rounded-lg bg-gray-50 p-4 sm:mb-12 sm:p-6">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                Additional Optional Costs
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                Some projects may require third-party services. These are billed at cost with no
                markup.
              </p>
              <div className="space-y-2">
                {additionalCosts.map(item => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-2 rounded border border-gray-200 bg-white px-3 py-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:px-4 sm:py-3"
                  >
                    <div>
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.example}</div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 sm:p-6">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">How It Works</h2>
              <div className="space-y-6">
                {steps.map(step => (
                  <div key={step.number} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-900 text-sm font-bold text-gray-900">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Ready to <span className="logo-wave-dark">Get Started?</span>
            </h2>
            <p className="mb-6 text-gray-600">Free consultation. No obligation. Clear pricing.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Get Your Custom Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
