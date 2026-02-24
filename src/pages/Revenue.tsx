import { useState } from "react";
import { LogOut, ArrowLeftRight, CheckCircle, CreditCard as Payments, Percent, AlertCircle, Clock, Calculator, Router, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Sidebar from "@/components/Sidebar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";



const Revenue = () => {
  // Sample revenue data by service outlet
  const revenueData = [
    { outlet: 'Sandton City', revenue: 458000, transactions: 67, share: 18.7 },
    { outlet: 'Rosebank Mall', revenue: 387000, transactions: 54, share: 15.8 },
    { outlet: 'Eastgate Mall', revenue: 342000, transactions: 48, share: 13.9 },
    { outlet: 'Fourways Mall', revenue: 298000, transactions: 41, share: 12.1 },
    { outlet: 'Cresta Centre', revenue: 276000, transactions: 38, share: 11.2 },
    { outlet: 'Clearwater Mall', revenue: 254000, transactions: 35, share: 10.4 },
    { outlet: 'Menlyn Park', revenue: 231000, transactions: 32, share: 9.4 },
    { outlet: 'Gateworld', revenue: 198000, transactions: 27, share: 8.1 },
    { outlet: 'Brooklyn Mall', revenue: 176000, transactions: 24, share: 7.2 },
    { outlet: 'Centurion Mall', revenue: 145000, transactions: 19, share: 5.9 }
  ];

  // Service performance data based on actual services from transaction table
  const serviceData = [
    { service: 'Traffic Infringement', fullName: 'Traffic Infringement Payment', revenue: 1850000, transactions: 89, avgValue: 20787, share: 75.4 },
    { service: 'Motor Vehicle License', fullName: 'Motor Vehicle License Renewal', revenue: 420000, transactions: 45, avgValue: 9333, share: 17.1 },
    { service: 'Driver\'s License', fullName: 'Driver\'s License Services', revenue: 120000, transactions: 58, avgValue: 2069, share: 4.9 },
    { service: 'Installment Payments', fullName: 'Installment Payment Processing', revenue: 63495, transactions: 34, avgValue: 1868, share: 2.6 }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
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
             Revenue Metrics
            </h1>
            <p className="text-muted-foreground">
              Financial performance and revenue analytics
            </p>
          </div>


          {/* Comprehensive Revenue Metrics */}
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

          {/* Revenue by Service Outlet Section */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Revenue by Service Outlet
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Revenue performance and detailed breakdown by service outlet locations</p>
              </div>
            </div>
            
            {/* Bar Chart */}
            <div className="mb-8">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="outlet" 
                    tick={{ fill: '#6b7280', fontSize: 11 }}
                    axisLine={{ stroke: '#9ca3af' }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis 
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    axisLine={{ stroke: '#9ca3af' }}
                    label={{ value: 'Revenue (R)', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    labelStyle={{ color: '#111827', fontWeight: 'bold' }}
                  />
                  <Bar 
                    dataKey="revenue" 
                    fill="#004688" 
                    name="Revenue (R)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Detailed Table */}
            <div className="border-t border-gray-200 dark:border-slate-700 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Service Outlet Details</h3>
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-slate-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
                      <th className="text-left py-2 px-4 font-semibold text-gray-900 dark:text-gray-100">Service Outlet</th>
                      <th className="text-right py-2 px-4 font-semibold text-gray-900 dark:text-gray-100">Revenue</th>
                      <th className="text-right py-2 px-4 font-semibold text-gray-900 dark:text-gray-100">Transactions</th>
                      <th className="text-right py-2 px-4 font-semibold text-gray-900 dark:text-gray-100">Share %</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                    {revenueData.map((outlet, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-slate-800/30 transition-all duration-200">
                        <td className="py-2 px-4">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            <span className="font-medium text-gray-900 dark:text-gray-100">{outlet.outlet}</span>
                          </div>
                        </td>
                        <td className="text-right py-2 px-3">
                          <span className="font-bold text-gray-900 dark:text-gray-100">R {outlet.revenue.toLocaleString()}</span>
                        </td>
                        <td className="text-right py-2 px-3">
                          <div className="flex items-center justify-end space-x-2">
                            <span className="text-gray-600 dark:text-gray-400">{outlet.transactions}</span>
                            <div className="w-12 h-1.5 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full"
                                style={{ width: `${(outlet.transactions / 67) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right py-2 px-4">
                          <div className="flex items-center justify-end">
                            <div className="w-8 h-8 relative">
                              <svg className="w-8 h-8 transform -rotate-90">
                                <circle
                                  cx="16"
                                  cy="16"
                                  r="12"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="none"
                                  className="text-gray-200 dark:text-slate-700"
                                />
                                <circle
                                  cx="16"
                                  cy="16"
                                  r="12"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="none"
                                  strokeDasharray={`${2 * Math.PI * 12}`}
                                  strokeDashoffset={`${2 * Math.PI * 12 * (1 - outlet.share / 100)}`}
                                  className="text-primary transition-all duration-500"
                                />
                              </svg>
                              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900 dark:text-gray-100">
                                {outlet.share}%
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 border-t-2 border-gray-200 dark:border-slate-700">
                      <td className="py-2 px-4">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                          <span className="font-bold text-gray-900 dark:text-gray-100">Total</span>
                        </div>
                      </td>
                      <td className="text-right py-2 px-3">
                        <span className="font-bold text-lg text-gray-900 dark:text-gray-100">
                          R {revenueData.reduce((sum, outlet) => sum + outlet.revenue, 0).toLocaleString()}
                        </span>
                      </td>
                      <td className="text-right py-2 px-3">
                        <span className="font-bold text-gray-900 dark:text-gray-100">
                          {revenueData.reduce((sum, outlet) => sum + outlet.transactions, 0)}
                        </span>
                      </td>
                      <td className="text-right py-2 px-4">
                        <div className="flex items-center justify-end">
                          <div className="w-8 h-8 relative">
                            <svg className="w-8 h-8 transform -rotate-90">
                              <circle
                                cx="16"
                                cy="16"
                                r="12"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                className="text-emerald-200 dark:text-emerald-900"
                              />
                              <circle
                                cx="16"
                                cy="16"
                                r="12"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 12}`}
                                strokeDashoffset="0"
                                className="text-emerald-500"
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-emerald-700 dark:text-emerald-300">
                              100%
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Service Performance Analysis Section */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Service Performance Analysis
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Revenue and transaction breakdown by service type</p>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-xl border border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Total Services Revenue</p>
                    <p className="text-2xl font-black text-gray-900 dark:text-gray-100 mt-1">R {serviceData.reduce((sum, service) => sum + service.revenue, 0).toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Payments className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald/5 to-emerald/10 dark:from-emerald/10 dark:to-emerald/20 p-6 rounded-xl border border-emerald/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Total Services Transactions</p>
                    <p className="text-2xl font-black text-gray-900 dark:text-gray-100 mt-1">{serviceData.reduce((sum, service) => sum + service.transactions, 0)}</p>
                  </div>
                  <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center">
                    <ArrowLeftRight className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Revenue Chart */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Revenue by Service</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={serviceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="service" 
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    axisLine={{ stroke: '#9ca3af' }}
                  />
                  <YAxis 
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    axisLine={{ stroke: '#9ca3af' }}
                    label={{ value: 'Revenue (R)', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    labelStyle={{ color: '#111827', fontWeight: 'bold' }}
                    formatter={(value: number) => [`R ${value.toLocaleString()}`, 'Revenue']}
                  />
                  <Bar 
                    dataKey="revenue" 
                    fill="#004688" 
                    name="Revenue (R)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Service Distribution */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Service Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {serviceData.map((service, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{service.service}</span>
                      <span className="text-xs font-bold text-primary">{service.share}%</span>
                    </div>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-100">R {service.revenue.toLocaleString()}</p>
                    <div className="mt-2 w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full transition-all duration-500"
                        style={{ width: `${service.share}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Revenue Details Table */}
            <div className="border-t border-gray-200 dark:border-slate-700 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Service Revenue Details</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">{serviceData.length} services</div>
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-slate-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
                      <th className="text-left py-2 px-4 font-semibold text-gray-900 dark:text-gray-100">Service</th>
                      <th className="text-right py-2 px-4 font-semibold text-gray-900 dark:text-gray-100">Revenue</th>
                      <th className="text-right py-2 px-4 font-semibold text-gray-900 dark:text-gray-100">Transactions</th>
                      <th className="text-right py-2 px-4 font-semibold text-gray-900 dark:text-gray-100">Avg Value</th>
                      <th className="text-right py-2 px-4 font-semibold text-gray-900 dark:text-gray-100">Share</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                    {serviceData.map((service, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-slate-800/30 transition-all duration-200">
                        <td className="py-2 px-4">
                          <div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                              <span className="font-medium text-gray-900 dark:text-gray-100">{service.service}</span>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 ml-5 mt-1">{service.fullName}</div>
                          </div>
                        </td>
                        <td className="text-right py-2 px-3">
                          <span className="font-bold text-gray-900 dark:text-gray-100">R {service.revenue.toLocaleString()}</span>
                        </td>
                        <td className="text-right py-2 px-3">
                          <span className="text-gray-600 dark:text-gray-400">{service.transactions}</span>
                        </td>
                        <td className="text-right py-2 px-3">
                          <span className="text-gray-600 dark:text-gray-400">R {service.avgValue.toLocaleString()}</span>
                        </td>
                        <td className="text-right py-2 px-4">
                          <div className="flex items-center justify-end">
                            <div className="w-8 h-8 relative">
                              <svg className="w-8 h-8 transform -rotate-90">
                                <circle
                                  cx="16"
                                  cy="16"
                                  r="12"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="none"
                                  className="text-gray-200 dark:text-slate-700"
                                />
                                <circle
                                  cx="16"
                                  cy="16"
                                  r="12"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="none"
                                  strokeDasharray={`${2 * Math.PI * 12}`}
                                  strokeDashoffset={`${2 * Math.PI * 12 * (1 - service.share / 100)}`}
                                  className="text-primary transition-all duration-500"
                                />
                              </svg>
                              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-900 dark:text-gray-100">
                                {service.share}%
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 border-t-2 border-gray-200 dark:border-slate-700">
                      <td className="py-2 px-4">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                          <span className="font-bold text-gray-900 dark:text-gray-100">Total</span>
                        </div>
                      </td>
                      <td className="text-right py-2 px-3">
                        <span className="font-bold text-lg text-gray-900 dark:text-gray-100">
                          R {serviceData.reduce((sum, service) => sum + service.revenue, 0).toLocaleString()}
                        </span>
                      </td>
                      <td className="text-right py-2 px-3">
                        <span className="font-bold text-gray-900 dark:text-gray-100">
                          {serviceData.reduce((sum, service) => sum + service.transactions, 0)}
                        </span>
                      </td>
                      <td className="text-right py-2 px-3">
                        <span className="font-bold text-gray-900 dark:text-gray-100">
                          R {Math.round(serviceData.reduce((sum, service) => sum + service.revenue, 0) / serviceData.reduce((sum, service) => sum + service.transactions, 0)).toLocaleString()}
                        </span>
                      </td>
                      <td className="text-right py-2 px-4">
                        <div className="flex items-center justify-end">
                          <div className="w-8 h-8 relative">
                            <svg className="w-8 h-8 transform -rotate-90">
                              <circle
                                cx="16"
                                cy="16"
                                r="12"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                className="text-emerald-200 dark:text-emerald-900"
                              />
                              <circle
                                cx="16"
                                cy="16"
                                r="12"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 12}`}
                                strokeDashoffset="0"
                                className="text-emerald-500"
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-emerald-700 dark:text-emerald-300">
                              100%
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </main>
      </div>

      
    </div>
  );
};

export default Revenue;
