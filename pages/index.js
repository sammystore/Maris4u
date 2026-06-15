import Link from 'next/link'
import { FiArrowRight, FiTruck, FiShield, FiHeadphones } from 'react-icons/fi'

export default function Home() {
  const features = [
    {
      icon: FiTruck,
      title: 'Fast Shipping',
      description: 'Get your orders delivered quickly and safely'
    },
    {
      icon: FiShield,
      title: 'Secure Payment',
      description: 'Your transactions are protected and encrypted'
    },
    {
      icon: FiHeadphones,
      title: '24/7 Support',
      description: 'Our team is always here to help you'
    }
  ]

  const products = [
    { id: 1, name: 'Premium Headphones', price: '$299', image: '🎧' },
    { id: 2, name: 'Wireless Speaker', price: '$199', image: '🔊' },
    { id: 3, name: 'Smart Watch', price: '$399', image: '⌚' },
    { id: 4, name: 'Phone Case', price: '$29', image: '📱' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-950 to-dark-950 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Welcome to Maris4u</span>
            </h1>
            <p className="text-xl text-dark-300 mb-8 max-w-2xl mx-auto">
              Discover premium products curated for modern living. Experience shopping redefined with our exclusive collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary inline-flex items-center justify-center">
                Shop Now
                <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/about" className="btn-secondary inline-flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-dark-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link href="/products" className="text-blue-500 hover:text-blue-400 flex items-center">
              View All
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="card group cursor-pointer">
                <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform">
                  {product.image}
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-blue-500 font-bold">{product.price}</span>
                  <button className="btn-primary text-sm py-2 px-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-opacity-90 mb-8">
            Get exclusive offers and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field bg-white text-dark-950 placeholder-dark-400"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
