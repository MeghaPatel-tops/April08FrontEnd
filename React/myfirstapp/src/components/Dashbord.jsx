import React from 'react'

function Dashbord({userRole}) {
    let list
    switch(userRole){
        case 'admin':
        list = <ul>
            <li>Manage User</li>
            <li>Manage Product</li>
            <li>Manage Sell person</li>
        </ul>
        break;
        case 'user':
         list = <ul>
            <li>View Product</li>
            <li>Buy</li>
            <li>My Orders</li>
         </ul>
        break;
        case 'guest':
        list =<ul>
            <li>View Product</li>
            <li>Filter</li>
        </ul>  
        break;   
    }
  return (
    <div>{list}</div>
  )
}

export default Dashbord