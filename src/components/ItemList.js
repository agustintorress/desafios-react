import React from 'react'
import Item from './Item'

const ItemList = ({ data = [] }) => {
    return (
        <div className="container">
            <div className="row">
                {data.map(productos => <Item key={productos.id} info={productos} />)}
            </div>
        </div>

    )
}

export default ItemList