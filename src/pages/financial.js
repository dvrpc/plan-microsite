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

const Tabs = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <div className="flex justify-center z-100 h-full">
      <TabGroup
        className="w-full h-full flex flex-col"
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <TabList className="flex text-white -mt-20">
          <Tab className="p-3 font-bold data-[selected]:bg-[#063446] [&:not([data-selected])]:bg-white data-[selected]:text-white [&:not([data-selected])]:text-[#063446] w-1/2 rounded-t-lg h-20">
            Roadway Needs
          </Tab>
          <Tab className="p-3 font-bold data-[selected]:bg-[#063446] [&:not([data-selected])]:bg-white data-[selected]:text-white [&:not([data-selected])]:text-[#063446] w-1/2 rounded-t-lg h-20">
            Transit Needs
          </Tab>
        </TabList>
        <TabPanels className="bg-[#093446] p-3 text-white flex-1 space-y-2">
          <p className="italic">
            Tap above compare our Roadway and Transit needs.
          </p>
          <TabPanel>
            <p>...</p>
          </TabPanel>
          <TabPanel>
            <p>...</p>
          </TabPanel>
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
            <Link>Financial</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] bg-[#063446] w-full flex flex-col relative px-12 py-6 mt-[10%]">
          <div className="w-[70%] mx-auto space-y-4">
            <h2 className="text-3xl font-bold">How Will We Fund the Future?</h2>
            <p className="text-2xl pb-0 z-50">
              Update: Connections 2050 includes a Financial Plan that outlines
              how we’ll invest in transportation infrastructure over the coming
              decades to support the Plan’s vision. Our top priority is safety.
              After that, we focus on maintaining and preserving the existing
              system, making it easier and safer to walk and bike, and improving
              how the system operates. As a region, we only consider expanding
              the system in a few critical areas—where strategies like improving
              operations, managing travel demand, and offering more
              transportation options aren’t enough to meet current or future
              needs.
            </p>
          </div>
        </div>
        <div className="w-[68%] relative border-l-4 border-[#063446]">
          <div className="flex items-center w-full p-4 relative">
            <Dot width="3%" className="absolute -left-[1.5%]" />
            <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
              Understanding Our Transportation Needs
            </h2>
          </div>
          <p className="text-[#063446] ml-[1.5%]">
            To reach our vision for a safe, modern, multimodal transportation
            system, DVRPC estimates how much investment will be needed and
            compares it to how much funding is available. Click below to enlarge
            text boxes to learn more.
          </p>
          <img src={Revenue} className="w-3/5 mx-auto my-12" />
        </div>
        <div className="w-full bg-[#cbe5f3] relative">
          <div className="border-l-4 border-[#0c2e39] w-[68%] mx-auto pb-20">
            <div className=" flex items-center w-full p-4 relative">
              <Dot width="3%" className="absolute -left-[1.5%]" />
              <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
                Allocating Available Revenue
              </h2>
            </div>
            <div className="flex flex-col space-y-6 pt-0 p-6">
              <p>Here’s how the Plan allocates available funding:</p>
              <ul className="list-disc ml-4">
                <li>
                  <strong>63% → Preserving and modernizing</strong> existing
                  roads, bridges, and transit infrastructure{" "}
                </li>
                <li>
                  <strong>25% → Multimodal investments</strong> such as
                  expanding and upgrading bike and pedestrian networks,
                  resurfacing trails, and reconnecting communities divided by
                  past highway projects by creating new open spaces over
                  highways
                </li>
                <li>
                  <strong>3% → Safety projects and programs</strong> that reduce
                  serious crashes and advance the region’s Vision Zero goal{" "}
                </li>
              </ul>
              <p>
                Slide the image below to view the needs and allocated funding to
                the various roadway and transit project categories in the Plan.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full flex">
          <div className="flex w-1/3 pl-[17%] bg-[#063446]">
            <Tabs
              selectedIndex={selectedTab}
              setSelectedIndex={setSelectedTab}
            />
          </div>

          {selectedTab === 0 && <img src={Roadway} className="w-3/5" />}
          {selectedTab === 1 && <img src={Transit} className="w-3/5" />}
        </div>
        <div className="w-full bg-[#cbe5f3] relative p-10 flex">
          <Link
            className="text-2xl mx-auto p-2 bg-[#063446] text-white my-4"
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
