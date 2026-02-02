import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="bg-light-bg min-h-screen">
      <Navigation />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  )
}
