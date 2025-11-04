import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
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

const Tabs = ({ selectedLayer }) => {
  return (
    <div className="flex justify-center z-100 h-full">
      <TabGroup className="w-full h-full flex flex-col">
        <TabList className="flex gap-4 bg-[#16819a] text-white p-3">
          <Tab className="px-3">Population Forecasts</Tab>
          <Tab className="px-3">Employment Forecasts</Tab>
        </TabList>
        <TabPanels className="bg-[#093446] p-3 text-white flex-1">
          <TabPanel className="p-3">
            <p>
              By 2050, the Greater Philadelphia region is projected to add about
              450,000 new residents, bringing the total population to more than
              6.3 million—a 7% increase since 2020.
            </p>
          </TabPanel>
          <TabPanel className="p-3">
            <p>
              By 2050, the region is expected to gain 356,000 new jobs, an
              increase of more than 10% since 2020, with growth across a wide
              range of industries. Explore the web map to view absolute change,
              percent change, and total forecasted employment by municipality
              throughout the region.
            </p>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}

const WhatIsThePlan = () => {
  const [selectedLayer, setSelectedLayer] = useState("popABS")
  const layers = ["popABS", "popPER", "pop"]

  return (
    <Layout>
      <div className="bg-[#cce5f3] flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[70%] mx-auto z-50 relative items-center underline mt-4">
            <Link>Home</Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Forces</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] mx-auto w-[70%] bg-[#0c2e39] flex flex-col relative px-12 py-6 space-y-6 mt-[10%]">
          <h2 className="text-3xl font-bold">Where Are We Headed?</h2>
          <p className="text-2xl pb-0 z-50">
            Forecasts help planners understand how the Greater Philadelphia
            region might grow in the coming decades and how that growth will
            affect housing, transportation, jobs, and quality of life.
          </p>
          <p className="text-2xl pb-0 z-50">
            While no one can predict the future, population and employment
            forecasts give us a roadmap to make smarter investments in roads,
            buses, trains, and communities. Overall, the region is expected to
            see steady growth in both people and jobs through 2050.
          </p>
        </div>
        <div className="w-[68%] bg-[#eef4fb] relative ml-[2%] border-l-4 border-[#0c2e39]">
          <div className="flex flex-col space-y-6 m-6 ">
            <p>
              Explore the web map to view absolute change, percent change, and
              total forecasted population by municipality throughout the region.
            </p>
            <div className="relative h-full">
              <div className="absolute z-[100] h-full w-1/4">
                <Tabs />
              </div>
              <PopEmpMap selectedLayer={selectedLayer} />
              <div className="absolute right-0 top-0 w-52">
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-black w-full">
                    Select Layer
                    <ChevronDownIcon className="ml-auto size-4 fill-black" />
                  </MenuButton>

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
                </Menu>
              </div>
            </div>
            {(selectedLayer === "popPER" || selectedLayer === "popABS") && (
              <>
                <p>
                  Most new residents will live in the region’s cities, but the
                  fastest growth is expected in Pennsylvania’s suburban
                  counties, especially Montgomery and Chester. Philadelphia is
                  projected to gain about 130,000 people, nearly one-third of
                  all regional growth. Together, Philadelphia, Montgomery, and
                  Chester counties will account for almost three-fourths of the
                  total population increase.
                </p>
                <p>
                  The region’s population is also getting older. Fewer births
                  and longer lifespans mean that by 2050, the share of residents
                  aged 65 and older will grow by nearly 50%, while those under
                  30 will decline slightly. This shift mirrors national trends
                  and will influence everything from healthcare needs to
                  workforce availability.
                </p>
                <p>
                  The region’s population is also getting older. Fewer births
                  and longer lifespans mean that by 2050, the share of residents
                  aged 65 and older will grow by nearly 50%, while those under
                  30 will decline slightly. This shift mirrors national trends
                  and will influence everything from healthcare needs to
                  workforce availability.
                </p>
              </>
            )}
            {selectedLayer === "pop" && (
              <>
                <p>
                  The healthcare and social services sector will remain the
                  region’s largest employer, expanding as the population ages
                  and demand for care increases. Transportation and warehousing
                  jobs are expected to grow rapidly due to e-commerce and
                  expanded delivery networks.
                </p>
                <p>
                  The healthcare and social services sector will remain the
                  region’s largest employer, expanding as the population ages
                  and demand for care increases. Transportation and warehousing
                  jobs are expected to grow rapidly due to e-commerce and
                  expanded delivery networks.
                </p>
                <p>
                  By 2050, total regional employment is forecast to reach nearly
                  4 million jobs.
                  <ul className="list-disc ml-4">
                    <li>
                      Philadelphia will see the largest share of job growth,
                      with about 25% of the total increase.
                    </li>
                    <li>
                      Montgomery and Chester counties will also expand, with 16%
                      and 13% more jobs, respectively.
                    </li>
                    <li>
                      Other counties across the region will experience steady,
                      diversified growth.
                    </li>
                  </ul>
                </p>
                <p>
                  These trends point to an economy driven by healthcare,
                  logistics, and service jobs, supported by a stable workforce
                  and a broad mix of industries across the region.
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
