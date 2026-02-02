import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-200 bg-white">
      <div className="container relative mx-auto px-6 py-16">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="group mb-4 inline-block transition-all duration-300 hover:scale-105"
            >
              <span className="logo-wave-dark text-2xl font-bold">TaylorURL</span>
            </Link>
            <p className="mb-6 text-gray-600">Building exceptional digital experiences.</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">© {currentYear} TaylorURL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
