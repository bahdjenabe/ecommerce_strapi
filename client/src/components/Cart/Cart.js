import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../utils/context";
import { loadStripe } from "@stripe/stripe-js";
import { makePayementRequest } from "../../utils/api";

const Cart = ({ setOpenCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE);
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const resp = await makePayementRequest.post("/api/orders", {
        products: cartItems,
      });

      await stripe.redirectToCheckout({
        sessionId: resp.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cart">
      <div className="cart-opacity"></div>
      <div className="cart-content">
        <div className="header">
          <span className="heading">Achats</span>
          <span className="close-btn" onClick={() => setOpenCart(false)}>
            <MdClose />
            <span className="text">Fermer</span>
          </span>
        </div>

        {!cartItems?.length && (
          <div className="cart-contenu">
            <BsCartX />
            <span> Aucun produit dans le chariot</span>
            <button className="return-btn"> Retour à la boutique</button>
          </div>
        )}

        {cartItems?.length && (
          <>
            <CartItem />

            <div className="cart-footer">
              <div className="subTotal">
                <span className="text">Sous-total:</span>
                <span className="text total">{cartSubTotal}</span>
              </div>

              <div className="button">
                <button className="verifier" onClick={handlePayment}>
                  {" "}
                  Vérifier
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
