import "./App.css"
import Navbar from "./components/navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/itemListContainer/ItemDetailContainer";
import ItemDetail from "./components/itemListContainer/ItemDetail";
import Home from "./components/navbar/home";
import NotFound from "./components/notFound/NotFound";
import Category from "./components/navbar/Category";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* Ruta por parametros */}
        <Route path="/Productos/:categoryId" element={<Category />} />
        <Route path="/Productos" element={<ItemDetailContainer />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/Contacto" element={<ContactForm />} />


        {/*Ruta pora 404  */}
        <Route path="*" element={<NotFound />}> </Route>

      </Routes>


    </BrowserRouter>
  );

}

export default App
