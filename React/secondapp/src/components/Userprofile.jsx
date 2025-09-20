import React, { useContext } from 'react'
import UserCart from './UserCart'
import { ThemeContext } from './TheamContext'

function Userprofile(props) {
    const theme = useContext(ThemeContext)
  return (
    <div  style={{
        backgroundColor: (theme) == "dark"?"black":"white",
        color: (theme)=="dark" ?"White":"black"
    }}>
        <h1>Username:{props.user.name}</h1>
        <h2>Email:{props.user.email}</h2>

        <UserCart user={props.user} />
    </div>
  )
}

export default Userprofile