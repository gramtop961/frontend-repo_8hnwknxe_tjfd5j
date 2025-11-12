import { Link } from 'react-router-dom'

export default function Navbar({ cartCount }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white font-bold">e</span>
            <span className="text-lg font-semibold tracking-tight">ShopLite</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <Link to="/products" className="hover:text-gray-900">Products</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/cart" className="relative inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-gray-50">
              <span>Cart</span>
              <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-semibold text-white">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
