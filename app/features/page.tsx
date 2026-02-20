"use client";
import Illustration from "@/public/images/page-illustration.svg";

import { 
  FaShieldAlt,
  FaComments, 
  FaDatabase,
  FaTachometerAlt,
  FaArrowRight,
  FaCheck
} from "react-icons/fa";

export default function FeaturesPage() {
  const features = [
    {
      icon: <FaShieldAlt className="text-indigo-400 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "Secure Accounts",
      description: "Your data is protected with secure authentication.",
      benefits: [
        "Protected login system for all users",
        "Different permissions for buyers and sellers",
        "Secure password storage",
        "Stay logged in across sessions"
      ],
      link: "/signin",
      linkText: "Sign In",
      stats: [
        { value: "100+", label: "Active Users" },
        { value: "Secure", label: "Login" }
      ]
    },
    {
      icon: <FaComments className="text-indigo-400 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "Direct Messaging",
      description: "Chat with buyers and sellers in real-time.",
      benefits: [
        "Send messages to any user on the platform",
        "All conversations saved automatically",
        "See your full chat history",
        "Easy back-and-forth negotiations"
      ],
      link: "/signin",
      linkText: "Start Chatting",
      stats: [
        { value: "Instant", label: "Messages" },
        { value: "Saved", label: "History" }
      ]
    },
    {
      icon: <FaTachometerAlt className="text-indigo-400 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "Fast & Reliable",
      description: "Quick loading pages and instant search results.",
      benefits: [
        "Pages load 50% faster than average",
        "Search results appear instantly",
        "Smooth navigation throughout site",
        "Works reliably even with many users"
      ],
      link: "/signup",
      linkText: "Try It Now",
      stats: [
        { value: "50%", label: "Faster" },
        { value: "Instant", label: "Search" }
      ]
    },
    {
      icon: <FaDatabase className="text-indigo-400 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "Browse & Search",
      description: "Find exactly what you're looking for quickly.",
      benefits: [
        "Search across 8 product categories",
        "Filter results by your preferences",
        "View detailed product listings",
        "Contact sellers directly from listings"
      ],
      link: "/signup",
      linkText: "Start Browsing",
      stats: [
        { value: "8", label: "Categories" },
        { value: "Easy", label: "Search" }
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-5xl font-bold text-transparent md:text-6xl mb-6">
            Everything You Need to Trade
          </h1>
          <p className="text-xl text-indigo-200/75 leading-relaxed">
            Simple, secure tools to connect with traders, manage deals, and grow your business.
            Currently in pilot phase with 100+ active users.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 mb-24 max-w-4xl mx-auto">
          {[
            { value: "100+", label: "Pilot Users" },
            { value: "50%", label: "Faster with Redis" },
            { value: "JWT", label: "Authentication" },
            { value: "MVP", label: "Phase" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
              <div className="text-3xl font-bold text-indigo-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:border-indigo-500/30"
              data-aos="fade-up"
              data-aos-delay={200 * index}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3">{feature.title}</h2>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FaCheck className="text-indigo-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-400">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      {feature.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xl font-bold text-indigo-400">{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href={feature.link}
                      className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group"
                    >
                      {feature.linkText}
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-indigo-400/20 backdrop-blur-sm border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Join the TradeSphere Pilot Program</h3>
            <p className="text-gray-300 mb-6">Be part of our MVP testing phase and help shape the future of the platform.</p>
            <a 
              href="/signup" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
            >
              Request Access
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}