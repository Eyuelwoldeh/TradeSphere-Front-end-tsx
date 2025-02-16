"use client";

import { FaCode, FaBullhorn, FaLightbulb, FaHeart } from "react-icons/fa";

export default function ContributePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="text-center" data-aos="fade-up">
        <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
          How to Contribute
        </h1>
        <p className="mt-4 text-xl text-indigo-200/65">
          Help shape the future of trade analytics by contributing to our platform.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Improve the Code */}
        <div
          className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/50 p-6 shadow-lg transition hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaCode className="text-indigo-400 text-4xl" />
          <h2 className="mt-4 text-xl font-semibold text-white">Improve the Code</h2>
          <p className="mt-2 text-gray-300">
            Developers can contribute by refining our{" "}
            <a
              href="https://github.com/Eyuelwoldeh/TradeSphere-Front-end-tsx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              GitHub repository
            </a>
            , fixing issues, and optimizing performance.
          </p>
        </div>

        {/* Spread the Word */}
        <div
          className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/50 p-6 shadow-lg transition hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaBullhorn className="text-indigo-400 text-4xl" />
          <h2 className="mt-4 text-xl font-semibold text-white">Spread the Word</h2>
          <p className="mt-2 text-gray-300">
            Share our project with your network and help us reach a wider audience.
          </p>
        </div>

        {/* Suggest Features */}
        <div
          className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/50 p-6 shadow-lg transition hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <FaLightbulb className="text-indigo-400 text-4xl" />
          <h2 className="mt-4 text-xl font-semibold text-white">Suggest Features</h2>
          <p className="mt-2 text-gray-300">
            Have an idea? Open a{" "}
            <a
              href="https://github.com/Eyuelwoldeh/TradeSphere-Front-end-tsx/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              GitHub issue
            </a>{" "}
            and let us know!
          </p>
        </div>

        {/* Support the Project */}
        <div
          className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/50 p-6 shadow-lg transition hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <FaHeart className="text-indigo-400 text-4xl" />
          <h2 className="mt-4 text-xl font-semibold text-white">Support the Project</h2>
          <p className="mt-2 text-gray-300">
            Love our work? Consider{" "}
            <a
              href="https://patreon.com/Avenis-TradeSphere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              supporting us on Patreon
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}