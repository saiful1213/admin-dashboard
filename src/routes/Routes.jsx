import DashboardLayout from "@/layout/DashboardLayout";
import Products from "@/pages/Products/Products";
import UserDetails from "@/pages/UserDetails/UserDetails";
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
                path: '/users/:id',
                element: <UserDetails />,
                loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            },
            {
                path: '/products',
                element: <Products />
            }
        ]
    }
])

export default Routes;