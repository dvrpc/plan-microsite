import React, { useState, useCallback, useRef } from "react"
import Map, { Source, Layer, Popup } from "react-map-gl/mapbox"
import "mapbox-gl/dist/mapbox-gl.css"
import { LngLatBounds } from "mapbox-gl"

const DVRPCMap = ({ children, features }) => {
  const mapRef = useRef()
  const maxExtent = new LngLatBounds([
    [-76.09405517578125, 39.49211914385648],
    [-74.32525634765625, 40.614734298694216],
  ])
  const [clickedFeature, setClickedFeature] = useState(null)
  const [cursor, setCursor] = useState("grab")

  const onClick = event => {
    const feature = event.features[0]
    if (feature) {
      setClickedFeature({
        feature: feature,
        latitude: event.lngLat.lat,
        longitude: event.lngLat.lng,
      })
    }
  }

  const onMouseEnter = useCallback(() => setCursor("pointer"), [])
  const onMouseLeave = useCallback(() => setCursor("grab"), [])

  return (
    <div className="h-[500px] w-full">
      <Map
        mapStyle="mapbox://styles/crvanpollard/ck5fpyqti0v971itf7edp2eyd"
        interactiveLayerIds={["trail-lines"]}
        ref={mapRef}
        initialViewState={{ bounds: maxExtent }}
        mapboxAccessToken="pk.eyJ1IjoidGhhY2hhZG9yaWFuZHZycGMiLCJhIjoiY2x6Ymw5bjNoMDIxdTJscHJlbDMxMzM1ZyJ9.AZoU09L4abDOTWEUM5Uwdw"
        minZoom={8}
        onClick={onClick}
        cursor={cursor}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
        <Source
          id="boundaries"
          type="vector"
          url="https://tiles.dvrpc.org/data/dvrpc-municipal.json"
        >
          <Layer
            id="dvrpcnt"
            type="fill"
            source-layer="county"
            paint={{
              "fill-color": "#B6C1C6",
              "fill-opacity": 0.8,
            }}
            filter={["!=", "dvrpc", "Yes"]}
          />

          <Layer
            id="municipality-outline"
            type="line"
            source-layer="municipalities"
            paint={{
              "line-width": 0.5,
              "line-color": "#efefef",
            }}
          />

          <Layer
            id="county-outline"
            type="line"
            source-layer="county"
            paint={{
              "line-width": 2.5,
              "line-color": "#fff",
            }}
          />
        </Source>
      </Map>
    </div>
  )
}

export default DVRPCMap
