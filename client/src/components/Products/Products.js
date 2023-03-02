import React from "react";
import Product from "./Product/Product";

const Products = ({ innerPage, headingText, produits }) => {
  // console.log(produits);
  return (
    <div className="products">
      {!innerPage && <div className="title">{headingText}</div>}
      {/* !innerPage pour supprimer le titre sur la page */}

      <div className="product">
        {produits?.data.map((item) => (
          // console.log("pppp", item?.attributes),
          <Product key={item.id} id={item?.id} data={item?.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
