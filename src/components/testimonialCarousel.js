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
    name: "Caroline Wickham Smith",
    testimonial:
      "Chloe is in every respect a delightful person and always succeeds in cheering my wife Vera with her cheeriness and chatter. Always reliable and punctual, she is just exceptional in her approach and ability to assess and transform situations, and Chloe’s care-giving extends well beyond the agreed hours and call of duty. \n \n It’s hard to find capable, conscientious and reliable carers for loved ones who want to remain in their own homes, but need extra help to do so, and I can wholeheartedly recommend Busy Lizzie Homecare for the highest quality care.",
  },
  {
    id: 3,
    name: "Richard C Hallworth",
    testimonial:
      "I was lucky enough to arrange for Chloe to care for an elderly friend. She was totally empathetic and gained his trust very quickly. Chloe and her team were wonderful, caring, reliable and  kind. They were flexible and looked after every aspect of his care increasing the hours and visits as it became necessary. \n \n  Chloe is a gem. We have been extremely blessed in having her and could not wish for anyone better. I, with my wife Vera, without hesitation happily recommend Chloe to anyone wanting a first class care-giving person.",
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
      <div className="px-4 py-4 flex items-center ">
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
        <div className="p-8 relative lg:mx-20 md:min-h-[554px] lg:min-h-[448px] ">
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
