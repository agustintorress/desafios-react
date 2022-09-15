import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar brand={"https://cdn.discordapp.com/attachments/852685565316825148/1011984326390452264/OmochaArg.gif"} />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={" Bienvenidos a OmochaARG"} />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={" Bienvenidos a OmochaARG"} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
