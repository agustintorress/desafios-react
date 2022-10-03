import React from 'react'
import { useCartContext } from '../CartContext'

export const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return (
        <>
            <i className='bx bxs-cart'></i>
            <span>{totalProducts() || ''}</span>
        </>
    );
}

export default CartWidget