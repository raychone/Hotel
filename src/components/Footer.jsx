import React from "react";
// logo
import logoWhite from "../assets/img/logoTextLight.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
    <div className="container mx-auto text-white flex flex-col lg:flex-row justify-between items-center">
        {/* logo */}
        <a href="/">
          <img
            className=" w-[160px] h-[60px]"
            src={logoWhite}
            alt="logo"
          />
        </a>
        Copyright &copy; 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
