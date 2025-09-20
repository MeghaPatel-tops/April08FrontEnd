import React, { useEffect, useState } from 'react'

function About() {
    const[uname,setUname]= useState("");
    const [email,setEmail]=useState("");
    useEffect(()=>{
        console.log("component update");  
        console.log(uname);
          
    },[email])

    const handleChange = (e)=>{
          setUname(e.target.value);
    }
      const handleChange1 = (e)=>{
          setEmail(e.target.value);
    }
   
  return (
    <div>
        <input type="text" name="uname" id="" onChange={handleChange} />
        <input type="text" name="email" id="" onChange={handleChange1} />
       
    </div>
  )
}

export default About