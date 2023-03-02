import React, { useContext } from "react";
import prod from "../../../assets/img/prod.webp";
import { MdClose } from "react-icons/md";
import { Context } from "../../../utils/context";

const CartItem = () => {
  const { cartItems, handleRemoveToCart, handleCartProductQuantite } =
    useContext(Context);
  return (
    <div className="cartItem">
      {cartItems?.map((item) => (
        <div className="cartContent" key={item.id}>
          <div className="cartImg">
            <img
              src={
                process.env.REACT_APP_URL +
                item?.attributes?.img?.data[0]?.attributes?.url
              }
              alt=""
            />
          </div>

          <div className="cart-detail">
            <span className="prod-name">{item?.attributes?.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handleRemoveToCart(item)}
            />

            <div className="buttons">
              <span onClick={() => handleCartProductQuantite("desc", item)}>
                -
              </span>
              <span>{item?.attributes?.quantity}</span>
              <span onClick={() => handleCartProductQuantite("incr", item)}>
                +
              </span>
            </div>

            <div className="text">
              <span>{item?.attributes?.quantity}</span>
              <span>x</span>
              <span className="price">
                {item?.attributes?.price * item?.attributes?.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
