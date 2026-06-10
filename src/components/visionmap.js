import React, { useState } from "react"
import DvrpcMap from "./dvrpcmap"
import { Source, Layer } from "react-map-gl/mapbox"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { layerDef, stationDef } from "./whatmap"

const glassboro = {
  id: "glassboro",
  type: "line",
  source: "glassboro-camden",
  paint: {
    "line-width": 2,
    "line-color": "#587ca6",
  },
}

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

const planningareas = {
  id: "planningareas",
  type: "fill",
  source: "lrp_2050_planningareas",
  paint: {
    "fill-color": [
      "case",
      ["==", ["get", "pa_2050"], "Growing Suburb"],
      "#d5def0",
      ["==", ["get", "pa_2050"], "Rural Area"],
      "#ffffff",
      ["==", ["get", "pa_2050"], "Developed Community"],
      "#91add9",
      ["==", ["get", "pa_2050"], "Core City"],
      "#457aa8",
      "#cccccc",
    ],
    "fill-opacity": 0.8,
  },
}
const planningcenters = {
  id: "planningcenters",
  type: "circle",
  source: "lrp_2050_planningcenters",
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
    "circle-color": "#fec44f",
    "circle-stroke-color": "#fff",
    "circle-stroke-width": 1,
  },
  filter: ["==", "lup_type", "Planned Center"],
}

const planningneighborhood = {
  id: "planningneighborhood",
  type: "circle",
  source: "lrp_2050_planningneighborhood",
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
    "circle-color": "#72a5e8",
    "circle-stroke-color": "#fff",
    "circle-stroke-width": 1,
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

const legendSections = [
  {
    title: "Planning Areas",
    layerId: "planningareas",
    items: [
      { label: "Core City", color: "#457aa8" },
      { label: "Developed Community", color: "#91add9" },
      { label: "Growing Suburb", color: "#d5def0" },
      { label: "Rural Area", color: "#ffffff", border: "#9ca3af" },
    ],
  },
  {
    title: "Land Use Vision",
    layerId: "landuse",
    items: [
      { label: "Emerging Growth", color: "#d99241" },
      { label: "Greenspace Network", color: "#759f5f" },
      { label: "Infill and Redevelopment", color: "#eccb81" },
      { label: "Rural Resource Lands", color: "#fdf6a8" },
    ],
  },
  {
    title: "Centers and Neighborhoods",
    items: [
      {
        label: "Planned Center",
        color: "#fec44f",
        shape: "circle",
        layerId: "planningcenters",
      },
      {
        label: "Planned Neighborhood",
        color: "#72a5e8",
        shape: "circle",
        layerId: "planningneighborhood",
      },
    ],
  },
  {
    title: "Rail Lines and Stations",
    items: [
      {
        label: "Rail Station",
        color: "#587ca6",
        shape: "circle",
        layerId: "transitstations",
      },
      {
        label: "Rail Line",
        color: "#72a5e8",
        shape: "square",
        layerId: "raillines",
      },
      {
        label: "Glassboro Camden Line",
        color: "#72a5e8",
        shape: "square",
        layerId: "glassboro",
      },
    ],
  },
]

const LegendSwatch = ({ color, border = "#ffffff", shape = "square" }) => (
  <span
    className={`h-[20px] w-[20px] ${
      shape === "circle" ? "rounded-full" : "rounded-sm"
    }`}
    style={{
      backgroundColor: color,
      border: `1px solid ${border}`,
    }}
  />
)

const visibilityLayout = isVisible => ({
  visibility: isVisible ? "visible" : "none",
})

const VisionMap = ({ selectedLayer }) => {
  const [isLegendOpen, setIsLegendOpen] = useState(true)
  const [visibleLayers, setVisibleLayers] = useState({
    planningareas: false,
    landuse: false,
    planningcenters: false,
    planningneighborhood: false,
    transitstations: false,
    raillines: false,
    glassboro: false,
  })

  const toggleLayer = layerId => {
    setVisibleLayers(current => ({
      ...current,
      [layerId]: !current[layerId],
    }))
  }

  return (
    <DvrpcMap>
      <div className="absolute top-2 left-3 z-100">
        {isLegendOpen ? (
          <div className="w-72 max-w-full rounded bg-white/95 p-3 rounded-lg">
            <div className="absolute right-0 top-0">
              <button
                type="button"
                className="grid h-7 w-7 place-items-center rounded ml-auto"
                aria-label="Hide map legend"
                onClick={() => setIsLegendOpen(false)}
              >
                <XMarkIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-3">
              {legendSections.map(section => (
                <div key={section.title}>
                  {section.layerId ? (
                    <label className="mb-1 flex cursor-pointer items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-3.5 w-3.5 rounded border-slate-300 text-sky-700 focus:ring-sky-500"
                        checked={visibleLayers[section.layerId]}
                        onChange={() => toggleLayer(section.layerId)}
                      />
                      <span>{section.title}</span>
                    </label>
                  ) : (
                    <span className="mb-1">{section.title}</span>
                  )}
                  <ul className="space-y-1">
                    {section.items.map(item => (
                      <li
                        key={item.label}
                        className="flex min-w-0 items-center gap-2"
                      >
                        {item.layerId ? (
                          <label className="flex min-w-0 cursor-pointer items-center gap-2">
                            <input
                              type="checkbox"
                              className="h-3.5 w-3.5 rounded border-slate-300 text-sky-700 focus:ring-sky-500"
                              checked={visibleLayers[item.layerId]}
                              onChange={() => toggleLayer(item.layerId)}
                            />
                            <LegendSwatch {...item} />
                            <span>{item.label}</span>
                          </label>
                        ) : (
                          <>
                            <LegendSwatch {...item} />
                            <span>{item.label}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
      <Source
        id="lrp_2050_planningareas"
        type="geojson"
        data={
          "https://arcgis.dvrpc.org/portal/rest/services/planning/lrp_2050_planningareas/FeatureServer/0/query?where=1%3D1&fullText=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&defaultSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&returnEnvelope=false&timeReferenceUnknownClient=false&maxRecordCountFactor=&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&cacheHint=false&f=geojson"
        }
      >
        <Layer
          {...planningareas}
          layout={visibilityLayout(visibleLayers.planningareas)}
        />
      </Source>
      <Source
        id="lrp_2050_landusevision"
        type="geojson"
        data={
          "https://arcgis.dvrpc.org/portal/rest/services/planning/lrp_2050_landusevision/FeatureServer/0/query?where=1%3D1&fullText=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&defaultSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&returnEnvelope=false&timeReferenceUnknownClient=false&maxRecordCountFactor=&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&cacheHint=false&f=geojson"
        }
      >
        <Layer {...landuse} layout={visibilityLayout(visibleLayers.landuse)} />
      </Source>
      <Source
        id="lrp_2050_planningcenters"
        type="geojson"
        data={
          "https://arcgis.dvrpc.org/portal/rest/services/planning/lrp_2050_planningcenters_points/FeatureServer/0/query?where=1%3D1&fullText=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&defaultSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&timeReferenceUnknownClient=false&maxRecordCountFactor=&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&cacheHint=false&f=geojson"
        }
      >
        <Layer
          {...planningcenters}
          layout={visibilityLayout(visibleLayers.planningcenters)}
        />
      </Source>
      <Source
        id="lrp_2050_planningneighborhood"
        type="geojson"
        data={
          "https://arcgis.dvrpc.org/portal/rest/services/planning/lrp_2050_plancntrneigh/FeatureServer/0/query?where=1%3D1&fullText=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&defaultSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&timeReferenceUnknownClient=false&maxRecordCountFactor=&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&cacheHint=false&f=geojson"
        }
      >
        <Layer
          {...planningneighborhood}
          layout={visibilityLayout(visibleLayers.planningneighborhood)}
        />
      </Source>
      <Source
        id="rail-lines"
        type="vector"
        url="https://tiles.dvrpc.org/data/transportation/passengerrail"
      >
        <Layer
          {...layerDef}
          layout={visibilityLayout(visibleLayers.raillines)}
        />
      </Source>
      <Source
        id="transit-stations"
        type="vector"
        url="https://tiles.dvrpc.org/data/transportation/passengerrailstations"
      >
        <Layer
          {...stationDef}
          layout={visibilityLayout(visibleLayers.transitstations)}
        />
      </Source>
      <Source
        id="glassboro-camden"
        type="geojson"
        data={
          "https://arcgis.dvrpc.org/portal/rest/services/planning/uc2050_mrp_lines/FeatureServer/0/query?where=uc2050_id%3D%27NJT011%27&fullText=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&defaultSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&gdbVersion=&historicMoment=&returnDistinctValues=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&multipatchOption=xyFootprint&resultOffset=&resultRecordCount=&returnTrueCurves=false&returnExceededLimitFeatures=false&quantizationParameters=&returnCentroid=false&returnEnvelope=false&timeReferenceUnknownClient=false&maxRecordCountFactor=&sqlFormat=none&resultType=&featureEncoding=esriDefault&datumTransformation=&cacheHint=false&f=geojson"
        }
      >
        <Layer
          {...glassboro}
          layout={visibilityLayout(visibleLayers.glassboro)}
        />
      </Source>
    </DvrpcMap>
  )
}

export default VisionMap
