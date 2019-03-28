/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from './Globals/Navbar/Navbar'
import Footer from './Globals/Footer'

import './bootstrap.min.css'
import '../sass/layout.scss'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      { children }
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
