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
import Block1 from "../images/block-1.png"
import Block2 from "../images/block-2.png"
import Block3 from "../images/block-3.png"
import { Tooltip } from "react-tippy"

const tabTooltipClass =
  "absolute bottom-0 max-w-full px-1 py-1 text-[0.6rem] leading-snug text-white underline hover:cursor-pointer md:p-2 md:text-sm lg:text-base"

const StatList = ({ need, funding, allocation }) => (
  <dl className="space-y-1 text-left">
    {[
      ["Need", need],
      ["Funding", funding],
      ["Allocation", allocation],
    ].map(([label, value]) => (
      <div key={label} className="flex flex-col">
        <dt>{label}:</dt>
        <dd className="font-bold">{value}</dd>
      </div>
    ))}
  </dl>
)

const PennsylvaniaHeader = () => (
  <>
    <span className="min-[1510px]:hidden">
      Penn
      <br />
      sylvania
    </span>
    <span className="hidden min-[1510px]:inline">Pennsylvania</span>
  </>
)

const Tabs = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <div className="flex justify-center z-[100] h-full w-full bg-white">
      <TabGroup
        className="w-full h-full flex flex-col"
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <TabList className="flex text-white -mt-20 md:w-1/4 w-1/2">
          <Tab className="p-3 font-bold data-[selected]:bg-white [&:not([data-selected])]:bg-[#063446] data-[selected]:text-[#063446] [&:not([data-selected])]:text-white w-1/2 rounded-t-lg h-20">
            Roadway Needs
          </Tab>
          <Tab className="p-3 font-bold data-[selected]:bg-white [&:not([data-selected])]:bg-[#063446] data-[selected]:text-[#063446] [&:not([data-selected])]:text-white w-1/2 rounded-t-lg h-20">
            Transit Needs
          </Tab>
        </TabList>
        <TabPanels className="w-full overflow-hidden text-white">
          <TabPanel>
            <div className="w-full">
              <div className="grid w-full auto-rows-fr grid-cols-4 grid-rows-2 text-[0.5rem] leading-tight sm:text-[0.65rem] md:text-xs lg:text-base *:min-w-0 *:break-words *:border-r-2 *:p-1 sm:*:p-2 md:p-4 md:*:border-r-4 md:*:p-4 [&_*]:min-w-0 [&_img]:h-auto [&_img]:max-w-full [&_img]:object-contain [&_p]:!text-[inherit] [&_strong]:!text-[inherit] [&>*:nth-child(-n+4)]:border-b-2 md:[&>*:nth-child(-n+4)]:border-b-4 [&>*:nth-child(4n)]:border-r-0">
                <div className="text-[#714876] md:font-bold">
                  <div className="lg:w-3/4 md:text-base text-xs mx-auto flex flex-col space-y-4">
                    <p className="text-[0.6rem] sm:text-xs md:text-center md:text-lg lg:text-2xl">
                      <PennsylvaniaHeader />
                    </p>
                    <StatList
                      need="$37.7 B"
                      funding="$12.9 B"
                      allocation="56%"
                    />
                    <img src={PaTransitPm} />
                  </div>
                </div>
                <div className="text-[#0078ae] md:font-bold">
                  <div className="lg:w-3/4 md:text-base text-xs mx-auto flex flex-col space-y-4">
                    <p className="text-[0.6rem] sm:text-xs md:text-center md:text-lg lg:text-2xl">
                      <PennsylvaniaHeader />
                    </p>
                    <StatList
                      need="$7.4 B"
                      funding="$1.5 B"
                      allocation="6.7%"
                    />
                    <img src={PaTransitOp} />
                  </div>
                </div>
                <div className="text-[#24964f] md:font-bold">
                  <div className="lg:w-3/4 md:text-base text-xs mx-auto flex flex-col space-y-4">
                    <p className="text-[0.6rem] sm:text-xs md:text-center md:text-lg lg:text-2xl">
                      <PennsylvaniaHeader />
                    </p>
                    <StatList
                      need="$15.0 B"
                      funding="$0.8 B"
                      allocation="3.3%"
                    />
                    <img src={PaTransitExp} />
                  </div>
                </div>
                <div className="text-[#20a9a6] md:font-bold">
                  <div className="lg:w-3/4 md:text-base text-xs mx-auto flex flex-col space-y-4">
                    <p className="text-[0.6rem] sm:text-xs md:text-center md:text-lg lg:text-2xl">
                      <PennsylvaniaHeader />
                    </p>
                    <StatList
                      need="$7.8 B"
                      funding="$7.8 B"
                      allocation="34.1%"
                    />
                    <img src={PaTransitOther} />
                  </div>
                </div>
                <div className="text-[#714876] md:font-bold">
                  <div className="lg:w-3/4 md:text-base text-xs mx-auto flex flex-col gap-y-4 h-full">
                    <p className="text-[0.6rem] sm:text-xs md:text-center md:text-lg lg:text-2xl">
                      New Jersey
                    </p>
                    <StatList need="$5.1 B" funding="$5.1 B" allocation="75%" />
                    <img src={NjTransitPm} />
                    <div className="relative mt-auto">
                      <Tooltip
                        theme="tomato"
                        title="Repairs and upgrades transit vehicles, facilities, and infrastructure to keep the system safe, reliable, and accessible."
                        position="top"
                        trigger="click"
                        className={tabTooltipClass}
                      >
                        Transit Preservation & Modernization
                      </Tooltip>
                      <img src={Transitpm} alt="Illustration of bus." />
                    </div>
                  </div>
                </div>
                <div className="text-[#0078ae] md:font-bold">
                  <div className="lg:w-3/4 md:text-base text-xs mx-auto flex flex-col gap-y-4 h-full">
                    <p className="text-[0.6rem] sm:text-xs md:text-center md:text-lg lg:text-2xl">
                      New Jersey
                    </p>
                    <StatList
                      need="$0.4 B"
                      funding="$0.6 B"
                      allocation="8.3%"
                    />
                    <img src={NjTransitOp} className="w-7 mx-auto" />
                    <div className="relative mt-auto">
                      <Tooltip
                        theme="tomato"
                        title="Enhances transit service and performance through operational upgrades, technology, and targeted capacity improvements."
                        position="top"
                        trigger="click"
                        className={tabTooltipClass}
                      >
                        Transit Operational Improvements
                      </Tooltip>
                      <img src={Transittoi} />
                    </div>
                  </div>
                </div>
                <div className="text-[#24964f] md:font-bold">
                  <div className="lg:w-3/4 md:text-base text-xs mx-auto flex flex-col gap-y-4 h-full">
                    <p className="text-[0.6rem] sm:text-xs md:text-center md:text-lg lg:text-2xl">
                      New Jersey
                    </p>
                    <StatList
                      need="$8.6 B"
                      funding="$0.8 B"
                      allocation="12.5%"
                    />
                    <img src={NjTransitExp} />
                    <div className="relative mt-auto">
                      <Tooltip
                        theme="tomato"
                        title="Builds new transit routes, stations, and services to expand access and connect more people to the region."
                        position="top"
                        trigger="click"
                        className={tabTooltipClass}
                      >
                        Transit System Expansion
                      </Tooltip>
                      <img
                        src={Transittse}
                        className="mt-auto"
                        alt="Illustration of construction worker."
                      />
                    </div>
                  </div>
                </div>
                <div className="text-[#20a9a6] md:font-bold">
                  <div className="lg:w-3/4 md:text-base text-xs mx-auto flex flex-col gap-y-4 h-full">
                    <p className="text-[0.6rem] sm:text-xs md:text-center md:text-lg lg:text-2xl">
                      New Jersey
                    </p>
                    <StatList
                      need="$0.3 B"
                      funding="$0.3 B"
                      allocation="4.3%"
                    />
                    <img src={NjTransitOther} className="w-3 mx-auto" />
                    <div className="relative mt-auto">
                      <Tooltip
                        theme="tomato"
                        title="Covers required transit expenses such as leases, environmental work, and debt payments that keep the system functioning."
                        position="top"
                        trigger="click"
                        className={tabTooltipClass}
                      >
                        Transit Other
                      </Tooltip>
                      <img
                        src={Transitother}
                        alt="Illustration depicting contract and money."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <>
              <div className="grid w-full auto-rows-fr grid-cols-6 grid-rows-2 text-[0.42rem] leading-tight sm:text-[0.55rem] md:text-xs lg:text-base *:min-w-0 *:break-words *:border-r-2 *:p-1 sm:*:p-2 md:p-4 md:*:border-r-4 md:*:p-4 lg:*:p-6 [&_*]:min-w-0 [&_img]:h-auto [&_img]:max-w-full [&_img]:object-contain [&_p]:!text-[inherit] [&_strong]:!text-[inherit] [&>*:nth-child(-n+6)]:border-b-2 md:[&>*:nth-child(-n+6)]:border-b-4 [&>*:nth-child(6n)]:border-r-0">
                <div className="text-[#714876] md:font-bold space-y-4 md:text-base text-xs">
                  <p className="break-all text-[0.52rem] sm:text-[0.65rem] md:text-center md:text-base md:break-normal lg:text-2xl">
                    <PennsylvaniaHeader />
                  </p>
                  <StatList need="$14.3 B" funding="$8.2 B" allocation="26%" />
                  <img src={PaRoadwayPpm} />
                </div>
                <div className="text-[#6f6688] md:font-bold space-y-4 md:text-base text-xs">
                  <p className="break-all text-[0.52rem] sm:text-[0.65rem] md:text-center md:text-base md:break-normal lg:text-2xl">
                    <PennsylvaniaHeader />
                  </p>
                  <StatList need="$18.8 B" funding="$14.3 B" allocation="45%" />
                  <img src={PaRoadwayBp} />
                </div>
                <div className="text-[#009eb8] md:font-bold space-y-4 md:text-base text-xs">
                  <p className="break-all text-[0.52rem] sm:text-[0.65rem] md:text-center md:text-base md:break-normal lg:text-2xl">
                    <PennsylvaniaHeader />
                  </p>
                  <StatList need="$2.0 B" funding="$1.9 B" allocation="6%" />
                  <img src={PaRoadwaySs} className="w-16 mx-auto" />
                </div>
                <div className="text-[#0078ae] md:font-bold space-y-4 md:text-base text-xs">
                  <p className="break-all text-[0.52rem] sm:text-[0.65rem] md:text-center md:text-base md:break-normal lg:text-2xl">
                    <PennsylvaniaHeader />
                  </p>
                  <StatList need="$7.5 B" funding="$3.2 B" allocation="10%" />
                  <img src={PaRoadwayMoi} />
                </div>
                <div className="text-[#24964f] md:font-bold space-y-4 md:text-base text-xs">
                  <p className="break-all text-[0.52rem] sm:text-[0.65rem] md:text-center md:text-base md:break-normal lg:text-2xl">
                    <PennsylvaniaHeader />
                  </p>
                  <StatList need="$2.0 B" funding="$1.3 B" allocation="4%" />
                  <img src={PaRoadwayRe} className="w-16 mx-auto" />
                </div>
                <div className="text-[#026227] md:font-bold space-y-4 md:text-base text-xs">
                  <p className="break-all text-[0.52rem] sm:text-[0.65rem] md:text-center md:text-base md:break-normal lg:text-2xl">
                    <PennsylvaniaHeader />
                  </p>
                  <StatList need="$11.8 B" funding="$3.21 B" allocation="10%" />
                  <img src={PaRoadwayGt} />
                </div>
                <div className="text-[#714876] md:font-bold flex flex-col md:gap-y-4 gap-y-2 md:text-base text-xs">
                  <p className="break-all text-[0.52rem] sm:text-[0.65rem] md:text-center md:text-base md:break-normal lg:text-2xl">
                    New Jersey
                  </p>
                  <StatList need="$8.4 B" funding="$5.8 B" allocation="35%" />
                  <img src={NjRoadwayPpm} />
                  <div className="relative mt-auto">
                    <Tooltip
                      theme="tomato"
                      title="Keeps roads in good condition by resurfacing, repairing, and upgrading pavement and essential roadway features."
                      position="top"
                      trigger="click"
                      className={tabTooltipClass}
                    >
                      Pavement Preservation & Modernization
                    </Tooltip>
                    <img
                      src={Roadwayppm}
                      className="mt-auto"
                      alt="Illustration of construction equipment"
                    />
                  </div>
                </div>
                <div className="text-[#6f6688] md:font-bold flex flex-col md:gap-y-4 gap-y-2 md:text-base text-xs">
                  <p className="break-all text-[0.52rem] sm:text-[0.65rem] md:text-center md:text-base md:break-normal lg:text-2xl">
                    New Jersey
                  </p>
                  <StatList need="$4.7 B" funding="$3.1 B" allocation="19%" />
                  <img src={NjRoadwayBp} />
                  <div className="relative mt-auto">
                    <Tooltip
                      theme="tomato"
                      title="Maintains and repairs bridges to keep them safe, reliable, and structurally sound for all users."
                      position="top"
                      trigger="click"
                      className={tabTooltipClass}
                    >
                      Bridge Preservation
                    </Tooltip>
                    <img
                      src={Roadwaybp}
                      className="mt-auto"
                      alt="Illustration of bridge construction"
                    />
                  </div>
                </div>
                <div className="text-[#009eb8] md:font-bold flex flex-col md:gap-y-4 gap-y-2 md:text-base text-xs">
                  <p className="break-all text-[0.52rem] sm:text-[0.65rem] md:text-center md:text-base md:break-normal lg:text-2xl">
                    New Jersey
                  </p>
                  <StatList need="$0.4 B" funding="$0.3 B" allocation="2%" />
                  <img src={NjRoadwaySs} className="w-3 mx-auto" />
                  <div className="relative mt-auto">
                    <Tooltip
                      theme="tomato"
                      title="Funds targeted improvements that reduce serious crashes and support the Vision Zero goal."
                      position="top"
                      trigger="click"
                      className={tabTooltipClass}
                    >
                      Substantive Safety
                    </Tooltip>
                    <img
                      src={Roadwayss}
                      className="mt-auto"
                      alt="Illustration of crosswalk"
                    />
                  </div>
                </div>
                <div className="text-[#0078ae] md:font-bold flex flex-col md:gap-y-4 gap-y-2 md:text-base text-xs">
                  <p className="break-all text-[0.52rem] sm:text-[0.65rem] md:text-center md:text-base md:break-normal lg:text-2xl">
                    New Jersey
                  </p>
                  <StatList need="$4.8 B" funding="$2.3 B" allocation="14%" />
                  <div className="relative mt-auto">
                    <Tooltip
                      theme="tomato"
                      title="Improves how the existing transportation system works by reducing congestion and using technology to move people and goods more efficiently."
                      position="top"
                      trigger="click"
                      className={tabTooltipClass}
                    >
                      Mobility Operational Improvements
                    </Tooltip>
                    <img src={NjRoadwayMoi} />
                    <img
                      src={Roadwaymoi}
                      className="mt-auto"
                      alt="Illustration traffic signs."
                    />
                  </div>
                </div>
                <div className="text-[#24964f] md:font-bold flex flex-col md:gap-y-4 gap-y-2 md:text-base text-xs">
                  <p className="break-all text-[0.52rem] sm:text-[0.65rem] md:text-center md:text-base md:break-normal lg:text-2xl">
                    New Jersey
                  </p>
                  <StatList need="$1.1 B" funding="$0.7 B" allocation="4%" />
                  <img src={NjRoadwayRe} className="w-10 mx-auto" />
                  <div className="relative mt-auto">
                    <Tooltip
                      theme="tomato"
                      title="Adds or extends roadway capacity in limited ways to relieve bottlenecks and improve connections and mobility."
                      position="top"
                      trigger="click"
                      className={tabTooltipClass}
                    >
                      Roadway Expansion
                    </Tooltip>
                    <img
                      src={Roadwayre}
                      className="mt-auto"
                      alt="Illustration of roadway construction worker."
                    />
                  </div>
                </div>
                <div className="text-[#026227] md:font-bold flex flex-col md:gap-y-4 gap-y-2 md:text-base text-xs">
                  <p className="break-all text-[0.52rem] sm:text-[0.65rem] md:text-center md:text-base md:break-normal lg:text-2xl">
                    New Jersey
                  </p>
                  <StatList need="$6.3 B" funding="$4.3 B" allocation="26%" />
                  <img src={NjRoadwayGt} />
                  <div className="relative mt-auto">
                    <Tooltip
                      theme="tomato"
                      title="Expands walking, biking, and community-focused projects that improve mobility while reducing environmental impacts."
                      position="top"
                      trigger="click"
                      className={tabTooltipClass}
                    >
                      Green Transportation
                    </Tooltip>
                    <img
                      src={Roadwaygt}
                      className="mt-auto"
                      alt="Illustration of someone walking and someone biking."
                    />
                  </div>
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

  const enlarge = (id, others) => {
    document.querySelector(`#${id}`).classList.toggle("scale-[70%]")
    document.querySelector(`#${id}`).classList.toggle("scale-[125%]")

    others.map(id => {
      if (document.querySelector(`#${id}`) && document.querySelector(`#${id}`).classList.contains("scale-[125%]")) {
        document.querySelector(`#${id}`).classList.toggle("scale-[70%]")
        document.querySelector(`#${id}`).classList.toggle("scale-[125%]")
      }
    })
  }

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[68%] mx-auto px-7 z-50 relative items-center mt-4">
            <Link className="underline text-white" to="/">
              Home
            </Link>
            <ChevronRightIcon width="1.5%" />
            <Link className="text-white">Financial</Link>
            <ChevronRightIcon width="1.5%" />
            <Link className="text-white">Needs & Revenue</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] w-full bg-[#0c2e39] flex flex-col relative px-10 py-6 space-y-4 mt-[10%]">
          <div className="md:w-[68%] mx-auto space-y-4">
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
        <div className="md:w-[68%] relative border-l-4 border-[#0c2e39]">
          <div className="flex items-center w-full md:p-6 p-2 md:pt-0 relative mt-4">
            <Dot className="md:absolute md:block -left-[1.5%] hidden w-[3%] lg:-left-[1.25%] lg:w-[2%]" />
            <h2 className="md:text-2xl text-lg text-[#063446] font-bold">
              Understanding Our Transportation Needs
            </h2>
          </div>
          <div className="flex flex-col space-y-4 md:p-6 p-2 md:pt-0">
            <p className="text-[#063446]">
              To reach our vision for a{" "}
              <strong>safe, modern, multimodal transportation system</strong>,
              DVRPC estimates how much investment will be needed and compares it
              to how much funding is available. Click on the text boxes below to
              learn more.
            </p>
            <div className="py-10">
              <div className="relative">
                <div
                  id="block-1"
                  className="absolute scale-[70%]"
                  onClick={() => enlarge("block-1", ["block-2", "block-3"])}
                >
                  <div className="absolute m-6 text-sm space-y-2 text-[#063446] flex flex-col">
                    <span>
                      <strong>$162.9 billion</strong> to achieve the
                      transportation vision.
                    </span>
                    <span>
                      The estimate does not yet include the full cost of:
                    </span>
                    <ul className="list-disc *:ml-4 !text-sm">
                      <li>Substantive safety improvements</li>
                      <li>
                        Preservation of existing roadway and transit networks
                      </li>
                      <li>New bicycle and pedestrian facilities</li>
                      <li>Operational improvements</li>
                      <li>Network Expansion</li>
                    </ul>
                  </div>
                  <img src={Block3} />
                </div>
                <div
                  id="block-2"
                  className="absolute scale-[70%]"
                  onClick={() => enlarge("block-2", ["block-1", "block-3"])}
                >
                  <div className="absolute m-8 text-sm space-y-2 text-[#063446] flex flex-col">
                    <span>
                      <strong>$78.4 billion in funding</strong> is expected from
                      federal, state, and local sources.
                    </span>
                  </div>
                  <img src={Block2} />
                </div>
                <img
                  alt="Two stacked bar charts showing what we need and what we can afford in Billions of dollars. Each bar is split into 4 categories for NJ Transit, NJ Roadway, PA Transit, and PA Roadway. The need bar is double the height of the afford bar."
                  src={Revenue}
                  className="mx-auto md:w-4/5 lg:w-1/2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#cbe5f3] relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto pb-20">
            <div className=" flex items-center w-full md:p-6 p-2  relative">
              <Dot className="md:absolute md:block -left-[1.5%] hidden w-[3%] lg:-left-[1.25%] lg:w-[2%]" />
              <h2 className="md:text-2xl text-lg text-[#063446] font-bold">
                Allocating Available Revenue
              </h2>
            </div>
            <div className="flex flex-col space-y-4 pt-0 md:p-6 md:pt-0 p-2">
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
        <div className="w-full bg-white relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto pb-10">
            <Tabs
              selectedIndex={selectedTab}
              setSelectedIndex={setSelectedTab}
            />
            <div className="w-1/2 text-right ml-auto italic">
              Federal rules require us to show all revenues and project costs in
              “year-of-expenditure” (YOE) dollars, which simply means we adjust
              for inflation over time.
            </div>
          </div>
        </div>
        <div className="w-full bg-[#cbe5f3] relative p-10 flex">
          <Link
            className="md:text-2xl text-lg mx-auto p-2 bg-[#063446] text-white my-4"
            to="/funding-gap"
          >
            Learn more about Funding Challenges for the Region
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default WhatIsThePlan
