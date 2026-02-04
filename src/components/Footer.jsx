import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Mail, MapPin } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Work', href: '/work' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'License', href: '/license' },
    ],
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 px-4 pb-6 pt-20 md:px-6">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #000 1px, transparent 1px),
            linear-gradient(#000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <div className="rounded-2xl border border-white/10 bg-black/95 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link to="/" className="mb-6 inline-block">
                <span className="logo-wave text-2xl font-bold">TaylorURL</span>
              </Link>
              <p className="mb-8 max-w-md text-gray-400">
                Professional web development for businesses in the Houston area and beyond.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>Houston, Texas</span>
                </div>
                <a
                  href="mailto:trenton@taylorurl.com"
                  className="group flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-[#38ff6d]/30 group-hover:bg-[#38ff6d]/10">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>trenton@taylorurl.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Navigate</h3>
              <ul className="space-y-3">
                {navigation.company.map(item => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="group flex items-center text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
              <ul className="mb-8 space-y-3">
                {navigation.legal.map(item => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="group flex items-center text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 rounded-full bg-[#38ff6d] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#2de85e] hover:shadow-lg hover:shadow-[#38ff6d]/30"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-sm text-gray-500">© {currentYear} TaylorURL. All rights reserved.</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#38ff6d]" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
