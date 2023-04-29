import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./Components/ItemDetailContainer";

function App() {
  return (
    
    
    <BrowserRouter>
      <NavBar />

      <main className="main">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi tienda" />} />

          <Route path="/category/:id" element={<ItemListContainer />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart />} />

       
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
