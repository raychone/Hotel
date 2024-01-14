import React, { createContext, useState, useEffect } from "react";

import { roomData } from "../data";
// create context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [total, setTotal] = useState(0);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]);

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setTimeout(() => {
      setRooms(newRooms);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        adults,
        setAdults,
        kids,
        setKids,
        handleClick,
        isLoading,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
