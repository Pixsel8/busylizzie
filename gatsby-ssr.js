/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import React from "react"

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    <script
      key="tidio-script"
      src="//code.tidio.co/dzx123ect3vgkjcsplwoljsr2cvatsue.js"
      async
    ></script>,
  ])
}
