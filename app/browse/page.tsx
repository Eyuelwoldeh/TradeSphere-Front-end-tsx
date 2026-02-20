"use client";
import { useState } from "react";
import Link from "next/link";

const sampleListings = [
  {
    id: 1,
    category: "Electronics",
    title: "Samsung 4K Smart TV - 55 inch",
    seller: "TechSupplier Inc.",
    location: "Los Angeles, CA",
    price: "$1,200",
    description: "Brand new, wholesale pricing for bulk orders",
    image: "📺"
  },
  {
    id: 2,
    category: "Textiles",
    title: "Premium Cotton Fabric Rolls",
    seller: "Global Textiles Co.",
    location: "New York, NY",
    price: "$450/roll",
    description: "High quality 100% cotton, 50 yard rolls",
    image: "🧵"
  },
  {
    id: 3,
    category: "Machinery",
    title: "Industrial CNC Machine",
    seller: "MachineWorks Ltd.",
    location: "Chicago, IL",
    price: "$15,000",
    description: "Certified pre-owned, excellent condition",
    image: "⚙️"
  },
  {
    id: 4,
    category: "Food & Agriculture",
    title: "Organic Coffee Beans - 500kg",
    seller: "Farm Direct Imports",
    location: "Seattle, WA",
    price: "$3,500",
    description: "Direct from farms, fair trade certified",
    image: "☕"
  },
  {
    id: 5,
    category: "Building Materials",
    title: "Steel I-Beams Bulk Order",
    seller: "Construction Supply Co.",
    location: "Houston, TX",
    price: "$850/ton",
    description: "Various sizes available, meets all standards",
    image: "🏗️"
  },
  {
    id: 6,
    category: "Consumer Goods",
    title: "Designer Handbags Wholesale",
    seller: "Fashion Distributors",
    location: "Miami, FL",
    price: "$75 each",
    description: "Minimum order 50 units, latest styles",
    image: "👜"
  },
  {
    id: 7,
    category: "Electronics",
    title: "Laptop Computers - Business Grade",
    seller: "Tech Solutions LLC",
    location: "San Francisco, CA",
    price: "$650 each",
    description: "Bulk pricing for 20+ units",
    image: "💻"
  },
  {
    id: 8,
    category: "Metals",
    title: "Aluminum Sheets & Coils",
    seller: "Metro Metals Inc.",
    location: "Detroit, MI",
    price: "$2.50/lb",
    description: "Industrial grade, custom cutting available",
    image: "🔩"
  },
  {
    id: 9,
    category: "Chemicals",
    title: "Industrial Cleaning Supplies",
    seller: "ChemSupply Direct",
    location: "Atlanta, GA",
    price: "$200/case",
    description: "Eco-friendly formulas, bulk discounts",
    image: "🧪"
  },
  {
    id: 10,
    category: "Machinery",
    title: "Commercial Kitchen Equipment",
    seller: "Restaurant Supply Pro",
    location: "Dallas, TX",
    price: "$5,000",
    description: "Complete setup, installation available",
    image: "🍳"
  },
  {
    id: 11,
    category: "Textiles",
    title: "Denim Jeans - Wholesale Lot",
    seller: "Apparel Warehouse",
    location: "Phoenix, AZ",
    price: "$12/unit",
    description: "Mixed sizes, 500 unit minimum",
    image: "👖"
  },
  {
    id: 12,
    category: "Food & Agriculture",
    title: "Fresh Produce - Weekly Delivery",
    seller: "Valley Fresh Farms",
    location: "Portland, OR",
    price: "$800/week",
    description: "Restaurant quality, farm to table",
    image: "🥬"
  }
];

const categories = [
  "All Categories",
  "Electronics",
  "Textiles",
  "Machinery",
  "Chemicals",
  "Food & Agriculture",
  "Consumer Goods",
  "Building Materials",
  "Metals"
];

export default function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredListings = sampleListings.filter(listing => {
    const matchesCategory = selectedCategory === "All Categories" || listing.category === selectedCategory;
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Browse Listings</h1>
          <p className="text-gray-600">Explore products from verified sellers</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-gray-600">
          Showing {filteredListings.length} {filteredListings.length === 1 ? 'listing' : 'listings'}
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center">
                <span className="text-6xl">{listing.image}</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full mb-3">
                  {listing.category}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {listing.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {listing.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{listing.price}</span>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mb-4">
                  <div className="text-sm text-gray-600 mb-1">
                    <strong>Seller:</strong> {listing.seller}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Location:</strong> {listing.location}
                  </div>
                </div>
                
                <Link
                  href="/signin"
                  className="block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Contact Seller
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">No listings found matching your criteria</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
              }}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Want to list your products?</h3>
          <p className="text-indigo-100 mb-6">Join 100+ sellers already on TradeSphere</p>
          <Link
            href="/signup"
            className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Create Seller Account
          </Link>
        </div>
      </div>
    </div>
  );
}
