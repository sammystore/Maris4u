import Link from 'next/link'
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi'

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: '10 Tips for Finding the Perfect Product',
      excerpt: 'Learn how to choose the right products for your needs with these expert tips.',
      author: 'Sarah Johnson',
      date: 'December 10, 2024',
      image: '📚',
      category: 'Shopping Tips'
    },
    {
      id: 2,
      title: 'The Future of E-commerce',
      excerpt: 'Explore the latest trends shaping the world of online shopping.',
      author: 'Michael Chen',
      date: 'December 8, 2024',
      image: '🔮',
      category: 'Industry News'
    },
    {
      id: 3,
      title: 'How to Care for Your Purchases',
      excerpt: 'Tips and tricks to keep your products in perfect condition for years to come.',
      author: 'Emma Davis',
      date: 'December 5, 2024',
      image: '🛡️',
      category: 'How-to'
    },
    {
      id: 4,
      title: 'Sustainable Shopping Guide',
      excerpt: 'Make environmentally conscious choices without compromising on quality.',
      author: 'Alex Thompson',
      date: 'December 1, 2024',
      image: '♻️',
      category: 'Sustainability'
    },
    {
      id: 5,
      title: 'Holiday Gift Ideas 2024',
      excerpt: 'Find the perfect gifts for your loved ones this holiday season.',
      author: 'Jessica Lee',
      date: 'November 28, 2024',
      image: '🎁',
      category: 'Gifting'
    },
    {
      id: 6,
      title: 'Understanding Product Reviews',
      excerpt: 'What real customer reviews tell us and how to read between the lines.',
      author: 'David Wilson',
      date: 'November 25, 2024',
      image: '⭐',
      category: 'Customer Insights'
    }
  ]

  const categories = ['All', 'Shopping Tips', 'Industry News', 'How-to', 'Sustainability', 'Gifting']

  return (
    <div className="bg-dark-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-dark-300">
            Tips, trends, and insights from the Maris4u team
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              className="px-6 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition ${
                cat === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
              }"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="card lg:flex gap-8 items-center">
            <div className="text-8xl lg:flex-shrink-0 text-center lg:text-left mb-6 lg:mb-0">
              {articles[0].image}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                  Featured
                </span>
                <span className="text-dark-400 text-sm">{articles[0].category}</span>
              </div>
              <h2 className="text-3xl font-bold mb-3">{articles[0].title}</h2>
              <p className="text-dark-300 mb-6">{articles[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-dark-400 mb-6">
                <div className="flex items-center gap-1">
                  <FiUser size={16} />
                  {articles[0].author}
                </div>
                <div className="flex items-center gap-1">
                  <FiCalendar size={16} />
                  {articles[0].date}
                </div>
              </div>
              <a href="#" className="text-blue-500 font-semibold inline-flex items-center hover:gap-2 transition-all">
                Read Article
                <FiArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map(article => (
              <div key={article.id} className="card cursor-pointer group hover:border-blue-500">
                <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform">
                  {article.image}
                </div>
                <span className="inline-block px-3 py-1 bg-dark-700 text-dark-300 text-xs font-semibold rounded mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-500 transition">
                  {article.title}
                </h3>
                <p className="text-dark-400 text-sm mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-dark-400 mb-4">
                  <div className="flex items-center gap-1">
                    <FiUser size={14} />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <FiCalendar size={14} />
                    {article.date}
                  </div>
                </div>
                <a href="#" className="text-blue-500 text-sm font-semibold inline-flex items-center hover:gap-1 transition-all">
                  Read More
                  <FiArrowRight size={14} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="px-4 py-2 rounded bg-dark-800 hover:bg-dark-700">Previous</button>
          <button className="px-4 py-2 rounded bg-blue-600">1</button>
          <button className="px-4 py-2 rounded bg-dark-800 hover:bg-dark-700">2</button>
          <button className="px-4 py-2 rounded bg-dark-800 hover:bg-dark-700">3</button>
          <button className="px-4 py-2 rounded bg-dark-800 hover:bg-dark-700">Next</button>
        </div>
      </div>
    </div>
  )
}
