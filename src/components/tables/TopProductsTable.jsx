import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown } from 'lucide-react';

const productsData = [
  { 
    id: 'SKU-1234', 
    name: 'Premium Bluetooth Headphones', 
    revenue: '$15,245', 
    trend: 'up',
    change: '12.3%'
  },
  { 
    id: 'SKU-5678', 
    name: 'Smart Fitness Tracker', 
    revenue: '$12,650', 
    trend: 'up',
    change: '8.7%'
  },
  { 
    id: 'SKU-9012', 
    name: 'Wireless Charging Pad', 
    revenue: '$9,840', 
    trend: 'down',
    change: '2.1%'
  },
  { 
    id: 'SKU-3456', 
    name: 'Ultra HD Action Camera', 
    revenue: '$8,920', 
    trend: 'up',
    change: '5.4%'
  },
  { 
    id: 'SKU-7890', 
    name: 'Portable Power Bank', 
    revenue: '$7,435', 
    trend: 'down',
    change: '1.8%'
  },
];

const TopProductsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Revenue</TableHead>
          <TableHead className="text-right">Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productsData.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell className="text-right">{product.revenue}</TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end">
                {product.trend === 'up' ? (
                  <TrendingUp className="text-retail-green mr-1" size={16} />
                ) : (
                  <TrendingDown className="text-retail-red mr-1" size={16} />
                )}
                <span className={product.trend === 'up' ? 'text-retail-green' : 'text-retail-red'}>
                  {product.change}
                </span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TopProductsTable;