import * as React from "react"
import Dvrpc from "../images/dvrpc.svg"
import Connections from "../images/connections-2050.png"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  return (
    <header className="bg-[#0c2e39] flex p-6">
      <Link className="md:w-[10%] w-1/4 lg:w-[7%]" to="https://www.dvrpc.org">
        <Dvrpc fill="#dfebf5" width="100%" />
      </Link>
      <div className="min-h-full w-0.5 mx-4 my-2 bg-[#dfebf5]" />
      <Link className="md:w-[10%] w-1/4 lg:w-[7%]" to="/">
        <img src={Connections} />
      </Link>
    </header>
  )
}
export default Header
