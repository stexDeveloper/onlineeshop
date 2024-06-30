import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// router
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// redux
import store from "./store/store.js";
import { Provider } from "react-redux";

// pages
import HomePage from "./pages/HomePage.jsx";
import AppLayout from "./AppLayout.jsx";

// clerk
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

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
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <RouterProvider router={router} />
      </ClerkProvider>
    </Provider>
  </React.StrictMode>
);
