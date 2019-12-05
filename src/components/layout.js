import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "../styles/main.css"

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-200 poppins overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
