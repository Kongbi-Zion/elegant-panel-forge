import { ChevronLeft, Download, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Sidebar from "@/components/Sidebar";
import SummaryCard from "@/components/SummaryCard";
import TransactionTable from "@/components/TransactionTable";
import { formatNumber, formatCurrency } from "@/lib/utils";

const Index = () => {
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
         

          {/* Summary cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <SummaryCard
              title="Total Approved"
              value={formatCurrency(114302.8)}
              subtitle="Approved transactions"
              variant="blue"
            />
            <SummaryCard
              title="Declined Transactions"
              value={formatCurrency(18269.6)}
              subtitle="Declined transactions"
              variant="orange"
            />
            <SummaryCard
              title="Success Rate"
              value="91.57%"
              subtitle="Transaction success rate"
              variant="teal"
            />
            <SummaryCard
              title="Avg. Transaction"
              value={formatCurrency(306.97)}
              subtitle="Average per transaction"
              variant="blue"
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
