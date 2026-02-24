import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Metrics from "./pages/Metrics";
import Revenue from "./pages/Revenue";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

// Metrics sub-components
const MetricsTransactions = () => <Metrics view="transactions" />;
const MetricsRevenue = () => <Metrics view="revenue" />;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/metrics" element={<Navigate to="/metrics/transactions" replace />} />
          <Route path="/metrics/transactions" element={<MetricsTransactions />} />
          <Route path="/metrics/revenue" element={<Revenue />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/help" element={<Help />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
