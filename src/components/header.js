import * as React from "react"
import Dvrpc from "../images/dvrpc-mini.svg"
import Connections from "../images/connections-2050.svg"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  return (
    <header className="bg-[#063446] flex p-6">
      <Link className="md:w-[10%] w-1/4" to="https://www.dvrpc.org">
        <Dvrpc fill="#dfebf5" width="100%" />
      </Link>
      <div className="min-h-full w-0.5 mx-4 my-2 bg-[#dfebf5]" />
      <Link className="md:w-[10%] w-1/4" to="/">
        <Connections fill="#dfebf5" width="100%" />
      </Link>
    </header>
  )
}
export default Header
