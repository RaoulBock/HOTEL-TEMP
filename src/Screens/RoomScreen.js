import React from "react";
import { Nav } from "../components/Nav/Nav";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import { useNavigate } from "react-router-dom";
import { APP_ICONS, AVAILABLE_ROOMS } from "../context/Settings";

export const RoomScreen = () => {
  const nav = useNavigate();
  const MENU = [
    {
      name: "Home",
      onClick: () => nav("/"),
    },
    {
      name: "About / Location",
      onClick: () => nav("/about"),
    },
  ];

  const [searchText, setSearchText] = React.useState("");

  const filteredRooms = AVAILABLE_ROOMS.filter((room) => {
    // Filter by description
    const descriptionMatch = room.description
      .toLowerCase()
      .includes(searchText.toLowerCase());

    // Filter by price (assuming the input includes a price range)
    // Splitting searchText to get price range values
    const priceMatch = searchText.includes(".")
      ? parseInt(searchText.split(".")[0]) <= room.price &&
        parseInt(searchText.split(".")[1]) >= room.price
      : parseInt(searchText) <= room.price;

    return descriptionMatch || priceMatch;
  });

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
        <div className="input-outline">
          <h4>{APP_ICONS.SEARCH}</h4>
          <input
            placeholder="Location, Description, Price"
            className="search-input"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="about-grid">
          {filteredRooms.map((room, index) => {
            return (
              <div key={index} className="room">
                <img src={room.img} alt={room.name} />
                <div>
                  <h1>${room.price}.00</h1>
                  <h5>{room.name}</h5>
                  <p>
                    {room.description.length > 80
                      ? `${room.description.substring(0, 80)}...`
                      : room.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
