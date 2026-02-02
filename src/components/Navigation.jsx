import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    setVisible(true)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/work', label: 'Work' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 bg-black transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between border-b border-white/5">
          <Link
            to="/"
            className="group flex items-center transition-all duration-300 hover:scale-105"
          >
            <span className="logo-wave text-2xl font-bold">TaylorURL</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link, i) => {
              const isActive = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm transition-all duration-300 hover:translate-y-[-2px] ${
                    isActive ? 'font-medium text-white' : 'text-gray-400 hover:text-white'
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button className="text-sm text-gray-400 transition-all duration-300 hover:text-white">
              Sign In
            </button>
            <button className="rounded bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200">
              Sign Up
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white transition-transform duration-300 hover:scale-110 md:hidden"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`border-t border-white/5 bg-black transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex flex-col gap-4">
            {links.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm transition-all duration-300 ${
                  location.pathname === link.to ? 'font-medium text-white' : 'text-gray-400'
                }`}
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex gap-4 border-t border-white/10 pt-4">
              <button className="text-sm text-gray-400 transition-colors hover:text-white">
                Sign In
              </button>
              <button className="rounded bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:bg-gray-200">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
