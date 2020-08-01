import React from "react"
import Img from "gatsby-image"
import { FaProductHunt } from "react-icons/fa"

export default function Giftset({ giftset }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={giftset.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{giftset.title}</h6>
          <h6>${giftset.price}</h6>
          <button className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-id={giftset.id}
            data-item-name={giftset.title}
            data-item-price={giftset.price}
            data-item-image={giftset.image.fluid.src}
            data-item-url="http://localhost:8000/"
            >
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
