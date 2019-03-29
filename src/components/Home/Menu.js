import React from 'react'
import Products from './Products'
import { StaticQuery, graphql } from 'gatsby'
import SectionBtn from '../Globals/SectionBtn'
import Title from '../Globals/Title'

export default function Menu() {
    return (
        <section>
            <Title title="featured items" subtitle="little taste" />
            <div className="productList">
                <StaticQuery
                    query={ products }
                    render={ data => {
                        const products = data.items.edges

                        return products.map(item => (
                            <Products key={ item.node.id } product={ item.node } />
                        ))
                    } }
                />
            </div>
        </section>
    )
}

const products = graphql`
    {
        items:allContentfulMenu(filter: { node_locale: { eq: "en-US" } }) {
            edges {
                node {
                    id
                    name
                    price
                    ingredient
                        img {
                            fixed(width: 150, height: 150) {
                                ...GatsbyContentfulFixed_tracedSVG
                            }
                        }
                }
            }
        }
    }
`