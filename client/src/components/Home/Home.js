import React, { useContext, useEffect } from "react";
import { fetchDataApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
  const { categories, setCategories } = useContext(Context);
  const { produits, setProduits } = useContext(Context);

  const getAllCategories = async () => {
    try {
      const resp = await fetchDataApi("/api/categories?populate=*");
      if (resp) {
        setCategories(resp);
        console.log(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProducts = async () => {
    try {
      const resp = await fetchDataApi("/api/products?populate=*");
      if (resp) {
        setProduits(resp);
        // console.log(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
    getAllProducts();
  }, []);
  return (
    <div>
      <Banner />
      <div className="main-home">
        <div className="layout">
          <Category categories={categories} />
          <Products produits={produits} headingText="Produits populaires" />
        </div>
      </div>
    </div>
  );
};

export default Home;
