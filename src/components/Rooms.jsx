import React, { useContext } from "react";

// import context
import { RoomContext } from "../context/RoomContext";
// components
import Room from "../components/Room";
// loader
import { SpinnerDotted } from "spinners-react";

const Rooms = () => {
  const { rooms, isLoading } = useContext(RoomContext);

  return (
    <section className="py-24">
      {/* overlay and spinner */}
      {isLoading && (
        <div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center">
          <SpinnerDotted color="white" />
        </div>
      )}
      <div className="container mx-auto lg:px-0">
        <div className="text-center">
          <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
            Imperial's Hotel & Spa
          </div>
          <h2 className="text-[45px] font-primary mb-4">Room & Suites</h2>
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {rooms.map((room) => {
            return (
              <Room
                key={room.id}
                room={room}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
