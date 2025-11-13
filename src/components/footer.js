import * as React from "react"
import { Link } from "gatsby"
import Dvrpc from "../images/dvrpc-mini.svg"
import Connections from "../images/connections-2050.svg"

const Footer = () => {
  return (
    <footer className="text-[#dfebf5]">
      <div className="bg-[#0c2e39] grid grid-cols-3 justify-items-center text-xl text-center underline py-8 px-[15%]">
        <Link>Download the Plan</Link>
        <Link>View Major Regional Projects</Link>
        <Link>Get Involved</Link>
      </div>
      <div className="bg-[#16819a] px-16 py-6 font-[Roboto]!">
        {/* TODO: add link to dvrpc home */}
        <Dvrpc fill="#dfebf5" width="10%" />
        <p>
          190 N Independence Mall West, 8th Floor <br />
          Philadelphia, PA 19106-1520 <br />
          215-592-1800
          <br />
        </p>
        <p className="flex space-x-4">
          <a>Long-Range Planning Home</a>
          <a>Public Comments</a>
          <a>Download or Print</a>
          <a>Get Involved</a>
        </p>
      </div>
    </footer>
  )
}
export default Footer
