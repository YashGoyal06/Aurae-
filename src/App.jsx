import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Home from './pages/Home'
import Collection from './pages/Collection'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Force scroll to top on route change
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" finishLoading={() => setLoading(false)} />
        ) : (
          <div key="main-content">
            <Navbar />
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/collection/:type" element={<Collection />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
