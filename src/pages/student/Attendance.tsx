import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const attendanceData = {
  overall: 92.5,
  thisMonth: 95,
  subjects: [
    { subject: "Mathematics", attendance: 94, totalClasses: 30, attended: 28 },
    { subject: "Physics", attendance: 90, totalClasses: 28, attended: 25 },
    { subject: "Chemistry", attendance: 96, totalClasses: 25, attended: 24 },
    { subject: "English", attendance: 88, totalClasses: 24, attended: 21 },
    { subject: "Computer Science", attendance: 100, totalClasses: 20, attended: 20 }
  ]
};

const Attendance = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <CheckCircle className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Attendance</h1>
          <p className="text-muted-foreground">Track your class attendance records</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Overall Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">{attendanceData.overall}%</div>
              <p className="text-muted-foreground">Academic Year 2023-24</p>
              <Badge variant={attendanceData.overall >= 90 ? "default" : attendanceData.overall >= 75 ? "outline" : "destructive"} className="mt-2">
                {attendanceData.overall >= 90 ? "Excellent" : attendanceData.overall >= 75 ? "Good" : "Poor"}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">{attendanceData.thisMonth}%</div>
              <p className="text-muted-foreground">March 2024</p>
              <Badge variant={attendanceData.thisMonth >= 90 ? "default" : attendanceData.thisMonth >= 75 ? "outline" : "destructive"} className="mt-2">
                {attendanceData.thisMonth >= 90 ? "Excellent" : attendanceData.thisMonth >= 75 ? "Good" : "Poor"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Subject-wise Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {attendanceData.subjects.map((subject, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{subject.subject}</h3>
                  <p className="text-sm text-muted-foreground">
                    Attended: {subject.attended} / {subject.totalClasses} classes
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-2xl">{subject.attendance}%</p>
                  <Badge variant={
                    subject.attendance >= 90 ? "default" : 
                    subject.attendance >= 75 ? "outline" : "destructive"
                  }>
                    {subject.attendance >= 90 ? "Excellent" : subject.attendance >= 75 ? "Good" : "Poor"}
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

export default Attendance;