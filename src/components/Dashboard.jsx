import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Play, RefreshCw, Filter, BarChart2, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import TopProductsTable from './tables/TopProductsTable';
import AgentActivityTable from './tables/AgentActivityTable';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div>
          <h1 className="text-2xl font-bold">Retail Harmony Dashboard</h1>
          <p className="text-muted-foreground">Multi-agent inventory optimization system</p>
        </div>
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <Button variant="outline" className="flex items-center gap-2 flex-1 md:flex-auto">
            <RefreshCw size={16} />
            Refresh Data
          </Button>
          <Button variant="outline" className="flex items-center gap-2 flex-1 md:flex-auto">
            <Filter size={16} />
            Filters
          </Button>
          <Button className="flex items-center gap-2 flex-1 md:flex-auto">
            <Play size={16} />
            Run Simulation
          </Button>
        </div>
      </div>

      {/* Metrics Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard 
          title="Stockout Rate" 
          value="3.2%" 
          change="-0.8%" 
          trend="down" 
          description="Across all stores"
        />
        <MetricCard 
          title="Order Fulfillment" 
          value="1.4 days" 
          change="-0.3 days" 
          trend="down" 
          description="Average time"
        />
        <MetricCard 
          title="Inventory Cost" 
          value="$45,230" 
          change="+2.1%" 
          trend="up" 
          description="Monthly holding cost"
        />
        <MetricCard 
          title="Revenue" 
          value="$238,490" 
          change="+4.7%" 
          trend="up" 
          description="Monthly sales"
        />
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Product Performance</CardTitle>
            <CardDescription>Top performing products by revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <TopProductsTable />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Agent Activity</CardTitle>
            <CardDescription>Latest actions by system agents</CardDescription>
          </CardHeader>
          <CardContent>
            <AgentActivityTable />
          </CardContent>
        </Card>
      </div>

      {/* Simulation Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Simulation Controls</CardTitle>
          <CardDescription>Run simulations and view agent interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-wrap">
            <div className="w-full sm:w-auto">
              <Select>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Select cycle step" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="demand">Demand Forecasting</SelectItem>
                  <SelectItem value="store">Store Inventory</SelectItem>
                  <SelectItem value="warehouse">Warehouse Fulfillment</SelectItem>
                  <SelectItem value="supplier">Supplier Orders</SelectItem>
                  <SelectItem value="pricing">Pricing Optimization</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-auto">
              <Select>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full sm:w-auto">
              <Play size={16} className="mr-2" />
              Run Simulation Cycle
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Reset Parameters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Agent Sections */}
      <Tabs defaultValue="demand">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="demand">Demand Forecast</TabsTrigger>
          <TabsTrigger value="store">Store Inventory</TabsTrigger>
          <TabsTrigger value="warehouse">Warehouse Orders</TabsTrigger>
          <TabsTrigger value="pricing">Pricing Optimizer</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="demand" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Demand Forecast</CardTitle>
              <CardDescription>Predicted demand for products across stores</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Demand forecasting content would appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="store" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Store Inventory</CardTitle>
              <CardDescription>Current stock levels and status</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Store inventory content would appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="warehouse" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Warehouse Orders</CardTitle>
              <CardDescription>Ongoing orders and transfers</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Warehouse orders content would appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pricing" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Pricing Optimizer</CardTitle>
              <CardDescription>Price recommendations and comparisons</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Pricing optimizer content would appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="insights" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>System Insights</CardTitle>
              <CardDescription>Key trends and performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p>System insights content would appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Helper component for metric cards
const MetricCard = ({ 
  title, 
  value, 
  change, 
  trend, 
  description 
}) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
          </div>
          <div className={`flex items-center ${trend === 'up' ? 'text-retail-green' : 'text-retail-red'}`}>
            {trend === 'up' ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
            <span className="ml-1 text-sm font-medium">{change}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Dashboard;