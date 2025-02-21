"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserCircle, LogOut } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Settings, Activity, Shield } from "lucide-react";
import { getAuthToken } from "@/lib/auth";
import { useAuth } from "@/lib/api/useAuth";
import { useEffect } from "react";
import axiosInstance from "@/lib/axiosConfig";

// Create content components for each tab


const PersonalContent = ({userData} : {userData: any}) => (
  <div className="p-6">
    <h2 className="text-2xl font-bold text-white mb-4">Personal Information</h2>
    <div className="space-y-4">
      <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-lg font-medium text-indigo-300 mb-2">Profile Details</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm text-gray-400">Full Name</label>
            <p className="text-white">{userData?.name}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-400">Job Title</label>
            <p className="text-white">Senior Importer</p>
          </div>
          <div>
            <label className="block text-sm text-gray-400">Email</label>
            <p className="text-white">{userData?.email}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-400">Phone</label>
            <p className="text-white">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SettingsContent = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold text-white mb-4">Account Settings</h2>
    <div className="space-y-4">
      <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-lg font-medium text-indigo-300 mb-2">Preferences</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white">Dark Mode</p>
              <p className="text-sm text-gray-400">Toggle dark/light theme</p>
            </div>
            <div className="relative inline-block w-12 h-6 rounded-full bg-gray-600">
              <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white">Email Notifications</p>
              <p className="text-sm text-gray-400">Receive email updates</p>
            </div>
            <div className="relative inline-block w-12 h-6 rounded-full bg-indigo-600">
              <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

type SecurityContentProps = {
  onPasswordChange: () => void;
};

const SecurityContent = ({ onPasswordChange }: SecurityContentProps) => (
  <div className="p-6">
    <h2 className="text-2xl font-bold text-white mb-4">Security & Privacy</h2>
    <div className="space-y-4">
      <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-lg font-medium text-indigo-300 mb-2">Password</h3>
        <button onClick={onPasswordChange} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Change Password
        </button>
      </div>
      <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-lg font-medium text-indigo-300 mb-2">Two-Factor Authentication</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white">Enable 2FA</p>
            <p className="text-sm text-gray-400">Add an extra layer of security</p>
          </div>
          <div className="relative inline-block w-12 h-6 rounded-full bg-gray-600">
            <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ActivityContent = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold text-white mb-4">Recent Activity</h2>
    <div className="space-y-4">
      <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-lg font-medium text-indigo-300 mb-2">Login History</h3>
        <div className="space-y-3">
          <div className="border-b border-gray-700 pb-2">
            <p className="text-white font-medium">Today, 10:45 AM</p>
            <p className="text-sm text-gray-400">Chrome on Windows • 192.168.1.1</p>
          </div>
          <div className="border-b border-gray-700 pb-2">
            <p className="text-white font-medium">Yesterday, 8:30 PM</p>
            <p className="text-sm text-gray-400">Safari on macOS • 192.168.1.2</p>
          </div>
          <div className="border-b border-gray-700 pb-2">
            <p className="text-white font-medium">Feb 17, 2025, 3:15 PM</p>
            <p className="text-sm text-gray-400">Firefox on Linux • 192.168.1.3</p>
          </div>
          <div>
            <p>
              {getAuthToken()}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Eyuel - Make sure to look out for hook errors. Only call hooks inside main functions...

const Profile = () => {
  useAuth();

  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("personal");

  const menuItems = [
    { id: "personal", label: "Personal", icon: UserCircle },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "security", label: "Security & Privacy", icon: Shield },
    { id: "activity", label: "Activity", icon: Activity },
  ];

  useEffect(() => {
    const profData = async () => {
      const token = getAuthToken();
      const response = await axiosInstance.get('users/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      setUserData(response.data);
    };

    profData();
  }, []);

  const handlePasswordChange = () => {
    router.push('/reset-password');
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  // Function to render the correct content based on selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case "personal":
        return userData ? <PersonalContent userData={userData} /> : <div className="flex items-center justify-center">Loading...</div>; // Basically a if statament like the ones we used in C++ leetcode lol...
      case "settings":
        return <SettingsContent />;
      case "security":
        return <SecurityContent onPasswordChange={handlePasswordChange}/>;
      case "activity":
        return <ActivityContent />;
      default:
        return userData ? <PersonalContent userData={userData} /> : <div className="flex items-center justify-center">Loading...</div>;
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b to-gray-800 flex">
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

      {/* Content Area */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Sign Out Confirmation Modal */}
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
                setIsOpen(false);
                setTimeout(handleSignOut, 300);
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Sign Out
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
};

export default Profile;