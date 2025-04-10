import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter } from 'lucide-react';

// Sample data for demonstration
const warehouseOrdersData = [
  { 
    id: 'ORD-1234', 
    product_name: 'Premium Bluetooth Headphones', 
    source: 'Warehouse A', 
    destination: 'Store B', 
    quantity: 25, 
    eta: '2025-04-12',
    status: 'pending'
  },
  { 
    id: 'ORD-5678', 
    product_name: 'Smart Fitness Tracker', 
    source: 'Supplier XYZ', 
    destination: 'Warehouse B', 
    quantity: 150, 
    eta: '2025-04-15',
    status: 'shipped'
  },
  { 
    id: 'ORD-9012', 
    product_name: 'Wireless Charging Pad', 
    source: 'Warehouse C', 
    destination: 'Store A', 
    quantity: 40, 
    eta: '2025-04-10',
    status: 'delivered'
  },
  { 
    id: 'ORD-3456', 
    product_name: 'Ultra HD Action Camera', 
    source: 'Supplier ABC', 
    destination: 'Warehouse A', 
    quantity: 75, 
    eta: '2025-04-18',
    status: 'pending'
  },
  { 
    id: 'ORD-7890', 
    product_name: 'Portable Power Bank', 
    source: 'Warehouse B', 
    destination: 'Store C', 
    quantity: 60, 
    eta: '2025-04-11',
    status: 'shipped'
  },
];

const WarehouseOrdersPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Warehouse Orders</CardTitle>
        <CardDescription>Order status for warehouse-to-store and supplier-to-warehouse</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search orders..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            Filters
          </Button>
        </div>
        
        {/* Order tabs */}
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="to-store">To Store</TabsTrigger>
            <TabsTrigger value="to-warehouse">To Warehouse</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead>ETA</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {warehouseOrdersData.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.product_name}</TableCell>
                    <TableCell>{order.source}</TableCell>
                    <TableCell>{order.destination}</TableCell>
                    <TableCell className="text-right">{order.quantity}</TableCell>
                    <TableCell>{order.eta}</TableCell>
                    <TableCell>
                      <OrderStatusBadge status={order.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          
          <TabsContent value="to-store" className="mt-4">
            <p>Warehouse to store orders would appear here</p>
          </TabsContent>
          
          <TabsContent value="to-warehouse" className="mt-4">
            <p>Supplier to warehouse orders would appear here</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

const OrderStatusBadge = ({ status }) => {
  switch (status) {
    case 'pending':
      return <Badge variant="outline">Pending</Badge>;
    case 'shipped':
      return <Badge variant="default">Shipped</Badge>;
    case 'delivered':
      return <Badge variant="secondary" className="bg-retail-green text-white">Delivered</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default WarehouseOrdersPanel;
