import React from "react"
import ContactForm from "./form"

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 w-full">
      <div className="max-w-7xl w-full">
        <h2>Contact us</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
          <div className="w-full lg:w-1/2"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact
