import React from "react"
import { Link } from "gatsby"

const Button = ({ children, link }) => {
  return (
    <Link
      to={link}
      href="#"
      className="rounded-3xl bg-gray-900 px-3.5 py-2.5 text-white hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
    >
      {children}
    </Link>
  )
}

export default Button
