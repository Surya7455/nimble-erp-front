import { UserCheck, Plus, Search, Filter, MoreHorizontal, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const staff = [
  { id: 1, name: "John Anderson", role: "Principal", department: "Administration", email: "john.a@school.edu", phone: "+1234567890", experience: "20 years", status: "Active" },
  { id: 2, name: "Lisa Thompson", role: "Vice Principal", department: "Administration", email: "lisa.t@school.edu", phone: "+1234567891", experience: "15 years", status: "Active" },
  { id: 3, name: "Mark Wilson", role: "IT Administrator", department: "Technology", email: "mark.w@school.edu", phone: "+1234567892", experience: "8 years", status: "Active" },
  { id: 4, name: "Sarah Parker", role: "Librarian", department: "Library", email: "sarah.p@school.edu", phone: "+1234567893", experience: "12 years", status: "Active" },
  { id: 5, name: "David Brown", role: "Security Officer", department: "Security", email: "david.b@school.edu", phone: "+1234567894", experience: "6 years", status: "On Leave" },
  { id: 6, name: "Anna Martinez", role: "Nurse", department: "Health", email: "anna.m@school.edu", phone: "+1234567895", experience: "10 years", status: "Active" },
];

const departments = [
  { name: "Administration", count: 8, head: "John Anderson" },
  { name: "Technology", count: 5, head: "Mark Wilson" },
  { name: "Library", count: 3, head: "Sarah Parker" },
  { name: "Security", count: 6, head: "David Brown" },
  { name: "Health", count: 4, head: "Anna Martinez" },
  { name: "Maintenance", count: 10, head: "Robert Clark" },
];

const Staff = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <UserCheck className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Staff Management</h1>
            <p className="text-muted-foreground">Manage non-teaching staff and administration</p>
          </div>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Staff</span>
        </Button>
      </div>

      {/* Departments Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Departments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept) => (
              <div key={dept.name} className="p-4 border rounded-lg">
                <h3 className="font-medium text-foreground">{dept.name}</h3>
                <p className="text-sm text-muted-foreground">{dept.count} staff members</p>
                <p className="text-xs text-muted-foreground">Head: {dept.head}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search staff..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Staff List */}
      <Card>
        <CardHeader>
          <CardTitle>All Staff ({staff.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {staff.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role} • {member.department}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <div className="flex items-center space-x-1">
                        <Mail className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{member.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{member.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{member.experience}</p>
                    <Badge variant={member.status === "Active" ? "default" : "secondary"}>
                      {member.status}
                    </Badge>
                  </div>
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

export default Staff;