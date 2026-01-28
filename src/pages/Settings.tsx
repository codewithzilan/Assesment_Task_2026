import { useState } from "react";
import { Pencil } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Header } from "@/components/layout/Header";

const Settings = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakfix Store",
    storeAddress: "123 Main Street, New York, NY 10001",
  });

  return (
    <DashboardLayout>
      <Header title="Settings" />
      
      <div className="px-8 pb-8">
        {/* Tabs */}
        <div className="flex items-center gap-8 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-4 text-sm font-medium transition-colors relative ${
              activeTab === "profile"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Profile
            {activeTab === "profile" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`pb-4 text-sm font-medium transition-colors relative ${
              activeTab === "password"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Password Settings
            {activeTab === "password" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>

        {activeTab === "profile" && (
          <div className="max-w-2xl space-y-8">
            {/* Profile Image */}
            <div>
              <p className="text-muted-foreground text-sm mb-4">Profile Image</p>
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/30">
                  <img
                    src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW58ZW58MHx8MHx8fDA%3D"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
            </div>

            {isEditing ? (
              /* Edit Mode */
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-foreground text-sm font-medium mb-2 block">Full Name</label>
                    <input
                      type="text"
                      value={profile.fullName}
                      onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-xl py-3 px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-medium mb-2 block">Email</label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-xl py-3 px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-foreground text-sm font-medium mb-2 block">Store Name</label>
                    <input
                      type="text"
                      value={profile.storeName}
                      onChange={(e) => setProfile({ ...profile, storeName: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-xl py-3 px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-medium mb-2 block">Store Address</label>
                    <input
                      type="text"
                      value={profile.storeAddress}
                      onChange={(e) => setProfile({ ...profile, storeAddress: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-xl py-3 px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-success text-success-foreground px-16 py-3 rounded-xl font-medium hover:bg-success/90 transition-colors"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              /* View Mode */
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Full Name:</p>
                    <p className="text-foreground">{profile.fullName}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Email:</p>
                    <p className="text-foreground">{profile.email}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Store Name:</p>
                    <p className="text-foreground">{profile.storeName}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Store Address:</p>
                    <p className="text-foreground">{profile.storeAddress}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "password" && (
          <div className="max-w-md space-y-6">
            <div>
              <label className="text-foreground text-sm font-medium mb-2 block">Current Password</label>
              <input
                type="password"
                placeholder="Enter current password"
                className="w-full bg-secondary border border-border rounded-xl py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-foreground text-sm font-medium mb-2 block">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full bg-secondary border border-border rounded-xl py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-foreground text-sm font-medium mb-2 block">Confirm New Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full bg-secondary border border-border rounded-xl py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="pt-4">
              <button className="bg-success text-success-foreground px-8 py-3 rounded-xl font-medium hover:bg-success/90 transition-colors">
                Update Password
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Settings;
