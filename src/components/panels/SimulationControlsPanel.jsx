import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Play, SkipForward, Pause, RefreshCw } from 'lucide-react';

const SimulationControlsPanel = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Simulation Controls</CardTitle>
        <CardDescription>Run and control system simulations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Simulation Date</label>
            <Input type="date" defaultValue="2025-04-09" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Cycle Step</label>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select cycle step" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Steps</SelectItem>
                <SelectItem value="demand">Demand Forecasting</SelectItem>
                <SelectItem value="store">Store Inventory</SelectItem>
                <SelectItem value="warehouse">Warehouse Fulfillment</SelectItem>
                <SelectItem value="supplier">Supplier Orders</SelectItem>
                <SelectItem value="pricing">Pricing Optimization</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Simulation Speed</label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Stockout Sensitivity</label>
            <Slider defaultValue={[70]} max={100} step={1} />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Price Elasticity Multiplier</label>
            <Slider defaultValue={[100]} max={200} step={5} />
          </div>
        </div>
        
        <div className="border rounded-md p-4 bg-secondary">
          <h3 className="text-sm font-medium mb-2">Scenario Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs">Demand Shock</label>
              <Select defaultValue="none">
                <SelectTrigger>
                  <SelectValue placeholder="Select scenario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="increase">Sudden Increase</SelectItem>
                  <SelectItem value="decrease">Sudden Decrease</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs">Supply Chain Disruption</label>
              <Select defaultValue="none">
                <SelectTrigger>
                  <SelectValue placeholder="Select scenario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="minor">Minor Delay</SelectItem>
                  <SelectItem value="major">Major Disruption</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs">Competitor Action</label>
              <Select defaultValue="none">
                <SelectTrigger>
                  <SelectValue placeholder="Select scenario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="price-cut">Price Cut</SelectItem>
                  <SelectItem value="promotion">Promotion</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center">
          <Button 
            className="flex-1" 
            variant={isSimulating ? "destructive" : "default"}
            onClick={() => setIsSimulating(!isSimulating)}
          >
            {isSimulating ? (
              <>
                <Pause size={16} className="mr-2" />
                Stop Simulation
              </>
            ) : (
              <>
                <Play size={16} className="mr-2" />
                Run Simulation
              </>
            )}
          </Button>
          
          <Button variant="outline" className="flex-1">
            <SkipForward size={16} className="mr-2" />
            Step Forward
          </Button>
          
          <Button variant="outline" className="flex-1">
            <RefreshCw size={16} className="mr-2" />
            Reset
          </Button>
        </div>
        
        {isSimulating && (
          <div className="bg-muted p-4 rounded-md animate-pulse-light">
            <p className="text-center text-sm font-medium">Simulation in progress...</p>
            <div className="w-full h-2 bg-background rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-retail-blue rounded-full animate-pulse" style={{ width: '45%' }}></div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SimulationControlsPanel;
