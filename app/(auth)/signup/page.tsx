"use client";

import Link from "next/link";
import { useState } from "react";
import { register } from "../../../lib/api/authApi";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("importer"); // Default role
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [tradeInterests, setTradeInterests] = useState<string[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await register(name, email, password, role, company, location, tradeInterests);
      localStorage.setItem("user", JSON.stringify(userData));
      router.push("/user_profile");
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Create an account
            </h1>
            <span className="text-red-500">*</span> indicates required field
          </div>
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your full name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="company">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your company name"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="email">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your work email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-200/65" htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-input w-full"
                  placeholder="Password (at least 10 characters)"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-200/65" htmlFor="role">
                  Role <span className="text-red-500">*</span>
                </label>
                <select
                  id="role"
                  className="form-input w-full"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="importer">Importer</option>
                  <option value="exporter">Exporter</option>
                  <option value="admin"></option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-200/65" htmlFor="location">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  id="location"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-200/65" htmlFor="tradeInterest">
                  Trade Interests (use mouse to drag accross and select multiple)<span className="text-red-500">*</span>
                </label>
                <select
                  multiple
                  id="tradeInterests"
                  className="form-input w-full"
                  onChange={(e) =>
                  setTradeInterests(Array.from(e.target.selectedOptions, (option) => option.value))
                  }
                  >
                    <option value="coffee">Coffee</option>
                    <option value="tea">Tea</option>
                    <option value="machinery">Machinery</option>
                  </select>
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                Register
              </button>
            </div>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {/* Bottom link */}
          <div className="mt-6 text-center text-sm text-indigo-200/65">
            Already have an account?{" "}
            <Link className="font-medium text-indigo-500" href="/signin">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}