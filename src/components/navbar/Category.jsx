import "./category.css"
import React, { useState, useContext } from 'react'
import productsList from '../mock/products.mock.js'
import ItemCount from '../itemListContainer/ItemCount'
import { useParams, Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function Category() {
  const { categoryId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [alertMessage, setAlertMessage] = useState("");

  // Función para normalizar texto (remover acentos)
  const normalizeText = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  // Filtrar productos por categoría (ignorando acentos)
  const filteredProducts = productsList.filter(
    product => normalizeText(product.category) === normalizeText(categoryId)
  );

  function handleCarrito(cantidad, product) {
    addToCart(product, cantidad);
    setAlertMessage(`Agregaste ${cantidad} ${product.name} al carrito`);
    setTimeout(() => {
      setAlertMessage("");
    }, 4500);
  }

  return (
    <div className="category-container">
      {alertMessage && (
        <div className="alertMessage">
          {alertMessage}
        </div>
      )}
      
      <div className="category-header">
        <h2 className="category-title">Categoría: {categoryId}</h2>
        <Link to="/Home" className="back-button">
          ← Volver al inicio
        </Link>
        <p className="category-count">
          {filteredProducts.length} productos encontrados
        </p>
      </div>
      <hr />
      
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-container">
              <img 
                className="imageDetalle" 
                src={product.image} 
                alt={product.name} 
              />
              <div className="cuerpoDetalle">
                <h3 className="nameDetalle">{product.name}</h3>
                <p className="descriptionDetalle">{product.description}</p>
                <p className="descriptionDetalle">Stock: {product.stock}</p>
                <p className="priceDetalle">${product.price}</p>
                <ItemCount
                  initial={1}
                  stock={product.stock}
                  onAdd={(cantidad) => handleCarrito(cantidad, product)}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="no-products">
            <p>No se encontraron productos en la categoría {categoryId}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Category