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
import { Plus, Trash2 } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useState } from "react";


const Products = () => {
    const [modal, setModal] = useState(false);
    const [deleteProductId, setDeleteProductId] = useState('');

    const { data, isPending } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const users = await fetch('https://api.restful-api.dev/objects');
            return users.json();
        }
    })

    if (isPending) return <Loading />;

    const handleConfirmation = id => {
        setModal(true);
        setDeleteProductId(id)
    }

    const handleDeleteProduct = () => {
        fetch(`https://api.restful-api.dev/objects/${deleteProductId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="mb-12">
            <div className="flex justify-between items-center">
                <h1 className='text-2xl font-semibold my-6'>Total Products: {data.length}</h1>
                <Link to={`/add-product`}>
                    <Button className="bg-blue-500 text-white"><Plus />Add Product</Button>
                </Link>
            </div>
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
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Link to={`/products/${id}`}>
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
                                        <Button variant="destructive" className="ml-2" onClick={() => handleConfirmation(id)}>
                                            <Trash2 />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            <AlertDialog open={modal} onOpenChange={(modal) => setModal(modal)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your products
                            and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setModal(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-red-500" onClick={handleDeleteProduct}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default Products;