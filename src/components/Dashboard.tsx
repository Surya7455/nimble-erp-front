import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package,
  TrendingUp,
  TrendingDown,
  Activity
} from "lucide-react";
import { MetricCard } from "./MetricCard";
import { RevenueChart, InventoryChart } from "./DashboardChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  {
    title: "Total Revenue",
    value: "$54,239",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "From 245 sales"
  },
  {
    title: "New Orders",
    value: "1,429",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: ShoppingCart,
    description: "Last 30 days"
  },
  {
    title: "Active Customers",
    value: "2,847",
    change: "-3.1%",
    changeType: "negative" as const,
    icon: Users,
    description: "Registered users"
  },
  {
    title: "Inventory Items",
    value: "12,847",
    change: "+5.4%",
    changeType: "positive" as const,
    icon: Package,
    description: "In stock"
  }
];

const recentActivities = [
  { id: 1, action: "New order #1249", time: "2 minutes ago", type: "order" },
  { id: 2, action: "Customer John Smith registered", time: "5 minutes ago", type: "customer" },
  { id: 3, action: "Inventory updated for Product A", time: "12 minutes ago", type: "inventory" },
  { id: 4, action: "Payment received $2,450", time: "18 minutes ago", type: "payment" },
  { id: 5, action: "New support ticket #847", time: "25 minutes ago", type: "support" },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening with your business.</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Activity className="w-4 h-4" />
          <span>Last updated: 2 minutes ago</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <InventoryChart />
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Conversion Rate</span>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4 text-metric-positive" />
                  <span className="text-sm font-medium">3.24%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg. Order Value</span>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4 text-metric-positive" />
                  <span className="text-sm font-medium">$89.50</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Return Rate</span>
                <div className="flex items-center space-x-1">
                  <TrendingDown className="w-4 h-4 text-metric-negative" />
                  <span className="text-sm font-medium">2.1%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                <span className="text-sm font-medium">4.8/5</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}