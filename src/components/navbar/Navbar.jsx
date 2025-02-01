import CartWidget from "./CartWidget"
import "./navbar.css"
import { Link } from "react-router-dom";




const Navbar = () => {
  return (

    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-logo">Titulo</h1>
        <ul className="navbar-menu">
          <li><Link to={'/Home'}>Inicio</Link></li>
          <li><Link to={'/Productos'}>Todos los Productos</Link></li>
          <li><Link to={'/Contacto'}>Contacto</Link></li>
        </ul>
      </div>
      <Link to={'/Carrito'}><CartWidget /></Link>
    </nav>

  );

}



export default Navbar;