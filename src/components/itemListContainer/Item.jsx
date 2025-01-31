import '../../../src/App.css'
import React from 'react'
import { Link } from 'react-router-dom'


//sirve para preentrega 2
function Item({product}) {
  return (
    <div className='card'>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <Link to={`/item/${product.id}`} role='button' >Ver detalles</Link>
    </div>
  )
}

export default Item;