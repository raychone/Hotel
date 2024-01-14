import React from "react";
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from "react-icons/fa";

const facilities = [
  { name: "Wifi", icon: <FaWifi /> },
  { name: "Coffee", icon: <FaCoffee /> },
  { name: "Bath", icon: <FaBath /> },
  { name: "Parking Space", icon: <FaParking /> },
  { name: "Swimming Pool", icon: <FaSwimmingPool /> },
  { name: "Breakfast", icon: <FaHotdog /> },
  { name: "GYM", icon: <FaStopwatch /> },
  { name: "Drinks", icon: <FaCocktail /> },
];

const Facilities = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-12">
      {facilities.map((facility, index) => (
        <div
          key={index}
          className="flex items-center gap-x-3 flex-1"
        >
          <div className="text-3xl text-accent">{facility.icon}</div>
          <div className="text-base">{facility.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
