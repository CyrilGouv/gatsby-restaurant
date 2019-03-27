import React, { Component } from 'react'

import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './NavbarIcons'

export default class Navbar extends Component {
    state = {
        navbarOpen: false
    }

    handleNavbar = () => {
        this.setState({navbarOpen: !this.state.navbarOpen})
    }

    render() {
        return (
            <nav className="navWrapper">
                <NavbarHeader handleNavbar={ this.handleNavbar } />
                <NavbarLinks navbarOpen={this.state.navbarOpen} />
                <NavbarIcons />
            </nav>
        )
    }
}
