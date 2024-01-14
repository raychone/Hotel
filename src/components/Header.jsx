import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// logo
import logoLight from "../assets/img/logoTextLight.png";
import logoDark from "../assets/img/logoTextDark.png";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  }, []);

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500 `}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row  lg:justify-between lg:gap-y-0">
        {/* logo */}
        <a href="/">
          {header ? (
            <img
              className=" w-[160px] h-[60px]"
              src={logoDark}
              alt="logo"
            />
          ) : (
            <img
              className=" w-[160px] h-[60px]"
              src={logoLight}
              alt="logo"
            />
          )}
        </a>
        {/* nav */}
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}
        >
          <a
            href="/"
            className="transition hover:text-accent"
          >
            Home
          </a>
          <a
            href="/"
            className="transition-all hover:text-accent"
          >
            Rooms
          </a>
          <a
            href="/"
            className="transition-all hover:text-accent"
          >
            Restaurant
          </a>
          <a
            href="/"
            className="transition-all hover:text-accent"
          >
            Spa
          </a>
          <a
            href="/"
            className="transition-all hover:text-accent"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
