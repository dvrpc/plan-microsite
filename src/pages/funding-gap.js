import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
import Dot from "../images/dot.svg"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import PlanProcess from "../images/plan-process@4x.png"
import DvrpcMap from "../components/dvrpcmap"
import PurchasingPower from "../images/purchasing-power.png"
import LocalFunding from "../images/local-funding.png"
import TextBox1 from "../images/funding-box-1.png"

const WhatIsThePlan = () => {
  return (
    <Layout>
      <div className="bg-[#eef4fb] flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[70%] mx-auto z-50 relative items-center underline mt-4">
            <Link to="/">Home</Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Funding Gap</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] w-full bg-[#0c2e39] flex flex-col relative px-12 py-6 space-y-6 mt-[10%]">
          <div className="w-[70%] mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Filling the Funding Gap</h2>
            <p className="text-2xl pb-0 z-50">
              To make our shared regional vision a reality, we need more
              transportation funding from both existing federal, state, and
              local sources, as well as new sources.
            </p>
            <p>
              <strong>Greater investment is needed to:</strong>
              <ul className="*:ml-4 text-2xl list-disc">
                <li>
                  Maintain and modernize our aging transportation infrastructure
                </li>
                <li>Support emerging technologies</li>
                <li>
                  Expand access so more people can reach jobs, education
                  services, and essential services
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="w-[68%] bg-[#eef4fb] relative border-l-4 border-[#0c2e39]">
          <div className="flex items-center w-full  p-4 relative mt-4">
            <Dot width="3%" className="absolute -left-[1.5%]" />
            <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
              The Diminishing Gas Tax
            </h2>
          </div>
          <div className="grid grid-cols-3 space-x-4 m-6">
            <div className="col-span-2 space-y-4">
              <p className="text-2xl">
                Most transportation funding still comes from taxes on gasoline
                and petroleum products, but those revenues are shrinking as
                vehicles become more fuel-efficient and electric.
              </p>
              <ul className="list-disc *:ml-4 text-2xl">
                <li>
                  The federal gas tax hasn’t increased since 1993, and inflation
                  has erased about 64% of its purchasing power.
                </li>
                <li>
                  Since 2008, Congress has transferred $275 billion from the
                  general fund to keep the Highway and Transit Trust Funds
                  solvent.
                </li>
              </ul>
              <p>
                Without reform, the gap between available funds and regional
                needs will continue to grow.
              </p>
            </div>
            <img src={PurchasingPower} />
          </div>
        </div>
        <div className="w-full bg-[#cbe5f3] relative">
          <div className="border-l-4 border-[#0c2e39] w-[68%] mx-auto">
            <div className=" flex items-center w-full p-4 relative">
              <Dot width="3%" className="absolute -left-[1.5%]" />
              <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
                Limited Local Funding
              </h2>
            </div>
            <div className="grid grid-cols-3 space-x-4 m-6">
              <div className="col-span-2 space-y-4">
                <p>
                  Only 2% of Greater Philadelphia’s transportation funding comes
                  from local sources, mainly to match state and federal dollars.
                  In contrast, many peer regions contribute far more locally,
                  allowing for flexible investments in walking, biking, and
                  transit improvements.
                </p>
                <p>
                  State laws in Pennsylvania and New Jersey limit local
                  governments’ ability to raise transportation funds, leaving
                  our region at a disadvantage. Without dedicated local sources,
                  it’s harder to:
                </p>
                <ul className="list-disc *:ml-4 text-2xl">
                  <li>Keep up with basic maintenance needs, and</li>
                  <li>
                    Compete for federal grants that require a substantial local
                    match
                  </li>
                </ul>
                <p>
                  As federal support becomes less certain, regions with
                  dedicated, flexible local funding will be better positioned to
                  maintain their systems and support long-term economic growth.
                </p>
              </div>
              <img src={LocalFunding} className="self-center" />
            </div>
            <div className="col-span-3 relative py-8">
              <img src={TextBox1} />
              <div className="absolute md:top-[10%] text-white space-y-4 md:p-10 md:left-[5%]">
                <p className="font-bold">
                  Transportation access directly affects opportunity.
                </p>
                <p>
                  In a survey by the Federal Reserve Bank of Philadelphia, 16%
                  of participants earning below the basic cost of living
                  identified transportation as a major barrier to improving
                  their economic situation.
                </p>
                <p>
                  Recognizing this, the City of Philadelphia, in partnership
                  with SEPTA and community organizations, launched the Zero Fare
                  pilot program, providing free transit for more than 25,000
                  Philadelphians living at or near the poverty line. Programs
                  like Zero Fare are vital, but their long-term success—and the
                  region’s broader goals—depend on stable, sustainable funding
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#eef4fb] relative">
          <div className="border-l-4 border-[#0c2e39] w-[68%] mx-auto">
            <div className="flex items-center w-full p-4 relative">
              <Dot width="3%" className="absolute -left-[1.5%]" />
              <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
                Putting the Plan into Action
              </h2>
            </div>
            <div className="flex flex-col space-y-6 p-6 pt-0">
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
                  the region’s short-term list of funded transportation
                  projects. Larger projects originate from the Plan.
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
      </div>
    </Layout>
  )
}

export default WhatIsThePlan
