import { useState } from 'react'
import { FiUser, FiHeart, FiSettings, FiLogOut } from 'react-icons/fi'

export default function Account() {
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'orders', label: 'Orders', icon: FiHeart },
    { id: 'settings', label: 'Settings', icon: FiSettings }
  ]

  return (
    <div className="bg-dark-950 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Account</h1>
          <p className="text-dark-400">Welcome back, John Doe</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {tabs.map(tab => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-dark-300 hover:bg-dark-800'
                    }`}
                  >
                    <Icon size={20} />
                    {tab.label}
                  </button>
                )
              })}
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-dark-800 transition">
                <FiLogOut size={20} />
                Logout
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="card space-y-6">
                <h2 className="text-2xl font-bold">Profile Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="input-field"
                  />
                </div>

                <button className="btn-primary">Save Changes</button>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="card space-y-4">
                <h2 className="text-2xl font-bold mb-6">Order History</h2>

                <div className="space-y-3">
                  {[1, 2, 3].map(order => (
                    <div
                      key={order}
                      className="flex items-center justify-between p-4 bg-dark-900 rounded-lg border border-dark-700 hover:border-dark-600 transition"
                    >
                      <div>
                        <h3 className="font-semibold">Order #123456{order}</h3>
                        <p className="text-sm text-dark-400">
                          Placed on December {order}, 2024
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-blue-500">$299.99</p>
                        <p className="text-sm text-green-500">Delivered</p>
                      </div>
                    </div>
                  ))}
                </div>

                {[1, 2, 3].length === 0 && (
                  <p className="text-dark-400">No orders yet</p>
                )}
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="card space-y-6">
                <h2 className="text-2xl font-bold">Account Settings</h2>

                {/* Change Password */}
                <div className="pb-6 border-b border-dark-700">
                  <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Current Password</label>
                      <input
                        type="password"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">New Password</label>
                      <input
                        type="password"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Confirm Password</label>
                      <input
                        type="password"
                        className="input-field"
                      />
                    </div>
                    <button className="btn-primary">Update Password</button>
                  </div>
                </div>

                {/* Notifications */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4"
                      />
                      <span className="ml-3 text-dark-300">Email me about new products</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4"
                      />
                      <span className="ml-3 text-dark-300">Notify me about order updates</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                      />
                      <span className="ml-3 text-dark-300">Marketing emails</span>
                    </label>
                  </div>
                  <button className="btn-primary mt-4">Save Preferences</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
