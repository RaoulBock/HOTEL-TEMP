import React from "react";
import { Nav } from "../components/Nav/Nav";
import { useNavigate } from "react-router-dom";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import { Card } from "../components/Card/Card";
import { CARD_DATA } from "../context/Settings";

export const AboutScreen = () => {
  const nav = useNavigate();

  const MENU = [
    {
      name: "Home",
      onClick: () => nav("/"),
    },
    {
      name: "Rooms",
      onClick: () => nav("/rooms"),
    },
  ];

  return (
    <div className="screen-outline">
      <Nav data={MENU} />
      <Jumbotron
        title={"About my hotel"}
        description={
          "Culpa ullamco proident occaecat cillum culpa cillum esse est eu nisi. Anim aliquip magna esse ad velit. Aute exercitation Lorem aliqua occaecat exercitation esse ipsum do. Ullamco aliquip fugiat nostrud mollit dolor do magna minim. Deserunt eu occaecat eiusmod enim eu sint voluptate labore consectetur sunt tempor. Consequat Lorem enim laborum laboris et deserunt Lorem veniam reprehenderit laborum enim. Non mollit laborum est magna in."
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
          Veniam duis irure enim laborum eiusmod mollit nulla sit. Magna duis do
          ex sunt consectetur voluptate quis amet eu dolor eiusmod est ad.
          Deserunt esse esse nulla nisi dolore anim ea do amet Lorem commodo. Ut
          deserunt quis anim anim anim. Irure sit laborum nisi et fugiat cillum
          esse reprehenderit eiusmod eu occaecat non enim voluptate. Qui ullamco
          anim minim dolore anim dolore. Eiusmod et proident incididunt
          voluptate eiusmod ex Lorem consectetur do amet nostrud deserunt
          officia. Magna duis sint magna est aute ipsum adipisicing quis et
          laborum. Consequat aute laborum sunt qui pariatur esse irure amet
          officia. Ea laboris sint in aute cillum.
        </p>
      </div>
    </div>
  );
};
