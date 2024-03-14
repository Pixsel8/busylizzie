import React from "react"
import TestimonialCarousel from "./testimonialCarousel"

const Testimonial = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-white">Our clients</h2>
        <div className="max-w-2xl mx-auto">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  )
}

export default Testimonial
