import {
  BsSearch,
  BsLink45Deg,
  BsWifi,
  BsBag,
  BsCarFront,
  BsCupHot,
  BsShop,
} from "react-icons/bs";
import { MdOutlinePool } from "react-icons/md";
import { LuDog } from "react-icons/lu";

export const APP_ICONS = {
  SEARCH: <BsSearch />,
  LINK: <BsLink45Deg />,
  WIFI: <BsWifi />,
  BAG: <BsBag />,
  CAR: <BsCarFront />,
  COFFEE: <BsCupHot />,
  SHOP: <BsShop />,
  POOL: <MdOutlinePool />,
  DOG: <LuDog />,
};

export const AVAILABLE_ROOMS = [
  {
    img: "https://img.freepik.com/premium-photo/retro-hotel-room-graphic-design-3d-model-background_176697-2290.jpg",
    name: "Executive Room",
    description:
      "Dolor proident enim do consequat enim. Cupidatat aliquip incididunt magna fugiat adipisicing ea.",
    price: 150,
  },
  {
    img: "https://img.freepik.com/premium-photo/luxury-hotel-room-suite_176697-2291.jpg",
    name: "Deluxe Suite",
    description:
      "Excepteur nulla exercitation nisi consequat eu non dolore. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    price: 200,
  },
  {
    img: "https://img.freepik.com/premium-photo/modern-hotel-room-interior_176697-2292.jpg",
    name: "Presidential Suite",
    description:
      "Sint excepteur cupidatat dolor sit velit. Eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 350,
  },
  {
    img: "https://img.freepik.com/premium-photo/hotel-room-interior-design_176697-2293.jpg",
    name: "Junior Suite",
    description:
      "Voluptate laboris tempor ut sint amet nostrud. Aliqua reprehenderit sint dolor pariatur mollit anim.",
    price: 180,
  },
  {
    img: "https://img.freepik.com/premium-photo/cozy-hotel-room-interior_176697-2294.jpg",
    name: "Standard Room",
    description:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    price: 120,
  },
  {
    img: "https://img.freepik.com/premium-photo/elegant-hotel-room-interior_176697-2295.jpg",
    name: "Superior Room",
    description:
      "Adipisicing elit, sed do eiusmod tempor incididunt ut labore. Magna aliqua ut enim ad minim veniam.",
    price: 170,
  },
  {
    img: "https://img.freepik.com/premium-photo/classic-hotel-room-design_176697-2296.jpg",
    name: "Single Room",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Ut enim ad minim veniam quis nostrud.",
    price: 100,
  },
  {
    img: "https://img.freepik.com/premium-photo/modern-luxury-hotel-room_176697-2297.jpg",
    name: "Double Room",
    description:
      "Amet consectetur adipiscing elit, sed do eiusmod tempor. Dolore magna aliqua ut enim ad minim veniam.",
    price: 140,
  },
  {
    img: "https://img.freepik.com/premium-photo/hotel-room-with-sea-view_176697-2298.jpg",
    name: "Ocean View Room",
    description:
      "Labore et dolore magna aliqua ut enim ad minim veniam. Duis aute irure dolor in reprehenderit.",
    price: 220,
  },
  {
    img: "https://img.freepik.com/premium-photo/spacious-hotel-room-design_176697-2299.jpg",
    name: "Family Room",
    description:
      "Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    price: 250,
  },
  {
    img: "https://img.freepik.com/premium-photo/modern-hotel-room-interior-design_176697-2300.jpg",
    name: "Penthouse Suite",
    description:
      "Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    price: 400,
  },
];

export const CARD_DATA = [
  {
    name: "Free WIFI",
    icon: APP_ICONS.WIFI,
  },
  {
    name: "Gift Shop",
    icon: APP_ICONS.SHOP,
  },
  {
    name: "Free Parking",
    icon: APP_ICONS.CAR,
  },
  {
    name: "Coffee Shop",
    icon: APP_ICONS.COFFEE,
  },
  {
    name: "Swimming Pool",
    icon: APP_ICONS.POOL,
  },
  {
    name: "Pets Allowed",
    icon: APP_ICONS.DOG,
  },
];
