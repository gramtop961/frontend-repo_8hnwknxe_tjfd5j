import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

function App() {
  useScrollToTop()

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart((c) => {
      const existing = c.find((i) => i.id === product.id)
      if (existing) return c.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
      return [...c, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id) => setCart((c) => c.filter((i) => i.id !== id))
  const updateQty = (id, qty) => setCart((c) => c.map((i) => (i.id === id ? { ...i, qty } : i)))
  const clearCart = () => setCart([])

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.qty, 0), [cart])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartCount} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} />} />
          <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
