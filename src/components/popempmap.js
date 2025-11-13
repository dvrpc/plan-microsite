import React, { useEffect, useState } from "react"
import DvrpcMap from "./dvrpcmap"
import { Source, Layer } from "react-map-gl/mapbox"
import Legend from "./legend"

let emp0 = "#CCCCCC"
let emp1 = "#dadaeb"
let emp2 = "#bcbddc"
let emp3 = "#9e9ac8"
let emp4 = "#756bb1"
let emp5 = "#54278f"

let popColor = [
  "step",
  ["get", "pop50"],
  "#DFEFFB",
  10000,
  "#A6CFE1",
  25000,
  "#4D9DC0",
  50000,
  "#0078AE",
  100000,
  "#004E76",
]

let popColor2 = [
  "step",
  ["get", "popabs50"],
  "#CCCCCC",
  0,
  "#DFEFFB",
  1,
  "#A6CFE1",
  2000,
  "#4D9DC0",
  4000,
  "#0078AE",
]

let popColor3 = [
  "step",
  ["get", "poppct50"],
  "#DFEFFB",
  5,
  "#A6CFE1",
  25,
  "#4D9DC0",
  50,
  "#0078AE",
]

let empColor = [
  "step",
  ["get", "emp50"],
  emp1,
  5000,
  emp2,
  10000,
  emp3,
  20000,
  emp4,
  40000,
  emp5,
]
let empColorABS = [
  "step",
  ["get", "empabs50"],
  emp0,
  0,
  emp1,
  1000,
  emp2,
  2000,
  emp3,
  3000,
  emp4,
]
let empColorPER = [
  "step",
  ["get", "emppct50"],
  emp1,
  5,
  emp2,
  25,
  emp3,
  50,
  emp4,
]

export const secondaryMapLayers = [
  {
    id: "pop",
    type: "fill",
    source: "MCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": popColor,
    },
  },
  {
    id: "popABS",
    type: "fill",
    source: "MCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": popColor2,
    },
  },
  {
    id: "popPER",
    type: "fill",
    source: "MCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": popColor3,
    },
  },

  {
    id: "emp",
    type: "fill",
    source: "MCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": empColor,
    },
  },
  {
    id: "empABS",
    type: "fill",
    source: "MCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": empColorABS,
    },
  },
  {
    id: "empPER",
    type: "fill",
    source: "MCD",
    layout: {},
    paint: {
      "fill-outline-color": "#748388",
      "fill-opacity": {
        base: 9,
        stops: [
          [10, 0.9],
          [12, 0.7],
          [13, 0.6],
        ],
      },
      "fill-color": empColorPER,
    },
  },
]

const PopEmpMap = ({ selectedLayer }) => {
  return (
    <DvrpcMap>
      <Source
        id="MCD"
        type="geojson"
        data={
          "https://arcgis.dvrpc.org/portal/rest/services/demographics/forecast_2050_mcd_v2/FeatureServer/0/query?where=1%3D1&outFields=*&geometryPrecision=6&outSR=4326&f=geojson"
        }
      >
        {secondaryMapLayers.map(
          layer => layer.id === selectedLayer && <Layer {...layer} />
        )}
      </Source>
    </DvrpcMap>
  )
}

export default PopEmpMap
