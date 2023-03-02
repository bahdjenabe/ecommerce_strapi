import React, { useContext, useState } from "react";
import prod from "../../assets/img/b1.webp";
import {
  FaCartPlus,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPrint,
} from "react-icons/fa";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
import { useParams } from "react-router-dom";
import UseFetch from "../../hooks/UseFetch";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const { handleAddToCart } = useContext(Context);
  const [quantite, setQuantite] = useState(1);

  const increment = () => {
    setQuantite((prevState) => prevState + 1);
  };

  const decrement = () => {
    setQuantite((prevState) => {
      if (prevState === 1) {
        return 1;
      } else {
        return prevState - 1;
      }
    });
  };

  const { id } = useParams();

  const data = UseFetch(`/api/products?populate=*&[filters][id]=${id}`);
  console.log(data);
  if (!data) return;

  const produit = data?.data[0]?.attributes;
  return (
    <div className="singleProduct">
      <div className="layout">
        <div className="singleProduct-content">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_URL +
                produit?.img?.data[0]?.attributes?.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{produit?.title}</span>
            <span className="price">{produit?.price}</span>
            <span className="desc">{produit?.desc}</span>

            <div className="button-content">
              <div className="buttons">
                <span onClick={decrement}>-</span>
                <span>{quantite}</span>
                <span onClick={increment}>+</span>
              </div>

              <button
                className="add"
                onClick={() => handleAddToCart(data?.data[0], quantite)}
              >
                <FaCartPlus size={20} />
                Ajoutez au panier
              </button>
            </div>

            <span className="diviseur" />

            <div className="info">
              <span className="text">
                Catégorie:
                <span>{produit?.categories?.data[0]?.attributes?.title}</span>
              </span>
              <span className="text">
                Partager:
                <span className="social-icon">
                  <FaFacebookF size={16} />
                  <FaLinkedinIn size={16} />
                  <FaInstagram size={16} />
                  <FaTwitter size={16} />
                  <FaPrint size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>

        <RelatedProduct
          productId={id}
          categoryId={produit?.categories?.data[0]?.id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
