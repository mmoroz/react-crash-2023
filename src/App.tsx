import React from 'react';

import { Product } from './components/Product';
import {useProducts} from "./hooks/products";
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";
import {IProduct} from "./models";



function App() {

    const {products, loading, error, addProduct} = useProducts();
    const[modal, setModal] = React.useState(false);

    const createHandler = (product:IProduct)=>{
        setModal(false);
        addProduct(product);
    }

    return (
        <div className="container mx-auto pt-5 mb-10">
            {loading && <p className="text-center">Loading ...</p>}
            {error && <p className="text-center text-red-600">{error}</p>}
            <button className="border bg-yellow-700 py-2 px-4 text-white mb-10 rounded" onClick={()=>setModal(true)}>Show modal</button>
            <div className="grid grid-cols-3 gap-4">
                {products.map(product => <Product product={product} key={product.id}/>)}
            </div>
            { modal &&
                <Modal title="My Form example" onClose={()=>setModal(false)}>
                    <CreateProduct onCreate={createHandler}/>
                </Modal>
            }
        </div>
    );
}

export default App;
