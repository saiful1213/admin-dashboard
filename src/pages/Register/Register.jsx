import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeClosed } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar/Navbar";
import { AuthContext } from "@/providers/AuthProvider";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState();
    const { handleCreateUser, handleProfileUpdate, handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const terms = form.terms[1].checked;
       
        if (!terms) {
            return toast.error('Accept our terms and conditions')
        }

        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!regex.test(password)) {
            return setError('Password must be at least 6 charecters, one uppercase and one lowercase');
        }

        handleCreateUser(email, password)
            .then(() => {
                handleProfileUpdate({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        toast.success('user created successfully');
                        navigate(state ? state : '/');
                    })
                    .catch(err => toast.error(err.message))
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    const handleGoogle = () => {
        handleGoogleSignIn()
            .then(() => {
                toast.success('successfully register');
                navigate(state ? state : '/');
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    const handleGithub = () => {
        handleGithubSignIn()
            .then(() => {
                toast.success('successfully register');
                navigate(state ? state : '/');
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    return (
        <div className="mx-auto max-w-7xl ">
            <Navbar blackBg={true} />
            <div className="max-w-md mx-auto">
                <Card className="mb-24 mt-12">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Create an account</CardTitle>
                        <CardDescription>Enter your email below to create your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-center gap-3">
                            <Button size="lg" variant="outline" onClick={handleGoogle}> <FaGoogle />Google</Button>
                            <Button size="lg" variant="outline" onClick={handleGithub}> <FaGithub />Github</Button>
                        </div>
                        <div className="flex my-5 items-center gap-2">
                            <Separator className="flex-1"></Separator>
                            <p className="text-muted-foreground text-sm">Or continue with</p>
                            <Separator className="flex-1"></Separator>
                        </div>

                        <form onSubmit={handleRegister}>
                            <div className="mb-2">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name" required placeholder="your name" />
                            </div>

                            <div className="mb-2">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email" required placeholder="email@example.com" />
                            </div>

                            <div className="mb-2">
                                <Label htmlFor="photo">Photo-URL</Label>
                                <Input type="text" id="photo" name="photo" required placeholder="your photo url" />
                            </div>

                            <div className="relative">
                                <Label htmlFor="password">Password</Label>
                                <Input type={`${showPassword ? 'text' : 'password'}`} id="password" name="password" required placeholder="......" className="placeholder:text-xl placeholder:font-bold" />
                                <div
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-1 top-[27px] border p-1 cursor-pointer">
                                    {!showPassword ? <Eye size={'20px'} /> : <EyeClosed size={'20px'} />}
                                </div>
                            </div>

                            {
                                error && <p className="font-medium text-red-600 text-sm">{error}</p>
                            }

                            <div className="flex items-center space-x-2 mt-4">
                                <Checkbox id="terms" name="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Accept terms and conditions
                                </label>
                            </div>

                            <Button className="w-full mt-6">Register</Button>
                        </form>

                        <div className="mt-4 text-center text-sm">
                            Already have an account?
                            <Link to="/login">
                                <Button variant="link" className="underline">Sign in</Button>
                            </Link>
                        </div>

                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Register;