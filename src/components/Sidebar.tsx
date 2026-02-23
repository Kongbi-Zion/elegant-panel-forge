import { Home, Users, Receipt, CircleHelp } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: Home, active: false },
  { label: "Users", icon: Users, active: false },
  { label: "Transactions", icon: Receipt, active: true },
  { label: "Help Desk", icon: CircleHelp, active: false },
];

const Sidebar = () => {
  return (
    <aside className="w-60 min-h-screen bg-card border-r border-border flex flex-col">
      <div className="p-6">
        <img src="/logo.png" alt="Logo" className="w-40 rounded-lg object-contain" />
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              item.active
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-secondary"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
