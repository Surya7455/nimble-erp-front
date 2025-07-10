import { ClipboardList, Plus, Search, Filter, Calendar, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const examinations = [
  { id: 1, name: "Mathematics Final Exam", subject: "Mathematics", class: "Grade 12", date: "Dec 15, 2024", time: "9:00 AM - 12:00 PM", duration: "3 hours", students: 28, status: "Scheduled" },
  { id: 2, name: "Physics Unit Test", subject: "Physics", class: "Grade 11", date: "Dec 18, 2024", time: "10:00 AM - 11:30 AM", duration: "1.5 hours", students: 32, status: "Scheduled" },
  { id: 3, name: "English Literature Quiz", subject: "English", class: "Grade 10", date: "Dec 12, 2024", time: "2:00 PM - 3:00 PM", duration: "1 hour", students: 35, status: "Completed" },
  { id: 4, name: "History Midterm", subject: "History", class: "Grade 9", date: "Dec 20, 2024", time: "1:00 PM - 3:00 PM", duration: "2 hours", students: 30, status: "Scheduled" },
  { id: 5, name: "Chemistry Lab Test", subject: "Chemistry", class: "Grade 12", date: "Dec 10, 2024", time: "11:00 AM - 12:30 PM", duration: "1.5 hours", students: 25, status: "Completed" },
];

const Examinations = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <ClipboardList className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Examinations</h1>
            <p className="text-muted-foreground">Schedule and manage exams and assessments</p>
          </div>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Schedule Exam</span>
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <ClipboardList className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Scheduled Exams</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-metric-positive" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-warning" />
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">850</p>
                <p className="text-sm text-muted-foreground">Total Students</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search examinations..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Examinations List */}
      <Card>
        <CardHeader>
          <CardTitle>All Examinations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {examinations.map((exam) => (
              <div key={exam.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ClipboardList className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{exam.name}</h3>
                    <p className="text-sm text-muted-foreground">{exam.subject} • {exam.class}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{exam.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{exam.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{exam.students} students</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <Badge variant={exam.status === "Completed" ? "default" : "secondary"}>
                      {exam.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{exam.duration}</p>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Examinations;