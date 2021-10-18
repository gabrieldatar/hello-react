import React from 'react'
import PetShop from './PetShop'

function App(){

  const handleClick=()=>{
    console.log('Iniciando o banho...')
  }

  return(
    <PetShop
      dogs={2}
      custumerName="Gabriel"
      onClick={handleClick}
      status="Completed"
    />
  )
}

export default App