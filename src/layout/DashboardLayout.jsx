import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = () => {
    return (
        <div className="font-inter max-w-7xl mx-auto">
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarTrigger />
                    <Navbar />
                </SidebarProvider>
            </ThemeProvider>
        </div>
    )
}

export default DashboardLayout;