import React from "react"
import Giftset from "./Giftset"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"
import { query } from "../../pages/menu"
import { render } from "react-dom"

const getGiftsets = graphql`
  {
    giftsets: allContentfulGiftSets {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Giftsets() {
  return (
    <StaticQuery
      query={getGiftsets}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="gift sets" />
              <div className="row">
                {data.giftsets.edges.map(({ node: giftset }) => {
                  return <Giftset key={giftset.id} giftset={giftset} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
