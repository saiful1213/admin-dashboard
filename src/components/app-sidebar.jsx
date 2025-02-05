import { HiUsers } from "react-icons/hi";
import { AiOutlineProduct } from "react-icons/ai";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavLink } from "react-router";
import "../components/app-sidebar.css"

const items = [
    {
        title: "All Users",
        url: "/users",
        icon: <HiUsers />,
    },
    {
        title: "Products",
        url: "/products",
        icon: <AiOutlineProduct />,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="text-2xl font-semibold" >
                Admin Dashboard
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="uppercase">Overview</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <NavLink to={item.url}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
