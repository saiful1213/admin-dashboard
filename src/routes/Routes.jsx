import DashboardLayout from "@/layout/DashboardLayout";
import AddProduct from "@/pages/AddProduct/AddProduct";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import Products from "@/pages/Products/Products";
import UserDetails from "@/pages/UserDetails/UserDetails";
import Users from "@/pages/Users/Users";
import { createBrowserRouter, Navigate } from "react-router";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        errorElement: 'error',
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
            },
            {
                path: '/add-product',
                element: <AddProduct />
            },
            {
                path: '/products/:id',
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`https://api.restful-api.dev/objects/${params.id}`)
            }
        ]
    },
    {
        path: '/login',
        element: 'login'
    },
    {
        path: 'registration',
        element: 'registration'
    }
])

export default Routes;