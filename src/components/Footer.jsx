import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowUpRight, Clock } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    services: [
      { name: 'Web Development', href: '/services' },
      { name: 'Application Engineering', href: '/services' },
      { name: 'UI/UX Design', href: '/services' },
      { name: 'Performance Optimization', href: '/services' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Work', href: '/work' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'License', href: '/license' },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <footer className="relative bg-black text-white">
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <motion.div
        className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <Link
              to="/"
              className="group mb-6 inline-block transition-all duration-300 hover:scale-105"
            >
              <span className="logo-wave text-3xl font-bold">TaylorURL</span>
            </Link>
            <p className="mb-8 max-w-sm text-gray-400">
              Professional web development and JavaScript application engineering for businesses in
              the Houston area and beyond. Building exceptional digital experiences since 2020.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 flex-shrink-0 text-gray-500" />
                <span>Houston, Texas</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 flex-shrink-0 text-gray-500" />
                <a
                  href="mailto:trenton@taylorurl.com"
                  className="transition-colors hover:text-white"
                >
                  trenton@taylorurl.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Clock className="h-4 w-4 flex-shrink-0 text-gray-500" />
                <span>Mon - Fri: 9AM - 6PM CST</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map(item => (
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
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
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
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="space-y-3">
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
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>
            <div className="mb-6">
              <a
                href="https://github.com/bradley-t-t"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
              </a>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                Ready to start?
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-gray-300"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-8 sm:flex-row"
        >
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <p className="text-sm text-gray-500">© {currentYear} TaylorURL. All rights reserved.</p>
            <span className="hidden text-gray-700 sm:inline">|</span>
            <p className="text-sm text-gray-500">Built with React + Vite + Tailwind</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <span>All systems operational</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
