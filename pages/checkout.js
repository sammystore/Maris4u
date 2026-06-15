import { useState } from 'react'
import Link from 'next/link'

export default function Checkout() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Billing
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    // Shipping
    sameAsShipping: true,
    // Payment
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      console.log('Order placed:', formData)
      alert('Order placed successfully!')
    }
  }

  const steps = ['Billing', 'Shipping', 'Payment']

  return (
    <div className="bg-dark-950 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {steps.map((stepName, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step > index
                      ? 'bg-blue-600 text-white'
                      : step === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-dark-700 text-dark-300'
                  }`}
                >
                  {index + 1}
                </div>
                <span className="ml-3 font-semibold hidden sm:inline">{stepName}</span>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 w-8 sm:w-16 mx-4 ${
                      step > index ? 'bg-blue-600' : 'bg-dark-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card space-y-6">
              {/* Billing Address */}
              {step === 1 && (
                <>
                  <h2 className="text-2xl font-bold">Billing Address</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Zip Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Shipping Address */}
              {step === 2 && (
                <>
                  <h2 className="text-2xl font-bold">Shipping Address</h2>
                  <p className="text-dark-400">Shipping information will go here</p>
                </>
              )}

              {/* Payment */}
              {step === 3 && (
                <>
                  <h2 className="text-2xl font-bold">Payment Information</h2>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Name on Card</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="123"
                        maxLength="4"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-6 border-t border-dark-700">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn-secondary flex-1"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="btn-primary flex-1"
                >
                  {step === 3 ? 'Place Order' : 'Continue'}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="card sticky top-20 space-y-4">
              <h2 className="text-2xl font-bold">Order Summary</h2>

              <div className="space-y-3 border-b border-dark-700 pb-4">
                <div className="flex justify-between text-dark-300">
                  <span>Subtotal</span>
                  <span>$498.00</span>
                </div>
                <div className="flex justify-between text-dark-300">
                  <span>Tax</span>
                  <span>$49.80</span>
                </div>
                <div className="flex justify-between text-dark-300">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-blue-500">$547.80</span>
              </div>

              <Link href="/cart" className="text-blue-500 text-sm hover:text-blue-400">
                ← Edit Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
