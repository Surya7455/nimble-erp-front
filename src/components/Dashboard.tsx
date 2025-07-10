import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Calendar,
  TrendingUp,
  TrendingDown,
  Activity,
  Award
} from "lucide-react";
import { MetricCard } from "./MetricCard";
import { RevenueChart, InventoryChart } from "./DashboardChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  {
    title: "Total Students",
    value: "2,847",
    change: "+5.2%",
    changeType: "positive" as const,
    icon: GraduationCap,
    description: "Active enrollment"
  },
  {
    title: "Total Teachers",
    value: "185",
    change: "+2.1%",
    changeType: "positive" as const,
    icon: Users,
    description: "Teaching staff"
  },
  {
    title: "Active Classes",
    value: "142",
    change: "+8.3%",
    changeType: "positive" as const,
    icon: BookOpen,
    description: "This semester"
  },
  {
    title: "Attendance Rate",
    value: "94.2%",
    change: "+1.8%",
    changeType: "positive" as const,
    icon: Calendar,
    description: "This month"
  }
];

const recentActivities = [
  { id: 1, action: "New student Emma Wilson enrolled", time: "2 minutes ago", type: "enrollment" },
  { id: 2, action: "Math test scheduled for Grade 10", time: "5 minutes ago", type: "exam" },
  { id: 3, action: "Attendance marked for Class 12-A", time: "12 minutes ago", type: "attendance" },
  { id: 4, action: "Fee payment received from John Smith", time: "18 minutes ago", type: "payment" },
  { id: 5, action: "New teacher Sarah Johnson added", time: "25 minutes ago", type: "staff" },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening at your school.</p>
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
                <span className="text-sm text-muted-foreground">Pass Rate</span>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4 text-metric-positive" />
                  <span className="text-sm font-medium">96.8%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg. Grade</span>
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4 text-metric-positive" />
                  <span className="text-sm font-medium">B+</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Dropout Rate</span>
                <div className="flex items-center space-x-1">
                  <TrendingDown className="w-4 h-4 text-metric-positive" />
                  <span className="text-sm font-medium">1.2%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Parent Satisfaction</span>
                <span className="text-sm font-medium">4.7/5</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}