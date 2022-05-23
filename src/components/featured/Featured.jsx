import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://a.cdn-hotels.com/gdcs/production143/d798/8d1f7b4d-99b8-4be3-9c43-ab67b36d0eab.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Venice</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.traveldailymedia.com/assets/2019/06/shutterstock_1316625557.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dubli</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://thumbs.dreamstime.com/b/view-grand-canal-ponte-degli-scalzi-venice-italy-june-bridge-barefoot-monks-62198120.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ponte Degli Scalzi</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
