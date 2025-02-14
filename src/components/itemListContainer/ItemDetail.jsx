import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./itemDetail.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../main.jsx';

function ItemDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, "items", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setProduct({
            id: docSnap.id,
            ...docSnap.data()
          });
        } else {
          console.log("No existe el producto!");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  function handleCarrito(cantidad) {
    if (product) {
      addToCart(product, cantidad);
      setAlertMessage(`Agregaste ${cantidad} ${product.name} al carrito`);
      setTimeout(() => {
        setAlertMessage("");
      }, 4500);
    }
  }

  if (loading) {
    return <div>Cargando producto...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h1 className="titleDetalle">{product.name}</h1>
      <div className="cuerpoDetalle">
        <img className="imageDetalle" src={product.image} alt={product.name} />
        <div>
          <h2 className="nameDetalle">{product.name}</h2>
          <p className="descriptionDetalle">{product.description}</p>
          <p className="priceDetalle">Precio: ${product.price}</p>
          <ItemCount stock={product.stock} onAdd={handleCarrito} />
        </div>
      </div>
      {alertMessage && <div className="alertMessage">{alertMessage}</div>}
    </div>
  );
}

export default ItemDetail;