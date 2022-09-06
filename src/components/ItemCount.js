import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);

    const sumaCantidad = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }
    const restaCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <>
            <div className='contador'>
                <button className='boton-rojo' onClick={restaCantidad}>-</button>
                <div className='cantidad'>{cantidad}</div>
                <button className='boton-verde' onClick={sumaCantidad}>+</button>
            </div>
            <div className="boton-cart" onClick={() => onAdd(cantidad)}>
                <p className='cart-text'>Añadir al carrito</p>
            </div>
        </>
    )
}

export default ItemCount