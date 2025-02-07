import { useLoaderData } from "react-router";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { IoIosColorPalette } from "react-icons/io";
import { MdPriceCheck } from "react-icons/md";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GrCapacity } from "react-icons/gr";
import { GiRegeneration } from "react-icons/gi";

const ProductDetails = () => {
    const product = useLoaderData();
    const { name, data } = product;

    return (
        <>
            <h1 className='text-2xl font-semibold my-6'>Product Details</h1>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-bold">{name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="flex items-center gap-2"><IoIosColorPalette /><strong>Color:</strong> {data?.color}</p>
                    <p className="flex items-center gap-2"><MdPriceCheck /><strong>Price:</strong> {data?.price}</p>
                    <p className="flex items-center gap-2"><IoCalendarNumberOutline /><strong>Year:</strong> {data?.year}</p>
                    <p className="flex items-center gap-2"><GrCapacity /><strong>Capacity:</strong> {data?.capacity}</p>
                    <p className="flex items-center gap-2"><GiRegeneration /><strong>Generation:</strong> {data?.generation}</p>
                </CardContent>
            </Card>
        </>
    )
}

export default ProductDetails;