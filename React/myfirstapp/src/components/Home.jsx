import React from 'react'

function Home({isLogging,isloading}) {
  let msg="";
  if(isloading){
       msg = <h1>Loading.....</h1>
  }
  else{
      msg=<h1>Data found</h1>
  }
  return (
    <div>
        {
          isLogging ? <p>Welcome to app</p> : <p>Login first</p>
        }

        <div>{msg}</div>
    </div>
  )
}

export default Home