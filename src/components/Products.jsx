import React from 'react'

export const Products = ({ data }) => {
    return (
        <>
            <div className="container row g-3 my-5 mx-auto">
                {
                    data.map((ele) => (
                        <div className="col-3" >
                            <div className="card" >
                                <img src={ele.image} className="card-img-top" alt={ele.image} />
                                <div className="card-body">
                                    <h5 className="card-title text-truncate"> {ele.title} </h5>
                                    <a className="btn btn-outline-danger text-decoration-none ">$ {ele.price}</a>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}
