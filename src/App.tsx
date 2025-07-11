import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Dashboard } from "./components/Dashboard";
import Students from "./pages/Students";
import PersonalDetails from "./pages/student/PersonalDetails";
import FeeRecords from "./pages/student/FeeRecords";
import Subjects from "./pages/student/Subjects";
import Homework from "./pages/student/Homework";
import Timetable from "./pages/student/Timetable";
import Activities from "./pages/student/Activities";
import Achievements from "./pages/student/Achievements";
import Results from "./pages/student/Results";
import StudentAttendance from "./pages/student/Attendance";
import Notices from "./pages/student/Notices";
import HelpDesk from "./pages/student/HelpDesk";
import StudentLibrary from "./pages/student/Library";
import Teachers from "./pages/Teachers";
import Academics from "./pages/Academics";
import Attendance from "./pages/Attendance";
import Examinations from "./pages/Examinations";
import Fees from "./pages/Fees";
import Library from "./pages/Library";
import Staff from "./pages/Staff";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Dashboard />} />
            <Route path="students" element={<Students />} />
            <Route path="students/personal" element={<PersonalDetails />} />
            <Route path="students/fees" element={<FeeRecords />} />
            <Route path="students/subjects" element={<Subjects />} />
            <Route path="students/homework" element={<Homework />} />
            <Route path="students/timetable" element={<Timetable />} />
            <Route path="students/activities" element={<Activities />} />
            <Route path="students/achievements" element={<Achievements />} />
            <Route path="students/results" element={<Results />} />
            <Route path="students/attendance" element={<StudentAttendance />} />
            <Route path="students/notices" element={<Notices />} />
            <Route path="students/helpdesk" element={<HelpDesk />} />
            <Route path="students/library" element={<StudentLibrary />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="academics" element={<Academics />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="examinations" element={<Examinations />} />
            <Route path="fees" element={<Fees />} />
            <Route path="library" element={<Library />} />
            <Route path="staff" element={<Staff />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
