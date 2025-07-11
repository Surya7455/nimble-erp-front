import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timetableData = [
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
  ]},
  { day: "Wednesday", periods: [
    { time: "09:00 - 10:00", subject: "English", teacher: "Ms. Davis", room: "Room 205" },
    { time: "10:00 - 11:00", subject: "Computer Science", teacher: "Mr. Wilson", room: "Computer Lab" },
    { time: "11:30 - 12:30", subject: "Mathematics", teacher: "Dr. Smith", room: "Room 101" },
    { time: "01:30 - 02:30", subject: "Physics", teacher: "Prof. Johnson", room: "Lab 1" }
  ]}
];

const Timetable = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Calendar className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold text-foreground">Timetable</h1>
          <p className="text-muted-foreground">View your weekly class schedule</p>
        </div>
      </div>

      <div className="grid gap-6">
        {timetableData.map((day, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{day.day}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {day.periods.map((period, periodIndex) => (
                  <div key={periodIndex} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <h4 className="font-medium">{period.subject}</h4>
                      <p className="text-sm text-muted-foreground">Teacher: {period.teacher}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{period.time}</p>
                      <p className="text-sm text-muted-foreground">{period.room}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Timetable;