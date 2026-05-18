import * as React from "react"
import { Link } from "gatsby"
import Dvrpc from "../images/dvrpc-mini.svg"

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="bg-[#0c2e39] grid grid-cols-3 text-xl text-center underline py-8 md:px-[15%] px-8">
        <Link to="/resources" className="text-white underline">
          Download the Plan
        </Link>
        <Link to="/mrp-webmap" className="text-white underline">
          View Major Regional Projects
        </Link>
        <Link to="/resources#getinvolved" className="text-white underline">
          Get Involved
        </Link>
      </div>
      <div className="bg-[#16819a] md:px-16 md:py-6 p-4">
        <Link to="https://www.dvrpc.org">
          <Dvrpc fill="#dfebf5" className="md:w-[10%] w-1/3" alt="DVRPC Logo" />
        </Link>
        <p>
          190 N Independence Mall West, 8th Floor <br />
          Philadelphia, PA 19106-1520 <br />
          215-592-1800
          <br />
        </p>
        <p className="flex divide-x *:px-4">
          <a
            className="!pl-0 text-white underline"
            href="https://www.dvrpc.org/plan"
          >
            Long-Range Planning Home
          </a>
          <a
            href="https://apps.dvrpc.org/ords/r/dvrpcintranetapps/lrp-comment/comment-list"
            className="text-white underline"
          >
            Public Comments
          </a>
          <Link to="/resources" className="text-white underline">
            Download or Print
          </Link>
          <a
            href="https://www.dvrpc.org/getinvolved"
            className="text-white underline"
          >
            Get Involved
          </a>
        </p>
      </div>
    </footer>
  )
}
export default Footer
