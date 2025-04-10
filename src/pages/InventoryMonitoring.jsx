import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import InventoryStatusChart from '../components/charts/InventoryStatusChart';

const inventoryItems = [
  { 
    id: 'SKU-1234', 
    name: 'Premium Bluetooth Headphones', 
    store: 'Store A',
    current: 85,
    optimal: 90,
    reorder: 50,
    status: 'Optimal'
  },
  { 
    id: 'SKU-5678', 
    name: 'Smart Fitness Tracker', 
    store: 'Store B',
    current: 45,
    optimal: 80,
    reorder: 40,
    status: 'Low'
  },
  { 
    id: 'SKU-9012', 
    name: 'Wireless Charging Pad', 
    store: 'Store C',
    current: 92,
    optimal: 85,
    reorder: 45,
    status: 'Overstocked'
  },
  { 
    id: 'SKU-3456', 
    name: 'Ultra HD Action Camera', 
    store: 'Store D',
    current: 63,
    optimal: 75,
    reorder: 35,
    status: 'Optimal'
  },
  { 
    id: 'SKU-7890', 
    name: 'Portable Power Bank', 
    store: 'Store E',
    current: 25,
    optimal: 80,
    reorder: 40,
    status: 'Critical'
  },
];

const InventoryMonitoring = () => {
  return (
    <div className="min-h-screen flex bg-secondary">
      <Sidebar />
      <div className="flex-1 overflow-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Inventory Monitoring</h1>
            <p className="text-muted-foreground">Real-time stock levels and management</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <RefreshCw size={16} />
              Refresh
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download size={16} />
              Export
            </Button>
            <Button className="flex items-center gap-2">
              Restock Analysis
            </Button>
          </div>
        </div>

        <div className="flex gap-4 items-center">
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

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Items</TabsTrigger>
            <TabsTrigger value="low">Low Stock</TabsTrigger>
            <TabsTrigger value="optimal">Optimal</TabsTrigger>
            <TabsTrigger value="over">Overstocked</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Overview</CardTitle>
                <CardDescription>Current stock levels across all stores</CardDescription>
              </CardHeader>
              <CardContent>
                <InventoryStatusChart />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Inventory Items</CardTitle>
                <CardDescription>Detailed inventory status by product</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Store</TableHead>
                      <TableHead className="text-right">Current</TableHead>
                      <TableHead className="text-right">Optimal</TableHead>
                      <TableHead className="text-right">Reorder Point</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inventoryItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.store}</TableCell>
                        <TableCell className="text-right">{item.current}%</TableCell>
                        <TableCell className="text-right">{item.optimal}%</TableCell>
                        <TableCell className="text-right">{item.reorder}%</TableCell>
                        <TableCell>
                          <StatusBadge status={item.status} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="low">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Low Stock Items</CardTitle>
                <CardDescription>Products that need attention</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Low stock items would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="optimal">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Optimal Stock Items</CardTitle>
                <CardDescription>Products with healthy inventory levels</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Optimal stock items would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="over">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Overstocked Items</CardTitle>
                <CardDescription>Products with excess inventory</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Overstocked items would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const getVariant = () => {
    switch (status) {
      case 'Critical': return 'destructive';
      case 'Low': return 'outline';
      case 'Optimal': return 'default';
      case 'Overstocked': return 'secondary';
      default: return 'outline';
    }
  };

  return <Badge variant={getVariant()}>{status}</Badge>;
};

export default InventoryMonitoring;
