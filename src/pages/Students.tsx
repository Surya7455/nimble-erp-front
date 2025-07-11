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
  Clock,
  Trophy,
  GraduationCap,
  Users,
  Bell,
  HelpCircle,
  Library,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Star,
  Search,
  MessageCircle
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
  ],
  activities: [
    { name: "Science Fair", type: "Academic", date: "2024-03-20", status: "Participating", description: "Regional Science Competition" },
    { name: "Basketball Team", type: "Sports", date: "Ongoing", status: "Member", description: "School Basketball Team Player" },
    { name: "Drama Club", type: "Cultural", date: "2024-03-25", status: "Active", description: "Annual Drama Performance" },
    { name: "Math Olympiad", type: "Competition", date: "2024-04-10", status: "Registered", description: "National Mathematics Competition" }
  ],
  achievements: [
    { title: "First Prize - Science Exhibition", date: "2024-01-15", category: "Academic", description: "Won first prize in school science exhibition" },
    { title: "Best Player - Basketball", date: "2023-12-10", category: "Sports", description: "Best player award in inter-school basketball championship" },
    { title: "Excellence in Mathematics", date: "2023-11-20", category: "Academic", description: "Scored highest marks in mathematics" },
    { title: "Leadership Award", date: "2023-10-05", category: "Leadership", description: "Outstanding leadership in student council" }
  ],
  results: [
    { exam: "Mid-Term Exam", subject: "Mathematics", marks: 92, maxMarks: 100, grade: "A+", date: "2024-02-15" },
    { exam: "Mid-Term Exam", subject: "Physics", marks: 88, maxMarks: 100, grade: "A", date: "2024-02-15" },
    { exam: "Mid-Term Exam", subject: "Chemistry", marks: 85, maxMarks: 100, grade: "A", date: "2024-02-15" },
    { exam: "Mid-Term Exam", subject: "English", marks: 90, maxMarks: 100, grade: "A+", date: "2024-02-15" },
    { exam: "Unit Test", subject: "Computer Science", marks: 95, maxMarks: 100, grade: "A+", date: "2024-03-01" }
  ],
  attendance: {
    overall: 92.5,
    thisMonth: 95,
    subjects: [
      { subject: "Mathematics", attendance: 94, totalClasses: 30, attended: 28 },
      { subject: "Physics", attendance: 90, totalClasses: 28, attended: 25 },
      { subject: "Chemistry", attendance: 96, totalClasses: 25, attended: 24 },
      { subject: "English", attendance: 88, totalClasses: 24, attended: 21 },
      { subject: "Computer Science", attendance: 100, totalClasses: 20, attended: 20 }
    ]
  },
  notices: [
    { title: "Parent-Teacher Meeting", date: "2024-03-18", priority: "High", content: "Parent-teacher meeting scheduled for upcoming week. Please ensure attendance." },
    { title: "Science Fair Registration", date: "2024-03-10", priority: "Medium", content: "Registration open for annual science fair. Last date: March 15th." },
    { title: "Sports Day Practice", date: "2024-03-05", priority: "Low", content: "Sports day practice sessions will begin from next week." },
    { title: "Library Book Return", date: "2024-03-01", priority: "Medium", content: "Please return all borrowed books before March 10th." }
  ],
  libraryBooks: [
    { title: "Advanced Physics", author: "Dr. Richard", issueDate: "2024-02-20", dueDate: "2024-03-20", status: "Issued" },
    { title: "Mathematics Olympiad", author: "Prof. Kumar", issueDate: "2024-02-15", dueDate: "2024-03-15", status: "Overdue" },
    { title: "Chemistry Practical", author: "Dr. Singh", issueDate: "2024-03-01", dueDate: "2024-03-31", status: "Issued" }
  ],
  helpTickets: [
    { id: "TKT001", subject: "Fee Payment Issue", status: "Open", priority: "High", date: "2024-03-08", description: "Unable to process online fee payment" },
    { id: "TKT002", subject: "Timetable Conflict", status: "Resolved", priority: "Medium", date: "2024-03-05", description: "Schedule conflict in physics lab" }
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
        <div className="overflow-x-auto">
          <TabsList className="grid w-full grid-cols-12 min-w-max">
            <TabsTrigger value="personal" className="flex items-center space-x-1 text-xs">
              <User className="w-3 h-3" />
              <span>Personal</span>
            </TabsTrigger>
            <TabsTrigger value="fees" className="flex items-center space-x-1 text-xs">
              <CreditCard className="w-3 h-3" />
              <span>Fees</span>
            </TabsTrigger>
            <TabsTrigger value="subjects" className="flex items-center space-x-1 text-xs">
              <BookOpen className="w-3 h-3" />
              <span>Subjects</span>
            </TabsTrigger>
            <TabsTrigger value="homework" className="flex items-center space-x-1 text-xs">
              <ClipboardList className="w-3 h-3" />
              <span>Homework</span>
            </TabsTrigger>
            <TabsTrigger value="timetable" className="flex items-center space-x-1 text-xs">
              <Calendar className="w-3 h-3" />
              <span>Timetable</span>
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center space-x-1 text-xs">
              <Users className="w-3 h-3" />
              <span>Activities</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center space-x-1 text-xs">
              <Trophy className="w-3 h-3" />
              <span>Achievements</span>
            </TabsTrigger>
            <TabsTrigger value="results" className="flex items-center space-x-1 text-xs">
              <TrendingUp className="w-3 h-3" />
              <span>Results</span>
            </TabsTrigger>
            <TabsTrigger value="attendance" className="flex items-center space-x-1 text-xs">
              <CheckCircle className="w-3 h-3" />
              <span>Attendance</span>
            </TabsTrigger>
            <TabsTrigger value="notices" className="flex items-center space-x-1 text-xs">
              <Bell className="w-3 h-3" />
              <span>Notices</span>
            </TabsTrigger>
            <TabsTrigger value="helpdesk" className="flex items-center space-x-1 text-xs">
              <HelpCircle className="w-3 h-3" />
              <span>Help Desk</span>
            </TabsTrigger>
            <TabsTrigger value="library" className="flex items-center space-x-1 text-xs">
              <Library className="w-3 h-3" />
              <span>Library</span>
            </TabsTrigger>
          </TabsList>
        </div>

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

        {/* School Activities Tab */}
        <TabsContent value="activities">
          <Card>
            <CardHeader>
              <CardTitle>School Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentData.activities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{activity.name}</h3>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                        <p className="text-sm text-muted-foreground">Date: {activity.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">{activity.type}</Badge>
                      <Badge variant={activity.status === "Active" || activity.status === "Participating" ? "default" : "secondary"}>
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Achievements & Awards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        <p className="text-sm text-muted-foreground">Date: {achievement.date}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{achievement.category}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Results Tab */}
        <TabsContent value="results">
          <Card>
            <CardHeader>
              <CardTitle>Examination Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentData.results.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{result.subject}</h3>
                      <p className="text-sm text-muted-foreground">{result.exam}</p>
                      <p className="text-sm text-muted-foreground">Date: {result.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{result.marks}/{result.maxMarks}</p>
                      <Badge variant={result.grade.includes("A") ? "default" : "secondary"}>
                        Grade: {result.grade}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Attendance Tab */}
        <TabsContent value="attendance">
          <div className="space-y-6">
            {/* Overall Attendance */}
            <Card>
              <CardHeader>
                <CardTitle>Attendance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <h3 className="text-2xl font-bold text-primary">{studentData.attendance.overall}%</h3>
                    <p className="text-sm text-muted-foreground">Overall Attendance</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <h3 className="text-2xl font-bold text-primary">{studentData.attendance.thisMonth}%</h3>
                    <p className="text-sm text-muted-foreground">This Month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Subject-wise Attendance */}
            <Card>
              <CardHeader>
                <CardTitle>Subject-wise Attendance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.attendance.subjects.map((subject, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{subject.subject}</h3>
                        <p className="text-sm text-muted-foreground">
                          {subject.attended}/{subject.totalClasses} classes attended
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{subject.attendance}%</p>
                        <Badge variant={subject.attendance >= 90 ? "default" : subject.attendance >= 75 ? "secondary" : "destructive"}>
                          {subject.attendance >= 90 ? "Excellent" : subject.attendance >= 75 ? "Good" : "Poor"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Notices Tab */}
        <TabsContent value="notices">
          <Card>
            <CardHeader>
              <CardTitle>School Notices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studentData.notices.map((notice, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{notice.title}</h3>
                      <Badge variant={
                        notice.priority === "High" ? "destructive" : 
                        notice.priority === "Medium" ? "secondary" : "outline"
                      }>
                        {notice.priority} Priority
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{notice.content}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {notice.date}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Help Desk Tab */}
        <TabsContent value="helpdesk">
          <div className="space-y-6">
            {/* Create New Ticket */}
            <Card>
              <CardHeader>
                <CardTitle>Create New Support Ticket</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Enter issue subject" />
                </div>
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Describe your issue in detail" />
                </div>
                <Button>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Submit Ticket
                </Button>
              </CardContent>
            </Card>

            {/* Existing Tickets */}
            <Card>
              <CardHeader>
                <CardTitle>My Support Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.helpTickets.map((ticket, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">#{ticket.id} - {ticket.subject}</h3>
                        <div className="flex space-x-2">
                          <Badge variant={ticket.priority === "High" ? "destructive" : "secondary"}>
                            {ticket.priority}
                          </Badge>
                          <Badge variant={ticket.status === "Open" ? "outline" : "default"}>
                            {ticket.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{ticket.description}</p>
                      <p className="text-xs text-muted-foreground">Created: {ticket.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Library Portal Tab */}
        <TabsContent value="library">
          <div className="space-y-6">
            {/* Search Books */}
            <Card>
              <CardHeader>
                <CardTitle>Search Library Books</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="Search books by title, author, or ISBN..." className="pl-10" />
                  </div>
                  <Button>Search</Button>
                </div>
              </CardContent>
            </Card>

            {/* Issued Books */}
            <Card>
              <CardHeader>
                <CardTitle>My Issued Books</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.libraryBooks.map((book, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Library className="w-5 h-5 text-primary" />
                        <div>
                          <h3 className="font-medium">{book.title}</h3>
                          <p className="text-sm text-muted-foreground">Author: {book.author}</p>
                          <p className="text-sm text-muted-foreground">Issue Date: {book.issueDate}</p>
                          <p className="text-sm text-muted-foreground">Due Date: {book.dueDate}</p>
                        </div>
                      </div>
                      <Badge variant={book.status === "Overdue" ? "destructive" : "default"}>
                        {book.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Students;