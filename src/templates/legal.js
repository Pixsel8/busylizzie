import * as React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"

const LegalTemplate = ({ data: { site, markdownRemark: post }, location }) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <motion.div
        className="overflow-hidden bg-white max-w-full px-10 xl:px-40 my-20 mx-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <article itemScope itemType="http://schema.org/Article">
          <div className="xl:flex xl:flex-row xl:justify-center">
            <div className="xl:w-full">
              <header className="mt-5">
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
              </header>
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
                className="mt-10 space-y-4 raw-html"
              />
            </div>
          </div>
        </article>
      </motion.div>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return <Seo title={post.frontmatter.title} />
}

export default LegalTemplate

export const pageQuery = graphql`
  query legalDocument($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
