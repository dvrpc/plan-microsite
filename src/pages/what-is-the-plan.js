import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
import Dot from "../images/dot.svg"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import PlanProcess from "../images/plan-process@4x.png"

const WhatIsThePlan = () => {
  return (
    <Layout>
      <div className="bg-[#cce5f3] flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[70%] mx-auto z-50 relative items-center underline mt-4">
            <Link>Home</Link>
            <ChevronRightIcon width="1.5%" />
            <Link>What is the Plan?</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] mx-auto w-[70%] bg-[#0c2e39] flex flex-col relative px-12 py-6 space-y-6 mt-[10%]">
          <h2 className="text-3xl font-bold">What is the Plan?</h2>
          <p className="text-2xl pb-0 z-50">
            <span className="italic font-bold">UPDATE: CONNECTIONS 2050</span>{" "}
            is Greater Philadelphia's{" "}
            <span className="font-bold">Long-Range Plan,</span> guiding how the
            region will invest{" "}
            <span className="font-bold">
              $78 billion in transportation through 2050.
            </span>
          </p>
          <p>
            The Plan looks ahead to how our region will grow and change -
            considering population trends, the economy, the environment, and
            technology - to guide investments in roads, transit, biking,
            walking, and other transportation modes.
          </p>
        </div>
        <div className="w-[68%] bg-[#eef4fb] relative ml-[2%] border-l-4 border-[#0c2e39]">
          <div className="flex items-center w-full bg-[#16819a] p-4 relative mt-4">
            <Dot width="3%" className="absolute -left-[1.5%]" />
            <h2 className="text-2xl text-white font-bold ml-[1.5%]">
              The DVRPC Region
            </h2>
          </div>
          <div className="flex flex-col space-y-6 m-6 ">
            <p>
              Greater Philadelphia is one of the nation’s most historic and
              dynamic regions. Once an industrial powerhouse, it has evolved
              into a diverse economic and cultural hub supported by world-class
              universities, hospitals, and innovation-driven industries. Today,
              the region’s economy is powered by healthcare, education,
              technology, and creative sectors, all connected by a robust
              transportation network linking us to New York, Washington, D.C.,
              and beyond.
            </p>
            <p>
              <span className="font-bold">
                Still, our region faces challenges:
              </span>
              <br />
              <ul className="list-disc ml-4">
                <li>Rising housing costs and affordability pressures</li>
                <li>Funding shortfalls for public transit</li>
                <li>Aging infrastructure and resilience needs</li>
                <li>Shifts in commuting and work patterns</li>
              </ul>
            </p>
            <p>
              Addressing these issues requires regional{" "}
              <span className="font-bold">coordination</span> and{" "}
              <span className="font-bold">collaboration</span>—the heart of
              DVRPC’s mission.
            </p>
          </div>
        </div>
        <div className="w-[68%] bg-[#eef4fb] relative ml-[2%] border-l-4 border-[#0c2e39]">
          <div className="flex items-center w-full bg-[#16819a] p-4 relative">
            <Dot width="3%" className="absolute -left-[1.5%]" />
            <h2 className="text-2xl text-white font-bold ml-[1.5%]">
              The Long-Range Plan
            </h2>
          </div>
          <div className="flex flex-col space-y-6 m-6 ">
            <p>
              The Long-Range Plan (Plan) shapes which transportation projects
              receive funding over the next two decades and connects these
              investments to broader goals for land use, environment, economy,
              and quality of life.
            </p>
            <p>
              At its core, the Plan expresses a vision for Greater Philadelphia
              in 2050—what kind of region we want to become and how we can get
              there together.
            </p>
            <Link className="mx-auto text-white bg-[#063446] p-2 font-bold">
              See the Vision for 2050
            </Link>
          </div>
        </div>
        <div className="w-[68%] bg-[#eef4fb] relative ml-[2%] border-l-4 border-[#0c2e39]">
          <div className="flex items-center w-full bg-[#16819a] p-4 relative">
            <Dot width="3%" className="absolute -left-[1.5%]" />
            <h2 className="text-2xl text-white font-bold ml-[1.5%]">
              Putting the Plan into Action
            </h2>
          </div>
          <div className="flex flex-col space-y-6 m-6 ">
            <p>
              The Plan is updated every four years, but implementation happens
              every day. DVRPC and its partners move projects forward through:
            </p>
            <ul className="list-disc ml-4">
              <li>
                The{" "}
                <span className="font-bold underline">
                  Transportation Improvement Program (TIP):
                </span>{" "}
                the region’s short-term list of funded transportation projects.
                Larger projects originate from the Plan.
              </li>
              <li>
                <span className="font-bold underline">
                  The Annual Work Program:
                </span>{" "}
                ongoing studies, planning initiatives, and technical support
                that help local governments advance shared goals. Programs and
                activities align with the Plan’s five key elements:
                Transportation, Economy, Communities, Environment, and
                Infrastructure and Utilities.
              </li>
            </ul>
            <img src={PlanProcess} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WhatIsThePlan
