import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [produits, setProduits] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const location = useLocation();

  const handleAddToCart = (produit, quantite) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === produit.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantite;
    } else {
      produit.attributes.quantity = quantite;
      items = [...items, produit];
    }
    setCartItems(items);
  };
  const handleRemoveToCart = (produit) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== produit.id);
    setCartItems(items);
  };
  const handleCartProductQuantite = (type, produit) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === produit.id);
    if (type === "incr") {
      items[index].attributes.quantity += 1;
    } else if (type === "desc") {
      if (items[index]?.attributes?.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItems?.map((item) => (count += item?.attributes?.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.map(
      (item) =>
        (subTotal += item?.attributes?.price * item?.attributes?.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);
  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        produits,
        setProduits,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveToCart,
        handleCartProductQuantite,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
