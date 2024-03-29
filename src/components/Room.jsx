import React from "react";
// link
import { Link } from "react-router-dom";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

const Room = ({ room }) => {
  // destructuring room
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className=" bg-white shadow-2xl min-h-[500px] group">
      {/* image */}
      <div className="overflow-hidden">
        <img
          className="w-full group-hover:scale-110 transition-all duration-300 "
          src={image}
          alt={name}
        />
      </div>
      {/* details */}
      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center uppercase  items-center font-tertiary tracking-[1px] font-semibold text-base">
        <div className="flex justify-between w-[80%] ">
          {/* size */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsArrowsFullscreen className="text-[16px]" />
            </div>
            <div className="flex gap-x-1">
              <div>size</div>
              <div>{size}M2</div>
            </div>
          </div>
          {/* room capacity */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsPeople className="text-[18px]" />
            </div>
            <div className="flex gap-x-1">
              <div>Max People</div>
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>
      {/* name & description*/}
      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {description.slice(0, 56)}
        </p>
      </div>
      {/* btn */}
      <Link
        to={`/room/${id}`}
        className="btn btn-secondary btn-sm max-w-[240px] mx-auto"
      >
        Book now from
      </Link>
    </div>
  );
};

export default Room;
