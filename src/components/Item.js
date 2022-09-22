import React from 'react'
import { Link } from "react-router-dom"



const Item = ({ info }) => {

    return (
        <div className="col">
            <div className="card bg-dark mt-5">
                <Link to={`/item/${info.id}`}>
                    <img className='img-thumbnail' src={info.pictureUrl} alt="" height={100} />
                </Link>
                <div className="card-body">
                    <h5 className='card-title'>{info.name}</h5>
                    <hr />
                    <p className='card-text'>{info.description}</p>
                    <p>${info.price}</p>
                </div>
            </div>
        </div>
    );
}

export default Item

