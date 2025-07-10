import { GraduationCap, Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const students = [
  { id: 1, name: "Emma Wilson", class: "12-A", rollNo: "2024001", phone: "+1234567890", status: "Active" },
  { id: 2, name: "James Smith", class: "11-B", rollNo: "2024002", phone: "+1234567891", status: "Active" },
  { id: 3, name: "Sofia Rodriguez", class: "10-A", rollNo: "2024003", phone: "+1234567892", status: "Active" },
  { id: 4, name: "Michael Brown", class: "12-B", rollNo: "2024004", phone: "+1234567893", status: "Inactive" },
  { id: 5, name: "Isabella Davis", class: "11-A", rollNo: "2024005", phone: "+1234567894", status: "Active" },
];

const Students = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <GraduationCap className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Students</h1>
            <p className="text-muted-foreground">Manage student records and information</p>
          </div>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Student</span>
        </Button>
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

      {/* Students List */}
      <Card>
        <CardHeader>
          <CardTitle>All Students ({students.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {students.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">Roll No: {student.rollNo} • Class: {student.class}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{student.phone}</p>
                    <Badge variant={student.status === "Active" ? "default" : "secondary"}>
                      {student.status}
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

export default Students;