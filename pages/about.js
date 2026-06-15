import Link from 'next/link'
import { FiCheckCircle } from 'react-icons/fi'

export default function About() {
  const values = [
    {
      title: 'Quality',
      description: 'We only curate the finest products for our customers'
    },
    {
      title: 'Reliability',
      description: 'Fast shipping and reliable customer service guaranteed'
    },
    {
      title: 'Innovation',
      description: 'Always bringing you the latest trends and products'
    },
    {
      title: 'Integrity',
      description: 'Transparent pricing and honest communication'
    }
  ]

  return (
    <div className="bg-dark-950 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-950 border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Maris4u</h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            We're committed to bringing you the best shopping experience with premium products and exceptional service.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-dark-300 mb-4">
                Founded in 2020, Maris4u started with a simple vision: to provide customers with access to premium products at competitive prices. What began as a small online store has grown into a trusted destination for quality goods.
              </p>
              <p className="text-dark-300 mb-4">
                We believe that great products should be accessible to everyone, and we work tirelessly to make that a reality. Our team is dedicated to finding the best products and delivering them to your doorstep with care.
              </p>
              <p className="text-dark-300">
                Today, we serve thousands of customers worldwide and continue to expand our product offerings and improve our services.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-96 rounded-lg flex items-center justify-center">
              <span className="text-8xl">🚀</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card flex">
                <FiCheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-dark-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(member => (
              <div key={member} className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  {['👨‍💼', '👩‍💼', '👨‍🔬'][member - 1]}
                </div>
                <h3 className="text-xl font-semibold mb-1">Team Member {member}</h3>
                <p className="text-dark-400 mb-3">Key Role</p>
                <p className="text-sm text-dark-400">
                  Dedicated to delivering excellence and innovation
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '50K+', label: 'Products Sold' },
              { number: '4.8★', label: 'Average Rating' },
              { number: '24/7', label: 'Customer Support' }
            ].map((stat, index) => (
              <div key={index} className="card">
                <h3 className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</h3>
                <p className="text-dark-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-dark-300 mb-8">
            Join thousands of satisfied customers and start shopping today
          </p>
          <Link href="/products" className="btn-primary inline-block">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  )
}
