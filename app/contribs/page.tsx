"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const metadata = {
    title: "How to Contribute?",
    description: "Learn how you can contribute to our project and make a difference.",
  };
  
  export default function ContributePage() {
    return (
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            How to Contribute?
          </h1>
          <p className="mt-4 text-gray-300">
            We welcome contributions from everyone! Here's how you can help:
          </p>
        </div>
  
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gray-800 p-6">
            <h2 className="text-xl font-semibold text-indigo-400">
              🛠️ Improve the Code
            </h2>
            <p className="mt-2 text-gray-300">
              If you're a developer, check out our{" "}
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                GitHub repository
              </a>{" "}
              and start contributing.
            </p>
          </div>
  
          <div className="rounded-lg bg-gray-800 p-6">
            <h2 className="text-xl font-semibold text-indigo-400">
              📢 Spread the Word
            </h2>
            <p className="mt-2 text-gray-300">
              Share our project with your friends and network to help us grow.
            </p>
          </div>
  
          <div className="rounded-lg bg-gray-800 p-6">
            <h2 className="text-xl font-semibold text-indigo-400">
              📝 Suggest Features
            </h2>
            <p className="mt-2 text-gray-300">
              Have ideas? Create a{" "}
              <a
                href="https://github.com/your-repo/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                GitHub issue
              </a>{" "}
              to let us know!
            </p>
          </div>
  
          <div className="rounded-lg bg-gray-800 p-6">
            <h2 className="text-xl font-semibold text-indigo-400">
              💰 Support Us
            </h2>
            <p className="mt-2 text-gray-300">
              If you like our work, consider{" "}
              <a
                href="https://patreon.com/your-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                supporting us on Patreon
              </a>.
            </p>
          </div>
        </div>
      </section>
    );
  }  