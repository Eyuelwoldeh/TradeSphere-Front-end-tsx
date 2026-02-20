export const metadata = {
  title: "TradeSphere - Trading Platform MVP",
  description: "Secure trading platform connecting buyers and sellers",
};

import Link from "next/link";

const categories = [
  "Electronics", "Textiles", "Machinery", "Chemicals", 
  "Food & Agriculture", "Consumer Goods", "Building Materials", "Metals"
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Secure Trade Platform
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-600">
            Connect with buyers and sellers securely. Message directly, browse listings, and manage your trades.
            Currently in pilot with {categories.length} product categories.
          </p>
          <div className="flex gap-4">
            <Link
              href="/signup"
              className="px-8 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 transition-colors"
            >
              Join Pilot Program
            </Link>
            <Link
              href="/signin"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded font-medium hover:border-gray-400 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600 mt-2">Pilot Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">50%</div>
              <div className="text-gray-600 mt-2">Faster with Redis Cache</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">{categories.length}</div>
              <div className="text-gray-600 mt-2">Product Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What You Can Do</h2>
          <p className="text-gray-600 mb-10">Essential features for trading</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded">
              <div className="font-semibold text-gray-900 mb-2">Browse Listings</div>
              <p className="text-sm text-gray-600">Search products across multiple categories and find what you need</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded">
              <div className="font-semibold text-gray-900 mb-2">Message Traders</div>
              <p className="text-sm text-gray-600">Chat directly with buyers and sellers to negotiate deals</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded">
              <div className="font-semibold text-gray-900 mb-2">Manage Trades</div>
              <p className="text-sm text-gray-600">Track your ongoing trades and transaction history</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded">
              <div className="font-semibold text-gray-900 mb-2">Secure Accounts</div>
              <p className="text-sm text-gray-600">Your data is protected with secure authentication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Product Categories</h2>
          <p className="text-gray-600 mb-10">Browse available trading categories</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="p-4 bg-white border border-gray-200 rounded text-center"
              >
                <div className="font-medium text-gray-900">{category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-bold text-gray-200 mb-4">01</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Account</h3>
              <p className="text-gray-600">
                Sign up quickly and set up your trading profile. Choose whether you're buying or selling.
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold text-gray-200 mb-4">02</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Find Products</h3>
              <p className="text-gray-600">
                Browse through categories to find what you're looking for and contact sellers directly.
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold text-gray-200 mb-4">03</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Deals</h3>
              <p className="text-gray-600">
                Negotiate terms through our messaging system and finalize your trade agreements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join the Pilot Program</h2>
          <p className="text-xl text-gray-600 mb-10">
            Be part of our MVP pilot program and help shape the platform
          </p>
          <Link
            href="/signup"
            className="inline-block px-10 py-4 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 transition-colors text-lg"
          >
            Request Access
          </Link>
        </div>
      </div>
    </div>
  );
}
