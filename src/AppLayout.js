import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent";
import { Provider } from "react-redux";
import store from "../utils/store";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/", element: <BodyComponent /> },
      {
        path: "/about",
        errorElement: <ErrorComponent />,
        element: <AboutComponent />,
      },
      {
        path: "/contact",
        errorElement: <ErrorComponent />,
        element: <ContactComponent />,
      },
      {
        path: "restaurant/:id",
        errorElement: <ErrorComponent />,
        element: <RestaurantMenuComponent />,
      },
    ],
  },
]);

// Tell React that div is my root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
