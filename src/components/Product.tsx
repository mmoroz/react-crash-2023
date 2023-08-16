import React from "react";
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct
}
export function Product({product}: ProductProps){

    const [details, setDetails] = React.useState(false)

    return (
         <div className="border py-2 px-4 rounded flex flex-col items-center">
             <img src={product.image} alt={product.title} className="w-1/2"/>
             <p>{product.title}</p>
             <p className="font-bold">{product.price}</p>
             <button onClick={()=>setDetails(!details)} className={details ? 'py-2 px-4 border bg-yellow-400' : 'py-2 px-4 border bg-blue-400'}>
                 { details ? 'Hide details' : 'Show details'}
             </button>

             {details && <div>
                 <p>{product.description}</p>
                 {product.rating && <p>Rate: <span style={{fontWeight:'bold', color: 'red'}}>{product.rating.rate}</span></p>}
             </div>}
         </div>
    )
}