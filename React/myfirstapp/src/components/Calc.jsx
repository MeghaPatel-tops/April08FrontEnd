import React, { useState } from 'react'

function Calc() {
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");
    const [result,setResult]=useState("");
     
    const handleChanege1=(e)=>{
        setNum1(e.target.value)
    }
    const handleChanege2=(e)=>{
        setNum2(e.target.value)
    }

    const handlClick = (choice)=>{
        let result1;
        switch(choice){
            case '+':
            result1 = `addition = ${parseInt(num1)+ parseInt(num2)}`;
            break;
             case '-':
            result1 = `addition = ${parseInt(num1)- parseInt(num2)}`;
            break;
             case '*':
            result1 = `addition = ${parseInt(num1)* parseInt(num2)}`;
            break;
             case '/':
            result1 = `addition = ${parseInt(num1)/ parseInt(num2)}`;
            break;
        }
        setResult(result1)
    }
  return (
    <div>
        <fieldset>
            <legend>Simple calc</legend>
            <label htmlFor="">Enter num1</label>
            <input type="text" name="" id="" onChange={handleChanege1} />
            <br />
            <label htmlFor="">Enter num2</label>
            <input type="text" name="" id="" onChange={handleChanege2}/>
            <br />
            <button onClick={()=>handlClick('+')}>+</button>
            <button onClick={()=>handlClick('-')}>-</button>
            <button onClick={()=>handlClick('*')}>*</button>
            <button onClick={()=>handlClick('/')}>/</button>
             
                 <h1>{result}</h1> 
             
        </fieldset>
    </div>
  )
}

export default Calc