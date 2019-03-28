import React from 'react'

export default function PageHeader({children, page}) {
  console.log(page)
  return (
    <header className={`pageHeader ${page}`}>
      { children }
    </header>
  )
}
