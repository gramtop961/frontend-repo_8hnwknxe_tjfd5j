export const products = [
  {
    id: 'p-1',
    name: 'AeroFit Running Shoes',
    price: 89.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    description:
      'Lightweight, breathable running shoes designed for comfort and speed. Perfect for daily runs and training.',
    category: 'Shoes',
    colors: ['Black', 'White', 'Blue'],
  },
  {
    id: 'p-2',
    name: 'Nimbus Wireless Headphones',
    price: 129.0,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1704440278730-b420f5892700?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOaW1idXMlMjBXaXJlbGVzcyUyMEhlYWRwaG9uZXN8ZW58MHwwfHx8MTc2MjkwOTI5Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Immersive sound with active noise cancellation and 30-hour battery life. Comfortable over-ear design.',
    category: 'Audio',
    colors: ['Silver', 'Black'],
  },
  {
    id: 'p-3',
    name: 'Pulse Smartwatch',
    price: 199.99,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    description:
      'Track your fitness, heart rate, and notifications with a bright AMOLED display and 5-day battery.',
    category: 'Wearables',
    colors: ['Graphite', 'Rose Gold'],
  },
  {
    id: 'p-4',
    name: 'Summit Backpack 28L',
    price: 74.5,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1514477917009-389c76a86b68?q=80&w=1200&auto=format&fit=crop',
    description:
      'Versatile everyday backpack with padded laptop sleeve and water-resistant fabric.',
    category: 'Bags',
    colors: ['Olive', 'Navy', 'Black'],
  },
  {
    id: 'p-5',
    name: 'Aura Desk Lamp',
    price: 49.99,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
    description:
      'Minimal LED lamp with adjustable brightness and color temperature for perfect workspace lighting.',
    category: 'Home',
    colors: ['White', 'Black'],
  },
  {
    id: 'p-6',
    name: 'Canvas Sneakers',
    price: 59.99,
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop',
    description:
      'Classic low-top canvas sneakers with cushioned sole. Casual style for everyday wear.',
    category: 'Shoes',
    colors: ['White', 'Navy', 'Green'],
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)
