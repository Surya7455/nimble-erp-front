import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const activitiesData = [
  { name: "Science Fair", type: "Academic", date: "2024-03-20", status: "Participating", description: "Regional Science Competition" },
  { name: "Basketball Team", type: "Sports", date: "Ongoing", status: "Member", description: "School Basketball Team Player" },
  { name: "Drama Club", type: "Cultural", date: "2024-03-25", status: "Active", description: "Annual Drama Performance" },
  { name: "Math Olympiad", type: "Competition", date: "2024-04-10", status: "Registered", description: "National Mathematics Competition" },
  { name: "Art Exhibition", type: "Cultural", date: "2024-04-15", status: "Preparing", description: "Annual Art and Craft Exhibition" }
];

const Activities = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Users className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">School Activities</h1>
          <p className="text-muted-foreground">View your extracurricular activities and participation</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activitiesData.map((activity, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium">{activity.name}</h3>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                  <Badge variant="outline">{activity.type}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Date: {activity.date}</span>
                  <Badge variant={
                    activity.status === "Active" || activity.status === "Member" ? "default" :
                    activity.status === "Participating" || activity.status === "Registered" ? "outline" : "secondary"
                  }>
                    {activity.status}
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

export default Activities;