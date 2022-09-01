import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <CartWidget />
      <ItemListContainer greeting={"Bienvenidos a OmochaARG"} />
    </div>
  );
}

export default App;
