import React from 'react'
import { useCartContext } from '../CartContext'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <div className="container">
                    <p style={{ color: "white" }}>No hay elementos en el carrito</p>
                    <Link to='/'>Hacer compras</Link>
                </div>
            </>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p style={{ color: "white", margin: 15 }}>
                Total: ${totalPrice()}
            </p>
        </>
    )
}

export default Cart