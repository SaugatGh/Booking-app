import React from "react";
import "./featureProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://dlq00ggnjruqn.cloudfront.net/prometheus/getImage?id=309260"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Luxary Double Queen Room </span>
        <span className="fpCity">Las vegas</span>
        <span className="fpPrice">Starting from $300</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://casinossale.com/wp-content/uploads/2019/08/City-2Queen-beds-window-NEW-wide.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel State Miasto</span>
        <span className="fpCity">London</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.cntraveler.com/photos/59d79856333c330b281ce248/master/w_2048,h_1536,c_limit/Suite-ThePalazzo-LasVegas-CRHotel.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Conde Nast Traveler</span>
        <span className="fpCity">Sweden</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.cntraveler.com/photos/598c972130e0b978de59297f/1:1/w_2694,h_2694,c_limit/EXCLUSIVE_Richmond-7321-4.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Cosmopolitan State </span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
