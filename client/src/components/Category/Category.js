import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../../hooks/UseFetch";
import Products from "../Products/Products";

const Category = () => {
  const { id } = useParams();

  const data = UseFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  console.log("dddddd1", data);
  return (
    <div className="category-main">
      <div className="layout">
        <div className="title">
          {data?.data[0]?.attributes?.categories?.data[0]?.attributes?.title}
        </div>

        <Products innerPage={true} produits={data} />

        {/* innerPage={true} pour supprimer le titre sur la page */}
      </div>
    </div>
  );
};

export default Category;
