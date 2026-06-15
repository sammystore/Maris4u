import { useState } from 'react'
import { FiFilter, FiX } from 'react-icons/fi'

export default function Products() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState(500)

  const products = [
    { id: 1, name: 'Classic Cotton T-Shirt', price: 29, category: 'tops', image: '👕' },
    { id: 2, name: 'Premium Denim Jeans', price: 89, category: 'bottoms', image: '👖' },
    { id: 3, name: 'Casual Polo Shirt', price: 49, category: 'tops', image: '👕' },
    { id: 4, name: 'Wool Sweater', price: 79, category: 'tops', image: '🧶' },
    { id: 5, name: 'Leather Belt', price: 39, category: 'accessories', image: '⌛' },
    { id: 6, name: 'Fashion Sunglasses', price: 99, category: 'accessories', image: '😎' },
    { id: 7, name: 'Knit Beanie Hat', price: 25, category: 'accessories', image: '🧢' },
    { id: 8, name: 'Canvas Sneakers', price: 79, category: 'shoes', image: '👟' },
    { id: 9, name: 'Silk Scarf', price: 45, category: 'accessories', image: '🧣' },
    { id: 10, name: 'Casual Blazer', price: 129, category: 'outerwear', image: '🧥' },
    { id: 11, name: 'Athletic Joggers', price: 59, category: 'bottoms', image: '👖' },
    { id: 12, name: 'Elegant Handbag', price: 149, category: 'accessories', image: '👜' },
    { id: 13, name: 'Formal Dress Shoes', price: 119, category: 'shoes', image: '👞' },
    { id: 14, name: 'Vintage Denim Jacket', path: 'outerwear', price: 99, category: 'outerwear', image: '🧥' },
    { id: 15, name: 'Cotton Dress', price: 69, category: 'dresses', image: '👗' },
    { id: 16, name: 'Designer Watch', price: 199, category: 'accessories', image: '⌚' },
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'tops', name: 'Tops' },
    { id: 'bottoms', name: 'Bottoms' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'outerwear', name: 'Outerwear' },
    { id: 'shoes', name: 'Shoes' },
    { id: 'accessories', name: 'Accessories' },
  ]

  const filtered = products.filter(p => {
    const categoryMatch = selectedCategory === 'all' || p.category === selectedCategory
    const priceMatch = p.price <= priceRange
    return categoryMatch && priceMatch
  })

  return (
    <div className="bg-dark-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Clothing & Fashion</h1>
        <p className="text-dark-300 mb-8">Discover our premium collection of clothing and fashion accessories</p>

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
                  max="500"
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
                    max="500"
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
                    <p className="text-dark-400 text-sm mb-4 capitalize">{product.category}</p>
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
