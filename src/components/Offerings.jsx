const OFFER_CARDS = [
  {
    title: 'Website Design & Build',
    sub: 'Intentional layouts and systemized styling for clarity.',
    points: ['Design systems', 'Responsive UX', 'Accessibility-first', 'Third-Party Platforms'],
    delay: 120,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'JavaScript Application Engineering',
    sub: 'Modern component architecture without bloat.',
    points: ['State and data flows', 'Component libraries', 'Edge-ready builds', 'React Framework'],
    delay: 200,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: 'Performance Optimization',
    sub: 'Faster loads, stronger Core Web Vitals, smoother UX.',
    points: [
      'Core Web Vitals',
      'Bundle & asset audits',
      'Caching & edge delivery',
      'Monitoring & iteration',
    ],
    delay: 280,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
]

function Offerings() {
  return (
    <section
      className="relative bg-white py-24 sm:py-32"
      id="offerings"
      aria-labelledby="offerings-title"
      data-reveal
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.03)_0%,transparent_50%)]" />

      <div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        data-reveal
        data-reveal-delay="40"
      >
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            Services
          </div>
          <h2
            id="offerings-title"
            className="mb-4 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            data-reveal
            data-reveal-delay="80"
          >
            What I Do
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Comprehensive web development services to bring your vision to life
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
          {OFFER_CARDS.map(c => (
            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50/50 to-gray-50/30 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-500/10"
              role="listitem"
              key={c.title}
              data-reveal
              data-reveal-delay={c.delay}
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-100 opacity-50 blur-2xl transition-all group-hover:scale-150" />

              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 p-3 text-white shadow-lg shadow-gray-500/30">
                  {c.icon}
                </div>

                <h3 className="mb-3 font-display text-2xl font-bold text-gray-900">{c.title}</h3>
                <p className="mb-6 text-gray-600">{c.sub}</p>

                <ul className="space-y-3">
                  {c.points.map(p => (
                    <li key={p} className="flex items-start gap-3 text-sm text-gray-700">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offerings
