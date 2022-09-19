import React from 'react';
import { CartState } from '../Context/Context';
import ProductFilter from '../SingleProduct/ProductFilter';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {
    const {state:{products},
    } =CartState();
    console.log(products)

    return (
        <div className='flex container mx-auto px-4'>
            <div className="artboard phone-1 w-2/12">
                <ProductFilter></ProductFilter>
            </div>
            <div className='grid grid-cols-3 gap-3 w-10/12 bg-dark'>
                {
                    products.map(product => <SingleProduct product={product} />)
                }
            </div>
        </div>
    );
};

export default Home;