import { Home, Phone, Calendar, Settings, LogOut, Zap } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { title: "Dashboard Overview", path: "/", icon: Home },
  { title: "Call Logs", path: "/call-logs", icon: Phone },
  { title: "Appointments", path: "/appointments", icon: Calendar },
  { title: "Settings", path: "/settings", icon: Settings },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col justify-between bg-sidebar border-r border-sidebar-border lg:sticky">
      {/* Logo */}
      <div className="flex items-center justify-center gap-3 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
          <Zap className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-sidebar-active/10 text-sidebar-active"
                      : "text-sidebar-foreground/70 hover:bg-secondary hover:text-sidebar-foreground"
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? "text-sidebar-active" : ""}`} />
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout button*/}
      <div className="mt-auto border-t border-sidebar-border p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-destructive transition-all duration-200 hover:bg-destructive/10">
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
