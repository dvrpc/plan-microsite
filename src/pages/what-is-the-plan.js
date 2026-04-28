import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
import Dot from "../images/dot.svg"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import PlanProcess from "../images/plan-process@4x.png"
import DvrpcMap from "../components/dvrpcmap"
import WhatMap, { Legend } from "../components/whatmap"

const WhatIsThePlan = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="w-full h-full">
          <img
            alt="Stylized image of the DVPRC region."
            src={Bg}
            className="absolute object-cover h-2/5 w-full"
          />
          <div className="flex text-white font-bold w-[68%] mx-auto px-7 z-50 relative items-center mt-4">
            <Link className="underline text-white" to="/">
              Home
            </Link>
            <ChevronRightIcon width="1.5%" />
            <Link className="text-white">About</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] w-full bg-[#0c2e39] flex flex-col relative px-10 py-6 space-y-4 mt-[10%]">
          <div className="md:w-[68%] mx-auto space-y-4">
            <h2 className="md:text-3xl text-xl font-bold text-white">
              What Is the Plan?
            </h2>
            <p className="md:text-2xl text-lg pb-0 z-50">
              <span className="italic">Update: Connections 2050</span> is
              Greater Philadelphia's Long-Range Plan (Plan). The Plan serves as
              the blueprint to guide growth and development in our region and to
              prioritize funding for capital transportation investment
              accordingly.
            </p>
            <p className="md:text-2xl text-lg pb-0 z-50">
              The Plan looks ahead to how our region will grow and
              change—considering population trends, the economy, the
              environment, and technology—to guide investments in roads,
              transit, biking, walking, and other transportation modes.
            </p>
          </div>
        </div>
        <div className="md:w-[68%] relative border-l-4 border-[#0c2e39]">
          <div className="flex items-center w-full md:p-6 p-2 relative mt-4">
            <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
            <h2 className="md:text-2xl text-lg text-[#063446] font-bold">
              The DVRPC Region
            </h2>
          </div>
          <div className="flex flex-col space-y-4 md:p-6 p-2 md:pt-0 relative">
            <p>Use the interactive map to explore the region.</p>
            <div className="relative flex">
              <Legend />
              <WhatMap />
            </div>

            <p>
              Greater Philadelphia is one of the nation’s most historic and
              dynamic regions. Once an industrial powerhouse, it has evolved
              into a <strong>diverse economic and cultural hub</strong>. The
              region is a complex mosaic of 350 municipalities, from the
              nation’s sixth largest city to small rural hamlets with a
              wide-range of communities in between. Each of these places has
              different needs and varying levels of resources to respond to
              them. Today’s regional economy is powered by{" "}
              <strong>
                healthcare, education, technology, and creative sectors
              </strong>
              , all connected by a robust transportation network linking us to
              New York, Washington, D.C., and beyond.
            </p>
            <p>
              <span className="font-bold">
                Still, our region faces challenges:
              </span>
              <br />
              <ul className="list-disc ml-4">
                <li>Rising housing costs and affordability pressures</li>
                <li>Aging infrastructure</li>
                <li>Shifts in commuting and work patterns</li>
                <li>Funding shortfalls for public transit</li>
              </ul>
            </p>
            <p>
              Addressing these issues requires regional{" "}
              <strong>coordination</strong> and <strong>collaboration</strong>
              —the heart of{" "}
              <a
                href="https://www.dvrpc.org/about/"
                target="_blank"
                className="underline"
              >
                DVRPC’s mission
              </a>
              .
            </p>
          </div>
        </div>
        <div className="w-full bg-[#cbe5f3] relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto">
            <div className=" flex items-center w-full md:p-6 p-2 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="md:text-2xl text-lg text-[#063446] font-bold">
                The Long-Range Plan
              </h2>
            </div>
            <div className="flex flex-col space-y-4 md:pt-0 md:p-6 p-2">
              <p>
                At its core, the Plan expresses a{" "}
                <strong>vision for Greater Philadelphia in 2050</strong>—what
                kind of region we want to become and how we might get there
                together.
              </p>
              <p>
                The Long-Range Plan (Plan) outlines what is needed to build a
                safe, modern, and multimodal transportation network out to the
                year 2050, shapes which transportation projects receive funding
                over the next two decades, and connects these investments to
                broader{" "}
                <strong>
                  land use, environmental, economic, and quality of life goals
                </strong>
                .
              </p>
              <Link
                className="mx-auto text-white bg-[#063446] p-2 font-bold"
                to="/vision"
              >
                See the Vision for 2050
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#eef4fb] relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] md:mx-auto">
            <div className="flex items-center w-full md:p-6 p-2 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="md:text-2xl text-lg text-[#063446] font-bold">
                Putting the Plan into Action
              </h2>
            </div>
            <div className="flex flex-col space-y-4 md:p-6 p-2 md:pt-0">
              <p>
                While the Plan is updated every four years, implementation
                happens every day. DVRPC and its partners move projects forward
                through two key processes:
              </p>
              <ul className="list-disc ml-4">
                <li>
                  The{" "}
                  <a
                    href="https://www.dvrpc.org/tip/"
                    target="_blank"
                    className="font-bold underline"
                  >
                    Transportation Improvement Program (TIP)
                  </a>
                  : the region’s short-term list of funded transportation
                  projects. Larger projects originate from the Plan.
                </li>
                <li>
                  The{" "}
                  <a
                    href="https://www.dvrpc.org/workprogram/"
                    target="_blank"
                    className="font-bold underline"
                  >
                    Annual Work Program:
                  </a>{" "}
                  ongoing studies, planning initiatives, and technical support
                  that help local governments advance shared goals. Programs and
                  activities align with the Plan’s five key elements:
                  Transportation, Economy, Communities, Environment, and
                  Infrastructure and Utility Services.
                </li>
              </ul>
              <img src={PlanProcess} className="md:w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WhatIsThePlan
