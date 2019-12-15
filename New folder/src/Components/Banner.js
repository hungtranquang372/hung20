import React from 'react'

export default function Banner({title,subtitle}) {
    return (
        <div className="banner">
            <h2>{title}</h2>
            <div/>
            <h3>{subtitle}</h3>
        </div>
    )
}
