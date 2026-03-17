import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Navigation from "./navigation"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/vrf2gbv.css" />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
