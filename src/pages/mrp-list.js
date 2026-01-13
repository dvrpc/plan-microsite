import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
import Dot from "../images/dot.svg"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import { ChevronDownIcon } from "@heroicons/react/16/solid"
import Projects from "../components/projects.json"
import Select from "react-select"
import Accordion from "../components/accordion"
import { Tooltip } from "react-tippy"

const MRPList = () => {
  const projects = { ...Projects }
  const [state, setState] = useState([])
  const [funding, setFunding] = useState([])
  const [filteredProjects, setFilteredProjects] = useState()
  const [filter, setFilter] = useState("")
  const [sortKey, setSortKey] = useState("")
  const [sortKeyHist, setSortKeyHist] = useState([])

  const sortTable = string => {
    setSortKey(string)
    setSortKeyHist(prev => [...prev, sortKey])
    if (sortKeyHist.length === 2) setSortKeyHist([])
  }

  const stateOptions = [
    { value: "PA", label: "PA" },
    { value: "NJ", label: "NJ" },
  ]
  const fundingOptions = [
    { value: "Roadway Illustrative", label: "Roadway Illustrative" },
    { value: "Roadway Funded", label: "Roadway Funded" },
    { value: "Roadway Unfunded", label: "Roadway Unfunded" },
    { value: "Transit Funded", label: "Transit Funded" },
    { value: "Transit Unfunded", label: "Transit Unfunded" },
    { value: "Externally Funded", label: "Externally Funded" },
    { value: "Externally Unfunded", label: "Externally Unfunded" },
  ]
  const fundingHex = {
    "Roadway Funded": "#0078ae",
    "Roadway Unfunded": "#67abd1",
    "Transit Funded": "#00783e",
    "Transit Unfunded": "#bcd85f",
    "Externally Funded": "#704775",
    "Externally Unfunded": "#ad5b87",
    "Roadway Illustrative": "#4b4c4d",
  }

  useEffect(() => {
    let projectsCopy = { ...projects }
    if (state.length > 0) {
      const states = state.map(option => option.value)
      Object.keys(projectsCopy).map(key => {
        projectsCopy[key] = projectsCopy[key].filter(project =>
          states.includes(project.state)
        )
      })
    }
    if (funding.length > 0) {
      let ret = {}
      funding.map(el => {
        ret[el.value] = projectsCopy[el.value]
      })
      projectsCopy = { ...ret }
    }
    if (sortKey) {
      if (sortKeyHist.length < 2) {
        Object.keys(projectsCopy).map(key => {
          projectsCopy[key] = projectsCopy[key].sort(
            (a, b) => a[sortKey] > b[sortKey]
          )
        })
      } else if (sortKeyHist.length === 2) {
        Object.keys(projectsCopy).map(key => {
          projectsCopy[key] = projectsCopy[key].sort(
            (a, b) => a[sortKey] < b[sortKey]
          )
        })
      }
    }
    let arr = Object.values(projectsCopy).flat()
    if (filter) {
      arr = arr.filter(
        item =>
          item.id.includes(filter) ||
          item.facility.toLowerCase().includes(filter) ||
          item.scope.toLowerCase().includes(filter) ||
          item.location.toLowerCase().includes(filter) ||
          item.period.toLowerCase().includes(filter) ||
          item.cost.toLowerCase().includes(filter) ||
          item.categories.toLowerCase().includes(filter)
      )
    }
    setFilteredProjects([...arr])
  }, [state, funding, setFilteredProjects, filter, sortKey, sortKeyHist])

  return (
    <Layout>
      <div className="bg-[#cbe5f3] flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[70%] mx-auto z-50 relative items-center underline mt-4">
            <Link to="/">Home</Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Major Regional Project List</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] bg-[#063446] w-full flex flex-col relative px-12 py-6 mt-[10%]">
          <div className="w-[70%] mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Major Regional Project List</h2>
            <p className="text-2xl pb-0 z-50">
              Explore all projects included in Update: Connections 2050. Each
              project is classified as Funded, Unfunded, Illustrative, or
              Externally Funded based on its status and funding source. Use the
              filters below to sort and learn about each project.
            </p>
          </div>
        </div>
        <div className="w-[68%] relative border-l-4 border-[#063446]">
          <div className="flex w-full p-4 relative flex-col">
            <Tooltip title="Welcome to React" position="bottom" trigger="click">
              <p>Click here to show popup</p>
            </Tooltip>
            <strong>Start your search:</strong>
            <span>State</span>
            <Select
              options={stateOptions}
              isMulti
              value={state}
              onChange={setState}
              styles={{
                multiValue: (provided, { data }) => ({
                  ...provided,
                  backgroundColor: "#063446",
                  color: "#ffffff",
                }),
                multiValueLabel: (provided, { data }) => ({
                  ...provided,
                  color: "#ffffff",
                }),
              }}
            />
            <span>Funding Category</span>
            <Select
              options={fundingOptions}
              isMulti
              value={funding}
              onChange={setFunding}
              styles={{
                multiValue: (provided, { data }) => ({
                  ...provided,
                  backgroundColor: fundingHex[data.value],
                  color: "#ffffff",
                }),
                multiValueLabel: (provided, { data }) => ({
                  ...provided,
                  color: "#ffffff",
                }),
              }}
            />
            <span>Keyword</span>
            <input
              type="text"
              onChange={e => setFilter(e.target.value)}
              value={filter}
              className="input"
            />
          </div>
        </div>

        <div className="w-full bg-[#eaf3fb] relative">
          <div className="border-l-4 border-[#0c2e39] w-[68%] mx-auto">
            <div className="flex flex-col space-y-6 p-6 pt-0">
              <table className="table-auto">
                <thead className="text-left">
                  <tr>
                    <th>
                      <Tooltip
                        title="Unique identifier for Major Regional Projects (MRPs). The first two letters indicate the state; the third letter indicates project type—roadway (R), transit (T), illustrative (I), or external (X); and the final three digits are a unique number."
                        position="top"
                        trigger="click"
                      >
                        <p>MRP ID</p>
                      </Tooltip>
                    </th>
                    <th>
                      <Tooltip
                        title="The name of the road, bridge, rail line, or other asset involved in the project, often with a few words that describe what will be done (for example, “U.S. 422 Reconstruction”)."
                        position="top"
                        trigger="click"
                      >
                        <p>Facility</p>
                      </Tooltip>
                    </th>
                    <th>
                      <Tooltip
                        title="A short summary of the work planned for this project within the listed budget and timeframe. More detailed descriptions are included in the Transportation Improvement Program (TIP) once the project moves into the first two funding periods."
                        position="top"
                        trigger="click"
                      >
                        <p>Project Scope</p>
                      </Tooltip>
                    </th>
                    <th>
                      <Tooltip
                        title="Shows which county or counties in the nine-county DVRPC region the project is located in."
                        position="top"
                        trigger="click"
                      >
                        <p>Location</p>
                      </Tooltip>
                    </th>
                    <th>
                      <Tooltip
                        title="Funded projects are scheduled in one or more of the following funding periods, depending on whether the project is located in Pennsylvania or New Jersey."
                        position="top"
                        trigger="click"
                      >
                        <p>Plan Period</p>
                      </Tooltip>
                    </th>
                    <th>
                      <Tooltip
                        title="Funded MRPs are expressed in Year-of-expenditure dollars, whereas 2025 base cost dollars are used to represent Unfunded, Illustrative, and Externally Funded projects."
                        position="top"
                        trigger="click"
                      >
                        <p>Cost</p>
                      </Tooltip>
                    </th>
                    <th>
                      <Tooltip
                        title="Transit MRPs are categorized by their primary purpose—such as preserving or expanding the system. Categories include T1. Transit Preservation and Modernization 
T2. Transit Operational Improvements
T3. Transit System Expansion
T4. Transit Other
Roadway MRPs often address multiple goals at once, such as improving safety, operations, pavement conditions, and green transportation. Categories include R1. Pavement Preservation and Modernization
R2. Bridge Preservation
R3. Substantive Safety
R4. Mobility Operational Improvements
R5. Roadway System Expansion
R6. Green Transportation"
                        position="top"
                        trigger="click"
                      >
                        <p>Project Categories/Sponsor</p>
                      </Tooltip>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects &&
                    filteredProjects.length > 0 &&
                    filteredProjects.map((project, idx) => (
                      <>
                        {filteredProjects[idx - 1]?.funding !==
                          project.funding && (
                          <tr>
                            <td
                              className="text-2xl font-bold w-full text-white"
                              style={{
                                backgroundColor: fundingHex[project.funding],
                              }}
                              colspan="7"
                            >
                              {project.funding}
                            </td>
                          </tr>
                        )}
                        <tr class="even:bg-gray-50">
                          <td>{project.id}</td>
                          <td>{project.facility}</td>
                          <td>{project.scope}</td>
                          <td>{project.location}</td>
                          <td>{project.period}</td>
                          <td>{project.cost}</td>
                          <td>{project.categories}</td>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MRPList
