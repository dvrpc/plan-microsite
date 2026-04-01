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

const Resources = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[68%] mx-auto z-50 relative items-center mt-4">
            <Link className="underline" to="/">
              Home
            </Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Documents & Resources</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] bg-[#063446] w-full flex flex-col relative px-12 py-6 mt-[10%]">
          <div className="md:w-[70%] mx-auto space-y-4">
            <h2 className="md:text-3xl text-xl font-bold">
              Plan Documents & Resources
            </h2>
            <p className="md:text-2xl text-lg">
              Find everything you need to explore the Plan in one place. Access
              PDF documents and supporting resources, learn how to get involved,
              and get answers to common questions about what the Plan means for
              our region and how it will be put into action.
            </p>
          </div>
        </div>
        <div className="w-full bg-white relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto">
            <div className=" flex items-center w-full md:p-6 p-2 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="md:text-2xl text-lg text-[#063446] font-bold">
                Download & Print
              </h2>
            </div>
            <div className="flex flex-col space-y-4 md:p-6 p-2 md:pt-0 text-[#063446]">
              <ul className="ml-8 md:text-2xl text-lg space-y-2">
                <li>
                  <a href="/" className="underline text-[#26428b] ">
                    Summary Document
                  </a>
                </li>
                <li>
                  <a href="/" className="underline text-[#26428b] ">
                    Appendices
                  </a>
                </li>
                <li className="ml-8">
                  <a href="/" className="underline text-[#26428b] ">
                    A - Planning Process & Administration
                  </a>
                </li>
                <li className="ml-8">
                  <a href="/" className="underline text-[#26428b] ">
                    B - Land Use & Transportation
                  </a>
                </li>
                <li className="ml-8">
                  <a href="/" className="underline text-[#26428b] ">
                    C - Federal Performance Measures
                  </a>
                </li>
                <li className="ml-8">
                  <a href="/" className="underline text-[#26428b] ">
                    D - Community Analytics
                  </a>
                </li>
                <li className="ml-8">
                  <a href="/" className="underline text-[#26428b] ">
                    E - Financial Plan
                  </a>
                </li>
                <li className="ml-8">
                  <a href="/" className="underline text-[#26428b] ">
                    F - Future Funding Outlook
                  </a>
                </li>
                <li className="ml-8">
                  <a href="/" className="underline text-[#26428b] ">
                    G - Definitions & Acronyms
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dvrpc.org/plan/planhistory/"
                    className="underline text-[#26428b]"
                    target="_blank"
                  >
                    Amendments
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#cbe5f3] relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto">
            <div className=" flex items-center w-full md:p-6 p-2 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="md:text-2xl text-lg text-[#063446] font-bold">
                Resources
              </h2>
            </div>
            <div className="flex flex-col space-y-4 md:p-6 p-2 md:pt-0 text-[#063446]">
              <ul className="ml-8 md:text-2xl text-lg space-y-2">
                <li>
                  <a
                    href="https://www.dvrpc.org/plan/"
                    className="underline text-[#26428b]"
                  >
                    Long-Range Plan Home Page
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dvrpc.org/tip/"
                    className="underline text-[#26428b]"
                  >
                    Transportation Improvement Program (TIP)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dvrpc.org/congestionmanagement/"
                    className="underline text-[#26428b]"
                  >
                    Congestion Management Process (CMP)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dvrpc.org/economic/"
                    className="underline text-[#26428b]"
                  >
                    Comprehensive Economic Development Strategy (CEDS)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dvrpc.org/transportation/safety/"
                    className="underline text-[#26428b]"
                  >
                    Regional Vision Zero
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dvrpc.org/airquality/conformity/"
                    className="underline text-[#26428b]"
                  >
                    Air Quality Conformity
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full bg-white relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto">
            <div className=" flex items-center w-full md:p-6 p-2 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="md:text-2xl text-lg text-[#063446] font-bold">
                Get involved
              </h2>
            </div>
            <div className="flex flex-col space-y-4 md:p-6 p-2 md:pt-0 text-[#063446]">
              <p>
                Every resident has a role to play in shaping our region’s
                future. By staying informed, speaking up, and engaging in
                regional conversations, you can help ensure the vision for our
                future reflects the needs and hopes of everyone who calls this
                region home.
              </p>
              <Link
                className="md:text-2xl text-lg mx-auto p-2 bg-[#063446] text-white my-4"
                to="https://www.dvrpc.org/getinvolved"
              >
                Visit our Stay Connected page to get started
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#cbe5f3] relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto">
            <div className=" flex items-center w-full md:p-6 p-2 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="md:text-2xl text-lg text-[#063446] font-bold">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="flex flex-col space-y-4 md:p-6 p-2 md:pt-0 text-[#063446]">
              <Accordion label="What is the purpose of the Plan?">
                <p>
                  <i>Update: Connections 2050</i> is Greater Philadelphia's
                  Long-Range Plan (Plan). The Plan serves as the blueprint to
                  guide growth and development in our region and to prioritize
                  funding for capital transportation investment accordingly. The
                  Plan looks ahead to how our region will grow and
                  change—considering population trends, the economy, the
                  environment, and technology—to guide investments in roads,
                  transit, biking, walking, and other transportation modes.
                </p>
              </Accordion>
              <Accordion label="Who develops the Plan?">
                <p>
                  The Plan is created by DVRPC with input from local
                  governments, transportation agencies, state partners,
                  community organizations, and residents across the region. It
                  reflects broad collaboration and public engagement at every
                  stage.
                </p>
              </Accordion>
              <Accordion label="What is a Major Regional Project?">
                <p>
                  Major Regional Projects are large-scale transportation
                  investments—such as new transit lines, highway improvements,
                  or major bicycle and pedestrian corridors—that cost more than
                  $40 million and/or significantly impact travel across the
                  region. These projects must appear in the Plan to be eligible
                  for federal funding.
                </p>
              </Accordion>
              <Accordion label="How does a project get considered for the Plan?">
                <p>
                  The Long-Range Plan identifies the region’s major
                  transportation priorities for the next 20-30 years. Only
                  projects included in the Plan are eligible for federal
                  transportation funding through the Transportation Improvement
                  Program (TIP), making inclusion an important step for
                  advancing major investments.
                </p>
                <p>
                  Project evaluation starts with a call for projects to DVRPC’s
                  planning partners (counties, cities, state transportation
                  departments, and transit agencies). Project sponsors submit an
                  intake form with key information needed for evaluation. DVRPC
                  then applies established evaluation criteria adopted in
                  October 2023 to compare benefits and costs, and identify
                  projects with the greatest regional impact. DVRPC staff
                  facilitates the process, and final project selections are made
                  by planning partners who comprise DVRPC’s governing Board.
                </p>
              </Accordion>
              <Accordion label="How can I access or download data from the Long-Range Plan?">
                <p>
                  You can find Long-Range Plan data in the{" "}
                  <a
                    href="https://www.dvrpc.org/data/"
                    target="_blank"
                    className="underline"
                  >
                    DVRPC Data Center
                  </a>
                  , which provides centralized access to all DVRPC datasets and
                  mapping applications. Simply filter by the{" "}
                  <a
                    href="https://catalog.dvrpc.org/dataset/?category=Long-Range+Plan"
                    target="_blank"
                    className="underline"
                  >
                    Long-Range Plan category
                  </a>{" "}
                  to view and download all related data layers.
                </p>
              </Accordion>
              <Accordion label="How should local governments use the plan?">
                <p>
                  Local governments can use the Plan as a regional guide to
                  inform local decisions and investments. Its strategies,
                  policies, priority projects, and forecast data can support
                  zoning updates, comprehensive plans, capital programming,
                  redevelopment efforts, development review, and grant
                  applications. By aligning local actions with regional
                  priorities and expected growth, municipalities can make more
                  coordinated, future-focused decisions that contribute to the
                  region’s shared vision.
                </p>
              </Accordion>
              <Accordion label="How will progress toward the Plan’s goals be measured?">
                <p>
                  The Plan includes performance measures and tracking tools that
                  monitor trends such as safety, congestion, environmental
                  health, and affordability. DVRPC reports on these indicators
                  regularly to assess whether the region is moving toward the
                  Plan’s vision. The{" "}
                  <a
                    href="https://www.dvrpc.org/trackingprogress/"
                    target="_blank"
                    className="underline"
                  >
                    Tracking Progress
                  </a>{" "}
                  dashboard and other performance-management tools embedded in
                  the Plan are used to monitor how regional goals are being
                  addressed.
                </p>
              </Accordion>
              <Accordion label="How can I make a public comment about the Plan?">
                <p>
                  DVRPC invites the public to share feedback throughout the
                  planning process. Federal rules also require a minimum 30-day
                  public comment period before a long-range plan is formally
                  adopted. For the current Plan, the draft Update: Connections
                  2050 summary document and appendices were open for public
                  comment from July 18 to August 20, 2025. All public comments
                  received during official comment periods—along with DVRPC’s
                  responses—are saved in an{" "}
                  <a
                    href="https://apps.dvrpc.org/ords/r/dvrpcintranetapps/lrp-comment/comment-list"
                    target="_blank"
                    className="underline"
                  >
                    online, publicly accessible database.
                  </a>
                </p>
                <p>
                  Even outside the official comment period, your voice matters.
                  The Plan is regularly updated and shaped by ongoing public
                  input. You can stay involved by following updates, attending
                  public meetings, reviewing draft documents, or joining DVRPC
                  committees and outreach events. Want to provide feedback now?
                  Take our survey.
                </p>
              </Accordion>
              <Accordion label="How can residents get involved in shaping the Plan?">
                <p>
                  Residents can participate by attending public meetings,
                  engaging with online tools and surveys, reviewing draft
                  documents, or serving on DVRPC committees. Public input
                  directly informs the goals, strategies, and project lists that
                  appear in the Plan. Learn more on our{" "}
                  <a
                    href="https://www.dvrpc.org/getinvolved/"
                    target="_blank"
                    className="underline"
                  >
                    Stay Connected
                  </a>{" "}
                  page.
                </p>
              </Accordion>
              <Accordion label="How can I access previous Plan documents?">
                <p>
                  You can explore past long-range plans and related materials on{" "}
                  <a
                    href="https://www.dvrpc.org/plan/planhistory/"
                    target="_blank"
                    className="underline"
                  >
                    DVRPC’s Plan History page
                  </a>
                  , which provides access to archived documents dating back
                  several decades.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Resources
