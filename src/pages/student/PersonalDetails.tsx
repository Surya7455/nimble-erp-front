import { useState } from "react";
import { User, Upload, Edit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const studentData = {
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
};

const PersonalDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [personalDetails, setPersonalDetails] = useState(studentData);

  const handleSaveDetails = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <User className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Personal Details</h1>
          <p className="text-muted-foreground">Manage your personal information</p>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Personal Information</CardTitle>
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
    </div>
  );
};

export default PersonalDetails;