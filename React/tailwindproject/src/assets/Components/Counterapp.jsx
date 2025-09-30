import React, { useRef, useState } from 'react'

function Counterapp() {
    const [count1,setCount1]=useState(0);

    const countRef = useRef(0);

    const btnStyle ={
        padding:"10px 30px",
        border:"2px solid black",
        margin:"20px"
    }
  return (
    <div style={{
        margin:"50px",
        padding:"50px",
        // border:"10px solid black"
    }}>
        <fieldset>
            <legend>Counter app with useState</legend>
            <button style={btnStyle}
               onClick={()=>{
                   setCount1(count1+1)
               }}
            >+</button>
            <span>{count1}</span>
            <button style={btnStyle}  onClick={()=>{
                   setCount1(count1-1)
               }}>-</button>
        </fieldset>
         <fieldset>
            <legend>Counter app with useRef</legend>
            <button style={btnStyle} onClick={
                ()=>{
                    countRef.current = countRef.current+1;
                    console.log(countRef.current);
                    
                }
            }>+</button>
            <span>{countRef.current}</span>
            <button style={btnStyle} onClick={
                ()=>{
                    countRef.current = countRef.current-1;
                    console.log(countRef.current);
                    
                }
            }>-</button>
        </fieldset>
    </div>
  )
}

export default Counterapp