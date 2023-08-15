import React from "react";
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct
}
export function Product({product}: ProductProps){

    const [details, setDetails] = React.useState(false)

    return (
         <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
             <img src={product.image} alt={product.title} className="w-1/6"/>
             <p>{product.title}</p>
             <p className="font-bold">{product.price}</p>
             <button onClick={()=>setDetails(!details)} className={details ? 'py-2 px-4 border bg-yellow-400' : 'py-2 px-4 border bg-blue-400'}>
                 { details ? 'Hide details' : 'Show details'}
             </button>

             {details && <div>
                 <p>{product.description}</p>
             </div>}
         </div>
    )
}