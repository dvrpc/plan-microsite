import React, { useContext, useCallback } from "react"
import DvrpcMap from "./dvrpcmap"
import { Source, Layer, Popup } from "react-map-gl/mapbox"
import AppContext from "./AppContext"

const Circle = ({ color }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      stroke={color}
    >
      <circle cx="50" cy="50" r="32" stroke-width="2" />

      <line x1="0" y1="50" x2="100" y2="50" stroke-width="5" />
    </svg>
  )
}

export const Legend = () => {
  return (
    <div className="[&>*]:bg-white [&>*]:rounded-lg [&>*]:p-2 [&>*]:gap-2 font-[Roboto] [&>*]:m-3 [&>*]:text-xs">
      <div className="flex flex-col z-[98] absolute">
        <div className="flex gap-2 items-center">
          <Circle color="#0159B8" />
          <span>Regional Rail</span>
        </div>

        <div className="flex gap-2 items-center">
          <Circle color="#7F3F98" />
          <span>Major Subway Lines</span>
        </div>
        <div className="flex gap-2 items-center">
          <Circle color="#019653" />
          <span>PATCO</span>
        </div>
        <div className="flex gap-2 items-center">
          <Circle color="#F9A13F" />
          <span>NJ Transit</span>
        </div>
      </div>
    </div>
  )
}

const layerDef = {
  id: "rail-lines",
  type: "line",
  "source-layer": "passengerrail",
  filter: ["all", ["!=", "type", "Surface Trolley"], ["!=", "type", "AMTRAK"]],
  paint: {
    "line-width": 2,
    "line-color": [
      "case",
      ["==", ["get", "type"], "Regional Rail"],
      "#0159B8",
      [
        "any",
        ["==", ["get", "type"], "Subway - Elevated"],
        ["==", ["get", "type"], "Subway"],
      ],
      "#7F3F98",
      ["==", ["get", "type"], "PATCO"],
      "#019653",
      [
        "any",
        ["==", ["get", "type"], "NJ Transit"],
        ["==", ["get", "type"], "NJ Transit Light Rail"],
      ],
      "#F9A13F",
      "#cccccc",
      // surface trolley, amtrak
    ],
  },
}

const stationDef = {
  id: "transit-stations",
  type: "circle",
  source: "transit-stations",
  "source-layer": "passengerrailstations",
  paint: {
    "circle-radius": ["interpolate", ["linear"], ["zoom"], 7, 2, 12, 8],
    "circle-color": [
      "case",
      [
        "any",
        ["==", ["get", "line"], "Airport Line"],
        ["==", ["get", "line"], "Chestnut Hill East Line"],
        ["==", ["get", "line"], "Chestnut Hill West Line"],
        ["==", ["get", "line"], "Cynwyd Line"],
        ["==", ["get", "line"], "Fox Chase Line"],
        ["==", ["get", "line"], "Lansdale/Doylestown Line"],
        ["==", ["get", "line"], "Manayunk/Norristown Line"],
        ["==", ["get", "line"], "Media/Wawa Line"],
        ["==", ["get", "line"], "Paoli/Thorndale Line"],
        ["==", ["get", "line"], "Warminster Line"],
        ["==", ["get", "line"], "West Trenton Line"],
        ["==", ["get", "line"], "Wilmington/Newark Line"],
        ["==", ["get", "line"], "Trenton Line"],
      ],
      "#0159B8",
      [
        "any",
        ["==", ["get", "line"], "Broad Street Line"],
        ["==", ["get", "line"], "Market/Frankford Line"],
      ],
      "#7F3F98",
      ["==", ["get", "operator"], "PATCO"],
      "#019653",
      ["==", ["get", "operator"], "NJ Transit"],
      "#F9A13F",
      "#cccccc",
      // surface trolley, amtrak
    ],
  },
  filter: [
    "any",
    ["==", "line", "Broad Street Line"],
    ["==", "line", "Market/Frankford Line"],
    ["==", "operator", "PATCO"],
    ["==", "type", "Commuter Rail"],
    ["==", "operator", "NJ Transit"],
    ["==", "line", "Airport Line"],
    ["==", "line", "Chestnut Hill East Line"],
    ["==", "line", "Chestnut Hill West Line"],
    ["==", "line", "Cynwyd Line"],
    ["==", "line", "Fox Chase Line"],
    ["==", "line", "Lansdale/Doylestown Line"],
    ["==", "line", "Manayunk/Norristown Line"],
    ["==", "line", "Media/Wawa Line"],
    ["==", "line", "Paoli/Thorndale Line"],
    ["==", "line", "Warminster Line"],
    ["==", "line", "West Trenton Line"],
    ["==", "line", "Wilmington/Newark Line"],
    ["==", "line", "Trenton Line"],
  ],
}

const WhatMap = ({ selectedLayer }) => {
  const { clickedFeature, setClickedFeature } = useContext(AppContext)
  return (
    <DvrpcMap>
      <Source
        id="rail-lines"
        type="vector"
        promoteId="id"
        url="https://tiles.dvrpc.org/data/transportation/passengerrail"
      >
        <Layer {...layerDef} />
      </Source>
      <Source
        id="transit-stations"
        type="vector"
        promoteId="id"
        url="https://tiles.dvrpc.org/data/transportation/passengerrailstations"
      >
        <Layer {...stationDef} />
      </Source>
    </DvrpcMap>
  )
}

export default WhatMap
