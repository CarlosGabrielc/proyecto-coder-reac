import { PiShoppingCartFill } from "react-icons/pi";
import "./cartWidget.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Importa el CartContext


const CartWidget = () => {
    const { cart } = useContext(CartContext); // Accedemos al carrito desde el contexto
  
    // Calculamos la cantidad total de productos en el carrito
    const totalProductos = cart.reduce((acc, producto) => acc + producto.quantity, 0);
  
    return (
      <div className="cart-widget">
        <PiShoppingCartFill size={50} color="green" />
        <h2>{totalProductos}</h2> {/* Mostramos el total de productos */}
      </div>
    );
  };
  
  export default CartWidget;