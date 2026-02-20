export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-5xl font-bold text-transparent mb-4">
            Your Profile
          </h1>
          <p className="text-xl text-indigo-200/75">
            Manage your account, view your trades, and update your settings
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Account Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300">
                demo_user
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300">
                demo@tradesphere.com
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Account Type</label>
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300">
                Pilot User
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-500 bg-gray-900/50 p-4 rounded">
              <div className="text-gray-300 font-medium">Message sent to seller</div>
              <div className="text-sm text-gray-500 mt-1">2 hours ago</div>
            </div>
            <div className="border-l-4 border-indigo-500 bg-gray-900/50 p-4 rounded">
              <div className="text-gray-300 font-medium">Viewed Electronics category</div>
              <div className="text-sm text-gray-500 mt-1">5 hours ago</div>
            </div>
            <div className="border-l-4 border-indigo-500 bg-gray-900/50 p-4 rounded">
              <div className="text-gray-300 font-medium">Profile updated</div>
              <div className="text-sm text-gray-500 mt-1">1 day ago</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Stats</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">12</div>
              <div className="text-sm text-gray-400 mt-1">Messages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">5</div>
              <div className="text-sm text-gray-400 mt-1">Active Trades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">8</div>
              <div className="text-sm text-gray-400 mt-1">Connections</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
