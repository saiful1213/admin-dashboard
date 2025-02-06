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

const Users = () => {
    const { data, isPending } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const users = await fetch('https://jsonplaceholder.typicode.com/users');
            return users.json();
        }
    })

    if (isPending) return <Loading />;

    return (
        <div className="mb-12">
            <h1 className='text-2xl font-semibold my-6'>Total Users: {data.length}</h1>
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
                <TableBody>
                    {
                        data?.map((user, idx) => {
                            const { id, name, email, address } = user;
                            return (
                                <TableRow key={id}>
                                    <TableCell className="font-medium">{idx + 1}</TableCell>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>{email}</TableCell>
                                    <TableCell>{address.city}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline">
                                            <FiEye />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default Users;