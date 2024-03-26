import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Button from "../components/button"
import Testimonial from "../components/testimonial"
import Contact from "../components/contact"
import ServicesButtons from "../components/servicesButtons"
import EventButtons from "../components/eventButtons"

const heroData = {
  pageTitle: "Home",
  title: "Your welfare is our concern",
  description:
    "Busy Lizzie provides professional home care services tailored to your needs.",
}

const Index = () => {
  const { title, description, pageTitle } = heroData
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "home-hero" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  // Assuming there's only one matching file, adjust as necessary for your data structure
  const heroImageData = allFile.nodes[0].childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo title={pageTitle} description={description} />
      <Hero title={title} heroImage={heroImageData} description={description} />
      <div className="bg-white my-20 lg:my-32 xl:mt-0 lg:px-8">
        <div className="max-w-4xl mx-auto px-10 text-center">
          <p>
            Busy Lizzie Homecare is a small company that was started in 2018 by
            Chloe Bean in Timsbury. The main areas covered are within an eight
            mile radius of this village. Busy Lizzie have established a very
            good reputation in this area and any prospective clients would be
            more than welcome to ‘test local opinion’. The company prides itself
            on it’s motto ‘Your welfare is our Concern’. Being small we can be
            very flexible with respect to the services we provide. As we are
            very keen to treat every client as an individual each package of
            services will essentially be bespoke. Sensitivity to a clients
            current and possibly changing requirements is central to the
            services we provide.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 my-8 md:flex-row md:space-x-3 md:space-y-0 ">
          <Button link="/about" format="light">
            about us
          </Button>
          <Button link="/contact">contact us today</Button>
        </div>
      </div>
      <ServicesButtons />
      <Testimonial />
      <EventButtons />
      <Contact />
    </Layout>
  )
}

export default Index
