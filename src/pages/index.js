import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
import Connections from "../images/connections-2050.svg"
import RegionOutline from "../images/region-outline.svg"
import Hero from "../images/home-image.png"
import Dot from "../images/dot.svg"
import Bubbles from "../components/bubbles"

const ExploreLink = ({ children }) => {
  return (
    <div className="flex items-center space-x-4">
      <Dot width="7%" />
      {children}
    </div>
  )
}

// @TODO: fix bubbles (font size and width), fix dots

const IndexPage = () => {
  return (
    <Layout>
      <div className="bg-[#cce5f3] flex flex-col items-center relative">
        <img src={Bg} className="absolute" />
        <Connections width="50%" fill="#dfebf5" className="z-10 my-24" />
        <div className="text-[#dfebf5] mx-auto w-full bg-[#0c2e39] flex flex-col items-center text-center relative px-[16%]">
          <RegionOutline className="absolute top-[15%] z-10" width="50%" />
          <p className="text-4xl p-12 pb-0 z-50">
            <span className="italic font-bold">UPDATE: CONNECTIONS 2050</span>{" "}
            is Greater Philadelphia's Long-Range Plan (Plan). Built around a
            regional Vision for 2050, it serves as a blueprint for prioritizing
            $73 billion for capital transportation investment in the region over
            the coming decades.
          </p>
          <h2 className="text-6xl w-2/3 z-50 mt-24 mb-18">
            The Regional Vision for 2050 is a Greater Philadephia that provides:
          </h2>

          <div className="-ml-[5%] -mr-[5%] my-24">
            <Bubbles />
          </div>
        </div>
        <Link className="text-3xl underline my-6 p-2 bg-[#0c2e39] text-white">
          Learn more about the Vision
        </Link>
        <div className="w-full bg-[#eef4fb]">
          <h2 className="text-4xl bg-[#0c2e39] text-white font-bold p-4 pl-[16%]">
            Explore the Plan
          </h2>
          <div className="w-[68%] relative border-l-4 border-[#0c2e39] h-[90vh] mx-auto pt-4">
            <div className="flex flex-col underline text-4xl space-y-6 w-2/5 -ml-[1.5%]">
              <ExploreLink>
                <Link>What is the Plan?</Link>
              </ExploreLink>
              <ExploreLink>
                <Link>What's Shaping Our Future?</Link>
              </ExploreLink>
              <ExploreLink>
                <Link>What will Transportation Look Like in 2050?</Link>
              </ExploreLink>
              <ExploreLink>
                <Link>How Will We Fund the Future?</Link>
              </ExploreLink>
              <ExploreLink>
                <Link>How Can We Make It Happen?</Link>
              </ExploreLink>
            </div>
            <img
              src={Hero}
              class="right-0 absolute top-[1%] w-[70%] -right-[20%]"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
