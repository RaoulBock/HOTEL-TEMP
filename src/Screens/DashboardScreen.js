import React from "react";
import { Nav } from "../components/Nav/Nav";
import { APP_ICONS, AVAILABLE_ROOMS, CARD_DATA } from "../context/Settings";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import { Card } from "../components/Card/Card";
import { useNavigate } from "react-router-dom";

export const DashboardScreen = () => {
  const nav = useNavigate();

  const MENU = [
    {
      name: "Rooms",
      onClick: () => nav("/rooms"),
    },
    {
      name: "About / Location",
      onClick: () => nav("/about"),
    },
  ];

  const [showAll, setShowAll] = React.useState(false);

  const displayedRooms = showAll
    ? AVAILABLE_ROOMS
    : AVAILABLE_ROOMS.slice(0, 6);

  return (
    <div className="screen-outline">
      <Nav data={MENU} />
      <Jumbotron
        title={"Welcome to Pension New Nouvea Hotel."}
        description={
          "Sunt eu aliqua excepteur dolor laborum deserunt aute. Lorem commodo laboris quis qui occaecat laboris enim non. Velit Lorem magna proident amet minim officia magna dolor. Voluptate laborum consectetur dolor exercitation esse nulla excepteur enim cupidatat amet occaecat ullamco reprehenderit. Culpa occaecat cillum labore do in id nostrud nisi non duis est labore."
        }
      />
      <Card>
        {CARD_DATA.map((e, i) => {
          return (
            <div key={i} className="amenities-menu">
              <h3>{e.icon}</h3>
              <h5>{e.name}</h5>
            </div>
          );
        })}
      </Card>
      <div className="location">
        <h3>Where we are located</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.1848122667852!2d17.090722412814703!3d-22.62119928389275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1b134bff5a05%3A0x14a005e7cec75f26!2sPupkewitz%20Megabuild%20Lifestyle!5e0!3m2!1sen!2sna!4v1720602423004!5m2!1sen!2sna"
          width="400"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
      </div>
      <div className="about">
        <h3>About Pupkewitz Megabuild Lifestyle</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          libero sit amet justo iaculis aliquet. Donec rutrum, mauris vel
          dignissim placerat, sapien felis semper ex, at consectetur lectus
          velit in enim. Sed euismod est vel dui faucibus, vel fringilla mauris
          ullamcorper. Integer vel orci ac quam lobortis consectetur.
        </p>
      </div>
      <div className="about">
        <h3>Rooms</h3>
        <div className="about-grid">
          {displayedRooms.map((room, index) => (
            <div key={index} className="room">
              <img src={room.img} alt={room.name} />
              <h5>{room.name}</h5>
              <p>
                {room.description.length > 80
                  ? `${room.description.substring(0, 80)}...`
                  : room.description}
              </p>
            </div>
          ))}
          {AVAILABLE_ROOMS.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-primary"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
