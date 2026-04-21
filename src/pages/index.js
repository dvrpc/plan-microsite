import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Bg from "../images/bg.png"
import Connections from "../images/connections-2050.png"
import RegionOutline from "../images/region-outline.svg"
import Hero from "../images/home-image.png"
import Dot from "../images/dot.svg"
import Bubbles from "../components/bubbles"
import HowWeFund from "../images/how-we-fund.png"
import LookLike from "../images/look-like.png"
import ShapingFuture from "../images/shaping-future.png"
import WhatIsThePlan from "../images/what-is-the-plan.png"
import WhereWeHeaded from "../images/where-we-headed.png"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"

const ExploreLink = ({ children }) => {
  return (
    <div className="flex items-center gap-x-6">
      <Dot className="max-w-[1.25rem]" />
      <div>{children}</div>
    </div>
  )
}

const IndexPage = () => {
  const panels = [
    "what-is-the-plan",
    "shaping-future",
    "look-like",
    "how-we-fund",
    "make-it-happen",
  ]

  const closePanels = id => {
    panels.map(panel => {
      if (panel !== id && document.querySelector(`#${panel}`)) {
        const openState = document
          .querySelector(`#${panel}`)
          .getAttribute("data-headlessui-state")
        if (openState === "open")
          document.querySelector(`#${panel}`).firstChild.click()
      }
    })
  }

  return (
    <Layout>
      <div
        className="bg-[#cce5f3] flex flex-col items-center relative bg-cover"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <img
          src={Connections}
          className="z-10 md:my-20 my-10 w-2/3 md:w-1/4 drop-shadow-lg"
        />
      </div>
      <div className="text-white mx-auto w-full bg-[#0c2e39] flex flex-col items-center text-center relative md:px-[16%] px-4">
        <RegionOutline className="absolute top-[15%] lg:top-[10%] z-10 md:w-2/5 lg:w-[30%]" />
        <h1 className="md:text-3xl text-lg md:p-12 pb-0 z-50 p-2 drop-shadow-lg">
          <span className="italic">Update: Connections 2050</span> is Greater
          Philadelphia's Long-Range Plan (Plan). The Plan serves as the
          blueprint to guide growth and development in our region and to
          prioritize funding for capital transportation investment accordingly.
        </h1>
        <h2 className="md:text-5xl z-50 md:mt-16 md:mb-18 my-8 drop-shadow-lg">
          The Regional Vision for 2050 is a Greater Philadelphia that provides:
        </h2>

        <div className="md:-ml-[5%] md:-mr-[5%] md:mt-16">
          <Bubbles />
        </div>
      </div>

      <div className="w-full flex flex-col">
        <Link
          className="text-3xl underline my-6 md:my-12 p-2 bg-[#0c2e39] text-white text-center mx-auto"
          to="/vision"
        >
          Learn more about the Vision
        </Link>
        <h2 className="text-4xl bg-[#0c2e39] text-white font-bold p-4 pl-[16%]">
          Explore the Plan
        </h2>

        <div className="md:w-[68%] relative border-l-4 border-[#0c2e39] min-h-[100vh] md:mx-auto space-y-8 pl-6 flex flex-col py-4">
          <Disclosure as="div" id="what-is-the-plan">
            <DisclosureButton className="w-full">
              <button
                className="flex items-center gap-x-4 md:-ml-[2.25rem] w-full"
                onClick={() => closePanels("what-is-the-plan")}
              >
                <Dot className="max-w-[1.25rem] md:block hidden" />
                <p className="md:text-4xl underline md:w-1/2 block text-left">
                  What Is the Plan?
                </p>
              </button>
            </DisclosureButton>
            <DisclosurePanel
              className="w-full flex md:flex-row flex-col"
              id="what-is-the-plan"
            >
              <p className="md:w-1/3 block text-left">
                DVRPC is mandated to develop a long-range transportation plan
                every four years to ensure orderly growth and development of the
                region over the next few decades.{" "}
                <em>Update: Connections 2050</em> includes a shared regional
                vision, a set of goals to support that vision, and strategies
                for local, regional, and state partners to make progress towards
                those goals. It also includes a financial plan that programs $78
                billion in local, state, and federal capital funding.
              </p>
              <img
                src={WhatIsThePlan}
                class="right-0 md:absolute md:top-0 md:w-[65%] md:-right-[20%]"
              />
            </DisclosurePanel>
          </Disclosure>
          <Disclosure as="div" id="shaping-future">
            <DisclosureButton className="w-full">
              <button
                className="flex items-center gap-x-4 md:-ml-[2.25rem] w-full"
                onClick={() => closePanels("shaping-future")}
              >
                <Dot className="max-w-[1.25rem] md:block hidden" />
                <p className="md:text-4xl underline md:w-1/2 block text-left">
                  What Is Shaping Our Future?
                </p>
              </button>
            </DisclosureButton>
            <DisclosurePanel className="w-full flex md:flex-row flex-col">
              <p className="md:w-1/3 block text-left">
                The Plan analyzes key trends shaping our future and provides
                quantitative indicators to reveal where we are now and to track
                progress towards the region’s vision and goals.
              </p>
              <img
                src={ShapingFuture}
                class="right-0 md:absolute md:top-0 md:w-[65%] md:-right-[20%]"
              />
            </DisclosurePanel>
          </Disclosure>
          <Disclosure as="div" id="look-like">
            <DisclosureButton className="w-full">
              <button
                className="flex items-center gap-x-4 md:-ml-[2.25rem] w-full"
                onClick={() => closePanels("look-like")}
              >
                <Dot className="max-w-[1.25rem] md:block hidden" />
                <p className="md:text-4xl underline md:w-1/2 block text-left">
                  What Do We Want the Region to Look Like in 2050?
                </p>
              </button>
            </DisclosureButton>
            <DisclosurePanel className="w-full flex md:flex-row flex-col">
              <p className="md:w-1/3 block text-left">
                At the heart of a long-range plan is a broadly shared regional
                vision that articulates where we collectively want the region to
                be in 25 years. This vision was generated through extensive
                public engagement.
              </p>
              <img
                src={LookLike}
                class="right-0 md:absolute md:top-0 md:w-[65%] md:-right-[20%]"
              />
            </DisclosurePanel>
          </Disclosure>
          <Disclosure as="div" id="how-we-fund">
            <DisclosureButton className="w-full">
              <button
                className="flex items-center gap-x-4 md:-ml-[2.25rem] w-full"
                onClick={() => closePanels("how-we-fund")}
              >
                <Dot className="max-w-[1.25rem] md:block hidden" />
                <p className="md:text-4xl underline md:w-1/2 block text-left">
                  How Will We Fund the Future?
                </p>
              </button>
            </DisclosureButton>
            <DisclosurePanel className="w-full flex md:flex-row flex-col">
              <p className="md:w-1/3 block text-left">
                The Plan outlines capital investments in transportation
                infrastructure to help achieve the Plan’s vision in the coming
                decades.
              </p>
              <img
                src={HowWeFund}
                class="right-0 md:absolute md:top-0 md:w-[65%] md:-right-[20%]"
              />
            </DisclosurePanel>
          </Disclosure>
          <Disclosure as="div" id="make-it-happen">
            <DisclosureButton className="w-full">
              <button
                className="flex items-center gap-x-4 md:-ml-[2.25rem] w-full"
                onClick={() => closePanels("make-it-happen")}
              >
                <Dot className="max-w-[1.25rem] md:block hidden" />
                <p className="md:text-4xl underline md:w-1/2 block text-left">
                  How Can We Make It Happen?
                </p>
              </button>
            </DisclosureButton>
            <DisclosurePanel className="w-full flex md:flex-row flex-col">
              <p className="md:w-1/3 block text-left">
                Achieving the vision requires building partnerships and the
                dedicated efforts and cooperation of many actors across the
                public and private sectors.
              </p>
              <img
                src={Hero}
                class="right-0 md:absolute md:top-0 md:w-[65%] md:-right-[20%]"
              />
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
