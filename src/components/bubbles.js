import React from "react"
import Purple from "../images/purple.svg"
import Pink from "../images/pink.svg"
import Blue from "../images/blue.svg"
import Green from "../images/green.svg"
import Turq from "../images/turq.svg"
import Hero from "../images/home-image.png"

const Bubbles = () => {
  return (
    <div className="flex space-x-2 [&>*]:w-1/4 [&>*]:relative w-full [&>*]:flex [&>*]:items-center [&>*]:justify-center text-xl text-center items-center my-12">
      <div>
        <Purple width="100%" className="absolute z-10" />
        <p className="z-50 w-[90%]">
          A safe, modern, multimodal{" "}
          <span className="font-bold underline">Transportation</span> network
          for all
        </p>
      </div>
      <div>
        <Pink width="100%" className="absolute z-10" />
        <p className="z-50 w-[90%]">
          An innovative and connected{" "}
          <span className="font-bold underline">Economy</span> with opportunity
          and shared prosperity for all
        </p>
      </div>
      <div>
        <Blue width="100%" className="absolute z-10" />
        <p className="z-50 w-[90%]">
          Integrated, healthy, walkable{" "}
          <span className="font-bold underline">Communities</span>
        </p>
      </div>
      <div>
        <Green width="100%" className="absolute z-10" />
        <p className="z-50 w-[90%]">
          A preserved and restored natural{" "}
          <span className="font-bold underline">Environment</span> and healthy
          ecological systems
        </p>
      </div>
      <div>
        <Turq width="100%" className="absolute z-10" />
        <p className="z-50 w-[90%]">
          Clean, reliable and affordable{" "}
          <span className="font-bold underline">Infrastructure</span> and{" "}
          <span className="font-bold underline">Utility Services</span>{" "}
          resilient to the effects of extreme weather
        </p>
      </div>
    </div>
  )
}

export default Bubbles
