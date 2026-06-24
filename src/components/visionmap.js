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
    "line-width": ["interpolate", ["linear"], ["zoom"], 8, 2.5, 11, 3.5, 14, 5],
    "line-color": "#843787",
  },
}

const railLines = {
  ...layerDef,
  paint: {
    ...layerDef.paint,
    "line-width": ["interpolate", ["linear"], ["zoom"], 8, 2.5, 11, 3.5, 14, 5],
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
  fill: {
    id: "planningcenters",
    type: "fill",
    "source-layer": "uc2050_plan_centers",
    paint: {
      "fill-color": "#b83652",
      "fill-opacity": 0.5,
    },
  },
  outline: {
    id: "planningcentersoutline",
    type: "line",
    "source-layer": "uc2050_plan_centers",
    paint: {
      "line-color": "#45141e",
      "line-width": 1,
    },
  },
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
    title: "Land Use Vision",
    layerId: "landuse",
    dataUrl:
      "https://catalog.dvrpc.org/dataset/dvrpc-connections-2050-land-use-vision",
    items: [
      { label: "Emerging Growth", color: "#d99241" },
      { label: "Greenspace Network", color: "#759f5f" },
      { label: "Infill and Redevelopment", color: "#eccb81" },
      { label: "Rural Resource Lands", color: "#fdf6a8" },
    ],
  },
  {
    title: "Centers and Neighborhoods",
    dataUrl:
      "https://catalog.dvrpc.org/dataset/long-range-plan-2050-planning-centers",
    items: [
      {
        label: "Planned Center",
        color: "#b83652",
        layerId: "planningcenters",
      },
    ],
  },
  {
    title: "Rail Lines and Stations",
    dataUrl: "https://catalog.dvrpc.org/dataset/?q=passenger+rail",
    items: [
      {
        label: "Rail Station",
        color: "#587ca6",
        shape: "circle",
        layerId: "transitstations",
      },
      {
        label: "Rail Line",
        color: "#7e90a6",
        shape: "line",
        layerId: "raillines",
      },
      {
        label: "Glassboro Camden Line",
        color: "#843787",
        shape: "line",
        layerId: "glassboro",
      },
    ],
  },
]

const LegendSwatch = ({ color, border = "#ffffff", shape = "square" }) => (
  <span
    className={`inline-flex h-[20px] w-[20px] items-center justify-center ${
      shape === "circle" ? "rounded-full" : "rounded-sm"
    }`}
    style={{
      backgroundColor: shape === "line" ? "transparent" : color,
      border: shape === "line" ? "none" : `1px solid ${border}`,
    }}
  >
    {shape === "line" && (
      <span
        className="block h-[3px] w-full rounded-full"
        style={{ backgroundColor: color }}
      />
    )}
  </span>
)

const visibilityLayout = isVisible => ({
  visibility: isVisible ? "visible" : "none",
})

const layerVisibilityGroups = {
  planningcenters: ["planningcenters", "planningcentersoutline"],
}

const VisionMap = ({ selectedLayer }) => {
  const [isLegendOpen, setIsLegendOpen] = useState(true)
  const [visibleLayers, setVisibleLayers] = useState({
    landuse: false,
    planningcenters: false,
    planningcentersoutline: false,
    transitstations: false,
    raillines: false,
    glassboro: false,
  })

  const getLayerIds = layerId => layerVisibilityGroups[layerId] || [layerId]
  const isLayerVisible = layerId =>
    getLayerIds(layerId).every(id => visibleLayers[id])

  const toggleLayer = layerId => {
    setVisibleLayers(current => {
      const layerIds = getLayerIds(layerId)
      const nextVisibility = !layerIds.every(id => current[id])

      return layerIds.reduce(
        (nextLayers, id) => ({
          ...nextLayers,
          [id]: nextVisibility,
        }),
        current
      )
    })
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
                  <div className="mb-1 flex items-center justify-between gap-3">
                    {section.layerId ? (
                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          className="h-3.5 w-3.5 rounded border-slate-300 text-sky-700 focus:ring-sky-500"
                          checked={isLayerVisible(section.layerId)}
                          onChange={() => toggleLayer(section.layerId)}
                        />
                        <span>{section.title}</span>
                      </label>
                    ) : (
                      <span>{section.title}</span>
                    )}
                    <a
                      href={section.dataUrl}
                      className="shrink-0 text-xs font-bold underline"
                    >
                      View data
                    </a>
                  </div>
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
                              checked={isLayerVisible(item.layerId)}
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
        type="vector"
        url="https://tiles.dvrpc.org/data/planning/uc2050_plan_centers"
      >
        <Layer
          {...planningcenters.fill}
          layout={visibilityLayout(visibleLayers.planningcenters)}
        />
        <Layer
          beforeId="county-outline"
          {...planningcenters.outline}
          layout={visibilityLayout(visibleLayers.planningcentersoutline)}
        />
      </Source>
      <Source
        id="rail-lines"
        type="vector"
        url="https://tiles.dvrpc.org/data/transportation/passengerrail"
      >
        <Layer
          {...railLines}
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
