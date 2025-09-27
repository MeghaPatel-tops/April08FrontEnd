import React, { useState } from 'react'

function FirstForm() {
  const [step1,setStep1]=useState({});

  const handleChange = (e)=>{
    const {name,value}= e.target;
      setStep1({
        ...step1,
        [name]:value
      })
  }

  const handleClick = ()=>{
       console.log(step1);

       localStorage.setItem('step1',JSON.stringify(step1));
       
  }
  return (
    <div>
        <fieldset>
            <legend>Personal Details</legend>
            <label htmlFor="">
                Enter Name:
            </label>
            <input type="text" name="username" id="" onChange={handleChange}/>
            <br /><br />
             <label htmlFor="">
                Enter Email:
            </label>
            <input type="text" name="email" id="" onChange={handleChange} />
              <br /><br />
             <label htmlFor="">
                Enter Contact:
            </label>
            <input type="text" name="contact" id="" onChange={handleChange} />
         <br /><br />
        <input type="button" className='btn btn-primary' value="Add" onClick={handleClick} />
        
        </fieldset>
    </div>
  )
}

export default FirstForm