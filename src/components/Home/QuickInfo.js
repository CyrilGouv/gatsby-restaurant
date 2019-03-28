import React, { Component } from 'react'
import { Link } from 'gatsby'

import Title from '../Globals/Title'
import SectionBtn from '../Globals/SectionBtn'

export default class QuickInfo extends Component {
    render() {
        return (
            <section className="quickInfo">
                <Title subtitle="let us tell you" title="our mission" />
                <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos mollitia voluptate. Maiores accusantium praesentium doloribus exercitationem facilis itaque sit voluptas consequuntur consectetur, magni atque quos ea tempora maxime eum numquam velit eius. Adipisci possimus vel porro sed. Molestiae iusto, accusantium quis culpa placeat totam corporis officiis nulla cum tenetur.
                </p>
                <Link to="/about">
                    <SectionBtn text="about" />
                </Link>
            </section>
        )
    }
}
