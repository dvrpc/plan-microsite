import React from "react"
import Purple from "../images/purple.svg"
import Pink from "../images/pink.svg"
import Blue from "../images/blue.svg"
import Green from "../images/green.svg"
import Turq from "../images/turq.svg"
import Hero from "../images/home-image.png"
import { Link } from "gatsby"

const Bubbles = () => {
  return (
    <div
      className="md:space-x-2 md:[&>*]:w-[15rem] md:[&>*]:h-auto w-full [&>*]:flex [&>*]:items-center [&>*]:justify-center text-center items-center md:my-12 font-[Inclusive Sans]! leading-tight gap-y-4"
      id="bubbles"
    >
      <div className="relative">
        <Purple width="100%" className="z-10" />
        <p className="z-50 absolute md:p-3 p-5">
          A safe, modern, multimodal{" "}
          <Link
            to="/plan-elements?element=transportation"
            className="font-bold underline text-white"
          >
            Transportation
          </Link>{" "}
          network for all
        </p>
      </div>
      <div className="relative">
        <Pink width="100%" className="absolute z-10" />
        <p className="z-50 absolute md:p-3 p-5">
          An innovative and connected{" "}
          <Link
            to="/plan-elements?element=economy"
            className="font-bold underline text-white"
          >
            Economy
          </Link>{" "}
          with opportunity and shared prosperity for all
        </p>
      </div>
      <div className="relative">
        <Blue width="100%" className="absolute z-10" />
        <p className="z-50 absolute md:p-3 p-5">
          Healthy, walkable, and vibrant{" "}
          <Link
            to="/plan-elements?element=communities"
            className="font-bold underline text-white"
          >
            Communities
          </Link>
        </p>
      </div>
      <div className="relative">
        <Green width="100%" className="absolute z-10" />
        <p className="z-50 absolute md:p-3 p-5">
          A preserved and restored natural{" "}
          <Link
            to="/plan-elements?element=environment"
            className="font-bold underline text-white"
          >
            Environment
          </Link>{" "}
          with thriving ecological systems
        </p>
      </div>
      <div className="relative">
        <Turq width="100%" className="absolute z-10 " />
        <p className="z-50 absolute md:p-3 p-5">
          Clean, reliable and affordable{" "}
          <Link
            to="/plan-elements?element=infrastructure"
            className="font-bold underline text-white"
          >
            Infrastructure and Utility Services
          </Link>{" "}
          resilient to the effects of extreme weather
        </p>
      </div>
    </div>
  )
}

export default Bubbles
