import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const subjectsData = [
  { name: "Mathematics", teacher: "Dr. Smith", code: "MATH101", credits: 4 },
  { name: "Physics", teacher: "Prof. Johnson", code: "PHYS101", credits: 4 },
  { name: "Chemistry", teacher: "Dr. Brown", code: "CHEM101", credits: 4 },
  { name: "English", teacher: "Ms. Davis", code: "ENG101", credits: 3 },
  { name: "Computer Science", teacher: "Mr. Wilson", code: "CS101", credits: 3 }
];

const Subjects = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <BookOpen className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Subjects</h1>
          <p className="text-muted-foreground">View your enrolled subjects and course details</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enrolled Subjects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjectsData.map((subject, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{subject.name}</h3>
                  <p className="text-sm text-muted-foreground">Teacher: {subject.teacher}</p>
                  <p className="text-sm text-muted-foreground">Code: {subject.code}</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline">{subject.credits} Credits</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Subjects;