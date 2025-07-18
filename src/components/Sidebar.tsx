import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Calendar, 
  DollarSign, 
  ClipboardList,
  UserCheck,
  Library,
  BarChart3,
  Settings,
  Menu,
  X,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { 
    icon: GraduationCap, 
    label: "Students", 
    path: "/students",
    submenu: [
      { label: "Personal Details", path: "/students/personal" },
      { label: "Fee Records", path: "/students/fees" },
      { label: "Subjects", path: "/students/subjects" },
      { label: "Homework", path: "/students/homework" },
      { label: "Timetable", path: "/students/timetable" },
      { label: "Activities", path: "/students/activities" },
      { label: "Achievements", path: "/students/achievements" },
      { label: "Results", path: "/students/results" },
      { label: "Attendance", path: "/students/attendance" },
      { label: "Notices", path: "/students/notices" },
      { label: "Help Desk", path: "/students/helpdesk" },
      { label: "Library", path: "/students/library" }
    ]
  },
  { icon: Users, label: "Teachers", path: "/teachers" },
  { icon: BookOpen, label: "Academics", path: "/academics" },
  { icon: Calendar, label: "Attendance", path: "/attendance" },
  { icon: ClipboardList, label: "Examinations", path: "/examinations" },
  { icon: DollarSign, label: "Fees", path: "/fees" },
  { icon: Library, label: "Library", path: "/library" },
  { icon: UserCheck, label: "Staff", path: "/staff" },
  { icon: BarChart3, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };
  
  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={cn(
          "fixed top-0 left-0 h-full bg-sidebar-bg border-r border-border transition-transform duration-300 flex flex-col z-50",
          "w-64",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg text-foreground">School ERP</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="hover:bg-muted"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.submenu ? (
                <div>
                  <div
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors cursor-pointer",
                      "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => toggleExpanded(item.label)}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium flex-1">{item.label}</span>
                    {expandedItems.includes(item.label) ? 
                      <ChevronDown className="w-4 h-4" /> : 
                      <ChevronRight className="w-4 h-4" />
                    }
                  </div>
                  
                  {item.submenu && expandedItems.includes(item.label) && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              "block px-4 py-2 rounded-lg text-sm transition-colors",
                              "hover:bg-muted text-muted-foreground hover:text-foreground",
                              isActive && "bg-primary/10 text-primary font-medium"
                            )
                          }
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                      "hover:bg-muted text-muted-foreground hover:text-foreground",
                      isActive && "bg-primary text-primary-foreground hover:bg-primary-hover hover:text-primary-foreground"
                    )
                  }
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              )}
            </div>
          ))}
        </nav>
      </div>
      
      {/* Menu Button - Always visible */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-30 bg-background shadow-md"
      >
        <Menu className="w-4 h-4" />
      </Button>
    </>
  );
}