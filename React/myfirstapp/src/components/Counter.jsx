import React, { useState } from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    const [text1,setText1]=useState("");
     const [text2,setText2]=useState("");


    const increCount =()=>{
        setCount(count+1);
    }
    const decreCount =()=>{
        setCount(count-1);
    }

    const handlChange= (e)=>{
        setText1(e.target.value);
    }

    const handlChangenum= (e)=>{
        setText2(e.target.value);
    }

    const hadleClick=()=>{
        let num3 = parseInt(text1) + parseInt(text2);
        
        alert(num3 );
    }
  return (
    <div>
        <fieldset>
            <legend>Counter App</legend>
            <button onClick={decreCount}>-</button>
            <span>{count}</span>
            <button onClick={increCount}>+</button>

            <br />
            <label htmlFor="">
                Enter Text
            </label>
            <br />
            <br />
            <input type="text" name="txt1" id="" onChange={handlChange}/>
            
             <label htmlFor="">
                Enter Text
            </label>
            <br />
            <br />
            <input type="text" name="txt2" id="" onChange={handlChangenum}/>
            
            <button onClick={hadleClick}>Save</button>
        </fieldset>

    </div>
  )
}

export default Counter