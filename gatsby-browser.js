// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/styles/global.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="tidio-script"
      src="//code.tidio.co/dzx123ect3vgkjcsplwoljsr2cvatsue.js"
      async
    ></script>,
  ])
}
