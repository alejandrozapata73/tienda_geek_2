import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar
        logo={"Tienda Geeks"}
        link1={"home"}
        link2={"quienes"}
        link3={"contacto"}
      />
      <Switch>
        <Route exact path="/">
          <ItemListContainer heading={"tienda geeks"} />
        </Route>
        <Route path="/category/:category">
          <ItemListContainer heading={"Rig para mineria Ethereum"} />
        </Route>

        <CartProvider>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </CartProvider>
      </Switch>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
