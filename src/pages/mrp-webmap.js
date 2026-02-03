import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
import Dot from "../images/dot.svg"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import MrpMap from "../components/mrpmap"
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
import { Legend } from "../components/mrpmap"

const MrpWebmap = () => {
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
            <Link>MRP Webmap</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] bg-[#063446] w-full flex flex-col relative px-12 py-6 mt-[10%]">
          <div className="w-[70%] mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Major Regional Projects</h2>
            <p className="text-2xl pb-0 z-50">
              Once funding targets are set for each project category, DVRPC
              works with counties, PennDOT, NJDOT, and transit agencies to
              identify and evaluate candidate projects.
            </p>
            <p className="text-2xl pb-0 z-50">
              A portion of funding is reserved for smaller projects to be added
              in future{" "}
              <a href="https://experience.arcgis.com/experience/5a00c76b8da041378b37c682cf5b9254/page/Page">
                Transportation Improvement Program (TIP)
              </a>{" "}
              updates. The remaining funds support{" "}
              <strong>Major Regional Projects (MRPs)</strong>, which are
              large-scale transportation investments that{" "}
              <strong>cost more than $40 million</strong> and/or{" "}
              <strong>significantly impact travel across the region</strong>.
            </p>
          </div>
        </div>
        <div className="w-[68%] relative ml-[2%] border-l-4 border-[#063446]">
          <div className="flex items-center w-full p-4 relative">
            <Dot width="3%" className="absolute -left-[1.5%]" />
            <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
              MRP Web Map
            </h2>
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="absolute z-[100] flex h-full w-1/3 pl-[17%] bg-[#063446]">
            <div className="text-white p-3">
              <span>
                The map shows MRPs categorized by one or more transportation
                improvement categories.
              </span>
              <br />
              <span>
                <strong>Roadway</strong> and <strong>Transit</strong> projects
                in this web map are designated as
                <strong>Funded</strong> (prioritized and programmed within
                anticipated revenues) or Unfunded (aspirational projects aligned
                with the Plan’s goals that could move forward if new funding
                becomes available). There are also{" "}
                <strong>Externally Funded</strong> projects that don’t use
                regional dollars, but must be considered due to their impacts on
                the regional network and air quality conformity.
              </span>
            </div>
            <Legend selectedLayer={selectedLayer} />
          </div>
          <MrpMap />
        </div>

        <div className="w-[68%] relative ml-[2%] border-l-4 border-[#0c2e39]">
          <div className="flex flex-col space-y-6 m-6 text-[#063446]">
            <p>
              In addition to the Transportation Improvement Program (TIP), the
              region’s financial plan is closely linked to the{" "}
              <a href="https://www.dvrpc.org/congestionmanagement/">
                Congestion Management Process (CMP)
              </a>
              .
            </p>
            <p>
              The CMP identifies the <strong>most congested corridors</strong>{" "}
              in Greater Philadelphia and recommends{" "}
              <strong>design and technology solutions</strong> to reduce traffic
              and improve mobility. CMP strategies support the Plan’s broader
              goals by helping to:
            </p>
            <ul className="list-disc ml-4 text-2xl">
              <li>Increase mobility and reliability</li>
              <li>Integrate modes and improve transit access</li>
              <li>Modernize and maintain the transportation network</li>
              <li>Advance Vision Zero and improve safety</li>
              <li>
                Support goods movement, security, and emergency preparedness
              </li>
              <li>Invest in Plan Centers where growth is focused</li>
            </ul>
            <p>
              Federal regulations require that any{" "}
              <strong>project adding lanes or other capacity</strong> for
              single-occupancy vehicles must align with the CMP. These projects
              must also include <strong>supplemental strategies</strong> to
              prevent new lanes from quickly filling back up with traffic.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MrpWebmap
