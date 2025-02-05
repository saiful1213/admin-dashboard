import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
    return (
        <div className="font-inter max-w-7xl mx-auto">
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <SidebarProvider>
                    <AppSidebar />
                    <div className="w-full">
                        <SidebarTrigger />
                        <Navbar />
                        <Outlet />
                    </div>
                </SidebarProvider>
            </ThemeProvider>
        </div>
    )
}

export default DashboardLayout;