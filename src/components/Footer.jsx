import { Link } from 'react-router-dom'

function Footer({ email, copied, copyEmail, onEmailClick }) {
  function handle(e) {
    if (onEmailClick) {
      e.preventDefault()
      onEmailClick(e)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-200 bg-white">
      <div className="container relative mx-auto px-6 py-16">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="mb-4 inline-block">
              <span className="text-2xl font-bold">
                <span className="text-gradient">Taylor</span>
                <span className="text-gray-900">URL</span>
              </span>
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
