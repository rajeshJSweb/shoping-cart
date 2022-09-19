import React from 'react';
import ProductFilter from '../SingleProduct/ProductFilter';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = ({products,handleClicked}) => {
    
    return (
        <div className='flex container mx-auto px-4 gap-8' >
            <div className="artboard phone-1 w-2/12 shadow-xl rounded-xl">
                <ProductFilter></ProductFilter>
            </div>
            <div className='grid grid-cols-3 gap-5 w-10/12 bg-dark'>
                {
                    products.map(product => <SingleProduct
                        handleClicked={handleClicked}
                        key={product.id} 
                        product={product} />)
                }
            </div>
        </div>
    );
};

export default Home;