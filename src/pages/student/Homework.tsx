import { ClipboardList } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const homeworkData = [
  { subject: "Mathematics", title: "Calculus Problems", dueDate: "2024-03-15", status: "Pending" },
  { subject: "Physics", title: "Newton's Laws Assignment", dueDate: "2024-03-12", status: "Submitted" },
  { subject: "Chemistry", title: "Organic Chemistry Lab Report", dueDate: "2024-03-18", status: "Pending" },
  { subject: "English", title: "Essay on Shakespeare", dueDate: "2024-03-10", status: "Graded" },
  { subject: "Computer Science", title: "Algorithm Implementation", dueDate: "2024-03-20", status: "Not Started" }
];

const Homework = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <ClipboardList className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Homework & Assignments</h1>
          <p className="text-muted-foreground">Track your homework and assignment submissions</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Assignments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {homeworkData.map((homework, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{homework.title}</h3>
                  <p className="text-sm text-muted-foreground">Subject: {homework.subject}</p>
                  <p className="text-sm text-muted-foreground">Due: {homework.dueDate}</p>
                </div>
                <div className="text-right">
                  <Badge variant={
                    homework.status === "Submitted" ? "default" :
                    homework.status === "Graded" ? "outline" :
                    homework.status === "Pending" ? "destructive" : "secondary"
                  }>
                    {homework.status}
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

export default Homework;