import React from "react";
import UseFetch from "../../../hooks/UseFetch";
import Products from "../../Products/Products";

const RelatedProduct = ({ productId, categoryId }) => {
  const data = UseFetch(
    `/api/products?populate=*&[filters][id][$ne]=${productId}&[filters][categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );

  console.log(data);
  return (
    <div className="relatedProduct">
      <Products headingText="Produits connexes" produits={data} />
    </div>
  );
};

export default RelatedProduct;
