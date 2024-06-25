import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//router
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//pages
import HomePage from "./pages/HomePage.jsx";
import AppLayout from "./AppLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
