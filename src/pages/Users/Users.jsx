import Loading from "@/components/Loading";
import { useQuery } from "@tanstack/react-query";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { FiEye } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useContext } from "react";
import { FeatureContext } from "@/providers/FeatureProvider";

const Users = () => {
    const [searchText] = useContext(FeatureContext);

    const { data: users, isPending } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            return res.json();
        }
    })

    if (isPending) return <Loading />;

    const filteredUsers = users?.filter(user =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
    )

    return (
        <div className="mb-12">
            <h1 className='text-2xl font-semibold my-6'>Total Users: {users?.length}</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">SL.</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>City</TableHead>
                        <TableHead className="text-right">View Details</TableHead>
                    </TableRow>
                </TableHeader>
                {
                    filteredUsers.length > 0 ? <TableBody>{
                        filteredUsers?.map((user, idx) => {
                            const { id, name, email, address } = user;
                            return (
                                <TableRow key={id}>
                                    <TableCell className="font-medium">{idx + 1}</TableCell>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>{email}</TableCell>
                                    <TableCell>{address?.city}</TableCell>
                                    <TableCell className="text-right">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Link to={`/users/${id}`}>
                                                        <Button variant="outline">
                                                            <FiEye />
                                                        </Button>
                                                    </Link>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>View Details</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                        :
                        <p className="mt-24">No matching users found</p>
                }
            </Table>
        </div>
    )
}

export default Users;