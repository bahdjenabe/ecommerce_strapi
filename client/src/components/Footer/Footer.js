import React from "react";
import { FaLocationArrow, FaEnvelope, FaPhone } from "react-icons/fa";
import Paiement from "../../assets/img/payment.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="item">A propos</div>
          <div className="item-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et
            maxime repellendus fuga magni facere ducimus tempore, deserunt in
            magnam.
          </div>
        </div>
        <div className="col">
          <div className="item">Contact</div>
          <div className="item-text">
            <FaLocationArrow />
            <div className="text">Conakry, lambanyi</div>
          </div>
          <div className="item-text">
            <FaPhone />
            <div className="text">Téléphone: 620522163</div>
          </div>
          <div className="item-text">
            <FaEnvelope />
            <div className="text">Email: djenaboulim@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="item">Catégories</div>
          <span className="text">Casque de musique</span>
          <span className="text">Montres intelligentes</span>
          <span className="text">Haut-parleurs Bluetooth</span>
          <span className="text">écouteurs sans fil</span>
          <span className="text">Domicile cinéma</span>
          <span className="text">Projecteurs</span>
        </div>
        <div className="col">
          <div className="item">Pages</div>
          <span className="text">Domicile</span>
          <span className="text">A propos</span>
          <span className="text">Politique de confidentialité</span>
          <span className="text">Retour</span>
          <span className="text">Termes et conditions</span>
          <span className="text">Nous contacter</span>
        </div>
      </div>

      <div className="botton-bar">
        <div className="botton-bar-content">
          <div className="text">BAH 2023 CREER PAR BAH DJENABOU.</div>
          <img src={Paiement} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
