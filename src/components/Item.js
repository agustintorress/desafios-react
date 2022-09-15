import React from 'react'
import { Link } from "react-router-dom"

const Item = ({ info }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="card bg-dark mt-5" style={{ width: "18rem" }}>
                        <Link to={`/item/${info.id}`}>
                            <img className='card-img-top' src={info.pictureUrl} alt="" />
                        </Link>
                        <div className="card-body">
                            <h5 className='card-title'>{info.name}</h5>
                            <hr />
                            <p className='card-text'>{info.description}</p>
                            <p>${info.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item

