import Loading from "@/components/Loading";
import { useQuery } from "@tanstack/react-query";

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
        <div>
            <h1 className='text-2xl font-bold'>Total Users: {data.length}</h1>
        </div>
    )
}

export default Users;