import React, { createContext, useEffect, useRef, useState } from "react"

const AppContext = createContext()
export const AppProvider = props => {
  const mapRef = useRef(null)
  const [clickedFeature, setClickedFeature] = useState(null)
  const onHover = useRef(null)
  const onHoverLeave = useRef(null)
  const [mrpProjects, setMrpProjects] = useState({})
  const [mrpProjectsLoading, setMrpProjectsLoading] = useState(true)
  const [mrpProjectsError, setMrpProjectsError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const loadProjects = async () => {
      try {
        const endpoint =
          "https://apis.dvrpc.org/internal/mrpinventory/projects?version=A1_5.21.26"
        let url = endpoint
        const items = []

        while (url) {
          const response = await fetch(url, { signal: controller.signal })
          if (!response.ok) {
            throw new Error(`Project request failed: ${response.status}`)
          }
          const data = await response.json()
          if (!Array.isArray(data.items)) {
            throw new Error("Invalid project response")
          }
          items.push(...data.items)
          if (data.hasMore) {
            if (!Number.isInteger(data.offset) || !(data.limit > 0)) {
              throw new Error("Invalid project pagination")
            }
            url = `${endpoint}&offset=${data.offset + data.limit}`
          } else {
            url = null
          }
        }

        const projects = {
          "Roadway Funded": [],
          "Roadway Unfunded": [],
          "Transit Funded": [],
          "Transit Unfunded": [],
          "Externally Funded": [],
          "Externally Unfunded": [],
          "Roadway Illustrative": [],
        }
        items.forEach(item => {
          const project = {
            id: item.mrpid ?? "",
            facility: item.facility ?? "",
            scope: item.scope ?? "",
            location: item.location ?? "",
            period: String(item.plan_period ?? ""),
            cost: String(item.displaycost ?? ""),
            categories: item.combined_pcts ?? "",
            state: item.state ?? "",
            website: item.website ?? "",
            funding: item.funding ?? "",
          }
          if (!projects[project.funding]) projects[project.funding] = []
          projects[project.funding].push(project)
        })
        if (!controller.signal.aborted) setMrpProjects(projects)
      } catch (error) {
        if (!controller.signal.aborted) {
          setMrpProjectsError(
            "Unable to load projects. Please try refreshing the page."
          )
        }
      } finally {
        if (!controller.signal.aborted) setMrpProjectsLoading(false)
      }
    }

    loadProjects()
    return () => controller.abort()
  }, [])

  return (
    <AppContext.Provider
      value={{
        mapRef,
        clickedFeature,
        setClickedFeature,
        onHover,
        onHoverLeave,
        mrpProjects,
        mrpProjectsLoading,
        mrpProjectsError,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
