import { useState } from "react";
import { Eye, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

const transactions = [
  { id: "TX-10024501", amount: 450.0, service: "Payment", productType: "Debit Card", transactionDate: "2024-05-24", status: "Completed", servedBy: "Jane Smith", rrn: "123456789012", terminalId: "T-001", center: "North Campus" },
  { id: "TX-10024502", amount: 1200.0, service: "Payment", productType: "Cash", transactionDate: "2024-05-24", status: "Cancelled", servedBy: "John Doe", rrn: "123456789013", terminalId: "T-002", center: "South Campus" },
  { id: "TX-10024503", amount: 3500.0, service: "Transfer", productType: "Bank Transfer", transactionDate: "2024-05-24", status: "Failed", servedBy: "Jane Smith", rrn: "123456789014", terminalId: "T-001", center: "North Campus" },
  { id: "TX-10024504", amount: 950.0, service: "Payment", productType: "Debit Card", transactionDate: "2024-05-24", status: "Completed", servedBy: "John Doe", rrn: "123456789015", terminalId: "T-003", center: "East Campus" },
  { id: "TX-10024505", amount: 2750.0, service: "Payment", productType: "Credit Card", transactionDate: "2024-05-24", status: "Completed", servedBy: "Alice Brown", rrn: "123456789016", terminalId: "T-004", center: "West Campus" },
  { id: "TX-10024506", amount: 180.5, service: "Payment", productType: "Cash", transactionDate: "2024-05-24", status: "Cancelled", servedBy: "Bob Wilson", rrn: "123456789017", terminalId: "T-005", center: "North Campus" },
  { id: "TX-10024507", amount: 5000.0, service: "Transfer", productType: "Bank Transfer", transactionDate: "2024-05-24", status: "Completed", servedBy: "Jane Smith", rrn: "123456789018", terminalId: "T-001", center: "North Campus" },
  { id: "TX-10024508", amount: 750.0, service: "Payment", productType: "Debit Card", transactionDate: "2024-05-24", status: "Failed", servedBy: "John Doe", rrn: "123456789019", terminalId: "T-002", center: "South Campus" },
  { id: "TX-10024509", amount: 2200.0, service: "Payment", productType: "Credit Card", transactionDate: "2024-05-24", status: "Completed", servedBy: "Alice Brown", rrn: "123456789020", terminalId: "T-003", center: "East Campus" },
   { id: "TX-10024505", amount: 2750.0, service: "Payment", productType: "Credit Card", transactionDate: "2024-05-24", status: "Completed", servedBy: "Alice Brown", rrn: "123456789016", terminalId: "T-004", center: "West Campus" },
];

const statusColors: Record<string, string> = {
  Completed: "bg-success/10 text-success",
  Failed: "bg-destructive/10 text-destructive",
  Cancelled: "bg-[hsl(var(--card-orange))]/10 text-[hsl(var(--card-orange))]",
};

const TransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="rounded-xl border border-border bg-card">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <h2 className="text-lg font-semibold text-card-foreground">
          Transaction History (42)
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
              {["Amount", "Service", "Product Type", "Transaction Date", "Status", "Served By", "RRN", "Terminal ID", "Center"].map(
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
                className="group border-b border-border last:border-0 hover:bg-[hsl(var(--sidebar-accent))] transition-colors"
              >
                <td className="px-6 py-4 text-sm font-semibold text-card-foreground group-hover:text-white">
                  {formatCurrency(tx.amount)}
                </td>
                <td className="px-6 py-4 text-sm text-card-foreground group-hover:text-white">
                  {tx.service}
                </td>
                <td className="px-6 py-4 text-sm text-card-foreground group-hover:text-white">
                  {tx.productType}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground group-hover:text-white/90">
                  {tx.transactionDate}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium ${statusColors[tx.status]}`}>
                    {tx.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-card-foreground group-hover:text-white">
                  {tx.servedBy}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground group-hover:text-white/90">
                  {tx.rrn}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground group-hover:text-white/90">
                  {tx.terminalId}
                </td>
                <td className="px-6 py-4 text-sm text-card-foreground group-hover:text-white">
                  {tx.center}
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
