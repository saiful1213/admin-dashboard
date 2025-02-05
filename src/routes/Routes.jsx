import DashboardLayout from "@/layout/DashboardLayout";
import { createBrowserRouter } from "react-router";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        // children: [
        //     {

        //     }
        // ]
    }
])

export default Routes;