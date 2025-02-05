import DashboardLayout from "@/layout/DashboardLayout";
import Products from "@/pages/Products/Products";
import Users from "@/pages/Users/Users";
import { createBrowserRouter, Navigate } from "react-router";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" replace />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/products',
                element: <Products />
            }
        ]
    }
])

export default Routes;