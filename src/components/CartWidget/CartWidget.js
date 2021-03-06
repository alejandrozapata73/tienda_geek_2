// import { useContext } from "react";
// import { BsFillCartFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";

// export const CartWidget = () => {
//   const { stockCart, cart } = useContext(CartContext);

//   return (
//     <Link
//       to="/cart"
//       className={`cart-widget ${cart.length === 0 ? "cart-hidden" : ""}`}
//     >
//       <BsFillCartFill />
//       <span>{stockCart()}</span>
//     </Link>
//   );
// };

import "./CartWidget.css";

const CartWidget = () => {
  return (
    <li>
      <a href="index.html" className="nav-link">
        <i className="fas fa-shopping-cart"></i>
      </a>
    </li>
  );
};

export default CartWidget;
