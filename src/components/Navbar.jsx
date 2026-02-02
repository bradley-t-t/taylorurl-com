function Navbar({ email, activeSection = '', onEmailClick }) {
  const links = [
    { id: 'offerings', label: 'What I Do' },
    { id: 'process', label: 'How it Works' },
  ]

  function click(e) {
    if (onEmailClick) {
      e.preventDefault()
      onEmailClick(e)
    }
  }

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200/50 bg-white/70 shadow-sm backdrop-blur-2xl"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="group flex items-center transition-transform hover:scale-105"
            aria-label="TaylorURL Home"
          >
            <img
              src="/images/TaylorURL-Logo.png"
              alt="TaylorURL"
              className="h-10 w-auto transition-all duration-300 group-hover:brightness-110"
            />
          </a>
          <div className="hidden items-center gap-8 md:flex" role="list">
            {links.map(l => {
              const active = activeSection === l.id
              return (
                <a
                  key={l.id}
                  href={'#' + l.id}
                  className={`relative text-sm font-medium transition-colors ${
                    active ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  {...(active ? { 'aria-current': 'true' } : {})}
                >
                  {l.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-gray-500 to-gray-700" />
                  )}
                </a>
              )
            })}
            <a
              href={'mailto:' + email}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gray-500 to-gray-800 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-gray-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-gray-500/40"
              onClick={click}
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </div>
          <a
            href={'mailto:' + email}
            className="rounded-full bg-gradient-to-r from-gray-500 to-gray-800 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/30 transition-all hover:scale-105 hover:shadow-xl md:hidden"
            onClick={click}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
