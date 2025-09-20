import React, { useContext } from 'react'
import { ThemeContext } from './TheamContext'

function UserCart(props) {
    const theme = useContext(ThemeContext)
  return (
    <div style={{
        backgroundColor: (theme) == "dark"?"black":"white",
        color: (theme)=="dark" ?"White":"black"
    }}>
        UserCart {props.user.uid}
    </div>
  )
}

export default UserCart