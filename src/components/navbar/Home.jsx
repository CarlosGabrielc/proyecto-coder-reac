import "./home.css"
import { Link } from "react-router-dom";

const categoriesList = [
    { id: 1, name: "Perfumes" },
    { id: 2, name: "Electrodomésticos" },
    { id: 3, name: "Smartwatches" },
    { id: 4, name: "Celulares" },
];

export default function Home() {
    return (
        <>
            <div className="home-container" style={{ height: '70vh' }}>
                <h1 className="home">Bienvenido a ConaMore</h1>
            </div>
            <div className="categories-container">
                <h1>Categorías De Productos</h1>
                <div className="categories-grid">
                    {categoriesList.map((cat) => (
                        <Link 
                            key={cat.id} 
                            to={`/Productos/${cat.name}`} 
                            className="category-link"
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}