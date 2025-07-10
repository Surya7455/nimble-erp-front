import { Calendar, Search, Filter, Check, X, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const attendanceData = [
  { id: 1, student: "Emma Wilson", class: "12-A", status: "Present", time: "8:45 AM", date: "Today" },
  { id: 2, student: "James Smith", class: "11-B", status: "Present", time: "8:42 AM", date: "Today" },
  { id: 3, student: "Sofia Rodriguez", class: "10-A", status: "Late", time: "9:15 AM", date: "Today" },
  { id: 4, student: "Michael Brown", class: "12-B", status: "Absent", time: "-", date: "Today" },
  { id: 5, student: "Isabella Davis", class: "11-A", status: "Present", time: "8:38 AM", date: "Today" },
];

const classStats = [
  { class: "12-A", present: 25, absent: 3, late: 2, total: 30 },
  { class: "11-B", present: 28, absent: 1, late: 3, total: 32 },
  { class: "10-A", present: 30, absent: 2, late: 3, total: 35 },
  { class: "12-B", present: 22, absent: 5, late: 1, total: 28 },
];

const Attendance = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Calendar className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Attendance</h1>
            <p className="text-muted-foreground">Track student attendance and punctuality</p>
          </div>
        </div>
        <Button className="flex items-center space-x-2">
          <Calendar className="w-4 h-4" />
          <span>Mark Attendance</span>
        </Button>
      </div>

      {/* Class Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {classStats.map((stat) => (
          <Card key={stat.class}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{stat.class}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Present</span>
                  <Badge variant="default" className="bg-metric-positive text-white">
                    {stat.present}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Absent</span>
                  <Badge variant="destructive">{stat.absent}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Late</span>
                  <Badge variant="secondary">{stat.late}</Badge>
                </div>
                <div className="flex justify-between items-center font-medium">
                  <span className="text-sm">Total</span>
                  <span>{stat.total}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search students..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Records */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {attendanceData.map((record) => (
              <div key={record.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-muted">
                    {record.status === "Present" && <Check className="w-5 h-5 text-metric-positive" />}
                    {record.status === "Absent" && <X className="w-5 h-5 text-metric-negative" />}
                    {record.status === "Late" && <Clock className="w-5 h-5 text-warning" />}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{record.student}</h3>
                    <p className="text-sm text-muted-foreground">Class: {record.class}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <Badge 
                      variant={
                        record.status === "Present" ? "default" : 
                        record.status === "Absent" ? "destructive" : 
                        "secondary"
                      }
                      className={record.status === "Present" ? "bg-metric-positive text-white" : ""}
                    >
                      {record.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{record.time}</p>
                  </div>
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