import React from "react";
import banner from "../../../assets/img/b.jpeg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <div className="text-content">
          <h1>Ventes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ullam dicta consequatur numquam minima excepturi aut
            exercitationem ratione. Saepe, molestiae!
          </p>

          <div className="banniere">
            <div className="banniere">Lire la suite</div>
            <div className="banniere v1">Achetez maintenant</div>
          </div>
        </div>
        <img className="banniere-img" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
