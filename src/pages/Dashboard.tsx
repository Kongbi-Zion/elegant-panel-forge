import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Sidebar from "@/components/Sidebar";
import SummaryCard from "@/components/SummaryCard";
import { formatNumber, formatCurrency } from "@/lib/utils";

const Dashboard = () => {
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
          {/* Welcome Message */}
          <div className="rounded-xl bg-primary p-6 text-primary-foreground">
            <h1 className="text-xl font-semibold">Welcome Thato Lebeya, your role today is finance!</h1>
          </div>

          {/* General Ticket Statistics */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">General Ticket Statistics</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <SummaryCard
                title="Total Tickets Generated"
                value={formatNumber(3884, 0)}
                subtitle="All generated tickets"
                variant="blue"
              />
              <SummaryCard
                title="Total Tickets Cancelled"
                value={formatNumber(741, 0)}
                subtitle="19%"
                variant="orange"
              />
              <SummaryCard
                title="Total Tickets Completed"
                value={formatNumber(3143, 0)}
                subtitle="81%"
                variant="teal"
              />
            </div>
          </div>

          {/* User Performance */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">User Performance</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Total Tickets by User
                </h3>
                <p className="mt-2 text-3xl font-bold text-card-foreground">{formatNumber(247, 0)}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  User Tickets Cancelled
                </h3>
                <p className="mt-2 text-3xl font-bold text-card-foreground">{formatNumber(12, 0)}</p>
                <p className="mt-1 text-xs text-muted-foreground">4.9%</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  User Tickets Served
                </h3>
                <p className="mt-2 text-3xl font-bold text-card-foreground">{formatNumber(235, 0)}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
