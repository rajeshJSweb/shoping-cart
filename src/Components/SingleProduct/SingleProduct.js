import React from 'react';

const SingleProduct = ({product,handleClicked}) => {
    const {name, image, price, inStock}=product;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <div className='flex justify-between gap-8'>
                <p className='text-xl font-bold'>Price: ${price}</p>
                <p>Instock: {inStock}</p>
                </div>
                <div class="card-actions">
                    <button onClick={()=> handleClicked(product)}>Add to cart</button>               
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleProduct;