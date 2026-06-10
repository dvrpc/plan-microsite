import React, { useState, useCallback, useRef, useContext } from "react"
import Map, {
  useControl,
  Source,
  Layer,
  Popup,
  NavigationControl,
} from "react-map-gl/mapbox"
import "mapbox-gl/dist/mapbox-gl.css"
import { LngLatBounds } from "mapbox-gl"
import AppContext from "./AppContext"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"

const GeocoderControl = props => {
  const ctrl = useControl(
    () => {
      const geocoder = new MapboxGeocoder({
        ...props,
        accessToken:
          "pk.eyJ1IjoidGhhY2hhZG9yaWFuZHZycGMiLCJhIjoiY2x6Ymw5bjNoMDIxdTJscHJlbDMxMzM1ZyJ9.AZoU09L4abDOTWEUM5Uwdw",
      })

      // Bind optional event listeners passed as props
      if (props.onLoading) geocoder.on("loading", props.onLoading)
      if (props.onResults) geocoder.on("results", props.onResults)
      if (props.onResult) geocoder.on("result", props.onResult)
      if (props.onError) geocoder.on("error", props.onError)

      return geocoder
    },
    {
      position: props.position || "top-right", // 'top-left', 'top-right', etc.
    }
  )

  return null
}

const DVRPCMap = ({
  children,
  features,
  baseStyle = "",
  disableCounty = false,
  disableMuni = false,
}) => {
  const { mapRef, clickedFeature, setClickedFeature, onHover, onHoverLeave } =
    useContext(AppContext)
  const maxExtent = new LngLatBounds([
    [-76.09405517578125, 39.49211914385648],
    [-74.32525634765625, 40.614734298694216],
  ])
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
    <div className="h-[600px] w-full">
      <Map
        mapStyle={
          !baseStyle
            ? "mapbox://styles/crvanpollard/ck5fpyqti0v971itf7edp2eyd"
            : baseStyle
        }
        interactiveLayerIds={["mrp-lines"]}
        ref={mapRef}
        initialViewState={{ bounds: maxExtent }}
        mapboxAccessToken="pk.eyJ1IjoidGhhY2hhZG9yaWFuZHZycGMiLCJhIjoiY2x6Ymw5bjNoMDIxdTJscHJlbDMxMzM1ZyJ9.AZoU09L4abDOTWEUM5Uwdw"
        minZoom={8}
        onClick={onClick}
        cursor={cursor}
        onMouseEnter={!onHover.current ? onMouseEnter : onHover}
        onMouseLeave={!onHoverLeave.current ? onMouseLeave : onHoverLeave}
      >
        <GeocoderControl />
        <NavigationControl />
        <div
          id="default-extent-btn"
          className="overlays shadow"
          aria-label="Default DVRPC Extent"
          onClick={() => mapRef.current?.fitBounds(maxExtent)}
        >
          <img
            id="default-extent-img"
            src="https://www.dvrpc.org/img/banner/new/bug-favicon.png"
            alt="DVRPC logo"
          />
        </div>
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
              "fill-opacity": 0.6,
            }}
            filter={["!=", "dvrpc", "Yes"]}
          />

          <Layer
            id="municipality-outline"
            type="line"
            source-layer="municipalities"
            paint={{
              "line-width": 1,
              "line-color": "#808080",
            }}
            filter={["!=", "dvrpc", "No"]}
            layout={{
              visibility: disableMuni ? "none" : "visible",
            }}
          />

          <Layer
            id="county-outline"
            type="line"
            source-layer="county"
            paint={{
              "line-width": 2.5,
              "line-color": "#808080",
            }}
            filter={["!=", "dvrpc", "No"]}
            layout={{
              visibility: disableCounty ? "none" : "visible",
            }}
          />
        </Source>
      </Map>
    </div>
  )
}

export default DVRPCMap
