import React from "react"
import { Link } from "gatsby"

const Button = ({ children, link, format }) => {
  if (format === "light") {
    return (
      <Link
        to={link}
        href="#"
        className="transition ease-in-out text-center w-3/5 min-w-48 md:w-48 rounded-3xl border-solid border-2 border-white hover:border-pink-700 px-3.5 py-2.5 text-red-700 hover:text-white hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700 hover:scale-105"
      >
        {children}
      </Link>
    )
  } else {
    return (
      <Link
        to={link}
        href="#"
        className="transition-all ease-in-out text-center text-2xl tracking-tighter font-extrabold w-3/5 min-w-48 md:w-48 rounded-md rounded-tr-3xl hover:rounded-tr-md bg-red-700 px-3.5 py-2.5 text-white hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700 hover:scale-105 "
      >
        {children}
      </Link>
    )
  }
}

export default Button
