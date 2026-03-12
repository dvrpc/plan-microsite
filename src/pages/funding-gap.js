import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
import Dot from "../images/dot.svg"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import PlanProcess from "../images/plan-process@4x.png"
import DvrpcMap from "../components/dvrpcmap"
import PurchasingPower from "../images/purchasing-power.png"
import Flipcard from "../components/flipcard"
import LocalFunding from "../images/local-funding.png"
import FundingBox1 from "../images/funding-box-1.png"
import FundingBox2 from "../images/funding-box-2.png"
import FundingBox3 from "../images/funding-box-3.png"
import FundingBox4 from "../images/funding-box-4.png"
import Mbuf from "../images/mbuf.png"
import Cpf from "../images/cpf.png"
import Ht from "../images/ht.png"
import Es from "../images/es.png"
import Tdc from "../images/tdc.png"
import Siif from "../images/siif.png"
import Pp from "../images/pp.png"
import Cgp from "../images/cgp.png"

const WhatIsThePlan = () => {
  return (
    <Layout>
      <div className="bg-[#eef4fb] flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[70%] mx-auto z-50 relative items-center underline mt-4">
            <Link to="/">Home</Link>
            <ChevronRightIcon width="1.5%" />
            <Link to="/financial">Financial Plan</Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Funding Gap</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] w-full bg-[#0c2e39] flex flex-col relative px-12 py-6 space-y-6 mt-[10%]">
          <div className="md:w-[70%] mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Filling the Funding Gap</h2>
            <p className="md:text-2xl text-lg pb-0 z-50">
              To make our shared regional vision a reality, we need{" "}
              <strong>more transportation funding</strong> from both existing
              federal, state, and local sources, as well as new sources.
            </p>
            <p className="md:text-2xl text-lg">
              <strong>Greater investment is needed to:</strong>
              <ul className="*:ml-4 list-disc">
                <li>
                  <strong>Maintain and modernize</strong> our aging
                  transportation infrastructure
                </li>
                <li>
                  <strong>Support emerging technologies</strong>
                </li>
                <li>
                  <strong>Expand access</strong> so more people can reach jobs,
                  education services, and essential services
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="md:w-[68%] bg-[#eef4fb] relative border-l-4 border-[#0c2e39]">
          <div className="flex items-center w-full md:p-4 relative mt-4">
            <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
            <h2 className="md:text-2xl text-lg text-[#063446] font-bold">
              The Diminishing Gas Tax
            </h2>
          </div>
          <div className="flex md:p-6 p-2 pt-0 md:flex-row flex-col-reverse">
            <div className="space-y-6">
              <p>
                Most transportation funding comes from{" "}
                <strong>taxes on gasoline and petroleum products</strong>, but
                those revenues are shrinking as vehicles become more
                fuel-efficient and electric.
              </p>
              <ul className="list-disc *:ml-4">
                <li>
                  The federal gas tax hasn’t increased since{" "}
                  <strong>1993</strong>, and inflation has erased about{" "}
                  <strong>64%</strong> of its purchasing power.
                </li>
                <li>
                  Since 2008, Congress has transferred{" "}
                  <strong>$275 billion</strong> from the general fund to keep
                  the Highway and Transit Trust Funds solvent.
                </li>
              </ul>
              <p>
                Without reform, the gap between{" "}
                <strong>available funds and regional needs</strong> will
                continue to grow.
              </p>
            </div>
            <img
              src={PurchasingPower}
              className="md:w-2/3 md:ml-6 w-1/2 mx-auto"
            />
          </div>
        </div>
        <div className="w-full bg-[#cbe5f3] relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto">
            <div className=" flex items-center w-full p-4 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="md:text-2xl text-lg text-[#063446] font-bold">
                Limited Local Funding
              </h2>
            </div>
            <div className="md:grid grid-cols-5 space-y-6 md:p-6 p-2 pt-0 flex flex-col">
              <div className="col-span-3 space-y-6">
                <p>
                  <strong>
                    Only 3% of Greater Philadelphia’s regional transportation
                    funding comes from local sources
                  </strong>
                  , mainly to match state and federal dollars. In contrast, many
                  peer regions contribute far more locally, allowing for
                  flexible investments in walking, biking, and transit
                  improvements.
                </p>
                <p>
                  State laws in Pennsylvania and New Jersey limit local
                  governments’ ability to raise transportation funds, leaving
                  our region at a disadvantage. Without dedicated local sources,
                  it’s harder to keep up with basic maintenance needs and
                  compete for federal grants that require a substantial local
                  match.
                </p>
                <p>
                  As federal support becomes less certain, regions with{" "}
                  <strong>dedicated, flexible local funding</strong> will be
                  better positioned to maintain their systems and make
                  innovative investments that promote long-term economic growth.
                </p>
              </div>
              <img src={LocalFunding} className="col-span-2" />

              <div className="relative col-span-5">
                <img src={FundingBox1} className="p-2" />
                <div className="absolute md:top-[12%] md:left-[5%] text-white md:space-y-4 md:p-4 p-6 top-0 text-[0.5rem] md:text-base">
                  <strong>
                    Transportation access directly affects opportunity.
                  </strong>
                  <p>
                    In a survey by the Federal Reserve Bank of Philadelphia, 16%
                    of participants earning below the basic cost of living
                    identified transportation as a major barrier to improving
                    their economic situation.
                  </p>
                  <p>
                    Recognizing this, the City of Philadelphia, in partnership
                    with SEPTA and community organizations, launched the{" "}
                    <strong>Zero Fare pilot program</strong>, providing free
                    transit for more than 25,000 Philadelphians living at or
                    near the poverty line. Programs like Zero Fare are vital,
                    but their long-term success—and the region’s broader
                    goals—depend on stable, sustainable funding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#eef4fb] relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto">
            <div className="flex items-center w-full md:p-4 p-2 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="md:text-2xl text-lg text-[#063446] font-bold">
                Funding Options
              </h2>
            </div>
            <div className="flex flex-col space-y-6 md:p-6 p-2 pt-0">
              <p>
                Our current transportation funding model isn’t keeping up with
                today’s needs. It must be{" "}
                <strong>rethought and updated to generate new revenue</strong>{" "}
                for both capital investments and operating costs.
              </p>
              <p>
                DVRPC will continue to facilitate dialogue with our planning
                partners to identify ways to improve and modernize federal and
                state funding models that are consistent with the Plan’s vision
                and goals.
              </p>
              <strong className="text-[#063446]">
                Click on the Potential Federal and State Funding Options below
                to learn about them.
              </strong>

              <div className="grid md:grid-cols-4 grid-cols-2 grid-rows-2 gap-y-4 gap-x-4">
                <Flipcard
                  front={
                    <div className="flex flex-col items-center text-center space-y-2">
                      <img src={Mbuf} className="md:w-1/3 w-1/2" />
                      <p className="md:w-2/3 leading-none">
                        Mileage Based User Fee
                      </p>
                    </div>
                  }
                  back={
                    <span>
                      Charges drivers by the mile for travel on a defined
                      roadway network. <strong>Potential benefits:</strong>{" "}
                      Stabilizes revenue compared with the gas tax, as it is
                      less affected by changes in vehicle fuel efficiency.
                    </span>
                  }
                  color="#704775"
                />
                <Flipcard
                  front={
                    <div className="flex flex-col items-center text-center space-y-2">
                      <img src={Cpf} className="md:w-1/3 w-1/2" />
                      <p className="md:w-2/3 leading-none">
                        Commercial Property VMT Fee
                      </p>
                    </div>
                  }
                  back={
                    <span>
                      Administers a location-based fee to commercial real estate
                      based on the annual vehicle miles they generate.{" "}
                      <strong>Potential benefits:</strong> Promotes more
                      efficient business location decisions.
                    </span>
                  }
                  color="#704775"
                />
                <Flipcard
                  front={
                    <div className="flex flex-col items-center text-center space-y-2">
                      <img src={Ht} className="md:w-1/3 w-1/2" />
                      <p className="md:w-2/3 leading-none">Highway Tolls</p>
                    </div>
                  }
                  back={
                    <span>
                      Exerts a user fee on designated limited-access roads and
                      bridges. <strong>Potential benefits:</strong> Can help to
                      manage demand for finite highway space.
                    </span>
                  }
                  color="#704775"
                />
                <Flipcard
                  front={
                    <div className="flex flex-col items-center text-center space-y-2">
                      <img src={Es} className="md:w-1/3 w-1/2" />
                      <p className="md:w-2/3 leading-none">
                        Electricity Surtax for Home or Public Charging
                      </p>
                    </div>
                  }
                  back={
                    <span>
                      Adds a flat fee or surcharge per unit of electricity used
                      to power electric vehicles.
                      <strong>Potential benefits:</strong> Replicates the gas
                      tax for EVs.
                    </span>
                  }
                  color="#704775"
                />
                <Flipcard
                  front={
                    <div className="flex flex-col items-center text-center space-y-2">
                      <img src={Tdc} className="md:w-1/3 w-1/2" />
                      <p className="md:w-2/3 leading-none">
                        Tradeable Driving Credits
                      </p>
                    </div>
                  }
                  back={
                    <span>
                      Allocates a quota of mileage driving rights each year.{" "}
                      <strong>Potential benefits:</strong> Provides an incentive
                      to use other modes by allowing those who drive less to
                      sell their credits to those who drive more.
                    </span>
                  }
                  color="#704775"
                />
                <Flipcard
                  front={
                    <div className="flex flex-col items-center text-center space-y-2">
                      <img src={Siif} className="md:w-1/3 w-1/2" />
                      <p className="md:w-2/3 leading-none">
                        Safety/Infrastructure Investment Fees
                      </p>
                    </div>
                  }
                  back={
                    <span>
                      Scales vehicle registration fees based on vehicle weight
                      and size. <strong>Potential benefits:</strong> Charges
                      vehicle owners for societal costs of increased emissions,
                      road damages, and safety risks that all rise with heavier
                      vehicle weights.
                    </span>
                  }
                  color="#704775"
                />
                <Flipcard
                  front={
                    <div className="flex flex-col items-center text-center space-y-2">
                      <img src={Pp} className="md:w-1/3 w-1/2" />
                      <p className="md:w-2/3 leading-none">Parking Pricing</p>
                    </div>
                  }
                  back={
                    <span>
                      Applies variable charges to on-street parking based on
                      demand, while reducing the cost of off-street spaces.
                      <strong>Potential benefits:</strong> Decreases traffic in
                      central business districts from drivers looking for
                      parking spaces and better accounts for the value of land
                      used for vehicle parking.
                    </span>
                  }
                  color="#704775"
                />
                <Flipcard
                  front={
                    <div className="flex flex-col items-center text-center space-y-2">
                      <img src={Cgp} className="md:w-1/3 w-1/2" />
                      <p className="md:w-2/3 leading-none">
                        Congestion Pricing
                      </p>
                    </div>
                  }
                  back={
                    <span>
                      Employs variable tolls to manage demand on a facility or
                      within a specific zone.
                      <strong>Potential benefits:</strong> Reduces congestion
                      and encourages more efficient use of transportation
                      infrastructure, while generating revenue to provide more
                      transportation options.
                    </span>
                  }
                  color="#704775"
                />
              </div>
              <p>
                In the near term, we can stretch limited funds by focusing on
                efficient, affordable, and context-sensitive solutions—projects
                that solve real problems without overbuilding or overspending.
                Smarter, smaller investments can improve safety, mobility, and
                reliability more quickly and cost-effectively than major
                construction projects. For example:
              </p>
              <div className="md:grid grid-cols-3 gap-x-2">
                <div className="relative md:mt-2">
                  <img src={FundingBox2} className="p-2" />
                  <div className="absolute top-[5%] md:left-[5%] text-white p-4 text-sm">
                    <strong>
                      Transportation Systems Management and Operations
                    </strong>
                    <p>
                      (TSMO) strategies like signal timing upgrades, ramp
                      metering, real-time travel info, and incident management
                      can reduce congestion and improve travel times without
                      adding new lanes.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img src={FundingBox3} className="p-2" />
                  <div className="absolute top-[5%] md:left-[5%] text-white p-6 text-sm">
                    <strong>Smaller, targeted improvements</strong>
                    <p>
                      —like intersection redesigns or transit enhancements—can
                      deliver many of the benefits of large projects at a
                      fraction of the cost.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img src={FundingBox4} className="p-2" />
                  <div className="absolute top-[5%] md:left-[5%] text-white p-6 text-sm">
                    <strong>Repairs and upgrades</strong>
                    <p>
                      can support multiple travel options, such as fixing
                      bridges important to transit or maintaining well-used
                      trails.
                    </p>
                  </div>
                </div>
              </div>
              <p>
                These targeted improvements help keep the region moving while
                new funding sources are developed.{" "}
              </p>
              <p>
                Transportation agencies can also use funds more efficiently by
                taking a <strong>corridor-based approach</strong>—bundling
                multiple improvements along the same roadway or transit corridor
                into one coordinated project. By thinking comprehensively and
                investing strategically, the region can build a{" "}
                <strong>
                  safer, more connected, and more resilient transportation
                  system
                </strong>{" "}
                while laying the groundwork for new, viable funding models.
              </p>
              <Link
                className="mx-auto text-white bg-[#063446] p-2 font-bold md:text-2xl text-xl text-center"
                to="/taking-action"
              >
                Click here to read more about how the Region can meet the
                challenges ahead
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WhatIsThePlan
