import React from "react"
import ContactForm from "./form"
import { StaticImage } from "gatsby-plugin-image"

import callIcon from "../images/svg/call.svg"
import messageIcon from "../images/svg/message.svg"

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 lg:my-32 w-full">
      <div className="max-w-7xl w-full">
        <h2 className="text-center my-12">Contact us</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 px-10">
            <ContactForm />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col md:justify-evenly lg:justify-start w-full lg:w-1/2 px-12 lg:px-10 pt-10">
            <div className="md:flex md:items-center">
              <img
                src={messageIcon}
                alt="message icon"
                className="inline-block mx-4"
              />
              <h3 className="inline">info@busylizzie.com</h3>
            </div>
            <div className="md:flex md:items-center">
              <img
                src={callIcon}
                alt="phone icon"
                className="inline-block mx-4"
              />
              <h3 className="inline">07949317210</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
