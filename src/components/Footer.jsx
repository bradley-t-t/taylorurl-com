import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-200 bg-white">
      <div className="container relative mx-auto px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 sm:mb-12">
          <div>
            <Link
              to="/"
              className="group mb-4 inline-block transition-all duration-300 hover:scale-105"
            >
              <span className="logo-wave-dark text-xl font-bold sm:text-2xl">TaylorURL</span>
            </Link>
            <p className="text-sm text-gray-600 sm:text-base">
              Building exceptional digital experiences.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <p className="text-xs text-gray-500 sm:text-sm">
            © {currentYear} TaylorURL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
