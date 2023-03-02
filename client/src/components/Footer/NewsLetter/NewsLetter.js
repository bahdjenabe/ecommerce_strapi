import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <div className="newsLetter-container">
        <span className="text"> Bulletin </span>
        <span className="text1">
          {" "}
          Inscrivez-vous pour les dernières mises à jour et offres{" "}
        </span>
        <div className="form">
          <input type="text" placeholder="Adresse email" />
          <button> Abonnez-vous </button>
        </div>
        <div className="text2">
          {" "}
          Sera utilisé conformément à notre politique de confidentialité.{" "}
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaLinkedinIn size={14} />
          </div>
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaInstagramSquare size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
