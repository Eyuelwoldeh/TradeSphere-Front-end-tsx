export const metadata = {
  title: "TradeSphere - Global Trade Marketplace",
  description: "Connect importers and exporters worldwide",
};

import Link from "next/link";

const categories = [
  "Coffee", "Tea", "Cocoa", "Spices", "Grains", "Rice", 
  "Wheat", "Corn", "Soybeans", "Sugar", "Cotton", "Rubber",
  "Timber", "Paper", "Textiles", "Apparel", "Footwear", "Leather",
  "Machinery", "Tools", "Equipment", "Vehicles", "Auto Parts", "Aircraft Parts",
  "Electronics", "Computers", "Semiconductors", "Telecom", "Medical Devices", "Lab Equipment",
  "Chemicals", "Plastics", "Pharmaceuticals", "Cosmetics", "Fertilizers", "Pesticides",
  "Metals", "Steel", "Aluminum", "Copper", "Gold", "Silver",
  "Oil & Gas", "Coal", "Minerals", "Diamonds", "Gemstones", "Stone",
  "Furniture", "Building Materials", "Ceramics", "Glass", "Packaging", "Labels"
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Trade Globally
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-600">
            Connect with verified buyers and sellers across 195 countries. 
            Browse {categories.length}+ categories of products and commodities.
          </p>
          <div className="flex gap-4">
            <Link
              href="/signup"
              className="px-8 py-3 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 transition-colors"
            >
              Get Started
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
              <div className="text-4xl font-bold text-gray-900">10,000+</div>
              <div className="text-gray-600 mt-2">Active Traders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">{categories.length}+</div>
              <div className="text-gray-600 mt-2">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">195</div>
              <div className="text-gray-600 mt-2">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Browse by Category</h2>
          <p className="text-gray-600 mb-10">Find the products you're looking for</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-4 bg-white border border-gray-200 rounded hover:border-gray-400 hover:shadow-sm transition-all text-center"
              >
                <div className="font-medium text-gray-900 text-sm">{category}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-bold text-gray-200 mb-4">01</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Profile</h3>
              <p className="text-gray-600">
                Sign up and specify whether you're an importer or exporter. Select your trade categories and location.
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold text-gray-200 mb-4">02</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Browse & Connect</h3>
              <p className="text-gray-600">
                Search through verified listings. Connect directly with potential trade partners in your industry.
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold text-gray-200 mb-4">03</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Close Deals</h3>
              <p className="text-gray-600">
                Negotiate terms, manage contracts, and execute trades securely within the platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Start Trading Today</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of importers and exporters using TradeSphere
          </p>
          <Link
            href="/signup"
            className="inline-block px-10 py-4 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 transition-colors text-lg"
          >
            Create Free Account
          </Link>
        </div>
      </div>
    </div>
  );
}
