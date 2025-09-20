import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Prodcut() {
   const[products , setProduct]= useState([]);
   const [cart ,setCart] = useState([]);

   const getProduct =async()=>{
      const data = await axios.get("https://fakestoreapi.com/products");
      console.log(data.data);
      
        //  const res = await fetch("https://fakestoreapi.com/products");
        //  const data = await res.json();
         console.log("product state change in get");
         
         setProduct(data)
        
         
   }
     const getCart =async()=>{
         const res = await fetch("https://fakestoreapi.com/carts");
         const data = await res.json();
        setCart(data)      
   }

   useEffect(()=>{
        console.log("component load" );
        
      
   },[products])

  return (
    <div>Prodcut

        <button onClick={()=>{
            getProduct();
        }}>GetProduct</button>
    </div>
  )
}

export default Prodcut