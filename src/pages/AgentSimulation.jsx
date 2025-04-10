import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Play, Pause, SkipForward, RotateCw, Clock, Settings } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AgentSimulation = () => {
  return (
    <div className="min-h-screen flex bg-secondary">
      <Sidebar />
      <div className="flex-1 overflow-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Agent Simulation</h1>
            <p className="text-muted-foreground">Multi-agent coordination and workflow</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Settings size={16} />
              Simulation Settings
            </Button>
            <Button className="flex items-center gap-2">
              <RotateCw size={16} />
              Reset Simulation
            </Button>
          </div>
        </div>

        {/* Simulation controls */}
        <Card>
          <CardHeader>
            <CardTitle>Simulation Controls</CardTitle>
            <CardDescription>Run and monitor the multi-agent system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button size="icon" variant="outline">
                  <Play className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Pause className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Simulation Time: Day 3, Hour 14</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge variant="outline">x1 Speed</Badge>
                <Badge>x2 Speed</Badge>
                <Badge variant="outline">x4 Speed</Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Status:</span>
                <Badge className="bg-green-500">Running</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Agent interaction visualization */}
        <Card>
          <CardHeader>
            <CardTitle>Agent Interaction Flow</CardTitle>
            <CardDescription>Current workflow and communication between agents</CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p>Agent interaction visualization would appear here</p>
              <p className="text-sm">Showing data flow and decision processes</p>
            </div>
          </CardContent>
        </Card>

        {/* Agents grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AgentCard 
            name="Store Agent" 
            description="Monitors store-level inventory and sales" 
            status="Active" 
            progress={92}
            activity="Analyzing inventory levels at Store B"
            color="border-retail-blue"
          />
          <AgentCard 
            name="Warehouse Agent" 
            description="Manages warehouse operations and fulfillment" 
            status="Active" 
            progress={87}
            activity="Allocating stock for Store B reorder request"
            color="border-retail-green"
          />
          <AgentCard 
            name="Supplier Agent" 
            description="Handles supplier orders and lead times" 
            status="Active" 
            progress={95}
            activity="Checking lead times for warehouse replenishment"
            color="border-retail-yellow"
          />
          <AgentCard 
            name="Pricing Agent" 
            description="Optimizes pricing based on market conditions" 
            status="Active" 
            progress={84}
            activity="Calculating elasticity for SKU-5678"
            color="border-retail-red"
          />
          <AgentCard 
            name="Demand Agent" 
            description="Forecasts future demand using ML models" 
            status="Active" 
            progress={90}
            activity="Updating forecast for next 7 days"
            color="border-retail-darkBlue"
          />
        </div>

        {/* Recent messages */}
        <Card>
          <CardHeader>
            <CardTitle>Agent Communication Log</CardTitle>
            <CardDescription>Messages exchanged between agents</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>From</TableHead>
                  <TableHead>To</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>14:23:45</TableCell>
                  <TableCell>Store Agent</TableCell>
                  <TableCell>Warehouse Agent</TableCell>
                  <TableCell>Request restock for SKU-5678 at Store B</TableCell>
                  <TableCell><Badge>Processed</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>14:23:52</TableCell>
                  <TableCell>Warehouse Agent</TableCell>
                  <TableCell>Store Agent</TableCell>
                  <TableCell>Confirming restock allocation for SKU-5678</TableCell>
                  <TableCell><Badge>Processed</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>14:24:05</TableCell>
                  <TableCell>Warehouse Agent</TableCell>
                  <TableCell>Supplier Agent</TableCell>
                  <TableCell>Check lead time for SKU-5678 warehouse replenishment</TableCell>
                  <TableCell><Badge variant="outline">Pending</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>14:24:30</TableCell>
                  <TableCell>Demand Agent</TableCell>
                  <TableCell>Pricing Agent</TableCell>
                  <TableCell>Updated forecast for SKU-9012 showing increased demand</TableCell>
                  <TableCell><Badge>Processed</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>14:24:48</TableCell>
                  <TableCell>Pricing Agent</TableCell>
                  <TableCell>Store Agent</TableCell>
                  <TableCell>Recommending 5% price increase for SKU-9012</TableCell>
                  <TableCell><Badge variant="outline">Pending</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const AgentCard = ({ name, description, status, progress, activity, color }) => {
  return (
    <Card className={`border-l-4 ${color}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge className="bg-green-500">{status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Task Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Current Activity:</span> {activity}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentSimulation;
