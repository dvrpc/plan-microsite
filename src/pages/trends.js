import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
import Dot from "../images/dot.svg"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import TransportationMeans from "../images/transportation-means.png"
import Ai from "../images/ai.png"
import Tp from "../images/tp@4x.png"
import Accordion from "../components/accordion"

const Trends = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[70%] mx-auto z-50 relative items-center underline mt-4">
            <Link to="/">Home</Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Trends</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] bg-[#063446] w-full flex flex-col relative px-12 py-6 mt-[10%]">
          <div className="w-[70%] mx-auto space-y-4">
            <h2 className="text-3xl font-bold">What’s Shaping Our Future?</h2>
            <p className="text-2xl pb-0 z-50">
              Each update to the region’s Plan begins with a look at the{" "}
              <span className="font-bold">
                forces shaping Greater Philadelphia’s future.
              </span>{" "}
              DVRPC studies social, economic, and land use trends to understand
              how the region is changing and how those changes might affect our
              communities, economy, and environment in the decades ahead.
            </p>
            <p className="text-2xl">
              This research helps DVRPC and its partners{" "}
              <span className="font-bold">
                anticipate future needs and craft policies
              </span>{" "}
              that move the region toward its shared vision. DVRPC continues to
              monitor trends that will shape how the region grows and adapts in
              the years ahead.
            </p>
          </div>
        </div>
        <div className="w-full bg-white relative">
          <div className="border-l-4 border-[#0c2e39] w-[68%] mx-auto">
            <div className=" flex items-center w-full p-4 relative">
              <Dot width="3%" className="absolute -left-[1.5%]" />
              <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
                Remote Work and Post-COVID Commute Patterns
              </h2>
            </div>
            <div className="flex flex-col space-y-6 p-6">
              <p>
                Remote and hybrid work have reshaped travel behavior across
                Greater Philadelphia, changing where people live, how they get
                around, and when they travel.
              </p>

              <Accordion label="Read More">
                <p>
                  The pandemic accelerated a massive shift toward remote and
                  hybrid work. In 2021, about one in four employees in Greater
                  Philadelphia worked from home at least half of the time, which
                  reduced both solo driving and public transit use.
                </p>
                <p>
                  Though offices and schools have since reopened, hybrid work
                  remains common, which has changed how people use
                  transportation, air quality patterns, and transit agency
                  finances. Congestion has returned to pre-pandemic levels but
                  is now spread more evenly throughout the day, while transit
                  ridership remains roughly{" "}
                  <span className="font-bold">30% below 2019 levels.</span>
                </p>
                <p>
                  Philadelphia’s affordability and access to the Northeast
                  Corridor have also attracted new remote workers, driving a{" "}
                  <span className="font-bold">
                    surge in business formations
                  </span>
                  , an increase of 94% regionally and more than 160% in the city
                  since 2020. As employers adjust hybrid policies and workers
                  reassess where they live and how they commute, these changes
                  continue to reshape travel demand, housing markets, and
                  economic opportunity across the region.
                </p>
                <h4 className="mx-auto text-[#16819a] font-bold text-lg">
                  MEANS OF TRANSPORTAION TO WORK BY MODE SHARE
                </h4>
                <img src={TransportationMeans} />
              </Accordion>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#cbe5f3] relative">
          <div className="border-l-4 border-[#0c2e39] w-[68%] mx-auto">
            <div className=" flex items-center w-full p-4 relative">
              <Dot width="3%" className="absolute -left-[1.5%]" />
              <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
                Artificial Intelligence
              </h2>
            </div>
            <div className="flex flex-col space-y-6 p-6 ">
              <p>
                Artificial intelligence (AI) technologies are transforming how
                cities plan, manage, and maintain infrastructure—offering both
                opportunities and challenges for the region’s future.
              </p>
              <Accordion label="Read More">
                <p>
                  Across the U.S., AI is being used to{" "}
                  <span className="font-bold">optimize traffic flow,</span>{" "}
                  improve{" "}
                  <span className="font-bold">transit reliability,</span> and
                  monitor{" "}
                  <span className="font-bold">infrastructure conditions</span>{" "}
                  in real time.
                </p>
                <p>
                  For Greater Philadelphia, AI offers new tools to modernize
                  transportation systems, improve safety, and support smarter
                  land use and energy planning. At the same time, it raises
                  important questions about privacy, copyright, bias,
                  transparency, and energy use, all challenges that need to be
                  addressed.
                </p>
                <h4 className="mx-auto text-[#16819a] font-bold text-lg">
                  AI PROCESSING FOR TRANSPORTAION
                </h4>
                <img src={Ai} className="mx-auto" />
              </Accordion>
            </div>
          </div>
        </div>
        <div className="w-full bg-white relative">
          <div className="border-l-4 border-[#0c2e39] w-[68%] mx-auto">
            <div className=" flex items-center w-full p-4 relative">
              <Dot width="3%" className="absolute -left-[1.5%]" />
              <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
                Ridesharing and Automated Vehicle Programs
              </h2>
            </div>
            <div className="flex flex-col space-y-6 p-6 ">
              <p>
                New mobility options—from shared rides to automated shuttles—are
                expanding access to transportation and redefining how people
                move through the region.
              </p>
              <Accordion label="Read More">
                <p>
                  Governments and private partners are testing{" "}
                  <strong>ridesharing, microtransit,</strong> and{" "}
                  <strong>automated vehicle</strong> programs to improve
                  connections in areas underserved by traditional transit. DVRPC
                  and local partners are exploring how these technologies can
                  improve access to jobs, serve people with disabilities, and
                  connect residents to essential services.
                </p>
                <p>
                  Examples include GOTrenton!, the Navy Yard Automated Shuttle,
                  and Conshohocken Cab. While these services show promise, they
                  can be expensive and generally complement, rather than
                  replace, fixed-route transit options.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#d5d1db] relative">
          <div className="border-l-4 border-[#0c2e39] w-[68%] mx-auto">
            <div className=" flex items-center w-full p-4 relative">
              <Dot width="3%" className="absolute -left-[1.5%] top-5" />
              <div className="w-full ml-[1.5%] flex flex-col space-y-4 text-[#063446]">
                <h2 className="text-3xl font-bold">Tracking Progress</h2>
              </div>
            </div>
            <div className="flex flex-col space-y-6 p-6">
              <p>
                DVRPC’s Tracking Progress dashboard helps the region measure
                success and identify where to focus future planning efforts.
              </p>
              <Accordion label="Read More">
                <p className="text-lg">
                  Tracking Progress presents easy-to-use indicators that show
                  how the region is advancing toward the Plan’s vision. Current
                  trends show improvement in bridge conditions, business growth,
                  and housing production, but continuing challenges in income
                  disparities, transportation safety, and transit ridership.
                </p>
                <h4 className="mx-auto text-[#179650] font-bold text-lg">
                  TRACKING PROGRESS DASHBOARD
                </h4>
                <img src={Tp} />
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Trends
