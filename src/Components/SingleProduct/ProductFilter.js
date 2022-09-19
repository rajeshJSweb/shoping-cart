import React from 'react';

const ProductFilter = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl'>Filter Products</h1>
            <div class="divider"></div> 
            <div className='px-8'>
                <div class="form-control">
                <label class="label cursor-pointer">
                    <input type="radio" name="radio-6" class="radio checked:bg-red-500" checked />
                    <span class="label-text">Acending</span> 
                </label>
                </div>
                <div class="form-control">
                <label class="label cursor-pointer">
                    <input type="radio" name="radio-6" class="radio checked:bg-blue-500" checked />
                    <span class="label-text">Decending</span> 
                </label>
                </div>
                <div class="form-control">
                <label class="label cursor-pointer">
                    <input type="checkbox" checked="checked" class="checkbox" />
                    <label>Instock</label>
                </label>
                </div>
                <div class="form-control">
                <label class="label cursor-pointer">
                    <input type="checkbox" checked="checked" class="checkbox" />
                    <label>Fast Delivery</label>
                </label>
                </div>
                <div class="rating mt-5 flex justify-center">
                    <label>Rating: </label>
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;