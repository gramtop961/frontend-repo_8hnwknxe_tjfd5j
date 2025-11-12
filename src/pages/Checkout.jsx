import { useState } from 'react'

export default function Checkout({ cart, clearCart }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    card: '',
  })

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const submit = (e) => {
    e.preventDefault()
    alert(`Thanks, ${form.name}! Your order of $${total.toFixed(2)} has been placed.`)
    clearCart()
    window.location.href = '/'
  }

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <div className="mt-6 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <form onSubmit={submit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Full name</label>
              <input
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Address</label>
              <input
                required
                value={form.address}
                onChange={(e) => update('address', e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                required
                value={form.city}
                onChange={(e) => update('city', e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Country</label>
              <input
                required
                value={form.country}
                onChange={(e) => update('country', e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Card number</label>
            <input
              required
              value={form.card}
              onChange={(e) => update('card', e.target.value)}
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Place order
          </button>
        </form>

        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-medium">Order summary</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <div className="flex items-center justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
