import React from "react"
import DvrpcMap from "./dvrpcmap"
import { Source, Layer } from "react-map-gl/mapbox"

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

const secondaryMapLayers = [
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
