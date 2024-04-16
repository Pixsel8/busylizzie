import React from "react"
import Button from "./button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = ({ title, heroImage1, heroImage2, description }) => {
  const image1 = getImage(heroImage1)
  const image2 = getImage(heroImage2)
  return (
    <div className="relative isolate overflow-hidden bg-white max-w-full xl:px-40 mx-0">
      <div className="min-h-[calc(100vh-96px)]  xl:min-h-[calc(100vh-122px)] flex flex-col-reverse items-center justify-center xl:flex-row xl:justify-between">
        <div className=" lg:w-3/5 xl:flex xl:flex-col xl:justify-center px-10 lg:px-0">
          <h1 className="mt-4 xl:mt-0">{title}</h1>
          <div className="mt-6">
            <p>{description}</p>
            <div className="mt-10 flex items-center">
              <Button link="/contact">Contact us</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:mx-0 lg:w-2/5">
          {image1 && (
            <GatsbyImage
              image={image1}
              alt={title}
              imgStyle={{ objectFit: "contain" }}
              className="max-w-lg object-contain w-8/12 md:w-7/12 lg:w-full translate-y-4 -translate-x-4 md:translate-y-8 md:-translate-x-8 lg:translate-y-8 lg:translate-x-0"
            />
          )}
          {image2 && (
            <GatsbyImage
              image={image2}
              alt={title}
              imgStyle={{ objectFit: "contain" }}
              className="max-w-lg object-contain w-8/12 md:w-7/12 lg:w-full -translate-y-4 translate-x-4 md:-translate-y-8 md:translate-x-8 lg:-translate-y-8 lg:translate-x-12"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
