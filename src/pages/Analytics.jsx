import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Calendar, ChevronDown } from 'lucide-react';

const salesData = [
  { month: 'Jan', actual: 4000, forecast: 4200, previous: 3800 },
  { month: 'Feb', actual: 5000, forecast: 4800, previous: 4200 },
  { month: 'Mar', actual: 5500, forecast: 5600, previous: 4800 },
  { month: 'Apr', actual: 4800, forecast: 5000, previous: 4500 },
  { month: 'May', actual: 6000, forecast: 5800, previous: 5200 },
  { month: 'Jun', actual: 8000, forecast: 7500, previous: 6200 },
  { month: 'Jul', actual: 8500, forecast: 8200, previous: 6800 },
  { month: 'Aug', actual: 9000, forecast: 8800, previous: 7500 },
  { month: 'Sep', actual: 7500, forecast: 7800, previous: 6900 },
  { month: 'Oct', actual: 8200, forecast: 8000, previous: 7200 },
  { month: 'Nov', actual: 9800, forecast: 9500, previous: 8300 },
  { month: 'Dec', actual: 12000, forecast: 11500, previous: 10000 },
];

const inventoryMetrics = [
  { name: 'Stockout Rate', previous: 5.8, current: 3.2 },
  { name: 'Order Fulfillment Time', previous: 2.5, current: 1.2 },
  { name: 'Inventory Turnover', previous: 6.2, current: 8.4 },
  { name: 'Holding Cost', previous: 15000, current: 12600 },
  { name: 'Forecast Accuracy', previous: 85.5, current: 92.1 },
];

const pieData = [
  { name: 'Optimal', value: 65, color: '#0f9d58' },
  { name: 'Low Stock', value: 15, color: '#f4b400' },
  { name: 'Critical', value: 10, color: '#db4437' },
  { name: 'Overstocked', value: 10, color: '#4285f4' },
];

const Analytics = () => {
  return (
    <div className="min-h-screen flex bg-secondary">
      <Sidebar />
      <div className="flex-1 overflow-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Performance Analytics</h1>
            <p className="text-muted-foreground">System metrics and optimization results</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar size={16} />
              <span>This Quarter</span>
              <ChevronDown size={16} />
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download size={16} />
              Export Report
            </Button>
          </div>
        </div>

        {/* KPI summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard 
            title="Revenue Improvement" 
            value="$152,648" 
            change="+12.3%"
            trend="up"
          />
          <KpiCard 
            title="Inventory Holding Cost" 
            value="$42,351" 
            change="-8.7%"
            trend="down"
          />
          <KpiCard 
            title="Forecast Accuracy" 
            value="92.1%" 
            change="+6.6%"
            trend="up"
          />
          <KpiCard 
            title="Stockout Incidents" 
            value="28" 
            change="-42.5%"
            trend="down"
          />
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4 mt-4">
            {/* Sales & Forecast Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Sales Performance vs. Forecast</CardTitle>
                <CardDescription>Actual sales compared to AI forecasts</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={salesData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="actual" name="Actual Sales" stroke="#1a73e8" strokeWidth={2} />
                    <Line type="monotone" dataKey="forecast" name="AI Forecast" stroke="#0f9d58" strokeWidth={2} />
                    <Line type="monotone" dataKey="previous" name="Previous Year" stroke="#f4b400" strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            {/* Metrics Improvement */}
            <Card>
              <CardHeader>
                <CardTitle>Key Metrics Improvement</CardTitle>
                <CardDescription>Before vs. after AI optimization</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={inventoryMetrics}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="previous" name="Before Optimization" fill="#db4437" />
                    <Bar dataKey="current" name="After Optimization" fill="#0f9d58" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="inventory" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Status Distribution</CardTitle>
                  <CardDescription>Current inventory health breakdown</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Metrics</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Additional inventory metrics would appear here</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="pricing" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Pricing Effectiveness</CardTitle>
                <CardDescription>Impact of AI pricing recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Pricing analytics would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const KpiCard = ({ title, value, change, trend }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className={`text-sm ${trend === 'up' ? 'text-retail-green' : 'text-retail-red'}`}>
            {change} vs. last period
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Analytics;
