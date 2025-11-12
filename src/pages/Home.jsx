import { Link } from 'react-router-dom'
import { products } from '../products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const featured = products.slice(0, 4)

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">Modern e-commerce</span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Discover products you’ll love
              </h1>
              <p className="mt-4 max-w-xl text-base text-gray-600">
                A clean, responsive store built with React and Tailwind. Browse curated items with a delightful, fast UI.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                >
                  Shop now
                </Link>
                <a
                  href="#featured"
                  className="inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold hover:bg-gray-50"
                >
                  Explore featured
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
                  alt="Featured"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured products</h2>
          <Link to="/products" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            View all
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
