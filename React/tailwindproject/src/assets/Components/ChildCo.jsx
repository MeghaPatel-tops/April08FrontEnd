import React, { useContext } from 'react'
import { themeContext } from './themeContext'

function ChildCo(props) {
    const {theme,setTheme} = useContext(themeContext);
    //console.log(theme)
  return (
    <div>ChildCo
        <h1>Title from parent={props.title}</h1>
        <button style={{border:"1px solid black"}} onClick={()=>{
            let newTheme = theme === 'light' ?'dark' :"light"
            setTheme(
                newTheme
            )
            console.log(theme);
            
        }}>
                {theme === 'light' ?'Dark' :"Light"}
        </button>
    </div>
  )
}

export default ChildCo