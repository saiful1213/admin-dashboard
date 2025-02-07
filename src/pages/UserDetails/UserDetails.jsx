import { useLoaderData } from "react-router";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { SiChromewebstore } from "react-icons/si";
import { BiSolidInstitution } from "react-icons/bi";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, email, address, phone, website, company } = user || {};

    return (
        <>
            <h1 className='text-2xl font-semibold my-6'>User Details </h1>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-bold">{name}</CardTitle>
                    <CardDescription>
                        {address.city} | {address.street} | {address.zipcode}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="flex items-center gap-2"><MdEmail /><strong>Email:</strong> {email}</p>
                    <p className="flex items-center gap-2"><FaPhoneVolume /><strong>Phone:</strong> {phone}</p>
                    <p className="flex items-center gap-2"><SiChromewebstore /><strong>Website:</strong> {website}</p>
                </CardContent>
                <CardFooter>
                    <p className="flex items-center gap-2"><BiSolidInstitution /><strong>Company:</strong> {company.name}</p>
                </CardFooter>
            </Card>
        </>
    )
}

export default UserDetails;