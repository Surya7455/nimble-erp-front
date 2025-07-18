import { Sidebar } from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Sidebar />
      <main className="w-full pb-6 pr-6 pt-16 pl-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Index;
