"use client";
import Illustration from "@/public/images/page-illustration.svg";

import { 
  FaCalculator, 
  FaChartLine, 
  FaComments, 
  FaGlobe, 
  FaFileContract, 
  FaShieldAlt,
  FaArrowRight,
  FaCheck
} from "react-icons/fa";

export default function FeaturesPage() {
  const features = [
    {
      icon: <FaCalculator className="text-indigo-400 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "Advanced Import Cost Analysis",
      description: "Make informed decisions with our comprehensive cost analysis tools.",
      benefits: [
        "Real-time currency conversion and tax calculations",
        "Dynamic duty and tariff estimation based on HS codes",
        "Comparative analysis of shipping routes and carriers",
        "Historical cost tracking and budget forecasting"
      ],
      link: "/cost-calculator",
      linkText: "Access Cost Calculator",
      stats: [
        { value: "98%", label: "Calculation Accuracy" },
        { value: "50+", label: "Countries Supported" }
      ]
    },
    {
      icon: <FaChartLine className="text-indigo-400 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "Predictive Market Intelligence",
      description: "Stay ahead with AI-powered market insights and trend analysis.",
      benefits: [
        "Machine learning-driven demand forecasting",
        "Supply chain disruption predictions",
        "Competitor pricing analysis",
        "Regional market opportunity identification"
      ],
      link: "/market-predictions",
      linkText: "Explore Market Insights",
      stats: [
        { value: "92%", label: "Prediction Accuracy" },
        { value: "24/7", label: "Real-time Updates" }
      ]
    },
    {
      icon: <FaComments className="text-indigo-400 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "Secure Business Communication Hub",
      description: "Connect and collaborate with verified trade partners worldwide.",
      benefits: [
        "End-to-end encrypted messaging",
        "Multi-language translation support",
        "Automated meeting scheduling",
        "Document sharing and e-signatures"
      ],
      link: "/messages",
      linkText: "Start Networking",
      stats: [
        { value: "1M+", label: "Active Users" },
        { value: "100+", label: "Languages" }
      ]
    },
    {
      icon: <FaGlobe className="text-indigo-400 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "Global Trade Analytics Dashboard",
      description: "Visualize and analyze international trade flows in real-time.",
      benefits: [
        "Interactive trade route mapping",
        "Custom data visualization tools",
        "Export/Import trend analysis",
        "Regional market performance metrics"
      ],
      link: "/trade-data",
      linkText: "View Analytics",
      stats: [
        { value: "200+", label: "Countries Tracked" },
        { value: "5M+", label: "Data Points" }
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-5xl font-bold text-transparent md:text-6xl mb-6">
            Enterprise-Grade Trading Solutions
          </h1>
          <p className="text-xl text-indigo-200/75 leading-relaxed">
            Transform your international trade operations with our comprehensive suite of AI-powered tools, 
            secure communication platforms, and real-time analytics designed for modern businesses.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 mb-24 max-w-4xl mx-auto">
          {[
            { value: "$50B+", label: "Trade Volume Processed" },
            { value: "50,000+", label: "Active Companies" },
            { value: "180+", label: "Countries Served" },
            { value: "99.9%", label: "Platform Uptime" }
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
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Trading Operations?</h3>
            <p className="text-gray-300 mb-6">Join thousands of companies already using our platform to scale their international trade.</p>
            <a 
              href="/signup" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
            >
              Get Started Now
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}