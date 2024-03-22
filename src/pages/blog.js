import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

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
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const image = getImage(
            post.frontmatter.heroImage.childImageSharp.gatsbyImageData
          )

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                  <GatsbyImage
                    image={image}
                    alt={post.frontmatter.title}
                    className="w-64 md:w-96 md:h-96 rounded-lg"
                  />
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
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
