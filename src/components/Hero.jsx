function Hero({ email, copied, copyEmail, openContact }) {
  function open(e) {
    if (openContact) {
      e.preventDefault()
      openContact(e)
    }
  }

  return (
    <header
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30 pt-16"
      role="banner"
      data-reveal
      data-reveal-from="left"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(217,70,239,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div
        className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8"
        data-reveal
        data-reveal-delay="60"
      >
        <div className="max-w-4xl py-20" data-reveal data-reveal-delay="120">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/50 px-4 py-2 text-sm font-medium text-primary-700 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-600" />
            </span>
            Available for new projects
          </div>

          <h1 className="mb-6 font-display text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl xl:text-8xl">
            Build{' '}
            <span className="gradient-text animate-gradient relative inline-block bg-[length:200%_200%]">
              Amazing
            </span>{' '}
            Digital Experiences
          </h1>

          <p
            className="mb-10 max-w-2xl text-xl leading-relaxed text-gray-600 sm:text-2xl"
            data-reveal
            data-reveal-delay="180"
          >
            Fast, maintainable, and accessible websites & JavaScript applications. Built with modern
            tools and best practices.
          </p>

          <div className="flex flex-wrap gap-4" data-reveal data-reveal-delay="260">
            <a
              href={'mailto:' + email}
              onClick={open}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-primary-500/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/40"
            >
              <span className="relative z-10">Start Your Project</span>
              <svg
                className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>

            <button
              onClick={copyEmail}
              className={`group inline-flex items-center gap-2 rounded-full border-2 px-8 py-4 text-lg font-semibold transition-all hover:scale-105 ${
                copied
                  ? 'border-green-500 bg-green-50 text-green-700 shadow-lg shadow-green-500/20'
                  : 'border-gray-300 bg-white text-gray-700 shadow-lg hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700'
              }`}
            >
              {copied ? (
                <>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    className="h-5 w-5 transition-transform group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy Email
                </>
              )}
            </button>
          </div>

          <div
            className="mt-12 flex flex-wrap items-center gap-8 text-sm text-gray-600"
            data-reveal
            data-reveal-delay="320"
          >
            <div className="flex items-center gap-2">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="font-medium">Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-accent-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="font-medium">Fully Accessible</span>
            </div>
            <div className="flex items-center gap-2">
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
              <span className="font-medium">Lifetime Support</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
