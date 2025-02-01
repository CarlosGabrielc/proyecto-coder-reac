import "./itemDetailContainer.css"
import { useEffect, useState } from "react"
import productsList from '../mock/products.mock'
import Item from './Item'
function ItemDetailContainer() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(productsList)
    }, [])

    
    return (
        <div >
            <h1 className='title'>Lista de productos</h1>
            <hr />
            <div className="container" >
                {products.map((product) => (
                    <Item className="item"  key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ItemDetailContainer