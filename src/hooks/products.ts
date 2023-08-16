import React from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts()
 {
     const[products, setProducts] = React.useState<IProduct[]>([])
     const[loading, setLoading] = React.useState(false);
     const[error, setError] = React.useState('');

     function addProduct(product:IProduct)
     {
         setProducts(prev => [...prev, product]);
     }
     async function fetchProducts(){
         try{
             setError('');
             setLoading(true);
             const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=12');
             setProducts(response.data);
             setLoading(false)
         }catch (e: unknown) {
             setLoading(false)
             const error = e as AxiosError
             setError(error.message)
         }
     }

     React.useEffect(() => {
         fetchProducts();
     }, []);

     return {products, error, loading, addProduct}
 }