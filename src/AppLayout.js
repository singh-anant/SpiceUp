import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, createBrowserRouter } from "react-router-dom";

import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: AppLayout,
    children: [{ path: "/", element: <BodyComponent /> }],
  },
]);

// Tell React that div is my root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
