import React from 'react'
import { useState } from 'react'
import ItemCount from '../components/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false)


    const onAdd = (cantidad) => {
        setGoToCart(true);
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-3">
                    <div className="card bg-dark mt-5" style={{ width: "18rem" }}>
                        <img src={data.pictureUrl} alt="" />
                        <hr />
                        <h5 className='card-title'>{data.title}</h5>
                        {
                            goToCart
                                ? <Link to="/cart">Terminar compra</Link>
                                : <ItemCount stock={5} initial={1} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail