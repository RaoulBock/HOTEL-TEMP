import { AboutScreen } from "../Screens/AboutScreen";
import { DashboardScreen } from "../Screens/DashboardScreen";
import { NotFoundScreen } from "../Screens/NotFoundScreen";
import { RoomScreen } from "../Screens/RoomScreen";

export const ROUTERS = [
  {
    path: "/",
    element: <DashboardScreen />,
  },
  {
    path: "/rooms",
    element: <RoomScreen />,
  },
  {
    path: "/about",
    element: <AboutScreen />,
  },
  {
    path: "*",
    element: <NotFoundScreen />,
  },
];
