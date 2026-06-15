import Link from 'next/link'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Maris4u</h3>
            <p className="text-dark-400 text-sm">
              Your premium e-commerce destination for quality products and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-dark-400">
              <li><Link href="/products" className="hover:text-blue-500 transition">Products</Link></li>
              <li><Link href="/about" className="hover:text-blue-500 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-blue-500 transition">Blog</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-dark-400">
              <li><Link href="/faq" className="hover:text-blue-500 transition">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-blue-500 transition">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-blue-500 transition">Returns</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-500 transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-400 hover:text-blue-500 transition">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-dark-400 hover:text-blue-500 transition">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-dark-400 hover:text-blue-500 transition">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-dark-400 hover:text-blue-500 transition">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-400 text-sm">
              &copy; 2024 Maris4u. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-dark-400">
              <Link href="/terms" className="hover:text-blue-500 transition">Terms of Service</Link>
              <Link href="/privacy" className="hover:text-blue-500 transition">Privacy Policy</Link>
              <Link href="/sitemap" className="hover:text-blue-500 transition">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
