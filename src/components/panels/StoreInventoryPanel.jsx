import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from 'lucide-react';

// Sample data for demonstration
const inventoryData = [
  { 
    product_id: 'SKU-1234', 
    product_name: 'Premium Bluetooth Headphones', 
    store_name: 'Store A', 
    stock_level: 38, 
    reorder_point: 25, 
    expiry_date: '2025-12-10',
    status: 'normal'
  },
  { 
    product_id: 'SKU-5678', 
    product_name: 'Smart Fitness Tracker', 
    store_name: 'Store B', 
    stock_level: 12, 
    reorder_point: 20, 
    expiry_date: '2026-05-22',
    status: 'low'
  },
  { 
    product_id: 'SKU-9012', 
    product_name: 'Wireless Charging Pad', 
    store_name: 'Store C', 
    stock_level: 65, 
    reorder_point: 30, 
    expiry_date: '2025-06-15',
    status: 'normal'
  },
  { 
    product_id: 'SKU-3456', 
    product_name: 'Ultra HD Action Camera', 
    store_name: 'Store A', 
    stock_level: 8, 
    reorder_point: 15, 
    expiry_date: '2025-05-03',
    status: 'expiring'
  },
  { 
    product_id: 'SKU-7890', 
    product_name: 'Portable Power Bank', 
    store_name: 'Store D', 
    stock_level: 4, 
    reorder_point: 25, 
    expiry_date: '2026-01-20',
    status: 'low'
  },
];

const StoreInventoryPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Store Inventory</CardTitle>
        <CardDescription>Current stock levels and status</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search inventory..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            Filters
          </Button>
        </div>
        
        {/* Inventory data table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product ID</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Store</TableHead>
              <TableHead className="text-right">Stock Level</TableHead>
              <TableHead className="text-right">Reorder Point</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryData.map((item) => (
              <TableRow key={`${item.product_id}-${item.store_name}`}>
                <TableCell className="font-medium">{item.product_id}</TableCell>
                <TableCell>{item.product_name}</TableCell>
                <TableCell>{item.store_name}</TableCell>
                <TableCell className="text-right">{item.stock_level}</TableCell>
                <TableCell className="text-right">{item.reorder_point}</TableCell>
                <TableCell>{item.expiry_date}</TableCell>
                <TableCell>
                  <StatusBadge status={item.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const StatusBadge = ({ status }) => {
  switch (status) {
    case 'low':
      return <Badge variant="destructive">Low Stock</Badge>;
    case 'expiring':
      return <Badge variant="outline" className="border-yellow-500 text-yellow-600">Expiring Soon</Badge>;
    default:
      return <Badge variant="secondary">Optimal</Badge>;
  }
};

export default StoreInventoryPanel;