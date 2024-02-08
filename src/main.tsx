import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./main.css";
import { Root } from "./pages/Root.tsx";
import { Events } from "./pages/Events.tsx";
import { Home } from "./pages/Home.tsx";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      { path: "/events", element: <Events /> },
      { path: "/", element: <Home /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
    {/* <App /> */}
  </React.StrictMode>
);
