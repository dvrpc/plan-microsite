import * as React from "react"
import Dvrpc from "../images/dvrpc-mini.svg"
import Connections from "../images/connections-2050.svg"

const Header = ({ siteTitle }) => {
  return (
    <header className="bg-[#0c2e39] flex p-6">
      {/* TODO: add link to dvrpc home */}
      <Dvrpc fill="#dfebf5" width="10%" />
      <div className="min-h-full w-0.5 mx-4 my-2 bg-[#dfebf5]" />
      <Connections fill="#dfebf5" width="10%" />
    </header>
  )
}
export default Header
