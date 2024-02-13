import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./main.css";
import { Root } from "./pages/Root.tsx";
import { Events } from "./pages/Events.tsx";
import { Home } from "./pages/Home.tsx";
import { EventDetail } from "./components/EventDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      { path: "/events", element: <Events /> },
      { path: "/", element: <Home /> },
      {
        path: "events/:id",
        element: <EventDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
