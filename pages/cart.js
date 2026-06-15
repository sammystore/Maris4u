import Link from 'next/link'
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi'

export default function Cart() {
  // Sample cart data
  const cartItems = [
    { id: 1, name: 'Premium Headphones', price: 299, quantity: 1, image: '🎧' },
    { id: 2, name: 'Wireless Speaker', price: 199, quantity: 2, image: '🔊' }
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + tax + shipping

  return (
    <div className="bg-dark-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="card flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <div className="text-5xl mr-4">{item.image}</div>
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-dark-400">${item.price}</p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mr-6">
                      <button className="p-1 hover:bg-dark-700 rounded">
                        <FiMinus size={18} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button className="p-1 hover:bg-dark-700 rounded">
                        <FiPlus size={18} />
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="min-w-24 text-right mr-4">
                      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>

                    {/* Remove Button */}
                    <button className="p-2 hover:bg-red-600/20 text-red-500 rounded transition">
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <Link href="/products" className="inline-block mt-6 text-blue-500 hover:text-blue-400">
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div>
              <div className="card sticky top-20 space-y-4">
                <h2 className="text-2xl font-bold">Order Summary</h2>

                <div className="space-y-3 border-b border-dark-700 pb-4">
                  <div className="flex justify-between text-dark-300">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-dark-300">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-dark-300">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                </div>

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-blue-500">${total.toFixed(2)}</span>
                </div>

                {shipping > 0 && (
                  <p className="text-sm text-dark-400">
                    Free shipping on orders over $100
                  </p>
                )}

                <Link href="/checkout" className="btn-primary block text-center w-full">
                  Proceed to Checkout
                </Link>

                <button className="btn-secondary w-full">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl text-dark-400 mb-4">Your cart is empty</p>
            <Link href="/products" className="btn-primary inline-block">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
