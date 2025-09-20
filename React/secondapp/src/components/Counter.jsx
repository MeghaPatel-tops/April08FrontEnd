import React, { useEffect, useRef } from 'react'

function Counter() {
  useEffect(()=>{
    console.log("component render");
    
  })
  const count = useRef(0)
  return (
    <div>
        <h1>
            Counter App

            
        </h1>
        <button onClick={()=>{
           count.current++;
           console.log(count.current)
        }}>+</button>{count.current} <button onClick={()=>{
           count.current--;
            console.log(count.current);
        }}>-</button>
    </div>
  )
}

export default Counter