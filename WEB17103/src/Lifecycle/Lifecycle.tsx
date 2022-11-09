import React, { useEffect, useState } from 'react'

interface IProducts {
    id: number;
    name: string;
    price: number;
}

const Lifecycle = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Duc Tuan");
    const [products, setProducts] = useState<IProducts[]>([]);
    useEffect(()=>{
        (async ()=>{
            const response = await fetch(`http://localhost:3000/products`);
            const data = await response.json();
            setProducts(data);
        })();
    }, []);

    const removeItem = async (id: number)=>{
        await fetch(`http://localhost:3000/products/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            },
        });

        const newProducts = products.filter((item) => item.id !== id);
        setProducts(newProducts);
    };
    return (
        <div>
            {products.length >0 ? products.map((item) => <div>{item.name}
            <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>) : "Loading..."}
        </div>
    )
}

export default Lifecycle
