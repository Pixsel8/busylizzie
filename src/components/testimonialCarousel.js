import { motion } from "framer-motion"
import React, { useState, useEffect } from "react"

import arrowLeft from "../images/svg/arrow-left.svg"
import arrowRight from "../images/svg/arrow-right.svg"
import speechLeft from "../images/svg/speech-left.svg"
import speechRight from "../images/svg/speech-right.svg"

const testimonials = [
  {
    id: 1,
    name: "Susan Pow",
    testimonial:
      "I was lucky enough to arrange for Chloe to care for an elderly friend. She was totally empathetic and gained his trust very quickly. Chloe and her team were wonderful, caring, reliable and  kind. They were flexible and looked after every aspect of his care increasing the hours and visits as it became necessary. \n \n Chloe and her team transformed my friend's life and I am very grateful.",
  },
  {
    id: 2,
    name: "Susan Low",
    testimonial:
      "I was lucky enough to arrange for Chloe to care for an elderly friend. She was totally empathetic and gained his trust very quickly. Chloe and her team were wonderful, caring, reliable and  kind. They were flexible and looked after every aspect of his care increasing the hours and visits as it became necessary. \n \n  Chloe and her team transformed my friend's life and I am very grateful.",
  },
  {
    id: 3,
    name: "Susan Wow",
    testimonial:
      "I was lucky enough to arrange for Chloe to care for an elderly friend. She was totally empathetic and gained his trust very quickly. Chloe and her team were wonderful, caring, reliable and  kind. They were flexible and looked after every aspect of his care increasing the hours and visits as it became necessary. \n \n  Chloe and her team transformed my friend's life and I am very grateful.",
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
    <div className="">
      <div className="px-4 py-4 flex items-center">
        <div className="hidden md:block">
          <div
            aria-label="Go to previous testimonial"
            onClick={() =>
              setCurrentIndex(currentIndex =>
                currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
              )
            }
          >
            <img src={arrowLeft} className="w-10 h-10" />
          </div>
        </div>
        <div className="p-8 relative lg:mx-20">
          <img src={speechLeft} className="w-12 h-10 absolute top-0 left-0" />
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} // Duration of the transition
          >
            <p className="text-white p-5">
              "
              {testimonials[currentIndex].testimonial
                .split("\n")
                .map((line, index, array) => (
                  <React.Fragment key={index}>
                    {line}
                    {index !== array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              "
            </p>
            <p className="mt-4 font-semibold text-white p-5">
              {testimonials[currentIndex].name}{" "}
              <span className="font-normal"></span>
            </p>
          </motion.div>
          <img
            src={speechRight}
            className="w-12 h-10 absolute bottom-10 right-0"
          />
        </div>
        <div className="hidden md:block">
          <div
            aria-label="Go to next testimonial"
            onClick={() =>
              setCurrentIndex(
                currentIndex => (currentIndex + 1) % testimonials.length
              )
            }
          >
            <img src={arrowRight} className="w-10 h-10" />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex justify-center space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-5 h-5 ${
                index === currentIndex ? "bg-white" : "bg-pink-700"
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCarousel
