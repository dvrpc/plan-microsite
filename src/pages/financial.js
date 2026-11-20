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
import RevenueNoArrows from "../images/revenue-no-arrows.png"
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

const StatList = ({ need, funding, allocation }) => (
  <dl className="space-y-1 text-left min-[1510px]:mx-auto min-[1510px]:w-full min-[1510px]:max-w-[20rem]">
    {[
      ["Need", need],
      ["Funding", funding],
      ["Allocation", allocation],
    ].map(([label, value]) => (
      <div
        key={label}
        className="flex flex-col min-[1510px]:flex-row min-[1510px]:items-baseline min-[1510px]:justify-between min-[1510px]:gap-x-2"
      >
        <dt>{label}:</dt>
        <dd className="font-bold min-[1510px]:whitespace-nowrap">{value}</dd>
      </div>
    ))}
  </dl>
)

const allocations = {
  Roadway: [
    {
      label: "Pavement Preservation & Modernization",
      color: "#714876",
      description:
        "Keeps roads in good condition by resurfacing, repairing, and upgrading pavement and essential roadway features.",
      theme: "financial financial-purple",
      artwork: Roadwayppm,
      pa: {
        need: "$14.3 B",
        funding: "$8.2 B",
        allocation: "26%",
        image: PaRoadwayPpm,
        imageClass: "",
      },
      nj: {
        need: "$8.4 B",
        funding: "$5.8 B",
        allocation: "35%",
        image: NjRoadwayPpm,
        imageClass: "",
      },
    },
    {
      label: "Bridge Preservation",
      color: "#6f6688",
      description:
        "Maintains and repairs bridges to keep them safe, reliable, and structurally sound for all users.",
      theme: "financial financial-lavender",
      artwork: Roadwaybp,
      pa: {
        need: "$18.8 B",
        funding: "$14.3 B",
        allocation: "45%",
        image: PaRoadwayBp,
        imageClass: "",
      },
      nj: {
        need: "$4.7 B",
        funding: "$3.1 B",
        allocation: "19%",
        image: NjRoadwayBp,
        imageClass: "",
      },
    },
    {
      label: "Substantive Safety",
      color: "#009eb8",
      description:
        "Funds targeted improvements that reduce serious crashes and support the Vision Zero goal.",
      theme: "financial financial-cyan",
      artwork: Roadwayss,
      pa: {
        need: "$2.0 B",
        funding: "$1.9 B",
        allocation: "6%",
        image: PaRoadwaySs,
        imageClass: "w-16 mx-auto",
      },
      nj: {
        need: "$0.4 B",
        funding: "$0.3 B",
        allocation: "2%",
        image: NjRoadwaySs,
        imageClass: "w-3 mx-auto",
      },
    },
    {
      label: "Mobility Operational Improvements",
      color: "#0078ae",
      description:
        "Improves how the existing transportation system works by reducing congestion and using technology to move people and goods more efficiently.",
      theme: "financial financial-blue",
      artwork: Roadwaymoi,
      pa: {
        need: "$7.5 B",
        funding: "$3.2 B",
        allocation: "10%",
        image: PaRoadwayMoi,
        imageClass: "",
      },
      nj: {
        need: "$4.8 B",
        funding: "$2.3 B",
        allocation: "14%",
        image: NjRoadwayMoi,
        imageClass: "",
      },
    },
    {
      label: "Roadway Expansion",
      color: "#24964f",
      description:
        "Adds or extends roadway capacity in limited ways to relieve bottlenecks and improve connections and mobility.",
      theme: "financial financial-green",
      artwork: Roadwayre,
      pa: {
        need: "$2.0 B",
        funding: "$1.3 B",
        allocation: "4%",
        image: PaRoadwayRe,
        imageClass: "w-16 mx-auto",
      },
      nj: {
        need: "$1.1 B",
        funding: "$0.7 B",
        allocation: "4%",
        image: NjRoadwayRe,
        imageClass: "w-10 mx-auto",
      },
    },
    {
      label: "Green Transportation",
      color: "#026227",
      description:
        "Expands walking, biking, and community-focused projects that improve mobility while reducing environmental impacts.",
      theme: "financial financial-dark-green",
      artwork: Roadwaygt,
      pa: {
        need: "$11.8 B",
        funding: "$3.21 B",
        allocation: "10%",
        image: PaRoadwayGt,
        imageClass: "",
      },
      nj: {
        need: "$6.3 B",
        funding: "$4.3 B",
        allocation: "26%",
        image: NjRoadwayGt,
        imageClass: "",
      },
    },
  ],
  Transit: [
    {
      label: "Transit Preservation & Modernization",
      color: "#714876",
      description:
        "Repairs and upgrades transit vehicles, facilities, and infrastructure to keep the system safe, reliable, and accessible.",
      theme: "financial financial-purple",
      artwork: Transitpm,
      pa: {
        need: "$37.7 B",
        funding: "$12.9 B",
        allocation: "56%",
        image: PaTransitPm,
        imageClass: "",
      },
      nj: {
        need: "$5.1 B",
        funding: "$5.1 B",
        allocation: "75%",
        image: NjTransitPm,
        imageClass: "",
      },
    },
    {
      label: "Transit Operational Improvements",
      color: "#0078ae",
      description:
        "Enhances transit service and performance through operational upgrades, technology, and targeted capacity improvements.",
      theme: "financial financial-blue",
      artwork: Transittoi,
      pa: {
        need: "$7.4 B",
        funding: "$1.5 B",
        allocation: "6.7%",
        image: PaTransitOp,
        imageClass: "",
      },
      nj: {
        need: "$0.4 B",
        funding: "$0.6 B",
        allocation: "8.3%",
        image: NjTransitOp,
        imageClass: "w-7 mx-auto",
      },
    },
    {
      label: "Transit System Expansion",
      color: "#24964f",
      description:
        "Builds new transit routes, stations, and services to expand access and connect more people to the region.",
      theme: "financial financial-green",
      artwork: Transittse,
      pa: {
        need: "$15.0 B",
        funding: "$0.8 B",
        allocation: "3.3%",
        image: PaTransitExp,
        imageClass: "",
      },
      nj: {
        need: "$8.6 B",
        funding: "$0.8 B",
        allocation: "12.5%",
        image: NjTransitExp,
        imageClass: "",
      },
    },
    {
      label: "Transit Other",
      color: "#20a9a6",
      description:
        "Covers required transit expenses such as leases, environmental work, and debt payments that keep the system functioning.",
      theme: "financial financial-teal",
      artwork: Transitother,
      pa: {
        need: "$7.8 B",
        funding: "$7.8 B",
        allocation: "34.1%",
        image: PaTransitOther,
        imageClass: "",
      },
      nj: {
        need: "$0.3 B",
        funding: "$0.3 B",
        allocation: "4.3%",
        image: NjTransitOther,
        imageClass: "w-3 mx-auto",
      },
    },
  ],
}

const allocationTabClass =
  "h-12 min-w-0 flex-1 sm:w-36 sm:flex-none rounded-t-lg border-0 [&:not([data-selected])]:bg-white px-4 py-3 font-bold text-[#063446] data-[selected]:bg-[#063446] data-[selected]:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#063446]"

const allocationToggleClass =
  "min-w-0 flex-1 rounded-full px-5 py-2 font-bold text-[#063446] data-[selected]:bg-[#063446] data-[selected]:text-white data-[selected]:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#063446]"

const AllocationLegend = () => (
  <div
    aria-label="Funding key"
    className="text-[#083346] flex flex-wrap justify-end max-w-full w-fit ml-auto gap-y-2 mt-auto px-4 sm:px-0 items-center"
  >
    <div className="flex min-w-0 items-start gap-x-2 pr-2">
      <div
        aria-hidden="true"
        className="h-6 w-6 shrink-0 bg-[#083346] rounded-full"
      />
      <strong>FUNDED = $1 Billion YOE</strong>
    </div>
    <div className="flex min-w-0 items-start gap-x-2 sm:border-l-2 border-[#083346] sm:pl-2">
      <div
        aria-hidden="true"
        className="h-6 w-6 shrink-0 rounded-full border-2 border-[#083346]"
      />
      <strong>UNFUNDED = $1 Billion YOE</strong>
    </div>
  </div>
)

const Tabs = ({ selectedIndex, setSelectedIndex }) => {
  const [selectedState, setSelectedState] = useState(0)
  const states = [
    { key: "pa", label: "Pennsylvania" },
    { key: "nj", label: "New Jersey" },
  ]

  return (
    <TabGroup
      className="allocation-graphic relative flow-root w-full"
      selectedIndex={selectedState}
      onChange={setSelectedState}
    >
      <TabList
        aria-label="Allocation state"
        className="absolute bottom-full left-0 flex h-12 w-full items-end bg-transparent sm:w-auto"
      >
        {states.map(state => (
          <Tab key={state.key} className={allocationTabClass}>
            {state.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {states.map(state => (
          <TabPanel key={state.key}>
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
              <div className="flex">
                <TabList
                  aria-label={`${state.label} transportation mode`}
                  className="mx-4 mt-4 flex w-56 max-w-[calc(100%-2rem)] rounded-full border border-[#063446]/20 bg-[#eaf3fb] p-1"
                >
                  {Object.keys(allocations).map(mode => (
                    <Tab key={mode} className={allocationToggleClass}>
                      {mode}
                    </Tab>
                  ))}
                </TabList>
                <AllocationLegend />
              </div>
              <TabPanels>
                {Object.entries(allocations).map(([mode, categories]) => (
                  <TabPanel key={mode} className="p-4">
                    <h3 className="mb-4 text-lg font-bold text-[#063446]">
                      {state.label} {mode} Allocations
                    </h3>
                    <div className="allocation-grid grid gap-y-6">
                      {categories.map(category => {
                        const figures = category[state.key]
                        return (
                          <div
                            key={category.label}
                            className="flex min-w-0 flex-col gap-3 border-r border-[#063446]/20 px-3 text-sm last:border-r-0"
                            style={{ color: category.color }}
                          >
                            <h4 className="min-h-[4.5rem] font-bold leading-snug">
                              <Tooltip
                                title={category.description}
                                theme={category.theme}
                                position="top"
                                trigger="mouseenter focus click"
                                tag="button"
                                tabIndex={0}
                                className="max-w-full break-words text-left underline decoration-dotted underline-offset-4"
                              >
                                {category.label}
                              </Tooltip>
                            </h4>
                            <StatList
                              need={figures.need}
                              funding={figures.funding}
                              allocation={figures.allocation}
                            />
                            <div className="flex aspect-[315/229] w-full items-start justify-center">
                              <img
                                src={figures.image}
                                className={`h-auto max-h-full max-w-full object-contain object-top ${figures.imageClass}`}
                                alt={`${state.label} ${category.label}: ${figures.funding} funded of ${figures.need} needed`}
                              />
                            </div>
                            <div className="relative mt-auto aspect-[332/470] w-full">
                              <img
                                src={category.artwork}
                                className="h-full w-full object-contain object-bottom"
                                alt=""
                              />
                              <Tooltip
                                title={category.description}
                                theme={category.theme}
                                position="top"
                                trigger="mouseenter focus click"
                                tag="button"
                                tabIndex={0}
                                className="absolute bottom-[8%] left-[12%] right-[8%] break-words text-center text-xs leading-snug text-white underline"
                              >
                                {category.label}
                              </Tooltip>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
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
    if (!window.matchMedia("(min-width: 1280px)").matches) return

    document.querySelector(`#${id}`).classList.toggle("scale-[70%]")
    document.querySelector(`#${id}`).classList.toggle("scale-[125%]")
    document.querySelector(`#${id}`).classList.toggle("z-20")

    others.map(id => {
      if (
        document.querySelector(`#${id}`) &&
        document.querySelector(`#${id}`).classList.contains("scale-[125%]")
      ) {
        document.querySelector(`#${id}`).classList.toggle("scale-[70%]")
        document.querySelector(`#${id}`).classList.toggle("scale-[125%]")
        document.querySelector(`#${id}`).classList.remove("z-20")
      }
    })
  }

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="relative w-full h-24 md:h-[10vw] max-h-40">
          <img
            src={Bg}
            className="absolute inset-0 object-cover h-full w-full"
          />
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
        <div className="text-[#dfebf5] w-full bg-[#0c2e39] flex flex-col relative px-10 py-6 space-y-4">
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
              to how much funding is available.
              <span className="hidden xl:inline">
                {" "}Click on the text boxes below to learn more.
              </span>
            </p>
            <div className="py-10">
              <div className="needs-chart relative">
                <picture className="mx-auto block md:w-4/5 lg:w-1/2">
                  <source
                    media="(max-width: 1279.98px)"
                    srcSet={RevenueNoArrows}
                  />
                  <img
                    alt="Two stacked bar charts showing what we need and what we can afford in Billions of dollars. Each bar is split into 4 categories for NJ Transit, NJ Roadway, PA Transit, and PA Roadway. The need bar is double the height of the afford bar."
                    src={Revenue}
                    className="w-full"
                  />
                </picture>
                <div
                  id="block-1"
                  className="absolute scale-[70%]"
                  onClick={() =>
                    enlarge("block-1", ["block-2", "block-3", "block-4"])
                  }
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
                      <li>
                        Achieving Vision Zero (eliminating traffic deaths and
                        serious injuries)
                      </li>
                      <li>Reducing transportation-related air pollution</li>
                      <li>Preparing infrastructure for extreme weather </li>
                    </ul>
                  </div>
                  <img src={Block3} />
                </div>
                <div
                  id="block-2"
                  className="absolute scale-[70%]"
                  onClick={() =>
                    enlarge("block-2", ["block-1", "block-3", "block-4"])
                  }
                >
                  <div className="absolute m-8 text-sm space-y-2 text-[#063446] flex flex-col">
                    <span>
                      <strong>$78.4 billion in funding</strong> is expected from
                      federal, state, and local sources.
                    </span>
                  </div>
                  <img src={Block2} />
                </div>
                <div
                  id="block-4"
                  className="absolute bottom-0 left-0 h-[320px] w-[380px] max-w-full origin-bottom-left scale-[70%] cursor-pointer"
                  onClick={() =>
                    enlarge("block-4", ["block-1", "block-2", "block-3"])
                  }
                >
                  <div className="absolute inset-0 flex flex-col gap-3 px-8 py-7 text-[clamp(0.75rem,0.9vw,0.875rem)] leading-[1.3] text-[#063446]">
                    <p className="text-[length:inherit]">
                      Each subregion in Pennsylvania and New Jersey receives a
                      portion of reasonably anticipated federal and state roadway
                      and transit funding based on the Plan’s vision, goals,
                      policies, and identified needs.
                    </p>
                    <p className="text-[length:inherit]">
                      Roadway and transit funds come from{" "}
                      <strong>separate sources</strong>, and there’s{" "}
                      <strong>limited flexibility</strong> to move money between
                      them.
                    </p>
                  </div>
                  <img className="h-full w-full" src={Block1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#cbe5f3] relative">
          <div className="border-l-4 border-[#0c2e39] md:w-[68%] mx-auto pb-12">
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
                Choose Pennsylvania or New Jersey, then Roadway or Transit, to
                view each state's needs and allocated funding by project
                category. The key explains the funded and unfunded amounts.
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
            <div className="w-full px-4 text-right ml-auto italic sm:w-3/4 sm:px-0 lg:w-1/2">
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
