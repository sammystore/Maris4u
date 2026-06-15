import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-dark-900 border-b border-dark-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold gradient-text">
            Maris4u
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/products" className="hover:text-blue-500 transition">
              Products
            </Link>
            <Link href="/about" className="hover:text-blue-500 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-500 transition">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-blue-500 transition">
              Blog
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 hover:bg-dark-800 rounded-lg transition">
              <FiShoppingCart size={24} />
              <span className="absolute top-1 right-1 bg-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="/account" className="p-2 hover:bg-dark-800 rounded-lg transition">
              <FiUser size={24} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-dark-800 rounded-lg transition"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/products" className="block px-4 py-2 hover:bg-dark-800 rounded transition">
              Products
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-dark-800 rounded transition">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 hover:bg-dark-800 rounded transition">
              Contact
            </Link>
            <Link href="/blog" className="block px-4 py-2 hover:bg-dark-800 rounded transition">
              Blog
            </Link>
            <Link href="/cart" className="block px-4 py-2 hover:bg-dark-800 rounded transition">
              Cart
            </Link>
            <Link href="/account" className="block px-4 py-2 hover:bg-dark-800 rounded transition">
              Account
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
