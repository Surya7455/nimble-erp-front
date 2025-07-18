import { Sidebar } from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <Sidebar />
      <main className="w-full pb-4 pr-4 pt-16 pl-4 md:pb-6 md:pr-6 md:pl-4 lg:pl-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Index;
