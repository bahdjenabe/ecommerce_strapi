import React from "react";
import { useNavigate } from "react-router-dom";
import prod from "../../../assets/img/casque.webp";

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div className="product-content" onClick={() => navigate(`produit/${id}`)}>
      <div className="image">
        <img
          src={process.env.REACT_APP_URL + data?.img?.data[0]?.attributes?.url}
          alt=""
        />
      </div>
      <div className="detail">
        <span className="name">{data?.title}</span>
        <span className="price">{data?.price} FG</span>
      </div>
    </div>
  );
};

export default Product;
