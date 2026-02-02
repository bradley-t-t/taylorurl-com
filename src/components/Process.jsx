function Process() {
  const steps = [
    {
      title: 'Reach Out',
      summary: 'Contact me to start your project',
      detail:
        'Send a quick email describing your idea, pain points, or goals. A few sentences is fine.',
      icon: '💬',
    },
    {
      title: 'Discovery Meeting',
      summary: 'Phone or in-person meeting',
      detail: 'We clarify your audience, required features, and what success looks like.',
      icon: '🎯',
    },
    {
      title: 'Goals & Timeline',
      summary: 'Expectations and roadmap',
      detail:
        'You get a clear outline: scope, milestones, estimated launch window, and responsibilities.',
      icon: '📋',
    },
    {
      title: 'Onboarding & Payment',
      summary: 'Secure the project slot',
      detail: 'We finalize scope, handle payment, and set up any shared assets or accounts.',
      icon: '🤝',
    },
    {
      title: 'Build Phase',
      summary: 'Design & development',
      detail:
        'Foundations first (structure, performance, accessibility), then polish and integrations.',
      icon: '⚡',
    },
    {
      title: 'Draft Review',
      summary: 'Interactive rough draft',
      detail: 'You explore a working version. We gather feedback and schedule quick iteration.',
      icon: '👀',
    },
    {
      title: 'Launch',
      summary: 'Deploy & verify',
      detail: 'Domains, DNS, performance passes, analytics, and final QA before public launch.',
      icon: '🚀',
    },
    {
      title: 'Lifetime Support',
      summary: 'Always available afterward',
      detail: 'Updates, tweaks, improvements, and new ideas anytime—relationship, not a handoff.',
      icon: '🛠️',
    },
  ]
  return (
    <section
      className="relative bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32"
      id="process"
      aria-labelledby="process-title"
      data-reveal
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,70,239,0.03)_0%,transparent_50%)]" />

      <div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        data-reveal
        data-reveal-delay="40"
      >
        <div className="mb-16 text-center" data-reveal data-reveal-delay="80">
          <div className="text-accent-700 mb-4 inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-sm font-medium">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            Process
          </div>
          <h2
            id="process-title"
            className="mb-4 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A transparent, collaborative path from first hello to long-term support
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" aria-label="Project process">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="group relative"
              data-reveal
              data-reveal-delay={120 + i * 70}
            >
              <div
                className="relative h-full overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all focus-within:border-primary-300 focus-within:shadow-lg hover:border-primary-300 hover:shadow-lg"
                tabIndex={0}
              >
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-6 translate-x-6 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 opacity-0 blur-xl transition-all group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="text-4xl">{s.icon}</div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 text-sm font-bold text-gray-700">
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="mb-2 font-display text-xl font-bold text-gray-900">{s.title}</h3>
                  <p className="mb-2 text-sm font-semibold text-primary-600">{s.summary}</p>
                  <p className="text-sm leading-relaxed text-gray-600">{s.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary-200 bg-primary-50/50 px-6 py-3 text-sm font-medium text-gray-700 backdrop-blur-sm">
            <svg
              className="h-5 w-5 text-primary-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Typical timeline: <strong className="text-gray-900">4-8 weeks</strong> from kickoff to
              launch
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
