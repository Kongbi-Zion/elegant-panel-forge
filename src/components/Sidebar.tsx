import { Home, Users, Receipt, CircleHelp, TrendingUp, ChevronDown, DollarSign } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  // { label: "Dashboard", icon: Home, path: "/" },
  { label: "Transactions", icon: Receipt, path: "/" },
  { label: "Users", icon: Users, path: "/users" },
  { 
    label: "Metrics", 
    icon: TrendingUp, 
    path: "/metrics",
    subItems: [
      { label: "Transactions", icon: Receipt, path: "/metrics/transactions" },
      { label: "Revenue", icon: DollarSign, path: "/metrics/revenue" }
    ]
  },
  { label: "Help Desk", icon: CircleHelp, path: "/help" },
];

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <aside className="w-60 min-h-screen bg-card border-r border-border flex flex-col">
      <div className="p-6">
        <img src="/logo.png" alt="Logo" className="w-36 rounded-lg object-contain" />
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => (
          <div key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )
              }
              onClick={(e) => {
                if (item.subItems) {
                  e.preventDefault();
                  toggleExpanded(item.label);
                }
              }}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
              {item.subItems && (
                <ChevronDown 
                  className={cn(
                    "w-4 h-4 ml-auto transition-transform",
                    expandedItems.includes(item.label) && "rotate-180"
                  )}
                />
              )}
            </NavLink>
            
            {item.subItems && expandedItems.includes(item.label) && (
              <div className="ml-6 mt-1 space-y-1">
                {item.subItems.map((subItem) => (
                  <NavLink
                    key={subItem.label}
                    to={subItem.path}
                    className={({ isActive }) =>
                      cn(
                        "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )
                    }
                  >
                    <subItem.icon className="w-4 h-4" />
                    {subItem.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
