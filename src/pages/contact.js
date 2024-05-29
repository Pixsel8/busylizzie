import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/form"
import Seo from "../components/seo"

import callIcon from "../images/svg/call.svg"
import messageIcon from "../images/svg/message.svg"
import facebook from "../images/svg/facebook.svg"

const contactData = {
  title: "Contact us",
  description:
    "For more information on any of our services or if you have any questions for us, please call or send us an email, we’d love to hear from you.",
}

const contact = () => {
  const { title, description } = contactData
  return (
    <Layout>
      <Seo title={title} description={description} />
      <div className="flex flex-col items-center justify-center px-10 md:py-12 lg:py-25 w-full mb-20">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row">
            <div className="basis-full lg:basis-2/3 md:px-10">
              <h1 className="text-left lg:pl-6 my-8 lg:mb-12">Contact us</h1>
              <p className="lg:px-6 mb-10">
                For more information on any of our services or if you have any
                questions for us, please call or send us an email, we’d love to
                hear from you.
              </p>
              <ContactForm />
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col md:justify-evenly lg:justify-start w-full lg:w-1/2 lg:px-10 pt-10 lg:mt-14 space-y-2.5">
              <div className="md:flex md:items-center">
                <img
                  src={messageIcon}
                  alt="message icon"
                  className="inline-block mx-4"
                />
                <h3 className="inline">info@busylizziehomecare.co.uk</h3>
              </div>
              <div className="md:flex md:items-center">
                <img
                  src={callIcon}
                  alt="phone icon"
                  className="inline-block mx-4"
                />
                <h3 className="inline">07949317210</h3>
              </div>
              <div className="md:flex md:items-center">
                <a href="https://www.facebook.com/profile.php?id=100063523271642">
                  <img
                    src={facebook}
                    alt="phone icon"
                    className="inline-block mx-4"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contact
