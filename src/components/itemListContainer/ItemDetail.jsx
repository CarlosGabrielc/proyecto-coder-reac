import "./itemDetail.css"
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import productsList from '../mock/products.mock'
function ItemDetail() {
  const { id } = useParams()
  console.log(id);

  const [product, setProduct] = useState({})

  useEffect(() => {

    const findProduct = productsList.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(findProduct);
  }, [id])




  return (
    <div>
      <h2 className='titleDetalle'>Detalle del producto</h2>
      <hr />


      <img className='imageDetalle' src={product.image} alt="" />
      <div className='cuerpoDetalle'>
        <h3 className='nameDetalle'>{product.name}</h3>
        <p className='descriptionDetalle'>{product.description} </p>
        <p className='priceDetalle'>{product.price} </p>
      </div>

    </div>
  )
}

export default ItemDetail