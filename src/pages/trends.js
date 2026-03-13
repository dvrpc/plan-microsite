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
          <div className="flex text-white font-bold w-[70%] mx-auto z-50 relative items-center underline mt-4">
            <Link to="/">Home</Link>
            <ChevronRightIcon width="1.5%" />
            <Link to="/trends">Trends & Forces</Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Trends</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] bg-[#063446] w-full flex flex-col relative px-12 py-6 mt-[10%]">
          <div className="md:w-[70%] mx-auto space-y-4">
            <h2 className="md:text-3xl text-xl font-bold">
              What Is Shaping Our Future?
            </h2>
            <p className="md:text-2xl text-lg pb-0 z-50">
              Each update to the region’s Plan begins with a look at the{" "}
              <strong>forces shaping Greater Philadelphia’s future</strong>.
              DVRPC studies social, economic, and land use trends to understand
              how the region is changing and how those changes might affect our
              communities, economy, and environment in the decades ahead.
            </p>
            <p className="md:text-2xl text-lg">
              This research helps DVRPC and its partners{" "}
              <strong>anticipate future needs and craft policies</strong> that
              move the region toward its shared vision. DVRPC continues to
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
            <div className="flex flex-col space-y-6 md:p-6 p-2 md:pt-0">
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
                <h4 className="mx-auto text-[#16819a] font-bold text-lg">
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
            <div className="flex flex-col space-y-6 md:p-6 md:pt-0 p-2">
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
                <h4 className="mx-auto text-[#16819a] font-bold text-lg">
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
            <div className="flex flex-col space-y-6 md:p-6 md:pt-0 p-2">
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
        <div className="w-full bg-[#d5d1db] relative">
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
            <div className="flex flex-col space-y-6 md:p-6 md:pt-0 p-2">
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
                <h4 className="mx-auto text-[#179650] font-bold text-lg">
                  TRACKING PROGRESS DASHBOARD
                </h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "none" }}
                >
                  <symbol id="face-verygood" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="26" fill="currentColor" />
                    <circle cx="24" cy="27" r="3" fill="#0b2a33" />
                    <circle cx="40" cy="27" r="3" fill="#0b2a33" />
                    <path
                      d="M20 38c4 6 20 6 24 0"
                      fill="none"
                      stroke="#0b2a33"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                  </symbol>
                  <symbol id="face-good" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="26" fill="currentColor" />
                    <circle cx="24" cy="27" r="3" fill="#0b2a33" />
                    <circle cx="40" cy="27" r="3" fill="#0b2a33" />
                    <path
                      d="M22 39c3 4 17 4 20 0"
                      fill="none"
                      stroke="#0b2a33"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                  </symbol>
                  <symbol id="face-neutral" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="26" fill="currentColor" />
                    <circle cx="24" cy="27" r="3" fill="#0b2a33" />
                    <circle cx="40" cy="27" r="3" fill="#0b2a33" />
                    <path
                      d="M22 40h20"
                      fill="none"
                      stroke="#0b2a33"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                  </symbol>
                  <symbol id="face-notgood" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="26" fill="currentColor" />
                    <circle cx="24" cy="27" r="3" fill="#0b2a33" />
                    <circle cx="40" cy="27" r="3" fill="#0b2a33" />
                    <path
                      d="M21 23l7 2"
                      fill="none"
                      stroke="#0b2a33"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                    <path
                      d="M43 23l-7 2"
                      fill="none"
                      stroke="#0b2a33"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                    <path
                      d="M23 42c4-4 14-4 18 0"
                      fill="none"
                      stroke="#0b2a33"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                  </symbol>
                  <symbol id="face-poor" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="26" fill="currentColor" />
                    <circle cx="24" cy="27" r="3" fill="#0b2a33" />
                    <circle cx="40" cy="27" r="3" fill="#0b2a33" />
                    <path
                      d="M20 22l8 3"
                      fill="none"
                      stroke="#0b2a33"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                    <path
                      d="M44 22l-8 3"
                      fill="none"
                      stroke="#0b2a33"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                    <path
                      d="M20 44c6-7 18-7 24 0"
                      fill="none"
                      stroke="#0b2a33"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
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
                          Very Good
                        </li>
                        <li className="good">
                          <span className="face" aria-hidden="true">
                            <svg>
                              <use href="#face-good" />
                            </svg>
                          </span>
                          Good
                        </li>
                        <li className="neutral">
                          <span className="face" aria-hidden="true">
                            <svg>
                              <use href="#face-neutral" />
                            </svg>
                          </span>
                          Neutral
                        </li>
                        <li className="notgood">
                          <span className="face" aria-hidden="true">
                            <svg>
                              <use href="#face-notgood" />
                            </svg>
                          </span>
                          Not Good
                        </li>
                        <li className="poor">
                          <span className="face" aria-hidden="true">
                            <svg>
                              <use href="#face-poor" />
                            </svg>
                          </span>
                          Poor
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
