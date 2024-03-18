import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import fbLogo from "../images/svg/fb-logo.svg"

const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100063523271642",
    icon: props => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col justify-center md:order-2">
          {social.map(item => (
            <a key={item.name} href={item.href}>
              <span className="sr-only">{item.name}</span>
              <img src={fbLogo} aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex lg:flex-1">
            <StaticImage
              src="../images/busylizzie-logo-white.png"
              alt="Busy Lizzie logo"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 md:flex md:items-center md:justify-between lg:px-8">
        <p className="text-center text-xs leading-5 text-white mt-5">
          {/* &copy; {new Date().getFullYear()} Busy Lizzie. All rights reserved.{" "}*/}
          <a className="text-white text-xs" href="#">
            Privacy Policy |
          </a>
          <a className="text-white text-xs" href="#">
            &nbsp; Terms & Conditions
          </a>
        </p>
        <div className="space-x-5 text-xs mt-5 text-white"></div>
        <p className="text-xs mt-5 text-white ml-0">
          website built and maintained by{" "}
          <a className="text-white text-xs" href="https://pixsel8.com/">
            Pixsel8
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
