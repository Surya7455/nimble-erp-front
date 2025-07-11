import { CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const feeData = [
  { month: "January 2024", amount: 5000, status: "Paid", dueDate: "2024-01-05", paidDate: "2024-01-03" },
  { month: "February 2024", amount: 5000, status: "Paid", dueDate: "2024-02-05", paidDate: "2024-02-01" },
  { month: "March 2024", amount: 5000, status: "Pending", dueDate: "2024-03-05", paidDate: null },
  { month: "April 2024", amount: 5000, status: "Upcoming", dueDate: "2024-04-05", paidDate: null }
];

const FeeRecords = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <CreditCard className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fee Records</h1>
          <p className="text-muted-foreground">View your fee payment history and upcoming dues</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feeData.map((fee, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{fee.month}</h3>
                  <p className="text-sm text-muted-foreground">Due: {fee.dueDate}</p>
                  {fee.paidDate && (
                    <p className="text-sm text-muted-foreground">Paid: {fee.paidDate}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-bold">₹{fee.amount}</p>
                  <Badge variant={
                    fee.status === "Paid" ? "default" : 
                    fee.status === "Pending" ? "destructive" : "secondary"
                  }>
                    {fee.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeeRecords;