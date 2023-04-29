import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import { BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="category/:id" element={<ItemListContainer />} />
        <Route path="category/:id" element={<ItemListContainer />} />
        <Route path="category/:id" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
      </Routes>

      <ItemListContainer greeting="Bienvenidos a mi Tienda" />
    </BrowserRouter>
  );
}

export default App;
