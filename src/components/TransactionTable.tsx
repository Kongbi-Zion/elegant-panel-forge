import { useState } from "react";
import { Eye, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const transactions = [
  { id: "TX-10024501", time: "08:42 AM", type: "Sale", method: "Visa Debit", methodBadge: "VISA", amount: 450.0 },
  { id: "TX-10024502", time: "09:15 AM", type: "Sale", method: "Cash Payment", methodBadge: "CASH", amount: 1200.0 },
  { id: "TX-10024503", time: "10:05 AM", type: "Sale", method: "Bank Transfer", methodBadge: "EFT", amount: 3500.0 },
  { id: "TX-10024504", time: "11:30 AM", type: "Sale", method: "Visa Debit", methodBadge: "VISA", amount: 950.0 },
];

const badgeColors: Record<string, string> = {
  VISA: "bg-primary/10 text-primary",
  CASH: "bg-[hsl(var(--card-orange))]/10 text-[hsl(var(--card-orange))]",
  EFT: "bg-destructive/10 text-destructive",
};

const TransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="rounded-xl border border-border bg-card">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <h2 className="text-lg font-semibold text-card-foreground">
          Transaction List (42)
        </h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search ID..."
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
              {["Transaction ID", "Time", "Type", "Payment Method", "Amount (R)", "Actions"].map(
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
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-semibold text-card-foreground">
                  {tx.id}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {tx.time}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block rounded-md bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
                    {tx.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-bold ${badgeColors[tx.methodBadge]}`}
                    >
                      {tx.methodBadge}
                    </span>
                    <span className="text-sm text-card-foreground">{tx.method}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-card-foreground">
                  R {tx.amount.toLocaleString("en-ZA", { minimumFractionDigits: 2 })}
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
          Showing 1 to 4 of 42 results
        </p>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          {[1, 2, 3].map((p) => (
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
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
