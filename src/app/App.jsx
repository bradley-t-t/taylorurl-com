import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from '@components/Layout'
import ScrollToTop from '@components/ScrollToTop'
import Home from '@views/Home'
import About from '@views/About'
import Services from '@views/Services'
import Work from '@views/Work'
import Pricing from '@views/Pricing'
import Privacy from '@views/Privacy'
import Terms from '@views/Terms'
import License from '@views/License'
import Auth from '@views/Auth'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="work" element={<Work />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="license" element={<License />} />
            <Route path="auth" element={<Auth />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
