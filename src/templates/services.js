import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

/* Componenets */
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Testimonial from "../components/testimonial"

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        heroImage {
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
        heroImage={frontmatter.heroImage.childImageSharp.gatsbyImageData}
        description={frontmatter.description}
      />
      <div className="bg-white my-20 xl:mt-0 lg:px-8">
        <div className="max-w-7xl mx-auto px-10">{parse(html)}</div>
      </div>
      <Testimonial />
    </Layout>
  )
}

export const Head = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return <Seo title={frontmatter.title} description={frontmatter.description} />
}

export default Services
