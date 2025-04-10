import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sliders, RefreshCw, Share2 } from 'lucide-react';
import SalesForecastChart from '../components/charts/SalesForecastChart';

const DemandForecast = () => {
  return (
    <div className="min-h-screen flex bg-secondary">
      <Sidebar />
      <div className="flex-1 overflow-auto p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Demand Forecasting</h1>
            <p className="text-muted-foreground">Predictive analytics for future product demand</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Sliders size={16} />
              Configure Models
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <RefreshCw size={16} />
              Update Forecast
            </Button>
            <Button className="flex items-center gap-2">
              <Share2 size={16} />
              Share Insights
            </Button>
          </div>
        </div>

        <Tabs defaultValue="product">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="product">By Product</TabsTrigger>
            <TabsTrigger value="store">By Store</TabsTrigger>
            <TabsTrigger value="time">By Time Period</TabsTrigger>
          </TabsList>
          <TabsContent value="product" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Demand Forecast</CardTitle>
                <CardDescription>Sales projection for the next 7 days by product category</CardDescription>
              </CardHeader>
              <CardContent>
                <SalesForecastChart />
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Influencing Factors</CardTitle>
                  <CardDescription>Key variables affecting forecasts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <FactorItem 
                      name="Seasonal Events" 
                      impact="High" 
                      description="Holiday shopping season approaching" 
                    />
                    <FactorItem 
                      name="Weather Forecast" 
                      impact="Medium" 
                      description="Colder temperatures expected" 
                    />
                    <FactorItem 
                      name="Competitor Promotion" 
                      impact="Medium" 
                      description="Main competitor running 20% discount" 
                    />
                    <FactorItem 
                      name="Economic Indicators" 
                      impact="Low" 
                      description="Stable consumer confidence index" 
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Model Performance</CardTitle>
                  <CardDescription>Accuracy metrics for forecast models</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ModelItem 
                      name="LSTM Model" 
                      accuracy={94.2} 
                      improved={true}
                    />
                    <ModelItem 
                      name="ARIMA Model" 
                      accuracy={87.5} 
                      improved={false}
                    />
                    <ModelItem 
                      name="XGBoost" 
                      accuracy={91.7} 
                      improved={true}
                    />
                    <ModelItem 
                      name="Prophet" 
                      accuracy={89.3} 
                      improved={true}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="store">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Store-based Forecast</CardTitle>
                <CardDescription>Demand forecasts by individual store locations</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Store-specific forecast content would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="time">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Time Period Analysis</CardTitle>
                <CardDescription>Forecast by different time horizons (daily, weekly, monthly)</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Time period analysis content would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const FactorItem = ({ name, impact, description }) => {
  const getBadgeColor = () => {
    switch (impact) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex justify-between items-center py-2 border-b">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className={`px-2 py-1 rounded text-xs font-medium ${getBadgeColor()}`}>
        {impact}
      </div>
    </div>
  );
};

const ModelItem = ({ name, accuracy, improved }) => {
  return (
    <div className="flex justify-between items-center">
      <p className="font-medium">{name}</p>
      <div className="flex items-center">
        <span className="font-medium mr-2">{accuracy}%</span>
        {improved ? (
          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Improved</span>
        ) : (
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded">Stable</span>
        )}
      </div>
    </div>
  );
};

export default DemandForecast;
