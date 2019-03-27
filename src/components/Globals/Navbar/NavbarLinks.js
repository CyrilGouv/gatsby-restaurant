import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class NavbarLinks extends Component {
   
        state = {
            links: [
                {
                    id: 0,
                    path: '/',
                    name: "home"
                },
                {
                    id: 1,
                    path: '/about',
                    name: 'about'
                },
                {
                    id: 2,
                    path: '/menu',
                    name: 'menu'
                },
                {
                    id: 3,
                    path: '/contact',
                    name: 'contact'
                }
            ]
    
        }

    

    render() {
        return (
            <ul className={`linkWrapper ${this.props.navbarOpen ? 'isOpen' : ''}`}>
                {
                    this.state.links.map(item => {
                        return (
                            <li key={ item.id }>
                                <Link to={ item.path } className="nav-link">
                                    { item.name }
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
