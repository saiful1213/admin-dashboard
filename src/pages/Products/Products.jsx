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
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { FiEye } from "react-icons/fi";
import { Trash2 } from "lucide-react";

const Products = () => {
    const { data, isPending } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const users = await fetch('https://api.restful-api.dev/objects');
            return users.json();
        }
    })

    if (isPending) return <Loading />;

    return (
        <div className="mb-12">
            <h1 className='text-2xl font-semibold my-6'>Total Products: {data.length}</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">SL.</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Color</TableHead>
                        <TableHead>Capacity</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data?.map((user, idx) => {
                            const { id, name, data } = user || {};
                            return (
                                <TableRow key={id}>
                                    <TableCell className="font-medium">{idx + 1}</TableCell>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>{data?.price && `$ ${data?.price}`}</TableCell>
                                    <TableCell>{data?.Color || data?.color}</TableCell>
                                    <TableCell>{data?.Capacity}</TableCell>
                                    <TableCell className="text-right">
                                        <Link to={`/users/${id}`}>
                                            <Button variant="outline">
                                                <FiEye />
                                            </Button>
                                        </Link>
                                        <Button variant="destructive" className="ml-2">
                                            <Trash2 />
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

export default Products;