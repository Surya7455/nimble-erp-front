import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const resultsData = [
  { exam: "Mid-Term Exam", subject: "Mathematics", marks: 92, maxMarks: 100, grade: "A+", date: "2024-02-15" },
  { exam: "Mid-Term Exam", subject: "Physics", marks: 88, maxMarks: 100, grade: "A", date: "2024-02-15" },
  { exam: "Mid-Term Exam", subject: "Chemistry", marks: 85, maxMarks: 100, grade: "A", date: "2024-02-15" },
  { exam: "Mid-Term Exam", subject: "English", marks: 90, maxMarks: 100, grade: "A+", date: "2024-02-15" },
  { exam: "Unit Test", subject: "Computer Science", marks: 95, maxMarks: 100, grade: "A+", date: "2024-03-01" },
  { exam: "Unit Test", subject: "Mathematics", marks: 87, maxMarks: 100, grade: "A", date: "2024-03-05" }
];

const Results = () => {
  const totalMarks = resultsData.reduce((sum, result) => sum + result.marks, 0);
  const totalMaxMarks = resultsData.reduce((sum, result) => sum + result.maxMarks, 0);
  const overallPercentage = ((totalMarks / totalMaxMarks) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <TrendingUp className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Exam Results</h1>
          <p className="text-muted-foreground">View your exam results and grades</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overall Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-primary mb-2">{overallPercentage}%</div>
            <p className="text-muted-foreground">Overall Percentage</p>
            <Badge variant="default" className="mt-2">Excellent Performance</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {resultsData.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{result.subject}</h3>
                  <p className="text-sm text-muted-foreground">{result.exam}</p>
                  <p className="text-sm text-muted-foreground">Date: {result.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{result.marks}/{result.maxMarks}</p>
                  <Badge variant={
                    result.grade.includes('+') ? "default" : 
                    result.grade.startsWith('A') ? "outline" : "secondary"
                  }>
                    Grade {result.grade}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-1">
                    {((result.marks / result.maxMarks) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Results;