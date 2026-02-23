import { useState } from "react";
import { LogOut, Search, Filter, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";

const users = [
  { id: "USR-001", name: "Thato Lebeya", email: "thatol@intellergy.co.za", role: "Admin", center: "North Campus", status: "Active", lastActive: "2024-05-24 09:30" },
  { id: "USR-002", name: "Jane Smith", email: "jane.smith@intellergy.co.za", role: "Cashier", center: "North Campus", status: "Active", lastActive: "2024-05-24 08:45" },
  { id: "USR-003", name: "John Doe", email: "john.doe@intellergy.co.za", role: "Cashier", center: "South Campus", status: "Active", lastActive: "2024-05-24 10:15" },
  { id: "USR-004", name: "Alice Brown", email: "alice.brown@intellergy.co.za", role: "Supervisor", center: "West Campus", status: "Active", lastActive: "2024-05-24 07:20" },
  { id: "USR-005", name: "Bob Wilson", email: "bob.wilson@intellergy.co.za", role: "Cashier", center: "East Campus", status: "Inactive", lastActive: "2024-05-23 16:30" },
  { id: "USR-006", name: "Sarah Johnson", email: "sarah.j@intellergy.co.za", role: "Admin", center: "South Campus", status: "Active", lastActive: "2024-05-24 11:00" },
  { id: "USR-007", name: "Michael Chen", email: "michael.c@intellergy.co.za", role: "Cashier", center: "North Campus", status: "Active", lastActive: "2024-05-24 09:45" },
  { id: "USR-008", name: "Emily Davis", email: "emily.d@intellergy.co.za", role: "Supervisor", center: "East Campus", status: "Active", lastActive: "2024-05-24 08:00" },
];

const statusColors: Record<string, string> = {
  Active: "bg-success/10 text-success",
  Inactive: "bg-muted text-muted-foreground",
};

const roleColors: Record<string, string> = {
  Admin: "bg-primary/10 text-primary",
  Supervisor: "bg-[hsl(var(--card-teal))]/10 text-[hsl(var(--card-teal))]",
  Cashier: "bg-[hsl(var(--card-orange))]/10 text-[hsl(var(--card-orange))]",
};

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between border-b border-border bg-card px-8 py-4">
          <div></div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-card-foreground">Thato Lebeya</p>
              <p className="text-xs text-muted-foreground">thatol@intellergy.co.za</p>
            </div>
            <Avatar className="h-9 w-9 bg-primary text-primary-foreground">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                AT
              </AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Users</h1>
            <p className="text-muted-foreground">Manage system users</p>
          </div>

          {/* Users Table */}
          <div className="rounded-xl border border-border bg-card">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="text-lg font-semibold text-card-foreground">
                User List (8)
              </h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search user..."
                    className="w-56 pl-9"
                  />
                </div>
                <Button variant="ghost" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    {["User ID", "Name", "Email", "Role", "Center", "Status", "Last Active", "Actions"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="group border-b border-border last:border-0 hover:bg-[hsl(var(--sidebar-accent))] transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-card-foreground group-hover:text-white">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-card-foreground group-hover:text-white">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground group-hover:text-white/90">
                        {user.email}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium ${roleColors[user.role]}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-card-foreground group-hover:text-white">
                        {user.center}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium ${statusColors[user.status]}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground group-hover:text-white/90">
                        {user.lastActive}
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="ghost" size="icon" className="text-primary">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-border px-6 py-4">
              <p className="text-sm text-muted-foreground">
                Showing 1 to 8 of 8 results
              </p>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                {[1].map((p) => (
                  <Button
                    key={p}
                    variant={p === currentPage ? "default" : "outline"}
                    size="sm"
                    className="w-9"
                    onClick={() => setCurrentPage(p)}
                  >
                    {p}
                  </Button>
                ))}
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Users;
