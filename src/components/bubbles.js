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
    <div className="flex space-x-2 md:[&>*]:w-[16rem] [&>*]:relative w-full [&>*]:flex [&>*]:items-center [&>*]:justify-center text-xl text-center items-center my-12 font-[Inclusive Sans]! text-sm">
      <div>
        <Purple width="100%" className="absolute z-10" />
        <p className="z-50 w-[90%] ">
          A safe, modern, multimodal{" "}
          <Link
            to="/plan-elements?element=transportation"
            className="font-bold underline"
          >
            Transportation
          </Link>{" "}
          network for all
        </p>
      </div>
      <div>
        <Pink width="100%" className="absolute z-10" />
        <p className="z-50 w-[90%]">
          An innovative and connected{" "}
          <Link
            to="/plan-elements?element=economy"
            className="font-bold underline"
          >
            Economy
          </Link>{" "}
          with opportunity and shared prosperity for all
        </p>
      </div>
      <div>
        <Blue width="100%" className="absolute z-10" />
        <p className="z-50 w-[90%]">
          Integrated, healthy, walkable{" "}
          <Link
            to="/plan-elements?element=communities"
            className="font-bold underline"
          >
            Communities
          </Link>
        </p>
      </div>
      <div>
        <Green width="100%" className="absolute z-10" />
        <p className="z-50 w-[90%]">
          A preserved and restored natural{" "}
          <Link
            to="/plan-elements?element=environment"
            className="font-bold underline"
          >
            Environment
          </Link>{" "}
          and healthy ecological systems
        </p>
      </div>
      <div>
        <Turq width="100%" className="absolute z-10" />
        <p className="z-50 w-[90%]">
          Clean, reliable and affordable{" "}
          <Link
            to="/plan-elements?element=infrastructure"
            className="font-bold underline"
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
