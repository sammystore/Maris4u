import { useState } from 'react'
import { FiFilter, FiX } from 'react-icons/fi'

export default function Products() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState(1000)

  const products = [
    { id: 1, name: 'Premium Headphones', price: 299, category: 'electronics', image: '🎧' },
    { id: 2, name: 'Wireless Speaker', price: 199, category: 'electronics', image: '🔊' },
    { id: 3, name: 'Smart Watch', price: 399, category: 'wearables', image: '⌚' },
    { id: 4, name: 'Phone Case', price: 29, category: 'accessories', image: '📱' },
    { id: 5, name: 'USB-C Cable', price: 19, category: 'accessories', image: '🔌' },
    { id: 6, name: 'Laptop Stand', price: 89, category: 'accessories', image: '💻' },
    { id: 7, name: 'Tablet', price: 599, category: 'electronics', image: '📲' },
    { id: 8, name: 'Fitness Band', price: 149, category: 'wearables', image: '⌚' },
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'wearables', name: 'Wearables' },
  ]

  const filtered = products.filter(p => {
    const categoryMatch = selectedCategory === 'all' || p.category === selectedCategory
    const priceMatch = p.price <= priceRange
    return categoryMatch && priceMatch
  })

  return (
    <div className="bg-dark-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Products</h1>

        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="card sticky top-20">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <FiFilter className="mr-2" />
                Filters
              </h3>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Category</h4>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat.id}
                        checked={selectedCategory === cat.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="ml-2 text-dark-300">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h4 className="font-semibold mb-4">Price Range</h4>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full"
                />
                <p className="text-dark-300 text-sm mt-2">Up to: ${priceRange}</p>
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="btn-secondary flex items-center"
            >
              <FiFilter className="mr-2" />
              Filters
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Modal */}
            {filterOpen && (
              <div className="lg:hidden card mb-6 relative">
                <button
                  onClick={() => setFilterOpen(false)}
                  className="absolute top-4 right-4"
                >
                  <FiX size={24} />
                </button>

                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <FiFilter className="mr-2" />
                  Filters
                </h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-4">Category</h4>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <label key={cat.id} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value={cat.id}
                          checked={selectedCategory === cat.id}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="ml-2 text-dark-300">{cat.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Price Range</h4>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-dark-300 text-sm mt-2">Up to: ${priceRange}</p>
                </div>
              </div>
            )}

            {/* Results */}
            <div>
              <p className="text-dark-400 mb-6">
                Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(product => (
                  <div key={product.id} className="card group">
                    <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform">
                      {product.image}
                    </div>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-dark-400 text-sm mb-4">{product.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-500 font-bold text-lg">${product.price}</span>
                      <button className="btn-primary text-sm py-2 px-4">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-dark-400 text-lg">No products found matching your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
