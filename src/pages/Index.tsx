import { ChevronLeft, Download, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Sidebar from "@/components/Sidebar";
import SummaryCard from "@/components/SummaryCard";
import TransactionTable from "@/components/TransactionTable";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between border-b border-border bg-card px-8 py-4">
          <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            <ChevronLeft className="h-4 w-4" />
            Back to Daily Batch Approvals
          </button>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-card-foreground">Alex Thompson</p>
              <p className="text-xs text-muted-foreground">alex.thompson@adtech.co.za</p>
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
          {/* Page header */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Batch #B-2024-0524-001 Transactions
              </h1>
              <div className="mt-2 flex items-center gap-6 text-sm text-muted-foreground">
                <span>
                  <span className="font-semibold text-foreground">Cashier:</span> Jane Smith
                </span>
                <span>
                  <span className="font-semibold text-foreground">Brand:</span> Brand A
                </span>
                <span>
                  <span className="font-semibold text-foreground">Campus:</span> North Campus
                </span>
                <span>
                  <span className="font-semibold text-foreground">Date:</span> May 24, 2024
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export PDF
              </Button>
              <Button className="bg-success text-success-foreground hover:bg-success/90">
                Approve Batch
              </Button>
            </div>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <SummaryCard
              title="Total Transactions"
              value="42"
              subtitle="Active transactions"
              variant="blue"
            />
            <SummaryCard
              title="Total Amount"
              value="R 15,450.00"
              subtitle="Sum of all sales"
              variant="teal"
            />
            <SummaryCard
              title="Batch Status"
              value="Pending"
              subtitle="Awaiting supervisor approval"
              variant="orange"
            />
          </div>

          {/* Transaction table */}
          <TransactionTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
