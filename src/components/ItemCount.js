import React, { useState } from 'react'

const ItemCount = ({ onAdd, stock, initial }) => {
    const [cantidad, setCantidad] = useState(initial)

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
            <div className="container contador">
                <button type="button" className="btn btn-danger" onClick={(restaCantidad)}>-</button>
                <div style={{ color: "cyan" }}>{cantidad}</div>
                <button type="button" className="btn btn-success" onClick={(sumaCantidad)}>+</button>
                <button type="button" className="btn btn-info" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount