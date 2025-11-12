export default function Cart({ cart, removeFromCart, updateQty }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold">Your cart</h1>

      {cart.length === 0 ? (
        <p className="mt-6 text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="mt-6 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-4 rounded-lg border p-4">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-md object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                    className="h-8 w-8 rounded-md border text-lg leading-none"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, Math.max(1, Number(e.target.value)))}
                    className="w-14 rounded-md border px-2 py-1 text-center"
                  />
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="h-8 w-8 rounded-md border text-lg leading-none"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="rounded-lg border p-6">
            <div className="flex items-center justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <hr className="my-4" />
            <a
              href="/checkout"
              className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Checkout
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
