import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = () => {
    return (
        <div className="font-inter max-w-7xl mx-auto">
            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
                <h1 className="text-5xl">Test</h1>
            </SidebarProvider>
        </div>
    )
}

export default DashboardLayout;