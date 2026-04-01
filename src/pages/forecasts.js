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

const Tabs = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <div className="flex justify-center z-100 h-full">
      <TabGroup
        className="w-full h-full flex flex-col"
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <TabList className="flex text-white md:w-2/3 md:ml-auto md:*:rounded-t-lg">
          <Tab className="p-3 font-bold data-[selected]:bg-[#0078af] [&:not([data-selected])]:bg-white data-[selected]:text-white [&:not([data-selected])]:text-[#0078af] w-1/2">
            Population
          </Tab>
          <Tab className="p-3 font-bold data-[selected]:bg-[#704775] [&:not([data-selected])]:bg-white data-[selected]:text-white [&:not([data-selected])]:text-[#704775] w-1/2">
            Employment
          </Tab>
        </TabList>
        <TabPanels
          className="p-3 text-white flex-1 space-y-2 pl-[33%]"
          style={{
            backgroundColor: selectedIndex === 0 ? "#0078af" : "#704775",
          }}
        >
          <TabPanel>
            <span>
              By 2050, the Greater Philadelphia region is projected to add about{" "}
              <strong>450,000 new residents</strong>, bringing the total
              population to more than <strong>6.3 million</strong>—a 7% increase
              since 2020. Explore the web map to view absolute change, percent
              change, and total forecasted population by municipality throughout
              the region.
            </span>
          </TabPanel>
          <TabPanel>
            <span>
              By 2050, the region is expected to gain{" "}
              <strong>356,000 new jobs</strong>, an increase of more than 10%
              since 2020, with growth across a{" "}
              <strong>wide range of industries</strong>. Explore the web map to
              view absolute change, percent change, and total forecasted
              employment by municipality throughout the region.
            </span>
          </TabPanel>
          <span className="italic">
            Explore the web map to view absolute change, percent change, and
            total forecasted population by municipality throughout the region.
          </span>
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
      <div className="flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[68%] mx-auto px-7 z-50 relative items-center mt-4">
            <Link className="underline" to="/">
              Home
            </Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Forecasts</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] w-full bg-[#0c2e39] flex flex-col relative px-10 py-6 space-y-4 mt-[10%]">
          <div className="md:w-[68%] mx-auto space-y-4">
            <h2 className="md:text-3xl text-xl font-bold">
              Where Are We Headed?
            </h2>
            <p className="md:text-2xl text-lg pb-0 z-50">
              Population and employment forecasts help planners understand{" "}
              <strong>how the Greater Philadelphia region might grow</strong> in
              the coming decades and how that growth will affect housing,
              transportation, jobs, and quality of life.
            </p>
            <p className="md:text-2xl text-lg pb-0 z-50">
              While no one can predict the future, forecasts give us a roadmap
              to make <strong>smarter investments</strong> in roads, buses,
              trains, and communities. Overall, the region is expected to see{" "}
              <strong>steady growth in both people and jobs</strong> through
              2050.
            </p>
          </div>
        </div>
        <div className="md:w-[68%] relative border-l-4 border-[#063446]">
          <div className="flex items-center w-full md:p-6 p-2 relative">
            <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
            <h2 className="md:text-2xl text-lg text-[#063446] font-bold">
              Explore the Forecasts in Maps
            </h2>
          </div>
          <div className="flex flex-col space-y-4 md:p-6 p-2 md:pt-0">
            <p>
              How will Greater Philadelphia’s people and jobs be distributed by
              2050? These interactive maps show where growth and decline are
              likely to occur so planners, communities, and decision-makers can
              visualize tradeoffs, prioritize investments, and plan for
              infrastructure, housing, and services.
            </p>
            <p>
              Toggle between sets of maps. Each shows three ways to view the
              forecast for 2050:
            </p>
            <ul className="list-disc ml-4">
              <li>
                <strong>Absolute Change</strong>: the numeric increase or
                decrease
              </li>
              <li>
                }<strong>Percent Change</strong>: the proportional change
                compared with today
              </li>
              <li>
                <strong>Total Forecasted</strong>: the expected numbers by
                municipality in 2050
              </li>
            </ul>
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

            <PopEmpMap selectedLayer={selectedLayer} />
          </div>
          <div className="absolute right-0 md:top-0 top-[40%] w-52 m-3">
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-black w-full">
                Select Layer
                <ChevronDownIcon className="ml-auto size-4 fill-black" />
              </MenuButton>

              {selectedTab === 0 && (
                <MenuItems
                  transition
                  anchor="bottom end"
                  className="w-52 rounded-xl border bg-white p-1 text-black transition duration-100 ease-out"
                >
                  <MenuItem>
                    <button
                      className="group flex gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10 text-left"
                      onClick={() => setSelectedLayer("popABS")}
                    >
                      Absolute Change in Population
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      className="group flex gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10 text-left"
                      onClick={() => setSelectedLayer("popPER")}
                    >
                      Percent Change in Population
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      className="group flex items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10 text-left"
                      onClick={() => setSelectedLayer("pop")}
                    >
                      2050 Population Forecast
                    </button>
                  </MenuItem>
                </MenuItems>
              )}
              {selectedTab === 1 && (
                <MenuItems
                  transition
                  anchor="bottom end"
                  className="w-52 rounded-xl border bg-white p-1 text-black transition duration-100 ease-out"
                >
                  <MenuItem>
                    <button
                      className="group flex gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10 text-left"
                      onClick={() => setSelectedLayer("empABS")}
                    >
                      Absolute Change in Employment
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      className="group flex gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10 text-left"
                      onClick={() => setSelectedLayer("empPER")}
                    >
                      Percent Change in Employment
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      className="group flex items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10 text-left"
                      onClick={() => setSelectedLayer("emp")}
                    >
                      2050 Employment Forecast
                    </button>
                  </MenuItem>
                </MenuItems>
              )}
            </Menu>
          </div>
        </div>

        <div className="md:w-[68%] relative border-l-4 border-[#0c2e39]">
          <div className="flex flex-col space-y-4 md:m-6 m-2 text-[#063446]">
            {selectedTab === 0 && (
              <>
                <p>
                  Most new residents will live in the region’s cities, but the
                  fastest growth is expected in Pennsylvania’s suburban counties
                  especially Montgomery and Chester. Philadelphia is projected
                  to gain about 130,000 people, nearly one-third of all regional
                  growth. Together,{" "}
                  <strong>Philadelphia, Montgomery, and Chester</strong>{" "}
                  counties will account for almost{" "}
                  <strong>
                    three-fourths of the total population increase
                  </strong>
                  .
                </p>
                <p>
                  The region’s population is also <strong>getting older</strong>
                  . Fewer births and longer lifespans, mean that by 2050, the
                  share of residents aged{" "}
                  <strong>65 and older will grow by nearly 50%</strong>, while
                  those under 30 will decline slightly. This shift mirrors
                  national trends and will influence everything from healthcare
                  needs to workforce availability.
                </p>
                <p>
                  Household types are changing, too, as families are adapting to
                  affordability pressures. More residents are living in{" "}
                  <strong>
                    multifamily housing, multigenerational households
                  </strong>
                  , or <strong>shared spaces</strong>. Young adults are staying
                  with their parents longer. That said, half of new households
                  formed since the year 2000 are single-person. These changes
                  will shape the region’s housing market, neighborhood design,
                  and community needs in the decades ahead.
                </p>
              </>
            )}
            {selectedTab === 1 && (
              <>
                <p>
                  The <strong>healthcare and social services</strong> sector is
                  projected to remain the region’s largest employer, expanding
                  as the population ages and demand for care increases.{" "}
                  <strong>Transportation and warehousing</strong> jobs are
                  expected to grow rapidly due to e-commerce and expanded
                  delivery networks.
                </p>
                <p>
                  Between 2020 and 2025 alone, jobs in{" "}
                  <strong>hotels, restaurants, and food services</strong> are
                  projected to grow by <strong>67%</strong>, and{" "}
                  <strong>arts and entertainment</strong> jobs by
                  <strong>41%</strong>, as these sectors rebound from pandemic
                  losses.
                </p>
                <p>
                  By 2050, total regional employment is forecast to reach nearly
                  <strong>4 million jobs</strong>.
                  <ul className="list-disc ml-4">
                    <li>
                      <strong>Philadelphia</strong> will see the largest share
                      of job growth, with about{" "}
                      <strong>25% of the total increase</strong>.
                    </li>
                    <li>
                      <strong>Montgomery and Chester counties</strong> will also
                      expand, with <strong>16% and 13%</strong> more jobs,
                      respectively.
                    </li>
                    <li>
                      Other counties across the region will experience steady,
                      diversified growth.
                    </li>
                  </ul>
                </p>
                <p>
                  These trends point to an economy driven by{" "}
                  <strong>healthcare, logistics, and service jobs</strong>,
                  supported by a stable workforce and a broad mix of industries
                  across the region.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WhatIsThePlan
