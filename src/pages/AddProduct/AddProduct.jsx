import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddProduct = () => {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const generation = form.generation.value;
        const year = form.year.value;
        const color = form.color.value;
        const capacity = form.capacity.value;
        const case_size = form.case_size.value;
        const hard_disk = form.hard_disk.value;
        const cpu = form.cpu.value;
        const desc = form.desc.value;
        const productData = {
            name, price, generation, year, color, capacity, case_size, hard_disk, cpu, desc
        }
        // post data
        fetch('https://api.restful-api.dev/objects', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.id) {
                    toast.success('product added successfully!');
                    navigate('/products')
                }
            })
    }

    return (
        <div>
            <h1 className='text-2xl font-bold my-6'>Create Product</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="*:mb-1">
                            {/* product name */}
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" name="name" placeholder="Product Name" required />
                            {/* product price */}
                            <Label htmlFor="price">Price</Label>
                            <Input type="number" id="price" name="price" placeholder="Product Price" />
                            {/* product generation */}
                            <Label htmlFor="generation">Generation</Label>
                            <Input type="text" id="generation" name="generation" placeholder="Generation" />
                            {/* product year */}
                            <Label htmlFor="year">Year</Label>
                            <Input type="number" id="year" name="year" placeholder="year" />
                            {/* product color */}
                            <Label htmlFor="color">Color</Label>
                            <Input type="text" id="color" name="color" placeholder="Product Color" />
                        </div>
                        <div className="*:mb-1">
                            {/* product capacity */}
                            <Label htmlFor="capacity">Capacity</Label>
                            <Input type="text" id="capacity" name="capacity" placeholder="Product capacity" />
                            {/* Case Size */}
                            <Label htmlFor="Case_Size">Case Size</Label>
                            <Input type="text" id="Case_Size" name="case_size" placeholder="Case Size" />
                            {/* Hard_disk */}
                            <Label htmlFor="Hard_disk">Hard disk</Label>
                            <Input type="text" id="Hard_disk" name="hard_disk" placeholder="Hard disk" />
                            {/* CPU_model */}
                            <Label htmlFor="CPU_model">CPU model</Label>
                            <Input type="text" id="CPU_model" name="cpu" placeholder="CPU model" />
                            {/* Description */}
                            <Label htmlFor="Description">Description</Label>
                            <Textarea id="Description" name="desc" placeholder="Product Description" />
                        </div>
                    </div>
                    <Button className="bg-blue-600 text-white">Create Product</Button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct;