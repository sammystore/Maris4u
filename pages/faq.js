import { useState } from 'react'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'

export default function FAQ() {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const faqs = [
    {
      id: 1,
      category: 'Shipping & Delivery',
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 business day delivery. Overnight shipping is also an option for urgent orders.'
    },
    {
      id: 2,
      category: 'Shipping & Delivery',
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. International shipping times vary depending on the destination, typically ranging from 10-21 business days.'
    },
    {
      id: 3,
      category: 'Returns & Refunds',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy on all items. Products must be unused and in original packaging. Once received, refunds are processed within 5-7 business days.'
    },
    {
      id: 4,
      category: 'Returns & Refunds',
      question: 'How do I initiate a return?',
      answer: 'To start a return, go to your account, find the order, and click "Return Item". Follow the instructions to print your prepaid shipping label and send the item back to us.'
    },
    {
      id: 5,
      category: 'Orders & Purchases',
      question: 'Can I modify my order after placing it?',
      answer: 'Orders can be modified within 2 hours of placement. Contact our customer service team immediately to make changes. After 2 hours, the order enters our fulfillment process and cannot be modified.'
    },
    {
      id: 6,
      category: 'Orders & Purchases',
      question: 'Do you offer gift wrapping?',
      answer: 'Yes! We offer complimentary gift wrapping on all orders. Select the gift wrap option at checkout and add your personalized gift message.'
    },
    {
      id: 7,
      category: 'Payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers.'
    },
    {
      id: 8,
      category: 'Payment',
      question: 'Is my payment information secure?',
      answer: 'Yes, we use industry-standard 256-bit SSL encryption to protect all payment information. We do not store credit card details on our servers.'
    },
    {
      id: 9,
      category: 'Account',
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page, enter your email, and we\'ll send you a reset link. Click the link in the email to create a new password.'
    },
    {
      id: 10,
      category: 'Account',
      question: 'Can I have multiple accounts?',
      answer: 'Each customer can only have one active account per email address. If you need a new account, please use a different email address.'
    }
  ]

  const categories = ['All', 'Shipping & Delivery', 'Returns & Refunds', 'Orders & Purchases', 'Payment', 'Account']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filtered = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  return (
    <div className="bg-dark-950 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-dark-300">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-4 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filtered.map(faq => (
            <div key={faq.id} className="card">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex items-start justify-between gap-4 text-left"
              >
                <div className="flex-1">
                  <p className="text-sm text-blue-500 font-semibold mb-1">{faq.category}</p>
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </div>
                <FiChevronDown
                  size={24}
                  className={`flex-shrink-0 transition-transform ${
                    openItems[faq.id] ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems[faq.id] && (
                <div className="mt-4 pt-4 border-t border-dark-700">
                  <p className="text-dark-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-lg text-opacity-90 mb-6">
            Our customer support team is here to help you
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
