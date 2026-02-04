import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AlertCircle, Eye, EyeOff, Lock, Mail } from 'lucide-react'

export default function Auth() {
  const [activeTab, setActiveTab] = useState('signin')
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  })

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (activeTab === 'signin') {
    }
  }

  const tabs = [
    { id: 'signin', label: 'Sign In', disabled: false },
    { id: 'signup', label: 'Sign Up', disabled: true },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gray-50 px-4 pb-16 pt-40"
    >
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 text-center"
        >
          <Link to="/" className="inline-block">
            <span className="logo-wave-dark text-3xl font-bold">TaylorURL</span>
          </Link>
          <p className="mt-2 text-gray-600">Client Portal</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div className="mb-6 flex rounded-lg border border-gray-200 bg-gray-100 p-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => !tab.disabled && setActiveTab(tab.id)}
                disabled={tab.disabled}
                className={`relative flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : tab.disabled
                      ? 'cursor-not-allowed text-gray-400'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
                {tab.disabled && <Lock className="ml-1 inline-block h-3 w-3" />}
              </button>
            ))}
          </div>

          {activeTab === 'signin' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 transition-colors focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-12 text-gray-900 transition-colors focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <button type="button" disabled className="cursor-not-allowed text-sm text-gray-400">
                  Forgot password?
                  <Lock className="ml-1 inline-block h-3 w-3" />
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gray-900 py-3 font-medium text-white transition-colors hover:bg-gray-800"
              >
                Sign In
              </button>
            </form>
          )}

          {activeTab === 'signup' && (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <Lock className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">Registration Closed</h3>
              <p className="text-sm text-gray-600">
                New account registration is currently disabled. Please contact us directly to get
                started.
              </p>
              <Link
                to="/pricing"
                className="mt-4 inline-block text-sm font-medium text-gray-900 underline hover:no-underline"
              >
                Contact Us
              </Link>
            </div>
          )}

          {activeTab === 'forgot' && (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <AlertCircle className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">Password Reset Unavailable</h3>
              <p className="text-sm text-gray-600">
                Self-service password reset is currently disabled. Please contact support for
                assistance.
              </p>
              <a
                href="mailto:trenton@taylorurl.com"
                className="mt-4 inline-block text-sm font-medium text-gray-900 underline hover:no-underline"
              >
                trenton@taylorurl.com
              </a>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-600">
            {activeTab === 'signin' ? (
              <>
                Need an account?{' '}
                <button
                  onClick={() => setActiveTab('signup')}
                  className="font-medium text-gray-900 hover:underline"
                >
                  Contact us
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setActiveTab('signin')}
                  className="font-medium text-gray-900 hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 rounded-lg border border-gray-200 bg-white p-4"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" />
            <div className="text-sm text-gray-600">
              <p className="font-medium text-gray-900">Client Portal</p>
              <p className="mt-1">
                This portal is for existing TaylorURL clients only. If you&apos;re interested in our
                services, please{' '}
                <Link
                  to="/pricing"
                  className="font-medium text-gray-900 underline hover:no-underline"
                >
                  get in touch
                </Link>{' '}
                to discuss your project.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
