import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const ServiceButton = ({ title, path, image }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="relative flex justify-center m-5 group"
    >
      <Link to={path}>
        <div className="absolute bottom-0 z-10">
          <div className="flex items-center justify-center absolute bg-gray-900 w-64 md:w-96 h-20 rounded-lg"></div>
          <div className="flex items-center justify-center w-64 md:w-96 h-20 rounded">
            <h3 className="text-white z-10">{title}</h3>
          </div>
        </div>
        <GatsbyImage
          image={image}
          alt={title}
          className="w-64 md:w-96 md:h-96 rounded-lg"
        />
      </Link>
    </motion.div>
  )
}

export default ServiceButton
