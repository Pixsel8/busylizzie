import React from "react"
import { Link } from "gatsby"

const Button = ({ children, link, style }) => {
  if (style === "light") {
    return (
      <Link
        to={link}
        href="#"
        className="transition ease-in-out text-center w-3/5 md:w-48 rounded-3xl bg-pink-700 px-3.5 py-2.5 text-white hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700 hover:scale-105"
      >
        {children}
      </Link>
    )
  } else {
    return (
      <Link
        to={link}
        href="#"
        className="transition ease-in-out text-center w-3/5 md:w-48 rounded-3xl bg-gray-900 px-3.5 py-2.5 text-white hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700 hover:scale-105"
      >
        {children}
      </Link>
    )
  }
}

export default Button
