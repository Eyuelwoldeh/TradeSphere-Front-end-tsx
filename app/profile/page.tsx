export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Profile
          </h1>
          <p className="text-xl text-gray-600">
            Manage your account, view your trades, and update your settings
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Username</label>
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900">
                demo_user
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900">
                demo@tradesphere.com
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Account Type</label>
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900">
                Pilot User
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-gray-900 bg-gray-50 p-4 rounded">
              <div className="text-gray-900 font-medium">Message sent to seller</div>
              <div className="text-sm text-gray-600 mt-1">2 hours ago</div>
            </div>
            <div className="border-l-4 border-gray-900 bg-gray-50 p-4 rounded">
              <div className="text-gray-900 font-medium">Viewed Electronics category</div>
              <div className="text-sm text-gray-600 mt-1">5 hours ago</div>
            </div>
            <div className="border-l-4 border-gray-900 bg-gray-50 p-4 rounded">
              <div className="text-gray-900 font-medium">Profile updated</div>
              <div className="text-sm text-gray-600 mt-1">1 day ago</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600 mt-1">Messages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-600 mt-1">Active Trades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">8</div>
              <div className="text-sm text-gray-600 mt-1">Connections</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
