export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How TradeSphere Works
          </h1>
          <p className="text-xl text-gray-600">
            Simple steps to start trading
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-4xl font-bold text-indigo-600">1</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Create Your Account</h2>
              <p className="text-gray-600 text-lg mb-4">
                Sign up in minutes with just your email. Choose whether you're a buyer, seller, or both. 
                Set up your profile with your business information and trading preferences.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-600">✓ Free to join</div>
                <div className="text-sm text-gray-600">✓ Secure authentication</div>
                <div className="text-sm text-gray-600">✓ Quick setup process</div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-4xl font-bold text-indigo-600">2</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Browse & Search</h2>
              <p className="text-gray-600 text-lg mb-4">
                Explore our marketplace with 8 product categories. Use filters to find exactly what you need. 
                View detailed listings with seller information, pricing, and product descriptions.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-600">✓ 12+ sample listings</div>
                <div className="text-sm text-gray-600">✓ Filter by category</div>
                <div className="text-sm text-gray-600">✓ Search functionality</div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-4xl font-bold text-indigo-600">3</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Connect & Message</h2>
              <p className="text-gray-600 text-lg mb-4">
                Contact sellers directly through our messaging system. Negotiate prices, discuss shipping, 
                and clarify product details. All conversations are saved for your reference.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-600">✓ Direct messaging</div>
                <div className="text-sm text-gray-600">✓ Saved chat history</div>
                <div className="text-sm text-gray-600">✓ Fast responses</div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-4xl font-bold text-indigo-600">4</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Complete Your Trade</h2>
              <p className="text-gray-600 text-lg mb-4">
                Finalize the details of your trade. Track your ongoing transactions in your dashboard. 
                Access your complete trade history anytime.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-600">✓ Trade tracking</div>
                <div className="text-sm text-gray-600">✓ Transaction history</div>
                <div className="text-sm text-gray-600">✓ Secure platform</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to get started?</h3>
          <p className="text-indigo-100 mb-6">Join 100+ pilot users already on the platform</p>
          <a
            href="/signup"
            className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Create Free Account
          </a>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <a href="/browse" className="p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-all">
            <h4 className="font-semibold text-gray-900 mb-2">Browse Listings</h4>
            <p className="text-sm text-gray-600">See what's available →</p>
          </a>
          <a href="/features" className="p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-all">
            <h4 className="font-semibold text-gray-900 mb-2">View Features</h4>
            <p className="text-sm text-gray-600">Learn more →</p>
          </a>
          <a href="/contribs" className="p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-all">
            <h4 className="font-semibold text-gray-900 mb-2">About Us</h4>
            <p className="text-sm text-gray-600">Our story →</p>
          </a>
        </div>
      </div>
    </div>
  );
}
