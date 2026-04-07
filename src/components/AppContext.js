import React, { createContext, useRef, useState } from "react"

const AppContext = createContext()
export const AppProvider = props => {
  const mapRef = useRef(null)
  const [clickedFeature, setClickedFeature] = useState(null)
  const onHover = useRef(null)
  const onHoverLeave = useRef(null)

  return (
    <AppContext.Provider
      value={{
        mapRef,
        clickedFeature,
        setClickedFeature,
        onHover,
        onHoverLeave,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
