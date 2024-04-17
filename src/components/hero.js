import React from "react"
import Button from "./button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = ({ title, heroImage, description }) => {
  const image = getImage(heroImage)
  return (
    <div className="relative isolate overflow-hidden bg-white max-w-7xl mx-auto">
      <div className="max-w-7xl min-h-[calc(100vh-96px)]  xl:min-h-[calc(100vh-122px)] flex flex-col-reverse items-center justify-center xl:flex-row xl:justify-between px-8 py-4">
        <div className="w-auto lg:mx-0 flex md:justify-center">
          <div className="md:w-4/5 lg:w-4/5 xl:w-full xl:flex xl:flex-col xl:justify-center p-4 lg:px-0">
            <h1 className="max-w-2xl mt-4 xl:mt-0">{title}</h1>
            <div className="mt-6 max-w-xl">
              <p>{description}</p>
              <div className="mt-10 flex items-center">
                <Button link="/contact">contact us today</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:mx-0 flex md:justify-center xl:justify-end xl:w-1/2">
          {image && (
            <GatsbyImage
              image={image}
              alt={title}
              imgStyle={{ objectFit: "contain" }}
              className="aspect-[6/5]  max-w-lg rounded-2xl object-contain w-full"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
