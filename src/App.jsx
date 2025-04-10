import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DemandForecast from "./pages/DemandForecast";
import InventoryMonitoring from "./pages/InventoryMonitoring";
import PricingOptimization from "./pages/PricingOptimization";
import AgentSimulation from "./pages/AgentSimulation";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/demand-forecast" element={<DemandForecast />} />
          <Route path="/inventory-monitoring" element={<InventoryMonitoring />} />
          <Route path="/pricing-optimization" element={<PricingOptimization />} />
          <Route path="/agent-simulation" element={<AgentSimulation />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;