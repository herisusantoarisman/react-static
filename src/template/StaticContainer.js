// a React Component that includes the header and footer
import React from "react";

import Header from "./../Component/Header";
import Footer from "./../Component/Footer";
import Navigation from "./../Component/Navigation";
import StaticContent from "./../Component/StaticContent";

// use the route name from React Router to request the right data
const StaticContainer = ({ name }) => {
  return (
    <div>
      <Header />
      <Navigation />
      <StaticContent content="about" />
      <Footer />
    </div>
  );
};

export default StaticContainer;
