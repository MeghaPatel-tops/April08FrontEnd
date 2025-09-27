import React from 'react'

function Hero() {
  return (
    <div>
        <div className="d-flex justify-content-center align-items-center" style={{height:"500px",backgroundImage:"url(https://m.media-amazon.com/images/I/81V2hzNkcsL._UF894,1000_QL80_.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%" }}>
  <div className="container text-center">
    <h1 style={{fontSize:"3em",color:"lightgreen",textShadow:"3px 3px 5px black"}}>My Portfolio</h1>      
    <p style={{fontSize:"2em",color:"lightgreen",textShadow:"3px 3px 5px black"}}>Some text that represents "Me"...</p>
  </div>
</div>
    </div>
  )
}

export default Hero