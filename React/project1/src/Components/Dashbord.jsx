import React from 'react'
import Hero from './Hero'
import { useNavigate } from 'react-router-dom';

function Dashbord() {
    const nagivate = useNavigate();
    const pageTransfer = ()=>{
                alert("You are transfer to Home");
                nagivate('/home');
    }
  return (
    <div>
        <Hero />
        <button onClick={pageTransfer}>Click</button>
    </div>
  )
}

export default Dashbord