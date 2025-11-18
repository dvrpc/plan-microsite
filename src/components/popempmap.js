import React, { useEffect, useState } from "react"
import DvrpcMap from "./dvrpcmap"
import { Source, Layer } from "react-map-gl/mapbox"

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

export const Legend = ({ selectedLayer }) => {
  return (
    <div className="[&>*]:bg-white [&>*]:rounded-lg [&>*]:p-2 [&>*]:gap-2 font-[Roboto] [&>*]:w-1/2 [&>*]:m-3 [&>*]:text-xs">
      {selectedLayer === "pop" && (
        <div class="flex flex-col z-[100] absolute">
          <h3 class="legend-h3">People</h3>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#dfeffb" }}
            ></span>
            <span>Less than 10,000</span>
          </div>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#a6cfe1" }}
            ></span>
            <span>10,000 to 24,999</span>
          </div>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#4d9dc0" }}
            ></span>
            <span>25,000 to 49,999</span>
          </div>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#0078ae" }}
            ></span>
            <span>50,000 to 99,999</span>
          </div>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#004e76" }}
            ></span>
            <span>100,000 or More</span>
          </div>{" "}
        </div>
      )}
      {selectedLayer === "popABS" && (
        <div className="flex flex-col z-[100] absolute">
          <h3>People</h3>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#cccccc" }}
            ></span>
            <span>Loss of Population</span>
          </div>

          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#dfeffb" }}
            ></span>
            <span>0 to 1,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#a6cfe1" }}
            ></span>
            <span>2,000 to 3,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#4d9dc0" }}
            ></span>
            <span>4,000 to 5,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#0078ae" }}
            ></span>
            <span>6,000 or More</span>
          </div>
        </div>
      )}
      {selectedLayer === "popPER" && (
        <div className="flex flex-col z-[100] absolute">
          <h3>Percent Change</h3>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#dfeffb" }}
            ></span>
            <span>Stable (-5% to +5%)</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#a6cfe1" }}
            ></span>
            <span>Moderate Growth (+6% to +25%)</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#4d9dc0" }}
            ></span>
            <span>Significant Growth (+26% to +50%)</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#0078ae" }}
            ></span>
            <span>Exceptional Growth (Above 50%)</span>
          </div>
        </div>
      )}
      {selectedLayer === "emp" && (
        <div className="flex flex-col z-[100] absolute">
          <h3>Employees</h3>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#dadaeb" }}
            ></span>
            <span>Fewer than 5,000</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#bcbddc" }}
            ></span>
            <span>5,000 to 9,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#9e9ac8" }}
            ></span>
            <span>10,000 to 19,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#756bb1" }}
            ></span>
            <span>20,000 to 39,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#54278f" }}
            ></span>
            <span>40,000 or More</span>
          </div>
        </div>
      )}
      {selectedLayer === "empABS" && (
        <div className="flex flex-col z-[100] absolute">
          <h3>Employees</h3>
          <div class="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#cccccc" }}
            ></span>
            <span>Loss of Employees</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#dadaeb" }}
            ></span>
            <span>1 to 999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#bcbddc" }}
            ></span>
            <span>1,000 to 1,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#9e9ac8" }}
            ></span>
            <span>2,000 to 2,999</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#756bb1" }}
            ></span>
            <span>3,000 or More</span>
          </div>
        </div>
      )}
      {selectedLayer === "empPER" && (
        <div className="flex flex-col z-[100] absolute">
          <h3>Percent Change</h3>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#bcbddc" }}
            ></span>
            <span>Stable (-5% to +5%)</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#9e9ac8" }}
            ></span>
            <span>Moderate Growth (+6% to +25%)</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#756bb1" }}
            ></span>
            <span>Significant Growth (+26% to +50%)</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] w-[20px]"
              style={{ backgroundColor: "#54278f" }}
            ></span>
            <span>Exceptional Growth (Above 50%)</span>
          </div>
        </div>
      )}
    </div>
  )
}

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
          layer =>
            layer.id === selectedLayer && (
              <Layer
                {...layer}
                layout={{
                  visibility: selectedLayer === layer.id ? "visible" : "none",
                }}
              />
            )
        )}
      </Source>
    </DvrpcMap>
  )
}

export default PopEmpMap
