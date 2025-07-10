import { Users, Plus, Search, Filter, MoreHorizontal, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const teachers = [
  { id: 1, name: "Dr. Sarah Johnson", subject: "Mathematics", email: "sarah.j@school.edu", phone: "+1234567890", experience: "8 years", status: "Active" },
  { id: 2, name: "Prof. David Miller", subject: "Physics", email: "david.m@school.edu", phone: "+1234567891", experience: "12 years", status: "Active" },
  { id: 3, name: "Ms. Emily Chen", subject: "English", email: "emily.c@school.edu", phone: "+1234567892", experience: "5 years", status: "Active" },
  { id: 4, name: "Mr. Robert Taylor", subject: "History", email: "robert.t@school.edu", phone: "+1234567893", experience: "10 years", status: "On Leave" },
  { id: 5, name: "Dr. Maria Garcia", subject: "Chemistry", email: "maria.g@school.edu", phone: "+1234567894", experience: "15 years", status: "Active" },
];

const Teachers = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Users className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Teachers</h1>
            <p className="text-muted-foreground">Manage teaching staff and faculty</p>
          </div>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Teacher</span>
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search teachers..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Teachers List */}
      <Card>
        <CardHeader>
          <CardTitle>All Teachers ({teachers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{teacher.name}</h3>
                    <p className="text-sm text-muted-foreground">{teacher.subject} • {teacher.experience}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center space-x-1">
                        <Mail className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{teacher.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{teacher.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={teacher.status === "Active" ? "default" : "secondary"}>
                    {teacher.status}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Teachers;