import React, { useCallback } from 'react'

function ButtonCreate({ cb }) {
  
  return (
    <button onClick={cb}>GetData</button>
  )
}

function Ecom() {
  const memisButton = useCallback(() => {
    console.log('useCallback Example')
  }, [])

  return (
    <div>
      <h1>Hello</h1>
      
      <ButtonCreate cb={memisButton} />
    </div>
  )
}

export default Ecom
