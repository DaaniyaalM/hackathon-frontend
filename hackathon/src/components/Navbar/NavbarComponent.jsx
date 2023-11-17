import "./Navbar.scss";
import React from "react";

const Navbar = () => {
  const headerpic = {
    src: require("./ladyonlaptop.jpeg").default,
    alt: "header-pic",
    className: "headerPic",
  };

  const logo = {
    src: require("./shopify-logo.png").default,
    alt: "shopify-logo",
    className: "shopifyLogo",
  };

  return (
    <div>
      <nav>
        <img {...logo} />
      </nav>
      <header>
        <img {...headerpic} />
      </header>
    </div>
  );
};

export default Navbar;
