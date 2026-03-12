import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
import Dot from "../images/dot.svg"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import PopEmpMap from "../components/popempmap"
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/16/solid"
import { Legend } from "../components/popempmap"
import Revenue from "../images/revenue.png"
import Transit from "../images/transitneeds.png"
import Roadway from "../images/roadwayneeds.png"
import PaTransitPm from "../images/pa-transit-pm.png"
import PaTransitOp from "../images/pa-transit-op.png"
import PaTransitExp from "../images/pa-transit-exp.png"
import PaTransitOther from "../images/pa-transit-other.png"
import NjTransitPm from "../images/nj-transit-pm.png"
import NjTransitOp from "../images/nj-transit-op.png"
import NjTransitExp from "../images/nj-transit-exp.png"
import NjTransitOther from "../images/nj-transit-other.png"
import PaRoadwayPpm from "../images/pa-roadway-ppm.png"
import PaRoadwayBp from "../images/pa-roadway-bp.png"
import PaRoadwaySs from "../images/pa-roadway-ss.png"
import PaRoadwayMoi from "../images/pa-roadway-moi.png"
import PaRoadwayRe from "../images/pa-roadway-re.png"
import PaRoadwayGt from "../images/pa-roadway-gt.png"
import NjRoadwayPpm from "../images/nj-roadway-ppm.png"
import NjRoadwayBp from "../images/nj-roadway-bp.png"
import NjRoadwaySs from "../images/nj-roadway-ss.png"
import NjRoadwayMoi from "../images/nj-roadway-moi.png"
import NjRoadwayRe from "../images/nj-roadway-re.png"
import NjRoadwayGt from "../images/nj-roadway-gt.png"
import Transitpm from "../images/transitpm.png"
import Transittoi from "../images/transittoi.png"
import Transittse from "../images/transittse.png"
import Transitother from "../images/transitother.png"
import Roadwayppm from "../images/roadwayppm.png"
import Roadwaybp from "../images/roadwaybp.png"
import Roadwaymoi from "../images/roadwaymoi.png"
import Roadwayre from "../images/roadwayre.png"
import Roadwaygt from "../images/roadwaygt.png"
import Roadwayss from "../images/roadwayss.png"
import Arrow1 from "../images/arrow-1.png"
import Arrow2 from "../images/arrow-2.png"
import Arrow3 from "../images/arrow-3.png"
import Block1 from "../images/block-1.png"
import Block2 from "../images/block-2.png"
import Block3 from "../images/block-3.png"

const Tabs = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <div className="flex justify-center z-100 h-full w-full">
      <TabGroup
        className="w-full h-full flex flex-col"
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <TabList className="flex text-white -mt-20 md:w-1/4 w-1/2">
          <Tab className="p-3 font-bold data-[selected]:bg-[#063446] [&:not([data-selected])]:bg-white data-[selected]:text-white [&:not([data-selected])]:text-[#063446] w-1/2 rounded-t-lg h-20">
            Roadway Needs
          </Tab>
          <Tab className="p-3 font-bold data-[selected]:bg-[#063446] [&:not([data-selected])]:bg-white data-[selected]:text-white [&:not([data-selected])]:text-[#063446] w-1/2 rounded-t-lg h-20">
            Transit Needs
          </Tab>
        </TabList>
        <TabPanels className="bg-white md:p-8 text-white min-w-full">
          <TabPanel>
            <>
              <div className="grid grid-cols-4 grid grid-rows-2 md:p-4 auto-rows-auto *:border-r-4 [&>*:nth-child(-n+4)]:border-b-4 [&>*:nth-child(4n)]:border-r-0 md:*:p-4">
                <div className="text-[#714876] md:font-bold">
                  <div className="md:w-1/2 md:text-base text-xs mx-auto flex flex-col space-y-4">
                    <p className="md:text-center md:text-2xl">Pennsylvania</p>
                    <div className="grid md:grid-cols-2 md:text-right text-left">
                      <p>Need:</p>
                      <p>$37.7 B</p>
                      <p>Funding:</p>
                      <p>$12.9 B</p>
                      <p>Allocation:</p>
                      <p>56%</p>
                    </div>
                    <img src={PaTransitPm} />
                  </div>
                </div>
                <div className="text-[#0078ae] md:font-bold">
                  <div className="md:w-1/2 md:text-base text-xs mx-auto flex flex-col space-y-4">
                    <p className="md:text-center md:text-2xl">Pennsylvania</p>
                    <div className="grid md:grid-cols-2 md:text-right text-left">
                      <p>Need:</p>
                      <p>$7.4 B</p>
                      <p>Funding:</p>
                      <p>$1.5 B</p>
                      <p>Allocation:</p>
                      <p>6.7%</p>
                    </div>
                    <img src={PaTransitOp} />
                  </div>
                </div>
                <div className="text-[#24964f] md:font-bold">
                  <div className="md:w-1/2 md:text-base text-xs mx-auto flex flex-col space-y-4">
                    <p className="md:text-center md:text-2xl">Pennsylvania</p>
                    <div className="grid md:grid-cols-2 md:text-right text-left">
                      <p>Need:</p>
                      <p>$15.0 B</p>
                      <p>Funding:</p>
                      <p>$0.8 B</p>
                      <p>Allocation:</p>
                      <p>3.3%</p>
                    </div>
                    <img src={PaTransitExp} />
                  </div>
                </div>
                <div className="text-[#20a9a6] md:font-bold">
                  <div className="md:w-1/2 md:text-base text-xs mx-auto flex flex-col space-y-4">
                    <p className="md:text-center md:text-2xl">Pennsylvania</p>
                    <div className="grid md:grid-cols-2 md:text-right text-left">
                      <p>Need:</p>
                      <p>$7.8 B</p>
                      <p>Funding:</p>
                      <p>$7.8 B</p>
                      <p>Allocation:</p>
                      <p>34.1%</p>
                    </div>
                    <img src={PaTransitOther} />
                  </div>
                </div>
                <div className="text-[#714876] md:font-bold">
                  <div className="md:w-1/2 md:text-base text-xs mx-auto flex flex-col gap-y-4 h-full">
                    <p className="md:text-center md:text-2xl">New Jersey</p>
                    <div className="grid md:grid-cols-2 md:text-right text-left">
                      <p>Need:</p>
                      <p>$5.1 B</p>
                      <p>Funding:</p>
                      <p>$5.1 B</p>
                      <p>Allocation:</p>
                      <p>75%</p>
                    </div>
                    <img src={NjTransitPm} />
                    <img src={Transitpm} className="mt-auto" />
                  </div>
                </div>
                <div className="text-[#0078ae] md:font-bold">
                  <div className="md:w-1/2 md:text-base text-xs mx-auto flex flex-col gap-y-4 h-full">
                    <p className="md:text-center md:text-2xl">New Jersey</p>
                    <div className="grid md:grid-cols-2 md:text-right text-left">
                      <p>Need:</p>
                      <p>$0.4 B</p>
                      <p>Funding:</p>
                      <p>$0.6 B</p>
                      <p>Allocation:</p>
                      <p>8.3%</p>
                    </div>
                    <img src={NjTransitOp} className="w-7 mx-auto" />
                    <img src={Transittoi} className="mt-auto" />
                  </div>
                </div>
                <div className="text-[#24964f] md:font-bold">
                  <div className="md:w-1/2 md:text-base text-xs mx-auto flex flex-col gap-y-4 h-full">
                    <p className="md:text-center md:text-2xl">New Jersey</p>
                    <div className="grid md:grid-cols-2 md:text-right text-left">
                      <p>Need:</p>
                      <p>$8.6 B</p>
                      <p>Funding:</p>
                      <p>$0.8 B</p>
                      <p>Allocation:</p>
                      <p>12.5%</p>
                    </div>
                    <img src={NjTransitExp} />
                    <img src={Transittse} className="mt-auto" />
                  </div>
                </div>
                <div className="text-[#20a9a6] md:font-bold">
                  <div className="md:w-1/2 md:text-base text-xs mx-auto flex flex-col gap-y-4 h-full">
                    <p className="md:text-center md:text-2xl">New Jersey</p>
                    <div className="grid md:grid-cols-2 md:text-right text-left">
                      <p>Need:</p>
                      <p>$0.3 B</p>
                      <p>Funding:</p>
                      <p>$0.3 B</p>
                      <p>Allocation:</p>
                      <p>4.3%</p>
                    </div>
                    <img src={NjTransitOther} className="w-3 mx-auto" />
                    <img src={Transitother} className="mt-auto" />
                  </div>
                </div>
              </div>
            </>
          </TabPanel>
          <TabPanel>
            <>
              <div className="grid grid-cols-6 grid grid-rows-2 md:p-4 auto-rows-auto *:border-r-4 [&>*:nth-child(-n+6)]:border-b-4 [&>*:nth-child(6n)]:border-r-0 md:*:p-6">
                <div className="text-[#714876] md:font-bold space-y-4 md:text-base text-xs">
                  <p className="md:text-center break-all md:break-normal md:text-2xl">
                    Pennsylvania
                  </p>
                  <div className="grid md:grid-cols-2 md:text-right text-left">
                    <p>Need:</p>
                    <p>$14.3 B</p>
                    <p>Funding:</p>
                    <p>$8.2 B</p>
                    <p>Allocation:</p>
                    <p>26%</p>
                  </div>
                  <img src={PaRoadwayPpm} />
                </div>
                <div className="text-[#6f6688] md:font-bold space-y-4 md:text-base text-xs">
                  <p className="md:text-center break-all md:break-normal md:text-2xl">
                    Pennsylvania
                  </p>
                  <div className="grid md:grid-cols-2 md:text-right text-left">
                    <p>Need:</p>
                    <p>$18.8 B</p>
                    <p>Funding:</p>
                    <p>$14.3 B</p>
                    <p>Allocation:</p>
                    <p>45%</p>
                  </div>
                  <img src={PaRoadwayBp} />
                </div>
                <div className="text-[#009eb8] md:font-bold space-y-4 md:text-base text-xs">
                  <p className="md:text-center break-all md:break-normal md:text-2xl">
                    Pennsylvania
                  </p>
                  <div className="grid md:grid-cols-2 md:text-right text-left">
                    <p>Need:</p>
                    <p>$2.0 B</p>
                    <p>Funding:</p>
                    <p>$1.9 B</p>
                    <p>Allocation:</p>
                    <p>6%</p>
                  </div>
                  <img src={PaRoadwaySs} className="w-16 mx-auto" />
                </div>
                <div className="text-[#0078ae] md:font-bold space-y-4 md:text-base text-xs">
                  <p className="md:text-center break-all md:break-normal md:text-2xl">
                    Pennsylvania
                  </p>
                  <div className="grid md:grid-cols-2 md:text-right text-left">
                    <p>Need:</p>
                    <p>$7.5 B</p>
                    <p>Funding:</p>
                    <p>$3.2 B</p>
                    <p>Allocation:</p>
                    <p>10%</p>
                  </div>
                  <img src={PaRoadwayMoi} />
                </div>
                <div className="text-[#24964f] md:font-bold space-y-4 md:text-base text-xs">
                  <p className="md:text-center break-all md:break-normal md:text-2xl">
                    Pennsylvania
                  </p>
                  <div className="grid md:grid-cols-2 md:text-right text-left">
                    <p>Need:</p>
                    <p>$2.0 B</p>
                    <p>Funding:</p>
                    <p>$1.3 B</p>
                    <p>Allocation:</p>
                    <p>4%</p>
                  </div>
                  <img src={PaRoadwayRe} className="w-16 mx-auto" />
                </div>
                <div className="text-[#026227] md:font-bold space-y-4 md:text-base text-xs">
                  <p className="md:text-center break-all md:break-normal md:text-2xl">
                    Pennsylvania
                  </p>
                  <div className="grid md:grid-cols-2 md:text-right text-left">
                    <p>Need:</p>
                    <p>$11.8 B</p>
                    <p>Funding:</p>
                    <p>$3.21 B</p>
                    <p>Allocation:</p>
                    <p>10%</p>
                  </div>
                  <img src={PaRoadwayGt} />
                </div>
                <div className="text-[#714876] md:font-bold flex flex-col md:gap-y-4 gap-y-2 md:text-base text-xs">
                  <p className="md:text-center break-all md:break-normal md:text-2xl">
                    New Jersey
                  </p>
                  <div className="grid md:grid-cols-2 md:text-right text-left">
                    <p>Need:</p>
                    <p>$8.4 B</p>
                    <p>Funding:</p>
                    <p>$5.8 B</p>
                    <p>Allocation:</p>
                    <p>35%</p>
                  </div>
                  <img src={NjRoadwayPpm} />
                  <img src={Roadwayppm} className="mt-auto" />
                </div>
                <div className="text-[#6f6688] md:font-bold flex flex-col md:gap-y-4 gap-y-2 md:text-base text-xs">
                  <p className="md:text-center break-all md:break-normal md:text-2xl">
                    New Jersey
                  </p>
                  <div className="grid md:grid-cols-2 md:text-right text-left">
                    <p>Need:</p>
                    <p>$4.7 B</p>
                    <p>Funding:</p>
                    <p>$3.1 B</p>
                    <p>Allocation:</p>
                    <p>19%</p>
                  </div>
                  <img src={NjRoadwayBp} />
                  <img src={Roadwaybp} className="mt-auto" />
                </div>
                <div className="text-[#009eb8] md:font-bold flex flex-col md:gap-y-4 gap-y-2 md:text-base text-xs">
                  <p className="md:text-center break-all md:break-normal md:text-2xl">
                    New Jersey
                  </p>
                  <div className="grid md:grid-cols-2 md:text-right text-left">
                    <p>Need:</p>
                    <p>$0.4 B</p>
                    <p>Funding:</p>
                    <p>$0.3 B</p>
                    <p>Allocation:</p>
                    <p>2%</p>
                  </div>
                  <img src={NjRoadwaySs} className="w-3 mx-auto" />
                  <img src={Roadwayss} className="mt-auto" />
                </div>
                <div className="text-[#0078ae] md:font-bold flex flex-col md:gap-y-4 gap-y-2 md:text-base text-xs">
                  <p className="md:text-center break-all md:break-normal md:text-2xl">
                    New Jersey
                  </p>
                  <div className="grid md:grid-cols-2 md:text-right text-left">
                    <p>Need:</p>
                    <p>$4.8 B</p>
                    <p>Funding:</p>
                    <p>$2.3 B</p>
                    <p>Allocation:</p>
                    <p>14%</p>
                  </div>
                  <img src={NjRoadwayMoi} />
                  <img src={Roadwaymoi} className="mt-auto" />
                </div>
                <div className="text-[#24964f] md:font-bold flex flex-col md:gap-y-4 gap-y-2 md:text-base text-xs">
                  <p className="md:text-center break-all md:break-normal md:text-2xl">
                    New Jersey
                  </p>
                  <div className="grid md:grid-cols-2 md:text-right text-left">
                    <p>Need:</p>
                    <p>$1.1 B</p>
                    <p>Funding:</p>
                    <p>$0.7 B</p>
                    <p>Allocation:</p>
                    <p>4%</p>
                  </div>
                  <img src={NjRoadwayRe} className="w-10 mx-auto" />
                  <img src={Roadwayre} className="mt-auto" />
                </div>
                <div className="text-[#026227] md:font-bold flex flex-col md:gap-y-4 gap-y-2 md:text-base text-xs">
                  <p className="md:text-center break-all md:break-normal md:text-2xl">
                    New Jersey
                  </p>
                  <div className="grid md:grid-cols-2 md:text-right text-left">
                    <p>Need:</p>
                    <p>$6.3 B</p>
                    <p>Funding:</p>
                    <p>$4.3 B</p>
                    <p>Allocation:</p>
                    <p>26%</p>
                  </div>
                  <img src={NjRoadwayGt} />
                  <img src={Roadwaygt} className="mt-auto" />
                </div>
              </div>
            </>
          </TabPanel>
          <div className="text-[#083346] flex md:ml-auto w-fit md:flex-row flex-col gap-y-2 md:my-0 my-2">
            <div className="flex gap-x-2 md:border-r-2 border-[#083346] pr-2">
              <div className="h-6 w-6 bg-[#083346] rounded-full" />{" "}
              <strong>FUNDED = $1 Billion YOE</strong>
            </div>
            <div className="flex gap-x-2 md:pl-2">
              <div className="h-6 w-6 rounded-full border-2 border-[#083346]" />{" "}
              <strong>UNFUNDED = $1 Billion YOE</strong>
            </div>
          </div>
        </TabPanels>
      </TabGroup>
    </div>
  )
}

const WhatIsThePlan = () => {
  const [selectedLayer, setSelectedLayer] = useState("popABS")
  const [selectedTab, setSelectedTab] = useState(0)

  useEffect(() => {
    if (selectedTab === 0) setSelectedLayer("popABS")
    else if (selectedTab === 1) setSelectedLayer("empABS")
  }, [selectedTab])

  return (
    <Layout>
      <div className="bg-[#eaf3fb] flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[70%] mx-auto z-50 relative items-center underline mt-4">
            <Link to="/">Home</Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Financial Plan</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] bg-[#063446] w-full flex flex-col relative px-12 py-6 mt-[10%]">
          <div className="md:w-[70%] mx-auto space-y-4">
            <h2 className="md:text-3xl text-xl font-bold">
              How Will We Fund the Future?
            </h2>
            <p className="md:text-2xl text-lg pb-0 z-50">
              <em>Update: Connections 2050</em> includes a Financial Plan that
              outlines how we’ll invest in transportation infrastructure over
              the coming decades to support the Plan’s vision. Our top priority
              is safety. After that, we focus on maintaining and preserving the
              existing system, making it easier and safer to walk and bike, and
              improving how the system operates. As a region, we only consider
              expanding the system in a few critical areas—where strategies like
              improving operations, managing travel demand, and offering more
              transportation options aren’t enough to meet current or future
              needs.
            </p>
          </div>
        </div>
        <div className="md:w-[68%] relative border-l-4 border-[#063446] relative">
          <div className="flex items-center w-full md:p-4 p-2 relative">
            <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
            <h2 className="md:text-2xl text-lg text-[#063446] font-bold md:ml-[1.5%]">
              Understanding Our Transportation Needs
            </h2>
          </div>
          <p className="text-[#063446] md:ml-[1.5%]">
            To reach our vision for a{" "}
            <strong>safe, modern, multimodal transportation system</strong>,
            DVRPC estimates how much investment will be needed and compares it
            to how much funding is available.
          </p>
          <img src={Arrow1} className="absolute md:left-[15%] md:top-[25%]" />
          <img
            src={Arrow2}
            className="absolute md:right-0 md:top-[20%] scale-[75%]"
          />
          <img
            src={Arrow3}
            className="absolute md:bottom-[8%] md:right-[60%]"
          />
          <div
            id="block-1"
            className="absolute md:top-[20%]"
            onClick={() =>
              document
                .querySelector("#block-1")
                .classList.toggle("scale-[150%]")
            }
          >
            <div className="absolute text-sm md:m-6 space-y-2 text-[#063446] flex flex-col">
              <span>
                DVRPC estimates reasonably anticipated funding for the
                Pennsylvania and New Jersey subregions for roadways and transit.
                There is limited ability to move funds between modes.
              </span>
              <span>
                These are allocated to specific types of projects based on the
                Plan’s vision, goals, policies, and identified needs.
              </span>
            </div>
            <img src={Block1} />
          </div>
          <div
            id="block-2"
            className="absolute md:right-0 md:top-[25%]"
            onClick={() =>
              document
                .querySelector("#block-2")
                .classList.toggle("scale-[200%]")
            }
          >
            <div className="absolute md:m-8 text-sm space-y-2 text-[#063446] flex flex-col">
              <span>
                <strong>$78.4 billion in funding</strong> is expected from
                federal, state, and local sources.
              </span>
            </div>
            <img src={Block2} />
          </div>
          <div
            id="block-3"
            className="absolute md:bottom-[6%] md:right-[30%]"
            onClick={() =>
              document
                .querySelector("#block-3")
                .classList.toggle("scale-[150%]")
            }
          >
            <div className="absolute md:m-6 text-sm space-y-2 text-[#063446] flex flex-col">
              <span>
                <strong>$162.9 billion</strong> to achieve the transportation
                vision.
              </span>
              <span>The estimate does not yet include the full cost of:</span>
              <ul className="list-disc *:ml-4 !text-sm">
                <li>Substantive safety improvements</li>
                <li>Preservation of existing roadway and transit networks</li>
                <li>New bicycle and pedestrian facilities</li>
                <li>Operational improvements</li>
                <li>Network Expansion</li>
              </ul>
            </div>
            <img src={Block3} />
          </div>
          <img
            src={Revenue}
            className="w-3/5 mx-auto md:mb-[45%] md:mt-[30%]"
          />
        </div>
        <div className="w-full bg-[#cbe5f3] relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto pb-20">
            <div className=" flex items-center w-full md:p-4 p-2 relative">
              <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
              <h2 className="md:text-2xl text-lg text-[#063446] font-bold md:ml-[1.5%]">
                Allocating Available Revenue
              </h2>
            </div>
            <div className="flex flex-col space-y-6 pt-0 md:p-6 p-2">
              <p>
                <strong>
                  The Plan prioritizes investing in the transportation system
                  people depend on every day
                </strong>{" "}
                and improving how it serves the region moving forward. Together,
                91% of available roadway funding is focused on maintaining and
                modernizing existing roads and bridges; expanding and improving
                walking, biking, and trail connections; connecting communities
                with denser street networks; and advancing projects that make
                travel safer and move the region toward Vision Zero. Over 60% of
                available transit funding is dedicated to maintaining and
                modernizing existing assets.
              </p>
              <p>
                Click on the tabs below to view the needs and allocated funding
                to the various roadway and transit project categories in the
                Plan.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full flex">
          <Tabs selectedIndex={selectedTab} setSelectedIndex={setSelectedTab} />
        </div>
        <div className="w-full bg-[#cbe5f3] relative p-10 flex">
          <Link
            className="md:text-2xl text-lg mx-auto p-2 bg-[#063446] text-white my-4"
            to="/mrp-list"
          >
            See the Major Regional Projects funded with available Revenue
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default WhatIsThePlan
