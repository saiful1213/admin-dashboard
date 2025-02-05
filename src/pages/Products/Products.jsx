import Loading from "@/components/Loading";
import { useQuery } from "@tanstack/react-query";

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
        <div>
            <h1 className='text-2xl font-bold'>Total Products: {data?.length}</h1>
        </div>
    )
}

export default Products;