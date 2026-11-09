import React, { useContext, useCallback } from "react"
import DvrpcMap from "./dvrpcmap"
import { Source, Layer, Popup } from "react-map-gl/mapbox"
import AppContext from "./AppContext"

export const Legend = () => {
  return (
    <section
      aria-label="Map legend"
      className="absolute top-3 left-3 z-[98] rounded-lg bg-white/95 p-3 font-[Roboto] text-xs shadow"
    >
      <h3 className="mb-2 font-bold">Rail Lines and Stations</h3>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <span
            className="flex h-4 w-6 items-center justify-center"
            aria-hidden="true"
          >
            <span className="h-3 w-3 rounded-full border border-white bg-[#587ca6]" />
          </span>
          <span>Rail Station</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="flex h-4 w-6 items-center" aria-hidden="true">
            <span className="h-0.5 w-full bg-[#7e90a6]" />
          </span>
          <span>Rail Line</span>
        </li>
      </ul>
    </section>
  )
}

export const layerDef = {
  id: "raillines",
  type: "line",
  slot: "middle",
  "source-layer": "passengerrail",
  filter: ["all", ["!=", "type", "Surface Trolley"], ["!=", "type", "AMTRAK"]],
  paint: {
    "line-width": 2,
    "line-color": [
      "case",
      [
        "any",
        ["==", ["get", "type"], "PATCO"],
        ["==", ["get", "type"], "Regional Rail"],
        ["==", ["get", "type"], "Subway - Elevated"],
        ["==", ["get", "type"], "Subway"],
        ["==", ["get", "type"], "NJ Transit"],
        ["==", ["get", "type"], "NJ Transit Light Rail"],
      ],
      "#7e90a6",
      "#cccccc",
      // surface trolley, amtrak
    ],
  },
}

export const stationDef = {
  id: "transitstations",
  type: "circle",
  source: "transit-stations",
  slot: "middle",
  "source-layer": "passengerrailstations",
  minzoom: 8,
  paint: {
    "circle-radius": [
      "step",
      ["zoom"],
      ["case", ["boolean", ["feature-state", "hover"], false], 6, 4],
      10,
      ["case", ["boolean", ["feature-state", "hover"], false], 8, 6],
      13,
      ["case", ["boolean", ["feature-state", "hover"], false], 10, 7],
    ],
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
        ["==", ["get", "line"], "Broad Street Line"],
        ["==", ["get", "line"], "Market/Frankford Line"],
        ["==", ["get", "operator"], "PATCO"],
        ["==", ["get", "operator"], "NJ Transit"],
      ],
      "#587ca6",
      "#cccccc",
      // surface trolley, amtrak
    ],
    "circle-stroke-color": "#fff",
    "circle-stroke-width": 1,
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

// add municipal boundaries

const WhatMap = ({ selectedLayer }) => {
  const { clickedFeature, setClickedFeature } = useContext(AppContext)
  return (
    <DvrpcMap
      baseStyle="mapbox://styles/crvanpollard/cmpn12j9700ba01s26jbr2r9v"
      useStyleSlots
    >
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
