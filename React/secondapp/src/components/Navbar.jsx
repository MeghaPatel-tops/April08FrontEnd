import React from 'react'

function Navbar() {

    const navbar={
        backgroundColor: "black",
        padding: "20px",
    }
    const navbarAnchor={
         padding: "10px",
            color:" white",
            textDecoration: "none",
            textAlign: "center"
    }
    
  return (
    <div>
            <h1>CSS Modules (Scoped CSS)</h1>
        <div style={navbar}>
        <a href="" style={navbarAnchor}>item-1</a>
        <a href="" style={navbarAnchor}>item-2</a>
        <a href="" style={navbarAnchor}>item-3</a>

         <a href="" style={navbarAnchor}>item-2</a>
        <a href="" style={navbarAnchor}>item-3</a>
         <a href="" style={navbarAnchor}>item-2</a>
        <a href="" style={navbarAnchor}>item-3</a>
    </div>

        </div>
  )
}

export default Navbar