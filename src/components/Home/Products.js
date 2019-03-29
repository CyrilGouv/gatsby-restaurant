import React from 'react'
import Img from 'gatsby-image'

export default function Products({ product }) {
    const { name, price, ingredient } = product
    const { fixed } = product.img

    return (
        <div className="product">
            <Img fixed={ fixed } className="img" />
            <div className="text">
                <div className="product-content">
                    <h3 className="name">{ name }</h3>
                    <h4 className="price">
                        ${ price }
                    </h4>
                </div>
                <p className="info">{ ingredient }</p>
            </div>
        </div>
    )
}