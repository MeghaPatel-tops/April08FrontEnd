import React from 'react'
import ParentCo from './ParentCo'


function GrandPa() {
    const title = "My web Page"
  return (
    <div>GrandPa

        <ParentCo title={title} />
    </div>
  )
}

export default GrandPa