import CartWidget from "./components/CartWidget";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <CartWidget />
      <ItemListContainer greeting={"Bienvenidos a OmochaARG"} />
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default App;
