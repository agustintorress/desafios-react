import React from 'react'
import { useCartContext } from '../CartContext'

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext()
    return (
        <div className='container'>
            <img src={product.pictureUrl} alt={product.name} />
            <div style={{ color: "white" }}>
                <p>Nombre: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio c/u: {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button type="button" className="btn btn-danger" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart