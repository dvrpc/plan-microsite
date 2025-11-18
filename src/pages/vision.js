import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import VisionMap from "../components/visionmap"
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
import Bubbles from "../components/bubbles"
import Dot from "../images/dot.svg"
import Accordion from "../components/accordion"
import Feedback from "../images/feedback.png"
import Elements from "../images/elements.png"
import { Legend } from "../components/visionmap"

const Tabs = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <div className="flex justify-center z-100 h-full">
      <TabGroup
        className="w-full h-full flex flex-col"
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <TabList className="flex text-white">
          <Tab className="p-3 focus:font-bold data-[selected]:bg-[#16819a] [&:not([data-selected])]:bg-[#95b5c5] text-white w-1/2">
            Land Use Vision
          </Tab>
          <Tab className="p-3 focus:font-bold data-[selected]:bg-[#16819a] [&:not([data-selected])]:bg-[#95b5c5] text-white w-1/2">
            Plan Centers
          </Tab>
        </TabList>
        <TabPanels className="bg-[#093446] p-3 text-white flex-1">
          <TabPanel className="p-3">
            <p>
              Shows how the region can grow in smart, balanced ways by aligning
              future development with existing infrastructure. It highlights
              redevelopment opportunities, emerging growth areas, rural
              landscapes to preserve, and green spaces that link them together.
            </p>
          </TabPanel>
          <TabPanel className="p-3">
            <p>
              Identifies specific Centers where future growth is prioritized and
              where investments in housing, infrastructure, and jobs can have
              the greatest impact.
            </p>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}

const Vision = () => {
  const [selectedLayer, setSelectedLayer] = useState("")
  const [selectedTab, setSelectedTab] = useState(0)

  useEffect(
    () =>
      setSelectedLayer(() =>
        selectedTab === 0 ? "landuse" : "freightcenters"
      ),
    [selectedTab, setSelectedLayer]
  )

  return (
    <Layout>
      <div className="bg-[#cce5f3] flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[70%] mx-auto z-50 relative items-center underline mt-4">
            <Link to="/">Home</Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Vision</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] mx-auto w-[70%] bg-[#0c2e39] flex flex-col relative px-12 py-6 space-y-6 mt-[10%] relative">
          <h2 className="text-3xl font-bold">Where Are We Headed?</h2>
          <p className="text-2xl pb-0 z-50">
            Every region needs a roadmap for the future—and that’s what a
            long-range plan provides.{" "}
            <strong>The regional vision for 2050</strong> imagines a Greater
            Philadelphia that is safer, more connected, and more resilient—where
            communities grow sustainably, people can move easily and affordably,
            and natural resources are protected.
          </p>
          <p className="text-2xl pb-0 z-50">
            DVRPC works with partners across the region to shape this shared
            vision. The plan guides major transportation decisions, such as
            making biking and walking safer, improving transit, and maintaining
            reliable travel on our roads. But it’s about more than getting from
            A to B. Transportation influences where we live, how the economy
            grows, and how we care for the environment. Our plan looks at the{" "}
            <strong>big picture</strong>, connecting all the pieces that make
            our region a great place to live and thrive.
          </p>
          <p className="text-2xl pb-0 z-50">
            The regional vision for 2050 is a Greater Philadelphia that
            provides:
          </p>
          <div className="-ml-[5%] -mr-[5%]">
            <Bubbles />
          </div>
        </div>
        <div className="w-[68%] bg-[#eef4fb] relative ml-[2%] border-l-4 border-[#0c2e39]">
          <div className="flex items-center w-full bg-[#16819a] p-4 relative mt-4">
            <Dot width="3%" className="absolute -left-[1.5%]" />
            <h2 className="text-2xl text-white font-bold ml-[1.5%]">
              Explore the Vision in Maps
            </h2>
          </div>
          <div className="flex flex-col space-y-6 m-6 ">
            <p>
              <strong>What will Greater Philadelphia look like in 2050?</strong>{" "}
              The Plan envisions <strong>dense, connected communities</strong>{" "}
              that are positioned to grow and thrive. By focusing new
              development in these areas—called <strong>Centers</strong>—the
              region can make the most of existing transportation options while
              reducing financial and environmental costs.
            </p>
            <p>Use the interactive map to explore this vision in two layers:</p>

            <div className="relative h-full">
              <div className="absolute z-[100] h-full w-1/4 flex">
                <Tabs
                  selectedLayer={selectedLayer}
                  selectedIndex={selectedTab}
                  setSelectedIndex={setSelectedTab}
                />

                <div className="ml-auto">
                  <Legend selectedLayer={selectedLayer} />
                </div>
              </div>
              <VisionMap selectedLayer={selectedLayer} />
            </div>
            <p>
              These maps use existing passenger rail and a proposed line to
              create a <strong>visual guide to strategic growth</strong>—helping
              Greater Philadelphia build on its assets, protect open space, and
              support walkable, vibrant communities where people can live, work,
              and play.
            </p>
            <Accordion label="Vision Survey Feedback">
              <p>
                The regional vision reflects the ideas and priorities of the
                people who live and work in Greater Philadelphia. Through a
                public survey with both multiple-choice and open-ended
                questions, participants shared what they liked (or didn’t) about
                the previous Plan and suggested what to add, change, or leave
                out. We also asked for feedback on new topics like
                infrastructure and utility services.
              </p>
              <p>
                More than <strong>1,300 people from every county</strong>{" "}
                weighed in, and their input helped shape this vision. Here’s a
                snapshot of what we heard:
              </p>
              <img src={Feedback} className="w-2/3 mx-auto" />
            </Accordion>
            <Accordion label="Building Blocks of the Vision">
              <p>
                The Plan is built around five key <strong>Plan Elements</strong>
                : Transportation, Economy, Communities, Environment, and
                Infrastructure & Utility Services. Each element includes three{" "}
                <strong>Goals</strong> that move us closer to our regional
                vision, along with Strategies that outline how to achieve them
                and identify who can help make them happen.
              </p>
              <img src={Elements} className="w-2/3 mx-auto" />
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Vision
