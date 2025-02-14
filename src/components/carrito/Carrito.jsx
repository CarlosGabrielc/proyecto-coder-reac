// import { useContext, useState } from 'react';
// import { CartContext } from '../context/CartContext';
// import './Carrito.css';


// function Carrito() {
//   const { cart, removeFromCart, clearCart } = useContext(CartContext);
//   const [compraExitosa, setCompraExitosa] = useState(false); // Estado para mostrar el mensaje de compra exitosa
//   const [carritoVacio, setCarritoVacio] = useState(false); // Estado para mostrar el mensaje de carrito vacío

//   // Calculamos el total del carrito (precio * cantidad de cada producto)
//   const totalCarrito = cart.reduce((acc, producto) => acc + producto.price * producto.quantity, 0);

//   const handleComprar = () => {
//     if (cart.length === 0) {
//       setCarritoVacio(true); // Si el carrito está vacío, mostramos el mensaje de carrito vacío
//       setCompraExitosa(false); // Ocultamos el mensaje de compra exitosa
//     } else {
//       setCompraExitosa(true); // Si hay productos, muestra la compra exitosa
//       setCarritoVacio(false); // Ocultamos el mensaje de carrito vacío
//       clearCart(); // Vacía el carrito después de la compra
//     }
//   };

//   return (
//     <div className="carrito-container">
//       <h2 className="carrito-title">Tu Carrito</h2>
      
//       {/* Mensajes condicionales */}
//       {compraExitosa && <div className="compraExitosa">¡Compra realizada con éxito!</div>}
//       {carritoVacio && <div className="carritoVacio">El carrito está vacío. Agrega productos antes de comprar.</div>}

//       {cart.length === 0 ? (
//         <p className="carrito-empty">El carrito está vacío</p>
//       ) : (
//         <ul className="carrito-list">
//           {cart.map((producto) => (
//             <li key={producto.id} className="carrito-item">
//               <img src={producto.image} alt={producto.name} className="carrito-item-image" />
//               <span className="carrito-item-details">
//                 {producto.name} - <strong>Cantidad: {producto.quantity}</strong> x ${producto.price}
//               </span>
//               <button 
//                 onClick={() => removeFromCart(producto.id)} 
//                 className="carrito-item-remove"
//               >
//                 Eliminar
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Mostrar el total */}
//       {cart.length > 0 && <h3 className="carrito-total">Total: ${totalCarrito.toFixed(2)}</h3>}

//       <button 
//         onClick={handleComprar} 
//         disabled={cart.length === 0} 
//         className="carrito-buy-button"
//       >
//         Comprar
//       </button>

//       <button onClick={clearCart} className="carrito-clear-button">Vaciar Carrito</button>
//     </div>
//   );
// }

// export default Carrito;


import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../main';
import './Carrito.css';

function Carrito() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: ''
  });

  // Calculamos el total del carrito
  const totalCarrito = cart.reduce((acc, producto) => acc + producto.price * producto.quantity, 0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleComprar = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      return;
    }

    try {
      // Crear el objeto de la orden
      const order = {
        buyer: formData,
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total: totalCarrito,
        date: new Date().toISOString()
      };

      // Guardar la orden en Firebase
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al procesar la orden:", error);
    }
  };

  if (orderId) {
    return (
      <div className="compra-exitosa">
        <h2>¡Compra realizada con éxito!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <p>Guarda este número para hacer seguimiento de tu pedido</p>
        <p className='mensaje-whatsapp'>Para mas rapidez mandanos el codigo de seguimiento al whatsapp</p>
        <a 
          href="https://walink.co/b35abd" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-button"
        >
          Contactar por WhatsApp
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    );
  }

  return (
    <div className="carrito-container">
      <h2 className="carrito-title">Tu Carrito</h2>

      {cart.length === 0 ? (
        <p className="carrito-empty">El carrito está vacío</p>
      ) : (
        <>
          <ul className="carrito-list">
            {cart.map((producto) => (
              <li key={producto.id} className="carrito-item">
                <img src={producto.image} alt={producto.name} className="carrito-item-image" />
                <span className="carrito-item-details">
                  {producto.name} - <strong>Cantidad: {producto.quantity}</strong> x ${producto.price}
                </span>
                <button 
                  onClick={() => removeFromCart(producto.id)} 
                  className="carrito-item-remove"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <div className="carrito-total">
            <p>Total: ${totalCarrito}</p>
          </div>

          {!showForm ? (
            <button 
              onClick={() => setShowForm(true)} 
              className="carrito-comprar"
            >
              Proceder al Pago
            </button>
          ) : (
            <form onSubmit={handleComprar} className="checkout-form">
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="direccion">Dirección de envío:</label>
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="carrito-comprar">
                Confirmar Compra
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default Carrito;