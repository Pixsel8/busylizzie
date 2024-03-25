import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Contact from "../components/contact"

const heroData = {
  title: "Local events",
  description:
    "None of the events featured here are affiliated with Busy Lizzie, these are listed purely to give people in the local area an idea of the activities on offer.",
}

const BlogIndex = ({ data, location }) => {
  const { title, description } = heroData
  const heroImageData = data.allFile.nodes[0].childImageSharp.gatsbyImageData

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Hero title={title} heroImage={heroImageData} description={description} />
      <ol style={{ listStyle: `none` }} className="max-w-7xl mx-auto my-24">
        {posts.map(post => {
          const eventTitle = post.frontmatter.title || post.fields.slug
          const image = getImage(
            post.frontmatter.heroImage.childImageSharp.gatsbyImageData
          )

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item flex flex-col md:flex-row my-24"
                itemScope
                itemType="http://schema.org/Article"
              >
                <GatsbyImage
                  image={image}
                  alt={post.frontmatter.title}
                  className="md:basis-1/2 rounded-lg mx-10 "
                />
                <div className="basis-3/4 flex flex-col mx-10 md:ml-5 md:mr-10">
                  <header>
                    <h2>{eventTitle}</h2>
                    <h3>
                      {post.frontmatter.date}, {post.frontmatter.location}
                    </h3>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </div>
              </article>
            </li>
          )
        })}
      </ol>
      <Contact />
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: ASC } }
      filter: { frontmatter: { category: { eq: "blog" } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          location
          date(formatString: "MMMM DD, YYYY")
          description
          heroImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    allFile(filter: { name: { eq: "events-hero" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
