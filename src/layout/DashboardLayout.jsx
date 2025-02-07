import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { Outlet } from "react-router";

const DashboardLayout = () => {
    return (
        <div className="font-inter max-w-7xl mx-auto">
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full">
                    <SidebarTrigger />
                    <Navbar />
                    <Outlet />
                </div>
            </SidebarProvider>
        </div>
    )
}

export default DashboardLayout;