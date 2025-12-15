import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
import Dot from "../images/dot.svg"
import { ChevronRightIcon } from "@heroicons/react/16/solid"
import { ChevronDownIcon } from "@heroicons/react/16/solid"
import Strategies from "../components/strategies.json"
import Select from "react-select"
import Accordion from "../components/accordion"

const WhatIsThePlan = () => {
  const strategies = { ...Strategies }
  const [element, setElement] = useState("")
  const [party, setParty] = useState([])
  const elementOptions = [
    { value: "Transportation", label: "Transportation" },
    { value: "Economy", label: "Economy" },
    { value: "Communities", label: "Communities" },
    { value: "Environment", label: "Environment" },
    {
      value: "Infrastructure & Utility Services",
      label: "Infrastructure & Utility Services",
    },
  ]
  const partyOptions = [
    { value: "Municipalities", label: "Municipalities" },
    { value: "DVRPC", label: "DVRPC" },
    { value: "Counties", label: "Counties" },
    { value: "DOTs", label: "DOTs" },
    { value: "Transit Agencies", label: "Transit Agencies" },
    { value: "Federal Agencies", label: "Federal Agencies" },
    { value: "State Agencies", label: "State Agencies" },
    { value: "TMAs", label: "TMAs" },
    {
      value: "Ports & Freight Operators",
      label: "Ports & Freight Operators",
    },
    { value: "Emergency Responders", label: "Emergency Responders" },
    { value: "Toll Authorities", label: "Toll Authorities" },
    { value: "Nonprofits", label: "Nonprofits" },
    { value: "School Districts", label: "School Districts" },
    { value: "Academia", label: "Academia" },
    {
      value: "Professional Organizations",
      label: "Professional Organizations",
    },
    { value: "Private Sector", label: "Private Sector" },
    { value: "PPP", label: "PPP" },
    {
      value: "Economic Development Organizations",
      label: "Economic Development Organizations",
    },
    {
      value: "Mission-Driven Lending Institutions",
      label: "Mission-Driven Lending Institutions",
    },
    { value: "Utilities", label: "Utilities" },
    {
      value: "Regional Transmission Organizations",
      label: "Regional Transmission Organizations",
    },
  ]
  const [filteredStrategies, setFilteredStrategies] = useState()
  const [filter, setFilter] = useState("")
  useEffect(() => {
    let ret = []
    if (element.length > 0) {
      element.map(el => (ret = [...ret, ...strategies[el.value].strategies]))
      ret = ret.filter(
        data =>
          data.name.toLowerCase().includes(filter.toLowerCase()) ||
          data.description.toLowerCase().includes(filter.toLowerCase())
      )
    }
    setFilteredStrategies(ret)
  }, [element, party, setFilteredStrategies, filter])

  return (
    <Layout>
      <div className="bg-[#cbe5f3] flex flex-col items-center">
        <div className="w-full h-full">
          <img src={Bg} className="absolute object-cover h-2/5 w-full" />
          <div className="flex text-white font-bold w-[70%] mx-auto z-50 relative items-center underline mt-4">
            <Link to="/">Home</Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Strategies</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] bg-[#063446] w-full flex flex-col relative px-12 py-6 mt-[10%]">
          <div className="w-[70%] mx-auto space-y-4">
            <h2 className="text-3xl font-bold">
              Strategies: Turning Vision into Action
            </h2>
            <p className="text-2xl pb-0 z-50">
              Change won't come overnight, and it won't happen by doing things
              the same old way. Achieving this vision will take{" "}
              <strong>bold action and collaboration</strong> acrosss the region,
              with everyone playing a part.
            </p>
            <p className="text-2xl pb-0 z-50">
              Even though each goal and strategy shows up just once,
              crosscutting themes - like how goods move around the region, how
              we use land, how easy it is to get where you need to go, and how
              we use new technology - pop up throughout the plan.
            </p>
          </div>
        </div>
        <div className="w-[68%] relative border-l-4 border-[#063446]">
          <div className="flex items-center w-full p-4 relative">
            <Dot width="3%" className="absolute -left-[1.5%]" />
            <p className="text-[#063446] ml-[1.5%]">
              <strong>
                Explore how the region's five Plan Elements are being put into
                action
              </strong>{" "}
              through high-level strategies and specific implementation actions.
              Filter by these topics, responsible party, or use the keyword
              search to find the initiatives most relevant to your work.
            </p>
          </div>
        </div>
        <div className="w-[68%] relative border-l-4 border-[#063446]">
          <div className="flex w-full p-4 relative flex-col">
            <strong>Start your search:</strong>
            <span>Element</span>
            <Select
              options={elementOptions}
              isMulti
              value={element}
              onChange={setElement}
            />
            <span>Responsible Parties</span>
            <Select
              options={partyOptions}
              isMulti
              value={party}
              onChange={setParty}
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
            <div className="flex items-center w-full p-4 relative">
              <Dot width="3%" className="absolute -left-[1.5%]" />
              <h2 className="text-2xl text-[#063446] font-bold ml-[1.5%]">
                Strategies for Achieving Our Goals
              </h2>
            </div>
            <div className="flex flex-col space-y-6 p-6 pt-0">
              <div className="flex w-full p-4 relative flex-col">
                {filteredStrategies &&
                  filteredStrategies.length > 0 &&
                  filteredStrategies.map(strategy => (
                    <div className="flex items-start space-x-2">
                      <span
                        className="h-[10px] w-[10px] block mt-2 p-1"
                        style={{ backgroundColor: "#006227" }}
                      ></span>

                      <div>
                        <p className="font-bold text-xl text-[#006227]">
                          {strategy.name}{" "}
                          <span className="italic">({strategy.element})</span>
                        </p>
                        <p>{strategy.description}</p>
                        <div className="bg-[#b9e0c7] p-2 px-4">
                          <Accordion
                            label="Implementation Actions"
                            color="#006227"
                          >
                            {strategy.actions.map(action => {
                              return (
                                <>
                                  {party.length > 0 &&
                                    action.tags.some(value =>
                                      party
                                        .map(term => term.value)
                                        .includes(value)
                                    ) && <p>{action.description}</p>}
                                  {!party.length && (
                                    <p>
                                      {action.description} (
                                      {action.tags.join(", ")})
                                    </p>
                                  )}
                                </>
                              )
                            })}
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WhatIsThePlan
