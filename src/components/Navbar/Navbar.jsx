import { Input } from "../ui/input";
import { IoSearchSharp } from "react-icons/io5";
import { FeatureContext } from "@/providers/FeatureProvider";
import toast from "react-hot-toast";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Link } from "react-router";
import { Button } from "../ui/button";
import { RiLoginBoxLine } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
    const [searchText, setSearchText] = useContext(FeatureContext);
    const { user, handleLogOut } = useContext(AuthContext);

    const handleSignOut = () => {
        handleLogOut()
            .then(() => toast.success('logout success!'))
            .catch(error => toast.error(error))
    }

    return (
        <div className="border-b w-full h-16 flex items-center md:gap-10 px-1 md:px-5 py-2 rounded-b justify-between">
            <div className="flex items-center relative">
                <IoSearchSharp className="absolute left-3" />
                <Input type="search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search by name..." className="pl-9" />
            </div>
            <div className="flex items-center gap-5">
                <ModeToggle />
                {
                    user ? <>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <img src={`${user.photoURL || 'https://github.com/shadcn.png'}`} alt="user profile" className="h-10 w-10 rounded-full hidden sm:block" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="hidden sm:block">{user?.displayName}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <Button onClick={handleSignOut} variant="outline" className="font-bold">
                            Log Out <RiLoginBoxLine />
                        </Button>
                    </>
                        :
                        <Link to='/login'>
                            <Button variant="outline" className="font-bold">Log In <RiLoginBoxLine /></Button>
                        </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;