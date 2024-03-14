import React, { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    position: "CEO of Company",
    testimonial:
      "This product revolutionized our workflow and boosted our productivity. Highly recommended!",
  },
  {
    id: 2,
    name: "John Smith",
    position: "CTO of Another Company",
    testimonial:
      "A game-changer in its field. The support team was incredibly helpful and responsive.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    position: "Product Manager at Startup",
    testimonial:
      "Simple, efficient, and powerful. It's exactly what we needed to streamline our processes.",
  },
]

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(current => (current + 1) % testimonials.length)
    }, 10000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white shadow-xl rounded-lg p-8">
        <p>"{testimonials[currentIndex].testimonial}"</p>
        <p className="mt-4 font-semibold">
          {testimonials[currentIndex].name},{" "}
          <span className="font-normal">
            {testimonials[currentIndex].position}
          </span>
        </p>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default TestimonialCarousel
