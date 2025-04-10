import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Slider } from "@/components/ui/slider";
import { DollarSign, TrendingUp, TrendingDown, BarChart2 } from 'lucide-react';

const pricingItems = [
  { 
    id: 'SKU-1234', 
    name: 'Premium Bluetooth Headphones', 
    currentPrice: 129.99,
    recommendedPrice: 139.99,
    competitorPrice: 149.99,
    elasticity: 0.7,
    impact: 'positive'
  },
  { 
    id: 'SKU-5678', 
    name: 'Smart Fitness Tracker', 
    currentPrice: 89.99,
    recommendedPrice: 79.99,
    competitorPrice: 99.99,
    elasticity: 1.2,
    impact: 'positive'
  },
  { 
    id: 'SKU-9012', 
    name: 'Wireless Charging Pad', 
    currentPrice: 29.99,
    recommendedPrice: 34.99,
    competitorPrice: 24.99,
    elasticity: 0.9,
    impact: 'negative'
  },
  { 
    id: 'SKU-3456', 
    name: 'Ultra HD Action Camera', 
    currentPrice: 199.99,
    recommendedPrice: 189.99,
    competitorPrice: 219.99,
    elasticity: 0.8,
    impact: 'positive'
  },
  { 
    id: 'SKU-7890', 
    name: 'Portable Power Bank', 
    currentPrice: 49.99,
    recommendedPrice: 44.99,
    competitorPrice: 59.99,
    elasticity: 1.5,
    impact: 'positive'
  },
];

const PricingOptimization = () => {
  return (
    <div className="min-h-screen flex bg-secondary">
      <Sidebar />
      <div className="flex-1 overflow-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Pricing Optimization</h1>
            <p className="text-muted-foreground">AI-driven price recommendations</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <BarChart2 size={16} />
              Elasticity Analysis
            </Button>
            <Button className="flex items-center gap-2">
              <DollarSign size={16} />
              Apply Recommendations
            </Button>
          </div>
        </div>

        <Tabs defaultValue="recommendations">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="recommendations" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Price Recommendations</CardTitle>
                <CardDescription>AI-suggested prices based on market data and elasticity</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="text-right">Current Price</TableHead>
                      <TableHead className="text-right">Recommended</TableHead>
                      <TableHead className="text-right">Competitor</TableHead>
                      <TableHead className="text-right">Elasticity</TableHead>
                      <TableHead>Impact</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricingItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className="text-right">${item.currentPrice}</TableCell>
                        <TableCell className="text-right font-medium">${item.recommendedPrice}</TableCell>
                        <TableCell className="text-right">${item.competitorPrice}</TableCell>
                        <TableCell className="text-right">{item.elasticity}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {item.impact === 'positive' ? (
                              <>
                                <TrendingUp className="text-retail-green mr-1" size={16} />
                                <span className="text-retail-green">+8.3%</span>
                              </>
                            ) : (
                              <>
                                <TrendingDown className="text-retail-red mr-1" size={16} />
                                <span className="text-retail-red">-3.5%</span>
                              </>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Strategy Settings</CardTitle>
                  <CardDescription>Adjust pricing strategy parameters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Revenue Focus</span>
                      <span>Volume Focus</span>
                    </div>
                    <Slider defaultValue={[60]} max={100} step={1} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Competitive Alignment</span>
                      <span>Value-Based</span>
                    </div>
                    <Slider defaultValue={[40]} max={100} step={1} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Stock Clearance</span>
                      <span>Profit Maximization</span>
                    </div>
                    <Slider defaultValue={[70]} max={100} step={1} />
                  </div>
                  
                  <Button className="w-full mt-4">
                    Recalculate Recommendations
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Market Factors</CardTitle>
                  <CardDescription>External factors influencing pricing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <FactorBar 
                      name="Competitor Pricing" 
                      value={85} 
                      color="bg-retail-blue" 
                    />
                    <FactorBar 
                      name="Customer Reviews" 
                      value={72} 
                      color="bg-retail-green" 
                    />
                    <FactorBar 
                      name="Stock Levels" 
                      value={63} 
                      color="bg-retail-yellow" 
                    />
                    <FactorBar 
                      name="Return Rate" 
                      value={25} 
                      color="bg-retail-red" 
                    />
                    <FactorBar 
                      name="Sales Velocity" 
                      value={92} 
                      color="bg-retail-darkBlue" 
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="analysis">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Price Elasticity Analysis</CardTitle>
                <CardDescription>How price changes affect demand</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Elasticity analysis content would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Price Change History</CardTitle>
                <CardDescription>Historical pricing and effects on sales</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Pricing history content would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const FactorBar = ({ name, value, color }) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className="font-medium">{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full`} 
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PricingOptimization;
