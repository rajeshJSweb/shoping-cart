import React, {createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';

const Cart = createContext()
faker.seed(99);

const Context = ({children}) => {
    const products = [...Array(30)].map(() =>({
            id:faker.datatype.uuid(),
            name:faker.commerce.productName(),
            price:faker.commerce.price(),
            image:faker.image.image(),
            inStock:faker.helpers.arrayElements([0,3,5,6]),
            fastDelivery:faker.datatype.boolean(),
            ratings:faker.helpers.arrayElements([1,2,3,4,5])
    }));

    const [state, dispatch] = useReducer(cartReducer, {
            products:products,
            cart:[], 
    });

    return (
        <Cart.Provider value={{state, dispatch}}>
           {children} 
        </Cart.Provider>
    );
};

export default Context;

export const CartState =()=>{
    return useContext(Cart);
}