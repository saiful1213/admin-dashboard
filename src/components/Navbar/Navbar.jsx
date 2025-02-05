import { Input } from "../ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "../mode-toggle";
import { IoSearchSharp } from "react-icons/io5";
import { Button } from "../ui/button";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="border-b w-full h-16 flex items-center md:gap-10 px-1 md:px-5 py-2 rounded-b justify-between">
            <div className="flex gap-5">
                <div className="flex items-center relative">
                    <IoSearchSharp className="absolute left-3" />
                    <Input type="search" placeholder="Search here..." className="pl-9" />
                </div>
                <div>
                    <Button variant="outline">Sort By <IoIosArrowDown /></Button>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar;