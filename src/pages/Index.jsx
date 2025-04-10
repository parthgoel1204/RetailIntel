import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Dashboard from '../components/Dashboard';
import DemandForecastPanel from '../components/panels/DemandForecastPanel';
import StoreInventoryPanel from '../components/panels/StoreInventoryPanel';
import WarehouseOrdersPanel from '../components/panels/WarehouseOrdersPanel';
import PricingOptimizerPanel from '../components/panels/PricingOptimizerPanel';
import MetricsSummaryPanel from '../components/panels/MetricsSummaryPanel';
import SimulationControlsPanel from '../components/panels/SimulationControlsPanel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen flex bg-secondary">
      <Sidebar />
      <div className="flex-1 overflow-auto md:ml-64">
        <Dashboard />
        
        <div className="p-6 space-y-6">
          <MetricsSummaryPanel />
          
          <Tabs defaultValue="demand">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="demand">Demand Forecast</TabsTrigger>
              <TabsTrigger value="inventory">Store Inventory</TabsTrigger>
              <TabsTrigger value="warehouse">Warehouse Orders</TabsTrigger>
              <TabsTrigger value="pricing">Pricing Optimizer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="demand" className="mt-4">
              <DemandForecastPanel />
            </TabsContent>
            
            <TabsContent value="inventory" className="mt-4">
              <StoreInventoryPanel />
            </TabsContent>
            
            <TabsContent value="warehouse" className="mt-4">
              <WarehouseOrdersPanel />
            </TabsContent>
            
            <TabsContent value="pricing" className="mt-4">
              <PricingOptimizerPanel />
            </TabsContent>
          </Tabs>
          
          <SimulationControlsPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;