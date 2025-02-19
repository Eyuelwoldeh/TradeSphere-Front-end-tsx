"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserCircle, Building2, MapPin, Mail, Phone, LogOut, Edit, Save, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Settings, Lock, Activity, Shield } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: "personal", label: "Personal", icon: UserCircle },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "security", label: "Security & Privacy", icon: Shield },
    { id: "activity", label: "Activity", icon: Activity },
  ];
  const [selectedTab, setSelectedTab] = useState("personal");

  const handleSignOut = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  return (

    <section className="min-h-screen bg-gradient-to-b">
      {/* Sidebar */}
      <aside className="h-screen w-64 p-6 border-r border-gray-700 bg-transparent">
        <h2 className="text-2xl font-semibold text-white mb-6">Profile</h2>
        <nav className="space-y-2">
          {menuItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedTab(id)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left transition-all ${
                selectedTab === id
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </button>
          ))}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-left text-gray-300 hover:bg-red-600 hover:text-white transition-all"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </nav>
      </aside>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Your Profile
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left Column - Profile Picture & Quick Actions */}
          <div className="space-y-6">
            <div className="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="h-32 w-32 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center">
                    <UserCircle className="h-24 w-24 text-gray-200" />
                  </div>
                  <button className="absolute bottom-0 right-0 rounded-full bg-indigo-500 p-2 text-white hover:bg-indigo-600">
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-white">John Doe</h2>
                  <p className="text-indigo-200/65">Senior Importer</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="w-full rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-4 py-3 text-white hover:from-red-600 hover:to-red-700 flex items-center justify-center gap-2"
            >
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </div>
          {/* Modal for Confirmation */}
          <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
            <Dialog.Panel className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
              <Dialog.Title className="text-lg font-semibold text-gray-900">Sign Out</Dialog.Title>
              <Dialog.Description className="text-sm text-gray-600 mt-2">
                Are you sure you want to sign out? You will need to log in again to access your account.
              </Dialog.Description>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);  // Close the modal first
                    setTimeout(handleSignOut, 300); // Delay sign out slightly to prevent instant navigation
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Sign Out
                </button>
              </div>
            </Dialog.Panel>
          </Dialog>


          {/* Middle Column - Personal Information */}
          <div className="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm md:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Personal Information</h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4" />
                    Save
                  </>
                ) : (
                  <>
                    <Edit className="h-4 w-4" />
                    Edit
                  </>
                )}
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-indigo-200/65">Company</label>
                  <div className="flex items-center gap-3 rounded-lg bg-gray-700/30 p-3">
                    <Building2 className="h-5 w-5 text-indigo-400" />
                    <input
                      type="text"
                      className="bg-transparent text-white focus:outline-none disabled:cursor-not-allowed"
                      value="Global Trade Corp"
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-indigo-200/65">Location</label>
                  <div className="flex items-center gap-3 rounded-lg bg-gray-700/30 p-3">
                    <MapPin className="h-5 w-5 text-indigo-400" />
                    <input
                      type="text"
                      className="bg-transparent text-white focus:outline-none disabled:cursor-not-allowed"
                      value="New York, USA"
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-indigo-200/65">Email</label>
                  <div className="flex items-center gap-3 rounded-lg bg-gray-700/30 p-3">
                    <Mail className="h-5 w-5 text-indigo-400" />
                    <input
                      type="email"
                      className="bg-transparent text-white focus:outline-none disabled:cursor-not-allowed"
                      value="john.doe@globaltrade.com"
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-indigo-200/65">Phone</label>
                  <div className="flex items-center gap-3 rounded-lg bg-gray-700/30 p-3">
                    <Phone className="h-5 w-5 text-indigo-400" />
                    <input
                      type="tel"
                      className="bg-transparent text-white focus:outline-none disabled:cursor-not-allowed"
                      value="+1 (555) 123-4567"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-indigo-200/65">Trade Interests</label>
                <div className="flex flex-wrap gap-2">
                  {['Coffee', 'Tea', 'Machinery'].map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full bg-indigo-500/20 px-4 py-1 text-sm text-indigo-200"
                    >
                      {interest}
                      {isEditing && (
                        <button className="ml-2 text-indigo-300 hover:text-indigo-100">
                          <X className="h-3 w-3 inline" />
                        </button>
                      )}
                    </span>
                  ))}
                  {isEditing && (
                    <button className="rounded-full bg-indigo-500 px-4 py-1 text-sm text-white hover:bg-indigo-600">
                      + Add Interest
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;