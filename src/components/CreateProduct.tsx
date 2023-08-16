import React from "react";
import {IProduct} from "../models";
import axios from "axios";


const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating:{
        rate:5,
        count:20
    }
}

interface  CreateProductProps{
    onCreate:(product:IProduct) => void
}

export function CreateProduct({onCreate}:CreateProductProps)
{
    const[value, setValue] = React.useState('');
    const[error, setError] = React.useState('');

    const submitHandler = async (event: React.FormEvent)=>{
        event.preventDefault();
        setError('');
        if(value.trim().length===0){
            setError('Enter value');
            return;
        }

        productData.title = value;
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
        onCreate(response.data);
    }

    const changeHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" className="border py-2 px-4 mb-2 w-full outline-0" placeholder="Enter product title" value={value} onChange={changeHandler}/>
                {error && <p className="text-red-600 mt-1 mb-1">{error}</p>}
                <button type="submit" className="border py-2 px-4 bg-gray-800 text-white">Create</button>
            </form>
        </div>
    )
}