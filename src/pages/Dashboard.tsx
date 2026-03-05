import { useEffect, useState } from "react";
import { ChevronLeft, Download, LogOut, Filter, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";
import SummaryCard from "@/components/SummaryCard";
import TransactionTable from "@/components/TransactionTable";
import { formatNumber, formatCurrency } from "@/lib/utils";

const Index = () => {
  // Filter states
  const [showFilters, setShowFilters] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCardType, setSelectedCardType] = useState("");
  const [selectedCenter, setSelectedCenter] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  // Filter options based on transaction data
  const services = ["Traffic Infringement", "Installment Payments", "Motor Vehicle License", "Driver's License Renewal", "Duplicate Learner's License", "Learner's License"];
  const statuses = ["Approved", "Declined", "Cancelled"];
  const cardTypes = ["Credit Card", "Debit Card"];
  const centers = ["RTIA Head Office", "Pretoria Service Center", "Johannesburg Branch", "Cape Town Service Center", "Durban Service Outlet"];

  const clearAllFilters = () => {
    setSelectedService("");
    setSelectedStatus("");
    setSelectedCardType("");
    setSelectedCenter("");
    setDateRange({ start: "", end: "" });
  };

  const hasActiveFilters = selectedService || selectedStatus || selectedCardType || selectedCenter || dateRange.start || dateRange.end;


  return (
    <div className="flex min-h-screen bg-background">
      <div className="fixed left-0 top-0 h-full z-50">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col ml-60">
        {/* Top bar */}
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-card px-8 py-4">
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

          {/* Filters Section */}
          <div className="space-y-4">
            {/* Filter Header */}
            <div className="flex items-center w-full justify-end">
              <div className="flex items-center gap-3">
                <Button
                    variant={showFilters ? "default" : "outline"}
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2"
                  >
                    <Filter className="h-4 w-4" />
                    Filters
                    {hasActiveFilters && (
                      <span className="bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                        {[selectedService, selectedStatus, selectedCardType, selectedCenter, dateRange.start].filter(Boolean).length}
                      </span>
                    )}
                  </Button>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear All
                  </Button>
                )}
              </div>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="rounded-xl border border-border bg-card p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Service Filter */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Service</label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full p-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">All Services</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Status Filter */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Status</label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-full p-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">All Statuses</option>
                      {statuses.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>

                  {/* Card Type Filter */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Card Type</label>
                    <select
                      value={selectedCardType}
                      onChange={(e) => setSelectedCardType(e.target.value)}
                      className="w-full p-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">All Card Types</option>
                      {cardTypes.map((cardType) => (
                        <option key={cardType} value={cardType}>{cardType}</option>
                      ))}
                    </select>
                  </div>

                  {/* Service Outlet Filter */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Service Outlet</label>
                    <select
                      value={selectedCenter}
                      onChange={(e) => setSelectedCenter(e.target.value)}
                      className="w-full p-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">All Outlets</option>
                      {centers.map((center) => (
                        <option key={center} value={center}>{center}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date Range Filter */}
                  <div className="lg:col-span-2">
                    <label className="text-sm font-medium text-foreground mb-2 block">Date Range</label>
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          type="date"
                          value={dateRange.start}
                          onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                          className="pl-9"
                        />
                      </div>
                      <span className="text-muted-foreground">to</span>
                      <div className="relative flex-1">
                        <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          type="date"
                          value={dateRange.end}
                          onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                          className="pl-9"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Active Filters Display */}
                {hasActiveFilters && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {selectedService && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        Service: {selectedService}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedService("")} />
                      </span>
                    )}
                    {selectedStatus && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        Status: {selectedStatus}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedStatus("")} />
                      </span>
                    )}
                    {selectedCardType && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        Card: {selectedCardType}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCardType("")} />
                      </span>
                    )}
                    {selectedCenter && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        Outlet: {selectedCenter}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCenter("")} />
                      </span>
                    )}
                    {(dateRange.start || dateRange.end) && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        Date: {dateRange.start || "Start"} - {dateRange.end || "End"}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setDateRange({ start: "", end: "" })} />
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Transaction table */}
          <TransactionTable 
            selectedService={selectedService}
            selectedStatus={selectedStatus}
            selectedCardType={selectedCardType}
            selectedCenter={selectedCenter}
            dateRange={dateRange}
          />
        </main>
      </div>
    </div>
  );
};

export default Index;
