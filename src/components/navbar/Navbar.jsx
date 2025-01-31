import CartWidget from "./CartWidget"
import "./navbar.css"



const Navbar = () => {
    return (
        <main>
            
            <nav className="navbar">
        <div className="navbar-content">
          <h1 className="navbar-logo">Titulo</h1>
          <ul className="navbar-menu">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <a href=""><CartWidget/></a>
      </nav>
      
    </main>
        
    );

}
 


export default Navbar;