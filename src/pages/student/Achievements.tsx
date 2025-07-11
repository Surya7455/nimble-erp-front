import { Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievementsData = [
  { title: "First Prize - Science Exhibition", date: "2024-01-15", category: "Academic", description: "Won first prize in school science exhibition" },
  { title: "Best Player - Basketball", date: "2023-12-10", category: "Sports", description: "Best player award in inter-school basketball championship" },
  { title: "Excellence in Mathematics", date: "2023-11-20", category: "Academic", description: "Scored highest marks in mathematics" },
  { title: "Leadership Award", date: "2023-10-05", category: "Leadership", description: "Outstanding leadership in student council" },
  { title: "Cultural Performance Award", date: "2023-09-15", category: "Cultural", description: "Best performance in annual cultural festival" }
];

const Achievements = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Trophy className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Achievements</h1>
          <p className="text-muted-foreground">View your awards and recognitions</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievementsData.map((achievement, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                  <Badge variant="outline">{achievement.category}</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  Date: {achievement.date}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Achievements;