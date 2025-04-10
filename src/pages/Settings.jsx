import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Save, RefreshCw, Database, Lock } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen flex bg-secondary">
      <Sidebar />
      <div className="flex-1 overflow-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Configure the AI orchestrator system</p>
          </div>
          <Button className="flex items-center gap-2">
            <Save size={16} />
            Save All Settings
          </Button>
        </div>

        <Tabs defaultValue="general">
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="agents">Agent Config</TabsTrigger>
            <TabsTrigger value="data">Data Sources</TabsTrigger>
            <TabsTrigger value="api">API Keys</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure general system parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="system-name">System Name</Label>
                    <Input id="system-name" defaultValue="Retail Harmony AI Orchestrator" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="refresh-interval">Data Refresh Interval (minutes)</Label>
                    <Input id="refresh-interval" type="number" defaultValue="15" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="batch-size">Batch Processing Size</Label>
                    <Input id="batch-size" type="number" defaultValue="100" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time-zone">System Time Zone</Label>
                    <Select defaultValue="utc">
                      <SelectTrigger id="time-zone">
                        <SelectValue placeholder="Select time zone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="est">Eastern Time (EST)</SelectItem>
                        <SelectItem value="cst">Central Time (CST)</SelectItem>
                        <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="system-description">System Description</Label>
                  <Textarea id="system-description" defaultValue="Multi-agent AI system for retail inventory optimization across stores, warehouses, and suppliers." />
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive email alerts for critical events</p>
                  </div>
                  <Switch id="notifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="debug-mode">Debug Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable verbose logging for troubleshooting</p>
                  </div>
                  <Switch id="debug-mode" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save System Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="agents" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Agent Configuration</CardTitle>
                <CardDescription>Fine-tune individual agent parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="store">
                  <TabsList>
                    <TabsTrigger value="store">Store Agent</TabsTrigger>
                    <TabsTrigger value="warehouse">Warehouse Agent</TabsTrigger>
                    <TabsTrigger value="supplier">Supplier Agent</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing Agent</TabsTrigger>
                    <TabsTrigger value="demand">Demand Agent</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="store" className="space-y-4 mt-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Safety Stock Level</Label>
                        <div className="flex items-center space-x-2">
                          <Slider defaultValue={[15]} max={30} step={1} className="flex-1" />
                          <span className="w-12 text-center">15%</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Buffer inventory to prevent stockouts</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="reorder-threshold">Reorder Threshold</Label>
                        <div className="flex items-center space-x-2">
                          <Slider defaultValue={[30]} max={50} step={1} className="flex-1" />
                          <span className="w-12 text-center">30%</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Stock level that triggers reordering</p>
                      </div>
                      
                      <div className="flex items-center justify-between py-2">
                        <div className="space-y-0.5">
                          <Label htmlFor="auto-reorder">Automatic Reordering</Label>
                          <p className="text-sm text-muted-foreground">Allow agent to place orders autonomously</p>
                        </div>
                        <Switch id="auto-reorder" defaultChecked />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="warehouse" className="mt-4">
                    <div className="py-4">
                      <p>Warehouse agent configuration would appear here</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="supplier" className="mt-4">
                    <div className="py-4">
                      <p>Supplier agent configuration would appear here</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="pricing" className="mt-4">
                    <div className="py-4">
                      <p>Pricing agent configuration would appear here</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="demand" className="mt-4">
                    <div className="py-4">
                      <p>Demand agent configuration would appear here</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Agent Configuration</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="data" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Data Source Configuration</CardTitle>
                <CardDescription>Configure database connections and data sources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="database-type">Database Type</Label>
                    <Select defaultValue="sqlite">
                      <SelectTrigger id="database-type">
                        <SelectValue placeholder="Select database" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sqlite">SQLite</SelectItem>
                        <SelectItem value="postgres">PostgreSQL</SelectItem>
                        <SelectItem value="mysql">MySQL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="connection-string">Connection String</Label>
                    <div className="flex items-center space-x-2">
                      <Input id="connection-string" defaultValue="sqlite:///retail_harmony.db" />
                      <Button size="icon" variant="outline">
                        <Database className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-md font-medium">Data Import Sources</h3>
                  
                  <div className="space-y-2 border p-4 rounded-md">
                    <div className="flex justify-between items-center">
                      <Label>demand_forecasting.csv</Label>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <RefreshCw className="h-3 w-3" />
                        Reload
                      </Button>
                    </div>
                    <Input defaultValue="/data/demand_forecasting.csv" />
                  </div>
                  
                  <div className="space-y-2 border p-4 rounded-md">
                    <div className="flex justify-between items-center">
                      <Label>inventory_monitoring.csv</Label>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <RefreshCw className="h-3 w-3" />
                        Reload
                      </Button>
                    </div>
                    <Input defaultValue="/data/inventory_monitoring.csv" />
                  </div>
                  
                  <div className="space-y-2 border p-4 rounded-md">
                    <div className="flex justify-between items-center">
                      <Label>pricing_optimization.csv</Label>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <RefreshCw className="h-3 w-3" />
                        Reload
                      </Button>
                    </div>
                    <Input defaultValue="/data/pricing_optimization.csv" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Data Source Configuration</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="api" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>API Configuration</CardTitle>
                <CardDescription>Manage API keys and external service connections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ml-api-key">Machine Learning API Key</Label>
                  <div className="flex items-center space-x-2">
                    <Input id="ml-api-key" type="password" defaultValue="sk_********************************************" />
                    <Button size="icon" variant="outline">
                      <Lock className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Used for external ML model access</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="weather-api-key">Weather API Key</Label>
                  <div className="flex items-center space-x-2">
                    <Input id="weather-api-key" type="password" defaultValue="************************" />
                    <Button size="icon" variant="outline">
                      <Lock className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">For weather data integration</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="competitor-api-key">Competitor Price API Key</Label>
                  <div className="flex items-center space-x-2">
                    <Input id="competitor-api-key" type="password" defaultValue="************************" />
                    <Button size="icon" variant="outline">
                      <Lock className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">For competitor price monitoring</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save API Configuration</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;