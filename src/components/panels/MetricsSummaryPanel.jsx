import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingDown, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data for metrics
const metricsData = [
  { 
    id: 'stockout-rate', 
    name: 'Stockout Rate', 
    value: '3.2%', 
    previousValue: '4.0%', 
    trend: 'down',
    change: '-0.8%'
  },
  { 
    id: 'fulfillment-time', 
    name: 'Order Fulfillment Time', 
    value: '1.4 days', 
    previousValue: '1.7 days', 
    trend: 'down',
    change: '-0.3 days'
  },
  { 
    id: 'holding-cost', 
    name: 'Inventory Holding Cost', 
    value: '$45,230', 
    previousValue: '$44,300', 
    trend: 'up',
    change: '+2.1%'
  },
  { 
    id: 'revenue', 
    name: 'Monthly Revenue', 
    value: '$238,490', 
    previousValue: '$227,780', 
    trend: 'up',
    change: '+4.7%'
  },
  { 
    id: 'price-competitiveness', 
    name: 'Price Competitiveness', 
    value: '94.2%', 
    previousValue: '91.5%', 
    trend: 'up',
    change: '+2.7%'
  },
  { 
    id: 'customer-satisfaction', 
    name: 'Customer Satisfaction', 
    value: '4.7/5', 
    previousValue: '4.5/5', 
    trend: 'up',
    change: '+0.2'
  },
  { 
    id: 'sales-forecast-accuracy', 
    name: 'Sales Forecast Accuracy', 
    value: '92.3%', 
    previousValue: '89.8%', 
    trend: 'up',
    change: '+2.5%'
  },
  { 
    id: 'inventory-turnover', 
    name: 'Inventory Turnover', 
    value: '5.8', 
    previousValue: '5.4', 
    trend: 'up',
    change: '+0.4'
  },
];

// Sample chart data
const chartData = [
  { name: 'Jan', stockout: 5.2, revenue: 198000, fulfillment: 1.8 },
  { name: 'Feb', stockout: 4.8, revenue: 210000, fulfillment: 1.7 },
  { name: 'Mar', stockout: 4.3, revenue: 215000, fulfillment: 1.6 },
  { name: 'Apr', stockout: 3.8, revenue: 225000, fulfillment: 1.5 },
  { name: 'May', stockout: 3.5, revenue: 230000, fulfillment: 1.4 },
  { name: 'Jun', stockout: 3.2, revenue: 238000, fulfillment: 1.4 },
];

const MetricsSummaryPanel = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Metrics Summary</CardTitle>
          <CardDescription>Key performance indicators for system evaluation</CardDescription>
        </div>
        <Select defaultValue="month">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="quarter">This Quarter</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="cards">
          <TabsList className="mb-4">
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="chart">Charts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cards">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {metricsData.map((metric) => (
                <MetricCard
                  key={metric.id}
                  name={metric.name}
                  value={metric.value}
                  change={metric.change}
                  trend={metric.trend}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="chart">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Revenue Trend</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" stroke="#1a73e8" name="Revenue ($)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Stockout Rate & Fulfillment Time</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="stockout" fill="#db4437" name="Stockout Rate (%)" />
                      <Bar yAxisId="right" dataKey="fulfillment" fill="#0f9d58" name="Fulfillment Time (days)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

const MetricCard = ({ name, value, change, trend }) => {
  // Determine if trend is positive or negative based on the metric type
  const isPositive = 
    (trend === 'up' && (name.includes('Revenue') || name.includes('Accuracy') || name.includes('Satisfaction') || name.includes('Turnover') || name.includes('Competitiveness'))) ||
    (trend === 'down' && (name.includes('Stockout') || name.includes('Fulfillment') || name.includes('Cost')));
  
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{name}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
          </div>
          <div className={`flex items-center ${isPositive ? 'text-retail-green' : 'text-retail-red'}`}>
            {trend === 'up' ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
            <span className="ml-1 text-sm font-medium">{change}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsSummaryPanel;
