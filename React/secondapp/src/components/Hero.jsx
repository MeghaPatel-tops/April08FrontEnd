import React from 'react'

import styled from 'styled-components'

const Herodiv  = styled.div`
            height: 500px;
            width: 100%;
            background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0XBZTyBAOwCpj5w4CSzXUgS-WI1iN6dK2jw&s);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            display:flex;
            justify-content: center;
            align-items:center;


        h1{
            color:blue;
            font-size:4em;
            text-shadow:3px 3px 5px white;
        }    
`

function Hero() {
  return (
    <div>
        <Herodiv>
            <h1>Tops tech</h1>
        </Herodiv>
    </div>
  )
}

export default Hero