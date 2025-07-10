import { DollarSign, Plus, Search, Filter, Check, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const feeRecords = [
  { id: 1, student: "Emma Wilson", class: "12-A", amount: "$1,200", dueDate: "Dec 15, 2024", status: "Paid", paidDate: "Dec 10, 2024" },
  { id: 2, student: "James Smith", class: "11-B", amount: "$1,150", dueDate: "Dec 15, 2024", status: "Pending", paidDate: null },
  { id: 3, student: "Sofia Rodriguez", class: "10-A", amount: "$1,100", dueDate: "Dec 10, 2024", status: "Overdue", paidDate: null },
  { id: 4, student: "Michael Brown", class: "12-B", amount: "$1,200", dueDate: "Dec 15, 2024", status: "Partial", paidDate: "Dec 12, 2024" },
  { id: 5, student: "Isabella Davis", class: "11-A", amount: "$1,150", dueDate: "Dec 15, 2024", status: "Paid", paidDate: "Dec 8, 2024" },
];

const feeStats = [
  { title: "Total Collected", amount: "$245,000", percentage: "+12.5%", color: "metric-positive" },
  { title: "Pending", amount: "$45,000", percentage: "-5.2%", color: "warning" },
  { title: "Overdue", amount: "$12,000", percentage: "+2.1%", color: "metric-negative" },
  { title: "This Month", amount: "$85,000", percentage: "+8.3%", color: "primary" },
];

const Fees = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <DollarSign className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Fee Management</h1>
            <p className="text-muted-foreground">Track student fees and payments</p>
          </div>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Payment</span>
        </Button>
      </div>

      {/* Fee Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {feeStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.amount}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <span className={`text-sm font-medium text-${stat.color}`}>{stat.percentage}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search fee records..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Fee Records */}
      <Card>
        <CardHeader>
          <CardTitle>Fee Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feeRecords.map((record) => (
              <div key={record.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-muted">
                    {record.status === "Paid" && <Check className="w-5 h-5 text-metric-positive" />}
                    {record.status === "Pending" && <Clock className="w-5 h-5 text-warning" />}
                    {record.status === "Overdue" && <AlertCircle className="w-5 h-5 text-metric-negative" />}
                    {record.status === "Partial" && <DollarSign className="w-5 h-5 text-primary" />}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{record.student}</h3>
                    <p className="text-sm text-muted-foreground">Class: {record.class} • Amount: {record.amount}</p>
                    <p className="text-xs text-muted-foreground">Due: {record.dueDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <Badge 
                      variant={
                        record.status === "Paid" ? "default" : 
                        record.status === "Overdue" ? "destructive" : 
                        "secondary"
                      }
                      className={
                        record.status === "Paid" ? "bg-metric-positive text-white" :
                        record.status === "Overdue" ? "bg-metric-negative text-white" : ""
                      }
                    >
                      {record.status}
                    </Badge>
                    {record.paidDate && (
                      <p className="text-xs text-muted-foreground mt-1">Paid: {record.paidDate}</p>
                    )}
                  </div>
                  <Button variant="outline" size="sm">
                    {record.status === "Paid" ? "View Receipt" : "Process Payment"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Fees;