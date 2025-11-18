import React, { useEffect, useState } from "react"
import DvrpcMap from "./dvrpcmap"
import { Source, Layer } from "react-map-gl/mapbox"

const freightcenters = {
  id: "freightcenters",
  type: "fill",
  source: "freightcenters",
  paint: {
    "fill-color": [
      "case",
      ["==", ["get", "type"], "International Gateway"],
      "#5d1b29",
      ["==", ["get", "type"], "Heavy Industrial"],
      "#7b2437",
      ["==", ["get", "type"], "Distribution and Logistics"],
      "#992d44",
      ["==", ["get", "type"], "High Tech Manufacturing"],
      "#b83652",
      ["==", ["get", "type"], "Local Manufacturing and Distribution"],
      "#ca4b66",
      "#cccccc",
    ],
    "fill-opacity": 0.8,
  },
}

const landuse = {
  id: "lrp_2050_landusevision",
  type: "fill",
  source: "lrp_2050_landusevision",
  paint: {
    "fill-color": [
      "case",
      ["==", ["get", "lup_type"], "Emerging Growth"],
      "#d99241",
      ["==", ["get", "lup_type"], "Greenspace Network"],
      "#759f5f",
      ["==", ["get", "lup_type"], "Infill and Redevelopment"],
      "#eccb81",
      ["==", ["get", "lup_type"], "Rural Resource Lands"],
      "#fdf6a8",
      "#cccccc",
    ],
    "fill-opacity": 0.8,
  },
}

export const Legend = ({ selectedLayer }) => {
  return (
    <div className="[&>*]:bg-white [&>*]:rounded-lg [&>*]:p-2 [&>*]:gap-2 font-[Roboto] [&>*]:w-1/2 [&>*]:m-3 [&>*]:text-xs">
      {selectedLayer === "landuse" && (
        <div class="flex flex-col z-[100] absolute">
          <div class="flex gap-2">
            <span
              className="h-[20px] min-w-[20px]"
              style={{ backgroundColor: "#759f5f" }}
            ></span>
            <span>Greenspace Network</span>
          </div>
          <div class="flex gap-2">
            <span
              className="h-[20px] min-w-[20px]"
              style={{ backgroundColor: "#d99241" }}
            ></span>
            <span>Emerging Growth</span>
          </div>
          <div class="flex gap-2">
            <span
              className="h-[20px] min-w-[20px]"
              style={{ backgroundColor: "#fdf6a8" }}
            ></span>
            <span>Rural Resource Lands</span>
          </div>
          <div class="flex gap-2">
            <span
              className="h-[20px] min-w-[20px]"
              style={{ backgroundColor: "#eccb81" }}
            ></span>
            <span>Infill and Redevelopment</span>
          </div>
        </div>
      )}
      {selectedLayer === "freightcenters" && (
        <div className="flex flex-col z-[100] absolute">
          <div className="flex gap-2">
            <span
              className="h-[20px] min-w-[20px]"
              style={{ backgroundColor: "#5d1b29" }}
            ></span>
            <span>International Gateway</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] min-w-[20px]"
              style={{ backgroundColor: "#7b2437" }}
            ></span>
            <span>Heavy Industrial</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] min-w-[20px]"
              style={{ backgroundColor: "#992d44" }}
            ></span>
            <span>High Tech Manufacturing</span>
          </div>
          <div className="flex gap-2">
            <span
              className="h-[20px] min-w-[20px]"
              style={{ backgroundColor: "#b83652" }}
            ></span>
            <span>Local Manufacturing and Distribution</span>
          </div>
        </div>
      )}
    </div>
  )
}

const VisionMap = ({ selectedLayer }) => {
  return (
    <DvrpcMap>
      <Source
        id="freightcenters"
        type="geojson"
        data={
          "https://arcgis.dvrpc.org/portal/rest/services/freight/freight_centers/FeatureServer/0/query?outFields=pff_id,name,type&where=1%3D1&geometryPrecision=5&f=geojson"
        }
      >
        <Layer
          {...freightcenters}
          layout={{
            visibility: selectedLayer === "freightcenters" ? "visible" : "none",
          }}
        />
      </Source>
      <Source
        id="lrp_2050_landusevision"
        type="geojson"
        data={
          "https://arcgis.dvrpc.org/portal/rest/services/planning/lrp_2050_landusevision/FeatureServer/0/query?where=1%3D1&fullText=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&defaultSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&returnEnvelope=false&timeReferenceUnknownClient=false&maxRecordCountFactor=&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&cacheHint=false&f=geojson"
        }
      >
        <Layer
          {...landuse}
          layout={{
            visibility: selectedLayer === "landuse" ? "visible" : "none",
          }}
        />
      </Source>
    </DvrpcMap>
  )
}

export default VisionMap
