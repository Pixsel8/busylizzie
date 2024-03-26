import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import ServiceButton from "./serviceButton"
import { motion } from "framer-motion"

const ServicesButtons = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "services" } } }
      ) {
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
    <div className="flex flex-col items-center my-20">
      <h2>Our services</h2>
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
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            className="relative flex justify-center m-5 w-64 h-64 md:h-96 md:w-96 rounded-lg group"
          >
            <Link to="/contact" className="w-64 h-64 md:w-96 md:h-96">
              <div className="absolute bottom-0 z-10">
                <div className="flex items-center justify-center absolute bg-gray-900 w-64 md:w-96 h-20 rounded-lg"></div>
                <div className="flex items-center justify-center w-64 md:w-96 h-20 rounded">
                  <h3 className="text-white z-10">Contact us</h3>
                </div>
              </div>
              <StaticImage
                src="../images/about-hero.png"
                alt="Woman standing next to a car"
                className="w-64 md:w-96 md:h-96 rounded-lg"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ServicesButtons
