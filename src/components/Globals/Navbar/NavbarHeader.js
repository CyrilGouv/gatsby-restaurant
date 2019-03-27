import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'

export default class NavbarHeader extends Component {
    render() {
        const { handleNavbar } = this.props

        return (
            <div className="headerWrapper">
                <Link to="/">
                    <img src={ logo } alt="Company Name"/>
                </Link>
                <FaAlignRight className="toggle-icon" onClick={() => { handleNavbar() }} />
            </div>
        )
    }
}
