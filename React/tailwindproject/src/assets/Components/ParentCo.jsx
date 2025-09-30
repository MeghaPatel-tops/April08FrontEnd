import React from 'react'
import ChildCo from './ChildCo'


function ParentCo(props) {
  return (
    <div>ParentCo
        <h1>Title={props.title}</h1>
        <ChildCo title={props.title} />
    </div>
  )
}

export default ParentCo