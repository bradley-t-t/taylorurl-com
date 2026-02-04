import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Clock, Mail, MapPin, Send } from 'lucide-react'
import PageHero from '@components/PageHero'

export default function Pricing() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  })

  const handleSubmit = e => {
    e.preventDefault()
    const subject = `New Project Inquiry from ${formData.name}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'N/A'}
Project Type: ${formData.projectType || 'Not specified'}

Message:
${formData.message}
    `.trim()

    window.location.href = `mailto:trenton@taylorurl.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const included = [
    'Custom website design',
    'Responsive development',
    'Website hosting',
    'Regular updates and patches',
    'Security monitoring',
    'Bug fixes',
    'Performance optimization',
    'Backup management',
    'Content updates',
    'Technical support',
  ]

  const process = [
    {
      title: 'Free Consultation',
      description: 'We discuss your project requirements, goals, and timeline.',
    },
    {
      title: 'Custom Quote',
      description: 'You receive a detailed proposal tailored to your project.',
    },
    {
      title: 'Build & Launch',
      description: 'I build your project and launch it with ongoing support.',
    },
  ]

  return (
    <div>
      <PageHero title="Get a Quote" description="Every project is unique. Let's discuss yours." />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Let's Build Something <span className="logo-wave-dark">Great</span>
                </h2>
                <p className="mb-8 text-gray-600">
                  Whether you need a new website, web application, or want to improve your existing
                  online presence, I'm here to help.
                </p>

                <div className="mb-8 space-y-4">
                  <a
                    href="mailto:trenton@taylorurl.com"
                    className="group flex items-start gap-4 rounded-xl border border-gray-200 p-4 transition-all hover:border-gray-300 hover:bg-gray-50"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-900">
                      <Mail className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-sm text-gray-500">trenton@taylorurl.com</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-900">
                      <MapPin className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-sm text-gray-500">Houston, Texas</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-900">
                      <Clock className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Response Time</div>
                      <div className="text-sm text-gray-500">Within 24 hours</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="mb-4 font-semibold text-gray-900">How It Works</h3>
                  <div className="space-y-4">
                    {process.map((step, i) => (
                      <div key={step.title} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200 text-sm font-medium text-gray-700">
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{step.title}</div>
                          <div className="text-sm text-gray-500">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="mb-6 text-xl font-semibold text-gray-900">
                    Tell Me About Your Project
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-gray-900"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition-all placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-gray-900"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition-all placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="company"
                          className="mb-2 block text-sm font-medium text-gray-900"
                        >
                          Company / Business
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition-all placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="projectType"
                          className="mb-2 block text-sm font-medium text-gray-900"
                        >
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 0.75rem center',
                            backgroundSize: '1.25rem',
                          }}
                        >
                          <option value="">Select type</option>
                          <option value="new-website">New Website</option>
                          <option value="web-app">Web Application</option>
                          <option value="redesign">Website Redesign</option>
                          <option value="optimization">Performance Optimization</option>
                          <option value="maintenance">Ongoing Maintenance</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition-all placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                        placeholder="Tell me about your project, goals, and timeline..."
                      />
                    </div>

                    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#38ff6d] px-8 py-4 font-semibold text-black transition-all hover:bg-[#2de85e]"
                      >
                        Request Quote
                        <Send className="h-4 w-4" />
                      </button>
                      <p className="text-xs text-gray-500">Opens your email client</p>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">What's Included</h2>
              <p className="text-gray-600">
                Every project includes comprehensive support to ensure your website runs smoothly.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {included.map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38ff6d]" strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
