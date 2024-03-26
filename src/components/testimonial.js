import React from "react"
import TestimonialCarousel from "./testimonialCarousel"

const Testimonial = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 lg:px-8">
      <h2 className="text-white text-center">Our clients</h2>
      <div className="max-w-7xl  mx-auto">
        <TestimonialCarousel />
      </div>
    </section>
  )
}

export default Testimonial
