import { Sidebar } from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Sidebar />
      <main className="w-full p-6 pl-20 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Index;
