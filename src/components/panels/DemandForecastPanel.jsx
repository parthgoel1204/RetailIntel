import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Calendar, Search } from 'lucide-react';

// Sample data for demonstration
const forecastData = [
  { 
    product_id: 'SKU-1234', 
    product_name: 'Premium Bluetooth Headphones', 
    store_id: 'Store A', 
    forecast_qty: 145, 
    forecast_date: '2025-04-15' 
  },
  { 
    product_id: 'SKU-5678', 
    product_name: 'Smart Fitness Tracker', 
    store_id: 'Store B', 
    forecast_qty: 98, 
    forecast_date: '2025-04-15' 
  },
  { 
    product_id: 'SKU-9012', 
    product_name: 'Wireless Charging Pad', 
    store_id: 'Store C', 
    forecast_qty: 210, 
    forecast_date: '2025-04-15' 
  },
  { 
    product_id: 'SKU-3456', 
    product_name: 'Ultra HD Action Camera', 
    store_id: 'Store A', 
    forecast_qty: 62, 
    forecast_date: '2025-04-15' 
  },
  { 
    product_id: 'SKU-7890', 
    product_name: 'Portable Power Bank', 
    store_id: 'Store D', 
    forecast_qty: 175, 
    forecast_date: '2025-04-15' 
  },
];

const DemandForecastPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Demand Forecast</CardTitle>
        <CardDescription>Forecasted demand per product and store</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filter controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8"
            />
          </div>
          
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select store" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="store-a">Store A</SelectItem>
              <SelectItem value="store-b">Store B</SelectItem>
              <SelectItem value="store-c">Store C</SelectItem>
              <SelectItem value="store-d">Store D</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex gap-2 items-center">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <Input type="date" className="flex-1" />
          </div>
          
          <Button className="w-full">Apply Filters</Button>
        </div>
        
        {/* Forecast data table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product ID</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Store</TableHead>
              <TableHead className="text-right">Forecast Qty</TableHead>
              <TableHead>Forecast Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {forecastData.map((item) => (
              <TableRow key={`${item.product_id}-${item.store_id}`}>
                <TableCell className="font-medium">{item.product_id}</TableCell>
                <TableCell>{item.product_name}</TableCell>
                <TableCell>{item.store_id}</TableCell>
                <TableCell className="text-right">{item.forecast_qty}</TableCell>
                <TableCell>{item.forecast_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {/* Chart option */}
        <div className="flex justify-end">
          <Button variant="outline" className="flex items-center gap-2">
            <BarChart size={16} />
            View as Chart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemandForecastPanel;