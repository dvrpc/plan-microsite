import React, { useState, useEffect, useContext } from "react"
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
import AppContext from "../components/AppContext"
import Modal from "../components/modal"
import InfoIcon from "../images/info-icon.svg"

const MrpWebmap = () => {
  const [selectedLayer, setSelectedLayer] = useState("popABS")
  const [selectedTab, setSelectedTab] = useState(0)

  const toggleModal = event => {
    event.preventDefault()
    document.getElementById("modal-background").classList.toggle("hidden")
    document.getElementById("modal").classList.toggle("hidden")
  }

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
          <div className="md:w-[70%] mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Major Regional Projects</h2>
            <p className="text-2xl pb-0 z-50">
              Once funding targets are set for each project category, DVRPC
              works with counties, PennDOT, NJDOT, and transit agencies to
              identify and evaluate candidate projects.
            </p>
            <p className="text-2xl pb-0 z-50">
              A portion of funding is reserved for smaller projects to be added
              in future{" "}
              <a
                href="https://experience.arcgis.com/experience/5a00c76b8da041378b37c682cf5b9254/page/Page"
                target="_blank"
                className="underline"
              >
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
        <div className="md:w-[68%] w-full relative border-l-4 border-[#063446]">
          <div className="flex items-center w-full p-4 relative">
            <Dot width="3%" className="md:absolute -left-[1.5%] hidden" />
            <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
              MRP Web Map
            </h2>
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="md:absolute z-[100] flex h-full md:w-1/3 md:pl-[17%] bg-[#063446] md:flex-row flex-col">
            <div className="text-white p-3 text-sm space-y-4">
              <p>
                The map shows MRPs categorized by one or more transportation
                improvement categories.
              </p>
              <p>
                <strong>Roadway</strong> and <strong>Transit</strong> projects
                in this web map are designated as
                <strong>Funded</strong> (prioritized and programmed within
                anticipated revenues) or Unfunded (aspirational projects aligned
                with the Plan’s goals that could move forward if new funding
                becomes available). There are also{" "}
                <strong>Externally Funded</strong> projects that don’t use
                regional dollars, but must be considered due to their impacts on
                the regional network and air quality conformity.
              </p>
            </div>
            <Legend selectedLayer={selectedLayer} />
          </div>
          <button
            className="font-bold z-[100] w-min h-[20px] absolute md:top-0 right-0 m-6"
            onClick={toggleModal}
          >
            <InfoIcon fill="#063446" width="20px" />
          </button>
          <MrpMap />

          <Modal toggleModal={toggleModal}>
            <div className="space-y-4 p-4">
              <p>
                Major Regional Projects (MRPs) are large-scale transportation
                investments that cost more than $40 million and/or significantly
                impact travel across the region.
              </p>
              <p>
                Roadway and Transit projects in this webmap are designated as{" "}
                <strong>Funded</strong> (prioritized and programmed within
                anticipated revenues) or <strong>Unfunded</strong> (aspirational
                projects aligned with the Plan’s goals that could move forward
                if new funding becomes available). There are also{" "}
                <strong>Externally Funded</strong> projects that don’t use
                regional dollars, but must be considered due to their impacts on
                the regional network and air quality conformity. For more
                information on each project, including the budgets from project
                categories they’re funded with, and to view a list of{" "}
                <strong>Unmapped</strong> and <strong>Illustrative</strong>{" "}
                projects, see Appendix F—Financial Plan, linked from
                <a href="http://www.dvrpc.org/plan" target="_blank">
                  http://www.dvrpc.org/plan
                </a>
                .
              </p>
              <p>
                Funded projects are scheduled in one or more of the following
                funding periods, depending on whether the project is located in
                Pennsylvania or New Jersey.
              </p>

              <table>
                <thead className="bg-[#063446] text-white">
                  <tr className="*:py-4">
                    <th>Funding Period</th>
                    <th>Pennsylvania</th>
                    <th>New Jersey</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white [&>*:nth-child(even)]:bg-gray-100">
                  <tr className="*:py-4">
                    <td>1</td>
                    <td>2026–2030 (5)</td>
                    <td>2026–2029 (4)</td>
                  </tr>
                  <tr className="*:py-4">
                    <td>2</td>
                    <td>2031–2036 (6)</td>
                    <td>2030–2036 (6)</td>
                  </tr>
                  <tr className="*:py-4">
                    <td>3</td>
                    <td>2037–2045 (9)</td>
                    <td>2036–2045 (10)</td>
                  </tr>
                  <tr className="*:py-4">
                    <td>4</td>
                    <td>2046–2050 (5)</td>
                    <td>2046–2050 (5)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Modal>
        </div>

        <div className="md:w-[68%] relative border-l-4 border-[#0c2e39]">
          <div className="flex flex-col space-y-6 md:p-6 p-2 text-[#063446]">
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
            <ul className="list-disc ml-4">
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
