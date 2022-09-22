import React from 'react'
import { useState } from 'react'
import ItemCount from '../components/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../CartContext'

const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false)
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-3">
                    <div className="card bg-dark mt-5" style={{ width: "18rem" }}>
                        <img src={data.pictureUrl} alt="" />
                        <h5 className='card-title'>{data.name}</h5>
                        <hr />
                        <p>{data.description}</p>
                        <p>${data.price}</p>
                        {
                            goToCart
                                ? <Link to="/cart" type='button' className='btn btn-info'>Terminar compra</Link>
                                : <ItemCount stock={5} initial={1} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail