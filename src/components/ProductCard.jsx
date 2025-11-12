import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="group rounded-xl border bg-white p-4 transition-shadow hover:shadow-md">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</h3>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>{'★'.repeat(Math.round(product.rating))}</span>
            <span>{product.rating}</span>
          </div>
          <p className="text-base font-semibold">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  )
}
