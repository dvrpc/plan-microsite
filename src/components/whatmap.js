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
  source: "rail-lines",
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
  "source-layer": "transitstops",
  paint: {
    "circle-radius": ["interpolate", ["linear"], ["zoom"], 7, 2, 12, 8],
    "circle-color": [
      "case",
      ["==", ["get", "gtfs"], "septa_rail"],
      "#0159B8",
      [
        "any",
        ["==", ["get", "route_names"], '["Broad Street Line"]'],
        ["==", ["get", "route_names"], '["Market-Frankford Line"]'],
      ],
      "#7F3F98",
      ["==", ["get", "gtfs"], "patco"],
      "#019653",
      ["==", ["get", "gtfs"], "njt_rail"],
      "#F9A13F",
      "#cccccc",
      // surface trolley, amtrak
    ],
  },
  filter: [
    "any",
    ["==", "route_names", '["Broad Street Line"]'],
    ["==", "route_names", '["Market-Frankford Line"]'],
    ["==", "gtfs", "patco"],
    ["==", "gtfs", "septa_rail"],
    ["==", "gtfs", "njt_rail"],
  ],
}

const WhatMap = ({ selectedLayer }) => {
  const { clickedFeature, setClickedFeature } = useContext(AppContext)
  return (
    <DvrpcMap>
      <Source
        id="rail-lines"
        type="geojson"
        data={
          "https://arcgis.dvrpc.org/portal/rest/services/Transportation/PassengerRail/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson"
        }
      >
        <Layer {...layerDef} />
      </Source>
      <Source
        id="transit-stations"
        type="vector"
        promoteId="id"
        url="https://tiles.dvrpc.org/data/eta.json"
      >
        <Layer {...stationDef} />
      </Source>
    </DvrpcMap>
  )
}

export default WhatMap
