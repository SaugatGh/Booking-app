import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featureProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";

import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertList/PropertyList";

import "./Home.css";

const Home = () => {
  return (
    // This Home jsx cover all localhost:3000 all over becuase it is the page we vistit and search for wanted things.
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests Love</h1>
        <FeaturedProperties />
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
