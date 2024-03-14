import React from "react"
import Button from "./button"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = ({ title, heroImage, description }) => {
  const image = getImage(heroImage)
  return (
    <div className="relative isolate overflow-hidden bg-white max-w-7xl mx-auto">
      <div className="max-w-7xl px-10 md:py-12 lg:py-40 xl:py-48 2xl:pb-64 2xl:pt-0 flex flex-col-reverse xl:flex-row xl:justify-between">
        <div className="w-auto lg:mx-0 flex md:justify-center my-10">
          <div className="md:w-3/5 lg:w-1/2 xl:w-full xl:flex xl:flex-col xl:justify-center">
            <h1 className="max-w-2xl">{title}</h1>
            <div className="mt-6 max-w-xl">
              <p>{description}</p>
              <div className="mt-10 flex items-center">
                <Button link="/contact">contact us today</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:mx-0 flex md:justify-center xl:justify-end my-10 xl:w-1/2">
          {image && (
            <GatsbyImage
              image={image}
              alt={title}
              className=" aspect-[6/5] w-full max-w-lg rounded-2xl object-cover"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
