import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import prod from "../../../assets/img/prod.webp";
import UseFetch from "../../../hooks/UseFetch";

const Search = ({ setOpenSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  let data = UseFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query?.length) {
    data = null;
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="search">
      <div className="form">
        <input
          type="text"
          autoFocus
          placeholder="Entrez le nom de votre produit"
          value={query}
          onChange={handleChange}
        />
        <MdClose onClick={() => setOpenSearch(false)} />
      </div>

      <div className="search-result-content">
        <div className="search-results">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="search-result-item"
              onClick={() => {
                navigate("/produit/" + item.id);
                setOpenSearch(false);
              }}
            >
              <div className="image">
                <img
                  src={
                    process.env.REACT_APP_URL +
                    item?.attributes?.img?.data[0]?.attributes?.url
                  }
                  alt=""
                />
              </div>
              <div className="produit-details">
                <span className="name">{item?.attributes?.title}</span>
                <span className="desc">{item?.attributes?.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
