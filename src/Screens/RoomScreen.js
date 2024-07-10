import React from "react";
import { Nav } from "../components/Nav/Nav";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import { useNavigate } from "react-router-dom";
import { AVAILABLE_ROOMS } from "../context/Settings";

export const RoomScreen = () => {
  const nav = useNavigate();
  const MENU = [
    {
      name: "Home",
      onClick: () => nav("/"),
    },
    {
      name: "About",
    },
    {
      name: "Locations",
    },
  ];

  return (
    <div className="screen-outline">
      <Nav data={MENU} />
      <Jumbotron
        title={"Available rooms"}
        description={
          "Culpa ullamco proident occaecat cillum culpa cillum esse est eu nisi. Anim aliquip magna esse ad velit. Aute exercitation Lorem aliqua occaecat exercitation esse ipsum do. Ullamco aliquip fugiat nostrud mollit dolor do magna minim. Deserunt eu occaecat eiusmod enim eu sint voluptate labore consectetur sunt tempor. Consequat Lorem enim laborum laboris et deserunt Lorem veniam reprehenderit laborum enim. Non mollit laborum est magna in."
        }
      />
      <div className="about">
        <h3>Rooms</h3>
        <div className="about-grid">
          {AVAILABLE_ROOMS.map((room, index) => {
            return (
              <div key={index} className="room">
                <img src={room.img} alt={room.name} />
                <h1>${room.price}.00</h1>
                <h5>{room.name}</h5>
                <p>
                  {room.description.length > 100
                    ? `${room.description.substring(0, 100)}...`
                    : room.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
