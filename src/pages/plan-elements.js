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
import Transportation from "../images/transportation.png"
import Economy from "../images/economy.png"
import Communities from "../images/communities.png"
import Environment from "../images/environment.png"
import TransDot from "../images/trans-dot.png"
import ElemDot from "../images/elem-dot.svg"
import EconDot from "../images/eco-dot.png"
import CommDot from "../images/comm-dot.png"
import EnvDot from "../images/env-dot.png"
import Infrastructure from "../images/infrastructure.png"
import InfraDot from "../images/infra-dot.png"

const elementIndex = {
  transportation: 0,
  economy: 1,
  communities: 2,
  environment: 3,
  infrastructure: 4,
}

const Tabs = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <div className="flex justify-center z-100 h-full">
      <TabGroup
        className="w-full h-full flex flex-col"
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <TabList className="flex md:flex-row flex-col text-white bg-[#063446]">
          <Tab className="p-3 font-bold bg-[#423d59] text-white md:w-1/2 rounded-t-lg aria-selected:border-b-0  border border-white">
            Transportation
          </Tab>
          <Tab className="p-3 font-bold bg-[#711e53] text-white md:w-1/2 rounded-t-lg aria-selected:border-b-0 border border-white">
            Economy
          </Tab>
          <Tab className="p-3 font-bold bg-[#004c6d] text-white md:w-1/2 rounded-t-lg aria-selected:border-b-0 border border-white">
            Communities
          </Tab>
          <Tab className="p-3 font-bold bg-[#006227] text-white md:w-1/2 rounded-t-lg aria-selected:border-b-0 border border-white">
            Environment
          </Tab>
          <Tab className="p-3 font-bold bg-[#147272] text-white md:w-1/2 rounded-t-lg aria-selected:border-b-0 border border-white">
            Infrastructure and Utility Services
          </Tab>
        </TabList>
        <TabPanels className="flex-1 justify-center">
          <TabPanel>
            <div className="text-center bg-[#423d59] text-white md:p-6 p-2">
              <h2 className="md:text-2xl text-xl font-light">
                The Transportation Vision for 2050 is:
              </h2>
              <h2 className="md:text-3xl text-xl font-bold">
                A safe, modern, multimodal, network for all
              </h2>
            </div>
            <img src={Transportation} className="w-1/2 mx-auto" />
            <div className="md:w-[68%] relative mx-auto md:border-l-4 border-[#063446]">
              <div className="flex w-full md:p-4 p-2 relative flex-col">
                <div className="flex space-x-6">
                  <img
                    src={TransDot}
                    className="md:h-[6rem] md:-ml-[4rem] hidden md:block"
                  />
                  <p>
                    Greater Philadelphia has a strong transportation network
                    that includes{" "}
                    <strong>
                      transit, roadways, biking and walking paths, freight rail,
                      and an international port and airport
                    </strong>
                    . However, many facilities are aging and need modernization.
                    Investments in safety, active transportation, and transit
                    will improve health, air quality, and access to the region.
                    The Plan supports a Vision Zero goal to eliminate fatalities
                    and serious injuries on the transportation network by 2050,
                    promotes walking and biking, highlighted by investment in
                    building out the 850-mile Circuit Trails network, and
                    transit that{" "}
                    <strong>
                      connects urban, suburban, and rural communities
                    </strong>
                    .
                  </p>
                </div>
                <h2 className="md:text-2xl text-xl font-bold p-2 text-[#423d59]">
                  Transportation Goals
                </h2>
                <div className="flex space-x-6 md:my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#423d59" />
                    <p className="absolute top-5 left-10 text-5xl font-[scriptorama-markdown-jf]">
                      1
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      A transportation system that is safe and secure for all.
                    </p>
                    <p>
                      There’s increased safety and access to affordable
                      transportation, along with the jobs, services, and
                      opportunities that come with it. Infrastructure updates
                      and service changes are planned with communities,
                      minimizing burdens on them.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6 my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#423d59" />
                    <p className="absolute top-5 left-9 text-5xl font-[scriptorama-markdown-jf]">
                      2
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      Connected and integrated transportation facilities for all
                      modes in a state of good repair.
                    </p>
                    <p>
                      Users can expect reliable, predictable trips made possible
                      by sustained investments in transit, roads, and bridges.
                      Fully funded operations and maintenance ensure fewer
                      disruptions and safer conditions. Transparent budgeting
                      and long-term capital planning increase confidence in the
                      system.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6 my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#423d59" />
                    <p className="absolute top-5 left-9 text-5xl font-[scriptorama-markdown-jf]">
                      3
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      Reduced car dependency and per-capita vehicle miles
                      traveled.
                    </p>
                    <p>
                      There are fewer people driving alone, more people
                      traveling by resource-efficient mobility options, such as
                      walking, biking, and taking transit, and reduced air
                      pollution through the use of twenty-first-century
                      technologies.
                    </p>
                  </div>
                </div>
                <Link
                  className="md:text-2xl text-lg mx-auto p-2 bg-[#423d59] text-white my-4"
                  to="/strategies"
                >
                  Strategies for Achieving the Vision
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="text-center bg-[#711e53] text-white md:p-6 p-2">
              <p className="md:text-2xl text-lg">
                The Economy Vision for 2050 is:
              </p>
              <p className="md:text-3xl text-lg font-bold">
                An innovative and connected economy with opportunity and shared
                prosperity
              </p>
            </div>
            <img src={Economy} className="w-1/2 mx-auto" />
            <div className="md:w-[68%] relative mx-auto md:border-l-4 border-[#063446]">
              <div className="flex w-full md:p-4 p-2 relative flex-col">
                <div className="flex space-x-6">
                  <img
                    src={EconDot}
                    className="md:h-[6rem] md:-ml-[4rem] hidden md:block"
                  />
                  <p className="md:ml-[1.5%]">
                    Greater Philadelphia’s economy benefits from{" "}
                    <strong>
                      its location along the Northeast Corridor, diverse
                      industries, and world-class educational and healthcare
                      institutions
                    </strong>
                    . To reach its full potential, the region must remain a
                    place where workers want to live and businesses can grow.
                    Expanding access to opportunity through workforce
                    development, innovation, and entrepreneurship will help
                    families achieve financial mobility and position Greater
                    Philadelphia as a{" "}
                    <strong>
                      thriving, resilient economy in a changing world
                    </strong>
                    .
                  </p>
                </div>
                <h2 className="md:text-2xl text-xl font-bold p-2 text-[#711e53]">
                  Economic Goals
                </h2>
                <div className="flex space-x-6 md:my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#ae5b88" />
                    <p className="absolute top-5 left-10 text-5xl font-[scriptorama-markdown-jf]">
                      1
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      A well-trained and adaptable regional workforce.{" "}
                    </p>
                    <p>
                      Residents experience economic mobility through access to
                      good schools in all districts, jobs that meet and exceed
                      the cost of living in the region, and capital for new and
                      growing businesses. Additional focus is placed on
                      expanding opportunities to residents who have been denied
                      access to jobs with livable wages.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6 md:my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#ae5b88" />
                    <p className="absolute top-5 left-9 text-5xl font-[scriptorama-markdown-jf]">
                      2
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      A variety of regional economic sectors.
                    </p>
                    <p>
                      The region anticipates the impacts of global market
                      forces, economic shocks, and extreme weather risks and
                      mitigates them through sectoral balance and connectivity.
                      As a result, businesses and workers are able to recover
                      quickly.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6 md:my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#ae5b88" />
                    <p className="absolute top-5 left-9 text-5xl font-[scriptorama-markdown-jf]">
                      3
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      Reliable physical and digital access to regional,
                      national, and global resources and markets.
                    </p>
                    <p>
                      Food and goods production and growth, especially at the
                      local level, occur at rates that meet current needs
                      without negative environmental or social impacts in the
                      present or future.
                    </p>
                  </div>
                </div>
                <Link
                  className="md:text-2xl text-lg mx-auto p-2 bg-[#711e53] text-white my-4"
                  to="/strategies"
                >
                  Strategies for Achieving the Vision
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="text-center bg-[#004c6d] text-white md:p-6 p-2">
              <p className="md:text-2xl text-lg">
                The Communities Vision for 2050 is:
              </p>
              <p className="md:text-3xl text-lg font-bold">
                Integrated, healthy, and walkable communities
              </p>
            </div>
            <img src={Communities} className="w-1/2 mx-auto" />
            <div className="md:w-[68%] relative mx-auto md:border-l-4 border-[#063446]">
              <div className="flex w-full md:p-4 p-2 relative flex-col">
                <div className="flex space-x-6">
                  <img
                    src={CommDot}
                    className="md:h-[6rem] md:-ml-[4rem] hidden md:block"
                  />
                  <p className="md:ml-[1.5%]">
                    Livable communities make the most of existing infrastructure
                    to <strong>deliver services efficiently</strong>. They offer
                    a mix of housing types, affordable options, and safe,
                    convenient ways to walk, bike, and ride transit. With
                    well-maintained public spaces and strong civic
                    infrastructure, these communities promote{" "}
                    <strong>active, healthy living</strong> and create{" "}
                    <strong>vibrant, resilient places for all</strong>.
                  </p>
                </div>
                <p className="md:text-2xl text-lg font-bold p-2 text-[#004c6d]">
                  Community Goals
                </p>
                <div className="flex space-x-6 md:my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#0078ae" />
                    <p className="absolute top-5 left-10 text-5xl font-[scriptorama-markdown-jf]">
                      1
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      Accessible and affordable housing options and cost of
                      living that accommodate all ages and incomes.
                    </p>
                    <p>
                      Affordable and economically mixed communities are safe,
                      accessible, and built for all ages. Growth is accommodated
                      without the displacement of the existing population, which
                      allows all residents to benefit.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6 md:my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#0078ae" />
                    <p className="absolute top-5 left-9 text-5xl font-[scriptorama-markdown-jf]">
                      2
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      Infill development that creates and protects the unique
                      qualities and sense of place in the region’s Centers,
                      communities, and neighborhoods.
                    </p>
                    <p>
                      Strong civic infrastructure and social cohesion help
                      residents withstand, adapt to, and recover from adverse
                      situations, such as extreme weather events or social
                      disruptions.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6 md:my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#0078ae" />
                    <p className="absolute top-5 left-9 text-5xl font-[scriptorama-markdown-jf]">
                      3
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      Socioeconomically integrated neighborhoods with quality
                      education that is accessible to all.
                    </p>
                    <p>
                      Growth is focused in mixed-use, walkable Centers that make
                      efficient use of infrastructure, provide access to
                      essential services, and consume less land and other
                      resources.
                    </p>
                  </div>
                </div>
                <Link
                  className="md:text-2xl text-lg mx-auto p-2 bg-[#004c6d] text-white my-4"
                  to="/strategies"
                >
                  Strategies for Achieving the Vision
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="text-center bg-[#006227] text-white md:p-6 p-2">
              <p className="md:text-2xl text-lg">
                The Environment Vision for 2050 is:
              </p>
              <p className="md:text-3xl text-lg font-bold">
                A preserved and restored natural environment and healthy
                ecological systems
              </p>
            </div>
            <img src={Environment} className="w-1/2 mx-auto" />
            <div className="md:w-[68%] relative mx-auto md:border-l-4 border-[#063446]">
              <div className="flex w-full md:p-4 p-2 relative flex-col">
                <div className="flex space-x-6">
                  <img
                    src={EnvDot}
                    className="md:h-[6rem] md:-ml-[4rem] hidden md:block"
                  />
                  <p className="md:ml-[1.5%]">
                    From the Pinelands to the Brandywine Valley, and from
                    neighborhood parks to riverside trails, Greater Philadelphia
                    offers a wealth of green spaces. Expanding and restoring
                    natural areas—forests, wetlands, tree canopy, parks, and
                    natural infrastructure—can improve air and water quality,
                    provide wildlife habitats, reduce heat, and{" "}
                    <strong>support community health</strong>. The region is
                    also working toward a target of{" "}
                    <strong>
                      preserving one million acres of undeveloped land by 2040
                    </strong>
                    . Increasing protected open space and building out the
                    Circuit Trails will expand affordable{" "}
                    <strong>access to green space</strong> throughout the
                    region. Greener places also contribute to lower crime,
                    reduced chronic disease, and improved well-being,
                    productivity, and learning.
                  </p>
                </div>
                <p className="md:text-2xl text-lg font-bold p-2 text-[#006227]">
                  Environment Goals
                </p>
                <div className="flex space-x-6 md:my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#239750" />
                    <p className="absolute top-5 left-10 text-5xl font-[scriptorama-markdown-jf]">
                      1
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      A regional-scale network of protected open space and green
                      urban infrastructure.{" "}
                    </p>
                    <p>
                      Nature-based solutions are prioritized and expanded for
                      adapting to intense precipitation and high heat events in
                      communities.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6 md:my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#239750" />
                    <p className="absolute top-5 left-9 text-5xl font-[scriptorama-markdown-jf]">
                      2
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      Healthy air and water for people and wildlife.
                    </p>
                    <p>
                      A connected network of protected, restored, and
                      well-managed forests, wetlands, and waterways sustains
                      biodiversity, absorbs stormwater, and protects water
                      quality.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6 md:my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#239750" />
                    <p className="absolute top-5 left-9 text-5xl font-[scriptorama-markdown-jf]">
                      3
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      Access to high-quality parks, natural areas, and passive
                      recreational opportunities for all.
                    </p>
                    <p>
                      Current and future generations enjoy access to parks, open
                      space, natural areas, and outdoor recreation.
                    </p>
                  </div>
                </div>
                <Link
                  className="md:text-2xl text-lg mx-auto p-2 bg-[#006227] text-white my-4"
                  to="/strategies"
                >
                  Strategies for Achieving the Vision
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="text-center bg-[#147272] text-white md:p-6 p-2">
              <p className="md:text-2xl text-lg">
                The Infrastructure and Utility Services Vision for 2050 is:
              </p>
              <p className="md:text-3xl text-lg font-bold">
                Clean, reliable, and affordable infrastructure and utility
                services resilient to the effects of extreme weather
              </p>
            </div>
            <img src={Infrastructure} className="w-1/2 mx-auto" />
            <div className="md:w-[68%] relative mx-auto md:border-l-4 border-[#063446]">
              <div className="flex w-full md:p-4 p-2 relative flex-col">
                <div className="flex space-x-6">
                  <img
                    src={InfraDot}
                    className="md:h-[6rem] md:-ml-[4rem] hidden md:block"
                  />
                  <p className="md:ml-[1.5%]">
                    Achieving regional goals for power and other infrastructure
                    systems across multiple scales will help deliver improved
                    air quality and benefits to public health. Ensuring the
                    reliability and affordability of power, heating, and cooling
                    services will{" "}
                    <strong>
                      increase comfort and quality of life, reduce utility
                      costs, and improve the performance
                    </strong>{" "}
                    of the buildings, vehicles, and infrastructure systems on
                    which we all depend.
                  </p>
                </div>
                <p className="md:text-2xl text-lg font-bold p-2 text-[#147272]">
                  Infrastructure and Utility Services Goals
                </p>
                <div className="flex space-x-6 md:my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#177172" />
                    <p className="absolute top-5 left-10 text-5xl font-[scriptorama-markdown-jf]">
                      1
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      Affordable access to heating, cooling, and power services
                      for every household, business, and institution in the
                      region.
                    </p>
                    <p>
                      Reliable and affordable utility services, including
                      broadband, electricity, natural gas, water, and
                      wastewater, are available for residents and businesses.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6 md:my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#177172" />
                    <p className="absolute top-5 left-9 text-5xl font-[scriptorama-markdown-jf]">
                      2
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      Infrastructure that is reliable and resilient to
                      extreme-weather disruptions.
                    </p>
                    <p>
                      Reliable access to heating, cooling, and power for
                      households and businesses. Systems are prepared for
                      extreme weather events, disruptions, and related impacts.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6 md:my-4">
                  <div className="relative text-white md:-ml-[4rem] hidden md:inline-block w-fit">
                    <ElemDot className="md:h-[6rem] " fill="#177172" />
                    <p className="absolute top-5 left-9 text-5xl font-[scriptorama-markdown-jf]">
                      3
                    </p>
                  </div>
                  <div>
                    <p className="md:text-2xl text-lg font-bold">
                      Regionwide implementation of innovative technologies
                      around heating, cooling, power, mobility, and goods
                      movement that supports community health, reduces air
                      pollution, and provides economic opportunities.
                    </p>
                    <p>
                      Reduced local air pollution is achieved through efficient
                      land use, transportation, and building systems, as well as
                      investments to modernize infrastructure.
                    </p>
                  </div>
                </div>
                <Link
                  className="md:text-2xl text-lg mx-auto p-2 bg-[#147272] text-white my-4"
                  to="/strategies"
                >
                  Strategies for Achieving the Vision
                </Link>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}

const WhatIsThePlan = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (typeof window !== undefined) {
      const params = new URLSearchParams(window.location.search)
      const element = params.get("element")
      setSelectedIndex(element ? elementIndex[element] : 0)
    }
  }, [setSelectedIndex])

  useEffect(() => {
    if (typeof window !== undefined) {
      const params = new URLSearchParams(window.location.search)
      params.set("element", Object.keys(elementIndex)[selectedIndex])
      window.history.replaceState({}, "", "?" + params)
    }
  }, [selectedIndex, setSelectedIndex])

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
            <Link className="underline" to="/vision">
              Vision
            </Link>
            <ChevronRightIcon width="1.5%" />
            <Link>Plan Elements</Link>
          </div>
        </div>
        <div className="text-[#dfebf5] w-full bg-[#0c2e39] flex flex-col relative px-10 py-6 space-y-6 mt-[10%]">
          <div className="md:w-[68%] mx-auto space-y-4">
            <h2 className="md:text-3xl text-xl font-bold">Plan Elements</h2>
            <p className="md:text-2xl text-lg pb-0 z-50">
              The Plan is organized into five key elements—
              <strong>Transportation, Economy, Communities, Environment</strong>
              , and <strong>Infrastructure and Utility Services</strong>—each
              with three goals that guide our regional vision. Explore the
              elements below to see what the vision looks like in practice.
            </p>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Tabs
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
      </div>
    </Layout>
  )
}

export default WhatIsThePlan
