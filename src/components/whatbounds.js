import React from "react"
import { Source, Layer } from "react-map-gl/mapbox"

const WhatBounds = ({ disableCounty = false, disableMuni = false }) => (
  <Source
    id="boundaries"
    type="vector"
    url="https://tiles.dvrpc.org/data/dvrpc-municipal.json"
  >
    <Layer
      id="dvrpcnt"
      type="fill"
      source-layer="county"
      slot="bottom"
      paint={{ "fill-color": "#B6C1C6", "fill-opacity": 0.6 }}
      filter={["!=", "dvrpc", "Yes"]}
    />
    <Layer
      id="municipality-outline"
      type="line"
      source-layer="municipalities"
      slot="middle"
      paint={{ "line-width": 0.8, "line-color": "#808080" }}
      filter={["!=", "dvrpc", "No"]}
      layout={{ visibility: disableMuni ? "none" : "visible" }}
    />
    <Layer
      id="county-outline"
      type="line"
      source-layer="county"
      slot="middle"
      paint={{ "line-width": 2.5, "line-color": "#808080" }}
      filter={["!=", "dvrpc", "No"]}
      layout={{ visibility: disableCounty ? "none" : "visible" }}
    />
  </Source>
)

export default WhatBounds
