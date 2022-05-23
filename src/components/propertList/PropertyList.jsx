import React from "react";
import "./propertList.css";

const PropertyList = () => {
  return (
    <div>
      <div className="pList">
        <div className="pListItem">
          <img src="https://d1bv4heaa2n05k.cloudfront.net/user-images/1447924496953/Beach-Villa-Bedroom6-[5529-A4]_main_1447924587831.jpeg" alt="Best hotel places" className="pListImg" />
          <div className="pListTitles">
              <h1>Gulmarg Hotels</h1>
              <h2>232 hotels</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src="https://somethingoffreedom.com/wp-content/uploads/2022/02/The-sunbeds-and-pool-at-the-PP-Princess-Resort-hotel-in-Koh-Phi-Phi.jpg" alt="Best hotel places" className="pListImg" />
          <div className="pListTitles">
              <h1>Koh Phi Phi Hotel</h1>
              <h2>233 hotels</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/02/Stonewood-Riverfront-Resort-North-Goa.jpg?resize=1024%2C683&ssl=1" alt="Best hotel places" className="pListImg" />
          <div className="pListTitles">
              <h1>North Goa</h1>
              <h2>234 hotels</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src="https://www.traveldailymedia.com/assets/2019/03/The-Outpost-Hotel-at-Sentosa.jpg" alt="Best hotel places" className="pListImg" />
          <div className="pListTitles">
              <h1>Hotels Sentosa</h1>
              <h2>235 hotels</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
