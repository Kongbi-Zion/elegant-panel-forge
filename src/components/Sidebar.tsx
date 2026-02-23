import { Home, Users, Receipt, CircleHelp } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  // { label: "Dashboard", icon: Home, path: "/" },
  { label: "Transactions", icon: Receipt, path: "/" },
  { label: "Users", icon: Users, path: "/users" },
  { label: "Help Desk", icon: CircleHelp, path: "/help" },
];

const Sidebar = () => {
  return (
    <aside className="w-60 min-h-screen bg-card border-r border-border flex flex-col">
      <div className="p-6">
        <img src="/logo.png" alt="Logo" className="w-36 rounded-lg object-contain" />
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
