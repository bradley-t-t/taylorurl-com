import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/work', label: 'Work' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-6"
      >
        <div
          className={`mx-auto max-w-6xl transition-all duration-500 ${
            scrolled
              ? 'rounded-2xl border border-white/10 bg-black/95 shadow-2xl shadow-black/20 backdrop-blur-xl'
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <Link to="/" className="group relative flex items-center transition-all duration-300">
              <span
                className={`text-xl font-bold tracking-tight transition-all duration-300 ${scrolled ? 'logo-wave' : 'logo-wave-dark'}`}
              >
                TaylorURL
              </span>
            </Link>

            <div className="hidden items-center md:flex">
              <div
                className={`relative flex items-center rounded-full border p-1 transition-all duration-300 ${
                  scrolled ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-100'
                }`}
              >
                {links.map(link => {
                  const isActive = location.pathname === link.to
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onMouseEnter={() => setHoveredLink(link.to)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-black'
                          : scrolled
                            ? 'text-gray-400 hover:text-white'
                            : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-[#38ff6d]"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      {hoveredLink === link.to && !isActive && (
                        <motion.div
                          layoutId="nav-hover"
                          className={`absolute inset-0 rounded-full ${scrolled ? 'bg-white/10' : 'bg-gray-200'}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <Link
                to="/auth"
                className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  scrolled ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="relative z-10">Sign In</span>
                <div
                  className={`absolute inset-0 -translate-x-full rounded-full transition-transform duration-300 group-hover:translate-x-0 ${
                    scrolled ? 'bg-white/10' : 'bg-gray-200'
                  }`}
                />
              </Link>
              <Link
                to="/pricing"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#38ff6d] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#38ff6d]/30"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
                  Get a Quote
                </span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 -translate-x-full bg-[#2de85e] transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
            </div>

            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 md:hidden ${
                scrolled
                  ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                  : 'border-gray-200 bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" strokeWidth={1.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-0 right-0 top-0 z-50 w-80 border-l border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
            >
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="logo-wave text-xl font-bold">TaylorURL</span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
                  >
                    <X className="h-5 w-5" strokeWidth={1.5} />
                  </button>
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  {links.map((link, i) => {
                    const isActive = location.pathname === link.to
                    return (
                      <motion.div
                        key={link.to}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.1 }}
                      >
                        <Link
                          to={link.to}
                          onClick={() => setMobileOpen(false)}
                          className={`group flex items-center justify-between rounded-xl px-4 py-4 text-lg transition-all duration-300 ${
                            isActive
                              ? 'bg-[#38ff6d] font-semibold text-black'
                              : 'text-gray-400 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {link.label}
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="h-2 w-2 rounded-full bg-black"
                            />
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3 border-t border-white/10 pt-6"
                >
                  <Link
                    to="/auth"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-center font-medium text-white transition-all hover:bg-white/10"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/pricing"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#38ff6d] px-4 py-3.5 font-semibold text-black transition-all hover:bg-[#2de85e]"
                  >
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
