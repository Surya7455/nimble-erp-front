import { Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const noticesData = [
  { title: "Parent-Teacher Meeting", date: "2024-03-18", priority: "High", content: "Parent-teacher meeting scheduled for upcoming week. Please ensure attendance." },
  { title: "Science Fair Registration", date: "2024-03-10", priority: "Medium", content: "Registration open for annual science fair. Last date: March 15th." },
  { title: "Sports Day Practice", date: "2024-03-05", priority: "Low", content: "Sports day practice sessions will begin from next week." },
  { title: "Library Book Return", date: "2024-03-01", priority: "Medium", content: "Please return all borrowed books before March 10th." },
  { title: "Exam Schedule Released", date: "2024-02-28", priority: "High", content: "Final examination schedule has been released. Check your student portal." },
  { title: "Cultural Festival", date: "2024-02-25", priority: "Low", content: "Annual cultural festival preparations are underway. Interested students can register." }
];

const Notices = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Bell className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notices</h1>
          <p className="text-muted-foreground">Stay updated with important school announcements</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Notices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {noticesData.map((notice, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium">{notice.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{notice.content}</p>
                  </div>
                  <Badge variant={
                    notice.priority === "High" ? "destructive" :
                    notice.priority === "Medium" ? "outline" : "secondary"
                  }>
                    {notice.priority} Priority
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  Posted on: {notice.date}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notices;