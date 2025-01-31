import "./App.css"
import Navbar from "./components/navbar/Navbar";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/itemListContainer/ItemDetailContainer";
import ItemDetail from "./components/itemListContainer/ItemDetail";
function App() {

  return (
<BrowserRouter>
<Navbar/>
<Routes>

<Route path="/" element={<ItemDetailContainer/>}/>
<Route path="/item/:id" element={<ItemDetail/>}/>

</Routes>


</BrowserRouter>


    // <body>
    //   <div>
    //     <Navbar />
    //   </div>
    //   <main>
    //     <div>
    //     <Header/>
    //   </div>
    //   </main>
      
    // </body>
      
    

  );

}

export default App
