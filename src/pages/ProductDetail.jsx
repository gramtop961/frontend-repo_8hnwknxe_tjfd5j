import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../products'

export default function ProductDetail({ addToCart }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-gray-600">Product not found.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border bg-white">
          <img src={product.image} alt={product.name} className="w-full object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{product.name}</h1>
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <span>{'★'.repeat(Math.round(product.rating))}</span>
            <span>{product.rating}</span>
          </div>
          <p className="mt-4 text-2xl font-bold">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-600">{product.description}</p>

          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700">Color</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <span key={c} className="inline-flex items-center rounded-md border px-3 py-1 text-sm">{c}</span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={() => {
                addToCart(product)
                navigate('/cart')
              }}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Add to cart
            </button>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold hover:bg-gray-50"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
