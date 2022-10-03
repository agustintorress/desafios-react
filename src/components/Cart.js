import React from 'react'
import { useCartContext } from '../CartContext'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { getFirestore, addDoc, collection } from 'firebase/firestore'

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        comprador: {
            nombre: 'Luca',
            email: 'Luca@gmail.com',
            telefono: '123456',
            direccion: 'calle falsa'
        },
        items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id, order))
    }

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
            <button type="button" className="btn btn-success" style={{ color: "white", margin: 15 }} onClick={handleClick}>Emitir Compra</button>
        </>
    )
}

export default Cart