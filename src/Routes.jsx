import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopSeventyFive from "pages/DesktopSeventyFive";
import DesktopSeventyThree from "pages/DesktopSeventyThree";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopseventyfive",
      element: <DesktopSeventyFive />,
    },
    {
      path: "desktopseventythree",
      element: <DesktopSeventyThree />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
