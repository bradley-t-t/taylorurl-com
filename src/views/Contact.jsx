import { useState } from 'react'
import { Mail, Linkedin, Github, Check } from 'lucide-react'
import PageHero from '@components/PageHero'

export default function Contact() {
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

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      content: 'trenton@taylorurl.com',
      link: 'mailto:trenton@taylorurl.com',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Connect with me',
      link: 'https://linkedin.com',
    },
    {
      icon: Github,
      title: 'GitHub',
      content: 'View my code',
      link: 'https://github.com',
    },
  ]

  return (
    <div>
      <PageHero
        title="Get in Touch"
        description="Let's discuss your project and see how I can help bring your vision to life."
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 grid gap-4 md:grid-cols-3">
              {contactMethods.map(method => {
                const Icon = method.icon
                return (
                  <a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-200 p-4 text-center transition-colors hover:border-gray-300"
                  >
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                      <Icon className="h-5 w-5 text-gray-900" strokeWidth={1.5} />
                    </div>
                    <div className="font-medium text-gray-900">{method.title}</div>
                    <div className="text-sm text-gray-500">{method.content}</div>
                  </a>
                )
              })}
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-900">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-900">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1 block text-sm font-medium text-gray-900"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-1 block text-sm font-medium text-gray-900"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    >
                      <option value="">Select project type</option>
                      <option value="new-website">New Website</option>
                      <option value="web-app">Web Application</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="optimization">Performance Optimization</option>
                      <option value="maintenance">Ongoing Maintenance</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-900">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-800"
                >
                  Send Message
                </button>
                <p className="text-sm text-gray-500">
                  * This will open your email client with the information pre-filled
                </p>
              </form>
            </div>

            <div className="mt-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 font-semibold text-gray-900">What to Expect</h3>
              <ul className="space-y-2">
                {[
                  'Response within 24 hours',
                  'Free initial consultation',
                  'Custom quote for your project',
                  'Simple pricing: $500+ setup + $49.99/month',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
