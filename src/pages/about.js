import React from "react"
import Hero from "../components/hero"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import AboutBio from "../components/aboutBio"
import Testimonial from "../components/testimonial"
import Contact from "../components/contact"

const heroData = {
  title: "About us",
  description:
    "Find out more about Busy Lizzie and it’s founder Chloe Bean, who has been working in the care industry for almost 20 years.",
}

const About = () => {
  const { title, description } = heroData
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "about-hero" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const heroImageData = allFile.nodes[0].childImageSharp.gatsbyImageData
  return (
    <Layout>
      <Hero title={title} heroImage={heroImageData} description={description} />
      <div className="bg-white my-20 lg:my-32 xl:mt-0 lg:px-8">
        <div className="max-w-7xl mx-auto px-10">
          <p>
            We are responsive and reactive to clients concerns and requests. We
            fully recognise that circumstances can change quickly and
            unpredictably and we make every effort to accommodate any
            ‘surprises’.
          </p>{" "}
          <p className="mt-5">
            Our staff are experienced, well trained and have a cheerful
            disposition. Punctuality and reliability are clients major concerns
            and we are confident that all appointments are met on time.
          </p>
          <p className="mt-5">
            As the team is a small one (currently eight carers) communication
            between the carers, the clients and any relevant local medical
            professionals is excellent.
          </p>{" "}
          <p className="mt-5">
            {" "}
            Wherever possible the client will generally see only one or two
            different carers who will quickly become familiar friendly faces who
            are aware of the needs of each particular client.
          </p>
        </div>
      </div>
      <AboutBio />
      <Testimonial />
      <Contact />
    </Layout>
  )
}

export default About
