import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="flex items-center h-screen justify-center">
            <img src="/404.png" alt="error image" />
            <div>
                <h1 className='text-4xl font-semibold text-red-500 mb-3'>Page Not Found!!</h1>
                <Link to='/'>
                    <Button variant="destructive" size="lg"><FaArrowLeft />Back to Home</Button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage;