import { useState } from "react";
import { 
  User, 
  CreditCard, 
  BookOpen, 
  ClipboardList, 
  Calendar, 
  Upload, 
  Edit,
  FileText,
  Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Mock student data
const studentData = {
  personalDetails: {
    name: "Emma Wilson",
    rollNo: "2024001",
    class: "12-A",
    section: "Science",
    phone: "+1234567890",
    email: "emma.wilson@school.edu",
    address: "123 Main St, City, State 12345",
    dateOfBirth: "2005-03-15",
    fatherName: "John Wilson",
    motherName: "Sarah Wilson",
    guardianPhone: "+1234567891"
  },
  feeRecord: [
    { month: "January 2024", amount: 5000, status: "Paid", dueDate: "2024-01-05", paidDate: "2024-01-03" },
    { month: "February 2024", amount: 5000, status: "Paid", dueDate: "2024-02-05", paidDate: "2024-02-01" },
    { month: "March 2024", amount: 5000, status: "Pending", dueDate: "2024-03-05", paidDate: null }
  ],
  subjects: [
    { name: "Mathematics", teacher: "Dr. Smith", code: "MATH101", credits: 4 },
    { name: "Physics", teacher: "Prof. Johnson", code: "PHYS101", credits: 4 },
    { name: "Chemistry", teacher: "Dr. Brown", code: "CHEM101", credits: 4 },
    { name: "English", teacher: "Ms. Davis", code: "ENG101", credits: 3 },
    { name: "Computer Science", teacher: "Mr. Wilson", code: "CS101", credits: 3 }
  ],
  homework: [
    { subject: "Mathematics", title: "Calculus Problems", dueDate: "2024-03-15", status: "Pending" },
    { subject: "Physics", title: "Newton's Laws Assignment", dueDate: "2024-03-12", status: "Submitted" },
    { subject: "Chemistry", title: "Organic Chemistry Lab Report", dueDate: "2024-03-18", status: "Pending" },
    { subject: "English", title: "Essay on Shakespeare", dueDate: "2024-03-10", status: "Graded" }
  ],
  timetable: [
    { day: "Monday", periods: [
      { time: "09:00 - 10:00", subject: "Mathematics", teacher: "Dr. Smith", room: "Room 101" },
      { time: "10:00 - 11:00", subject: "Physics", teacher: "Prof. Johnson", room: "Lab 1" },
      { time: "11:30 - 12:30", subject: "Chemistry", teacher: "Dr. Brown", room: "Lab 2" },
      { time: "01:30 - 02:30", subject: "English", teacher: "Ms. Davis", room: "Room 205" }
    ]},
    { day: "Tuesday", periods: [
      { time: "09:00 - 10:00", subject: "Computer Science", teacher: "Mr. Wilson", room: "Computer Lab" },
      { time: "10:00 - 11:00", subject: "Mathematics", teacher: "Dr. Smith", room: "Room 101" },
      { time: "11:30 - 12:30", subject: "Physics", teacher: "Prof. Johnson", room: "Lab 1" },
      { time: "01:30 - 02:30", subject: "Chemistry", teacher: "Dr. Brown", room: "Lab 2" }
    ]}
  ]
};

const Students = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [personalDetails, setPersonalDetails] = useState(studentData.personalDetails);

  const handleSaveDetails = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <User className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Student Portal</h1>
            <p className="text-muted-foreground">View your academic information and records</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Welcome back,</p>
          <p className="font-semibold text-foreground">{studentData.personalDetails.name}</p>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="personal" className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>Personal</span>
          </TabsTrigger>
          <TabsTrigger value="fees" className="flex items-center space-x-2">
            <CreditCard className="w-4 h-4" />
            <span>Fees</span>
          </TabsTrigger>
          <TabsTrigger value="subjects" className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4" />
            <span>Subjects</span>
          </TabsTrigger>
          <TabsTrigger value="homework" className="flex items-center space-x-2">
            <ClipboardList className="w-4 h-4" />
            <span>Homework</span>
          </TabsTrigger>
          <TabsTrigger value="timetable" className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Timetable</span>
          </TabsTrigger>
        </TabsList>

        {/* Personal Details Tab */}
        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Personal Details</CardTitle>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit className="w-4 h-4 mr-2" />
                {isEditing ? 'Cancel' : 'Edit'}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={personalDetails.name} 
                    readOnly={!isEditing}
                    onChange={(e) => setPersonalDetails({...personalDetails, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="rollNo">Roll Number</Label>
                  <Input id="rollNo" value={personalDetails.rollNo} readOnly />
                </div>
                <div>
                  <Label htmlFor="class">Class</Label>
                  <Input id="class" value={personalDetails.class} readOnly />
                </div>
                <div>
                  <Label htmlFor="section">Section</Label>
                  <Input id="section" value={personalDetails.section} readOnly />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    value={personalDetails.phone} 
                    readOnly={!isEditing}
                    onChange={(e) => setPersonalDetails({...personalDetails, phone: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    value={personalDetails.email} 
                    readOnly={!isEditing}
                    onChange={(e) => setPersonalDetails({...personalDetails, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" value={personalDetails.dateOfBirth} readOnly />
                </div>
                <div>
                  <Label htmlFor="fatherName">Father's Name</Label>
                  <Input 
                    id="fatherName" 
                    value={personalDetails.fatherName} 
                    readOnly={!isEditing}
                    onChange={(e) => setPersonalDetails({...personalDetails, fatherName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="motherName">Mother's Name</Label>
                  <Input 
                    id="motherName" 
                    value={personalDetails.motherName} 
                    readOnly={!isEditing}
                    onChange={(e) => setPersonalDetails({...personalDetails, motherName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="guardianPhone">Guardian Phone</Label>
                  <Input 
                    id="guardianPhone" 
                    value={personalDetails.guardianPhone} 
                    readOnly={!isEditing}
                    onChange={(e) => setPersonalDetails({...personalDetails, guardianPhone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea 
                  id="address" 
                  value={personalDetails.address} 
                  readOnly={!isEditing}
                  onChange={(e) => setPersonalDetails({...personalDetails, address: e.target.value})}
                />
              </div>
              {isEditing && (
                <Button onClick={handleSaveDetails}>
                  Save Changes
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Document Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Document Upload</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-2">Upload your documents here</p>
                <p className="text-sm text-muted-foreground mb-4">Supported formats: PDF, JPG, PNG (Max 5MB)</p>
                <Button variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Fee Records Tab */}
        <TabsContent value="fees">
          <Card>
            <CardHeader>
              <CardTitle>Fee Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentData.feeRecord.map((fee, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{fee.month}</h3>
                      <p className="text-sm text-muted-foreground">Due: {fee.dueDate}</p>
                      {fee.paidDate && (
                        <p className="text-sm text-muted-foreground">Paid: {fee.paidDate}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-bold">₹{fee.amount}</p>
                      <Badge variant={fee.status === "Paid" ? "default" : "destructive"}>
                        {fee.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Subjects Tab */}
        <TabsContent value="subjects">
          <Card>
            <CardHeader>
              <CardTitle>Enrolled Subjects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentData.subjects.map((subject, index) => (
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
        </TabsContent>

        {/* Homework Tab */}
        <TabsContent value="homework">
          <Card>
            <CardHeader>
              <CardTitle>Homework & Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentData.homework.map((hw, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <ClipboardList className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{hw.title}</h3>
                        <p className="text-sm text-muted-foreground">{hw.subject}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          Due: {hw.dueDate}
                        </p>
                      </div>
                    </div>
                    <Badge 
                      variant={
                        hw.status === "Submitted" ? "default" : 
                        hw.status === "Graded" ? "secondary" : "destructive"
                      }
                    >
                      {hw.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Timetable Tab */}
        <TabsContent value="timetable">
          <div className="space-y-6">
            {studentData.timetable.map((day, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{day.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {day.periods.map((period, periodIndex) => (
                      <div key={periodIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="text-sm font-medium text-primary">{period.time}</div>
                          <div>
                            <p className="font-medium">{period.subject}</p>
                            <p className="text-sm text-muted-foreground">{period.teacher}</p>
                          </div>
                        </div>
                        <Badge variant="outline">{period.room}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Students;