import React from "react"
import DvrpcMap from "./dvrpcmap"
import { Source, Layer } from "react-map-gl/mapbox"

export const Legend = () => {
  return (
    <div className="[&>*]:bg-white [&>*]:rounded-lg [&>*]:p-2 [&>*]:gap-2 font-[Roboto] [&>*]:w-1/2 [&>*]:m-3 [&>*]:text-xs">
      <div className="flex flex-col z-[100] absolute">
        <h3>Update Connections 2050 Major Regional Projects</h3>
        <div className="flex gap-2">
          <span
            className="h-[20px] w-[20px]"
            style={{ backgroundColor: "#0078ae" }}
          ></span>
          <span>Roadway Funded</span>
        </div>
        <div className="flex gap-2">
          <span
            className="h-[20px] w-[20px]"
            style={{ backgroundColor: "#67abd1" }}
          ></span>
          <span>Roadway Unfunded</span>
        </div>
        <div className="flex gap-2">
          <span
            className="h-[20px] w-[20px]"
            style={{ backgroundColor: "#00783e" }}
          ></span>
          <span>Transit Funded</span>
        </div>
        <div className="flex gap-2">
          <span
            className="h-[20px] w-[20px]"
            style={{ backgroundColor: "#bcd85f" }}
          ></span>
          <span>Transit Unfunded</span>
        </div>
        <div className="flex gap-2">
          <span
            className="h-[20px] w-[20px]"
            style={{ backgroundColor: "#704775" }}
          ></span>
          <span>Externally Funded</span>
        </div>
        <div className="flex gap-2">
          <span
            className="h-[20px] w-[20px]"
            style={{ backgroundColor: "#ad5b87" }}
          ></span>
          <span>Externally Unfunded</span>
        </div>
        <div className="flex gap-2">
          <span
            className="h-[20px] w-[20px]"
            style={{ backgroundColor: "#4b4c4d" }}
          ></span>

          <span>Roadway Illustrative</span>
        </div>
      </div>
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
      "#bcd85f",
      "Externally Funded",
      "#704775",
      "Externally Unfunded",
      "#ad5b87",
      "Roadway Illustrative",
      "#4b4c4d",
      "#ffffff",
    ],
  },
}
const PopEmpMap = ({ selectedLayer }) => {
  return (
    <DvrpcMap>
      <Source
        id="MCD"
        type="geojson"
        data={
          "https://arcgis.dvrpc.org/portal/rest/services/planning/uc2050_mrp_lines/FeatureServer/0/query?where=1%3D1&fullText=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&defaultSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&returnEnvelope=false&timeReferenceUnknownClient=false&maxRecordCountFactor=&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&cacheHint=false&f=geojson"
        }
      >
        <Layer {...layerDef} />
      </Source>
    </DvrpcMap>
  )
}

export default PopEmpMap
