import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Edit2 } from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");
  const [isEditing, setIsEditing] = useState(false);
  
  const [profileData, setProfileData] = useState({
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakfix Store",
    storeAddress: "123 Main Street, New York, NY 10001"
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleProfileChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <DashboardLayout title="Settings">
      {/* Tabs */}
      <div className="mb-8 flex gap-8 border-b border-border">
        <button
          onClick={() => setActiveTab("profile")}
          className={`pb-4 text-sm font-medium transition-colors ${
            activeTab === "profile" 
              ? "border-b-2 border-foreground text-foreground" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("password")}
          className={`pb-4 text-sm font-medium transition-colors ${
            activeTab === "password" 
              ? "border-b-2 border-foreground text-foreground" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Password Settings
        </button>
      </div>

      {activeTab === "profile" && (
        <div className="max-w-3xl">
          {/* Profile Image */}
          <div className="mb-8">
            <p className="mb-3 text-sm font-medium text-foreground">Profile Image</p>
            <div className="relative inline-block">
              <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-accent/30 bg-secondary">
                <img 
                  src="avatar.png"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Edit2 className="h-3.5 w-3.5" />
                </button>
              )}
              {!isEditing && (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-secondary/90 px-2 py-1 text-xs font-medium text-foreground"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Profile Form */}
          {isEditing ? (
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Full Name</label>
                  <input
                    type="text"
                    value={profileData.fullName}
                    onChange={(e) => handleProfileChange("fullName", e.target.value)}
                    className="w-full rounded-lg border border-border bg-input py-3 px-4 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleProfileChange("email", e.target.value)}
                    className="w-full rounded-lg border border-border bg-input py-3 px-4 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Store Name</label>
                  <input
                    type="text"
                    value={profileData.storeName}
                    onChange={(e) => handleProfileChange("storeName", e.target.value)}
                    className="w-full rounded-lg border border-border bg-input py-3 px-4 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Store Address</label>
                  <input
                    type="text"
                    value={profileData.storeAddress}
                    onChange={(e) => handleProfileChange("storeAddress", e.target.value)}
                    className="w-full rounded-lg border border-border bg-input py-3 px-4 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>

              <button 
                onClick={() => setIsEditing(false)}
                className="w-full max-w-xs rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto sm:px-24"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">Full Name:</p>
                  <p className="mt-1 text-foreground">{profileData.fullName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email:</p>
                  <p className="mt-1 text-foreground">{profileData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Store Name:</p>
                  <p className="mt-1 text-foreground">{profileData.storeName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Store Address:</p>
                  <p className="mt-1 text-foreground">{profileData.storeAddress}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "password" && (
        <div className="max-w-md">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Current Password</label>
              <input
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => handlePasswordChange("currentPassword", e.target.value)}
                placeholder="Enter current password"
                className="w-full rounded-lg border border-border bg-input py-3 px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">New Password</label>
              <input
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => handlePasswordChange("newPassword", e.target.value)}
                placeholder="Enter new password"
                className="w-full rounded-lg border border-border bg-input py-3 px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Confirm New Password</label>
              <input
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => handlePasswordChange("confirmPassword", e.target.value)}
                placeholder="Confirm new password"
                className="w-full rounded-lg border border-border bg-input py-3 px-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <button className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Update Password
            </button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Settings;
