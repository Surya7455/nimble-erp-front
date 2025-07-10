import { BookOpen, Plus, Search, Filter, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const subjects = [
  { id: 1, name: "Mathematics", class: "Grade 12", teacher: "Dr. Sarah Johnson", students: 28, schedule: "Mon, Wed, Fri - 9:00 AM" },
  { id: 2, name: "Physics", class: "Grade 11", teacher: "Prof. David Miller", students: 32, schedule: "Tue, Thu - 10:00 AM" },
  { id: 3, name: "English Literature", class: "Grade 10", teacher: "Ms. Emily Chen", students: 35, schedule: "Mon, Wed, Fri - 11:00 AM" },
  { id: 4, name: "World History", class: "Grade 9", teacher: "Mr. Robert Taylor", students: 30, schedule: "Tue, Thu - 2:00 PM" },
  { id: 5, name: "Chemistry", class: "Grade 12", teacher: "Dr. Maria Garcia", students: 25, schedule: "Mon, Wed, Fri - 1:00 PM" },
];

const Academics = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Academics</h1>
            <p className="text-muted-foreground">Manage courses, subjects, and curriculum</p>
          </div>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Subject</span>
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">142</p>
                <p className="text-sm text-muted-foreground">Active Subjects</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">28</p>
                <p className="text-sm text-muted-foreground">Avg. Class Size</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">6</p>
                <p className="text-sm text-muted-foreground">Periods per Day</p>
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
              <Input placeholder="Search subjects..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Subjects List */}
      <Card>
        <CardHeader>
          <CardTitle>Current Subjects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjects.map((subject) => (
              <div key={subject.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground">{subject.class} • {subject.teacher}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{subject.students} students</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{subject.schedule}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="default">Active</Badge>
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

export default Academics;