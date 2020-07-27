import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Giftsets from "../components/Home/Giftsets"

const GiftsetsPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Giftsets />
  </Layout>
)

export const query = graphql`
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

export default GiftsetsPage
