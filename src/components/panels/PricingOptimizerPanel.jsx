import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ArrowDown, ArrowUp, Check } from 'lucide-react';

// Sample data for demonstration
const pricingData = [
  { 
    product_id: 'SKU-1234', 
    product_name: 'Premium Bluetooth Headphones', 
    store_name: 'Store A', 
    current_price: 129.99, 
    competitor_price: 149.99,
    recommended_price: 139.99,
    elasticity: 0.7,
    status: 'increase'
  },
  { 
    product_id: 'SKU-5678', 
    product_name: 'Smart Fitness Tracker', 
    store_name: 'Store B', 
    current_price: 89.99, 
    competitor_price: 99.99,
    recommended_price: 79.99,
    elasticity: 1.2,
    status: 'discount'
  },
  { 
    product_id: 'SKU-9012', 
    product_name: 'Wireless Charging Pad', 
    store_name: 'Store C', 
    current_price: 29.99, 
    competitor_price: 24.99,
    recommended_price: 27.99,
    elasticity: 0.9,
    status: 'discount'
  },
  { 
    product_id: 'SKU-3456', 
    product_name: 'Ultra HD Action Camera', 
    store_name: 'Store A', 
    current_price: 199.99, 
    competitor_price: 219.99,
    recommended_price: 189.99,
    elasticity: 0.8,
    status: 'discount'
  },
  { 
    product_id: 'SKU-7890', 
    product_name: 'Portable Power Bank', 
    store_name: 'Store D', 
    current_price: 49.99, 
    competitor_price: 59.99,
    recommended_price: 49.99,
    elasticity: 1.5,
    status: 'maintain'
  },
];

const PricingOptimizerPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pricing Optimizer</CardTitle>
        <CardDescription>AI-driven price recommendations based on market data</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            Filters
          </Button>
        </div>
        
        {/* Pricing data table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product ID</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Store</TableHead>
              <TableHead className="text-right">Current Price</TableHead>
              <TableHead className="text-right">Competitor Price</TableHead>
              <TableHead className="text-right">Recommended</TableHead>
              <TableHead className="text-right">Elasticity</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pricingData.map((item) => (
              <TableRow key={`${item.product_id}-${item.store_name}`}>
                <TableCell className="font-medium">{item.product_id}</TableCell>
                <TableCell>{item.product_name}</TableCell>
                <TableCell>{item.store_name}</TableCell>
                <TableCell className="text-right">${item.current_price}</TableCell>
                <TableCell className="text-right">${item.competitor_price}</TableCell>
                <TableCell className="text-right font-medium">${item.recommended_price}</TableCell>
                <TableCell className="text-right">{item.elasticity}</TableCell>
                <TableCell>
                  <PriceActionBadge status={item.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="flex justify-end gap-2">
          <Button variant="outline">Refresh Recommendations</Button>
          <Button>Apply All Recommendations</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const PriceActionBadge = ({ status }) => {
  switch (status) {
    case 'increase':
      return (
        <div className="flex items-center text-retail-blue">
          <ArrowUp size={16} className="mr-1" />
          <span>Increase</span>
        </div>
      );
    case 'discount':
      return (
        <div className="flex items-center text-retail-green">
          <ArrowDown size={16} className="mr-1" />
          <span>Discount</span>
        </div>
      );
    case 'maintain':
      return (
        <div className="flex items-center text-retail-gray">
          <Check size={16} className="mr-1" />
          <span>Maintain</span>
        </div>
      );
    default:
      return <span>{status}</span>;
  }
};

export default PricingOptimizerPanel;
