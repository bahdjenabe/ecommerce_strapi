import React from "react";
import cat1 from "../../../assets/img/1.jpg";
import cat2 from "../../../assets/img/2.jpg";
import cat3 from "../../../assets/img/6.jpg";
import cat4 from "../../../assets/img/5.jpg";
import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="category">
      <div className="category-content">
        {categories?.data.map((item) => (
          <div
            className="categories"
            key={item.id}
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_URL +
                item?.attributes?.img?.data?.attributes?.url
              }
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
