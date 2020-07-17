import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Shop It Fresh was founded by Yiming Zhang and Bo Zhang who
              committed to increasing access to fruits and veggies. In the
              global pandemic, Our team realized how difficult it was to go
              grocery shopping. First of all, fresh produce, a staple in our
              diet, was so expensive in Portland with one of the highest costs
              of living in the country. What’s more, every trip to the store
              involved strategically picking a combination of items to last a
              week that we could also haul five blocks and up the stairs.
              Frustrated by the lack of options, our team come up with a
              solution to serve the city they both call home.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
