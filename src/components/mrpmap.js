import React, { useContext, useState } from "react"
import DvrpcMap from "./dvrpcmap"
import { Source, Layer, Popup } from "react-map-gl/mapbox"
import AppContext from "./AppContext"
import { XMarkIcon } from "@heroicons/react/16/solid"

export const fundingCategories = [
  { label: "Roadway Funded", color: "#0078ae" },
  { label: "Roadway Unfunded", color: "#67abd1" },
  { label: "Transit Funded", color: "#00783e" },
  { label: "Transit Unfunded", color: "#66AE8B" },
  { label: "Externally Funded", color: "#704775" },
  { label: "Externally Unfunded", color: "#A990AC" },
  { label: "Roadway Illustrative", color: "#4b4c4d" },
]

export const Legend = ({ visibleFunding, onToggleFunding }) => {
  const [isLegendOpen, setIsLegendOpen] = useState(true)

  return (
    <div className="absolute left-3 top-2 z-[98] text-xs">
      {isLegendOpen ? (
        <div className="w-72 max-w-full rounded-lg bg-white/95 p-3">
          <button
            type="button"
            className="absolute right-0 top-0 grid h-7 w-7 place-items-center rounded"
            aria-label="Hide map legend"
            onClick={() => setIsLegendOpen(false)}
          >
            <XMarkIcon className="h-4 w-4" aria-hidden="true" />
          </button>
          <h3 className="mb-2 pr-5">
            Update Connections 2050 Major Regional Projects
          </h3>
          <ul className="space-y-1">
            {fundingCategories.map(item => (
              <li key={item.label}>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 rounded border-slate-300 text-sky-700 focus:ring-sky-500"
                    checked={visibleFunding.includes(item.label)}
                    onChange={() => onToggleFunding(item.label)}
                  />
                  <span
                    className="h-[20px] w-[20px] shrink-0 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <span>{item.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <button
          type="button"
          className="flex h-10 items-center gap-2 rounded bg-white px-3 font-bold"
          aria-label="Show map legend"
          onClick={() => setIsLegendOpen(true)}
        >
          <span>Legend</span>
        </button>
      )}
    </div>
  )
}

const layerDef = {
  id: "mrp-lines",
  type: "line",
  paint: {
    "line-width": ["interpolate", ["linear"], ["zoom"], 1, 1, 7, 3, 11, 5.5],
    "line-color": [
      "match",
      ["get", "funding"],
      "Roadway Funded",
      "#0078ae",
      "Roadway Unfunded",
      "#67abd1",
      "Transit Funded",
      "#00783e",
      "Transit Unfunded",
      "#66AE8B",
      "Externally Funded",
      "#704775",
      "Externally Unfunded",
      "#A990AC",
      "Roadway Illustrative",
      "#4b4c4d",
      "#ffffff",
    ],
  },
}
const MrpMap = ({ visibleFunding }) => {
  const { clickedFeature, setClickedFeature } = useContext(AppContext)
  return (
    <DvrpcMap>
      {clickedFeature && (
        <Popup
          anchor="bottom"
          longitude={clickedFeature.longitude}
          latitude={clickedFeature.latitude}
          closeOnClick={false}
          onClose={() => setClickedFeature(null)}
          className="z-[99] max-h-64"
        >
          <strong>{clickedFeature.feature.properties.facility}</strong>
          <div className="max-h-[200px] overflow-y-scroll">
            <table className="[&>*:nth-child(even)]:bg-gray-100">
              <tr>
                <td>ID#:</td>
                <td>{clickedFeature.feature.properties.uc2050_id}</td>
              </tr>

              <tr>
                <td>Scope:</td>
                <td>{clickedFeature.feature.properties.scope}</td>
              </tr>
              <tr>
                <td>Counties:</td>
                <td>{clickedFeature.feature.properties.location}</td>
              </tr>
              <tr>
                <td>State:</td>
                <td>{clickedFeature.feature.properties.state}</td>
              </tr>
              <tr>
                <td>Funding:</td>
                <td>{clickedFeature.feature.properties.funding}</td>
              </tr>
              <tr>
                <td>Cost:</td>
                <td>{clickedFeature.feature.properties.displaycost}</td>
              </tr>
              <tr>
                <td>Funding Periods:</td>
                <td>{clickedFeature.feature.properties.plan_period}</td>
              </tr>
            </table>
          </div>
        </Popup>
      )}
      <Source
        id="MCD"
        type="geojson"
        data={
          "https://arcgis.dvrpc.org/portal/rest/services/planning/uc2050_mrp_lines/FeatureServer/0/query?where=1%3D1&fullText=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&defaultSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&returnEnvelope=false&timeReferenceUnknownClient=false&maxRecordCountFactor=&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&cacheHint=false&f=geojson"
        }
      >
        <Layer
          {...layerDef}
          beforeId="dvrpcnt"
          filter={["in", ["get", "funding"], ["literal", visibleFunding]]}
        />
      </Source>
    </DvrpcMap>
  )
}

export default MrpMap
