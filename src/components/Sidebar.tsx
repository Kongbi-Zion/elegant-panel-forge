import { Home, CheckCircle, Store, MapPin, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: Home, active: false },
  { label: "Batch Approvals", icon: CheckCircle, active: true },
  { label: "Brands", icon: Store, active: false },
  { label: "Campuses", icon: MapPin, active: false },
  { label: "Settings", icon: Settings, active: false },
];

const Sidebar = () => {
  return (
    <aside className="w-60 min-h-screen bg-card border-r border-border flex flex-col">
      <div className="p-6">
        <div className="w-10 h-10 rounded-lg bg-primary" />
      </div>
      <p className="px-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
        Navigation
      </p>
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
