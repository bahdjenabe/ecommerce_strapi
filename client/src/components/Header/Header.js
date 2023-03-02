import React, { useContext, useEffect, useState } from "react";

import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { Context } from "../../utils/context";

const Header = () => {
  const navigate = useNavigate();
  const { cartCount } = useContext(Context);
  // const { id } = useParams();
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset);
    if (offset) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // console.log(scrolled);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className={`main-header ${scrolled ? "sticky-header" : ""} `}>
        <div className="header-containt">
          <div className="left">
            <Link to="/"> Accueil </Link>
            <Link to="/apropos"> A propos </Link>
            <Link to={`/category/id`}> Catégories </Link>
          </div>
          <div className="center">
            <Link to="/"> BAH STORE </Link>
          </div>
          <div className="right">
            <TbSearch onClick={() => setOpenSearch(true)} />
            <AiOutlineHeart />
            <span className="shop-icon" onClick={() => setOpenCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </div>

      {openCart && <Cart setOpenCart={setOpenCart} />}
      {openSearch && <Search setOpenSearch={setOpenSearch} />}
    </>
  );
};

export default Header;
