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
    <div className="flex items-center gap-x-6">
      <Dot className="max-w-[1.25rem]" />
      <div>{children}</div>
    </div>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <div className="bg-[#cce5f3] flex flex-col items-center relative">
        <img src={Bg} className="absolute" />
        <Connections
          fill="#dfebf5"
          className="z-10 md:my-24 my-10 md:w-1/2 w-2/3"
        />
        <div className="text-[#dfebf5] mx-auto w-full bg-[#0c2e39] flex flex-col items-center text-center relative md:px-[16%] px-4">
          <RegionOutline className="absolute top-[15%] z-10 md:w-1/2" />
          <p className="md:text-4xl text-lg md:p-12 pb-0 z-50 p-2">
            <span className="italic font-bold">UPDATE: CONNECTIONS 2050</span>{" "}
            is Greater Philadelphia's Long-Range Plan (Plan). The Plan serves as
            the blueprint to guide growth and development in our region and to
            prioritize funding for capital transportation investment,
            accordingly.
          </p>
          <h2 className="md:text-9xl text-xl md:w-2/3 z-50 md:mt-24 md:mb-18 my-8">
            The Regional Vision for 2050 is a Greater Philadephia that provides:
          </h2>

          <div className="md:-ml-[5%] md:-mr-[5%] md:my-20">
            <Bubbles />
          </div>
        </div>
        <Link
          className="text-3xl underline my-6 p-2 bg-[#0c2e39] text-white text-center"
          to="/vision"
        >
          Learn more about the Vision
        </Link>
        <div className="w-full bg-[#eef4fb]">
          <h2 className="text-4xl bg-[#0c2e39] text-white font-bold p-4 pl-[16%]">
            Explore the Plan
          </h2>
          <div className="md:w-[68%] relative border-l-4 border-[#0c2e39] h-[90vh] mx-auto pt-4 mx-6 md:mx-0">
            <div className="flex flex-col underline md:text-4xl space-y-6 md:w-2/5 md:-ml-[1.5%] -ml-[4%]">
              <ExploreLink>
                <Link to="/what-is-the-plan">What is the Plan?</Link>
              </ExploreLink>
              <ExploreLink>
                <Link to="/trends">What's Shaping Our Future?</Link>
              </ExploreLink>
              <ExploreLink>
                <Link to="/vision">
                  What will Transportation Look Like in 2050?
                </Link>
              </ExploreLink>
              <ExploreLink>
                <Link to="/financial">How Will We Fund the Future?</Link>
              </ExploreLink>
              <ExploreLink>
                <Link to="/taking-action">How Can We Make It Happen?</Link>
              </ExploreLink>
            </div>
            <img
              src={Hero}
              class="right-0 absolute md:top-[1%] md:w-[70%] md:-right-[20%]"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
