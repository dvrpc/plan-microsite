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
        <TabList className="flex text-white md:w-2/3 md:ml-auto md:*:rounded-t-lg">
          <Tab className="p-3 focus:font-bold data-[selected]:bg-[#16819a] [&:not([data-selected])]:bg-[#95b5c5] text-white w-1/2">
            Land Use Vision
          </Tab>
          <Tab className="p-3 focus:font-bold data-[selected]:bg-[#16819a] [&:not([data-selected])]:bg-[#95b5c5] text-white w-1/2">
            Plan Centers
          </Tab>
        </TabList>
        <TabPanels className="bg-[#093446] p-3 text-white flex-1 space-y-2 pl-[33%]">
          <TabPanel className="p-2">
            <span>
              Shows how the region can grow in smart, balanced ways by aligning
              future development with existing infrastructure. It highlights
              redevelopment opportunities, emerging growth areas, rural
              landscapes to preserve, and green spaces that link them together.
            </span>
          </TabPanel>
          <TabPanel className="p-2">
            <span>
              Identifies specific Centers where future growth is prioritized and
              where investments in housing, infrastructure, and jobs can have
              the greatest impact.
            </span>
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
      <div className="bg-white flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[70%] mx-auto z-50 relative items-center underline mt-4">
            <Link to="/">Home</Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Vision</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] bg-[#063446] w-full flex flex-col relative px-12 py-6 mt-[10%]">
          <div className="md:w-[70%] mx-auto space-y-4">
            <h2 className="md:text-3xl text-xl font-bold">
              What Do We Want the Region to Look Like in 2050?
            </h2>
            <p className="md:text-2xl text-lg pb-0 z-50">
              Every region needs a roadmap for the future—and that’s what a
              long-range plan provides.{" "}
              <strong>The regional vision for 2050</strong> imagines a Greater
              Philadelphia that is safer, more connected, and more
              resilient—where communities prosper, people can move easily and
              affordably, and natural resources are protected.
            </p>
            <p className="md:text-2xl text-lg pb-0 z-50">
              DVRPC works with partners across the region to shape this shared
              vision. The plan guides major transportation decisions, such as
              making biking and walking safer, improving transit, and
              maintaining reliable travel on our roads. But it’s about more than
              getting from A to B. Transportation influences where we live, how
              the economy grows, and how we care for the environment. Our plan
              looks at the <strong>big picture</strong>, connecting all the
              pieces that make our region a great place to live and thrive.
            </p>
            <h2 className="md:text-5xl mx-auto md:w-3/4 md:text-center md:py-12">
              The Regional Vision for 2050 is a Greater Philadelphia that
              provides:
            </h2>
            <div className="pb-6">
              <Bubbles />
            </div>
            <h2 className="md:text-3xl text-lg pb-0 z-50 mx-auto text-center">
              Click on each Plan Element above to explore more
            </h2>
          </div>
        </div>
        <div className="md:w-[68%] relative border-l-4 border-[#063446] text-[#063446]">
          <div className="flex items-center w-full md:p-4 p-2 relative">
            <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
            <h2 className="md:text-2xl text-lg font-bold">
              Explore the Vision in Maps
            </h2>
          </div>
        </div>
        <div className="md:w-[68%] relative border-l-4 border-[#063446] text-[#063446]">
          <div className="items-center w-full md:p-6 p-2 relative space-y-6">
            <p>
              <strong>What will Greater Philadelphia look like in 2050?</strong>{" "}
              The Plan envisions <strong>dense, connected communities</strong>{" "}
              that are positioned to grow and thrive. By focusing new
              development in these areas—called <strong>Centers</strong>—the
              region can make the most of existing transportation options while
              reducing financial and environmental costs.
            </p>
            <p>Use the interactive map to explore this vision in two layers:</p>
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="flex h-full md:flex-row flex-col">
            <div className="md:w-2/5 z-[100] flex md:min-h-full">
              <Tabs
                selectedLayer={selectedLayer}
                selectedIndex={selectedTab}
                setSelectedIndex={setSelectedTab}
              />

              <Legend selectedLayer={selectedLayer} />
            </div>

            <VisionMap selectedLayer={selectedLayer} />
          </div>
        </div>
        <div className="md:w-[68%] relative border-l-4 border-[#063446] text-[#063446]">
          <div className="items-center w-full md:p-6 p-2 relative space-y-6">
            <p>
              These maps use existing passenger rail and a proposed line to
              create a <strong>visual guide to strategic growth</strong>—helping
              Greater Philadelphia build on its assets, protect open space, and
              support walkable, vibrant communities where people can live, work,
              and play.
            </p>
          </div>
        </div>
        <div className="md:w-[68%] relative border-l-4 border-[#063446] text-[#063446] md:p-6 md:pt-0 p-2 space-y-6">
          <Accordion label="Vision Survey Feedback">
            <p>
              The regional vision reflects the ideas and priorities of the
              people who live and work in Greater Philadelphia. Through a public
              survey with both multiple-choice and open-ended questions,
              participants shared what they liked (or didn’t) about the previous
              Plan and suggested what to add, change, or leave out. We also
              asked for feedback on new topics like infrastructure and utility
              services.
            </p>
            <p>
              More than <strong>1,300 people from every county</strong> weighed
              in, and their input helped shape this vision. Here’s a snapshot of
              what we heard:
            </p>
            <img src={Feedback} className="md:w-2/3 mx-auto" />
          </Accordion>
          <Accordion label="Building Blocks of the Vision">
            <p>
              The Plan is built around five key <strong>Plan Elements</strong>:
              Transportation, Economy, Communities, Environment, and
              Infrastructure & Utility Services. Each element includes three{" "}
              <strong>Goals</strong> that move us closer to our regional vision,
              along with <strong>Strategies</strong> that outline how to achieve
              them and identify who can help make them happen.
            </p>
            <img src={Elements} className="md:w-2/3 mx-auto" />
          </Accordion>
        </div>
      </div>
    </Layout>
  )
}

export default Vision
