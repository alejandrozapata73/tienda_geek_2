import React, { useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ title, description, price, cantidad, pictureUrl }) => {
  const [finishBuy, setFinishBuy] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = (amount, cantidad) => {
    if (amount <= cantidad) {
      alert(`Agregaste ${amount} producto(s) al carrito`);
      setFinishBuy(true);
    } else {
      alert("No hay stock disponible para este producto");
    }
  };

  return (
    <div className="item-detail text-center">
      <h2 className="display-6">Detalle del Producto</h2>
      <div className="container">
        <img src={pictureUrl} alt="" />
        <p>{title}</p>
        <p>{description}</p>
        <p>${price}</p>
        {finishBuy > 0 && (
          <Link to={"/cart"}>
            <button type="button" className="btn btn-primary" onClick={addItem}>
              Ir al Carrito
            </button>
          </Link>
        )}
        {!finishBuy && (
          <ItemCount cantidad={cantidad} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
