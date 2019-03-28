import React from 'react'

export default function Title({ title, subtitle }) {
    return (
        <div className="title">
            <h3>{ subtitle }</h3>
            <h2>{ title }</h2>
            <div className="underline"></div>
        </div>
    )
}

Title.defaultProps = {
    subtitle: 'Our Subtitle',
    title: 'Our title'
}