import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Master from "../src/Layouts/Master"; // Ensure this path and the export is correct
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import NavItem from "./components/NavItem/NavItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Master />,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/add-new-item",
        element:<NavItem></NavItem>,
      }
    ] // Use the correct case here
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
