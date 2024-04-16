import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

/* Componenets */
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Testimonial from "../components/testimonial"
import Contact from "../components/contact"

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        heroImage1 {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        heroImage2 {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      html
    }
  }
`

const Services = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Hero
        title={frontmatter.title}
        heroImage1={frontmatter.heroImage1.childImageSharp.gatsbyImageData}
        heroImage2={frontmatter.heroImage2.childImageSharp.gatsbyImageData}
        description={frontmatter.description}
      />
      <div className="bg-white my-20 lg:my-32 xl:mt-0 lg:px-8">
        <div className="max-w-7xl mx-auto px-10">{parse(html)}</div>
      </div>
      <Testimonial />
      <Contact />
    </Layout>
  )
}

export const Head = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return <Seo title={frontmatter.title} description={frontmatter.description} />
}

export default Services
