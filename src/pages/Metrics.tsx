import { useState } from "react";
import { LogOut, Search, Filter, ChevronLeft, ChevronRight, TrendingUp, TrendingDown, Users, CreditCard, Activity, ArrowLeftRight, CheckCircle, CreditCard as Payments, Percent, AlertCircle, Clock, Calculator, Router } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";
import SummaryCard from "@/components/SummaryCard";
import { formatNumber, formatCurrency } from "@/lib/utils";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

interface MetricsProps {
  view?: 'transactions' | 'revenue';
}

const Metrics = ({ view = 'transactions' }: MetricsProps) => {

  const transactionVolumeOptions: ApexOptions = {
    series: [{
      name: 'Transactions',
      data: [120, 85, 95, 65, 45, 30]
    }],
    chart: {
      type: 'bar',
      height: 520,
      toolbar: { show: false },
      background: 'transparent'
    },
    colors: ['hsl(var(--primary))'],
    plotOptions: {
      bar: {
        borderRadius: 12,
        columnWidth: '50%',
        dataLabels: {
          position: 'top',
          style: {
            colors: ['hsl(var(--background))'],
            fontSize: '14px',
            fontWeight: 'bold'
          }
        }
      }
    },
    xaxis: {
      categories: ['Traffic Infringement', 'Installment Payments', 'Motor Vehicle License', 'Driver\'s License Renewal', 'Duplicate Learner\'s License', 'Learner\'s License'],
      labels: {
        style: {
          colors: '#6b7280',
          fontSize: '11px'
        },
        rotate: -45,
        rotateAlways: true
      }
    },
    yaxis: {
      labels: {
        style: { colors: '#6b7280' },
        formatter: (value: number) => value.toString()
      }
    },
    grid: {
      borderColor: '#e5e7eb',
      strokeDashArray: 3
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: (value: number) => `${value} transactions`
      }
    }
  } as ApexOptions;

  const transactionChartOptions: ApexOptions = {
    series: [
      { name: 'Approved', data: [320, 342, 328, 394, 378, 412, 435, 421, 456, 478, 462, 489] },
      { name: 'Declined', data: [28, 32, 25, 38, 31, 35, 42, 38, 45, 48, 41, 52] },
      { name: 'Cancelled', data: [15, 18, 12, 22, 19, 24, 28, 25, 31, 34, 29, 38] }
    ],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: { show: false },
      background: 'transparent'
    },
    colors: ['#10b981', '#ef4444', '#f59e0b'],
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '60%'
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: { style: { colors: '#6b7280' } }
    },
    yaxis: {
      labels: { style: { colors: '#6b7280' } }
    },
    grid: {
      borderColor: '#e5e7eb',
      strokeDashArray: 3
    },
    tooltip: {
      theme: 'light'
    },
    legend: {
      position: 'top',
      labels: { colors: '#374151' }
    }
  } as ApexOptions;

  const pieChartOptions: ApexOptions = {
    series: [65, 20, 10, 5],
    chart: {
      type: 'donut',
      height: 300,
      background: 'transparent'
    },
    labels: ['Credit Card', 'Debit Card', 'Bank Transfer', 'Cash'],
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              formatter: () => '100%'
            }
          }
        }
      }
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: (value: number) => `${value}%`
      }
    },
    legend: {
      position: 'bottom',
      labels: { colors: '#374151' }
    }
  } as ApexOptions;

  const metricsData = [
    { id: "MET-001", metric: "Total Transactions", value: "12,458", change: "+12.5%", trend: "up", period: "Last 30 days", category: "Volume" },
    { id: "MET-002", metric: "Total Revenue", value: "R 2,847,650", change: "+8.3%", trend: "up", period: "Last 30 days", category: "Financial" },
    { id: "MET-003", metric: "Active Users", value: "1,847", change: "+5.2%", trend: "up", period: "Last 30 days", category: "Users" },
    { id: "MET-004", metric: "Approval Rate", value: "94.2%", change: "-2.1%", trend: "down", period: "Last 30 days", category: "Performance" },
    { id: "MET-005", metric: "Avg Transaction Value", value: "R 228.67", change: "+3.8%", trend: "up", period: "Last 30 days", category: "Financial" },
    { id: "MET-006", metric: "Declined Transactions", value: "723", change: "-15.4%", trend: "down", period: "Last 30 days", category: "Performance" },
    { id: "MET-007", metric: "Service Outlet Usage", value: "89.3%", change: "+6.7%", trend: "up", period: "Last 30 days", category: "Operations" },
    { id: "MET-008", metric: "Peak Hour Volume", value: "347/hr", change: "+18.2%", trend: "up", period: "Last 7 days", category: "Volume" },
  ];

  const trendColors: Record<string, string> = {
    up: "text-success",
    down: "text-destructive",
  };

  const categoryColors: Record<string, string> = {
    Volume: "bg-primary/10 text-primary",
    Financial: "bg-[hsl(var(--card-teal))]/10 text-[hsl(var(--card-teal))]",
    Users: "bg-[hsl(var(--card-orange))]/10 text-[hsl(var(--card-orange))]",
    Performance: "bg-muted text-muted-foreground",
    Operations: "bg-success/10 text-success",
  };

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
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {view === 'transactions' ? 'Transaction Metrics' : 'Revenue Metrics'}
            </h1>
            <p className="text-muted-foreground">
              {view === 'transactions' 
                ? 'System performance and transaction analytics' 
                : 'Financial performance and revenue analytics'
              }
            </p>
          </div>

          {/* KPI Primary Cards */}

                  <div className="space-y-6">
          
                      {/* Key Metrics Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Total Transactions</p>
                              <p className="text-2xl font-black text-gray-900 dark:text-gray-100 mt-1">278</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">All transactions</p>
                            </div>
                            <div className="p-3 bg-primary/10 dark:bg-primary/30 rounded-lg">
                              <ArrowLeftRight className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                        </div>
          
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Successful Payments</p>
                              <p className="text-2xl font-black text-emerald-900 dark:text-emerald-100 mt-1">213</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Completed transactions</p>
                            </div>
                            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-emerald-600" />
                            </div>
                          </div>
                        </div>
          
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Total Revenue</p>
                              <p className="text-2xl font-black text-violet-900 dark:text-violet-100 mt-1">R 2 317 128</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Revenue generated</p>
                            </div>
                            <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                              <Payments className="w-5 h-5 text-violet-600" />
                            </div>
                          </div>
                        </div>
          
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Success Rate</p>
                              <p className="text-2xl font-black text-amber-900 dark:text-amber-100 mt-1">76.6%</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Transaction success rate</p>
                            </div>
                            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                              <Percent className="w-5 h-5 text-amber-600" />
                            </div>
                          </div>
                        </div>
                      </div>
          
                      {/* Additional Metrics Row */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Failed Payments</p>
                              <p className="text-xl font-black text-red-900 dark:text-red-100 mt-1">58</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Failed transactions</p>
                            </div>
                            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                              <AlertCircle className="w-5 h-5 text-red-600" />
                            </div>
                          </div>
                        </div>
          
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Pending Payments</p>
                              <p className="text-xl font-black text-slate-900 dark:text-slate-100 mt-1">0</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Awaiting processing</p>
                            </div>
                            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-900/30 rounded-lg flex items-center justify-center">
                              <Clock className="w-5 h-5 text-slate-600" />
                            </div>
                          </div>
                        </div>
          
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Average Transaction Value</p>
                              <p className="text-xl font-black text-primary-900 dark:text-primary-100 mt-1">R 10 879</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">ATV</p>
                            </div>
                            <div className="w-10 h-10 bg-primary/10 dark:bg-primary/30 rounded-lg flex items-center justify-center">
                              <Calculator className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                        </div>
          
                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Active Devices</p>
                              <p className="text-xl font-black text-emerald-900 dark:text-emerald-100 mt-1">44</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Online terminals</p>
                            </div>
                            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                              <Router className="w-5 h-5 text-emerald-600" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/20 dark:from-primary/20 dark:to-primary/10 p-6 rounded-2xl border border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/30 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-primary-700 dark:text-primary-300 font-semibold text-sm uppercase tracking-wide">Total Transactions</span>
                  <div className="p-3 bg-gradient-to-br from-primary to-primary-600 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <ArrowLeftRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-3xl font-black text-primary-900 dark:text-primary-100">107</h3>
                  <div className="flex items-center gap-1 px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">+12.5%</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-primary-600 dark:text-primary-400 font-medium">vs last month</div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-sm uppercase tracking-wide">Successful Payments</span>
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-3xl font-black text-emerald-900 dark:text-emerald-100">81</h3>
                  <div className="flex items-center gap-1 px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">+8.2%</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-emerald-600 dark:text-emerald-400 font-medium">vs last month</div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 p-6 rounded-2xl border border-violet-200 dark:border-violet-800 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-violet-200/30 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-violet-700 dark:text-violet-300 font-semibold text-sm uppercase tracking-wide">Total Revenue</span>
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-violet-600 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Payments className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-3xl font-black text-violet-900 dark:text-violet-100">{formatCurrency(900212)}</h3>
                  <div className="flex items-center gap-1 px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">+15.1%</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-violet-600 dark:text-violet-400 font-medium">vs last month</div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-800 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-amber-700 dark:text-amber-300 font-semibold text-sm uppercase tracking-wide">Success Rate</span>
                  <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Percent className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-3xl font-black text-amber-900 dark:text-amber-100">75.7%</h3>
                  <div className="flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <TrendingDown className="w-3 h-3 text-red-600" />
                    <span className="text-red-600 dark:text-red-400 text-xs font-bold">-2.1%</span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-amber-600 dark:text-amber-400 font-medium">vs last month</div>
              </div>
            </div>
          </div> */}

          {/* KPI Secondary Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4 hover:shadow-md transition-all duration-300 group">
              <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">Failed Payments</p>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">22</p>
                <div className="text-xs text-slate-500 dark:text-slate-500">3.7% failure rate</div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4 hover:shadow-md transition-all duration-300 group">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">Pending</p>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">0</p>
                <div className="text-xs text-emerald-600 dark:text-emerald-400">All processed</div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4 hover:shadow-md transition-all duration-300 group">
              <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                <Calculator className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">Avg Value</p>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">{formatCurrency(11114)}</p>
                <div className="text-xs text-emerald-600 dark:text-emerald-400">+5.3% increase</div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4 hover:shadow-md transition-all duration-300 group">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                <Router className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">Active Devices</p>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">42</p>
                <div className="text-xs text-emerald-600 dark:text-emerald-400">All operational</div>
              </div>
            </div>
          </div> */}

          {/* Main Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Transaction Volume by Service</h3>
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-primary/30 rounded-lg">
                  <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-xs text-primary-700 dark:text-primary-300 font-medium">Volume</span>
                </div>
              </div>
              <div className="h-[32rem]">
                <Chart options={transactionVolumeOptions} series={transactionVolumeOptions.series} type="bar" height={520} />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-8">Distribution</h3>
              <div className="relative flex justify-center py-8">
                <div className="relative size-56">
                  <svg className="size-full -rotate-90 drop-shadow-lg" viewBox="0 0 100 100">
                    <circle className="text-gray-100 dark:text-slate-800" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="12"></circle>
                    <circle className="text-primary drop-shadow-md" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="100" strokeWidth="12"></circle>
                    <circle className="text-emerald-500 drop-shadow-md" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="200" strokeWidth="12"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-gray-900 dark:text-gray-100">100%</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Total</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-primary shadow-sm"></span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Traffic Infringement</span>
                  </div>
                  <span className="text-sm font-bold text-primary-600">45%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm"></span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Installment Payments</span>
                  </div>
                  <span className="text-sm font-bold text-emerald-600">30%</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-gray-400 shadow-sm"></span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Other</span>
                  </div>
                  <span className="text-sm font-bold text-gray-600">25%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Section Distribution and Status */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-8">Service Outlet Distribution</h3>
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">RTIA Head Office</span>
                    <span className="font-bold text-lg text-gray-900 dark:text-gray-100">{formatCurrency(450106)}</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-sm transition-all duration-500" style={{width: '50%'}}></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">50% of total revenue</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Pretoria Service Center</span>
                    <span className="font-bold text-lg text-gray-900 dark:text-gray-100">{formatCurrency(320050)}</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full shadow-sm transition-all duration-500" style={{width: '35%'}}></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">35% of total revenue</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Johannesburg Branch</span>
                    <span className="font-bold text-lg text-gray-900 dark:text-gray-100">{formatCurrency(130056)}</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-gray-500 to-gray-600 h-3 rounded-full shadow-sm transition-all duration-500" style={{width: '15%'}}></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">15% of total revenue</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-8">Status Breakdown</h3>
              <div className="flex items-center gap-8">
                <div className="size-48 shrink-0 relative">
                  <svg className="size-full drop-shadow-lg" viewBox="0 0 100 100">
                    <circle className="opacity-100" cx="50" cy="50" fill="transparent" r="50" stroke="#004a8f" strokeDasharray="237.8 314" strokeWidth="100"></circle>
                    <circle className="opacity-100" cx="50" cy="50" fill="transparent" r="50" stroke="#ef4444" strokeDasharray="64.8 314" strokeDashoffset="-237.8" strokeWidth="100"></circle>
                    <circle className="opacity-100" cx="50" cy="50" fill="transparent" r="50" stroke="#94a3b8" strokeDasharray="11.4 314" strokeDashoffset="-302.6" strokeWidth="100"></circle>
                  </svg>
                </div>
                <div className="flex-1 space-y-5">
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-primary shadow-sm"></span>
                      <span className="flex-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Successful</span>
                    </div>
                    <span className="text-sm font-bold text-primary-600">75.7%</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-red-500 shadow-sm"></span>
                      <span className="flex-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Failed</span>
                    </div>
                    <span className="text-sm font-bold text-red-600">20.6%</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-gray-500 shadow-sm"></span>
                      <span className="flex-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Pending</span>
                    </div>
                    <span className="text-sm font-bold text-gray-600">3.7%</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded-full bg-gray-300 shadow-sm"></span>
                      <span className="flex-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Cancelled</span>
                    </div>
                    <span className="text-sm font-bold text-gray-500">0%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Details Table */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="px-8 py-6 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center bg-gray-50/50 dark:bg-slate-800/50">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Transaction Details by Service Outlet</h3>
              <Button variant="ghost" className="text-primary-600 dark:text-primary-400 text-sm font-semibold hover:bg-primary/50 dark:hover:bg-primary/20 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 px-4 py-2 rounded-lg">
                Download CSV
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 text-gray-600 dark:text-gray-400 text-xs font-black uppercase tracking-widest">
                    <th className="px-8 py-5 text-left font-semibold">Service Outlet</th>
                    <th className="px-8 py-5 text-left font-semibold">Transactions</th>
                    <th className="px-8 py-5 text-left font-semibold">Total Revenue</th>
                    <th className="px-8 py-5 text-left font-semibold">Market Share</th>
                    <th className="px-8 py-5 text-right font-semibold">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                  <tr className="hover:bg-gradient-to-r hover:from-primary/50 hover:to-transparent dark:hover:from-primary/20 dark:hover:to-transparent transition-all duration-300 group">
                    <td className="px-8 py-5 font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 transition-colors">RTIA Head Office</td>
                    <td className="px-8 py-5 text-gray-700 dark:text-gray-300 font-semibold">48</td>
                    <td className="px-8 py-5 font-bold text-gray-900 dark:text-gray-100">{formatCurrency(450106)}</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <span className="w-16 text-sm font-medium text-gray-600 dark:text-gray-400">50%</span>
                        <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full max-w-[120px] overflow-hidden">
                          <div className="bg-gradient-to-r from-primary to-primary-600 h-3 rounded-full shadow-sm transition-all duration-500" style={{width: '50%'}}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">+5.2%</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gradient-to-r hover:from-emerald-50 hover:to-transparent dark:hover:from-emerald-900/20 dark:hover:to-transparent transition-all duration-300 group">
                    <td className="px-8 py-5 font-bold text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 transition-colors">Pretoria Service Center</td>
                    <td className="px-8 py-5 text-gray-700 dark:text-gray-300 font-semibold">34</td>
                    <td className="px-8 py-5 font-bold text-gray-900 dark:text-gray-100">{formatCurrency(320050)}</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <span className="w-16 text-sm font-medium text-gray-600 dark:text-gray-400">35.5%</span>
                        <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full max-w-[120px] overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full shadow-sm transition-all duration-500" style={{width: '35.5%'}}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">+12.8%</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gradient-to-r hover:from-red-50 hover:to-transparent dark:hover:from-red-900/20 dark:hover:to-transparent transition-all duration-300 group">
                    <td className="px-8 py-5 font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 transition-colors">Johannesburg Branch</td>
                    <td className="px-8 py-5 text-gray-700 dark:text-gray-300 font-semibold">25</td>
                    <td className="px-8 py-5 font-bold text-gray-900 dark:text-gray-100">{formatCurrency(130056)}</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <span className="w-16 text-sm font-medium text-gray-600 dark:text-gray-400">14.5%</span>
                        <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full max-w-[120px] overflow-hidden">
                          <div className="bg-gradient-to-r from-gray-500 to-gray-600 h-3 rounded-full shadow-sm transition-all duration-500" style={{width: '14.5%'}}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-2 px-3 py-1 bg-red-100 dark:bg-red-900/30 rounded-lg">
                        <TrendingDown className="w-4 h-4 text-red-600" />
                        <span className="text-red-600 dark:text-red-400 text-sm font-bold">-2.4%</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Metrics;
