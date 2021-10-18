import React from 'react'
import PropTypes from 'prop-types'

function PetShop(props){

     const{dogs,cats,custumers,custumerName,onClick}=props

     return (
          <div>
               <h1>Dogs:{dogs}</h1>
               <h1>Cats:{cats}</h1>
               <div>
                    Quantidade de clientes:{custumers}
               </div>
               <div>
                    Nome do cliente: {custumerName}
               </div>
               <button onClick={onClick}>Iniciar banho</button>
          </div>
     )
}

PetShop.defaultProps={
     cats:0,
     custumers:[]
}

PetShop.propTypes={
     dogs:PropTypes.number.isRequired,
     cats:PropTypes.number,
     custumers:PropTypes.array,
     custumerName: PropTypes.string.isRequired,
     onClick: PropTypes.func.isRequired,
     status:PropTypes.oneOf(["Completed","Disabled"])
}

export default PetShop