import React from 'react'

const ItemDetail = ({ data }) => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-3">
                    <div className="card bg-dark mt-5" style={{ width: "18rem" }}>
                        <img src={data.pictureUrl} alt="" />
                        <hr />
                        <h5 className='card-title'>{data.title}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail