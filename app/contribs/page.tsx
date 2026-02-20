export default function ContribsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-5xl font-bold text-transparent mb-4">
            About TradeSphere
          </h1>
          <p className="text-xl text-indigo-200/75">
            A student project to connect buyers and sellers
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">The Project</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            TradeSphere is an MVP trading platform developed as a full-stack project. 
            It allows users to create accounts, browse product categories, message other traders, 
            and manage their trades in a secure environment.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Currently in pilot phase with 100+ active users testing the core functionality 
            including authentication, messaging, and trade management features.
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">✓</span>
              <span>Secure user authentication and account management</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">✓</span>
              <span>Real-time messaging between users</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">✓</span>
              <span>Browse and search across 8 product categories</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">✓</span>
              <span>Fast performance with optimized caching</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 mt-1">✓</span>
              <span>Clean, intuitive user interface</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Current Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
              <span className="text-gray-300">Pilot Users</span>
              <span className="text-indigo-400 font-semibold">100+</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
              <span className="text-gray-300">Product Categories</span>
              <span className="text-indigo-400 font-semibold">8</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
              <span className="text-gray-300">Performance Improvement</span>
              <span className="text-indigo-400 font-semibold">50% faster</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
              <span className="text-gray-300">Phase</span>
              <span className="text-indigo-400 font-semibold">MVP Testing</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/signup"
            className="inline-block px-8 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors font-medium"
          >
            Join the Pilot Program
          </a>
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
