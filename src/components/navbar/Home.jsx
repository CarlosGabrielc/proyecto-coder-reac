import "./home.css"
import { Link } from "react-router-dom";
const categoriesList = [
    { id: 1, name: "Perfumes" },
    { id: 2, name: "Electrodomesticos" },
    { id: 3, name: "Smartwatches" },
    { id: 4, name: "Celulares" },

];

export default function Home() {
    return (
        <>

            <div className="home-container">
                <h1 className="home">Bienvenido a ConaMore</h1>
            </div>
            <div>
                <h1>Categorias</h1>
                <ul>
                    {categoriesList.map((cat) => (
                        <li key={cat.id}>
                            <Link to={`/Productos/${cat.id}`}>{cat.name} </Link>
                        </li>
                    ))
                    }

                </ul>
            </div>

        </>


    )
}