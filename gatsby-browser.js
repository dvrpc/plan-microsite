import "./src/styles/global.css"
import "react-tippy/dist/tippy.css"

import React from "react"
import { AppProvider } from "./src/components/AppContext"

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}
