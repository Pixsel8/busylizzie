import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import ServiceButton from "./serviceButton"
import Button from "./button"

const EventButtons = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "blog" } } }) {
        edges {
          node {
            frontmatter {
              title
              path
              heroImage {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="flex flex-col items-center my-40">
      <h2>Local Events</h2>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col flex-wrap lg:flex-row justify-evenly max-w-7xl">
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const { title, path, heroImage } = node.frontmatter
            const image = getImage(heroImage.childImageSharp.gatsbyImageData)
            return (
              <ServiceButton
                key={path}
                title={title}
                path={path}
                image={image}
              />
            )
          })}
        </div>
      </div>
      <div className="mt-20"></div>
      <Button link="/contact">find out more</Button>
    </div>
  )
}

export default EventButtons
