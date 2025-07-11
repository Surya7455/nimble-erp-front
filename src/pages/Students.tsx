import { User, BookOpen, Calendar, Trophy, TrendingUp, CheckCircle, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const studentData = {
  name: "Emma Wilson",
  rollNo: "2024001",
  class: "12-A",
  section: "Science"
};

const Students = () => {
  const menuItems = [
    { title: "Personal Details", description: "Update your personal information and upload documents", icon: User, path: "/students/personal", color: "text-blue-600" },
    { title: "Fee Records", description: "View payment history and upcoming dues", icon: BookOpen, path: "/students/fees", color: "text-green-600" },
    { title: "Subjects", description: "View enrolled subjects and course details", icon: BookOpen, path: "/students/subjects", color: "text-purple-600" },
    { title: "Homework", description: "Track assignments and submissions", icon: Calendar, path: "/students/homework", color: "text-orange-600" },
    { title: "Timetable", description: "View weekly class schedule", icon: Calendar, path: "/students/timetable", color: "text-indigo-600" },
    { title: "Activities", description: "View extracurricular activities", icon: Trophy, path: "/students/activities", color: "text-pink-600" },
    { title: "Achievements", description: "View awards and recognitions", icon: Trophy, path: "/students/achievements", color: "text-yellow-600" },
    { title: "Results", description: "View exam results and grades", icon: TrendingUp, path: "/students/results", color: "text-red-600" },
    { title: "Attendance", description: "Track class attendance records", icon: CheckCircle, path: "/students/attendance", color: "text-cyan-600" },
    { title: "Notices", description: "Stay updated with announcements", icon: Bell, path: "/students/notices", color: "text-amber-600" },
    { title: "Help Desk", description: "Get support for queries and issues", icon: User, path: "/students/helpdesk", color: "text-lime-600" },
    { title: "Library", description: "Manage library books and browse catalog", icon: BookOpen, path: "/students/library", color: "text-teal-600" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <User className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Student Portal</h1>
            <p className="text-muted-foreground">Access your academic information and services</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Welcome back,</p>
          <p className="font-semibold text-foreground">{studentData.name}</p>
          <p className="text-xs text-muted-foreground">Roll No: {studentData.rollNo} | Class: {studentData.class}</p>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Students;