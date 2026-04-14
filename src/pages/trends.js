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
import { Tooltip } from "react-tippy"

const Trends = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[68%] mx-auto px-7 z-50 relative items-center mt-4">
            <Link className="underline" to="/">
              Home
            </Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Trends</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] bg-[#0c2e39] w-full flex flex-col relative px-10 py-6 mt-[10%]">
          <div className="md:w-[68%] mx-auto space-y-4">
            <h2 className="md:text-3xl text-xl font-bold">
              What Is Shaping Our Future?
            </h2>
            <p className="md:text-2xl text-lg pb-0 z-50">
              Each update to the region’s Plan begins with a look at the{" "}
              <strong className="text-white">
                forces shaping Greater Philadelphia’s future
              </strong>
              . DVRPC studies social, economic, and land use trends to
              understand how the region is changing and how those changes might
              affect our communities, economy, and environment in the decades
              ahead.
            </p>
            <p className="md:text-2xl text-lg">
              This research helps DVRPC and its partners{" "}
              <strong className="text-white">
                anticipate future needs and craft policies
              </strong>{" "}
              that move the region toward its shared vision. DVRPC continues to
              monitor trends that will shape how the region grows and adapts in
              the years ahead.
            </p>
          </div>
        </div>
        <div className="w-full relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto">
            <div className=" flex items-center w-full md:p-6 p-2 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="md:text-2xl text-lg text-[#063446] font-bold ">
                Remote Work and Post-COVID Commute Patterns
              </h2>
            </div>
            <div className="flex flex-col space-y-4 md:p-6 p-2 md:pt-0">
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
                  remains common, which has changed how and when people use
                  transportation, transit agency finances, and office building
                  occupancy. Congestion has returned to pre-pandemic levels but
                  is now spread more evenly throughout the day, while transit
                  ridership remains roughly{" "}
                  <strong>30% below 2019 levels</strong>.
                </p>
                <p>
                  Philadelphia’s relative affordability and access to the
                  Northeast Corridor have also attracted new remote workers,
                  driving a{" "}
                  <strong>surge in business formations: 94% regionally</strong>{" "}
                  and more than 160% in the city since 2020. As employers adjust
                  hybrid policies and workers reassess where they live and how
                  they commute, these changes continue to reshape travel demand,
                  housing markets, and economic opportunity across the region.
                </p>
                <h4 className="mx-auto text-[#16819a] font-bold text-lg font-[scriptorama-markdown-jf]">
                  MEANS OF TRANSPORTAION TO WORK BY MODE SHARE
                </h4>
                <img
                  className="md:w-1/2 mx-auto"
                  alt="Means of Transportation to Work by Mode-share"
                  src={TransportationMeans}
                />
                <small className="md:mx-auto">
                  Source: U.S. Census Bureau’s American Community Survey
                  Five-Year Estimates
                  <br /> *No data available for 2020 due to the COVID-19
                  pandemic.
                </small>
                <small></small>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#cbe5f3] relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto">
            <div className="flex items-center w-full md:p-6 p-2 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="md:text-2xl text-lg text-[#063446] font-bold ">
                Artificial Intelligence
              </h2>
            </div>
            <div className="flex flex-col space-y-4 md:p-6 md:pt-0 p-2">
              <p>
                <Tooltip
                  title="Artificial intelligence (AI) refers to computer systems that can perform tasks that typically require human intelligence—such as learning, analyzing data, recognizing patterns, and making decisions."
                  position="top"
                  trigger="click"
                >
                  <span className="underline hover:cursor-pointer">
                    Artificial intelligence (AI)
                  </span>
                </Tooltip>{" "}
                technologies are transforming how infrastructure is planned,
                managed, and maintained—offering both opportunities and
                challenges for the region’s future.
              </p>
              <Accordion label="Read More">
                <p>
                  Across the U.S., AI is being used to{" "}
                  <strong>optimize traffic flow</strong>, improve{" "}
                  <strong>transit reliability</strong>, and monitor{" "}
                  <strong>infrastructure conditions</strong> in real time.
                </p>
                <p>
                  It offers new tools with the potential to modernize
                  transportation systems, improve safety, and inform planning
                  decisions. At the same time, it raises important questions
                  around <strong>privacy, copyright, bias, resource use</strong>
                  , and community impact.
                </p>
                <h4 className="mx-auto text-[#16819a] font-bold text-lg font-[scriptorama-markdown-jf]">
                  AI PROCESSING FOR TRANSPORTATION
                </h4>
                <img
                  src={Ai}
                  className="mx-auto md:w-1/2"
                  alt="How AI Processing for Transportation Works"
                />
              </Accordion>
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto">
            <div className=" flex items-center w-full md:p-6 p-2 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="md:text-2xl text-lg text-[#063446] font-bold ">
                Ridesharing and Automated Vehicle Programs
              </h2>
            </div>
            <div className="flex flex-col space-y-4 md:p-6 md:pt-0 p-2">
              <p>
                New mobility options—from shared rides to automated shuttles—are
                expanding access to transportation and redefining how people
                move through the region.
              </p>
              <Accordion label="Read More">
                <p>
                  Governments and private partners are testing{" "}
                  <u>ridesharing</u>, <u>microtransit</u>, and{" "}
                  <u>automated vehicle</u> programs to improve connections in
                  areas underserved by traditional transit. DVRPC and local
                  partners are exploring how these technologies can improve
                  access to jobs, serve people with disabilities, and connect
                  residents to essential services.
                </p>
                <p>
                  Examples include GOTrenton!, the Navy Yard Automated Shuttle,
                  and Conshohocken Cab. While these services show promise, they
                  can be expensive and are designed to complement, rather than
                  replace, existing fixed-route transit options.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#bce8d2] relative">
          <div className="md:w-[68%] mx-auto">
            <div className=" flex items-center w-full md:p-6 p-2 relative">
              <Dot
                width="3%"
                className="md:absolute -left-[1.5%] top-5 hidden"
              />
              <div className="w-full  flex flex-col space-y-4 text-[#063446]">
                <h2 className="md:text-3xl text-xl font-bold">
                  Tracking Progress
                </h2>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:p-6 md:pt-0 p-2">
              <p>
                DVRPC’s{" "}
                <a
                  href="https://www.dvrpc.org/TrackingProgress/"
                  target="_blank"
                  className="underline"
                >
                  Tracking Progress
                </a>{" "}
                dashboard helps the region measure success and identify where to
                focus future planning efforts.
              </p>
              <Accordion label="Read More">
                <p className="text-lg">
                  Tracking Progress highlights indicators that show how the
                  region is advancing toward the Plan’s vision. Current trends
                  show improvement in{" "}
                  <strong>
                    bridge conditions, business growth, and housing production,{" "}
                  </strong>
                  while there continue to be challenges in{" "}
                  <strong>
                    income disparities, transportation safety, and transit
                    ridership
                  </strong>
                  .
                </p>
                <h4 className="mx-auto text-[#179650] font-bold text-lg font-[scriptorama-markdown-jf] my-4">
                  TRACKING PROGRESS DASHBOARD
                </h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "none" }}
                >
                  <symbol id="face-verygood" viewBox="0 0 32.97 32.02">
                    <g fill="currentColor">
                      <path d="M31.67,9.78c-.83-1.91-2.02-3.62-3.53-5.09-1.51-1.47-3.28-2.62-5.24-3.43-2.03-.83-4.19-1.26-6.42-1.26s-4.38.42-6.42,1.26c-1.96.81-3.73,1.96-5.24,3.43-1.51,1.47-2.7,3.18-3.53,5.09-.86,1.97-1.3,4.07-1.3,6.23s.44,4.26,1.3,6.23c.83,1.91,2.02,3.62,3.53,5.09,1.51,1.47,3.28,2.62,5.24,3.43,2.03.84,4.19,1.26,6.42,1.26s4.38-.42,6.42-1.26c1.96-.81,3.73-1.96,5.24-3.43,1.51-1.47,2.7-3.18,3.53-5.09.86-1.97,1.3-4.07,1.3-6.23s-.44-4.26-1.3-6.23ZM19.64,11.48c.93-.72,2.04-1.1,3.22-1.1s2.29.38,3.22,1.1c.51.4.59,1.11.18,1.61-.41.49-1.15.57-1.66.18-.51-.39-1.11-.6-1.75-.6s-1.24.21-1.75.6c-.22.17-.48.25-.74.25-.35,0-.69-.15-.92-.43-.41-.49-.32-1.21.18-1.61ZM6.89,11.48c.93-.72,2.04-1.1,3.22-1.1s2.29.38,3.22,1.1c.51.4.59,1.11.18,1.61-.23.28-.58.43-.92.43-.26,0-.52-.08-.74-.25-.51-.39-1.11-.6-1.75-.6s-1.24.21-1.75.6c-.51.39-1.25.32-1.66-.18-.41-.49-.32-1.21.18-1.61ZM26.8,17.78c-.64,4.98-5.01,8.83-10.31,8.83s-9.67-3.85-10.31-8.83c-.03-.27.05-.54.24-.75.19-.2.45-.32.74-.32h18.67c.28,0,.55.12.74.32.19.21.27.48.24.75Z" />
                    </g>
                  </symbol>
                  <symbol id="face-good" viewBox="0 0 32.36 32.36">
                    <g fill="currentColor">
                      <path d="M32.03,12.92c-.21-1.04-.53-2.06-.94-3.04-.41-.96-.91-1.88-1.49-2.75-.58-.86-1.24-1.66-1.97-2.39-.73-.73-1.54-1.4-2.39-1.97-.87-.58-1.79-1.09-2.75-1.49-.98-.41-2-.73-3.04-.94-1.07-.22-2.16-.33-3.26-.33s-2.19.11-3.26.33c-1.04.21-2.06.53-3.04.94-.96.41-1.88.91-2.75,1.49-.86.58-1.66,1.24-2.39,1.97-.73.73-1.4,1.54-1.97,2.39-.58.87-1.09,1.79-1.49,2.75-.41.98-.73,2-.94,3.04-.22,1.07-.33,2.16-.33,3.26s.11,2.19.33,3.26c.21,1.04.53,2.06.94,3.04.41.96.91,1.88,1.49,2.75.58.86,1.24,1.66,1.97,2.39s1.54,1.4,2.39,1.97c.86.58,1.79,1.09,2.75,1.49.98.41,2,.73,3.04.94,1.07.22,2.16.33,3.26.33s2.19-.11,3.26-.33c1.04-.21,2.06-.53,3.04-.94.96-.41,1.88-.91,2.75-1.49.86-.58,1.66-1.24,2.39-1.97.73-.73,1.4-1.54,1.97-2.39.58-.86,1.09-1.79,1.49-2.75.41-.98.73-2,.94-3.04.22-1.07.33-2.16.33-3.26s-.11-2.19-.33-3.26ZM7.7,14.95c0-1.36,1.1-2.46,2.46-2.46s2.46,1.1,2.46,2.46-1.1,2.46-2.46,2.46-2.46-1.1-2.46-2.46ZM23.09,23.53c-.97.77-2.04,1.38-3.19,1.79-1.19.43-2.44.65-3.71.65s-2.52-.22-3.71-.65c-1.15-.41-2.22-1.02-3.19-1.79-.59-.47-.68-1.33-.21-1.92.47-.59,1.33-.68,1.92-.21.73.59,1.54,1.04,2.41,1.36.89.32,1.83.49,2.79.49s1.89-.16,2.79-.49c.87-.31,1.68-.77,2.41-1.36.59-.47,1.45-.38,1.92.21.47.59.38,1.45-.21,1.92ZM22.2,17.41c-1.36,0-2.46-1.1-2.46-2.46s1.1-2.46,2.46-2.46,2.46,1.1,2.46,2.46-1.1,2.46-2.46,2.46Z" />
                    </g>
                  </symbol>
                  <symbol id="face-neutral" viewBox="0 0 31.91 30.88">
                    <g fill="currentColor">
                      <path d="M30.65,9.43c-.8-1.84-1.95-3.49-3.42-4.91-1.46-1.42-3.17-2.53-5.07-3.31-1.97-.81-4.06-1.21-6.21-1.21s-4.24.41-6.21,1.21c-1.9.78-3.61,1.89-5.07,3.31-1.46,1.42-2.61,3.07-3.42,4.91-.83,1.9-1.25,3.93-1.25,6.01s.42,4.11,1.25,6.01c.8,1.84,1.95,3.49,3.42,4.91,1.46,1.42,3.17,2.53,5.07,3.31,1.97.81,4.06,1.22,6.21,1.22s4.24-.41,6.21-1.22c1.9-.78,3.61-1.89,5.07-3.31,1.47-1.42,2.62-3.07,3.42-4.91.83-1.9,1.25-3.93,1.25-6.01s-.42-4.11-1.25-6.01ZM7.59,14.26c0-1.3,1.09-2.35,2.43-2.35s2.43,1.05,2.43,2.35-1.09,2.35-2.43,2.35-2.43-1.05-2.43-2.35ZM22.05,23.95h-12.19c-.66,0-1.2-.52-1.2-1.16s.54-1.16,1.2-1.16h12.19c.66,0,1.2.52,1.2,1.16s-.54,1.16-1.2,1.16ZM21.89,16.62c-1.34,0-2.43-1.05-2.43-2.35s1.09-2.35,2.43-2.35,2.43,1.05,2.43,2.35-1.09,2.35-2.43,2.35Z" />
                    </g>
                  </symbol>
                  <svg id="face-notgood" viewBox="0 0 31.91 30.84">
                    <g fill="currentColor">
                      <path d="M30.65,9.42c-.8-1.84-1.95-3.49-3.42-4.9-1.46-1.42-3.17-2.53-5.07-3.3-1.97-.8-4.06-1.21-6.21-1.21s-4.24.41-6.21,1.21c-1.9.78-3.61,1.89-5.07,3.3-1.46,1.42-2.61,3.07-3.42,4.9-.83,1.9-1.25,3.92-1.25,6s.42,4.1,1.25,6c.8,1.84,1.95,3.49,3.42,4.9,1.46,1.42,3.17,2.53,5.07,3.3,1.97.8,4.06,1.21,6.21,1.21s4.24-.41,6.21-1.21c1.9-.78,3.61-1.89,5.07-3.3,1.46-1.42,2.61-3.07,3.42-4.9.83-1.9,1.25-3.92,1.25-6s-.42-4.1-1.25-6ZM10.02,16.6c-1.34,0-2.43-1.05-2.43-2.35s1.09-2.35,2.43-2.35,2.43,1.05,2.43,2.35-1.09,2.35-2.43,2.35ZM22.44,20.64l-6.54,2.84c-.18.08-.37.11-.55.11-.51,0-1.01-.29-1.23-.77-.3-.66,0-1.43.68-1.72l6.54-2.84c.68-.29,1.47,0,1.78.66.3.66,0,1.42-.68,1.72ZM21.89,16.6c-1.34,0-2.43-1.05-2.43-2.35s1.09-2.35,2.43-2.35,2.43,1.05,2.43,2.35-1.09,2.35-2.43,2.35Z" />
                    </g>
                  </svg>
                  <symbol id="face-poor" viewBox="0 0 32.07 32.07">
                    <g fill="currentColor">
                      <path d="M30.81,9.79c-.81-1.91-1.96-3.62-3.44-5.1-1.47-1.47-3.19-2.63-5.1-3.44-1.98-.84-4.08-1.26-6.24-1.26s-4.26.42-6.24,1.26c-1.91.81-3.62,1.96-5.1,3.44-1.47,1.47-2.63,3.19-3.44,5.1-.84,1.98-1.26,4.08-1.26,6.24s.42,4.26,1.26,6.24c.81,1.91,1.96,3.62,3.44,5.1,1.47,1.47,3.19,2.63,5.1,3.44,1.98.84,4.08,1.26,6.24,1.26s4.26-.42,6.24-1.26c1.91-.81,3.62-1.96,5.1-3.44,1.47-1.47,2.63-3.19,3.44-5.1.84-1.98,1.26-4.08,1.26-6.24s-.42-4.26-1.26-6.24ZM7.63,14.82c0-1.35,1.09-2.44,2.44-2.44s2.44,1.09,2.44,2.44-1.09,2.44-2.44,2.44-2.44-1.09-2.44-2.44ZM23.09,25.24c-.47.58-1.32.67-1.9.21-1.49-1.19-3.27-1.83-5.15-1.83s-3.66.63-5.15,1.83c-.25.2-.55.3-.84.3-.4,0-.79-.17-1.06-.51-.47-.58-.37-1.44.21-1.9,1.98-1.58,4.34-2.42,6.85-2.42s4.87.84,6.85,2.42c.58.47.68,1.32.21,1.9ZM22,17.26c-1.35,0-2.44-1.09-2.44-2.44s1.09-2.44,2.44-2.44,2.44,1.09,2.44,2.44-1.09,2.44-2.44,2.44Z" />
                    </g>
                  </symbol>
                </svg>

                <div className="wrap">
                  <div className="tp-grid">
                    <div className="tile good">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-good" />
                        </svg>
                      </span>
                      <div className="title">Air Quality</div>
                      <div className="value">
                        -60 unhealthy
                        <br />
                        days per year
                      </div>
                      <div className="period">2019-23 vs. 1998-2002</div>
                    </div>

                    <div className="tile verygood">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-verygood" />
                        </svg>
                      </span>
                      <div className="title">
                        Bridge
                        <br />
                        Conditions
                      </div>
                      <div className="value">-62% poor deck area</div>
                      <div className="period">2003 - 2023</div>
                    </div>

                    <div className="tile verygood">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-verygood" />
                        </svg>
                      </span>
                      <div className="title">
                        Business
                        <br />
                        Formations
                      </div>
                      <div className="value">+95% applications</div>
                      <div className="period">2019-23 vs. 2005-09</div>
                    </div>

                    <div className="tile notgood">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-notgood" />
                        </svg>
                      </span>
                      <div className="title">
                        Community
                        <br />
                        Integration
                      </div>
                      <div className="value">
                        40% to 51% living
                        <br />
                        in segregated areas
                      </div>
                      <div className="period">2023</div>
                    </div>

                    <div className="tile neutral">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-neutral" />
                        </svg>
                      </span>
                      <div className="title">Commute Mode</div>
                      <div className="value">
                        -10.8% driving alone
                        <br />
                        to work
                      </div>
                      <div className="period">2006 - 2023</div>
                    </div>

                    <div className="tile neutral">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-neutral" />
                        </svg>
                      </span>
                      <div className="title">Congestion</div>
                      <div className="value">
                        -4.3% regional
                        <br />
                        highway reliability
                      </div>
                      <div className="period">2011 - 2023</div>
                    </div>

                    <div className="tile good">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-good" />
                        </svg>
                      </span>
                      <div className="title">
                        Educational
                        <br />
                        Attainment
                      </div>
                      <div className="value">
                        +10% people &gt;24 with
                        <br />a high school diploma
                      </div>
                      <div className="period">2000 - 2023</div>
                    </div>

                    <div className="tile neutral">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-neutral" />
                        </svg>
                      </span>
                      <div className="title">
                        Gross Domestic
                        <br />
                        Product
                      </div>
                      <div className="value">+1.7% GDP</div>
                      <div className="period">2001 - 2023</div>
                    </div>

                    <div className="tile neutral">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-neutral" />
                        </svg>
                      </span>
                      <div className="title">
                        Housing
                        <br />
                        Affordability
                      </div>
                      <div className="value">
                        -9% cost-burdened
                        <br />
                        households
                      </div>
                      <div className="period">2011 - 2023</div>
                    </div>

                    <div className="tile verygood">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-verygood" />
                        </svg>
                      </span>
                      <div className="title">Housing Permits</div>
                      <div className="value">
                        +142% permits in preferred
                        <br />
                        development areas
                      </div>
                      <div className="period">2009 - 2023</div>
                    </div>

                    <div className="tile poor">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-poor" />
                        </svg>
                      </span>
                      <div className="title">Income</div>
                      <div className="value">
                        20% to 35% gaps
                        <br />
                        between groups
                      </div>
                      <div className="period">2023</div>
                    </div>

                    <div className="tile verygood">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-verygood" />
                        </svg>
                      </span>
                      <div className="title">Job Growth</div>
                      <div className="value">+25% jobs</div>
                      <div className="period">2001 - 2022</div>
                    </div>

                    <div className="tile good">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-good" />
                        </svg>
                      </span>
                      <div className="title">Labor Force</div>
                      <div className="value">
                        -5% to -6% participation
                        <br />
                        rate gaps
                      </div>
                      <div className="period">2005 - 2023</div>
                    </div>

                    <div className="tile good">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-good" />
                        </svg>
                      </span>
                      <div className="title">
                        Land
                        <br />
                        Consumption
                      </div>
                      <div className="value">
                        -49% land
                        <br />
                        consumption rate
                      </div>
                      <div className="period">2005-23 vs. 1990-05</div>
                    </div>

                    <div className="tile neutral">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-neutral" />
                        </svg>
                      </span>
                      <div className="title">Miles Driven</div>
                      <div className="value">
                        -0.5% daily miles
                        <br />
                        driven per person
                      </div>
                      <div className="period">2000 - 2023</div>
                    </div>

                    <div className="tile good">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-good" />
                        </svg>
                      </span>
                      <div className="title">
                        Mortgage
                        <br />
                        Lending
                      </div>
                      <div className="value">
                        -8% to -10% loan
                        <br />
                        approval rate gaps
                      </div>
                      <div className="period">2007 - 2023</div>
                    </div>

                    <div className="tile neutral">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-neutral" />
                        </svg>
                      </span>
                      <div className="title">
                        Pavement
                        <br />
                        Conditions
                      </div>
                      <div className="value">
                        -1% poor National
                        <br />
                        Highway System miles
                      </div>
                      <div className="period">2020 - 2023</div>
                    </div>

                    <div className="tile good">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-good" />
                        </svg>
                      </span>
                      <div className="title">
                        Population
                        <br />
                        Growth
                      </div>
                      <div className="value">+10.6% population</div>
                      <div className="period">2000 - 2024</div>
                    </div>

                    <div className="tile neutral">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-neutral" />
                        </svg>
                      </span>
                      <div className="title">
                        Transit
                        <br />
                        Conditions
                      </div>
                      <div className="value">
                        28.6% revenue service
                        <br />
                        vehicles past useful life
                      </div>
                      <div className="period">2023</div>
                    </div>

                    <div className="tile poor">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-poor" />
                        </svg>
                      </span>
                      <div className="title">
                        Transit
                        <br />
                        Ridership
                      </div>
                      <div className="value">-44% transit trips</div>
                      <div className="period">2014 - 2023</div>
                    </div>

                    <div className="tile poor">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-poor" />
                        </svg>
                      </span>
                      <div className="title">
                        Transportation
                        <br />
                        Safety
                      </div>
                      <div className="value">
                        +60.5% fatalities
                        <br />
                        &amp; severe injuries
                      </div>
                      <div className="period">2014 - 2023</div>
                    </div>

                    <div className="tile notgood">
                      <span className="face" aria-hidden="true">
                        <svg>
                          <use href="#face-notgood" />
                        </svg>
                      </span>
                      <div className="title">Water Quality</div>
                      <div className="value">
                        -2.8% water supporting
                        <br />
                        aquatic life
                      </div>
                      <div className="period">2014 - 2023</div>
                    </div>

                    <div className="tile legend">
                      <ul>
                        <li className="verygood">
                          <span className="face" aria-hidden="true">
                            <svg>
                              <use href="#face-verygood" />
                            </svg>
                          </span>
                          <span className="text-white">Very Good</span>
                        </li>
                        <li className="good">
                          <span className="face" aria-hidden="true">
                            <svg>
                              <use href="#face-good" />
                            </svg>
                          </span>
                          <span className="text-white">Good</span>
                        </li>
                        <li className="neutral">
                          <span className="face" aria-hidden="true">
                            <svg>
                              <use href="#face-neutral" />
                            </svg>
                          </span>
                          <span className="text-white">Neutral</span>
                        </li>
                        <li className="notgood">
                          <span className="face" aria-hidden="true">
                            <svg>
                              <use href="#face-notgood" />
                            </svg>
                          </span>
                          <span className="text-white">Not Good</span>
                        </li>
                        <li className="poor">
                          <span className="face" aria-hidden="true">
                            <svg>
                              <use href="#face-poor" />
                            </svg>
                          </span>
                          <span className="text-white">Poor</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Trends
