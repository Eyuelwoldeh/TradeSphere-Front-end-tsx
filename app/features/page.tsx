export default function FeaturesPage() {
  const features = [
    {
      title: "Secure Accounts",
      description: "Your data is protected with secure authentication.",
      benefits: [
        "Protected login system for all users",
        "Different permissions for buyers and sellers",
        "Secure password storage",
        "Stay logged in across sessions"
      ]
    },
    {
      title: "Direct Messaging",
      description: "Chat with buyers and sellers in real-time.",
      benefits: [
        "Send messages to any user on the platform",
        "All conversations saved automatically",
        "See your full chat history",
        "Easy back-and-forth negotiations"
      ]
    },
    {
      title: "Fast & Reliable",
      description: "Quick loading pages and instant search results.",
      benefits: [
        "Pages load 50% faster than average",
        "Search results appear instantly",
        "Smooth navigation throughout site",
        "Works reliably even with many users"
      ]
    },
    {
      title: "Browse & Search",
      description: "Find exactly what you're looking for quickly.",
      benefits: [
        "Search across 8 product categories",
        "Filter results by your preferences",
        "View detailed product listings",
        "Contact sellers directly from listings"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Platform Features
          </h1>
          <p className="text-xl text-gray-600">
            Simple, secure tools to connect with traders and manage deals.
            Currently in pilot phase with 100+ active users.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
            <div className="text-sm text-gray-600">Pilot Users</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-gray-900 mb-1">50%</div>
            <div className="text-sm text-gray-600">Faster</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-gray-900 mb-1">MVP</div>
            <div className="text-sm text-gray-600">Phase</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h2>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <ul className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-white rounded-lg p-12 text-center border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Join the Pilot Program</h3>
          <p className="text-xl text-gray-600 mb-8">
            Be part of our MVP testing phase and help shape the platform
          </p>
          <a 
            href="/signup" 
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors font-medium"
          >
            Request Access
          </a>
        </div>
      </div>
    </div>
  );
}
