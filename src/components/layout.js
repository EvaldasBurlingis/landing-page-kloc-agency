import React from "react"
import PropTypes from "prop-types"
import "../styles/main.css";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-200">
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
