import { Zap, Users, Code, HandshakeIcon } from 'lucide-react'
import PageHero from '@components/PageHero'

export default function About() {
  const skills = [
    { name: 'React & Modern JavaScript', level: 'Expert' },
    { name: 'Tailwind CSS & Design Systems', level: 'Expert' },
    { name: 'Performance Optimization', level: 'Advanced' },
    { name: 'Web Accessibility (WCAG)', level: 'Advanced' },
    { name: 'Node.js & Backend APIs', level: 'Proficient' },
    { name: 'Database Design', level: 'Proficient' },
  ]

  const values = [
    {
      icon: Zap,
      title: 'Performance First',
      description:
        'Every millisecond matters. I optimize for speed without sacrificing functionality.',
    },
    {
      icon: Users,
      title: 'Accessibility Always',
      description:
        'Building for everyone means ensuring your site works for all users, regardless of ability.',
    },
    {
      icon: Code,
      title: 'Maintainable Code',
      description: 'Clean, well-documented code that your team can understand and extend.',
    },
    {
      icon: HandshakeIcon,
      title: 'Partnership Approach',
      description: "I'm not just a developer—I'm a partner invested in your success.",
    },
  ]

  return (
    <div>
      <PageHero
        title="About Me"
        description="Web developer specializing in building fast, accessible, and maintainable web applications."
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Hi, I'm <strong className="font-semibold text-gray-900">Trenton Taylor</strong>.
                With years of experience in modern web technologies, I help businesses and startups
                transform their ideas into beautiful, functional digital experiences.
              </p>
              <p>
                I believe that great websites should be fast, accessible to everyone, and built with
                clean code that stands the test of time. Every project I work on reflects these
                values.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                <span className="logo-wave-dark">Core Skills</span>
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {skills.map(skill => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3"
                  >
                    <span className="text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                <span className="logo-wave-dark">What I Value</span>
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
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
              Ready to bring your project to life? Let's talk about how I can help.
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
