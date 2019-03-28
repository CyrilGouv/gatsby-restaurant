import React from 'react'

export default function Banner({title, subtitle, children}) {
    return (
        <div className="banner">
            <h1>{ title }</h1>
            <h3>{ subtitle }</h3>
            { children }
        </div>
    )
}

Banner.defaultProps = {
    title: 'Default Title'
}