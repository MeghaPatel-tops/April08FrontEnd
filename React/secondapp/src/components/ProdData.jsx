import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';

function ProdData() {
    const [count,setCount]=useState(0);

    const cbFunction = useCallback(()=>{
        setCount(count+1)
    },[count])
       return(
            <div>
                <h1>Callback example</h1>
                <h1>Count:{count}</h1>
                <ChildComp cb={cbFunction} />
            </div>
       )
}

function ChildComp({cb}){
    return(
        
        <button onClick={cb}>+</button>
    )
}





export default ProdData